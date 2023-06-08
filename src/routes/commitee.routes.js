import { Router } from 'express';
import commiteeController from '../controllers/commiteeController';
const route = Router();

route.post('/new-commitee',commiteeController.addCommitee);
route.get('/',commiteeController.getCommittees);

export default route;