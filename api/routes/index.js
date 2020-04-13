const express = require("express");
const router = express.Router();
router.get("/graphql", function(req, res, next) {
    res.send("Welcome to Migrating REST to GraphQL workshop");
});

module.exports = router;