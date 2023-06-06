import { Router } from 'express';
import CheckDistrict from '../middlewares/CheckDistrict';
import districtController from '../controllers/districtController';
const route = Router();

route.post('/new-district',CheckDistrict,districtController.addDistrict);
route.get('/',CheckDistrict,districtController.getDristrits);

export default route;