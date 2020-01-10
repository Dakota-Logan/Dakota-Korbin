import mongoose from "mongoose"
import Comment from "../models/Comment"
import ApiError from "../utils/ApiError"

const _repository = mongoose.model('Comment', Comment)

class CommentService {
  async getAll(userId) {
    return await _repository.find({ authorId: userId })
  }

  async getById(id, userId) {
    let data = await _repository.find({ _id: id, authorId: userId })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this comment", 400)
    }
    return data
  }
  async getCommentsByBoardId(boardId, uid) {
    let data = await _repository.find({ boardId, authorId: uid })
    return data
  }

  async create(rawData) {
    let data = await _repository.create(rawData)
    return data
  }

  async edit(id, userId, update) {
    let data = await _repository.findOneAndUpdate({ _id: id, authorId: userId }, update, { new: true })
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this comment", 400);
    }
    return data;
  }

  async delete(id, userId) {
    let data = await _repository.findOneAndRemove({ _id: id, authorId: userId });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this comment", 400);
    }
  }

}


const _commentService = new CommentService()
export default _commentService