import Task from "../db/models/taskModel.js";

export default {
    create: async(req, res) => {
        try {
            const task = req.body;

            await Task.create(task);
    
            return res.status(201).json({
                status: 'Success',
                message: 'Task criada com sucesso',
                payload: null
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error,
                payload: null
            });
        }
    },

    findAll: async(req, res) => {
        try {
            const result = await Task.findAll();

            return res.status(200).json({
                status: 'Success',
                message: 'Tasks retornadas com sucesso',
                payload: result
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error,
                payload: null
            });
        }
    },

    delete: async(req, res) => {
        try {
            const { id } = req.params;

            await Task.delete(id);

            return res.status(200).json({
                status: 'Success',
                message: 'Task deletada com sucesso',
                payload: null
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error,
                payload: null
            });
        }
    },
};