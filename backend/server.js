const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB is connected'))
.catch(err => console.log(err.message));

app.get('/', (req, res) => {
    res.send('Blog App is running');
})
const BlogRouter = require('./routes/Blog.route');

app.use('/api/posts', BlogRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log( `Server is running on PORT: ${PORT}`);
});

