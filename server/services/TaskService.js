import mongoose from "mongoose"
import Task from "../models/Task"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Task', Task)

class TaskService {
	async getAll(userId) {
		return await _repository.find({ authorId: userId })
	}

	async getById(id, userId) {
		let data = await _repository.find({ _id: id, authorId: userId })
		if (!data) {
			throw new ApiError("Invalid ID or you do not own this task", 400)
		}
		return data
	}

	async create(rawData) {
		let data = await _repository.create(rawData)
		return data
	}

	async edit(id, userId, update) {
		let data = await _repository.findOneAndUpdate({ _id: id, authorId: userId }, update, { new: true })
		if (!data) {
			throw new ApiError("Invalid ID or you do not own this task", 400);
		}
		return data;
	}

	async delete(id, userId) {
		let data = await _repository.findOneAndRemove({ _id: id, authorId: userId });
		if (!data) {
			throw new ApiError("Invalid ID or you do not own this task", 400);
		}
	}

}


const _taskService = new TaskService()
export default _taskService