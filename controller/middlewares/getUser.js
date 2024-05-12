const User = require('../model/dbSchema/User');

// Route to get user details
const getUser = async (req, res) => {
  try {
      // Extract the _id from URL params
      const userId = req.params.userId; // Extracting the specific parameter

      // Check if userId is provided
      if (!userId) {
          return res.status(400).json({ message: 'User ID is required' });
      }

      // Fetch user details from the database using the _id from URL params
      const userDetails = await User.findOne({ _id: userId }); // Using string value directly

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

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getUser, getAllUsers };
