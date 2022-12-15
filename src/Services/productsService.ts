import Products from '../Interfaces/products';
import productsModel from '../models/productsModels'; 

async function create(infos: Products) {
  const data = await productsModel.create(infos);
  return data;
}

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

export default { create, getAll };