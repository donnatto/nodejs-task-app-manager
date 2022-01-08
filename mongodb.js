// CRUD operations

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

/*const id = new ObjectID()
console.log(id.id)
console.log(id.toHexString().length)*/

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to database')
  }

  const db = client.db(databaseName);
/*
  db.collection('users').findOne({ _id: new ObjectID('61d8e4a7edec770aff110815') }, (err, user) =>  {
    if (err) return console.log('Unable to fetch')
    console.log(user)
  })

  db.collection('users').find({ age: 27 }).toArray((err, users) => {
    console.log(users)
  });

  db.collection('users').find({ age: 27 }).count((err, count) => {
    console.log(count)
  });*/

  /*db.collection('tasks').findOne({ _id: new ObjectID('61d8e1814e8a66085606c451' )}, (err, res) => {
    if (err) console.error('Unable to fetch')
    console.log(res)
  })

  db.collection('tasks').find({ completed: false }).toArray((err, res) => {
    console.log(res)
  })*/

  /*db.collection('users')
    .updateOne({ _id: new ObjectID('61d7be08bd88e92b72e2f994') }, {
      $inc: {
        age: 1
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))*/

  /*db.collection('tasks')
    .updateMany({ completed: false }, {
      $set: {
        completed: true
      }
    })
    .then(res => console.log(res.modifiedCount))
    .catch(err => console.log(err))*/

  /*db.collection('users')
    .deleteMany({ age: 27})
    .then(res => console.log(res))
    .catch(err => console.error(err))*/

  /*db.collection('tasks')
    .deleteOne({ description: 'Feed the cat' })
    .then(res => console.log(res))
    .catch(err => console.error(err))*/

})