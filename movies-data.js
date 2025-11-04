const moviesData = [{
    id: 1,
    title: "Sonic the Hedgehog",
    year: 2020,
    category: "Adventure",
    company: "Paramount",
    series: "Sonic 1, 2, 3",
    image: "./Images/Sonic.jpg"
  },
  {
    id: 2,
    title: "Paddington",
    year: 2014,
    category: "Family",
    company: "StudioCanal",
    image: "./Images/Paddington.jpg"
  },
  {
    id: 3,
    title: "Moana",
    year: 2016,
    category: "Adventure",
    company: "Disney",
    series: "Moana 1 & 2",
    image: "./Images/Moana.jpg"
  },
  {
    id: 4,
    title: "Bigfoot",
    year: 2018,
    category: "Adventure",
    company: "Nickelodeon",
    series: "Bigfoot 1 & 2",
    image: "./Images/Big foot.jpg"
  },
  {
    id: 5,
    title: "Terra Willy",
    year: 2019,
    category: "Adventure",
    company: "Drawbridge",
    image: "./Images/Terra Willy.jpg"
  },
  {
    id: 6,
    title: "Astro Boy",
    year: 2009,
    category: "Adventure",
    company: "Imagi",
    image: "./Images/Astro boy.jpg"
  },
  {
    id: 7,
    title: "WALL-E",
    year: 2008,
    category: "Adventure",
    company: "Pixar",
    image: "./Images/Wall-E.jpg"
  },
  {
    id: 8,
    title: "Bolt",
    year: 2008,
    category: "Adventure",
    company: "Disney",
    image: "./Images/Bolt.jpg"
  },
  {
    id: 9,
    title: "Rock Dog",
    year: 2016,
    category: "Comedy",
    company: "Huayi Brothers",
    image: "./Images/Rock Dog.jpg"
  },
  {
    id: 10,
    title: "Onward",
    year: 2020,
    category: "Adventure",
    company: "Pixar",
    image: "./Images/Onward.jpg"
  },
  {
    id: 11,
    title: "Big Hero 6",
    year: 2014,
    category: "Adventure",
    company: "Disney",
    series: "Big Hero 6 1 & 2",
    image: "./Images/Big Hero 6.jpg"
  },
  {
    id: 12,
    title: "Cars",
    year: 2006,
    category: "Adventure",
    company: "Pixar",
    image: "./Images/Cars.jpg"
  },
  {
    id: 13,
    title: "Ferdinand",
    year: 2017,
    category: "Family",
    company: "20th Century Fox",
    image: "./Images/Ferdinand.jpg"
  },
  {
    id: 14,
    title: "Zootopia",
    year: 2016,
    category: "Adventure",
    company: "Disney",
    image: "./Images/Zootopia.jpg"
  },
  {
    id: 15,
    title: "The Good Dinosaur",
    year: 2015,
    category: "Adventure",
    company: "Pixar",
    image: "./Images/The Good Dinosaur.jpg"
  },
  {
    id: 16,
    title: "Toy Story",
    year: 1995,
    category: "Adventure",
    company: "Pixar",
    series: "Toy Story 1-4",
    image: "./Images/Toy story.jpg"
  },
  {
    id: 17,
    title: "Tarzan",
    year: 1999,
    category: "Adventure",
    company: "Disney",
    image: "./Images/Tarazan.jpg"
  },
  {
    id: 18,
    title: "Aladdin",
    year: 1992,
    category: "Adventure",
    company: "Disney",
    image: "./Images/Aladdin.jpg"
  },
  {
    id: 19,
    title: "Ice Age",
    year: 2002,
    category: "Adventure",
    company: "20th Century Fox",
    series: "Ice Age Series",
    image: "./Images/Ice age.jpg"
  },
  {
    id: 20,
    title: "Frozen",
    year: 2013,
    category: "Romance",
    company: "Disney",
    series: "Frozen 1 & 2",
    image: "./Images/Frozen.jpg"
  },
  {
    id: 21,
    title: "Tangled",
    year: 2010,
    category: "Romance",
    company: "Disney",
    image: "./Images/Tangled.jpg"
  },
  {
    id: 22,
    title: "Inside Out",
    year: 2015,
    category: "Comedy",
    company: "Pixar",
    series: "Inside Out 1 & 2",
    image: "./Images/Inside out.jpg"
  },
  {
    id: 23,
    title: "Luck",
    year: 2022,
    category: "Family",
    company: "Apple/Skydance",
    image: "./Images/Luck.jpg"
  },
  {
    id: 24,
    title: "Home",
    year: 2015,
    category: "Family",
    company: "DreamWorks",
    image: "./Images/Home.jpg"
  },
  {
    id: 25,
    title: "Robots",
    year: 2005,
    category: "Adventure",
    company: "20th Century Fox",
    image: "./Images/Robots.jpg"
  },
  {
    id: 26,
    title: "Soul",
    year: 2020,
    category: "Drama",
    company: "Pixar",
    image: "./Images/Soul.jpg"
  },
  {
    id: 27,
    title: "The Wild Robot",
    year: 2024,
    category: "Adventure",
    company: "DreamWorks",
    image: "./Images/The Wild Robot.jpg"
  },
  {
    id: 28,
    title: "The Emoji Movie",
    year: 2017,
    category: "Comedy",
    company: "Sony",
    image: "./Images/The Emoji Movie.jpg"
  },
  {
    id: 29,
    title: "Epic",
    year: 2013,
    category: "Adventure",
    company: "20th Century Fox",
    image: "./Images/Epic.jpg"
  },
  {
    id: 30,
    title: "Luca",
    year: 2021,
    category: "Family",
    company: "Pixar",
    image: "./Images/Luca.jpg"
  },
  {
    id: 31,
    title: "Ratatouille",
    year: 2007,
    category: "Comedy",
    company: "Pixar",
    image: "./Images/Ratatouille.jpg"
  },
  {
    id: 32,
    title: "Sing",
    year: 2016,
    category: "Comedy",
    company: "Illumination",
    series: "Sing 1 & 2",
    image: "./Images/Sing.jpg"
  },
  {
    id: 33,
    title: "Despicable Me",
    year: 2010,
    category: "Comedy",
    company: "Illumination",
    series: "Despicable Me 1-4",
    image: "./Images/Despicable me.jpg"
  },
  {
    id: 34,
    title: "Minions",
    year: 2015,
    category: "Comedy",
    company: "Illumination",
    series: "Minions 1 & 2",
    image: "./Images/Minions.jpg"
  },
  {
    id: 35,
    title: "Megamind",
    year: 2010,
    category: "Comedy",
    company: "DreamWorks",
    series: "Megamind 1 & 2",
    image: "./Images/Megamind.jpg"
  },
  {
    id: 36,
    title: "Hotel Transylvania",
    year: 2012,
    category: "Comedy",
    company: "Sony",
    series: "Hotel Transylvania 1-4",
    image: "./Images/Hotel Transylvania.jpg"
  },
  {
    id: 37,
    title: "Spies in Disguise",
    year: 2019,
    category: "Adventure",
    company: "20th Century Fox",
    image: "./Images/Spies in Disguise.jpg"
  },
  {
    id: 38,
    title: "The Boss Baby",
    year: 2017,
    category: "Comedy",
    company: "DreamWorks",
    series: "Boss Baby 1 & 2",
    image: "./Images/Boss baby.jpg"
  },
  {
    id: 39,
    title: "Rise of the Guardians",
    year: 2012,
    category: "Adventure",
    company: "DreamWorks",
    image: "./Images/Rise of the Guardians.jpg"
  },
  {
    id: 40,
    title: "Monsters vs. Aliens",
    year: 2009,
    category: "Comedy",
    company: "DreamWorks",
    image: "./Images/Monsters vs Aliens.jpg"
  },
  {
    id: 41,
    title: "Cloudy with a Chance of Meatballs",
    year: 2009,
    category: "Comedy",
    company: "Sony",
    series: "Cloudy 1 & 2",
    image: "./Images/Cloudy with a Chance of Meatballs.jpg"
  },
  {
    id: 42,
    title: "The Bad Guys",
    year: 2022,
    category: "Comedy",
    company: "DreamWorks",
    image: "./Images/Bad guys.jpg"
  },
  {
    id: 43,
    title: "Puss in Boots",
    year: 2011,
    category: "Adventure",
    company: "DreamWorks",
    image: "./Images/Puss in Boots.jpg"
  },
  {
    id: 44,
    title: "Kung Fu Panda",
    year: 2008,
    category: "Adventure",
    company: "DreamWorks",
    series: "Kung Fu Panda 1-4",
    image: "./Images/Kung fu panda.jpg"
  },
  {
    id: 45,
    title: "Wish Dragon",
    year: 2021,
    category: "Adventure",
    company: "Sony",
    image: "./Images/Wish dragon.jpg"
  },
  {
    id: 46,
    title: "The Incredibles",
    year: 2004,
    category: "Adventure",
    company: "Pixar",
    series: "The Incredibles 1 & 2",
    image: "./Images/The Incredibles.jpg"
  },
  {
    id: 47,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    category: "Adventure",
    company: "Sony",
    image: "./Images/Spider-Man Into the Spider-Verse.jpg"
  },
  {
    id: 48,
    title: "Monsters University",
    year: 2013,
    category: "Comedy",
    company: "Pixar",
    image: "./Images/Monster university.jpg"
  },
  {
    id: 49,
    title: "Monsters, Inc.",
    year: 2001,
    category: "Comedy",
    company: "Pixar",
    series: "Monsters 1 & 2",
    image: "./Images/Monster Inc.jpg"
  },
  {
    id: 50,
    title: "How to Train Your Dragon",
    year: 2010,
    category: "Adventure",
    company: "DreamWorks",
    series: "How to Train Your Dragon 1-3",
    image: "./Images/How to train your dragon.jpg"
  },
  {
    id: 51,
    title: "The Angry Birds Movie",
    year: 2016,
    category: "Comedy",
    company: "Sony",
    series: "Angry Birds 1 & 2",
    image: "./Images/Angry birds.jpg"
  },
  {
    id: 52,
    title: "Ozzy",
    year: 2016,
    category: "Adventure",
    company: "Arcadia Motion Pictures",
    image: "./Images/Ozzy.jpg"
  },
  {
    id: 53,
    title: "Storks",
    year: 2016,
    category: "Comedy",
    company: "Warner Bros",
    image: "./Images/Storks.jpg"
  },
  {
    id: 54,
    title: "The Super Mario Bros. Movie",
    year: 2023,
    category: "Adventure",
    company: "Illumination",
    image: "./Images/The Super Mario Bros. Movie.jpg"
  },
  {
    id: 55,
    title: "Turbo",
    year: 2013,
    category: "Adventure",
    company: "DreamWorks",
    image: "./Images/Turbo.jpg"
  },
  {
    id: 56,
    title: "Abominable",
    year: 2019,
    category: "Adventure",
    company: "DreamWorks",
    image: "./Images/Abominable.jpg"
  },
  {
    id: 57,
    title: "Over the Hedge",
    year: 2006,
    category: "Comedy",
    company: "DreamWorks",
    image: "./Images/Over the hedge.jpg"
  },
  {
    id: 58,
    title: "Duck Duck Goose",
    year: 2018,
    category: "Family",
    company: "Netflix",
    image: "./Images/Duck duck goose.jpg"
  },
  {
    id: 59,
    title: "Wreck-It Ralph",
    year: 2012,
    category: "Adventure",
    company: "Disney",
    image: "./Images/Wreck-It Ralph.jpg"
  },
  {
    id: 60,
    title: "Wish",
    year: 2023,
    category: "Family",
    company: "Disney",
    image: "./Images/Wish.jpg"
  },
  {
    id: 61,
    title: "Encanto",
    year: 2021,
    category: "Family",
    company: "Disney",
    image: "./Images/Encanto.jpg"
  },
  {
    id: 62,
    title: "Coco",
    year: 2017,
    category: "Family",
    company: "Pixar",
    image: "./Images/Coco.jpg"
  },
  {
    id: 63,
    title: "Vivo",
    year: 2021,
    category: "Family",
    company: "Sony",
    image: "./Images/Vivo.jpg"
  },
  {
    id: 64,
    title: "Monkey King",
    year: 2023,
    category: "Adventure",
    company: "Netflix",
    image: "./Images/Monkey king.jpg"
  },
  {
    id: 65,
    title: "Rio",
    year: 2011,
    category: "Adventure",
    company: "20th Century Fox",
    series: "Rio 1 & 2",
    image: "./Images/Rio.jpg"
  },
  {
    id: 66,
    title: "Ballerina (Leap!)",
    year: 2016,
    category: "Family",
    company: "Entertainment One",
    image: "./Images/Ballerina.jpg"
  },
  {
    id: 67,
    title: "Smallfoot",
    year: 2018,
    category: "Family",
    company: "Warner Bros",
    image: "./Images/Small foot.jpg"
  },
  {
    id: 68,
    title: "The Ant Bully",
    year: 2006,
    category: "Adventure",
    company: "Warner Bros",
    image: "./Images/Ant bully.jpg"
  },
  {
    id: 69,
    title: "Elemental",
    year: 2023,
    category: "Romance",
    company: "Pixar",
    image: "./Images/Elemental.jpg"
  },
  {
    id: 70,
    title: "Chicken Little",
    year: 2005,
    category: "Comedy",
    company: "Disney",
    image: "./Images/Chicken little.jpg"
  },
  {
    id: 71,
    title: "Blinky Bill",
    year: 2015,
    category: "Adventure",
    company: "Telegael",
    image: "./Images/Blinky bill.jpg"
  },
  {
    id: 72,
    title: "Up",
    year: 2009,
    category: "Adventure",
    company: "Pixar",
    image: "./Images/Up.jpg"
  },
  {
    id: 73,
    title: "DC League of Super-Pets",
    year: 2022,
    category: "Adventure",
    company: "Warner Bros",
    image: "./Images/DC League of Super-Pets.jpg"
  },
  {
    id: 74,
    title: "The Lorax",
    year: 2012,
    category: "Family",
    company: "Illumination",
    image: "./Images/The lorax.jpg"
  },
  {
    id: 75,
    title: "101 Dalmatians",
    year: 1961,
    category: "Adventure",
    company: "Disney",
    image: "./Images/101 Dalmatians.jpg"
  },
  {
    id: 76,
    title: "Raya and the Last Dragon",
    year: 2021,
    category: "Adventure",
    company: "Disney",
    image: "./Images/Raya and the last dragon.jpg"
  },
  {
    id: 77,
    title: "Turning Red",
    year: 2022,
    category: "Comedy",
    company: "Pixar",
    image: "./Images/Turning red.jpg"
  },
  {
    id: 78,
    title: "Horton Hears a Who!",
    year: 2008,
    category: "Family",
    company: "20th Century Fox",
    image: "./Images/Horton Hears a Who.jpg"
  },
  {
    id: 79,
    title: "Thelma the Unicorn",
    year: 2024,
    category: "Comedy",
    company: "Netflix",
    image: "./Images/Thelma the Unicorn.jpg"
  },
  {
    id: 80,
    title: "Dog Gone Trouble",
    year: 2021,
    category: "Comedy",
    company: "Netflix",
    image: "./Images/Dog gone trouble.jpg"
  },
  {
    id: 81,
    title: "Open Season",
    year: 2006,
    category: "Comedy",
    company: "Sony",
    series: "Open Season 1 & 2",
    image: "./Images/Open season.jpg"
  },
  {
    id: 82,
    title: "Meet the Robinsons",
    year: 2007,
    category: "Adventure",
    company: "Disney",
    image: "./Images/Meet the Robinsons.jpg"
  },
  {
    id: 83,
    title: "The Lion King",
    year: 1994,
    category: "Adventure",
    company: "Disney",
    image: "./Images/The Lion King.jpg"
  },
  {
    id: 84,
    title: "Madagascar",
    year: 2005,
    category: "Comedy",
    company: "DreamWorks",
    series: "Madagascar 1 & 2",
    image: "./Images/Madagascar.jpg"
  },
  {
    id: 85,
    title: "Penguins of Madagascar",
    year: 2014,
    category: "Comedy",
    company: "DreamWorks",
    image: "./Images/Penguins of Madagascar.jpg"
  },
  {
    id: 86,
    title: "Shrek",
    year: 2001,
    category: "Comedy",
    company: "DreamWorks",
    series: "Shrek Series",
    image: "./Images/Shrek.jpg"
  },
  {
    id: 87,
    title: "Happy Feet",
    year: 2006,
    category: "Adventure",
    company: "Warner Bros",
    image: "./Images/Happy Feet.jpg"
  },
  {
    id: 88,
    title: "Finding Nemo",
    year: 2003,
    category: "Adventure",
    company: "Pixar",
    series: "Finding Nemo & Finding Dory",
    image: "./Images/Finding Nemo.jpg"
  },
  {
    id: 89,
    title: "The Croods",
    year: 2013,
    category: "Adventure",
    company: "DreamWorks",
    series: "Croods 1 & 2",
    image: "./Images/The Croods.jpg"
  },
  {
    id: 90,
    title: "Lightyear",
    year: 2022,
    category: "Adventure",
    company: "Pixar",
    image: "./Images/Lightyear.jpg"
  },
  {
    id: 91,
    title: "Brave",
    year: 2012,
    category: "Adventure",
    company: "Pixar",
    image: "./Images/Brave.jpg"
  },
  {
    id: 92,
    title: "Tinker Bell",
    year: 2008,
    category: "Fantasy",
    company: "Disney",
    series: "Tinker Bell Movies (6 films)",
    image: "./Images/Tinker Bell.jpg"
  },
  {
    id: 93,
    title: "Orion and the Dark",
    year: 2024,
    category: "Adventure",
    company: "Netflix",
    image: "./Images/Orion and the Dark.jpg"
  },
  {
    id: 94,
    title: "The Mitchells vs. the Machines",
    year: 2021,
    category: "Adventure",
    company: "Sony",
    image: "./Images/The Mitchells vs. the Machines.jpg"
  },
  {
    id: 95,
    title: "The Princess and the Frog",
    year: 2009,
    category: "Romance",
    company: "Disney",
    image: "./Images/The Princess and the Frog.jpg"
  }];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = moviesData;
}
/* 
1. nut job next to Over the Hedge
2. planes next to cars
3. the legend of hercules next to tarazan
4. beauty and the beast next to encanto
5.  */