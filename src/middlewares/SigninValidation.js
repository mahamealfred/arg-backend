import Joi from "joi";

const SigninValidation = (req, res, next) => {
  const Schemas = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().required(),   
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



export default SigninValidation;