const express       = require('express');
const router        = express.Router();

// /api/v1/menu/*
const menuRoutes    = require('./menuRoutes');
router.use('/menu', menuRoutes);

module.exports = router;