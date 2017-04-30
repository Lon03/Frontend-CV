"use strict";
import LangLoader from './components/langLoader.js';

export function runBlock ($rootScope) {
  'ngInject';
  let langLoader = new LangLoader();
  $rootScope.translations = langLoader.getTranslations();
}
