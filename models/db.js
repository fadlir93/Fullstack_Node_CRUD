const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_MONGO1, { useNewUrlParser : true}, (err) => {
    if(!err) {
        console.log('MongoDB Connection Succeedd' )
    } else {
        console.log(`Error in DB Connection : ` + err)
    }
})

require('./employee.model')