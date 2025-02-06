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
        message: req.body.message,
        mailing_list: req.body.mailing_list,
        format: req.body.format,
        timestamp: new Date()
    };


    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Confirmation</title>
        <link rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
        <h1>Thank you for signing the guestbook, ${req.body.fname}!</h1>
        <br>
        <button id="confirmbutton" onclick="window.location.href='/'">Go to Home</button>
    </body>
    </html>`;

    res.send(html);

    guestbook.push(page);
});

app.get('/admin/guestbook', (req, res) => {
    res.send(guestbook);
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3000`);
})