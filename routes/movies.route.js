import express from "express";

const router = express.Router();

//Reading
router.get("/", (req, res) => {
  res.json({
    message: "Hello Guys",
  });
});

//Creating
router.post("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

//Updating
router.put("/:id", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

//Deleting
router.delete("/:id", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

export default router;
