const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.get('/api/books/:bookDate', async (req, res) => {
    const filePath = `./assets/ob-${req.params.bookDate}.json`;
    const isExist = await fs.existsSync(filePath);
    if (!isExist) {
        res.status(400);
    }
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    res.send(data);
});

app.get('/api/books', async (req, res) => {
    const fileList = [];
    await fs.readdirSync('./assets').forEach(file => {
        const fileName = file.split('.')[0].substring(3);
        fileList.push(fileName);
    });
    res.send(fileList);
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started"));