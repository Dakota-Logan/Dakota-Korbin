import _boardService from '../services/BoardService'
import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import _listService from "../services/ListService"
import _taskService from "../services/TaskService"
import _commentService from "../services/CommentService"


//PUBLIC
export default class BoardsController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/lists', this.getListsByBoardId)
      .get('/:id/tasks', this.getTasksByBoardId)
      .get('/:id/comments', this.getCommentsByBoardId)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  // this is pretty neato

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No Such Route' })
  }

  async getAll(req, res, next) {
    try {
      //only gets boards by user who is logged in
      let data = await _boardService.getAll(req.session.uid)
      return res.send(data)
    }
    catch (err) { next(err) }
  }

  async getById(req, res, next) {
    try {
      let data = await _boardService.getById(req.params.id, req.session.uid)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async getListsByBoardId(req, res, next) {
    try {
      let data = await _listService.getListsByBoardId(req.params.id, req.session.uid)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
	//DON'T forget to res.send or else your request will die. Blame: Korbin
  async getTasksByBoardId(req, res, next) {
    try {
      let data = await _taskService.getTasksByBoardId(req.params.id, req.session.uid)
	    return res.status(200).send(data);
    } catch (error) {
		next(error)
    }
  }

  async getCommentsByBoardId(req, res, next) {
    try {
      let data = await _commentService.getCommentsByBoardId(req.params.id, req.session.uid)
	    return res.status(200).send(data);
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid
      let data = await _boardService.create(req.body)
      return res.status(201).send(data)
    } catch (error) { next(error) }
  }

  async edit(req, res, next) {
    try {
      let data = await _boardService.edit(req.params.id, req.session.uid, req.body)
      return res.send(data)
    } catch (error) { next(error) }
  }

  async delete(req, res, next) {
    try {
      await _boardService.delete(req.params.id, req.session.uid)
      return res.send("Successfully deleted")
    } catch (error) { next(error) }
  }
}


