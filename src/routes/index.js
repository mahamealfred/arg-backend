import { Router } from 'express';
import authRoute from "./aurth.routes"

const route = Router();

route.use('/api/authentication',authRoute);


export default route;