import Joi from 'joi';

const productNameSchema = Joi.string().min(3).required();
const productAmountSchema = Joi.string().min(3).required();

export const productSchema = Joi.object({
  name: productNameSchema,
  amount: productAmountSchema,
});

export const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  vocation: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export const productsIdsSchema = Joi.array()
  .items(Joi.number().required())
  .label('productsIds')
  .messages({
    'array.includesRequiredUnknowns': '{{#label}} must include only numbers',
  });
