import {Router} from 'express';
import {celebrate, Segments, Joi} from 'celebrate';
import ongController from './controllers/ongController'
import incidentController from './controllers/incidentController'
import sessionController from './controllers/sessionController'
import profileController from './controllers/profileController'

const routes = Router();
routes.get('/ongs', ongController.index); // lista todas as ongs
routes.post('/ongs',celebrate({
  [Segments.BODY]:Joi.object().keys({
    name:Joi.string().required(),
    email:Joi.string().required().email(),
    whatsapp:Joi.number().required().min(10).max(11),
    city:Joi.string().required(),
    uf:Joi.string().required().length(2),
  })
}) ,ongController.create);//cria ong
routes.post('/session',sessionController.create); //faz o login da ong
routes.get('/incidents',incidentController.index)//lista todos os casos
routes.post('/incidents',incidentController.create)//cria um caso
routes.delete('/incidents/:id',incidentController.delete)//deleta um caso
routes.get('/profile',profileController.index ) //lista casos da ong logada


export default routes;

