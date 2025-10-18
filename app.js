import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';
import Blog from './models/Blog.js';


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/blog-test-db');

app.listen(port, () =>{
    console.log(`Program ${port} portunda başlatıldı...`);
})

app.get('/about', (req, res) =>{
    res.render('about');
})


app.get('/post/:id', async(req,res) =>{
    const blog = await Blog.findById(req.params.id);
    res.render('post', {
        blog
    });
})

app.get('/add_post', (req,res) =>{
    res.render('add_post');
})

app.post('/blogs', async (req,res) =>{
    console.log(req.body);
    Blog.create(req.body);
    return res.redirect('/'); 
})

app.get('/', async (req,res) =>{
    const blogs = await Blog.find({})
    res.render('index', {blogs});
})