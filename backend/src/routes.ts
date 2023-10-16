import * as express from 'express';
import * as OrganiserController from './controller/OrganiserController';

const router = express.Router();

router.post('/organisers', OrganiserController.createOrganiser);
router.get('/organisers', OrganiserController.getAllOrganisers);

export default router;