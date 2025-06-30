const eventEmitter = require("../Events/events")


eventEmitter.on('user.register',(user)=>{
    console.log(`Sending welcome message to ${user.email}`);
})


eventEmitter.on('course.created', (course)=>{
    console.log(`Course Created Successfully. ${JSON.stringify(course)}`);
})

eventEmitter.on('enrolled',(details)=>{
    console.log(`✅ Confirmation sent to User ${details.userId} for Course ${details.courseId}`);
})