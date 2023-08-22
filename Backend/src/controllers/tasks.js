import { connect } from "../database/conexionbd";


import sql from "mssql"; 

export const getTasks = async (req, res) => {
    const DBTareas_Diarias = await connect();
    const result = await DBTareas_Diarias.query('select * from Tareas');
    const tasks = result.recordset;

    res.json(tasks);
}

export const getTaskId = async (req, res) => {
    const connection = await connect();
    const query = `SELECT * FROM Tareas WHERE ID_Tareas = @id`;
    const result = await connection.request().input('id', req.params.id).query(query);
    const tasks = result.recordset;


    res.json(tasks);
}

// export const getTaskId = async (req, res) => {
//     try {
//         const connection = await connect();
//         const query = `SELECT * FROM Tareas WHERE ID_Tareas = @id`;
//         const result = await connection.request().input('id', req.params.id).query(query);
//         const tasks = result.recordset;

//         if (tasks.length > 0) {
//             res.json(tasks);
//         } else {
//             res.status(404).json({ message: 'Tarea no encontrada' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error en el servidor' });
//     }
// };

export const getTaskCount = async (req, res) => {
    try{
        const DBTareas_Diarias = await connect();
    const result = await DBTareas_Diarias.query('select count (*) as count from Tareas');
    const tasks = result.recordset[0].count;

    res.json(tasks);
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
    
};

export const saveTasks = async (req, res) => {
    try {
        const { Titulo, descripcion } = req.body; // Extraer datos del cuerpo de la solicitud
        const pool = await connect(); // Obtener una conexión de la piscina
        const request = pool.request();
        request.input('Titulo', sql.NVarChar(100), Titulo);
        request.input('descripcion', sql.Text, descripcion);

        // Consulta SQL para insertar una nueva tarea
        const query = `
            INSERT INTO Tareas (Titulo, descripcion)
            OUTPUT Inserted.ID_Tareas
            VALUES (@Titulo, @descripcion)
        `;

        const result = await request.query(query);

        // Obtener el ID de la tarea insertada
        const insertedId = result.recordset[0].ID_Tareas;

        res.status(201).json({ id: insertedId, message: 'Tarea guardada correctamente' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};


export const deleteTasks = async (req, res) => {
    try{
        const taskId = req.params.id;
        const connection = await connect();
        const request = connection.request();
        request.input('id', sql.Int, taskId);
    
        const query = `
                DELETE FROM Tareas
                WHERE ID_Tareas = @id
            `;
    
            const result = await request.query(query);
    
            if (result.rowsAffected[0] === 0) {
                // Si no se eliminó ninguna fila, la tarea no existía
                return res.status(404).json({ message: 'La tarea N° '+ taskId + ' no existe' });
            }
    
            res.status(200).json({ message: 'La Tarea N° '+ taskId + ' fue eliminada correctamente' });
    
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error en el servidor' });
        }
    }
   
        



    



// export const deleteTasks = (req, res) => {
//     res.send('Hello World');
// }

export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { Titulo, descripcion } = req.body; // Datos actualizados de la tarea
        const pool = await connect(); // Obtener una conexión de la piscina
        const request = pool.request();
        request.input('id', sql.Int, taskId);
        request.input('Titulo', sql.NVarChar(100), Titulo);
        request.input('descripcion', sql.Text, descripcion);

        // Consulta SQL para actualizar una tarea por su ID
        const query = `
            UPDATE Tareas
            SET Titulo = @Titulo, descripcion = @descripcion
            WHERE ID_Tareas = @id
        `;

        const result = await request.query(query);

        if (result.rowsAffected[0] === 0) {
            // Si no se actualizó ninguna fila, la tarea no existía
            return res.status(404).json({ message: 'La tarea no existe' });
        }

        res.status(200).json({ message: 'Tarea actualizada correctamente' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
