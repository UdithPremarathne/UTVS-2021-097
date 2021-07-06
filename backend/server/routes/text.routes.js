const express = require("express");

const textCtrl = require("../controllers/text.controller");


const router = express.Router();

router.route("/")
    .post(textCtrl.createText)
    // .get(userCtrl.getAllUsers);

// router.route("/:id")
//     .get(userCtrl.getUserById)
//     .put(userCtrl.updateUser)
//     .delete(userCtrl.deleteUser);


module.exports = {
    router
}