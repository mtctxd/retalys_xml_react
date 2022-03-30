import express from 'express';
import path from 'path';
import fs from 'fs';
import xml2js from 'xml2js';
import cors from 'cors';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const PORT = process.env.PORT || 3001;
const file = 'src/api/export_full.xml';

const app = express();

app
  .use(express.static(path.join(dirname, '../../public')))
  .use(cors())
  .get('/', (req, res) => res.render('../../public/index'))
  .get('/goods', (req, res) => {
    const parser = new xml2js.Parser();

    fs.readFile(file, (err, data) => {
      parser.parseString(data, (_err, result) => {
        res.send(result.export_full);
      });
    });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
