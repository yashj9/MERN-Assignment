import express from "express";
import { getFilteredData } from "../controllers/filterReport.js";

const router = express.Router();

router.get('/', getFilteredData);

export default router;