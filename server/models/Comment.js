import mongoose from "mongoose"

let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const Comment = new Schema({
	body: { type: String, required: true },
	authorId: { type: ObjectId, ref: 'User', required: true },
	taskId: { type: ObjectId, ref: 'Task', required: true }

}, { timestamps: true });

export default Comment;