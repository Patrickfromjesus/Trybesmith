import express from 'express';
import loginController from '../Controller/loginController';
import ordersController from '../Controller/ordersController';
import productsController from '../Controller/productsController';
import usersController from '../Controller/usersController';
import loginMidd from '../Middlewares/loginMidd';
import productsMidd from '../Middlewares/productsMidd';
import usersMidd from '../Middlewares/usersMidd';

const app = express();

app.use(express.json());

app.post('/products', productsMidd.validate, productsController.create);
app.get('/products', productsController.getAll);
app.post('/users', usersMidd.validate, usersController.create);
app.get('/orders', ordersController.getAll);
app.post('/login', loginMidd.validateFields, loginController.login);
app.post('/orders', ordersController.create);

export default app;
