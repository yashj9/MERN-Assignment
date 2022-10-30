import express from "express";
import { getDrives, createDrive, editDrive, consumeVaccine, deleteDrive } from "../controllers/vaccineDrive.js";
import student from '../models/student.js';

const router = express.Router();

router.get('/', getDrives);

router.post('/', createDrive);

router.put('/edit', editDrive);

router.put('/vaccinate', consumeVaccine);

router.delete('/', deleteDrive);


export default router;