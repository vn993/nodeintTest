const express = require('express');
const app = express();
const port = process.env.PORT || 3009;

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send({ message: 'OK' });
});

app.post('/echo', (req, res) => {
  res.status(200).send({ body: req.body });
});

module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
