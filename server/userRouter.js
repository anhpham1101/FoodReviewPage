const express = require("express");
const router = express.Router();
const pool = require("./db");

//GET ALL USER INFORMATION//
router.post("/get_user", async (req, res) => {
    try {
        const cmd = await pool.query("SELECT * FROM customer");
        console.log(cmd.rows);
        res.json(cmd.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//ADD NEW USER TO DATABASE//
router.post("/add_user", async (req, res) => {
    try {
        const query = "INSERT INTO customer (username, password, email, phone, fname, lname) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
        const cmd = await pool.query(query, [req.body["username"], req.body["password"], req.body["email"], req.body["phone"], req.body["fname"], req.body["lname"]]);
        console.log(cmd.rows[0]);
        res.json(cmd.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//GET ALL USER COMMENT//
router.post("/get_comment", async (req, res) => {
    try {
        const cmd = await pool.query("SELECT * FROM customer, comment WHERE customer.customer_id = comment.customer_id");
        console.log(cmd.rows);
        res.json(cmd.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//GET ALL RESTAURANT//
router.post("/get_restaurant", async (req, res) => {
    try {
        const cmd = await pool.query("SELECT * FROM restaurant");
        console.log(cmd.rows);
        res.json(cmd.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET ALL RESTAURANT//
router.post("/get_promotion", async (req, res) => {
    try {
        const cmd = await pool.query("SELECT * FROM promotion, restaurant WHERE promotion.res_id = restaurant.restaurant_id");
        console.log(cmd.rows);
        res.json(cmd.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//GET ALL RESTAURANT//
router.post("/get_news", async (req, res) => {
    try {
        const cmd = await pool.query("SELECT * FROM news");
        console.log(cmd.rows);
        res.json(cmd.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//ADD NEW USER COMMENT//
router.post("/add_comment", async (req, res) => {
    try {
        console.log(req.body);
        const query = "INSERT INTO comment (customer_id, restaurant, title, description, score, comment_time, date_comment) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
        const cmd = await pool.query(query, [req.body["customer_id"], req.body["restaurant"], req.body["title"], req.body["description"], req.body["score"], req.body["comment_time"], req.body["date_comment"]]);
        console.log(cmd.rows[0]);
        res.json(cmd.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Export router to use in another file
module.exports = router;