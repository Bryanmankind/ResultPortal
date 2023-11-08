const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/signinPage')
.then(() => {
    console.log('mongodb connected')
}).catch((e) => {
    console.log(e)
})

const Signin = new mongoose.Shema({
    studentId: {type: String, trim: true}
    password: {type: String, trim: true}
})

const collection = mongoose.model('Collection1', Signin)

module.exports = collection