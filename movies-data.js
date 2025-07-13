const moviesData = [
  {
    id: 1,
    title: "Moana",
    year: 2016,
    category: "Adventure",
    company: "Disney",
    series: "Moana 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg"
  },
  {
    id: 2,
    title: "Luck",
    year: 2022,
    category: "Family",
    company: "Apple/Skydance",
    image: "http://www.impawards.com/2022/posters/luck_xlg.jpg"
  },
  {
    id: 3,
    title: "Inside Out",
    year: 2015,
    category: "Comedy",
    company: "Pixar",
    series: "Inside Out 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg"
  },
  {
    id: 4,
    title: "Kung Fu Panda",
    year: 2008,
    category: "Adventure",
    company: "DreamWorks",
    series: "Kung Fu Panda 1-4",
    image: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
  },
  {
    id: 5,
    title: "Despicable Me",
    year: 2010,
    category: "Comedy",
    company: "Illumination",
    series: "Despicable Me 1-4",
    image: "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_.jpg"
  },
  {
    id: 6,
    title: "Minions",
    year: 2015,
    category: "Comedy",
    company: "Illumination",
    series: "Minions 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_.jpg"
  },
  {
    id: 7,
    title: "Hotel Transylvania",
    year: 2012,
    category: "Comedy",
    company: "Sony",
    series: "Hotel Transylvania 1-4",
    image: "https://www.impawards.com/2012/posters/hotel_transylvania_xlg.jpg"
  },
  {
    id: 8,
    title: "Frozen",
    year: 2013,
    category: "Romance",
    company: "Disney",
    series: "Frozen 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg"
  },
  {
    id: 9,
    title: "The Boss Baby",
    year: 2017,
    category: "Comedy",
    company: "DreamWorks",
    series: "Boss Baby 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg"
  },
  {
    id: 10,
    title: "Megamind",
    year: 2010,
    category: "Comedy",
    company: "DreamWorks",
    series: "Megamind 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_.jpg"
  },
  {
    id: 11,
    title: "Sonic the Hedgehog",
    year: 2020,
    category: "Adventure",
    company: "Paramount",
    series: "Sonic 1, 2, 3",
    image: "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg"
  },
  {
    id: 12,
    title: "Turbo",
    year: 2013,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ3MjU1NDA0N15BMl5BanBnXkFtZTcwNTAyOTU1OQ@@._V1_.jpg"
  },
  {
    id: 13,
    title: "Cars",
    year: 2006,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_.jpg"
  },
  {
    id: 14,
    title: "The Croods",
    year: 2013,
    category: "Adventure",
    company: "DreamWorks",
    series: "Croods 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_.jpg"
  },
  {
    id: 15,
    title: "The Bad Guys",
    year: 2022,
    category: "Comedy",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMDhkYmU0MzctMWEzNy00ODg1LWI3ZjAtMGZlZjkzNWVmMzVjXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
  },
  {
    id: 16,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    category: "Adventure",
    company: "Sony",
    image: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"
  },
  {
    id: 17,
    title: "Tarzan",
    year: 1999,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BYWY1ZDY0OGYtOTVkNy00OTQyLWI5YzQtMmQwNTE0NjE0Y2I4XkEyXkFqcGdeQXVyNjMwMjk0MTQ@._V1_.jpg"
  },
  {
    id: 18,
    title: "Aladdin",
    year: 1992,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_.jpg"
  },
  {
    id: 19,
    title: "Home",
    year: 2015,
    category: "Family",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTA2NTAyNzE1MTZeQTJeQWpwZ15BbWU4MDU0MDkzOTAx._V1_.jpg"
  },
  {
    id: 20,
    title: "The Super Mario Bros. Movie",
    year: 2023,
    category: "Adventure",
    company: "Illumination",
    image: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_.jpg"
  },
  {
    id: 21,
    title: "Storks",
    year: 2016,
    category: "Comedy",
    company: "Warner Bros",
    image: "https://m.media-amazon.com/images/M/MV5BMTYxNjA3NDQ5N15BMl5BanBnXkFtZTgwMzg0NjYxOTE@._V1_.jpg"
  },
  {
    id: 22,
    title: "Abominable",
    year: 2019,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTYzYzY3NDgtYjhlNy00MzBkLTg1MzYtMjliMzFjYzY2ZGY0XkEyXkFqcGdeQXVyNzYzOTM2Mzg@._V1_.jpg"
  },
  {
    id: 23,
    title: "Spies in Disguise",
    year: 2019,
    category: "Adventure",
    company: "20th Century Fox",
    image: "https://m.media-amazon.com/images/M/MV5BNzg3Y2Q1Y2MtMDFmNS00Y2Y4LWE4MDAtNjA2N2JjMTY1NDc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 24,
    title: "Duck Duck Goose",
    year: 2018,
    category: "Family",
    company: "Netflix",
    image: "https://m.media-amazon.com/images/M/MV5BNjUyNWFkOTEtY2QyYi00NDhhLWE5OTgtYmNhMTg5NTA1YjIxXkEyXkFqcGdeQXVyNzYzOTM2Mzg@._V1_.jpg"
  },
  {
    id: 25,
    title: "Wreck-It Ralph",
    year: 2012,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_.jpg"
  },
  {
    id: 26,
    title: "The Emoji Movie",
    year: 2017,
    category: "Comedy",
    company: "Sony",
    image: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTgwODMyNDY0MjI@._V1_.jpg"
  },
  {
    id: 27,
    title: "Soul",
    year: 2020,
    category: "Drama",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg"
  },
  {
    id: 28,
    title: "Luca",
    year: 2021,
    category: "Family",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg"
  },
  {
    id: 29,
    title: "Wish",
    year: 2023,
    category: "Family",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BNzQwODI2N2QtODU2Zi00YjU0LThiZjMtMjk2YzcxOWVhY2M1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    id: 30,
    title: "Encanto",
    year: 2021,
    category: "Family",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
  },
  {
    id: 31,
    title: "Coco",
    year: 2017,
    category: "Family",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg"
  },
  {
    id: 32,
    title: "Vivo",
    year: 2021,
    category: "Family",
    company: "Sony",
    image: "https://m.media-amazon.com/images/M/MV5BNjZhYzFmYzktZDk0MC00OTFiLWFiZDYtZTI1NDg4N2Q1MzU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 33,
    title: "Monkey King",
    year: 2023,
    category: "Adventure",
    company: "Netflix",
    image: "https://m.media-amazon.com/images/M/MV5BZWI5YzEyY2ItM2Y5Yy00ODNlLWI5Y2ItOGUyMWQ3YzFlYjlmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    id: 34,
    title: "Ferdinand",
    year: 2017,
    category: "Family",
    company: "20th Century Fox",
    image: "https://m.media-amazon.com/images/M/MV5BOTIwMDI0NjQ4OF5BMl5BanBnXkFtZTgwNjU0MzAyNDM@._V1_.jpg"
  },
  {
    id: 35,
    title: "Ballerina (Leap!)",
    year: 2016,
    category: "Family",
    company: "Entertainment One",
    image: "https://m.media-amazon.com/images/M/MV5BMjI5OTkyNjQ5OV5BMl5BanBnXkFtZTgwNjM2NjY1MDI@._V1_.jpg"
  },
  {
    id: 36,
    title: "Smallfoot",
    year: 2018,
    category: "Family",
    company: "Warner Bros",
    image: "https://m.media-amazon.com/images/M/MV5BMjI1NDA1NDgwN15BMl5BanBnXkFtZTgwOTc1NTk0NTM@._V1_.jpg"
  },
  {
    id: 37,
    title: "The Ant Bully",
    year: 2006,
    category: "Adventure",
    company: "Warner Bros",
    image: "https://m.media-amazon.com/images/M/MV5BMTI2NTY0NzA4MF5BMl5BanBnXkFtZTYwMjc1NTE3._V1_.jpg"
  },
  {
    id: 38,
    title: "Over the Hedge",
    year: 2006,
    category: "Comedy",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTQwOTU3NDEzMV5BMl5BanBnXkFtZTcwODI5MzgzMQ@@._V1_.jpg"
  },
  {
    id: 39,
    title: "Elemental",
    year: 2023,
    category: "Romance",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BZjYxYzU0OWYtNDRmYy00NGRkLWE0MWUtYzQ0ZDQ1Y2FhOWM5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    id: 40,
    title: "Cloudy with a Chance of Meatballs",
    year: 2009,
    category: "Comedy",
    company: "Sony",
    series: "Cloudy 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTg0MjAwNDI5MV5BMl5BanBnXkFtZTcwODkyMzg2Mg@@._V1_.jpg"
  },
  {
    id: 41,
    title: "Meet the Robinsons",
    year: 2007,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BMTk0NTk2ODQzM15BMl5BanBnXkFtZTcwNTQ5NjQzMw@@._V1_.jpg"
  },
  {
    id: 42,
    title: "Rise of the Guardians",
    year: 2012,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_.jpg"
  },
  {
    id: 43,
    title: "The Angry Birds Movie",
    year: 2016,
    category: "Comedy",
    company: "Sony",
    series: "Angry Birds 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTk3NDY5MDU2NV5BMl5BanBnXkFtZTgwNjI4MDY0NzE@._V1_.jpg"
  },
  {
    id: 44,
    title: "Terra Willy",
    year: 2019,
    category: "Adventure",
    company: "Drawbridge",
    image: "https://m.media-amazon.com/images/M/MV5BZjY3YzE4YjYtYjU3Yi00ZDI5LTg5YjktYzA0OTJmYjVlYzVjXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg"
  },
  {
    id: 45,
    title: "Astro Boy",
    year: 2009,
    category: "Adventure",
    company: "Imagi",
    image: "https://m.media-amazon.com/images/M/MV5BMTIwMDY5NjQ5M15BMl5BanBnXkFtZTcwMjAzNjQyMg@@._V1_.jpg"
  },
  {
    id: 46,
    title: "WALL-E",
    year: 2008,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg"
  },
  {
    id: 47,
    title: "Bolt",
    year: 2008,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BNDQyNDE5NjQ1N15BMl5BanBnXkFtZTcwMDExMTAwMg@@._V1_.jpg"
  },
  {
    id: 48,
    title: "Onward",
    year: 2020,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMTZlYjNjNDEtNTEwNy00M2E3LTk2NmYtZDZkMGM4YzFhMjU5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
  },
  {
    id: 49,
    title: "Chicken Little",
    year: 2005,
    category: "Comedy",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BMTY1NjY0ODQ0Nl5BMl5BanBnXkFtZTcwMjQ0NDYzMw@@._V1_.jpg"
  },
  {
    id: 50,
    title: "Wish Dragon",
    year: 2021,
    category: "Adventure",
    company: "Sony",
    image: "https://m.media-amazon.com/images/M/MV5BNjJmYjVjMmQtMGM1MS00ZjAzLTlmY2QtMzRiY2Q5M2RlMmQ4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 51,
    title: "Big Hero 6",
    year: 2014,
    category: "Adventure",
    company: "Disney",
    series: "Big Hero 6 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_.jpg"
  },
  {
    id: 52,
    title: "The Incredibles",
    year: 2004,
    category: "Adventure",
    company: "Pixar",
    series: "The Incredibles 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"
  },
  {
    id: 53,
    title: "Puss in Boots",
    year: 2011,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxMTU5MTY4MV5BMl5BanBnXkFtZTcwNzgyNjg2NQ@@._V1_.jpg"
  },
  {
    id: 54,
    title: "Dog Gone Trouble",
    year: 2021,
    category: "Comedy",
    company: "Netflix",
    image: "https://m.media-amazon.com/images/M/MV5BZWI0YjY0YzAtNmY1OC00OTRhLThlYzUtOTNjYWI0YzY4YzVkXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg"
  },
  {
    id: 55,
    title: "Ozzy",
    year: 2016,
    category: "Adventure",
    company: "Arcadia Motion Pictures",
    image: "https://m.media-amazon.com/images/M/MV5BMTU4MjUxOTk5Nl5BMl5BanBnXkFtZTgwNjYyMzU0NzE@._V1_.jpg"
  },
  {
    id: 56,
    title: "Blinky Bill",
    year: 2015,
    category: "Adventure",
    company: "Telegael",
    image: "https://m.media-amazon.com/images/M/MV5BMTg5MzA3ODAyN15BMl5BanBnXkFtZTgwNDU5MjE0NzE@._V1_.jpg"
  },
  {
    id: 57,
    title: "Bigfoot",
    year: 2018,
    category: "Adventure",
    company: "Nickelodeon",
    series: "Bigfoot 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BZTYwYjYxYzgtMGE1Ni00YTY5LWE5ZjAtYzA5ZmM1OTQ0ODk1XkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg"
  },
  {
    id: 58,
    title: "Up",
    year: 2009,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_.jpg"
  },
  {
    id: 59,
    title: "The Good Dinosaur",
    year: 2015,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMTc5MTg2NjQ4MV5BMl5BanBnXkFtZTgwNzcxOTY5NjE@._V1_.jpg"
  },
  {
    id: 60,
    title: "Monsters, Inc.",
    year: 2001,
    category: "Comedy",
    company: "Pixar",
    series: "Monsters 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_.jpg"
  },
  {
    id: 61,
    title: "Zootopia",
    year: 2016,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_.jpg"
  },
  {
    id: 62,
    title: "DC League of Super-Pets",
    year: 2022,
    category: "Adventure",
    company: "Warner Bros",
    image: "https://m.media-amazon.com/images/M/MV5BZTIyNzc3NzMtYjQ0ZS00ODlkLTk1YzEtZDVhZTg1YzU2YzY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 63,
    title: "The Wild Robot",
    year: 2024,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BZDY1YTE3YjItY2E0MC00Y2VlLThhYTYtYjA0OTVkZTM1M2Q5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    id: 64,
    title: "Robots",
    year: 2005,
    category: "Adventure",
    company: "20th Century Fox",
    image: "https://m.media-amazon.com/images/M/MV5BNDYxNjI4NDYtMDgwMC00NmIyLWJhY2QtZGIxNDY1ODRlNzQ5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg"
  },
  {
    id: 65,
    title: "Epic",
    year: 2013,
    category: "Adventure",
    company: "20th Century Fox",
    image: "https://m.media-amazon.com/images/M/MV5BMTgzMzYzNDE0Ml5BMl5BanBnXkFtZTcwODg2ODAyOQ@@._V1_.jpg"
  },
  {
    id: 66,
    title: "Sing",
    year: 2016,
    category: "Comedy",
    company: "Illumination",
    series: "Sing 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_.jpg"
  },
  {
    id: 67,
    title: "Rock Dog",
    year: 2016,
    category: "Comedy",
    company: "Huayi Brothers",
    image: "https://m.media-amazon.com/images/M/MV5BMjE2ODQyOTk0N15BMl5BanBnXkFtZTgwNjY5MzY0MDI@._V1_.jpg"
  },
  {
    id: 68,
    title: "Arctic Dogs",
    year: 2019,
    category: "Adventure",
    company: "Entertainment Studios",
    image: "https://m.media-amazon.com/images/M/MV5BZDI3YjVhMjYtYzVhZi00Y2U0LWIyZjQtYjJhNDZhMjI4Y2FjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 69,
    title: "101 Dalmatians",
    year: 1961,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BZmY4YWM1YzUtYzU3ZC00ZTI0LTg3YTItY2Q5YmI0OTQyZWI4XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg"
  },
  {
    id: 70,
    title: "Lightyear",
    year: 2022,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BYTg2Zjk0ZTctM2ZmMi00MDRmLWJjOGYtNWM0YjBmZTBjMjRkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
  },
  {
    id: 71,
    title: "Toy Story",
    year: 1995,
    category: "Adventure",
    company: "Pixar",
    series: "Toy Story 1-4",
    image: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg"
  },
  {
    id: 72,
    title: "Ratatouille",
    year: 2007,
    category: "Comedy",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_.jpg"
  },
  {
    id: 73,
    title: "Paddington",
    year: 2014,
    category: "Family",
    company: "StudioCanal",
    image: "https://m.media-amazon.com/images/M/MV5BMTAxODk0MDE2NDBeQTJeQWpwZ15BbWU4MDE0ODgxNDEx._V1_.jpg"
  },
  {
    id: 74,
    title: "Tangled",
    year: 2010,
    category: "Romance",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_.jpg"
  },
  {
    id: 75,
    title: "The Lorax",
    year: 2012,
    category: "Family",
    company: "Illumination",
    image: "https://m.media-amazon.com/images/M/MV5BOTg1MjA5ODkzNV5BMl5BanBnXkFtZTcwMTQwODg3Nw@@._V1_.jpg"
  },
  {
    id: 76,
    title: "Raya and the Last Dragon",
    year: 2021,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BZWNiOTc4NGItNGY4YS00ZGNkLThkOWEtMDE2ODcxODEwNjkwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
  },
  {
    id: 77,
    title: "Rio",
    year: 2011,
    category: "Adventure",
    company: "20th Century Fox",
    series: "Rio 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTU2MDY3MzAzMl5BMl5BanBnXkFtZTcwMTg0NjM5NA@@._V1_.jpg"
  },
  {
    id: 78,
    title: "Turning Red",
    year: 2022,
    category: "Comedy",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BOWYxZDMxYWUtNjNiZC00MDE1LWI2Y2QtOTZhYzRhMDY2YTc1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
  },
  {
    id: 79,
    title: "How to Train Your Dragon",
    year: 2010,
    category: "Adventure",
    company: "DreamWorks",
    series: "How to Train Your Dragon 1-3",
    image: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_.jpg"
  },
  {
    id: 80,
    title: "Monsters vs. Aliens",
    year: 2009,
    category: "Comedy",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMjQyMg@@._V1_.jpg"
  },
  {
    id: 81,
    title: "Brave",
    year: 2012,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_.jpg"
  },
  {
    id: 82,
    title: "Ice Age",
    year: 2002,
    category: "Adventure",
    company: "20th Century Fox",
    series: "Ice Age Series",
    image: "https://m.media-amazon.com/images/M/MV5BOGE2MTIwYzMtNjU3YS00ZmVmLWE1YzItYTYyMDFiM2Q2ODFhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
    id: 83,
    title: "Horton Hears a Who!",
    year: 2008,
    category: "Family",
    company: "20th Century Fox",
    image: "https://m.media-amazon.com/images/M/MV5BMTkwNTk2NzcyNF5BMl5BanBnXkFtZTcwNTM1MDA0MQ@@._V1_.jpg"
  },
  {
    id: 84,
    title: "Tinker Bell",
    year: 2008,
    category: "Fantasy",
    company: "Disney",
    series: "Tinker Bell Movies (6 films)",
    image: "https://m.media-amazon.com/images/M/MV5BMTM3ODcxMTY5OF5BMl5BanBnXkFtZTcwODQzNjU3Mw@@._V1_.jpg"
  },
  {
    id: 85,
    title: "Orion and the Dark",
    year: 2024,
    category: "Adventure",
    company: "Netflix",
    image: "https://m.media-amazon.com/images/M/MV5BZGY3YzQ1YjAtNDFhYi00ZjY0LTk5YjItY2U5YzJmNmJmY2FkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    id: 86,
    title: "Thelma the Unicorn",
    year: 2024,
    category: "Comedy",
    company: "Netflix",
    image: "https://m.media-amazon.com/images/M/MV5BZjQ0YjBjYzktYjU3ZS00YzI1LTk5YjMtYzQ1YzY5YzQ4YzVkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg"
  },
  {
    id: 87,
    title: "Finding Nemo",
    year: 2003,
    category: "Adventure",
    company: "Pixar",
    series: "Finding Nemo & Finding Dory",
    image: "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
  },
  {
    id: 88,
    title: "Happy Feet",
    year: 2006,
    category: "Adventure",
    company: "Warner Bros",
    image: "https://m.media-amazon.com/images/M/MV5BZWU2NDY2N2ItYTAwYi00YjU0LTg1ZWMtZjNmY2QzMGE0YjRhXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_.jpg"
  },
  {
    id: 89,
    title: "Open Season",
    year: 2006,
    category: "Comedy",
    company: "Sony",
    series: "Open Season 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BNTk2NzUyOTk3Ml5BMl5BanBnXkFtZTcwODQ5OTYzMQ@@._V1_.jpg"
  },
  {
    id: 90,
    title: "Madagascar",
    year: 2005,
    category: "Comedy",
    company: "DreamWorks",
    series: "Madagascar 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BN2U5YWFkNjEtYzZkMi00YTliLThmYmUtM2Y0N2JjODZkYzM0XkEyXkFqcGdeQXVyNTc3MjUzNTI@._V1_.jpg"
  },
  {
    id: 91,
    title: "Penguins of Madagascar",
    year: 2014,
    category: "Comedy",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTEyODk1MjY5NzJeQTJeQWpwZ15BbWU4MDQyMjY2MzEx._V1_.jpg"
  },
  {
    id: 92,
    title: "Shrek",
    year: 2001,
    category: "Comedy",
    company: "DreamWorks",
    series: "Shrek Series",
    image: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
    id: 93,
    title: "The Lion King",
    year: 1994,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg"
  },
  {
    id: 94,
    title: "The Mitchells vs. the Machines",
    year: 2021,
    category: "Adventure",
    company: "Sony",
    image: "https://m.media-amazon.com/images/M/MV5BMjdkZjNjNDUtYzViNS00MTY2LWE0M2UtMTBjYzliYWU5MDY0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
  },
  {
    id: 95,
    title: "The Princess and the Frog",
    year: 2009,
    category: "Romance",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BNzk4ODk1NjMxNF5BMl5BanBnXkFtZTcwODAwNDg3Mg@@._V1_.jpg"

  }
]; 


if (typeof module !== 'undefined' && module.exports) {
    module.exports = moviesData;
}
