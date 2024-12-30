import express from "express";
import {
  MovieCreate,
  MovieDelete,
  MovieIndex,
  MovieUpdate,
} from "./controllers/movies.controller.js";

const router = express.Router();

//Reading
router.get("/", MovieIndex);

//Creating
router.post("/", MovieCreate);

//Updating
router.put("/:id", MovieUpdate);

//Deleting
router.delete("/:id", MovieDelete);

export default router;
