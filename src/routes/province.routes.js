import { Router } from 'express';
import provinceController from '../controllers/provinceControler';
import CheckProvince from '../middlewares/CheckProvince';
const route = Router();

route.post('/new-province',CheckProvince,provinceController.addProvince);
route.get('/',CheckProvince,provinceController.getProvinces);
export default route;