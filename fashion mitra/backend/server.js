const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import cors

const app = express();

app.use(cors()); // Use cors middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the "public" directory

mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    dob: Date,
});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
    console.log('Signup request received:', req.body);

    const { username, password, dob } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword, dob });
    try {
        await user.save();
        console.log('User saved successfully');
        res.json({ success: true });
    } catch (error) {
        console.error('Error saving user:', error);
        res.json({ success: false, message: 'Error saving user' });
    }
});

app.post('/login', async (req, res) => {
    console.log('Login request received:', req.body);

    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
