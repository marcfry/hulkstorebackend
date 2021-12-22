import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

router.route('/').get(productoCtrl.getPrueba);

export default router;