const express = require('express');
const dotenv = require('dotenv');
const { OAuth2Client } = require('google-auth-library');

dotenv.config();
const client = new OAuth2Client(process.env.REACT_APP_APP_ID);

const app = express();
app.use(express.json());

const users = [];

app.post('/api/google-login', async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
    });
    const { name, email, picture } = ticket.getPayload();
    upsert(users, {name, email, picture});
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.json({ name, email, picture });
});

app.listen(process.env.PORT || 4200, () => {
    console.log(`Server ready at http://localhost:${process.env.PORT || 4200}`);
});