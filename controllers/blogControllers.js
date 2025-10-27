import Blog from '../models/Blog.js';

const getAllBlogs = async (req,res) =>{
    const blogs = await Blog.find({})
    res.render('index', {blogs});
};

const getBlog = async (req,res)=>{
    const blog = await Blog.findById(req.params.id);
    res.render('edit',{
        blog
    });
};

const editBlog = async (req,res)=>{
    let blog = await Blog.findById(req.params.id);
    blog.title = req.body.title;
    blog.topic = req.body.topic;
    blog.detail = req.body.detail;
    blog.save();
    res.redirect(`/post/${req.params.id}`);
};

const deleteBlog = async (req, res) =>{
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/');
};

const createBlog =  async (req,res) =>{
    Blog.create(req.body);
    return res.redirect('/'); 
};

export default{getAllBlogs, getBlog, editBlog, deleteBlog, createBlog}