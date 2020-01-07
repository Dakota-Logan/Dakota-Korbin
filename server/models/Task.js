import mongoose from "mongoose";

let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Task = new Schema({
	title: {type: String, required: true},
	description: {type: String},
	authorId: {type: ObjectId, ref: 'User', required: true},
	listId: {type: ObjectId, ref: 'List', required: true},
}, {timestamps: true});

export default Task;