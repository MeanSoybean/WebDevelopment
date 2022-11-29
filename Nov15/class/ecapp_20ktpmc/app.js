import express from 'express';
import { engine } from 'express-handlebars';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'bs4'
}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', function (req, res) {
  // res.send('Hello World.');
  res.render('home');
})

app.get('/about', function (req, res) {
  res.render('about');
})

app.get('/bs4', function (req, res) {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  res.sendFile(__dirname + '/bs4.html');
})

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`E-Commerce App listening at http://localhost:${PORT}`);
});
