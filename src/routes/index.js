import { Router } from 'express';
import authRoute from "./aurth.routes"
import provinceRoute from "./province.routes"
const route = Router();

route.use('/api/authentication',authRoute);
route.use('/api/provinces',provinceRoute);

export default route;