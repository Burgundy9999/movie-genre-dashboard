# Movies, genres & changing tastes

An interactive D3.js dashboard built for an Information Visualization assignment.

## Run the dashboard
1. Download and unzip this folder.
2. Open `index.html` in Google Chrome, Microsoft Edge, or Firefox.
3. `index.html` is self-contained with respect to the project CSS, data, and visualization code, so it can be opened on its own. The separate `style.css`, `data.js`, and `script.js` files are included for code review and editing.
4. An internet connection is required to load D3 v7 from `https://d3js.org/d3.v7.min.js`.
5. No installation or local server is required. **An internet connection is still required for the external D3 library.**

## Interactions
- Click a movie point in View 01, a genre in View 02, or a colored line/point in View 03 to highlight its genre across all views.
- Click the same genre again to clear the selection.
- Hover data marks for details. Cross-view updates use animated transitions.

## Source files
- `index.html` — directly runnable dashboard with embedded CSS, data and visualization code
- `style.css` — layout and styling
- `data.js` — embedded selected film records, allowing direct local opening
- `script.js` — D3 data transformations, visual encodings, linked highlighting and transitions
- `movies_clean.csv` — accompanying cleaned dataset
- `clean.py` — Python/pandas data-cleaning script used to prepare the cleaned CSV

## Data cleaning and reproducibility

The project includes `clean.py`, the Python data-cleaning script used to generate `movies_clean.csv` from the original `rotten_tomatoes_top_movies.csv` dataset.

The script:
1. Retains the seven source columns needed for analysis: `title`, `year`, `type`, `critic_score`, `people_score`, `total_ratings`, and `box_office_(gross_usa)`.
2. Converts year and score columns to numeric values, treating invalid entries as missing.
3. Converts U.S. box-office strings (including `$`, commas, and `K`/`M`/`B` suffixes) into numeric dollar amounts.
4. Removes the trailing `Verified` label from `total_ratings` and standardizes `Fewer than 50` to `<50`, while retaining rating ranges as text.
5. Preserves the original genre (`type`) labels, retains missing values in nonessential columns, and removes only records missing a title or year.
6. Exports the cleaned CSV without a DataFrame index and prints a data-type and missing-value summary for verification.

To reproduce the cleaning step, install Python 3 and pandas, place the original Kaggle CSV named `rotten_tomatoes_top_movies.csv` in the same directory as `clean.py`, then run:

```bash
pip install pandas
python clean.py
```

The original uncleaned Kaggle CSV is included in this submission; the cleaned CSV is already included, so **running the cleaning script is not required to open the dashboard**. The interactive dashboard uses a selected seven-genre subset embedded in `data.js`.

## Data and interpretation
The dashboard analyzes a selected sample of 700 films (100 per genre) in seven genres. It is not a representative sample of all releases. Decade-level genre means may be based on small samples; hover points to see the count. U.S. box-office averages use reported values only; 2020s data are incomplete.

Dataset: https://www.kaggle.com/datasets/thedevastator/rotten-tomatoes-top-movies-ratings-and-technical

## Publishing on GitHub Pages
Upload the files at the root of a public GitHub repository. Under Settings → Pages, select Deploy from a branch, `main`, `/ (root)`. The published page will load `index.html`.

## Dashboard text hierarchy
The on-screen annotations were shortened to keep the charts prominent. Insight-driven chart titles, the shared genre legend, essential mark keys, and methodological cautions remain; extended implementation details belong in this README and the source code.

## AI Assistance and References

### AI Assistance

ChatGPT (OpenAI) was used to assist with the development and refinement of this D3.js dashboard, including:

- Generating and organizing HTML, CSS, and JavaScript code.
- Implementing D3.js visualizations, interactive highlighting, tooltips, and transitions.
- Refining the dashboard layout, visual styling, and code documentation.
- Assisting with debugging and troubleshooting.

But I mdke all design decisions myself. The dashboard's research questions, dataset selection, visual design decisions, and final revisions were guided by the project requirements and my own evaluation.
And I understand every line of code my submit and has been prepared to explain it.

