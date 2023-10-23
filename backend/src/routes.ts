import * as express from 'express';
import * as OrganiserController from './controller/OrganiserController';
import * as EventController from './controller/EventController';
import * as ItemController from './controller/ItemController';

const router = express.Router();

router.post('/organisers', OrganiserController.createOrganiser);
router.get('/organisers', OrganiserController.getAllOrganisers);
router.get('/organisers/:id', OrganiserController.getOrganiserById);
router.put('/organisers/:id', OrganiserController.updateOrganiser);
router.delete('/organisers/:id', OrganiserController.deleteOrganiser);

router.post('/events', EventController.createEvent);
router.get('/events', EventController.getAllEvents);
router.get('/events/:id', EventController.getEventById);
router.put('/events/:id', EventController.updateEvent);
router.delete('/events/:id', EventController.deleteEvent);

router.post('/items', ItemController.createItem);
router.get('/items', ItemController.getAllItems);
router.get('/items/:id', ItemController.getItemById);
router.put('/items/:id', ItemController.updateItem);
router.delete('/items/:id', ItemController.deleteItem);


export default router;