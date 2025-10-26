import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    topic: String,
    detail: String,
    dateCreated: {type: Date,
        default: Date.now
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;

