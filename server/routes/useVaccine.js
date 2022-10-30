import express from "express";
import { vaccinateStudent } from "../controllers/useVaccine.js";
import student from '../models/student.js';

const router = express.Router();

router.post('/', vaccinateStudent);

export default router;