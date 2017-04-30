"use strict";
export class MainController {
  constructor ($scope, API, $log) {
    'ngInject';
    $scope.lang = 'en';
    $scope.user = {};
    API.getUser()
      .then((rs) => {
        $scope.user = rs.data;
      })
      .catch((err) => {
        $log.debug(err)
      });

    API.getProjects()
      .then((rs) => {
        $scope.projects = rs.data;
      })
      .catch((err) => {
        $log.debug(err)
      });

    API.getEducation()
      .then((rs) => {
        $scope.education = rs.data;
      })
      .catch((err) => {
        $log.debug(err)
      });

    API.getWork()
      .then((rs) => {
        $scope.work = rs.data;
      })
      .catch((err) => {
        $log.debug(err)
      });

    $scope.sendEmail = (send)=> {
      API.emailSend(send)
        .then(() => {
          $scope.send = '';
        })
        .catch((err) => {
          $log.debug(err)
        });
    }
  }
}
