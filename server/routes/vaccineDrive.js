import express from "express";
import { getDrives, createDrive, editDrive } from "../controllers/vaccineDrive.js";
import student from '../models/student.js';

const router = express.Router();

router.get('/', getDrives);

router.post('/', createDrive);

router.post('/update', editDrive);


export default router;