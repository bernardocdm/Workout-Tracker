const pool = require("../database.js");
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken");

async function createUser(name, email, password) {
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const result = await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, hashedPassword]
    );

    return result.rows[0];
}

async function getUsers() {
    const result = await pool.query("SELECT id, name, email FROM users");
    return result.rows;
}

async function getUsersByEmail(email) {
    const result = await pool.query(
        "SELECT *FROM users WHERE email = $1"
        [email]
    );

    return result.rows[0];
}

module.exports = { createUser, getUsers, getUsersByEmail };