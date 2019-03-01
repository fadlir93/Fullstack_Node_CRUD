const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json('sample Text')
})

module.exports = router;