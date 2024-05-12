const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: String },
    role: { type: String, enum: ['superadmin', 'admin', 'seller', 'customer'] }
});

const User = mongoose.model('users', userSchema);

module.exports = User;
