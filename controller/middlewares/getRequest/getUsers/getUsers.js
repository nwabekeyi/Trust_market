const User = require('../../../model/dbSchema/User');
const { Seller, Buyer, Admin } = require('../../../model/dbSchema/User');

// Route to get user details
const getUser = async (req, res) => {
  try {
    // Extract the _id from URL params
    const userId = req.params.userId;

    // Check if userId is provided
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Fetch user details from the database using the _id from URL params
    let userDetails = await Buyer.findOne({ _id: userId });

    if(!userDetails) return userDetails = await Seller.findOne({ _id: userId });
    if(!userDetails) return userDetails = await Admin.findOne({ _id: userId });
    if(!userDetails) return res.status(404).json({message : "user not found"})

    // If user details are found, send them in the response
    if (userDetails) {
      res.json({ userDetails });
    } else {
      res.status(404).json({ message: 'User details not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get all users irrespective of their roles
const getAllUsers = async (req, res) => {
  try {
    // Fetch users from all user collections
    const buyers = await Buyer.find();
    const sellers = await Seller.find();
    const admins = await Admin.find();

    // Merge results from all collections
    const allUsers = [...buyers, ...sellers, ...admins];

    res.json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getUser, getAllUsers };
