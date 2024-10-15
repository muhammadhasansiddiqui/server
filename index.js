const express = require('express');
const app = express();
const port = 3000;

// Sample data with Pakistani and Indian singers and their albums
const singers = [
  {
    name: 'Hasan Raheem',
    songs: [
      
      { title: 'Wishes ft Talwiinder', url:'/songs/Hasan Raheem - Wishes ft Talwiinder  Prod by Umair (Official Lyric Video).mp3' },
      // { title: 'Meri Kahani', year: 2008 }
    ]
  },
  {
    name: 'Arijit Singh',
    albums: [
      { title: 'Tum Hi Ho', year: 2013 },
      { title: 'Ae Dil Hai Mushkil', year: 2016 }
    ]
  }
];

// Endpoint to get all singers and their albums
app.get('/singers', (req, res) => {
  res.json(singers);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
