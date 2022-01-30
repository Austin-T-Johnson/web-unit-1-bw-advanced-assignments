const express = require('express')
const Todo = require('./data')
const cors = require('cors')

const api = express()

api.use(express.json())

api.use(cors())

api.get('/api/todos', (req, res) => {
  res.json(Todo.getAll())
})

api.get('/api/todos/:id', (req, res) => {
  res.json(Todo.getById(req.params.id))
})

api.post('/api/todos', (req, res) => {
  res.json(Todo.create(req.body))
})

api.patch('/api/todos/:id', (req, res) => {
  res.json(Todo.toggleDone(req.params.id))
})

api.delete('/api/todos/:id', (req, res) => {
  res.json(Todo.remove(req.params.id))
})

api.listen(9000, () => {
  console.log('listening on 9000')
})
