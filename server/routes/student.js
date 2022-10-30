import express from "express";
import { getStudents, createStudent, editStudent, vaccinateStudent, deleteStudent } from "../controllers/student.js";
import student from '../models/student.js';

const router = express.Router();

router.get('/', getStudents);

router.post('/', createStudent);

router.put('/edit', editStudent);

router.put('/vaccinate', vaccinateStudent);

router.delete('/', deleteStudent);


export default router;