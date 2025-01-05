const express = require('express');
const path = require('path');

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// Serve static files
// Set the static folder to `dist`
app.use(express.static(path.join(__dirname, 'dist')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Cache-Control headers for development
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/scss', express.static(path.join(__dirname, 'dist/css')));
app.use('/js', express.static(path.join(__dirname, 'dist/js')));


// Serve assets, js, and scss from `dist`
// app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
// app.use('/js', express.static(path.join(__dirname, 'dist/js')));
// app.use('/scss', express.static(path.join(__dirname, 'dist/scss')));

// Define routes
app.get('/', (req, res) => {
    console.log('Rendering "index.pug" from:', app.get('views'));
    res.render('index'); // This renders "index.pug"
});

app.get('/services', (req, res) => {
    console.log('Rendering "services" from:', app.get('views'));
    res.render('services'); // This renders "services.pug"
});

app.get('/profil', (req, res) => {
    console.log('Rendering "profil" from:', app.get('views'));
    res.render('profil'); // This renders "profil.pug"
});

app.get('/realisations', (req, res) => {
    console.log('Rendering "realisations" from:', app.get('views'));
    res.render('realisations'); // This renders "realisations.pug"
});
app.get('/contact', (req, res) => {
    console.log('Rendering "contact" from:', app.get('views'));
    res.render('contact'); // This renders "contact.pug"
});


app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Error handling
app.use((err, req, res, next) => {
    console.error('Error encountered:', err.message);
    res.status(500).send('Internal Server Error');
});
