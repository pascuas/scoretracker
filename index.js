const express = require('express');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

const app = express();
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const favRoutes = require('./routes/favorites');

connectDB();

//Init Middleware / this will accept body data
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg:'Welcome to my api' }));

app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/favorites', favRoutes)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));