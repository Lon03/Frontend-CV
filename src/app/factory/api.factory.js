"use strict";
export class ApiFactory {
  constructor($q, $http) {
    'ngInject';

    let url = 'https://cryptic-citadel-96618.herokuapp.com/';
    return {
      getUser: () => {

        let prom = $q.defer();
        $http.get(url + 'User', {
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
          .then((rs) => {
            prom.resolve(rs);
          })
          .catch((err) => {
            prom.reject(err);
          });
        return prom.promise;
      },
      getProjects: () => {

        let prom = $q.defer();
        $http.get(url + 'Projects', {
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
          .then((rs) => {
            prom.resolve(rs);
          })
          .catch((err) => {
            prom.reject(err);
          });
        return prom.promise;
      },
      getEducation: () => {

        let prom = $q.defer();
        $http.get(url + 'Education', {
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
          .then((rs) => {
            prom.resolve(rs);
          })
          .catch((err) => {
            prom.reject(err);
          });
        return prom.promise;
      },
      getWork: () => {

        let prom = $q.defer();
        $http.get(url + 'Work', {
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
          .then((rs) => {
            prom.resolve(rs);
          })
          .catch((err) => {
            prom.reject(err);
          });
        return prom.promise;
      },
      emailSend: (data) => {

        let prom = $q.defer();
        $http.post(url + 'emailSend', {
          data: data
        }, {
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
          .then((rs) => {
            prom.resolve(rs);
          })
          .catch((err) => {
            prom.reject(err);
          });
        return prom.promise;
      }
    }
  }
}
