const exerciseData = [
  {
    id: 1,
    name: 'Lyssa',
    type: 'Comedy|Romance',
    sets: 2,
    repetitions: 14,
    video: 'http://dummyimage.com/122x217.png/cc0000/ffffff'
  },
  {
    id: 2,
    name: 'Phip',
    type: 'Action|Crime|Drama',
    sets: 1,
    repetitions: 11,
    video: 'http://dummyimage.com/166x213.bmp/ff4444/ffffff'
  },
  {
    id: 3,
    name: 'Horatius',
    type: 'Horror|Thriller',
    sets: 1,
    repetitions: 15,
    video: 'http://dummyimage.com/245x199.jpg/dddddd/000000'
  },
  {
    id: 4,
    name: 'Eveline',
    type: 'Comedy',
    sets: 2,
    repetitions: 11,
    video: 'http://dummyimage.com/140x115.bmp/ff4444/ffffff'
  },
  {
    id: 5,
    name: 'Hussein',
    type: 'Children|Drama',
    sets: 2,
    repetitions: 8,
    video: 'http://dummyimage.com/192x203.png/ff4444/ffffff'
  },
  {
    id: 6,
    name: 'Carroll',
    type: 'Crime|Drama',
    sets: 1,
    repetitions: 15,
    video: 'http://dummyimage.com/249x183.bmp/5fa2dd/ffffff'
  },
  {
    id: 7,
    name: 'Monique',
    type: 'Drama|Romance',
    sets: 1,
    repetitions: 8,
    video: 'http://dummyimage.com/191x112.jpg/cc0000/ffffff'
  },
  {
    id: 8,
    name: 'Pedro',
    type: 'Drama|Horror',
    sets: 1,
    repetitions: 12,
    video: 'http://dummyimage.com/231x248.jpg/ff4444/ffffff'
  },
  {
    id: 9,
    name: 'Christina',
    type: 'Action|Thriller',
    sets: 1,
    repetitions: 13,
    video: 'http://dummyimage.com/229x111.png/dddddd/000000'
  },
  {
    id: 10,
    name: 'Neall',
    type: 'Comedy',
    sets: 1,
    repetitions: 13,
    video: 'http://dummyimage.com/220x175.bmp/5fa2dd/ffffff'
  },
  {
    id: 11,
    name: 'Chase',
    type: 'Action|Comedy',
    sets: 2,
    repetitions: 10,
    video: 'http://dummyimage.com/213x105.png/dddddd/000000'
  },
  {
    id: 12,
    name: 'Liv',
    type: 'Drama',
    sets: 2,
    repetitions: 9,
    video: 'http://dummyimage.com/207x215.jpg/5fa2dd/ffffff'
  },
  {
    id: 13,
    name: 'Misha',
    type: 'Drama|Thriller|War',
    sets: 1,
    repetitions: 13,
    video: 'http://dummyimage.com/198x208.png/cc0000/ffffff'
  },
  {
    id: 14,
    name: 'Alexi',
    type: 'Animation|Comedy|Musical',
    sets: 3,
    repetitions: 11,
    video: 'http://dummyimage.com/100x155.png/dddddd/000000'
  },
  {
    id: 15,
    name: 'Tammie',
    type: 'Comedy|Horror',
    sets: 1,
    repetitions: 11,
    video: 'http://dummyimage.com/168x235.bmp/5fa2dd/ffffff'
  },
  {
    id: 16,
    name: 'Norbie',
    type: 'Comedy',
    sets: 3,
    repetitions: 15,
    video: 'http://dummyimage.com/146x216.png/cc0000/ffffff'
  },
  {
    id: 17,
    name: 'Sue',
    type: 'Action|Adventure|Animation|Children',
    sets: 2,
    repetitions: 12,
    video: 'http://dummyimage.com/170x244.bmp/cc0000/ffffff'
  },
  {
    id: 18,
    name: 'Almira',
    type: 'Action|Thriller',
    sets: 2,
    repetitions: 9,
    video: 'http://dummyimage.com/113x180.jpg/dddddd/000000'
  },
  {
    id: 19,
    name: 'Maximilian',
    type: 'Drama',
    sets: 3,
    repetitions: 14,
    video: 'http://dummyimage.com/159x151.jpg/dddddd/000000'
  },
  {
    id: 20,
    name: 'Sarita',
    type: 'Comedy',
    sets: 1,
    repetitions: 14,
    video: 'http://dummyimage.com/222x150.jpg/cc0000/ffffff'
  },
  {
    id: 21,
    name: 'Dael',
    type: 'Drama',
    sets: 3,
    repetitions: 10,
    video: 'http://dummyimage.com/107x197.bmp/dddddd/000000'
  },
  {
    id: 22,
    name: 'Georg',
    type: 'Drama',
    sets: 2,
    repetitions: 12,
    video: 'http://dummyimage.com/107x216.jpg/dddddd/000000'
  },
  {
    id: 23,
    name: 'Charles',
    type: 'Sci-Fi',
    sets: 2,
    repetitions: 10,
    video: 'http://dummyimage.com/210x114.bmp/cc0000/ffffff'
  },
  {
    id: 24,
    name: 'Alexis',
    type: 'Comedy|Drama|Romance',
    sets: 2,
    repetitions: 9,
    video: 'http://dummyimage.com/115x142.jpg/dddddd/000000'
  },
  {
    id: 25,
    name: 'Siana',
    type: 'Action|Thriller|Western',
    sets: 2,
    repetitions: 13,
    video: 'http://dummyimage.com/166x122.jpg/cc0000/ffffff'
  },
  {
    id: 26,
    name: 'Tamara',
    type: 'Action|Comedy|Drama',
    sets: 1,
    repetitions: 11,
    video: 'http://dummyimage.com/115x222.png/5fa2dd/ffffff'
  },
  {
    id: 27,
    name: 'Kalie',
    type: 'Drama',
    sets: 1,
    repetitions: 14,
    video: 'http://dummyimage.com/132x223.png/cc0000/ffffff'
  },
  {
    id: 28,
    name: 'Kimmy',
    type: 'Comedy|Romance',
    sets: 1,
    repetitions: 15,
    video: 'http://dummyimage.com/211x146.bmp/cc0000/ffffff'
  },
  {
    id: 29,
    name: 'Bailie',
    type: 'Comedy',
    sets: 1,
    repetitions: 11,
    video: 'http://dummyimage.com/118x215.bmp/5fa2dd/ffffff'
  },
  {
    id: 30,
    name: 'Whitman',
    type: 'Comedy|Sci-Fi',
    sets: 2,
    repetitions: 15,
    video: 'http://dummyimage.com/122x201.png/5fa2dd/ffffff'
  },
  {
    id: 31,
    name: 'Falito',
    type: 'Comedy',
    sets: 2,
    repetitions: 14,
    video: 'http://dummyimage.com/203x168.jpg/dddddd/000000'
  },
  {
    id: 32,
    name: 'Rubi',
    type: 'Horror|Mystery|Thriller',
    sets: 2,
    repetitions: 14,
    video: 'http://dummyimage.com/229x241.jpg/5fa2dd/ffffff'
  },
  {
    id: 33,
    name: 'Jerry',
    type: 'Documentary',
    sets: 1,
    repetitions: 10,
    video: 'http://dummyimage.com/248x234.png/cc0000/ffffff'
  },
  {
    id: 34,
    name: 'Joelynn',
    type: 'Action|Film-Noir|Sci-Fi',
    sets: 1,
    repetitions: 11,
    video: 'http://dummyimage.com/152x185.png/5fa2dd/ffffff'
  },
  {
    id: 35,
    name: 'Shelley',
    type: 'Adventure|Documentary|Western',
    sets: 2,
    repetitions: 15,
    video: 'http://dummyimage.com/221x234.png/cc0000/ffffff'
  },
  {
    id: 36,
    name: 'Patty',
    type: 'Documentary',
    sets: 3,
    repetitions: 9,
    video: 'http://dummyimage.com/126x227.png/dddddd/000000'
  },
  {
    id: 37,
    name: 'Lutero',
    type: 'Adventure|Animation|Children|Fantasy',
    sets: 3,
    repetitions: 13,
    video: 'http://dummyimage.com/225x131.jpg/5fa2dd/ffffff'
  },
  {
    id: 38,
    name: 'Violet',
    type: 'Documentary',
    sets: 1,
    repetitions: 9,
    video: 'http://dummyimage.com/154x110.jpg/5fa2dd/ffffff'
  },
  {
    id: 39,
    name: 'Meghan',
    type: 'Comedy|Drama|Romance',
    sets: 3,
    repetitions: 14,
    video: 'http://dummyimage.com/162x105.png/5fa2dd/ffffff'
  },
  {
    id: 40,
    name: 'Correy',
    type: 'Drama',
    sets: 3,
    repetitions: 11,
    video: 'http://dummyimage.com/227x123.bmp/cc0000/ffffff'
  },
  {
    id: 41,
    name: 'Berkley',
    type: 'Comedy|Drama|Thriller',
    sets: 1,
    repetitions: 9,
    video: 'http://dummyimage.com/120x167.png/5fa2dd/ffffff'
  },
  {
    id: 42,
    name: 'Raven',
    type: 'Action|Crime|Drama',
    sets: 1,
    repetitions: 8,
    video: 'http://dummyimage.com/108x207.png/cc0000/ffffff'
  },
  {
    id: 43,
    name: 'Lennard',
    type: 'Horror',
    sets: 2,
    repetitions: 9,
    video: 'http://dummyimage.com/187x144.png/ff4444/ffffff'
  },
  {
    id: 44,
    name: 'Marne',
    type: 'Comedy',
    sets: 2,
    repetitions: 13,
    video: 'http://dummyimage.com/117x208.png/cc0000/ffffff'
  },
  {
    id: 45,
    name: 'Maureene',
    type: 'Adventure|Drama',
    sets: 3,
    repetitions: 10,
    video: 'http://dummyimage.com/107x147.jpg/cc0000/ffffff'
  },
  {
    id: 46,
    name: 'Matthieu',
    type: 'Action|Drama|Horror|Sci-Fi',
    sets: 2,
    repetitions: 14,
    video: 'http://dummyimage.com/204x109.png/dddddd/000000'
  },
  {
    id: 47,
    name: 'Clarice',
    type: 'Adventure|Children',
    sets: 2,
    repetitions: 10,
    video: 'http://dummyimage.com/177x157.bmp/cc0000/ffffff'
  },
  {
    id: 48,
    name: 'Randolf',
    type: 'Drama|Thriller',
    sets: 2,
    repetitions: 11,
    video: 'http://dummyimage.com/169x218.png/ff4444/ffffff'
  },
  {
    id: 49,
    name: 'Faulkner',
    type: 'Comedy|Romance',
    sets: 3,
    repetitions: 15,
    video: 'http://dummyimage.com/114x175.bmp/ff4444/ffffff'
  },
  {
    id: 50,
    name: 'Chloris',
    type: 'Drama|Romance',
    sets: 3,
    repetitions: 12,
    video: 'http://dummyimage.com/158x100.png/ff4444/ffffff'
  },
  {
    id: 51,
    name: 'Chloris',
    type: 'Drama|Romance',
    sets: 3,
    repetitions: 12,
    video: 'http://dummyimage.com/158x100.png/ff4444/ffffff'
  }
]

module.exports = exerciseData
