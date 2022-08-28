const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;
const path = './mocks/index.ts';

app.use(cors());
app.use(express.json());

app.get('/getQuestions', (req: any, res: any) => {
  res.send(require(path)('faqs'));
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
