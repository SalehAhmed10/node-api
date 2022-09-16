const express = require('express');
const app = express();
const importData = require('./data.json');
const port = process.env.PORT || 3001;



app.get("/" , (req, res) => {
    res.json(importData);
});

app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`));