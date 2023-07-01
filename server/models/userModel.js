/* eslint-disable comma-dangle */
const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema(
    {
        name: { type: String, required: true, trim: true },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            minLength: 6,
            maxLength: 40,
        },

        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 6,
        },

        isAdmin: { type: Boolean, required: true, default: false },
        avatar: { data: Buffer, contentType: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
