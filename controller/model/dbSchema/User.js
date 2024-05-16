const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    confirmPassword: { type: String, required: false},
    role: { type: String, enum: ['superadmin', 'admin', 'seller', 'buyer'] },
    createdAt: { type: Date, default: Date.now }
});

// Virtual property to format createdAt date
userSchema.virtual('createdAtFormatted').get(function() {
    return this.createdAt ? this.createdAt.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '') : null;
});

const User = mongoose.model('users', userSchema);

module.exports = User;
