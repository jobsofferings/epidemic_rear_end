import * as mongoose from 'mongoose';

export const ForeignSchema = new mongoose.Schema({
    name: String,
    age: Number,
})