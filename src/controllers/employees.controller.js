import { pool } from '../db.js';

//? <--- Get empleados (todos) --->
export const getEmployees = async (req, res) => {
	const [result] = await pool.query('SELECT * FROM employees');
	res.json(result);
};

//? <--- Get empleado --->
export const getEmployee = async (req, res) => {
	try {
		const [result] = await pool.query(
			'SELECT * FROM employees WHERE id = ?',
			[req.params.id]
		);
		if (result == '') {
			return res.status(404).json({
				message: 'Empleado no encontrado',
			});
		}
		res.json(result[0]);
	} catch (error) {
		return res.status(500).json({
			message: 'Algo va mal 😐',
		});
	}
};

//? <--- Crear empleado --->
export const createEmployee = async (req, res) => {
	try {
		const { name_employee, salary } = req.body;
		const [result] = await pool.query(
			'INSERT INTO employees (name_employee, salary) VALUES (?, ?)',
			[name_employee, salary]
		);
		res.send({
			id: result.insertId,
			name_employee,
			salary,
		});
	} catch (error) {
		return res.status(500).json({
			message: 'Algo va mal 😐',
		});
	}
};

//? <--- Actualizan empleado --->
export const updateEmployee = async (req, res) => {
	try {
		const [result] = await pool.query(
			'UPDATE employees SET name_employee = IFNULL(?, name_employee), salary = IFNULL(?, salary) WHERE id = ?;',
			[req.body.name_employee, req.body.salary, req.params.id]
		);

		if (result.affectedRows === 0) {
			return res.status(404).json({
				message: 'Empleado no encontrado para actualizarlo',
			});
		}
		const [rows] = await pool.query(
			'SELECT * FROM employees WHERE id = ?',
			[req.params.id]
		);
		res.json(rows[0]);
	} catch (error) {
		return res.status(500).json({
			message: 'Algo va mal 😐',
		});
	}
};

//? <--- Eliminar empleado --->
export const deleteEmployee = async (req, res) => {
	try {
		const [result] = await pool.query(
			'DELETE FROM employees WHERE id = ?',
			[req.params.id]
		);

		if (result.affectedRows <= 0) {
			return res.status(404).json({
				message: 'Empleado no encontrado para eliminarlo',
			});
		}
		res.sendStatus(204);
	} catch (error) {
		return res.status(500).json({
			message: 'Algo va mal 😐',
		});
	}
};
