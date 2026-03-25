# Supabase Setup Instructions

This document outlines the procedures for setting up the Supabase database for the Kenya Loan Platform.

## Supabase Database Schema

### Tables

1. **users**  
   - **id**: UUID (Primary Key)  
   - **email**: Text (Unique)  
   - **password**: Text  
   - **name**: Text
   
2. **loans**  
   - **id**: UUID (Primary Key)  
   - **user_id**: UUID (Foreign Key referencing users)  
   - **amount**: Numeric  
   - **interest_rate**: Numeric  
   - **status**: Text  
   
3. **repayments**  
   - **id**: UUID (Primary Key)  
   - **loan_id**: UUID (Foreign Key referencing loans)  
   - **amount**: Numeric  
   - **date**: Timestamp  

### Relationships
- Each user can have multiple loans.  
- Each loan can have multiple repayments.

## Configuration Instructions

1. **Sign up for Supabase**: Go to [Supabase](https://supabase.com) and create an account.
2. **Create a new project**: After logging in, click on "New Project" and fill out the necessary details (name, database password, etc.).
3. **Set up the database**: 
   - Navigate to the SQL editor in Supabase.
   - Use the following SQL commands to create the tables:
     ```sql
     CREATE TABLE users (
       id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
       email TEXT UNIQUE,
       password TEXT,
       name TEXT
     );
     
     CREATE TABLE loans (
       id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
       user_id UUID REFERENCES users(id),
       amount NUMERIC,
       interest_rate NUMERIC,
       status TEXT
     );
     
     CREATE TABLE repayments (
       id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
       loan_id UUID REFERENCES loans(id),
       amount NUMERIC,
       date TIMESTAMP
     );
     ```
4. **Setup authentication**: If required, enable authentication under the "Auth" settings to manage users.
5. **Environment variables**: Ensure that you store your Supabase URL and keys securely in your application configuration.

## Conclusion
Ensure that you regularly back up your database and follow best practices for database management.