import Cadaster from '../Interfaces/cadaster';
import loginModels from '../models/loginModels';

const login = async (infos: Cadaster) => {
  const data = await loginModels.login(infos);
  return data;
};

export default {
  login,
};
