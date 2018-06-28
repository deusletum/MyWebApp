import express from 'express';
import fs from 'fs';
import showdown from 'showdown';

function BoilerPlateHtml (body) {
  const boilerplate = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
  <html>
      <head>
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <title>My Site Template - Welcome!</title>
          <style>
          body {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.75em;
            font-size: 16px;
            background-color: #222;
            color: #aaa;
          }
          p {
            font-size: 16px;
          }
          
          h1 {
            font-size: 30px;
            line-height: 34px;
          }
          
          h2 {
            font-size: 20px;
            line-height: 25px;
          }
          
          h3 {
            font-size: 16px;
            line-height: 27px;
            padding-top: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #D8D8D8;
            border-top: 1px solid #D8D8D8;
          }
          
          hr {
            height: 1px;
            background-color: #d8d8d8;
            border: none;
            width: 100%;
            margin: 0px;
          }
          </style>
      </head>
      <body>
        ${body}
      </body>
  </html>
        `
  return boilerplate;
}

fs.readFile('Resume-Current.md', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const converter = new showdown.Converter();
  const Myhtml = converter.makeHtml(data);
  const app = express();
  app.get('/', (req, res) => {
    res.send(BoilerPlateHtml(Myhtml));
  });
  const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
  //const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
  app.listen(port);
});