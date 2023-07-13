import Joi from "joi";

const SignupValidation = (req, res, next) => {
  const Schemas = Joi.object().keys({
    fullName: Joi.string().min(6).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().required(),
  //     .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      
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



export default SignupValidation;