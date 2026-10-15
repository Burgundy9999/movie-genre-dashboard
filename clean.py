from pathlib import Path
import pandas as pd

# Set the input and output file paths.
INPUT_FILE = Path("rotten_tomatoes_top_movies.csv")
OUTPUT_FILE = Path("movies_clean.csv")

# Load the original dataset.
df = pd.read_csv(INPUT_FILE)

# Keep only the seven columns needed for the dashboard.
columns_to_keep = [
    "title",
    "year",
    "type",
    "critic_score",
    "people_score",
    "box_office_(gross_usa)",
]
df = df[columns_to_keep].copy()

# Convert year and rating scores to numeric values.
# Invalid values become missing values (NaN).
for column in ["year", "critic_score", "people_score"]:
    df[column] = pd.to_numeric(df[column], errors="coerce")

# Convert box-office strings such as '$700.2M' into numeric US dollars.
def parse_box_office(value):
    if pd.isna(value):
        return float("nan")

    text = str(value).strip().replace("$", "").replace(",", "")
    if not text or text.lower() in {"nan", "n/a", "na", "unknown", "--"}:
        return float("nan")

    multiplier = 1
    suffix = text[-1:].upper()

    if suffix == "B":
        multiplier = 1_000_000_000
        text = text[:-1]
    elif suffix == "M":
        multiplier = 1_000_000
        text = text[:-1]
    elif suffix == "K":
        multiplier = 1_000
        text = text[:-1]

    try:
        return float(text) * multiplier
    except ValueError:
        return float("nan")

df["box_office_(gross_usa)"] = pd.to_numeric(
    df["box_office_(gross_usa)"].apply(parse_box_office),
    errors="coerce"
)

# Remove the metadata suffix "Verified" from total_ratings labels.
# Keep rating-count ranges as text because values like '2,500+' are not exact counts.
df["total_ratings"] = (
    df["total_ratings"]
    .astype("string")
    .str.replace(r"\s+Verified$", "", regex=True)
    .str.strip()
    .replace({"Fewer than 50": "<50"})
)

# Keep the original type labels unchanged.
# Keep rows with missing values; exclude missing values only when a chart requires them.
# Remove rows only when the title or year is missing.
df = df.dropna(subset=["title", "year"])
df["year"] = df["year"].astype("int64")

# Save the cleaned dataset without adding a DataFrame index column.
OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
df.to_csv(OUTPUT_FILE, index=False)

# Print data types and missing-value counts to verify the cleaning results.
print("Cleaned shape:", df.shape)
print("\\nData types:")
print(df.dtypes)
print("\\nMissing values by column:")
print(df.isna().sum())
print(f"\\nCleaned CSV saved to: {OUTPUT_FILE.resolve()}")
