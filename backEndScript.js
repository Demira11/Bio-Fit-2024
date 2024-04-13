const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

//This initializes Firestore and Express
admin.initializeApp();
const db = admin.firestore();
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Endpoints to add an item to the cart
app.post('/add-to-cart', async (req, res) => {
    try {
        const { productId, quantity } = req.body;

        // Add item to the cart collection
        const docRef = await db.collection('cart').add({
            productId: productId,
            quantity: quantity,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        });

        return res.status(200).send({ message: 'Item added to cart successfully', cartItemId: docRef.id });
    } catch (error) {
        console.error('Error adding item to cart:', error);
        return res.status(500).send({ error: 'Internal server error' });
    }
});

// Endpoint to retrieve cart contents
app.get('/cart-contents', async (req, res) => {
    try {
        // Retrieve cart items from Firestore
        const snapshot = await db.collection('cart').get();
        const cartItems = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        return res.status(200).send({ cartItems });
    } catch (error) {
        console.error('Error retrieving cart contents:', error);
        return res.status(500).send({ error: 'Internal server error' });
    }
});

// Expose the Express app as a Cloud Function
exports.api = functions.https.onRequest(app);
