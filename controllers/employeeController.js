const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('employee/addOrEdit', {
        viewTitle : 'Insert Employee'
    })
})

router.post('/', (req, res) => {
    console.log('h1');
})

module.exports = router;