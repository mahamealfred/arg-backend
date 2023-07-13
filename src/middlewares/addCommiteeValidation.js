import Joi from "joi";

const addCommiteeValidation = (req, res, next) => {
  const Schemas = Joi.object().keys({
    fullName: Joi.string().min(6).required(),
    schoolId: Joi.string().min(6).required(),
    role: Joi.string().required(),
 
      
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



export default addCommiteeValidation;