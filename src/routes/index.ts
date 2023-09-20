import express from "express";
import product from "./api/v1.route";

const router = express.Router();

router.use("/v1", product);


export default router;
