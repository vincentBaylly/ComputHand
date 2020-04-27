const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs');
  app.get('/', (req, res) => res.render('pages/index', {page:'home'}));
  app.get('/license', (req, res) => res.render('pages/index', {page:'license'}));
  app.get('/skills', (req, res) => res.render('pages/index', {page:'skills'}));
  app.get('/contact', (req, res) => res.render('pages/index', {page:'contact'}));
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
