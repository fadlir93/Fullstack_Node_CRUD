const mongoose = require('mongoose');

mongoose.connect(DB_MONGO, { useNewUrlParser : true}, (err) => {
    if(!err) {
        console.log('MongoDB Connection Succeedd')
    } else {
        console.log('Error in DB Connection :' + err)
    }
})