import express from 'express'

const app = express();

app.use(express.urlencoded( { extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

const guestbook = [];

const PORT = 3000;

app.get('/', (req, res) => {
    res.render(`home`);
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

    guestbook.push(page);
    console.log(page);

    res.render('thank-you', { page });
});

app.get('/admin', (req, res) => {
    res.render('admin', { guestbook });
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:3000`);
})