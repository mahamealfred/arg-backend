import { Router } from 'express';
import commiteeController from '../controllers/commiteeController';
import addCommiteeValidation from '../middlewares/addCommiteeValidation';
const route = Router();

route.post('/new-commitee',addCommiteeValidation,commiteeController.addCommitee);
route.get('/',commiteeController.getCommittees);

export default route;