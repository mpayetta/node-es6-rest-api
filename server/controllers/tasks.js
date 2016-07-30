import Task from '../models/task';

function load(req, res, next, id) {
  Task.findById(id)
    .exec()
    .then((task) => {
      req.dbTask = task;
      return next();
    }, (e) => next(e));
}

function get(req, res) {
  return res.json(req.dbTask);
}

function create(req, res, next) {
  Task.create({
      user: req.body.user,
      description: req.body.description
    })
    .then((savedTask) => {
      return res.json(savedTask);
    }, (e) => next(e));
}

function update(req, res, next) {
  const task = req.dbTask;
  Object.assign(task, req.body);

  task.save()
    .then(() => res.sendStatus(204),
      (e) => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Task.find()
    .skip(skip)
    .limit(limit)
    .exec()
    .then((tasks) => res.json(tasks),
      (e) => next(e));
}

function remove(req, res, next) {
  const task = req.dbTask;
  task.remove()
    .then(() => res.sendStatus(204),
      (e) => next(e));
}

export default { load, get, create, update, list, remove };
