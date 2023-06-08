import { Router } from 'express';
import memberController from '../controllers/memberController';

const route = Router();

route.post('/new-member',memberController.addMember);
route.get('/',memberController.getMembers);
route.delete('/:id',memberController.deleteMember);

export default route;