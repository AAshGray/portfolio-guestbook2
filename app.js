import express from 'express'

const app = express();

const guestbook = [];

app.use(express.static('public'));

app.use(express.urlencoded( { extended: true }));

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit', (req, res) => {
    const page = {
        fname: req.body.fname,
        lname: req.body.lname,
        jobtitle: req.body.jobtitle,
        company: req.body.company,
        linkedin: req.body.linkedin,
        email: req.body.email,
        meet: req.body.meet,
        other: req.body.other,
        mailing_list: req.body.mailing_list,
        format: req.body.format,
        timestamp: new Date()
    };


    guestbook.push(page);
    res.send(`<h1>Guestbook signed! Thank you ${req.body.fname}!</h1>`);
});

app.get('/guestbook', (req, res) => {
    res.send(guestbook);
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3000`);
})