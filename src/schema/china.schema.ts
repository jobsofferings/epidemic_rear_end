import * as mongoose from 'mongoose';

export const ChinaSchema = new mongoose.Schema({
  confirm: Number,
  nowSevere: Number,
  importedCase: Number,
  nowConfirm: Number,
  localConfirm: Number,
  dead: Number,
  heal: Number,
  noInfect: Number,
  suspect: Number,
  time: Number,
  healRate: String,
  deadRate: String,
}, {
  versionKey: false
})