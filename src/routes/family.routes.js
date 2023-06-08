import { Router } from 'express';
import CheckFamily from '../middlewares/CheckFamily';
import familyController from '../controllers/familyController';

const route = Router();

route.post('/new-family',CheckFamily,familyController.addFamily);
route.get('/',familyController.getFamilies);
route.delete('/:id',familyController.deleteFamily);

export default route;