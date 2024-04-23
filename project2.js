const taskParameter = "ciao";
const array = [];

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
// Lista dei task
function listTasks(){(err, result) => {
  if (err) {
    console.error("Errore:", err.message);
  } else {
    console.log("Tasks:", result);
  }
};
}

//add task Vittoria
addTask(taskParameter,(error, data) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(data);
  }
});
completeTask(0,(error, data) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log(data);
    }
  });
  

addTask(taskParameter,listTasks)
completeTask(2,listTasks)