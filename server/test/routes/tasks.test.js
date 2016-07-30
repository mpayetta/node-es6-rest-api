import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import { expect } from 'chai';
import sinon from 'sinon';
import app from '../../../index';
import { clearDatabase } from '../../helpers/ClearDB';
import User from '../../models/user';
import Task from '../../models/task';

require('sinon-mongoose');
require('sinon-as-promised');

describe('## Tasks API Tests', () => {

  let sandbox, user;

  before((done) => {
    User.create({
      username: 'testuser',
      password: 'testuser'
    }).then((u) => {
      user = u;
      done();
    })
  });

  beforeEach((done) => {
    clearDatabase(() => {
      sandbox = sinon.sandbox.create();
      done();
    });
  });

  afterEach((done) => {
    sandbox.restore();
    done();
  });

  describe('### GET /tasks', () => {

  });

  describe('### GET /tasks/:taskId', () => {

  });

  describe('### POST /tasks', () => {
    it('should return the created task successfully', (done) => {
      request(app)
        .post('/api/tasks')
        .send({
          user: user._id,
          description: 'this is a test task'
        })
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.user).to.equal(user._id.toString());
          expect(res.body.description).to.equal('this is a test task');
          expect(res.body._id).to.exist;
          done();
        });
    });

    it('should return Internal Server Error when mongoose fails to save task', (done) => {
      const createStub = sandbox.stub(Task, 'create');
      createStub.rejects({});
      request(app)
        .post('/api/tasks')
        .send({
          user: user._id,
          description: 'this is a test task'
        })
        .expect(httpStatus.INTERNAL_SERVER_ERROR)
        .then(() => done());
    });

    it('should return Bad Request when missing user', (done) => {
      request(app)
        .post('/api/tasks')
        .send({
          description: 'this is a test task'
        })
        .expect(httpStatus.BAD_REQUEST)
        .then(() => done());
    });
  });

  describe('### PUT /tasks/:taskId', () => {

  });

  describe('### DELETE /tasks/:taskId', () => {

  });

});