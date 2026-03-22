const express = require("express");
const { asyncHandler } = require("../../lib/asyncHandler");
const controller = require("./portfolio.controller");

const router = express.Router();

router.get("/", asyncHandler(controller.getAdmin));
router.post("/", asyncHandler(controller.create));
router.put("/:slug", asyncHandler(controller.update));
router.delete("/:slug", asyncHandler(controller.remove));

module.exports = { adminPortfolioRouter: router };
