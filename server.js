const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Serve frontend files
app.use(express.static(path.join(__dirname, 'frontend')));

// Set up Multer for handling file uploads (saves to an "uploads" folder)
const upload = multer({ dest: 'uploads/' });

// Define the route to handle resume uploads
app.post('/upload', upload.single('resume'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    console.log('Resume received:', req.file.originalname);
    
    // Generate a mock score between 70 and 100
    const score = Math.floor(Math.random() * 30) + 70;

    res.json({ score: score, message: `Successfully received ${req.file.originalname}. Analysis complete.` });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});