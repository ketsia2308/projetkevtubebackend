const mongoose = require('mongoose');

const Users = mongoose.Schema(
    {
        first_name: {
            type: String, required: true
        },
        last_name: {
            type: String, required: true
        },
        email: {
            type:String, required: true
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        profile: {
            type: String, required: true
        }
    }
);

module.exports = mongoose.model("user", Users)