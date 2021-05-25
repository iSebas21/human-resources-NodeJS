const express = require('express');
const jwt = require('jsonwebtoken');
const user = express.Router();
const db = require('../config/database');

user.post("/signin", async (req, res, next) => {
    const { user_name, user_mail, user_password } = req.body;

    if (user_name && user_mail && user_password) {
        let query = "INSERT INTO users (user_name, user_mail, user_password)";
        query += `VALUES ('${user_name}', '${user_mail}', '${user_password}');`;
        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "The user has been registered" });
        };
        return res.status(200).json({ code: 500, message: "Error" });
    };
    return res.status(200).json({ code: 500, message: "All fields must be complete" });
});


user.post("/login", async (req, res, next) => {
    const { user_mail, user_password } = req.body;
    const query = `SELECT * FROM users WHERE user_mail = '${user_mail}' AND user_password = '${user_password}';`;
    const rows = await db.query(query);

    if (user_mail && user_password) {
        if (rows.length == 1) {
            const token = jwt.sign({
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
            }, "debugkey");
            return res.status(200).json({ code: 200, message: token });
        } else {
            return res.status(200).json({ code: 401, message: "Wrong password or email" });
        };
    };
    return res.status(500).json({ code: 500, message: "All fields must be complete" });
});

user.get("/", async (req, res, next) => {
    const query = "SELECT * FROM user";
    const rows = await db.query(query);

    return res.status(200).json({ code: 200, message: rows });
});

module.exports = user;