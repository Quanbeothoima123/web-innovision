const express = require("express");
const { asyncHandler } = require("../../lib/asyncHandler");
const controller = require("./blogs.controller");

const router = express.Router();

router.get("/", asyncHandler(controller.getPublished));
router.get("/:slug", asyncHandler(controller.getBySlug));

module.exports = { blogsRouter: router };
