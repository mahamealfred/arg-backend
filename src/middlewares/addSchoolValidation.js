import Joi from "joi";

const addSchoolValidation = (req, res, next) => {
  const Schemas = Joi.object().keys({
    name: Joi.string().min(2).required(),
    type: Joi.string().min(3).required(),
    districtId: Joi.string().required(),

 
      
   });
  const { error } = Schemas.validate(req.body);

  if (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }
  next();
};



export default addSchoolValidation ;