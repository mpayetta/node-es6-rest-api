import Joi from 'joi';

export default {
  // POST /api/tasks
  createTask: {
    body: {
      user: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
      description: Joi.string().required(),
      done: Joi.boolean()
    }
  },

  // GET /api/tasks/:taskId
  getTask: {
    params: {
      taskId: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
    }
  },

  // PUT /api/tasks/:taskId
  updateTask: {
    body: {
      user: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
      description: Joi.string(),
      done: Joi.boolean()
    }
  }
};
