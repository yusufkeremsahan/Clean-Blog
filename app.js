import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';
import Blog from './models/Blog.js';
import methodOverride from 'method-override';


const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));


app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/blog-test-db');


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
    Blog.create(req.body);
    return res.redirect('/'); 
})

app.get('/', async (req,res) =>{
    const blogs = await Blog.find({})
    res.render('index', {blogs});
})

app.get('/post/edit/:id', async (req,res)=>{
    const blog = await Blog.findById(req.params.id);
    res.render('edit',{
        blog
    });
})

app.put('/post/:id', async (req,res)=>{
    let blog = await Blog.findById(req.params.id);
    blog.title = req.body.title;
    blog.topic = req.body.topic;
    blog.detail = req.body.detail;
    blog.save();
    res.redirect(`/post/${req.params.id}`);
})


app.listen(port, () =>{
    console.log(`Program ${port} portunda başlatıldı...`);
})