import * as mongoose from 'mongoose';

export const StudentsSchema = new mongoose.Schema({
    name: String,
    age: Number,
})