import { Router } from "express";

import { renderTasks,creatTasks,renderTasksEdit,editTask,deleteTask } from "../controllers/tasks.controllers";
const router = Router();

router.get("/",renderTasks );

router.post("/task/add",creatTasks );

router.get("/edit/:id",renderTasksEdit  );
router.post("/edit/:id",editTask );

router.get("/delete/:id",deleteTask);
export default router;
