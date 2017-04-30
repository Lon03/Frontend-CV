"use strict";

import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ApiFactory } from './factory/api.factory';


angular.module('myLending', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap', 'toastr'])

  .config(routerConfig)
  .run(runBlock)

  .controller('MainController', MainController)
  .factory('API', ApiFactory);
