import Joi from "joi";

const addMemberValidation = (req, res, next) => {
  const Schemas = Joi.object().keys({
    firstName: Joi.string().min(6).required(),
    lastName: Joi.string().min(6).required(),
    schoolId: Joi.string().required(),
    gender: Joi.string().required(),
 
      
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



export default addMemberValidation;