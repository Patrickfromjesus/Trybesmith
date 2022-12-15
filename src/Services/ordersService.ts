import ordersModels from '../models/ordersModels';

const getAll = async () => {
  const data = await ordersModels.getAll();
  return data;
};

const create = async (productsIds: number[], userId: number) => {
  const data = await ordersModels.create(productsIds, userId);
  return data;
};

export default {
  getAll,
  create,
};
