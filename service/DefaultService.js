'use strict';


/**
 * Returns all active tasks
 *
 * returns List
 **/
exports.tasksGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "color" : "",
  "due" : "2000-01-23",
  "active" : true,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "title" : "Take out the trash",
  "body" : "body",
  "priority" : 0,
  "labels" : [ "urgent", "urgent" ]
}, {
  "color" : "",
  "due" : "2000-01-23",
  "active" : true,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "title" : "Take out the trash",
  "body" : "body",
  "priority" : 0,
  "labels" : [ "urgent", "urgent" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a task
 *
 * id uuid ID of task to use
 * no response value expected for this operation
 **/
exports.tasksIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Returns specified task
 *
 * id uuid ID of task to use
 * returns List
 **/
exports.tasksIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "color" : "",
  "due" : "2000-01-23",
  "active" : true,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "title" : "Take out the trash",
  "body" : "body",
  "priority" : 0,
  "labels" : [ "urgent", "urgent" ]
}, {
  "color" : "",
  "due" : "2000-01-23",
  "active" : true,
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "title" : "Take out the trash",
  "body" : "body",
  "priority" : 0,
  "labels" : [ "urgent", "urgent" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adds new active task
 *
 * body Task 
 * id uuid ID of task to use
 * returns String
 **/
exports.tasksIdPOST = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "success!";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a task
 *
 * body Task  (optional)
 * id uuid ID of task to use
 * no response value expected for this operation
 **/
exports.tasksIdPUT = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

