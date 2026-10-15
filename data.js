
// Embedded film data: 700 selected movies from the cleaned Rotten Tomatoes dataset.
// Kept in a separate file so the visualization logic stays readable.
const raw = [
  {
    "title": "Black Panther",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 79.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 700200000.0
  },
  {
    "title": "Avengers: Endgame",
    "year": 2019,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 90.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 858400000.0
  },
  {
    "title": "Mission: Impossible -- Fallout",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 220100000.0
  },
  {
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 86.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 153600000.0
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 190200000.0
  },
  {
    "title": "Wonder Woman",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 93,
    "people_score": 83.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 412800000.0
  },
  {
    "title": "Dunkirk",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 92,
    "people_score": 81.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 188000000.0
  },
  {
    "title": "Coco",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 210500000.0
  },
  {
    "title": "Thor: Ragnarok",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 93,
    "people_score": 87.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 315000000.0
  },
  {
    "title": "Logan",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 93,
    "people_score": 90.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 226300000.0
  },
  {
    "title": "Star Wars: The Last Jedi",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 42.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 620200000.0
  },
  {
    "title": "Star Wars: The Force Awakens",
    "year": 2015,
    "type": "Action & Adventure",
    "critic_score": 93,
    "people_score": 86.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 123.0
  },
  {
    "title": "The Adventures of Robin Hood",
    "year": 1938,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 89.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "King Kong",
    "year": 1933,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Spider-Man: Far From Home",
    "year": 2019,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 95.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 390700000.0
  },
  {
    "title": "Incredibles 2",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 93,
    "people_score": 84.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 608600000.0
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 92.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "War for the Planet of the Apes",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 84.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 146800000.0
  },
  {
    "title": "Spider-Man: Homecoming",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 92,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 334400000.0
  },
  {
    "title": "Baby Driver",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 92,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 107800000.0
  },
  {
    "title": "Seven Samurai",
    "year": 1954,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 97.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 271700.0
  },
  {
    "title": "Metropolis",
    "year": 1927,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 92.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 1200000.0
  },
  {
    "title": "Jaws",
    "year": 1975,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 260900000.0
  },
  {
    "title": "Up",
    "year": 2009,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Shazam!",
    "year": 2019,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 82.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 140400000.0
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 2000000.0
  },
  {
    "title": "The Treasure of the Sierra Madre",
    "year": 1948,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Blade Runner 2049",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 88,
    "people_score": 81.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 91500000.0
  },
  {
    "title": "The 39 Steps",
    "year": 1935,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 86.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Captain America: Civil War",
    "year": 2016,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 89.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 408100000.0
  },
  {
    "title": "The Jungle Book",
    "year": 2016,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 364000000.0
  },
  {
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "year": 2011,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 381000000.0
  },
  {
    "title": "Skyfall",
    "year": 2012,
    "type": "Action & Adventure",
    "critic_score": 92,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 304400000.0
  },
  {
    "title": "Lawrence of Arabia",
    "year": 1962,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 6000000.0
  },
  {
    "title": "Mission: Impossible Rogue Nation",
    "year": 2015,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 87.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Apocalypse Now",
    "year": 1979,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 78800000.0
  },
  {
    "title": "The Hurt Locker",
    "year": 2008,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 84.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 15700000.0
  },
  {
    "title": "The LEGO Movie",
    "year": 2014,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 257800000.0
  },
  {
    "title": "Star Trek",
    "year": 2009,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 91.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 257700000.0
  },
  {
    "title": "Moana",
    "year": 2016,
    "type": "Action & Adventure",
    "critic_score": 95,
    "people_score": 89.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 248800000.0
  },
  {
    "title": "Avengers: Infinity War",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 85,
    "people_score": 91.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 678800000.0
  },
  {
    "title": "Ant-Man and The Wasp",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 87,
    "people_score": 75.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 216600000.0
  },
  {
    "title": "Star Wars",
    "year": 1977,
    "type": "Action & Adventure",
    "critic_score": 92,
    "people_score": 96.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 345.0
  },
  {
    "title": "Isle of Dogs",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 31900000.0
  },
  {
    "title": "Stagecoach",
    "year": 1939,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 86.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Goldfinger",
    "year": 1964,
    "type": "Action & Adventure",
    "critic_score": 99,
    "people_score": 89.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Guardians of the Galaxy",
    "year": 2014,
    "type": "Action & Adventure",
    "critic_score": 92,
    "people_score": 92.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 333700000.0
  },
  {
    "title": "Kubo and the Two Strings",
    "year": 2016,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 86.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 48000000.0
  },
  {
    "title": "WALL-E",
    "year": 2008,
    "type": "Action & Adventure",
    "critic_score": 95,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Marvel's the Avengers",
    "year": 2012,
    "type": "Action & Adventure",
    "critic_score": 91,
    "people_score": 91.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Iron Man",
    "year": 2008,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 91.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 318300000.0
  },
  {
    "title": "The Terminator",
    "year": 1984,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The African Queen",
    "year": 1951,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 86.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Rio Bravo",
    "year": 1959,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 91.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Hunt for the Wilderpeople",
    "year": 2016,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 91.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 5200000.0
  },
  {
    "title": "The French Connection",
    "year": 1971,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 87.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Taking of Pelham One Two Three",
    "year": 1974,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "John Wick: Chapter 3 -- Parabellum",
    "year": 2019,
    "type": "Action & Adventure",
    "critic_score": 89,
    "people_score": 86.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 171000000.0
  },
  {
    "title": "Doctor Strange",
    "year": 2016,
    "type": "Action & Adventure",
    "critic_score": 89,
    "people_score": 85.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 232600000.0
  },
  {
    "title": "Aliens",
    "year": 1986,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 77600000.0
  },
  {
    "title": "The Empire Strikes Back",
    "year": 1980,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 97.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 291900000.0
  },
  {
    "title": "Paths of Glory",
    "year": 1957,
    "type": "Action & Adventure",
    "critic_score": 95,
    "people_score": 95.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "True Grit",
    "year": 2010,
    "type": "Action & Adventure",
    "critic_score": 95,
    "people_score": 85.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 171000000.0
  },
  {
    "title": "X-Men: Days of Future Past",
    "year": 2014,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 91.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 233900000.0
  },
  {
    "title": "The Bridge on the River Kwai",
    "year": 1957,
    "type": "Action & Adventure",
    "critic_score": 95,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Badlands",
    "year": 1973,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 90.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Gun Crazy",
    "year": 1950,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 84.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "All Is Lost",
    "year": 2013,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 63.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 6300000.0
  },
  {
    "title": "The LEGO Batman Movie",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 80.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 175700000.0
  },
  {
    "title": "The Princess Bride",
    "year": 1987,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 26900000.0
  },
  {
    "title": "Looper",
    "year": 2012,
    "type": "Action & Adventure",
    "critic_score": 93,
    "people_score": 82.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 66300000.0
  },
  {
    "title": "Chicken Run",
    "year": 2000,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 65.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Stalker",
    "year": 1979,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 258400.0
  },
  {
    "title": "Casino Royale",
    "year": 2006,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 167000000.0
  },
  {
    "title": "Guardians of the Galaxy Vol. 2",
    "year": 2017,
    "type": "Action & Adventure",
    "critic_score": 85,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 389800000.0
  },
  {
    "title": "The Peanut Butter Falcon",
    "year": 2019,
    "type": "Action & Adventure",
    "critic_score": 94,
    "people_score": 96.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 20500000.0
  },
  {
    "title": "No Country for Old Men",
    "year": 2007,
    "type": "Action & Adventure",
    "critic_score": 93,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 74300000.0
  },
  {
    "title": "Dawn of the Planet of the Apes",
    "year": 2014,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 88.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 208500000.0
  },
  {
    "title": "Captain Marvel",
    "year": 2019,
    "type": "Action & Adventure",
    "critic_score": 79,
    "people_score": 45.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 426800000.0
  },
  {
    "title": "Onward",
    "year": 2020,
    "type": "Action & Adventure",
    "critic_score": 88,
    "people_score": 95.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 60400000.0
  },
  {
    "title": "Sicario",
    "year": 2015,
    "type": "Action & Adventure",
    "critic_score": 92,
    "people_score": 85.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 46900000.0
  },
  {
    "title": "Ghostbusters",
    "year": 1984,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 88.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 298200000.0
  },
  {
    "title": "Ran",
    "year": 1985,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 95.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 454000.0
  },
  {
    "title": "A Fistful of Dollars",
    "year": 1964,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 91.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Henry V",
    "year": 1989,
    "type": "Action & Adventure",
    "critic_score": 100,
    "people_score": 89.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 10200000.0
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002,
    "type": "Action & Adventure",
    "critic_score": 95,
    "people_score": 95.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 342600000.0
  },
  {
    "title": "Captain America: The Winter Soldier",
    "year": 2014,
    "type": "Action & Adventure",
    "critic_score": 90,
    "people_score": 92.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 259700000.0
  },
  {
    "title": "Back to the Future",
    "year": 1985,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 247000.0
  },
  {
    "title": "Assault on Precinct 13",
    "year": 1976,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 80.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Searchers",
    "year": 1956,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 88.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Deadpool 2",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 84,
    "people_score": 85.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 324300000.0
  },
  {
    "title": "Aguirre: The Wrath of God",
    "year": 1972,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 91.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Crouching Tiger, Hidden Dragon",
    "year": 2000,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 128100000.0
  },
  {
    "title": "The Fugitive",
    "year": 1993,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 183800000.0
  },
  {
    "title": "Apollo 13",
    "year": 1995,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 173800000.0
  },
  {
    "title": "The Lion King",
    "year": 1994,
    "type": "Action & Adventure",
    "critic_score": 93,
    "people_score": 93.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 422800000.0
  },
  {
    "title": "Bullitt",
    "year": 1968,
    "type": "Action & Adventure",
    "critic_score": 98,
    "people_score": 85.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Catch Me if You Can",
    "year": 2002,
    "type": "Action & Adventure",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 164400000.0
  },
  {
    "title": "Annihilation",
    "year": 2018,
    "type": "Action & Adventure",
    "critic_score": 88,
    "people_score": 66.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 32700000.000000004
  },
  {
    "title": "Who Framed Roger Rabbit",
    "year": 1988,
    "type": "Action & Adventure",
    "critic_score": 97,
    "people_score": 84.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 152800000.0
  },
  {
    "title": "Toy Story 4",
    "year": 2019,
    "type": "Animation",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 434000000.0
  },
  {
    "title": "Spider-Man: Into the Spider-Verse",
    "year": 2018,
    "type": "Animation",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 190200000.0
  },
  {
    "title": "Inside Out",
    "year": 2015,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 89.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 2000000.0
  },
  {
    "title": "Coco",
    "year": 2017,
    "type": "Animation",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 210500000.0
  },
  {
    "title": "Snow White and the Seven Dwarfs",
    "year": 1937,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 78.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Paddington 2",
    "year": 2017,
    "type": "Animation",
    "critic_score": 100,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 38400000.0
  },
  {
    "title": "Incredibles 2",
    "year": 2018,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 84.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 608600000.0
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 92.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Up",
    "year": 2009,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 415000000.0
  },
  {
    "title": "Toy Story 2",
    "year": 1999,
    "type": "Animation",
    "critic_score": 100,
    "people_score": 87.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 245900000.0
  },
  {
    "title": "Pinocchio",
    "year": 1940,
    "type": "Animation",
    "critic_score": 100,
    "people_score": 73.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 18700000.0
  },
  {
    "title": "Finding Dory",
    "year": 2016,
    "type": "Animation",
    "critic_score": 94,
    "people_score": 84.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 486200000.0
  },
  {
    "title": "Finding Nemo",
    "year": 2003,
    "type": "Animation",
    "critic_score": 99,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The LEGO Movie",
    "year": 2014,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 257800000.0
  },
  {
    "title": "Moana",
    "year": 2016,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 89.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 248800000.0
  },
  {
    "title": "Toy Story",
    "year": 1995,
    "type": "Animation",
    "critic_score": 100,
    "people_score": 92.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 31300000.0
  },
  {
    "title": "Isle of Dogs",
    "year": 2018,
    "type": "Animation",
    "critic_score": 90,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 31900000.0
  },
  {
    "title": "Kubo and the Two Strings",
    "year": 2016,
    "type": "Animation",
    "critic_score": 97,
    "people_score": 86.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 48000000.0
  },
  {
    "title": "How to Train Your Dragon",
    "year": 2010,
    "type": "Animation",
    "critic_score": 99,
    "people_score": 91.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 217400000.0
  },
  {
    "title": "Shaun the Sheep Movie",
    "year": 2015,
    "type": "Animation",
    "critic_score": 99,
    "people_score": 81.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 19400000.0
  },
  {
    "title": "WALL-E",
    "year": 2008,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Dumbo",
    "year": 1941,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 70.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Ratatouille",
    "year": 2007,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 206400000.0
  },
  {
    "title": "My Life as a Zucchini",
    "year": 2016,
    "type": "Animation",
    "critic_score": 99,
    "people_score": 89.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 292300.0
  },
  {
    "title": "The Incredibles",
    "year": 2004,
    "type": "Animation",
    "critic_score": 97,
    "people_score": 75.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 261400000.0
  },
  {
    "title": "Only Yesterday",
    "year": 1991,
    "type": "Animation",
    "critic_score": 100,
    "people_score": 85.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The LEGO Batman Movie",
    "year": 2017,
    "type": "Animation",
    "critic_score": 90,
    "people_score": 80.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 175700000.0
  },
  {
    "title": "One Hundred and One Dalmatians",
    "year": 1961,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 76.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 91300000.0
  },
  {
    "title": "Beauty and the Beast",
    "year": 1991,
    "type": "Animation",
    "critic_score": 94,
    "people_score": 92.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 219000000.0
  },
  {
    "title": "Chicken Run",
    "year": 2000,
    "type": "Animation",
    "critic_score": 97,
    "people_score": 65.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Onward",
    "year": 2020,
    "type": "Animation",
    "critic_score": 88,
    "people_score": 95.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 60400000.0
  },
  {
    "title": "The Nightmare Before Christmas",
    "year": 1993,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 91.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 2400000.0
  },
  {
    "title": "Anomalisa",
    "year": 2015,
    "type": "Animation",
    "critic_score": 92,
    "people_score": 71.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 3400000.0
  },
  {
    "title": "Monsters, Inc.",
    "year": 2001,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 494000.0
  },
  {
    "title": "Grave of the Fireflies",
    "year": 1988,
    "type": "Animation",
    "critic_score": 100,
    "people_score": 95.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Fantasia",
    "year": 1940,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 83.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 24800000.0
  },
  {
    "title": "Your Name",
    "year": 2016,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Spirited Away",
    "year": 2001,
    "type": "Animation",
    "critic_score": 97,
    "people_score": 96.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 10000000.0
  },
  {
    "title": "The Iron Giant",
    "year": 1999,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Song of the Sea",
    "year": 2014,
    "type": "Animation",
    "critic_score": 99,
    "people_score": 92.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 850000.0
  },
  {
    "title": "Tower",
    "year": 2016,
    "type": "Animation",
    "critic_score": 99,
    "people_score": 89.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 84300.0
  },
  {
    "title": "The Lion King",
    "year": 1994,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 93.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 422800000.0
  },
  {
    "title": "Who Framed Roger Rabbit",
    "year": 1988,
    "type": "Animation",
    "critic_score": 97,
    "people_score": 84.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 152800000.0
  },
  {
    "title": "Waltz With Bashir",
    "year": 2008,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 91.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 2300000.0
  },
  {
    "title": "How to Train Your Dragon: The Hidden World",
    "year": 2019,
    "type": "Animation",
    "critic_score": 90,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 160800000.0
  },
  {
    "title": "Persepolis",
    "year": 2007,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 92.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 4400000.0
  },
  {
    "title": "Wallace & Gromit: The Curse of the Were-Rabbit",
    "year": 2005,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 79.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Yellow Submarine",
    "year": 1968,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 84.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 992300.0
  },
  {
    "title": "Fantastic Mr. Fox",
    "year": 2009,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 85.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 21000000.0
  },
  {
    "title": "Kiki's Delivery Service",
    "year": 1989,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Ernest & Célestine",
    "year": 2014,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Aladdin",
    "year": 1992,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 92.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 217000000.0
  },
  {
    "title": "The Secret World of Arrietty",
    "year": 2010,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 85.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Frozen",
    "year": 2013,
    "type": "Animation",
    "critic_score": 90,
    "people_score": 85.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 401000000.0
  },
  {
    "title": "Ralph Breaks the Internet",
    "year": 2018,
    "type": "Animation",
    "critic_score": 88,
    "people_score": 65.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 201100000.0
  },
  {
    "title": "The Red Turtle",
    "year": 2016,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 81.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 920100.0
  },
  {
    "title": "Long Way North",
    "year": 2015,
    "type": "Animation",
    "critic_score": 98,
    "people_score": 76.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "How to Train Your Dragon 2",
    "year": 2014,
    "type": "Animation",
    "critic_score": 92,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 177000000.0
  },
  {
    "title": "Coraline",
    "year": 2009,
    "type": "Animation",
    "critic_score": 90,
    "people_score": 73.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 75300000.0
  },
  {
    "title": "Ghost in the Shell",
    "year": 1996,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Breadwinner",
    "year": 2017,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 87.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 302900.0
  },
  {
    "title": "I Lost My Body",
    "year": 2019,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 83.0,
    "total_ratings": "500+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "A Shaun the Sheep Movie: Farmageddon",
    "year": 2019,
    "type": "Animation",
    "critic_score": 96,
    "people_score": 80.0,
    "total_ratings": "250+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Little Mermaid",
    "year": 1989,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 88.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 109900000.0
  },
  {
    "title": "Lady and the Tramp",
    "year": 1955,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 80.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Triplets of Belleville",
    "year": 2003,
    "type": "Animation",
    "critic_score": 94,
    "people_score": 90.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 7000000.0
  },
  {
    "title": "Big Hero 6",
    "year": 2014,
    "type": "Animation",
    "critic_score": 89,
    "people_score": 91.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 222500000.0
  },
  {
    "title": "My Neighbor Totoro",
    "year": 1988,
    "type": "Animation",
    "critic_score": 94,
    "people_score": 94.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Princess Mononoke",
    "year": 1997,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 94.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Bambi",
    "year": 1942,
    "type": "Animation",
    "critic_score": 90,
    "people_score": 73.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 38100000.0
  },
  {
    "title": "Arthur Christmas",
    "year": 2011,
    "type": "Animation",
    "critic_score": 92,
    "people_score": 76.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 46400000.0
  },
  {
    "title": "Antz",
    "year": 1998,
    "type": "Animation",
    "critic_score": 92,
    "people_score": 52.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 90700000.0
  },
  {
    "title": "The LEGO Movie 2: The Second Part",
    "year": 2019,
    "type": "Animation",
    "critic_score": 84,
    "people_score": 68.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 105800000.0
  },
  {
    "title": "A Bug's Life",
    "year": 1998,
    "type": "Animation",
    "critic_score": 92,
    "people_score": 73.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 162800000.0
  },
  {
    "title": "Mary and Max",
    "year": 2009,
    "type": "Animation",
    "critic_score": 95,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Ponyo",
    "year": 2008,
    "type": "Animation",
    "critic_score": 91,
    "people_score": 83.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 15100000.0
  },
  {
    "title": "Klaus",
    "year": 2019,
    "type": "Animation",
    "critic_score": 94,
    "people_score": 96.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Teen Titans GO! to the Movies",
    "year": 2018,
    "type": "Animation",
    "critic_score": 91,
    "people_score": 71.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 29600000.0
  },
  {
    "title": "Bolt",
    "year": 2008,
    "type": "Animation",
    "critic_score": 89,
    "people_score": 74.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 114100000.0
  },
  {
    "title": "Tangled",
    "year": 2010,
    "type": "Animation",
    "critic_score": 89,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 200800000.0
  },
  {
    "title": "Shrek 2",
    "year": 2004,
    "type": "Animation",
    "critic_score": 89,
    "people_score": 69.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 436500000.0
  },
  {
    "title": "ParaNorman",
    "year": 2012,
    "type": "Animation",
    "critic_score": 89,
    "people_score": 72.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Frankenweenie",
    "year": 2012,
    "type": "Animation",
    "critic_score": 87,
    "people_score": 70.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "James and the Giant Peach",
    "year": 1996,
    "type": "Animation",
    "critic_score": 91,
    "people_score": 66.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 28900000.0
  },
  {
    "title": "Rango",
    "year": 2011,
    "type": "Animation",
    "critic_score": 88,
    "people_score": 69.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Shrek",
    "year": 2001,
    "type": "Animation",
    "critic_score": 88,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 267700000.0
  },
  {
    "title": "Missing Link",
    "year": 2019,
    "type": "Animation",
    "critic_score": 88,
    "people_score": 67.0,
    "total_ratings": "500+",
    "box_office_(gross_usa)": 16600000.000000002
  },
  {
    "title": "The Wind Rises",
    "year": 2013,
    "type": "Animation",
    "critic_score": 88,
    "people_score": 85.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Winnie the Pooh",
    "year": 2011,
    "type": "Animation",
    "critic_score": 91,
    "people_score": 80.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Simpsons Movie",
    "year": 2007,
    "type": "Animation",
    "critic_score": 87,
    "people_score": 77.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 183100000.0
  },
  {
    "title": "Boy and the World",
    "year": 2013,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 76.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 47600.0
  },
  {
    "title": "The Peanuts Movie",
    "year": 2015,
    "type": "Animation",
    "critic_score": 87,
    "people_score": 76.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 130100000.0
  },
  {
    "title": "Millennium Actress",
    "year": 2001,
    "type": "Animation",
    "critic_score": 93,
    "people_score": 90.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 37300.0
  },
  {
    "title": "When Marnie Was There",
    "year": 2014,
    "type": "Animation",
    "critic_score": 91,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 314300.0
  },
  {
    "title": "Kung Fu Panda",
    "year": 2008,
    "type": "Animation",
    "critic_score": 87,
    "people_score": 83.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 143500000.0
  },
  {
    "title": "Sleeping Beauty",
    "year": 1959,
    "type": "Animation",
    "critic_score": 89,
    "people_score": 80.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 11600000.0
  },
  {
    "title": "Wreck-It Ralph",
    "year": 2012,
    "type": "Animation",
    "critic_score": 87,
    "people_score": 86.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 189400000.0
  },
  {
    "title": "Kung Fu Panda 3",
    "year": 2016,
    "type": "Animation",
    "critic_score": 87,
    "people_score": 78.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 143500000.0
  },
  {
    "title": "The Illusionist",
    "year": 2010,
    "type": "Animation",
    "critic_score": 90,
    "people_score": 79.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 2200000.0
  },
  {
    "title": "It Happened One Night",
    "year": 1934,
    "type": "Comedy",
    "critic_score": 99,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Toy Story 4",
    "year": 2019,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 434000000.0
  },
  {
    "title": "Lady Bird",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 99,
    "people_score": 79.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 48900000.0
  },
  {
    "title": "BlacKkKlansman",
    "year": 2018,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 83.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 48600000.0
  },
  {
    "title": "Modern Times",
    "year": 1936,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 95.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 163200.0
  },
  {
    "title": "Eighth Grade",
    "year": 2018,
    "type": "Comedy",
    "critic_score": 99,
    "people_score": 82.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 13500000.0
  },
  {
    "title": "Booksmart",
    "year": 2019,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 77.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 22700000.0
  },
  {
    "title": "Coco",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 210500000.0
  },
  {
    "title": "A Night at the Opera",
    "year": 1935,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 91.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Farewell",
    "year": 2019,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 87.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 17700000.0
  },
  {
    "title": "Singin' in the Rain",
    "year": 1952,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 95.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 23900.0
  },
  {
    "title": "The Big Sick",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 88.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 42900000.0
  },
  {
    "title": "The Kid",
    "year": 1921,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 95.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Paddington 2",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 38400000.0
  },
  {
    "title": "Once Upon a Time... In Hollywood",
    "year": 2019,
    "type": "Comedy",
    "critic_score": 85,
    "people_score": 70.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 142400000.0
  },
  {
    "title": "Zootopia",
    "year": 2016,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 92.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "A Hard Day's Night",
    "year": 1964,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 89.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "La La Land",
    "year": 2016,
    "type": "Comedy",
    "critic_score": 90,
    "people_score": 81.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 151100000.0
  },
  {
    "title": "Top Hat",
    "year": 1935,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 91.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Philadelphia Story",
    "year": 1940,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Up",
    "year": 2009,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Toy Story 3",
    "year": 2010,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 415000000.0
  },
  {
    "title": "Toy Story 2",
    "year": 1999,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 87.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 245900000.0
  },
  {
    "title": "Three Billboards Outside Ebbing, Missouri",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 90,
    "people_score": 87.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 54100000.0
  },
  {
    "title": "The Lady Eve",
    "year": 1941,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Dr. Strangelove Or: How I Learned to Stop Worrying and Love the Bomb",
    "year": 1964,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Finding Nemo",
    "year": 2003,
    "type": "Comedy",
    "critic_score": 99,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Thin Man",
    "year": 1934,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Kind Hearts and Coronets",
    "year": 1949,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 94.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 35900.0
  },
  {
    "title": "Crazy Rich Asians",
    "year": 2018,
    "type": "Comedy",
    "critic_score": 91,
    "people_score": 76.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 174500000.0
  },
  {
    "title": "His Girl Friday",
    "year": 1940,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Gold Rush",
    "year": 1925,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Paterson",
    "year": 2016,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 72.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 2100000.0
  },
  {
    "title": "The LEGO Movie",
    "year": 2014,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 257800000.0
  },
  {
    "title": "Sorry to Bother You",
    "year": 2018,
    "type": "Comedy",
    "critic_score": 93,
    "people_score": 70.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 17500000.0
  },
  {
    "title": "Ant-Man and The Wasp",
    "year": 2018,
    "type": "Comedy",
    "critic_score": 87,
    "people_score": 75.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 216600000.0
  },
  {
    "title": "The Disaster Artist",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 91,
    "people_score": 85.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 21100000.0
  },
  {
    "title": "Toy Story",
    "year": 1995,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 92.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 31300000.0
  },
  {
    "title": "Isle of Dogs",
    "year": 2018,
    "type": "Comedy",
    "critic_score": 90,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 31900000.0
  },
  {
    "title": "Birdman or (The Unexpected Virtue of Ignorance)",
    "year": 2014,
    "type": "Comedy",
    "critic_score": 91,
    "people_score": 77.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 42300000.0
  },
  {
    "title": "Monty Python and the Holy Grail",
    "year": 1975,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 95.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 1800000.0
  },
  {
    "title": "City Lights",
    "year": 1931,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 96.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 18200.0
  },
  {
    "title": "The Artist",
    "year": 2011,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 87.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 44700000.0
  },
  {
    "title": "The Death of Stalin",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 78.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 8000000.0
  },
  {
    "title": "La dolce vita",
    "year": 1960,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 90.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Roman Holiday",
    "year": 1953,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Shaun the Sheep Movie",
    "year": 2015,
    "type": "Comedy",
    "critic_score": 99,
    "people_score": 81.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 19400000.0
  },
  {
    "title": "Spy",
    "year": 2015,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 78.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Palm Springs",
    "year": 2020,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 88.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Hunt for the Wilderpeople",
    "year": 2016,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 91.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 5200000.0
  },
  {
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "type": "Comedy",
    "critic_score": 92,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 59100000.0
  },
  {
    "title": "Ratatouille",
    "year": 2007,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 206400000.0
  },
  {
    "title": "The Discreet Charm of the Bourgeoisie",
    "year": 1972,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 89.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 198800.0
  },
  {
    "title": "Annie Hall",
    "year": 1977,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 92.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Incredibles",
    "year": 2004,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 75.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 261400000.0
  },
  {
    "title": "Love & Friendship",
    "year": 2016,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 60.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 14000000.0
  },
  {
    "title": "Logan Lucky",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 92,
    "people_score": 76.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 27800000.0
  },
  {
    "title": "Gentlemen Prefer Blondes",
    "year": 1953,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 83.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Tampopo",
    "year": 1985,
    "type": "Comedy",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 224100.0
  },
  {
    "title": "Sideways",
    "year": 2004,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 79.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 71500000.0
  },
  {
    "title": "The Nice Guys",
    "year": 2016,
    "type": "Comedy",
    "critic_score": 91,
    "people_score": 79.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 36200000.0
  },
  {
    "title": "The LEGO Batman Movie",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 90,
    "people_score": 80.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 175700000.0
  },
  {
    "title": "One Hundred and One Dalmatians",
    "year": 1961,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 76.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 91300000.0
  },
  {
    "title": "The Invisible Man",
    "year": 1933,
    "type": "Comedy",
    "critic_score": 94,
    "people_score": 85.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Fighting With My Family",
    "year": 2019,
    "type": "Comedy",
    "critic_score": 93,
    "people_score": 86.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 23000000.0
  },
  {
    "title": "Chicken Run",
    "year": 2000,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 65.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Guardians of the Galaxy Vol. 2",
    "year": 2017,
    "type": "Comedy",
    "critic_score": 85,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 389800000.0
  },
  {
    "title": "Moonrise Kingdom",
    "year": 2012,
    "type": "Comedy",
    "critic_score": 93,
    "people_score": 86.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 45500000.0
  },
  {
    "title": "Airplane!",
    "year": 1980,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Forty-Year-Old Version",
    "year": 2020,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 69.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Playtime",
    "year": 1967,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "What We Do in the Shadows",
    "year": 2014,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 86.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 3300000.0
  },
  {
    "title": "Paddington",
    "year": 2014,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 80.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Don't Think Twice",
    "year": 2016,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 69.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 4400000.0
  },
  {
    "title": "Mary Poppins",
    "year": 1964,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Saint Frances",
    "year": 2019,
    "type": "Comedy",
    "critic_score": 99,
    "people_score": 79.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": 16100.000000000002
  },
  {
    "title": "Ghostbusters",
    "year": 1984,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 88.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 298200000.0
  },
  {
    "title": "Some Like It Hot",
    "year": 1959,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 94.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Bringing Up Baby",
    "year": 1938,
    "type": "Comedy",
    "critic_score": 93,
    "people_score": 89.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Blow the Man Down",
    "year": 2019,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 74.0,
    "total_ratings": "250+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "To Be or Not to Be",
    "year": 1942,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 93.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Groundhog Day",
    "year": 1993,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 88.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 162600.0
  },
  {
    "title": "Anomalisa",
    "year": 2015,
    "type": "Comedy",
    "critic_score": 92,
    "people_score": 71.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 3400000.0
  },
  {
    "title": "Monsters, Inc.",
    "year": 2001,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 494000.0
  },
  {
    "title": "The Player",
    "year": 1992,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 84.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 21700000.0
  },
  {
    "title": "You Can't Take It With You",
    "year": 1938,
    "type": "Comedy",
    "critic_score": 93,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Truman Show",
    "year": 1998,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 125600000.0
  },
  {
    "title": "Big",
    "year": 1988,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 82.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 113500000.0
  },
  {
    "title": "The Rules of the Game",
    "year": 1939,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 90.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Back to the Future",
    "year": 1985,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 247000.0
  },
  {
    "title": "Enough Said",
    "year": 2013,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 75.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 17500000.0
  },
  {
    "title": "The Apartment",
    "year": 1960,
    "type": "Comedy",
    "critic_score": 93,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Bull Durham",
    "year": 1988,
    "type": "Comedy",
    "critic_score": 97,
    "people_score": 82.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 49900000.0
  },
  {
    "title": "The Edge of Seventeen",
    "year": 2016,
    "type": "Comedy",
    "critic_score": 94,
    "people_score": 83.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 14400000.0
  },
  {
    "title": "Deadpool 2",
    "year": 2018,
    "type": "Comedy",
    "critic_score": 84,
    "people_score": 85.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 324300000.0
  },
  {
    "title": "The Muppets",
    "year": 2011,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 80.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 88600000.0
  },
  {
    "title": "Broadcast News",
    "year": 1987,
    "type": "Comedy",
    "critic_score": 98,
    "people_score": 79.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 49200000.0
  },
  {
    "title": "Silver Linings Playbook",
    "year": 2012,
    "type": "Comedy",
    "critic_score": 92,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 132100000.0
  },
  {
    "title": "Lost in Translation",
    "year": 2003,
    "type": "Comedy",
    "critic_score": 95,
    "people_score": 85.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 44600000.0
  },
  {
    "title": "Mr. Smith Goes to Washington",
    "year": 1939,
    "type": "Comedy",
    "critic_score": 96,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Black Panther",
    "year": 2018,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 79.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 700200000.0
  },
  {
    "title": "Citizen Kane",
    "year": 1941,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 977300.0
  },
  {
    "title": "Parasite",
    "year": 2019,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 53400000.0
  },
  {
    "title": "Avengers: Endgame",
    "year": 2019,
    "type": "Drama",
    "critic_score": 94,
    "people_score": 90.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 858400000.0
  },
  {
    "title": "Casablanca",
    "year": 1942,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 95.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Knives Out",
    "year": 2019,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 165400000.0
  },
  {
    "title": "Lady Bird",
    "year": 2017,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 79.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 48900000.0
  },
  {
    "title": "Mission: Impossible -- Fallout",
    "year": 2018,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 220100000.0
  },
  {
    "title": "BlacKkKlansman",
    "year": 2018,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 83.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 48600000.0
  },
  {
    "title": "The Irishman",
    "year": 2019,
    "type": "Drama",
    "critic_score": 95,
    "people_score": 86.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 98.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 134800000.0
  },
  {
    "title": "Moonlight",
    "year": 2016,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 79.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 27900000.0
  },
  {
    "title": "All About Eve",
    "year": 1950,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 10200.0
  },
  {
    "title": "Wonder Woman",
    "year": 2017,
    "type": "Drama",
    "critic_score": 93,
    "people_score": 83.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 412800000.0
  },
  {
    "title": "A Star Is Born",
    "year": 2018,
    "type": "Drama",
    "critic_score": 90,
    "people_score": 79.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 215300000.0
  },
  {
    "title": "Rebecca",
    "year": 1940,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "A Quiet Place",
    "year": 2018,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 82.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 68400000.0
  },
  {
    "title": "Roma",
    "year": 2018,
    "type": "Drama",
    "critic_score": 95,
    "people_score": 72.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Dunkirk",
    "year": 2017,
    "type": "Drama",
    "critic_score": 92,
    "people_score": 81.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 188000000.0
  },
  {
    "title": "Portrait of a Lady on Fire",
    "year": 2019,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 92.0,
    "total_ratings": "250+",
    "box_office_(gross_usa)": 3800000.0
  },
  {
    "title": "The Farewell",
    "year": 2019,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 87.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 17700000.0
  },
  {
    "title": "Selma",
    "year": 2014,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 52100000.0
  },
  {
    "title": "Spotlight",
    "year": 2015,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 45000000.0
  },
  {
    "title": "The Shape of Water",
    "year": 2017,
    "type": "Drama",
    "critic_score": 92,
    "people_score": 72.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 63300000.0
  },
  {
    "title": "Thor: Ragnarok",
    "year": 2017,
    "type": "Drama",
    "critic_score": 93,
    "people_score": 87.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 315000000.0
  },
  {
    "title": "Grand Illusion",
    "year": 1937,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 92.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 516500.0
  },
  {
    "title": "Arrival",
    "year": 2016,
    "type": "Drama",
    "critic_score": 94,
    "people_score": 82.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 100500000.0
  },
  {
    "title": "Logan",
    "year": 2017,
    "type": "Drama",
    "critic_score": 93,
    "people_score": 90.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 226300000.0
  },
  {
    "title": "The Favourite",
    "year": 2018,
    "type": "Drama",
    "critic_score": 93,
    "people_score": 69.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 34200000.0
  },
  {
    "title": "All Quiet on the Western Front",
    "year": 1930,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 89.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Double Indemnity",
    "year": 1944,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 95.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Marriage Story",
    "year": 2019,
    "type": "Drama",
    "critic_score": 94,
    "people_score": 85.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Star Wars: The Last Jedi",
    "year": 2017,
    "type": "Drama",
    "critic_score": 90,
    "people_score": 42.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 620200000.0
  },
  {
    "title": "On the Waterfront",
    "year": 1954,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 95.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Boyhood",
    "year": 2014,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 80.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 25400000.0
  },
  {
    "title": "Once Upon a Time... In Hollywood",
    "year": 2019,
    "type": "Drama",
    "critic_score": 85,
    "people_score": 70.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 142400000.0
  },
  {
    "title": "12 Years a Slave",
    "year": 2013,
    "type": "Drama",
    "critic_score": 95,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 56700000.0
  },
  {
    "title": "Argo",
    "year": 2012,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 136000000.0
  },
  {
    "title": "Manchester by the Sea",
    "year": 2016,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 78.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 47700000.0
  },
  {
    "title": "Leave No Trace",
    "year": 2018,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 81.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 6000000.0
  },
  {
    "title": "Alien",
    "year": 1979,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 81100000.0
  },
  {
    "title": "Call Me by Your Name",
    "year": 2017,
    "type": "Drama",
    "critic_score": 94,
    "people_score": 86.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 18000000.0
  },
  {
    "title": "1917",
    "year": 2019,
    "type": "Drama",
    "critic_score": 89,
    "people_score": 88.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 159200000.0
  },
  {
    "title": "Shadow of a Doubt",
    "year": 1943,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 89.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Gravity",
    "year": 2013,
    "type": "Drama",
    "critic_score": 95,
    "people_score": 80.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 274100000.0
  },
  {
    "title": "The Maltese Falcon",
    "year": 1941,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 91.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Florida Project",
    "year": 2017,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 80.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 5800000.0
  },
  {
    "title": "Sunset Blvd.",
    "year": 1950,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 95.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Widows",
    "year": 2018,
    "type": "Drama",
    "critic_score": 91,
    "people_score": 61.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 42400000.0
  },
  {
    "title": "War for the Planet of the Apes",
    "year": 2017,
    "type": "Drama",
    "critic_score": 94,
    "people_score": 84.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 146800000.0
  },
  {
    "title": "The Godfather, Part II",
    "year": 1974,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 97.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Battle of Algiers",
    "year": 1966,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 95.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 55900.0
  },
  {
    "title": "Spider-Man: Homecoming",
    "year": 2017,
    "type": "Drama",
    "critic_score": 92,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 334400000.0
  },
  {
    "title": "La La Land",
    "year": 2016,
    "type": "Drama",
    "critic_score": 90,
    "people_score": 81.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 151100000.0
  },
  {
    "title": "Baby Driver",
    "year": 2017,
    "type": "Drama",
    "critic_score": 92,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 107800000.0
  },
  {
    "title": "Seven Samurai",
    "year": 1954,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 97.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 271700.0
  },
  {
    "title": "Never Rarely Sometimes Always",
    "year": 2020,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 48.0,
    "total_ratings": "500+",
    "box_office_(gross_usa)": 16300.0
  },
  {
    "title": "Pain and Glory",
    "year": 2019,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 91.0,
    "total_ratings": "250+",
    "box_office_(gross_usa)": 4600000.0
  },
  {
    "title": "Shoplifters",
    "year": 2018,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 91.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 3300000.0
  },
  {
    "title": "Metropolis",
    "year": 1927,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 92.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 1200000.0
  },
  {
    "title": "M",
    "year": 1931,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 95.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 29600.0
  },
  {
    "title": "Jaws",
    "year": 1975,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 260900000.0
  },
  {
    "title": "Hell or High Water",
    "year": 2016,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 88.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 27000000.0
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "type": "Drama",
    "critic_score": 94,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 2000000.0
  },
  {
    "title": "Bicycle Thieves",
    "year": 1948,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 332900.0
  },
  {
    "title": "Brooklyn",
    "year": 2015,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 87.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 38300000.0
  },
  {
    "title": "12 Angry Men",
    "year": 1957,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 97.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The 400 Blows",
    "year": 1959,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Three Billboards Outside Ebbing, Missouri",
    "year": 2017,
    "type": "Drama",
    "critic_score": 90,
    "people_score": 87.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 54100000.0
  },
  {
    "title": "The Babadook",
    "year": 2014,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 72.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 933100.0
  },
  {
    "title": "Chinatown",
    "year": 1974,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "A Streetcar Named Desire",
    "year": 1951,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Treasure of the Sierra Madre",
    "year": 1948,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Creed",
    "year": 2015,
    "type": "Drama",
    "critic_score": 95,
    "people_score": 89.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 109700000.0
  },
  {
    "title": "Blade Runner 2049",
    "year": 2017,
    "type": "Drama",
    "critic_score": 88,
    "people_score": 81.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 91500000.0
  },
  {
    "title": "The Wrestler",
    "year": 2008,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 88.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 26200000.0
  },
  {
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "year": 2011,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 381000000.0
  },
  {
    "title": "Lawrence of Arabia",
    "year": 1962,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 6000000.0
  },
  {
    "title": "Rashomon",
    "year": 1950,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Army in the Shadows",
    "year": 1969,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 24600.0
  },
  {
    "title": "Dolemite Is My Name",
    "year": 2019,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 91.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Kind Hearts and Coronets",
    "year": 1949,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 94.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 35900.0
  },
  {
    "title": "First Man",
    "year": 2018,
    "type": "Drama",
    "critic_score": 87,
    "people_score": 67.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 44800000.0
  },
  {
    "title": "Touch of Evil",
    "year": 1958,
    "type": "Drama",
    "critic_score": 95,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Apocalypse Now",
    "year": 1979,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 78800000.0
  },
  {
    "title": "His Girl Friday",
    "year": 1940,
    "type": "Drama",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Hurt Locker",
    "year": 2008,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 84.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 15700000.0
  },
  {
    "title": "The Lighthouse",
    "year": 2019,
    "type": "Drama",
    "critic_score": 90,
    "people_score": 72.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 10900000.0
  },
  {
    "title": "I, Tonya",
    "year": 2017,
    "type": "Drama",
    "critic_score": 90,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 30000000.0
  },
  {
    "title": "Hidden Figures",
    "year": 2016,
    "type": "Drama",
    "critic_score": 93,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 169300000.0
  },
  {
    "title": "Taxi Driver",
    "year": 1976,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 93.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Tokyo Story",
    "year": 1953,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "It's a Wonderful Life",
    "year": 1946,
    "type": "Drama",
    "critic_score": 94,
    "people_score": 95.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 3300000.0
  },
  {
    "title": "Vertigo",
    "year": 1958,
    "type": "Drama",
    "critic_score": 94,
    "people_score": 93.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 1800000.0
  },
  {
    "title": "The Social Network",
    "year": 2010,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 86.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 96900000.0
  },
  {
    "title": "The Hate U Give",
    "year": 2018,
    "type": "Drama",
    "critic_score": 97,
    "people_score": 83.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 29600000.0
  },
  {
    "title": "The Grapes of Wrath",
    "year": 1940,
    "type": "Drama",
    "critic_score": 100,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "L.A. Confidential",
    "year": 1997,
    "type": "Drama",
    "critic_score": 99,
    "people_score": 94.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 64599999.99999999
  },
  {
    "title": "Paterson",
    "year": 2016,
    "type": "Drama",
    "critic_score": 96,
    "people_score": 72.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 2100000.0
  },
  {
    "title": "Phantom Thread",
    "year": 2017,
    "type": "Drama",
    "critic_score": 91,
    "people_score": 71.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 20900000.0
  },
  {
    "title": "Us",
    "year": 2019,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 59.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 175000000.0
  },
  {
    "title": "Get Out",
    "year": 2017,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 176000000.0
  },
  {
    "title": "A Quiet Place",
    "year": 2018,
    "type": "Horror",
    "critic_score": 96,
    "people_score": 82.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 68400000.0
  },
  {
    "title": "The Cabinet of Dr. Caligari",
    "year": 1919,
    "type": "Horror",
    "critic_score": 99,
    "people_score": 89.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "King Kong",
    "year": 1933,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Nosferatu",
    "year": 1922,
    "type": "Horror",
    "critic_score": 97,
    "people_score": 87.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Psycho",
    "year": 1960,
    "type": "Horror",
    "critic_score": 96,
    "people_score": 95.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Invisible Man",
    "year": 2020,
    "type": "Horror",
    "critic_score": 91,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 64300000.0
  },
  {
    "title": "Bride of Frankenstein",
    "year": 1935,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 87.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Babadook",
    "year": 2014,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 72.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 933100.0
  },
  {
    "title": "Frankenstein",
    "year": 1931,
    "type": "Horror",
    "critic_score": 100,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Lighthouse",
    "year": 2019,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 72.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 10900000.0
  },
  {
    "title": "Hereditary",
    "year": 2018,
    "type": "Horror",
    "critic_score": 89,
    "people_score": 67.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 44100000.0
  },
  {
    "title": "Let the Right One In",
    "year": 2008,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 2100000.0
  },
  {
    "title": "It Follows",
    "year": 2014,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 66.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 14700000.0
  },
  {
    "title": "Freaks",
    "year": 1932,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Night of the Living Dead",
    "year": 1968,
    "type": "Horror",
    "critic_score": 97,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 68700.0
  },
  {
    "title": "Aliens",
    "year": 1986,
    "type": "Horror",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 77600000.0
  },
  {
    "title": "The Silence of the Lambs",
    "year": 1991,
    "type": "Horror",
    "critic_score": 96,
    "people_score": 95.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 130700000.0
  },
  {
    "title": "Halloween",
    "year": 1978,
    "type": "Horror",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 47500000.0
  },
  {
    "title": "Rosemary's Baby",
    "year": 1968,
    "type": "Horror",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Eyes Without a Face",
    "year": 1959,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 52700.0
  },
  {
    "title": "Repulsion",
    "year": 1965,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 86.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Pan's Labyrinth",
    "year": 2006,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 91.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 37600000.0
  },
  {
    "title": "The Invisible Man",
    "year": 1933,
    "type": "Horror",
    "critic_score": 94,
    "people_score": 85.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Host",
    "year": 2020,
    "type": "Horror",
    "critic_score": 100,
    "people_score": 72.0,
    "total_ratings": "500+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Witch",
    "year": 2015,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 59.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 25100000.0
  },
  {
    "title": "The Cabin in the Woods",
    "year": 2011,
    "type": "Horror",
    "critic_score": 92,
    "people_score": 74.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 42000000.0
  },
  {
    "title": "Don't Look Now",
    "year": 1973,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 76.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "It",
    "year": 2017,
    "type": "Horror",
    "critic_score": 86,
    "people_score": 84.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 327500000.0
  },
  {
    "title": "Possessor: Uncut",
    "year": 2020,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 59.0,
    "total_ratings": "50+",
    "box_office_(gross_usa)": 745800.0
  },
  {
    "title": "Relic",
    "year": 2020,
    "type": "Horror",
    "critic_score": 92,
    "people_score": 49.0,
    "total_ratings": "500+",
    "box_office_(gross_usa)": 1000000.0
  },
  {
    "title": "The Birds",
    "year": 1963,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 83.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Young Frankenstein",
    "year": 1974,
    "type": "Horror",
    "critic_score": 94,
    "people_score": 92.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Godzilla",
    "year": 1954,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 89.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Vanishing",
    "year": 1988,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Ready or Not",
    "year": 2019,
    "type": "Horror",
    "critic_score": 88,
    "people_score": 78.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 28700000.0
  },
  {
    "title": "La llorona",
    "year": 2019,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 61.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Drag Me to Hell",
    "year": 2009,
    "type": "Horror",
    "critic_score": 92,
    "people_score": 62.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 42100000.0
  },
  {
    "title": "A Girl Walks Home Alone at Night",
    "year": 2014,
    "type": "Horror",
    "critic_score": 96,
    "people_score": 75.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 299300.0
  },
  {
    "title": "House of Wax",
    "year": 1953,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 73.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Fly",
    "year": 1958,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 71.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Dracula",
    "year": 1931,
    "type": "Horror",
    "critic_score": 94,
    "people_score": 81.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Midsommar",
    "year": 2019,
    "type": "Horror",
    "critic_score": 83,
    "people_score": 63.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 27400000.0
  },
  {
    "title": "Carrie",
    "year": 1976,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 77.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Nosferatu",
    "year": 1979,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 83.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Spontaneous",
    "year": 2020,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 70.0,
    "total_ratings": "250+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Evil Dead",
    "year": 1981,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 84.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Evil Dead 2",
    "year": 1987,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 89.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 2600000.0
  },
  {
    "title": "The Innocents",
    "year": 1961,
    "type": "Horror",
    "critic_score": 94,
    "people_score": 86.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Loved Ones",
    "year": 2009,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 73.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Invasion of the Body Snatchers",
    "year": 1978,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 82.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Dead of Night",
    "year": 1945,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 86.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Harpoon",
    "year": 2019,
    "type": "Horror",
    "critic_score": 97,
    "people_score": 58.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Love Witch",
    "year": 2016,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 60.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 216000.0
  },
  {
    "title": "Room 237",
    "year": 2012,
    "type": "Horror",
    "critic_score": 94,
    "people_score": 55.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 259800.0
  },
  {
    "title": "Suspiria",
    "year": 1977,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 83.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Werckmeister Harmonies",
    "year": 2000,
    "type": "Horror",
    "critic_score": 98,
    "people_score": 91.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 25500.0
  },
  {
    "title": "Shaun of the Dead",
    "year": 2004,
    "type": "Horror",
    "critic_score": 92,
    "people_score": 93.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 13500000.0
  },
  {
    "title": "Train to Busan",
    "year": 2016,
    "type": "Horror",
    "critic_score": 94,
    "people_score": 89.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 2100000.0
  },
  {
    "title": "A Nightmare on Elm Street",
    "year": 1984,
    "type": "Horror",
    "critic_score": 94,
    "people_score": 84.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 57300000.0
  },
  {
    "title": "The Host",
    "year": 2006,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 72.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 2200000.0
  },
  {
    "title": "The Fly",
    "year": 1986,
    "type": "Horror",
    "critic_score": 92,
    "people_score": 83.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 34900000.0
  },
  {
    "title": "Dawn of the Dead",
    "year": 1978,
    "type": "Horror",
    "critic_score": 94,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "It Comes at Night",
    "year": 2017,
    "type": "Horror",
    "critic_score": 87,
    "people_score": 44.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 14000000.0
  },
  {
    "title": "Zombieland",
    "year": 2009,
    "type": "Horror",
    "critic_score": 89,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 75600000.0
  },
  {
    "title": "In Fabric",
    "year": 2018,
    "type": "Horror",
    "critic_score": 91,
    "people_score": 50.0,
    "total_ratings": "250+",
    "box_office_(gross_usa)": 25000.0
  },
  {
    "title": "Re-Animator",
    "year": 1985,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 82.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 2000000.0
  },
  {
    "title": "Don't Breathe",
    "year": 2016,
    "type": "Horror",
    "critic_score": 88,
    "people_score": 78.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 89200000.0
  },
  {
    "title": "The Endless",
    "year": 2017,
    "type": "Horror",
    "critic_score": 92,
    "people_score": 67.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 270600.0
  },
  {
    "title": "What Ever Happened to Baby Jane?",
    "year": 1962,
    "type": "Horror",
    "critic_score": 92,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Mortuary Collection",
    "year": 2019,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 75.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Cam",
    "year": 2018,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 53.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Phantom of the Opera",
    "year": 1925,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 84.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Wolf Man",
    "year": 1941,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 80.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Upgrade",
    "year": 2018,
    "type": "Horror",
    "critic_score": 88,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 11800000.0
  },
  {
    "title": "Eraserhead",
    "year": 1977,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 83.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "We Are Still Here",
    "year": 2015,
    "type": "Horror",
    "critic_score": 95,
    "people_score": 47.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Dark and the Wicked",
    "year": 2020,
    "type": "Horror",
    "critic_score": 92,
    "people_score": 63.0,
    "total_ratings": "250+",
    "box_office_(gross_usa)": 157000.0
  },
  {
    "title": "The Texas Chain Saw Massacre",
    "year": 1974,
    "type": "Horror",
    "critic_score": 89,
    "people_score": 82.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Witches",
    "year": 1990,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 70.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 8700000.0
  },
  {
    "title": "Arachnophobia",
    "year": 1990,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 54.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 53200000.0
  },
  {
    "title": "Horror of Dracula",
    "year": 1958,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 80.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Dr. Jekyll and Mr. Hyde",
    "year": 1931,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 80.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Halloween",
    "year": 2018,
    "type": "Horror",
    "critic_score": 79,
    "people_score": 70.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 159500000.0
  },
  {
    "title": "The Mummy",
    "year": 1932,
    "type": "Horror",
    "critic_score": 88,
    "people_score": 72.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Frankenweenie",
    "year": 2012,
    "type": "Horror",
    "critic_score": 87,
    "people_score": 70.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Let Me In",
    "year": 2010,
    "type": "Horror",
    "critic_score": 88,
    "people_score": 76.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 12100000.0
  },
  {
    "title": "Island of Lost Souls",
    "year": 1933,
    "type": "Horror",
    "critic_score": 88,
    "people_score": 82.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Frenzy",
    "year": 1972,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 77.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Color Out of Space",
    "year": 2019,
    "type": "Horror",
    "critic_score": 86,
    "people_score": 82.0,
    "total_ratings": "50+",
    "box_office_(gross_usa)": 677300.0
  },
  {
    "title": "The Conjuring",
    "year": 2013,
    "type": "Horror",
    "critic_score": 86,
    "people_score": 83.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 137400000.0
  },
  {
    "title": "Misery",
    "year": 1990,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 54700000.0
  },
  {
    "title": "The Wicker Man",
    "year": 1973,
    "type": "Horror",
    "critic_score": 89,
    "people_score": 82.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 60900.0
  },
  {
    "title": "Little Shop of Horrors",
    "year": 1986,
    "type": "Horror",
    "critic_score": 90,
    "people_score": 79.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 36500000.0
  },
  {
    "title": "Cronos",
    "year": 1993,
    "type": "Horror",
    "critic_score": 91,
    "people_score": 69.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Bone Tomahawk",
    "year": 2015,
    "type": "Horror",
    "critic_score": 91,
    "people_score": 73.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Return of the Living Dead",
    "year": 1985,
    "type": "Horror",
    "critic_score": 91,
    "people_score": 79.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "28 Days Later",
    "year": 2002,
    "type": "Horror",
    "critic_score": 87,
    "people_score": 85.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 45100000.0
  },
  {
    "title": "Hush",
    "year": 2016,
    "type": "Horror",
    "critic_score": 93,
    "people_score": 73.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Citizen Kane",
    "year": 1941,
    "type": "Mystery & Suspense",
    "critic_score": 99,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 977300.0
  },
  {
    "title": "Knives Out",
    "year": 2019,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 165400000.0
  },
  {
    "title": "Us",
    "year": 2019,
    "type": "Mystery & Suspense",
    "critic_score": 93,
    "people_score": 59.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 175000000.0
  },
  {
    "title": "Mission: Impossible -- Fallout",
    "year": 2018,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 220100000.0
  },
  {
    "title": "Get Out",
    "year": 2017,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 176000000.0
  },
  {
    "title": "The Irishman",
    "year": 2019,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 86.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Rebecca",
    "year": 1940,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "A Quiet Place",
    "year": 2018,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 82.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 68400000.0
  },
  {
    "title": "The Cabinet of Dr. Caligari",
    "year": 1919,
    "type": "Mystery & Suspense",
    "critic_score": 99,
    "people_score": 89.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Spotlight",
    "year": 2015,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 45000000.0
  },
  {
    "title": "The Third Man",
    "year": 1949,
    "type": "Mystery & Suspense",
    "critic_score": 99,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 447000.0
  },
  {
    "title": "Arrival",
    "year": 2016,
    "type": "Mystery & Suspense",
    "critic_score": 94,
    "people_score": 82.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 100500000.0
  },
  {
    "title": "Argo",
    "year": 2012,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 136000000.0
  },
  {
    "title": "Psycho",
    "year": 1960,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 95.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Alien",
    "year": 1979,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 81100000.0
  },
  {
    "title": "Laura",
    "year": 1944,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 91.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Shadow of a Doubt",
    "year": 1943,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 89.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Maltese Falcon",
    "year": 1941,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 91.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Invisible Man",
    "year": 2020,
    "type": "Mystery & Suspense",
    "critic_score": 91,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 64300000.0
  },
  {
    "title": "The Godfather, Part II",
    "year": 1974,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 97.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "North by Northwest",
    "year": 1959,
    "type": "Mystery & Suspense",
    "critic_score": 99,
    "people_score": 94.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "M",
    "year": 1931,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 95.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 29600.0
  },
  {
    "title": "Jaws",
    "year": 1975,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 260900000.0
  },
  {
    "title": "Hell or High Water",
    "year": 2016,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 88.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 27000000.0
  },
  {
    "title": "The Babadook",
    "year": 2014,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 72.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 933100.0
  },
  {
    "title": "Chinatown",
    "year": 1974,
    "type": "Mystery & Suspense",
    "critic_score": 99,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Lady Vanishes",
    "year": 1938,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "High Noon",
    "year": 1952,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 89.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The 39 Steps",
    "year": 1935,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 86.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "year": 2011,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 381000000.0
  },
  {
    "title": "Skyfall",
    "year": 2012,
    "type": "Mystery & Suspense",
    "critic_score": 92,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 304400000.0
  },
  {
    "title": "Rashomon",
    "year": 1950,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Thin Man",
    "year": 1934,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Touch of Evil",
    "year": 1958,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Taxi Driver",
    "year": 1976,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 93.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Vertigo",
    "year": 1958,
    "type": "Mystery & Suspense",
    "critic_score": 94,
    "people_score": 93.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 1800000.0
  },
  {
    "title": "L.A. Confidential",
    "year": 1997,
    "type": "Mystery & Suspense",
    "critic_score": 99,
    "people_score": 94.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 64599999.99999999
  },
  {
    "title": "The Big Sleep",
    "year": 1946,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 91.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Nightcrawler",
    "year": 2014,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 85.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 32400000.0
  },
  {
    "title": "The Wages of Fear",
    "year": 1953,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 95.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Rear Window",
    "year": 1954,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 95.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 1600000.0
  },
  {
    "title": "Goldfinger",
    "year": 1964,
    "type": "Mystery & Suspense",
    "critic_score": 99,
    "people_score": 89.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Strangers on a Train",
    "year": 1951,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 92.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Invasion of the Body Snatchers",
    "year": 1956,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 85.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Post",
    "year": 2017,
    "type": "Mystery & Suspense",
    "critic_score": 88,
    "people_score": 73.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 81400000.0
  },
  {
    "title": "Anatomy of a Murder",
    "year": 1959,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 90.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Freaks",
    "year": 1932,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 88.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Night of the Hunter",
    "year": 1955,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 90.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "In a Lonely Place",
    "year": 1950,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 89.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "His House",
    "year": 2020,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 75.0,
    "total_ratings": "500+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Notorious",
    "year": 1946,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 91.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Taking of Pelham One Two Three",
    "year": 1974,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Salesman",
    "year": 2016,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 84.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 3400000.0
  },
  {
    "title": "The Silence of the Lambs",
    "year": 1991,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 95.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 130700000.0
  },
  {
    "title": "Detour",
    "year": 1945,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 78.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 12200.0
  },
  {
    "title": "Halloween",
    "year": 1978,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 47500000.0
  },
  {
    "title": "Rosemary's Baby",
    "year": 1968,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Eyes Without a Face",
    "year": 1959,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 52700.0
  },
  {
    "title": "Badlands",
    "year": 1973,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 90.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Eye in the Sky",
    "year": 2015,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 82.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 18700000.0
  },
  {
    "title": "All Is Lost",
    "year": 2013,
    "type": "Mystery & Suspense",
    "critic_score": 94,
    "people_score": 63.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 6300000.0
  },
  {
    "title": "Repulsion",
    "year": 1965,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 86.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "One Hundred and One Dalmatians",
    "year": 1961,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 76.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 91300000.0
  },
  {
    "title": "Kiss Me Deadly",
    "year": 1955,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 84.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 882.0
  },
  {
    "title": "Looper",
    "year": 2012,
    "type": "Mystery & Suspense",
    "critic_score": 93,
    "people_score": 82.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 66300000.0
  },
  {
    "title": "The Killing",
    "year": 1956,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 92.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Stalker",
    "year": 1979,
    "type": "Mystery & Suspense",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 258400.0
  },
  {
    "title": "Casino Royale",
    "year": 2006,
    "type": "Mystery & Suspense",
    "critic_score": 94,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 167000000.0
  },
  {
    "title": "The Manchurian Candidate",
    "year": 1962,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 90.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 1900000.0
  },
  {
    "title": "No Country for Old Men",
    "year": 2007,
    "type": "Mystery & Suspense",
    "critic_score": 93,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 74300000.0
  },
  {
    "title": "The Cabin in the Woods",
    "year": 2011,
    "type": "Mystery & Suspense",
    "critic_score": 92,
    "people_score": 74.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 42000000.0
  },
  {
    "title": "Burning",
    "year": 2018,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 80.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 715000.0
  },
  {
    "title": "The Trial of the Chicago 7",
    "year": 2020,
    "type": "Mystery & Suspense",
    "critic_score": 89,
    "people_score": 91.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Ex Machina",
    "year": 2015,
    "type": "Mystery & Suspense",
    "critic_score": 92,
    "people_score": 86.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 25400000.0
  },
  {
    "title": "The Red Circle",
    "year": 1970,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 92.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Sicario",
    "year": 2015,
    "type": "Mystery & Suspense",
    "critic_score": 92,
    "people_score": 85.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 46900000.0
  },
  {
    "title": "Blow the Man Down",
    "year": 2019,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 74.0,
    "total_ratings": "250+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Searching",
    "year": 2018,
    "type": "Mystery & Suspense",
    "critic_score": 92,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 26000000.0
  },
  {
    "title": "Sunrise",
    "year": 1927,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 92.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Don't Look Now",
    "year": 1973,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 76.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Blood Simple",
    "year": 1984,
    "type": "Mystery & Suspense",
    "critic_score": 94,
    "people_score": 88.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 1700000.0
  },
  {
    "title": "Peeping Tom",
    "year": 1960,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 85.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 84000.0
  },
  {
    "title": "It",
    "year": 2017,
    "type": "Mystery & Suspense",
    "critic_score": 86,
    "people_score": 84.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 327500000.0
  },
  {
    "title": "The Vast of Night",
    "year": 2019,
    "type": "Mystery & Suspense",
    "critic_score": 92,
    "people_score": 66.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "10 Cloverfield Lane",
    "year": 2016,
    "type": "Mystery & Suspense",
    "critic_score": 90,
    "people_score": 79.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 72100000.0
  },
  {
    "title": "To Catch a Thief",
    "year": 1955,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 84.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Assault on Precinct 13",
    "year": 1976,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 80.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Diabolique",
    "year": 1955,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 93.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Fugitive",
    "year": 1993,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 89.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 183800000.0
  },
  {
    "title": "Bridge of Spies",
    "year": 2015,
    "type": "Mystery & Suspense",
    "critic_score": 90,
    "people_score": 87.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 72300000.0
  },
  {
    "title": "The Conversation",
    "year": 1974,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 90.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Gone Girl",
    "year": 2014,
    "type": "Mystery & Suspense",
    "critic_score": 87,
    "people_score": 87.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 167800000.0
  },
  {
    "title": "Possessor: Uncut",
    "year": 2020,
    "type": "Mystery & Suspense",
    "critic_score": 93,
    "people_score": 59.0,
    "total_ratings": "50+",
    "box_office_(gross_usa)": 745800.0
  },
  {
    "title": "Border",
    "year": 2018,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 76.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 771900.0
  },
  {
    "title": "Bullitt",
    "year": 1968,
    "type": "Mystery & Suspense",
    "critic_score": 98,
    "people_score": 85.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Forbidden Planet",
    "year": 1956,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 85.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Who Framed Roger Rabbit",
    "year": 1988,
    "type": "Mystery & Suspense",
    "critic_score": 97,
    "people_score": 84.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 152800000.0
  },
  {
    "title": "Jurassic Park",
    "year": 1993,
    "type": "Mystery & Suspense",
    "critic_score": 91,
    "people_score": 91.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 401800000.0
  },
  {
    "title": "The Birds",
    "year": 1963,
    "type": "Mystery & Suspense",
    "critic_score": 95,
    "people_score": 83.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "In the Line of Fire",
    "year": 1993,
    "type": "Mystery & Suspense",
    "critic_score": 96,
    "people_score": 79.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 102200000.0
  },
  {
    "title": "It Happened One Night",
    "year": 1934,
    "type": "Romance",
    "critic_score": 99,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Casablanca",
    "year": 1942,
    "type": "Romance",
    "critic_score": 99,
    "people_score": 95.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "A Night at the Opera",
    "year": 1935,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 91.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Shape of Water",
    "year": 2017,
    "type": "Romance",
    "critic_score": 92,
    "people_score": 72.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 63300000.0
  },
  {
    "title": "Singin' in the Rain",
    "year": 1952,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 95.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 23900.0
  },
  {
    "title": "The Big Sick",
    "year": 2017,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 88.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 42900000.0
  },
  {
    "title": "On the Waterfront",
    "year": 1954,
    "type": "Romance",
    "critic_score": 99,
    "people_score": 95.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Adventures of Robin Hood",
    "year": 1938,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 89.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Call Me by Your Name",
    "year": 2017,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 86.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 18000000.0
  },
  {
    "title": "Top Hat",
    "year": 1935,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 91.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Philadelphia Story",
    "year": 1940,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Lady Eve",
    "year": 1941,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "An American in Paris",
    "year": 1951,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 79.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Vertigo",
    "year": 1958,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 93.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 1800000.0
  },
  {
    "title": "Carol",
    "year": 2015,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 74.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 12700000.0
  },
  {
    "title": "Before Midnight",
    "year": 2013,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 82.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 8100000.0
  },
  {
    "title": "The Red Shoes",
    "year": 1948,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 92.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Umbrellas of Cherbourg",
    "year": 1964,
    "type": "Romance",
    "critic_score": 99,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 18400.0
  },
  {
    "title": "City Lights",
    "year": 1931,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 96.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 18200.0
  },
  {
    "title": "The Artist",
    "year": 2011,
    "type": "Romance",
    "critic_score": 95,
    "people_score": 87.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 44700000.0
  },
  {
    "title": "The Best Years of Our Lives",
    "year": 1946,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Roman Holiday",
    "year": 1953,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Gone With the Wind",
    "year": 1939,
    "type": "Romance",
    "critic_score": 91,
    "people_score": 92.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 198700000.0
  },
  {
    "title": "Her",
    "year": 2013,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 82.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 25600000.0
  },
  {
    "title": "Ash Is Purest White",
    "year": 2018,
    "type": "Romance",
    "critic_score": 99,
    "people_score": 69.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": 416000.0
  },
  {
    "title": "The African Queen",
    "year": 1951,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 86.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "In a Lonely Place",
    "year": 1950,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 89.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Annie Hall",
    "year": 1977,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 92.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Lost Weekend",
    "year": 1945,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 90.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Beauty and the Beast",
    "year": 1946,
    "type": "Romance",
    "critic_score": 95,
    "people_score": 90.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 138200.0
  },
  {
    "title": "Miracle on 34th Street",
    "year": 1947,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 87.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Only Yesterday",
    "year": 1991,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 85.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Gentlemen Prefer Blondes",
    "year": 1953,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 83.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Sideways",
    "year": 2004,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 79.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 71500000.0
  },
  {
    "title": "Beauty and the Beast",
    "year": 1991,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 92.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 219000000.0
  },
  {
    "title": "The Princess Bride",
    "year": 1987,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 26900000.0
  },
  {
    "title": "Children of Paradise",
    "year": 1945,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 95.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 31900.0
  },
  {
    "title": "Three Colors: Red",
    "year": 1994,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 858400.0
  },
  {
    "title": "Marty",
    "year": 1955,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "God's Own Country",
    "year": 2017,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 87.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 281500.0
  },
  {
    "title": "Saint Frances",
    "year": 2019,
    "type": "Romance",
    "critic_score": 99,
    "people_score": 79.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": 16100.000000000002
  },
  {
    "title": "Bringing Up Baby",
    "year": 1938,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 89.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Henry V",
    "year": 1989,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 89.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 10200000.0
  },
  {
    "title": "Groundhog Day",
    "year": 1993,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 88.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 162600.0
  },
  {
    "title": "Sunrise",
    "year": 1927,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 92.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Hustler",
    "year": 1961,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "You Can't Take It With You",
    "year": 1938,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Before Sunrise",
    "year": 1995,
    "type": "Romance",
    "critic_score": 100,
    "people_score": 93.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 4700000.0
  },
  {
    "title": "Cold War",
    "year": 2018,
    "type": "Romance",
    "critic_score": 92,
    "people_score": 81.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 4600000.0
  },
  {
    "title": "Your Name",
    "year": 2016,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 94.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Slumdog Millionaire",
    "year": 2008,
    "type": "Romance",
    "critic_score": 91,
    "people_score": 90.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 141300000.0
  },
  {
    "title": "Wings of Desire",
    "year": 1987,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 120800.0
  },
  {
    "title": "To Catch a Thief",
    "year": 1955,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 84.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Enough Said",
    "year": 2013,
    "type": "Romance",
    "critic_score": 95,
    "people_score": 75.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 17500000.0
  },
  {
    "title": "The Apartment",
    "year": 1960,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 94.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Bull Durham",
    "year": 1988,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 82.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 49900000.0
  },
  {
    "title": "The Young Girls of Rochefort",
    "year": 1967,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 84.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": 88500.0
  },
  {
    "title": "Crouching Tiger, Hidden Dragon",
    "year": 2000,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 86.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 128100000.0
  },
  {
    "title": "Atlantics",
    "year": 2019,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 66.0,
    "total_ratings": "100+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Border",
    "year": 2018,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 76.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 771900.0
  },
  {
    "title": "Titanic",
    "year": 1997,
    "type": "Romance",
    "critic_score": 89,
    "people_score": 69.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 656500.0
  },
  {
    "title": "Lost in Translation",
    "year": 2003,
    "type": "Romance",
    "critic_score": 95,
    "people_score": 85.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 44600000.0
  },
  {
    "title": "Say Anything...",
    "year": 1989,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 85.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 20000000.0
  },
  {
    "title": "Blue",
    "year": 1993,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 93.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 539200.0
  },
  {
    "title": "Elevator to the Gallows",
    "year": 1958,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 91.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 104800.0
  },
  {
    "title": "The Lunchbox",
    "year": 2013,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 87.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 4200000.0
  },
  {
    "title": "A Girl Walks Home Alone at Night",
    "year": 2014,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 75.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 299300.0
  },
  {
    "title": "Sense and Sensibility",
    "year": 1995,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 90.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 42000000.0
  },
  {
    "title": "The Half of It",
    "year": 2020,
    "type": "Romance",
    "critic_score": 97,
    "people_score": 81.0,
    "total_ratings": "500+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "West Side Story",
    "year": 1961,
    "type": "Romance",
    "critic_score": 92,
    "people_score": 84.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "My Beautiful Laundrette",
    "year": 1985,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 75.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "From Here to Eternity",
    "year": 1953,
    "type": "Romance",
    "critic_score": 92,
    "people_score": 84.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Foreign Correspondent",
    "year": 1940,
    "type": "Romance",
    "critic_score": 95,
    "people_score": 81.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Four Weddings and a Funeral",
    "year": 1994,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 74.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 49300000.0
  },
  {
    "title": "Shakespeare in Love",
    "year": 1998,
    "type": "Romance",
    "critic_score": 92,
    "people_score": 80.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 100200000.0
  },
  {
    "title": "Midnight in Paris",
    "year": 2011,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 83.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 56800000.0
  },
  {
    "title": "Manhattan",
    "year": 1979,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 92.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Gilda",
    "year": 1946,
    "type": "Romance",
    "critic_score": 90,
    "people_score": 88.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Masculine-Feminine",
    "year": 1966,
    "type": "Romance",
    "critic_score": 95,
    "people_score": 87.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 199900.0
  },
  {
    "title": "Up in the Air",
    "year": 2009,
    "type": "Romance",
    "critic_score": 90,
    "people_score": 79.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 83800000.0
  },
  {
    "title": "Gloria Bell",
    "year": 2018,
    "type": "Romance",
    "critic_score": 91,
    "people_score": 46.0,
    "total_ratings": "500+",
    "box_office_(gross_usa)": 5600000.0
  },
  {
    "title": "Dave",
    "year": 1993,
    "type": "Romance",
    "critic_score": 95,
    "people_score": 72.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 61000000.0
  },
  {
    "title": "Enchanted",
    "year": 2007,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 80.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 127700000.0
  },
  {
    "title": "Eternal Sunshine of the Spotless Mind",
    "year": 2004,
    "type": "Romance",
    "critic_score": 92,
    "people_score": 94.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 34100000.0
  },
  {
    "title": "The Town",
    "year": 2010,
    "type": "Romance",
    "critic_score": 92,
    "people_score": 85.0,
    "total_ratings": "100,000+",
    "box_office_(gross_usa)": 92200000.0
  },
  {
    "title": "A Summer's Tale",
    "year": 1996,
    "type": "Romance",
    "critic_score": 98,
    "people_score": 83.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 198100.0
  },
  {
    "title": "Moonstruck",
    "year": 1987,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 81.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 80000000.0
  },
  {
    "title": "Before Sunset",
    "year": 2004,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 91.0,
    "total_ratings": "50,000+",
    "box_office_(gross_usa)": 5800000.0
  },
  {
    "title": "Big Night",
    "year": 1996,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 84.0,
    "total_ratings": "5,000+",
    "box_office_(gross_usa)": 12000000.0
  },
  {
    "title": "Howards End",
    "year": 1992,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 82.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 157900.0
  },
  {
    "title": "Shithouse",
    "year": 2020,
    "type": "Romance",
    "critic_score": 97,
    "people_score": NaN,
    "total_ratings": "50+",
    "box_office_(gross_usa)": 18100.0
  },
  {
    "title": "Giant",
    "year": 1956,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 87.0,
    "total_ratings": "10,000+",
    "box_office_(gross_usa)": 183900.0
  },
  {
    "title": "The Crying Game",
    "year": 1992,
    "type": "Romance",
    "critic_score": 94,
    "people_score": 78.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 60700000.0
  },
  {
    "title": "Daughters of the Dust",
    "year": 1991,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 65.0,
    "total_ratings": "1,000+",
    "box_office_(gross_usa)": 41000.0
  },
  {
    "title": "The Quiet Man",
    "year": 1952,
    "type": "Romance",
    "critic_score": 91,
    "people_score": 91.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "The Little Mermaid",
    "year": 1989,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 88.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 109900000.0
  },
  {
    "title": "About a Boy",
    "year": 2002,
    "type": "Romance",
    "critic_score": 93,
    "people_score": 55.0,
    "total_ratings": "250,000+",
    "box_office_(gross_usa)": 40600000.0
  },
  {
    "title": "To All the Boys I've Loved Before",
    "year": 2018,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 86.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": NaN
  },
  {
    "title": "Monsoon Wedding",
    "year": 2001,
    "type": "Romance",
    "critic_score": 95,
    "people_score": 87.0,
    "total_ratings": "25,000+",
    "box_office_(gross_usa)": 13900000.0
  },
  {
    "title": "Revanche",
    "year": 2008,
    "type": "Romance",
    "critic_score": 96,
    "people_score": 83.0,
    "total_ratings": "2,500+",
    "box_office_(gross_usa)": NaN
  }
];

