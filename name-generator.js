const express = require('express');
const app = express();
const path = require('path');
app.use('/static', express.static('static'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+"/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Launching on port: ${PORT}`)
});
