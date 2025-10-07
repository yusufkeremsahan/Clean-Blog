import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () =>{
    console.log(`Program ${port} portunda başlatıldı...`);
})


app.get('/', (req,res) =>{
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    res.send(blog);
})