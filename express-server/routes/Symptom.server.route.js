// ./express-server/routes/Symptom.server.route.js
import express from 'express';

//import controller file
import * as SymptomController from '../controllers/Symptom.server.controller';

// get an instance of express router
const router = express.Router();

router.route('/')
     .get(SymptomController.getSymptoms)
     .post(SymptomController.addSymptom)
     .put(SymptomController.updateSymptom);

router.route('/:id')
      .get(SymptomController.getSymptom)
      .delete(SymptomController.deleteSymptom);


export default router;
