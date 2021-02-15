require('dotenv').config();
const process = require('process');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});