const eventEmitter = require("../Events/events");

function createCourse(course) {
  console.log(`Course registered: ${course.name} with ID:${course.id}`);

  eventEmitter.emit("course.created", course);
}

module.exports = { createCourse };
