import { Router } from 'express';

const route = Router();

route.post('/signup',(req,res)=>{
    res.send("hello")
});


export default route;