import { Router } from 'express';
import memberController from '../controllers/memberController';
import addMemberValidation from '../middlewares/addMemberValidation';

const route = Router();

route.post('/new-member',addMemberValidation,memberController.addMember);
route.get('/',memberController.getMembers);
route.delete('/:id',memberController.deleteMember);

export default route;