import express from 'express';
import fs from 'fs';
import showdown from 'showdown';

function BoilerPlateHtml (myhtml) {
  const boilerplate = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <html>
      <head>
          <rel="stylesheet" type="text/css" href="css/main.css" />
          <meta http-equiv="content-type" content="text/php; charset=utf-8" />
          <title>My Site Template - Welcome!</title>
      </head>
      <body>
        ${myhtml}
      </body>
  </html>
        `
  console.log(myhtml)
  return boilerplate;
}

fs.readFile('Resume-Current.md', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const converter = new showdown.Converter();
  const Myhtml = converter.makeHtml(data);
  console.log(data);
  const app = express();
  app.get('/', (req, res) => {
    res.send(BoilerPlateHtml(Myhtml));
  });
  app.listen(3000);
});