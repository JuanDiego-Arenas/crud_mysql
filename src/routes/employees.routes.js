import { Router } from 'express';
import * as employeesCtrl from '../controllers/employees.controller.js';

const router = Router();

router.get('/employees',employeesCtrl.getEmployees);

router.get('/employees/:id',employeesCtrl.getEmployee);

router.post('/employees', employeesCtrl.createEmployee);
router.patch('/employees/:id', employeesCtrl.updateEmployee);
router.delete('/employees/:id', employeesCtrl.deleteEmployee);

export default router;
