import { Router } from 'express';
import schoolController from '../controllers/schoolController';
import CheckSchool from '../middlewares/CheckSchool';

const route = Router();

route.post('/new-school',CheckSchool,schoolController.addSchool);
route.get('/',schoolController.getSchools);

export default route;