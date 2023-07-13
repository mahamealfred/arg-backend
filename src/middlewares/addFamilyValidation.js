import Joi from "joi";

const addFamilyValidation = (req, res, next) => {
  const Schemas = Joi.object().keys({
    name: Joi.string().min(6).required(),
    fatherName: Joi.string().min(6).required(),
    motherName: Joi.string().min(6).required(),
    schoolId: Joi.string().required(),
    members: Joi.string().required(),
 
      
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



export default addFamilyValidation;