const express = require('express');
const app = express();
const { PORT } = require('./constants');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('OK!');
});

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}...`));