type Body = {
  productsIds: number[] | string;
};

const checkProducts = (body: Body) => {
  if (!body.productsIds) {
    return { type: false, error: 400, message: { message: '"productsIds" is required' } };
  }
  if (!Array.isArray(body.productsIds)) {
    return { type: false, error: 422, message: { message: '"productsIds" must be an array' } };
  }
  if (!body.productsIds.every((e) => typeof Number(e) === 'number') || !body.productsIds.length) {
    return {
      type: false,
      error: 422,
      message: { message: '"productsIds" must include only numbers' } };
  }
  return { type: true };
};

const validate = (body: Body) => {
  const validateField = checkProducts(body);
  if (!validateField.type) {
    return { type: false, error: validateField.error, message: validateField.message };
  }
  return validateField;
};

export default { validate };
