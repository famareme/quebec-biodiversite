const express = require('express');
const path = require('path');

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Updated to point to the views folder

// Serve static files (e.g., CSS, JS, images)
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'views/assets')));
app.use('/css', express.static(path.join(__dirname, 'views/assets/css')));
app.use('/js', express.static(path.join(__dirname, 'views/assets/js')));

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
