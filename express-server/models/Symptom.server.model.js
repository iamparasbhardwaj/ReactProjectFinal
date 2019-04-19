import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  SymptomText: String,
  SymptomDesc: String
});

export default mongoose.model('Symptom', Schema);
