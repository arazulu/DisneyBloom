const express = require('express');
const path = require('path');

let app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'));
});

app.listen(process.env.PORT || 3000);
