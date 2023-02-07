import { IProduct, IUser } from '../../interfaces';
import { productSchema, userSchema } from './schemas';
// import { productSchema } from './schemas';

export function productsValidation(product: IProduct) {
  const { error } = productSchema.validate(product);
  if (error) {
    return { type: 422, message: { message: error.message } };
  }
  return { type: null, message: '' };
}

export function usersValidation(product: IUser) {
  const { error } = userSchema.validate(product);
  if (error) {
    return { type: 422, message: error.message };
  }
  return { type: 201, message: '' };
}
