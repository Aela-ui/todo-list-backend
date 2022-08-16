import Router from "express";
import taskController from "../controllers/taskController.js";

const taskRouter = Router();

taskRouter.route('/').post(taskController.create);
taskRouter.route('/').get(taskController.findAll);
taskRouter.route('/:id').delete(taskController.delete);

export default taskRouter;