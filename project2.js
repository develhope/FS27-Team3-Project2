const taskParameter = "";

function addTask(taskParameter, callback) {
  setTimeout(() => {
    if (typeof taskParameter !== "string" || taskParameter.length === 0) {
      callback(new Error("Task must be a non-empty string", null));
    } else {
      array.push(taskParameter);
      callback(null, "Task added successfully");
    }
  }, 1000);
}
