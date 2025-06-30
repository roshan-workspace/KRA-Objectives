const { createUser } = require("./Services/user");
const { createCourse } = require("./Services/course");
const { enroll } = require("./Services/enroll");
require("./Services/notificaion");

const requests = new Promise((res, rej) => {
  createCourse({ id: 1, name: "Computer Science" });

  setTimeout(() => {
    createUser({
      name: "Roshan",
      age: "21",
      email: "roshanbhagatwork@gmail.com",
    });
    res();
  }, 2000);
});

requests.then(() =>
  setTimeout(() => {
    enroll({ userId: 1, courseId: 101 });
  }, 2000)
);
