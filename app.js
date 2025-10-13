import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';


const app = express();
const port = 3000;

app.use(express.static('public'));

app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(port, () =>{
    console.log(`Program ${port} portunda başlatıldı...`);
})


app.get('/', (req,res) =>{
    res.render('index');
})

app.get('/about', (req, res) =>{
    res.render('about');
})


app.get('/post', (req,res) =>{
    res.render('post');
})

app.get('/add_post', (req,res) =>{
    res.render('add_post');

})