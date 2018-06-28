import express from 'express';
import fs from 'fs';
import showdown from 'showdown';

fs.readFile('Resume-Current.md', 'utf8', (err,data) => {
  if (err) {
    return console.log(err);
  }
  const converter = new showdown.Converter();
  const html = converter.makeHtml(data);
  const app = express();
  app.get('/', (req, res) => {
    res.send(html);
    console.log(html)
  });
  app.listen(3000);
});