import express from "express";
import { getLandingDetails } from "../controllers/landingDetails.js";

const router = express.Router();

router.get('/', getLandingDetails);

export default router;