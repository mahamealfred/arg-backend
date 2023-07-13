import { Router } from 'express';
import authController from '../controllers/authController';
import CheckUser from '../middlewares/CheckUser';
import isAdmin from '../middlewares/isAdmin';
import SignupValidation from '../middlewares/SignupValidation';
import SigninValidation from '../middlewares/SigninValidation';
const route = Router();

route.post('/signup',isAdmin,SignupValidation,CheckUser,authController.signup);
route.post('/signin',SigninValidation,CheckUser,authController.singin);
route.get('/users',CheckUser,authController.getAllUser);
route.delete('/user/:id',authController.deleteUser);
route.put('/update-user-role/:id',isAdmin,authController.updateUserRole);
export default route;