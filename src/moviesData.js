const movies = [
  {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjsdOIiX4p7swefluEYYPBsNooir8VfBd6Q&s",
      videoUrl: "https://www.youtube.com/embed/8hP9D6kZseM",
      genre: "Sci-Fi",
  },
  {
      id: 2,
      title: "The Matrix",
      description: "A sci-fi masterpiece about virtual reality.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JpAa61BgkNomeBtnOV74IKWanzABJ7Byug&s",
      videoUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
      genre: "Sci-Fi",
  },
  {
      id: 3,
      title: "Interstellar",
      description: "A space epic exploring love and survival.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBLnQfngb4FZHFvi_6RZWWkBMp5X_u-o7iA&s",
      videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
      genre: "Sci-Fi",
  },
  {
      id: 4,
      title: "The Dark Knight",
      description: "A superhero film with iconic performances.",
      poster: "https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      videoUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
      genre: "Action",
  },
  {
      id: 5,
      title: "Avengers: Endgame",
      description: "The epic conclusion to the Avengers saga.",
      poster: "https://image.tmdb.org/t/p/w200/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      videoUrl: "https://www.youtube.com/embed/TcMBFSGVi1c",
      genre: "Action",
  },
  {
      id: 6,
      title: "Joker",
      description: "A psychological exploration of a comic book villain.",
      poster: "https://image.tmdb.org/t/p/w200/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      videoUrl: "https://www.youtube.com/embed/zAGVQLHvwOY",
      genre: "Drama",
  },
  {
      id: 7,
      title: "Titanic",
      description: "A romantic drama set against a tragic disaster.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9bsx1Ed4q51PLo5AERF9A_p9Vjynd7XBpw&s",
      videoUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ",
      genre: "Romance",
  },
  {
      id: 8,
      title: "Forrest Gump",
      description: "The story of a man with an extraordinary journey.",
      poster: "https://image.tmdb.org/t/p/w200/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
      genre: "Drama",
  },
  {
      id: 9,
      title: "The Shawshank Redemption",
      description: "A story of hope and friendship in a prison.",
      poster: "https://image.tmdb.org/t/p/w200/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      videoUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
      genre: "Drama",
  },
  {
      id: 10,
      title: "Gladiator",
      description: "An epic tale of a fallen general seeking revenge.",
      poster: "https://image.tmdb.org/t/p/w200/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      videoUrl: "https://www.youtube.com/embed/owK1qxDselE",
      genre: "Action",
  },
  {
      id: 11,
      title: "Pulp Fiction",
      description: "A stylized crime drama with interwoven stories.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOQWb7qwGT0Lx3Lhazq-rmUPtugkJ4UEaAA&s",
      videoUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
      genre: "Crime",
  },
  {
      id: 12,
      title: "The Godfather",
      description: "A tale of a powerful mafia family.",
      poster: "https://image.tmdb.org/t/p/w200/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      videoUrl: "https://www.youtube.com/embed/sY1S34973zA",
      genre: "Crime",
  },
  {
      id: 13,
      title: "The Lion King",
      description: "An animated classic about family and responsibility.",
      poster: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
      videoUrl: "https://www.youtube.com/embed/4sj1MT05lAA",
      genre: "Animation",
  },
  {
      id: 14,
      title: "Finding Nemo",
      description: "A heartwarming underwater adventure.",
      poster: "https://image.tmdb.org/t/p/w200/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
      videoUrl: "https://www.youtube.com/embed/wZdpNglLbt8",
      genre: "Animation",
  },
  {
      id: 15,
      title: "Frozen",
      description: "A magical story about family and love.",
      poster: "https://image.tmdb.org/t/p/w200/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
      videoUrl: "https://www.youtube.com/embed/TbQm5doF_Uc",
      genre: "Animation",
  },
  {
      id: 16,
      title: "Toy Story",
      description: "A tale of friendship and adventure among toys.",
      poster: "https://image.tmdb.org/t/p/w200/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
      videoUrl: "https://www.youtube.com/embed/KYz2wyBy3kc",
      genre: "Animation",
  },
  {
      id: 17,
      title: "Avatar",
      description: "A visual spectacle set on the planet Pandora.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tMDmGpdUANiBhrYP30GLPrVvcNZed4sTeA&s",
      videoUrl: "https://www.youtube.com/embed/5PSNL1qE6VY",
      genre: "Sci-Fi",
  },
  {
      id: 18,
      title: "Harry Potter and the Sorcerer's Stone",
      description: "The beginning of a magical saga.",
      poster: "https://musicart.xboxlive.com/7/8ce05000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      videoUrl: "https://www.youtube.com/embed/VyHV0BRtdxo",
      genre: "Fantasy",
  },
  {
      id: 19,
      title: "Star Wars: A New Hope",
      description: "The classic space opera that started it all.",
      poster: "https://image.tmdb.org/t/p/w200/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      videoUrl: "https://www.youtube.com/embed/vZ734NWnAHA",
      genre: "Sci-Fi",
  },
  {
      id: 20,
      title: "Black Panther",
      description: "A superhero movie celebrating African culture.",
      poster: "https://image.tmdb.org/t/p/w200/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      videoUrl: "https://www.youtube.com/embed/xjDjIWPwcPU",
      genre: "Action",
  },
  {
      id: 21,
      title: "Spider-Man: Into the Spider-Verse",
      description: "A visually stunning animated superhero story.",
      poster: "https://image.tmdb.org/t/p/w200/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      videoUrl: "https://www.youtube.com/embed/tg52up16eq0",
      genre: "Animation",
  },
  {
      id: 22,
      title: "The Avengers",
      description: "Marvel's team of superheroes saves the world.",
      poster: "https://image.tmdb.org/t/p/w200/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      videoUrl: "https://www.youtube.com/embed/eOrNdBpGMv8",
      genre: "Action",
  },
  {
      id: 23,
      title: "Guardians of the Galaxy",
      description: "A ragtag group of heroes protects the universe.",
      poster: "https://image.tmdb.org/t/p/w200/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      videoUrl: "https://www.youtube.com/embed/d96cjJhvlMA",
      genre: "Action",
  },
  {
      id: 24,
      title: "Doctor Strange",
      description: "A mystical journey of a Marvel superhero.",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EejgVX8x7rGyCDZkIFjxfjPXVY_zyyeSLw&s",
      videoUrl: "https://www.youtube.com/embed/Lt-U_t2pUHI",
      genre: "Sci-Fi",
  },
];

export default movies;
