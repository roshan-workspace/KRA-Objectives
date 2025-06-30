const eventEmitter = require("../Events/events")

function enroll(details){
   console.log(`User with id:${details.userId} successfully enrolled to course with id:${details.courseId}`);
    eventEmitter.emit('enrolled',details)
}


module.exports = {enroll}