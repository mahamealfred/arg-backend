import { Router } from 'express';
import schoolController from '../controllers/schoolController';
import CheckSchool from '../middlewares/CheckSchool';
import addSchoolValidation from '../middlewares/addSchoolValidation';

const route = Router();

route.post('/new-school',addSchoolValidation,CheckSchool,schoolController.addSchool);
route.get('/',schoolController.getSchools);

export default route;