const express = require("express");
const { asyncHandler } = require("../../lib/asyncHandler");
const controller = require("./solutions.controller");

const router = express.Router();

router.get("/", asyncHandler(controller.getPublished));

module.exports = { solutionsRouter: router };
