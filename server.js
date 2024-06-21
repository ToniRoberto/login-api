const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3500;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const users = [
    { Username: 'user1', Userpass: 'password1' },
    { Username: 'user2', Userpass: 'password2' }
];

app.post('/login', (req, res) => {
    const { Username, Userpass } = req.body;

    const user = users.find(u => u.Username === Username && u.Userpass === Userpass);

    if (user) {
        res.status(200).send({ message: 'Logado com successo!' });
    } else {
        res.status(401).send({ message: 'Usuário ou senha incorretos!' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
