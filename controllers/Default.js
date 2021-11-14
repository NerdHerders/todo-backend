'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.tasksGET = function tasksGET (req, res, next) {
  Default.tasksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksIdDELETE = function tasksIdDELETE (req, res, next, id) {
  Default.tasksIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksIdGET = function tasksIdGET (req, res, next, id) {
  Default.tasksIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksIdPOST = function tasksIdPOST (req, res, next, body, id) {
  Default.tasksIdPOST(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.tasksIdPUT = function tasksIdPUT (req, res, next, body, id) {
  Default.tasksIdPUT(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
