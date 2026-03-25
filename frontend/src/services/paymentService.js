'use strict';

const axios = require('axios');

const MPESA_BASE_URL = 'https://sandbox.safaricom.co.ke';
const consumer_key = 'YOUR_CONSUMER_KEY'; // Replace with your Consumer Key
const consumer_secret = 'YOUR_CONSUMER_SECRET'; // Replace with your Consumer Secret
const shortcode = 'YOUR_SHORTCODE'; // Replace with your Shortcode
const shortcode_password = 'YOUR_SHORTCODE_PASSWORD'; // Replace with your Shortcode Password

// Function to get Access Token
async function getAccessToken() {
    const auth = Buffer.from(`${consumer_key}:${consumer_secret}`).toString('base64');
    const response = await axios.get(`${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`, {
        headers: { 'Authorization': `Basic ${auth}` }
    });
    return response.data.access_token;
}

// Function to initiate Payment
async function initiatePayment(amount, phoneNumber) {
    const token = await getAccessToken();
    const body = {
        'shortcode': shortcode,
        'amount': amount,
        'phoneNumber': phoneNumber,
        'callbackUrl': 'YOUR_CALLBACK_URL', // Replace with your callback URL
        'transactionType': 'CustomerPayBillOnline'
    };

    const response = await axios.post(`${MPESA_BASE_URL}/mpesa/paybill/v1/transaction`, body, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
    return response.data;
}

// Exporting functions
module.exports = { getAccessToken, initiatePayment };