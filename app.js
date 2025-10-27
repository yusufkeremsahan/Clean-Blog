import express from 'express';
import ejs from 'ejs';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import blogController from './controllers/blogControllers.js'; 
import pageController from './controllers/pageControllers.js';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

app.set("view engine", "ejs");

mongoose.connect('mongodb://localhost/blog-test-db');

//Page Controller
app.get('/about',pageController.getAboutPage);
app.get('/post/:id', pageController.getIndexPage);
app.get('/add_post', pageController.getAddPostPage);

//Blog Controller
app.post('/blogs',blogController.createBlog)
app.get('/', blogController.getAllBlogs);
app.get('/post/edit/:id', blogController.getBlog);
app.put('/post/:id', blogController.editBlog);
app.delete('/post/:id', blogController.deleteBlog);


app.listen(port, () =>{
    console.log(`Program ${port} portunda başlatıldı...`);
})