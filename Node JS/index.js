const express = require('express');
const app = express();
const port = 3000;

//homepage

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Web Travel');
})

//About page

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Web Travel');

})

//custom 404 page 

app.use(req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 Page Not Found');

}

//custom 500 page 
app.use((err,req,res,next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 Page Not Found');
})

app.listen(port,() => console.log('Express started on https://localhost:${port};'='press Ctrl-C to terminate.'))