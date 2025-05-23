import express from "express";
import { getBook } from "../controller/book.controller.js";
import Book from "../model/book.model.js"; // Add this import

const router = express.Router();

router.get("/", getBook);

// Add this POST route
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;