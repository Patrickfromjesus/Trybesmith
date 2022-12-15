import User from '../Interfaces/users';
import usersModels from '../models/usersModels';

const create = async (infos: User) => {
  const data = await usersModels.create(infos);
  return data.id;
};

export default {
  create,
};
