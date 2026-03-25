# M-Pesa Daraja Integration Guide

## Introduction
This document provides guidance on how to integrate M-Pesa Daraja API for payment processing in your application.

## API Credentials Setup
1. **Register as a Developer**:
   - Go to the [M-Pesa Developer Portal](https://developer.safaricom.co.ke) and sign up.

2. **Create an App**:
   - Once logged in, navigate to `My Apps` and click on `Create New App`.
   - Fill out the required details such as App Name, App Description, and Redirect URL.

3. **Get API Credentials**:
   - After creating the app, you will receive the following credentials:
     - **Consumer Key**
     - **Consumer Secret**
   - Store these securely as they will be used to authenticate your API requests.

4. **Set Up Callback URLs**:
   - During the app creation, specify the callback URL where you will receive payment confirmation.

## Integration Steps
1. **Generate Access Token**:
   - Use your Consumer Key and Consumer Secret to generate an access token for API calls.
   - Endpoint: `https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials`

2. **Initiate Payments**:
   - Call the `STK Push` endpoint to initiate payments.
   - Endpoint: `https://sandbox.safaricom.co.ke/v1/payment/request`

3. **Handle Payment Callback**:
   - Set up the server to handle the payment callback from M-Pesa.

4. **Test Your Integration**:
   - Use the M-Pesa sandbox environment to test your integration thoroughly before going live.

## Conclusion
Follow these steps to successfully integrate M-Pesa Daraja API into your application. For further assistance, refer to the [M-Pesa API documentation](https://developer.safaricom.co.ke/docs).