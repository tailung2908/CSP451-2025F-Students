// API Routes for Users
// -------------------
// This file provides REST API endpoints for user operations

const express = require('express');
const router = express.Router();

// GET all users
router.get('/users', (req, res) => {
    res.send('Return all users');
});

// GET user by ID
router.get('/users/:id', (req, res) => {
    res.send(`Return user with ID ${req.params.id}`);
});

module.exports = router;

