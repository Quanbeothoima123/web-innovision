const express = require("express");
const { asyncHandler } = require("../../lib/asyncHandler");
const controller = require("./admin.controller");

const router = express.Router();

router.post("/login", asyncHandler(controller.login));
router.post("/logout", asyncHandler(controller.logout));

module.exports = { adminAuthRouter: router };
