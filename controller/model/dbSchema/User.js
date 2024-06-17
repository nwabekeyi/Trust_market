const mongoose = require('mongoose');

//buyer
const buyerSchema = new mongoose.Schema({
    email: { type: String, required: true},
    userName: { type: String, required: true},
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    confirmPassword: { type: String},
    role: { type: String, enum: ['buyer'] },
    createdAt: { type: Date, default: Date.now }
});

// Virtual property to format createdAt date
buyerSchema.virtual('createdAtFormatted').get(function() {
    return this.createdAt ? this.createdAt.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '') : null;
});

//seller
const sellerSchema = new mongoose.Schema({
    email: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    confirmPassword: { type: String },
    role: { type: String, enum: ['seller'], default: 'seller' },
    createdAt: { type: Date, default: Date.now },
    rating: { type: Number, default: 0 },
    numberOfSales: { type: Number, default: 0, min: 0, max: 5},
    numberOfRatings: { type: Number, default: 0 }
});

// Virtual property to format createdAt date
sellerSchema.virtual('createdAtFormatted').get(function() {
    return this.createdAt ? this.createdAt.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '') : null;
});

const adminSchema = new mongoose.Schema({
    email: { type: String, required: true},
    userName: { type: String, required: true},
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    confirmPassword: { type: String,},
    role: { type: String, enum: ['admin', 'superadmin'] },
    createdAt: { type: Date, default: Date.now }
});

// Virtual property to format createdAt date
adminSchema.virtual('createdAtFormatted').get(function() {
    return this.createdAt ? this.createdAt.toISOString().replace('T', ' ').replace(/\.\d{3}Z$/, '') : null;
});


//admin
const Buyer = mongoose.model('buyers', buyerSchema);
const Seller = mongoose.model('sellers', sellerSchema);
const Admin = mongoose.model('admins', adminSchema);


module.exports = {Buyer, Seller, Admin};
