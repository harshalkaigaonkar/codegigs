const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const db = require('./db/db');

// connect DB
db.authenticate().then(() => console.log('DB connected')).catch((err) => console.log(err));
db.sync({ force: false }).then(() => console.log('DB Reconfigured')).catch((err) => console.log(err))

const app = express();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', { layout: 'landing' });
})

app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`on port ${PORT}`));