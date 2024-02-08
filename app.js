const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>zadanie 5</title>
        </head>
        <body>
            <form action="/submit" method="post">
                <label for="name">imie:</label>
                <input type="text" id="name" name="name" required>
                <br>
                <label for="email">email:</label>
                <input type="email" id="email" name="email" required>
                <br>
                <button type="submit">Prześlij</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/submit', (req, res) => {
    res.send('Pomyslnie przeslano dane: ' + JSON.stringify(req.body));
});

app.listen(port, () => console.log(`aplikacja nasluchuje na: http://localhost:${port}`));