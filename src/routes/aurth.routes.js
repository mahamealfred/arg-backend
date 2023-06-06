import { Router } from 'express';
import authController from '../controllers/authController';
import CheckUser from '../middlewares/CheckUser';
const route = Router();

route.post('/signup',CheckUser,authController.signup);
route.post('/signin',CheckUser,authController.singin);
route.get('/users',CheckUser,authController.getAllUser);
route.delete('/user/:id',authController.deleteUser);
export default route;