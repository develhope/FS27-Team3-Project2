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

function completeTask(index, callback){
  setTimeout(() => {
      if(index < 0 || index > array.length){
          callback(new Error("Invalid task index"), null);
      } else {
          array.splice(index, 1);
          callback(null, "Task completed sucessfully!")
      } 
  }, 1000);
}
//add task Vittoria
addTask(taskParameter, (error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
});
