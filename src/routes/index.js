import { Router } from 'express';
import authRoute from "./aurth.routes"
import provinceRoute from "./province.routes"
import districtRoute from "./district.routes"
import schoolRoute from "./school.routes"
import memberRoute from "./member.routes"
import familyRoute from "./family.routes"
import commiteeRoute from "./commitee.routes"
const route = Router();

route.use('/api/authentication',authRoute);
route.use('/api/provinces',provinceRoute);
route.use('/api/districts',districtRoute)
route.use('/api/schools',schoolRoute)
route.use('/api/members',memberRoute);
route.use('/api/families',familyRoute);
route.use('/api/commitees',commiteeRoute)


export default route;