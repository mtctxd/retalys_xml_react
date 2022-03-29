import express from 'express';
import path from 'path';
import fs from 'fs';
import xml2js from 'xml2js';
// import convert from 'xml-js';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3001;
const file = 'src/api/export_full.xml';

const app = express();

app
  .use(express.static(path.join(__dirname, '../../public')))
  .use(cors())
  .get('/', (req, res) => res.render('../../public/index'))
  .get('/goods', (req, res) => {
    const parser = new xml2js.Parser();

    fs.readFile(file, function (err, data) {
      parser.parseString(data, function (err, result) {
        res.send(result.export_full);
      });
    });

    // const xml = fs.readFileSync(file, 'utf-8');
    // const options = {
    //     ignoreComment: true, 
    //     alwaysChildren: false, 
    //     alwaysArray: false
    // };

    // const result = convert.xml2js(xml, options);

    // res.send(result);
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));