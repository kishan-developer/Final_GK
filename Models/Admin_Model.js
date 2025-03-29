const mongoose = require("mongoose");

const Admin_Model = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "Please add the firstname"],
        },
        lastname: {
            type: String,
            required: [true, "Please add the lastname"]
        },
        displayname: {
            type: String,
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        confirmPassword: {
            type: String
        },
        role: {
            type: String
        },
        occupation: {
            type: String
        },
        bio: {
            type: String
        },
        location: {
            type: String
        },
        website: {
            type: String
        },
        socialProfile: {
            type: [String]
        }
    },
    {
        timestamps: true, // Corrected to `timestamps` (plural)
    }
);

module.exports = mongoose.model("Admin_Model", Admin_Model);
