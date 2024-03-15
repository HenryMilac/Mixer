import { Router } from "express";

const router = Router()
router.post('/', (req, res) => {
    const word = "Hello, world!";
    res.send(word);
});

export default router