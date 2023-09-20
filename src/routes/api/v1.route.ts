import express from 'express';
import * as dentistController from '../../controllers/v1.controller';

const router = express.Router();

router.get('/products', dentistController.Products);
router.get('/products/:id', dentistController.Product);
router.post ('/products', dentistController.PostProduct);
router.put ('/products/:id', dentistController.PutProduct);
router.delete('/products/:id', dentistController.DelProduct);

export default router;
