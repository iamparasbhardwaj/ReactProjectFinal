// ./express-server/controllers/Symptom.server.controller.js
import mongoose from 'mongoose';

//import models
import Symptom from '../models/Symptom.server.model';

export const getSymptoms = (req,res) => {
  Symptom.find().exec((err,Symptoms) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Symptoms fetched successfully',Symptoms});
  });
}

export const addSymptom = (req,res) => {
  console.log(req.body);
  const newSymptom = new Symptom(req.body);
  newSymptom.save((err,Symptom) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':'Symptom added successfully',Symptom});
  })
}

export const updateSymptom = (req,res) => {
  Symptom.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,Symptom) => {
    if(err){
    return res.json({'success':false,'message':'Some Error','error':err});
    }
    console.log(Symptom);
    return res.json({'success':true,'message':'Updated successfully',Symptom});
  })
}

export const getSymptom = (req,res) => {
  Symptom.find({_id:req.params.id}).exec((err,Symptom) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }
    if(Symptom.length){
      return res.json({'success':true,'message':'Symptom fetched by id successfully',Symptom});
    }
    else{
      return res.json({'success':false,'message':'Symptom with the given id not found'});
    }
  })
}

export const deleteSymptom = (req,res) => {
  Symptom.findByIdAndRemove(req.params.id, (err,Symptom) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

    return res.json({'success':true,'message':Symptom.SymptomText+' deleted successfully'});
  })
}
