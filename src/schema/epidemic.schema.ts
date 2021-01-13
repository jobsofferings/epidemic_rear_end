import * as mongoose from 'mongoose';

export const EpidemicSchema = new mongoose.Schema({
  name: String,
  age: Number,
})