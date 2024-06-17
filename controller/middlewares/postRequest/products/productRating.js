const Product = require('../../../model/dbSchema/product');
const Seller = require('../../../model/dbSchema/User').Seller;

// Endpoint to add a rating and review to a product
const productRating = async (req, res) => {
    try {
        const { productId, sellerId, rating } = req.params;
        const { review } = req.body;

        const ratingValue = parseInt(rating, 10);

        if (ratingValue < 1 || ratingValue > 5) {
            return res.status(400).json({ error: 'Rating must be between 1 and 5' });
        }

        if (!review || review.trim() === '') {
            return res.status(400).json({ error: 'Review text must not be empty' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update the rating count with string keys
        product.ratingCount.set(ratingValue.toString(), (product.ratingCount.get(ratingValue.toString()) || 0) + 1);

        // Add the review to the product
        product.reviews.push({ rating: ratingValue, review });

        // Calculate the average rating for the product
        const totalRatings = Array.from(product.ratingCount.keys()).reduce((sum, key) => {
            return sum + product.ratingCount.get(key);
        }, 0);
        const totalStars = Array.from(product.ratingCount.keys()).reduce((sum, key) => {
            return sum + key * product.ratingCount.get(key);
        }, 0);
        product.rating = totalStars / totalRatings;

        // Calculate the selling index
        product.sellingIndex = (Math.pow(product.rating, 2) * 2) / 100;

        // Save the updated product
        await product.save();

        // Update the seller's rating and total sales
        const sellerProducts = await Product.find({ seller: sellerId });

        // Calculate the seller's overall rating
        const totalSellerStars = sellerProducts.reduce((acc, prod) => {
            return acc + Array.from(prod.ratingCount.keys()).reduce((sum, key) => {
                return sum + key * prod.ratingCount.get(key);
            }, 0);
        }, 0);
        const totalSellerRatings = sellerProducts.reduce((acc, prod) => {
            return acc + Array.from(prod.ratingCount.values()).reduce((sum, count) => sum + count, 0);
        }, 0);
        const sellerRating = totalSellerRatings ? totalSellerStars / totalSellerRatings : 0;

        // Calculate the seller's total sales
        const totalSales = sellerProducts.reduce((acc, prod) => acc + prod.totalSales, 0);

        // Update the seller's document
        await Seller.findByIdAndUpdate(sellerId, { rating: sellerRating, totalSales });

        res.status(200).json(product);
    } catch (error) {
        console.error('Error adding rating and review:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = productRating;
