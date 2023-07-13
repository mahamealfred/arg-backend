import { Router } from 'express';
import CheckFamily from '../middlewares/CheckFamily';
import familyController from '../controllers/familyController';
import addFamilyValidation from '../middlewares/addFamilyValidation';

const route = Router();

route.post('/new-family',addFamilyValidation,CheckFamily,familyController.addFamily);
route.get('/',familyController.getFamilies);
route.delete('/:id',familyController.deleteFamily);

export default route;