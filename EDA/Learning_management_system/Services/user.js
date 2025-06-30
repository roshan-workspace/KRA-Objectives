const eventEmitter = require('../Events/events') 


const users = []

function createUser(user){
  console.log(`User registered: ${user.name, user.email}`);
  eventEmitter.emit('user.register', user)
}


module.exports = {createUser};