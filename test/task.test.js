const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const {
  userOne,
  userTwo,
  taskOne,
  setupDatabase
} = require('./fixtures/db')

const authTokenOne = `Bearer ${userOne.tokens[0].token}`
const authTokenTwo = `Bearer ${userTwo.tokens[0].token}`
beforeEach(setupDatabase)

test('Should create task for user', async () => {
  const response = await request(app)
    .post('/tasks')
    .set('Authorization', authTokenOne)
    .send({
      description: 'From my test'
    })
    .expect(201)

  const task = await Task.findById(response.body._id)
  expect(task).not.toBeNull()
  expect(task.completed).toBe(false)
})

test('Should fetch user tasks', async () => {
  const response = await request(app)
    .get('/tasks')
    .set('Authorization', authTokenOne)
    .send()
    .expect(200)

  expect(response.body.length).toEqual(2)
})

test('Should not delete other user tasks', async () => {
  await request(app)
    .delete('/tasks/' + taskOne._id)
    .set('Authorization', authTokenTwo)
    .send()
    .expect(404)

  const task = await Task.findById(taskOne._id)
  expect(task).not.toBeNull()
})