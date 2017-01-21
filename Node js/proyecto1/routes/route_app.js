const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    console.log(req.session.user_id);
    res.render("app/home");
});

module.exports = router;