const moviesData = [
  {
    id: 1,
    title: "Sonic the Hedgehog",
    year: 2020,
    category: "Adventure",
    company: "Paramount",
    series: "Sonic 1, 2, 3",
    image: "https://m.media-amazon.com/images/M/MV5BNTdmNmI4MzQtZTAzNS00MjhjLWEzOGQtZjI1NDNjZjk4N2JjXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg"
  },
  {
    id: 2,
    title: "Paddington",
    year: 2014,
    category: "Family",
    company: "StudioCanal",
    image: "https://www.impawards.com/2014/posters/paddington_bear_ver3.jpg"
  },
  {
    id: 3,
    title: "Moana",
    year: 2016,
    category: "Adventure",
    company: "Disney",
    series: "Moana 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_.jpg"
  },
  {
    id: 4,
    title: "Bigfoot",
    year: 2018,
    category: "Adventure",
    company: "Nickelodeon",
    series: "Bigfoot 1 & 2",
    image: "https://www.impawards.com/intl/misc/2017/posters/son_of_bigfoot.jpg"
  },
  {
    id: 5,
    title: "Terra Willy",
    year: 2019,
    category: "Adventure",
    company: "Drawbridge",
    image: "https://www.impawards.com/intl/france/2019/posters/terra_willy_planete_inconnue_xlg.jpg"
  },
  {
    id: 6,
    title: "Astro Boy",
    year: 2009,
    category: "Adventure",
    company: "Imagi",
    image: "https://picfiles.alphacoders.com/354/354733.jpg"
  },
  {
    id: 7,
    title: "WALL-E",
    year: 2008,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg"
  },
  {
    id: 8,
    title: "Bolt",
    year: 2008,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BNDQyNDE5NjQ1N15BMl5BanBnXkFtZTcwMDExMTAwMg@@._V1_.jpg"
  },
  {
    id: 9,
    title: "Rock Dog",
    year: 2016,
    category: "Comedy",
    company: "Huayi Brothers",
    image: "https://www.impawards.com/2016/posters/rock_dog_xlg.jpg"
  },
  {
    id: 10,
    title: "Onward",
    year: 2020,
    category: "Adventure",
    company: "Pixar",
    image: "https://www.impawards.com/2020/posters/onward_xlg.jpg"
  },
  {
    id: 11,
    title: "Big Hero 6",
    year: 2014,
    category: "Adventure",
    company: "Disney",
    series: "Big Hero 6 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_.jpg"
  },
  {
    id: 12,
    title: "Cars",
    year: 2006,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_.jpg"
  },
  {
    id: 13,
    title: "Ferdinand",
    year: 2017,
    category: "Family",
    company: "20th Century Fox",
    image: "https://m.media-amazon.com/images/M/MV5BOTIwMDI0NjQ4OF5BMl5BanBnXkFtZTgwNjU0MzAyNDM@._V1_.jpg"
  },
  {
    id: 14,
    title: "Zootopia",
    year: 2016,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_.jpg"
  },
  {
    id: 15,
    title: "The Good Dinosaur",
    year: 2015,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMTc5MTg2NjQ4MV5BMl5BanBnXkFtZTgwNzcxOTY5NjE@._V1_.jpg"
  },
  {
    id: 16,
    title: "Toy Story",
    year: 1995,
    category: "Adventure",
    company: "Pixar",
    series: "Toy Story 1-4",
    image: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg"
  },
  {
    id: 17,
    title: "Tarzan",
    year: 1999,
    category: "Adventure",
    company: "Disney",
    image: "https://www.impawards.com/1999/posters/tarzan_ver2_xlg.jpg"
  },
  {
    id: 18,
    title: "Aladdin",
    year: 1992,
    category: "Adventure",
    company: "Disney",
    image: "https://www.impawards.com/1992/posters/aladdin_ver1_xlg.jpg"
  },
  {
    id: 19,
    title: "Ice Age",
    year: 2002,
    category: "Adventure",
    company: "20th Century Fox",
    series: "Ice Age Series",
    image: "http://www.impawards.com/2002/posters/ice_age_ver2_xlg.jpg"
  },
  {
    id: 20,
    title: "Frozen",
    year: 2013,
    category: "Romance",
    company: "Disney",
    series: "Frozen 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg"
  },
  {
    id: 21,
    title: "Tangled",
    year: 2010,
    category: "Romance",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BMTAxNDYxMjg0MjNeQTJeQWpwZ15BbWU3MDcyNTk2OTM@._V1_.jpg"
  },
  {
    id: 22,
    title: "Inside Out",
    year: 2015,
    category: "Comedy",
    company: "Pixar",
    series: "Inside Out 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg"
  },
  {
    id: 23,
    title: "Luck",
    year: 2022,
    category: "Family",
    company: "Apple/Skydance",
    image: "http://www.impawards.com/2022/posters/luck_xlg.jpg"
  },
  {
    id: 24,
    title: "Home",
    year: 2015,
    category: "Family",
    company: "DreamWorks",
    image: "https://www.impawards.com/2015/posters/home_xlg.jpg"
  },
  {
    id: 25,
    title: "Robots",
    year: 2005,
    category: "Adventure",
    company: "20th Century Fox",
    image: "https://www.impawards.com/2005/posters/robots_xlg.jpg"
  },
  {
    id: 26,
    title: "Soul",
    year: 2020,
    category: "Drama",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_.jpg"
  },
  {
    id: 27,
    title: "The Wild Robot",
    year: 2024,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://www.impawards.com/2024/posters/wild_robot_xlg.jpg"
  },
  {
    id: 28,
    title: "The Emoji Movie",
    year: 2017,
    category: "Comedy",
    company: "Sony",
    image: "https://image.tmdb.org/t/p/original/60bTx5z9zL1AqCjZ0gmWoRMJ6Bb.jpg"
  },
  {
    id: 29,
    title: "Epic",
    year: 2013,
    category: "Adventure",
    company: "20th Century Fox",
    image: "https://www.impawards.com/2013/posters/epic_xlg.jpg"
  },
  {
    id: 30,
    title: "Luca",
    year: 2021,
    category: "Family",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg"
  },
  {
    id: 31,
    title: "Ratatouille",
    year: 2007,
    category: "Comedy",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_.jpg"
  },
  {
    id: 32,
    title: "Sing",
    year: 2016,
    category: "Comedy",
    company: "Illumination",
    series: "Sing 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTYzODYzODU2Ml5BMl5BanBnXkFtZTgwNTc1MTA2NzE@._V1_.jpg"
  },
  {
    id: 33,
    title: "Despicable Me",
    year: 2010,
    category: "Comedy",
    company: "Illumination",
    series: "Despicable Me 1-4",
    image: "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_.jpg"
  },
  {
    id: 34,
    title: "Minions",
    year: 2015,
    category: "Comedy",
    company: "Illumination",
    series: "Minions 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_.jpg"
  },
  {
    id: 35,
    title: "Megamind",
    year: 2010,
    category: "Comedy",
    company: "DreamWorks",
    series: "Megamind 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTAzMzI0NTMzNDBeQTJeQWpwZ15BbWU3MDM3NTAyOTM@._V1_.jpg"
  },
  {
    id: 36,
    title: "Hotel Transylvania",
    year: 2012,
    category: "Comedy",
    company: "Sony",
    series: "Hotel Transylvania 1-4",
    image: "https://www.impawards.com/2012/posters/hotel_transylvania_xlg.jpg"
  },
  {
    id: 37,
    title: "Spies in Disguise",
    year: 2019,
    category: "Adventure",
    company: "20th Century Fox",
    image: "https://www.impawards.com/2019/posters/spies_in_disguise_xlg.jpg"
  },
  {
    id: 38,
    title: "The Boss Baby",
    year: 2017,
    category: "Comedy",
    company: "DreamWorks",
    series: "Boss Baby 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTg5MzUxNzgxNV5BMl5BanBnXkFtZTgwMTM2NzQ3MjI@._V1_.jpg"
  },
  {
    id: 39,
    title: "Rise of the Guardians",
    year: 2012,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_.jpg"
  },
  {
    id: 40,
    title: "Monsters vs. Aliens",
    year: 2009,
    category: "Comedy",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTY0OTQ3MzE3MV5BMl5BanBnXkFtZTcwMDQyMjQyMg@@._V1_.jpg"
  },
  {
    id: 41,
    title: "Cloudy with a Chance of Meatballs",
    year: 2009,
    category: "Comedy",
    company: "Sony",
    series: "Cloudy 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTg0MjAwNDI5MV5BMl5BanBnXkFtZTcwODkyMzg2Mg@@._V1_.jpg"
  },
  {
    id: 42,
    title: "The Bad Guys",
    year: 2022,
    category: "Comedy",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMDhkYmU0MzctMWEzNy00ODg1LWI3ZjAtMGZlZjkzNWVmMzVjXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
  },
  {
    id: 43,
    title: "Puss in Boots",
    year: 2011,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://m.media-amazon.com/images/M/MV5BMTMxMTU5MTY4MV5BMl5BanBnXkFtZTcwNzgyNjg2NQ@@._V1_.jpg"
  },
  {
    id: 44,
    title: "Kung Fu Panda",
    year: 2008,
    category: "Adventure",
    company: "DreamWorks",
    series: "Kung Fu Panda 1-4",
    image: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"
  },
  {
    id: 45,
    title: "Wish Dragon",
    year: 2021,
    category: "Adventure",
    company: "Sony",
    image: "https://www.impawards.com/intl/china/2021/posters/wish_dragon_xlg.jpg"
  },
  {
    id: 46,
    title: "The Incredibles",
    year: 2004,
    category: "Adventure",
    company: "Pixar",
    series: "The Incredibles 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg"
  },
  {
    id: 47,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    category: "Adventure",
    company: "Sony",
    image: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"
  },
  {
    id: 48,
    title: "Monsters University",
    year: 2013,
    category: "Comedy",
    company: "Pixar",
    series: "Monsters 1 & 2",
    image: "https://www.impawards.com/2009/posters/monsters_vs_aliens.jpg"
  },
  {
    id: 49,
    title: "Monsters, Inc.",
    year: 2001,
    category: "Comedy",
    company: "Pixar",
    series: "Monsters 1 & 2",
    image: "https://www.impawards.com/2009/posters/monsters_vs_aliens.jpg"
  },
  {
    id: 50,
    title: "How to Train Your Dragon",
    year: 2010,
    category: "Adventure",
    company: "DreamWorks",
    series: "How to Train Your Dragon 1-3",
    image: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_.jpg"
  },
  {
    id: 51,
    title: "The Angry Birds Movie",
    year: 2016,
    category: "Comedy",
    company: "Sony",
    series: "Angry Birds 1 & 2",
    image: "https://www.impawards.com/2016/posters/angry_birds_xlg.jpg"
  },
  {
    id: 52,
    title: "Ozzy",
    year: 2016,
    category: "Adventure",
    company: "Arcadia Motion Pictures",
    image: "https://www.impawards.com/intl/spain/2016/posters/ozzy_xlg.jpg"
  },
  {
    id: 53,
    title: "Storks",
    year: 2016,
    category: "Comedy",
    company: "Warner Bros",
    image: "http://www.impawards.com/2016/posters/storks_xlg.jpg"
  },
  {
    id: 54,
    title: "The Super Mario Bros. Movie",
    year: 2023,
    category: "Adventure",
    company: "Illumination",
    image: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_.jpg"
  },
  {
    id: 55,
    title: "Turbo",
    year: 2013,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://www.impawards.com/2013/posters/turbo_xlg.jpg"
  },
  {
    id: 56,
    title: "Abominable",
    year: 2019,
    category: "Adventure",
    company: "DreamWorks",
    image: "https://www.impawards.com/2019/posters/abominable_ver3_xlg.jpg"
  },
  {
    id: 57,
    title: "Over the Hedge",
    year: 2006,
    category: "Comedy",
    company: "DreamWorks",
    image: "https://www.impawards.com/2006/posters/over_the_hedge_xlg.jpg"
  },
  {
    id: 58,
    title: "Duck Duck Goose",
    year: 2018,
    category: "Family",
    company: "Netflix",
    image: "https://www.impawards.com/2018/posters/duck_duck_goose_xlg.jpg"
  },
  {
    id: 59,
    title: "Wreck-It Ralph",
    year: 2012,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BNzMxNTExOTkyMF5BMl5BanBnXkFtZTcwMzEyNDc0OA@@._V1_.jpg"
  },
  {
    id: 60,
    title: "Wish",
    year: 2023,
    category: "Family",
    company: "Disney",
    image: "https://image.tmdb.org/t/p/original/nesuSdJakNkf0zs7OfoasB6Clxf.jpg"
  },
  {
    id: 61,
    title: "Encanto",
    year: 2021,
    category: "Family",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
  },
  {
    id: 62,
    title: "Coco",
    year: 2017,
    category: "Family",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg"
  },
  {
    id: 63,
    title: "Vivo",
    year: 2021,
    category: "Family",
    company: "Sony",
    image: "https://www.impawards.com/2021/posters/vivo_xlg.jpg"
  },
  {
    id: 64,
    title: "Monkey King",
    year: 2023,
    category: "Adventure",
    company: "Netflix",
    image: "https://www.impawards.com/2023/posters/monkey_king_xlg.jpg"
  },
  {
    id: 65,
    title: "Rio",
    year: 2011,
    category: "Adventure",
    company: "20th Century Fox",
    series: "Rio 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTU2MDY3MzAzMl5BMl5BanBnXkFtZTcwMTg0NjM5NA@@._V1_.jpg"
  },
  {
    id: 66,
    title: "Ballerina (Leap!)",
    year: 2016,
    category: "Family",
    company: "Entertainment One",
    image: "https://www.impawards.com/intl/france/2016/posters/ballerina_ver3_xlg.jpg"
  },
  {
    id: 67,
    title: "Smallfoot",
    year: 2018,
    category: "Family",
    company: "Warner Bros",
    image: "https://www.impawards.com/2018/posters/smallfoot_ver10_xlg.jpg"
  },
  {
    id: 68,
    title: "The Ant Bully",
    year: 2006,
    category: "Adventure",
    company: "Warner Bros",
    image: "https://www.impawards.com/2006/posters/ant_bully_ver2_xlg.jpg"
  },
  {
    id: 69,
    title: "Elemental",
    year: 2023,
    category: "Romance",
    company: "Pixar",
    image: "https://www.impawards.com/2023/posters/elemental_xlg.jpg"
  },
  {
    id: 70,
    title: "Chicken Little",
    year: 2005,
    category: "Comedy",
    company: "Disney",
    image: "https://www.impawards.com/2005/posters/chicken_little_xlg.jpg"
  },
  {
    id: 71,
    title: "Blinky Bill",
    year: 2015,
    category: "Adventure",
    company: "Telegael",
    image: "https://www.impawards.com/2015/posters/blinky_bill_the_movie_xlg.jpg"
  },
  {
    id: 72,
    title: "Up",
    year: 2009,
    category: "Adventure",
    company: "Pixar",
    image: "https://www.impawards.com/2009/posters/up_xlg.jpg"
  },
  {
    id: 73,
    title: "DC League of Super-Pets",
    year: 2022,
    category: "Adventure",
    company: "Warner Bros",
    image: "https://xpatloop.com/binaries/content/gallery/xpatloop/movies/dc-league-of-super-pets.jpg"
  },
  {
    id: 74,
    title: "The Lorax",
    year: 2012,
    category: "Family",
    company: "Illumination",
    image: "http://www.impawards.com/2022/posters/lorax_ver2_xlg.jpg"
  },
  {
    id: 75,
    title: "101 Dalmatians",
    year: 1961,
    category: "Adventure",
    company: "Disney",
    image: "https://www.impawards.com/1961/posters/one_hundred_and_one_dalmatians_xlg.jpg"
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
    title: "Turning Red",
    year: 2022,
    category: "Comedy",
    company: "Pixar",
    image: "https://www.impawards.com/2022/posters/turning_red_xlg.jpg"
  },
  {
    id: 78,
    title: "Horton Hears a Who!",
    year: 2008,
    category: "Family",
    company: "20th Century Fox",
    image: "https://www.impawards.com/2008/posters/horton_hears_a_who_xlg.jpg"
  },
  {
    id: 79,
    title: "Thelma the Unicorn",
    year: 2024,
    category: "Comedy",
    company: "Netflix",
    image: "https://www.impawards.com/2024/posters/thelma_the_unicorn_xlg.jpg"
  },
  {
    id: 80,
    title: "Dog Gone Trouble",
    year: 2021,
    category: "Comedy",
    company: "Netflix",
    image: "https://m.media-amazon.com/images/M/MV5BZWI0YjY0YzAtNmY1OC00OTRhLThlYzUtOTNjYWI0YzY4YzVkXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg"
  },
  {
    id: 81,
    title: "Open Season",
    year: 2006,
    category: "Comedy",
    company: "Sony",
    series: "Open Season 1 & 2",
    image: "https://www.impawards.com/2006/posters/open_season_xlg.jpg"
  },
  {
    id: 82,
    title: "Meet the Robinsons",
    year: 2007,
    category: "Adventure",
    company: "Disney",
    image: "https://www.impawards.com/2007/posters/meet_the_robinsons_xlg.jpg"
  },
  {
    id: 83,
    title: "The Lion King",
    year: 1994,
    category: "Adventure",
    company: "Disney",
    image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg"
  },
  {
    id: 84,
    title: "Madagascar",
    year: 2005,
    category: "Comedy",
    company: "DreamWorks",
    series: "Madagascar 1 & 2",
    image: "https://www.impawards.com/2005/posters/madagascar_ver10.jpg"
  },
  {
    id: 85,
    title: "Penguins of Madagascar",
    year: 2014,
    category: "Comedy",
    company: "DreamWorks",
    image: "https://www.impawards.com/2014/posters/penguins_of_madagascar_xlg.jpg"
  },
  {
    id: 86,
    title: "Shrek",
    year: 2001,
    category: "Comedy",
    company: "DreamWorks",
    series: "Shrek Series",
    image: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
  },
  {
    id: 87,
    title: "Happy Feet",
    year: 2006,
    category: "Adventure",
    company: "Warner Bros",
    image: "https://www.impawards.com/2006/posters/happy_feet_xlg.jpg"
  },
  {
    id: 88,
    title: "Finding Nemo",
    year: 2003,
    category: "Adventure",
    company: "Pixar",
    series: "Finding Nemo & Finding Dory",
    image: "https://www.impawards.com/2003/posters/finding_nemo_xlg.jpg"
  },
  {
    id: 89,
    title: "The Croods",
    year: 2013,
    category: "Adventure",
    company: "DreamWorks",
    series: "Croods 1 & 2",
    image: "https://m.media-amazon.com/images/M/MV5BMTcyOTc2OTA1Ml5BMl5BanBnXkFtZTcwOTI1MjkzOQ@@._V1_.jpg"
  },
  {
    id: 90,
    title: "Lightyear",
    year: 2022,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BYTg2Zjk0ZTctM2ZmMi00MDRmLWJjOGYtNWM0YjBmZTBjMjRkXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg"
  },
  {
    id: 91,
    title: "Brave",
    year: 2012,
    category: "Adventure",
    company: "Pixar",
    image: "https://m.media-amazon.com/images/M/MV5BMzgwODk3ODA1NF5BMl5BanBnXkFtZTcwNjU3NjQ0Nw@@._V1_.jpg"
  },
  {
    id: 92,
    title: "Tinker Bell",
    year: 2008,
    category: "Fantasy",
    company: "Disney",
    series: "Tinker Bell Movies (6 films)",
    image: "https://www.impawards.com/intl/misc/2014/posters/tinkerbell_and_the_legend_of_the_neverbeast.jpg"
  },
  {
    id: 93,
    title: "Orion and the Dark",
    year: 2024,
    category: "Adventure",
    company: "Netflix",
    image: "https://www.impawards.com/2024/posters/orion_and_the_dark_xlg.jpg"
  },
  {
    id: 94,
    title: "The Mitchells vs. the Machines",
    year: 2021,
    category: "Adventure",
    company: "Sony",
    image: "https://www.impawards.com/2021/posters/mitchells_vs_the_machines_xlg.jpg"
  },
  {
    id: 95,
    title: "The Princess and the Frog",
    year: 2009,
    category: "Romance",
    company: "Disney",
    image: "https://www.impawards.com/2009/posters/princess_and_the_frog_xlg.jpg"
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = moviesData;
}
