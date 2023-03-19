const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        userId: {type: Number, required: true, unique: true},
        username: {type: String, required: true, unique: true },
        email: {type : String,required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {
            type: Boolean,
            defaut: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
