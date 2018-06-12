/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/service-worker/worker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/service-worker/worker.js":
/*!*****************************************!*\
  !*** ./src/js/service-worker/worker.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Set this to true for production\nvar doCache = true;\n// Name our cache\nvar CACHE_NAME = 'gdcg-pwa-cache';\n\nimportScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');\n\nif (workbox) {\n    console.log('Yay! Workbox is loaded \\uD83C\\uDF89');\n\n    workbox.precaching.precacheAndRoute(self.__precacheManifest || []);\n\n    workbox.routing.registerRoute(new RegExp('.*\\.js'), workbox.strategies.networkFirst());\n\n    workbox.routing.registerRoute(\n    // Cache CSS files\n    /.*\\.css/,\n    // Use cache but update in the background ASAP\n    workbox.strategies.staleWhileRevalidate({\n        // Use a custom cache name\n        cacheName: 'css-cache'\n    }));\n\n    workbox.routing.registerRoute(\n    // Cache image files\n    /.*\\.(?:png|jpg|jpeg|svg|gif)/,\n    // Use the cache if it's available\n    workbox.strategies.cacheFirst({\n        // Use a custom cache name\n        cacheName: 'image-cache',\n        plugins: [new workbox.expiration.Plugin({\n            // Cache only 20 images\n            maxEntries: 20,\n            // Cache for a maximum of a week\n            maxAgeSeconds: 7 * 24 * 60 * 60\n        })]\n    }));\n} else {\n    console.log('Boo! Workbox didn\\'t load \\uD83D\\uDE2C');\n}\n\nvar assets = [\"/\", \"/index.html\", \"/manifest.json\", \"/css/styles.css\", \"/fonts/local/FrutigerLTW01-55Roman.woff\", \"/img/bg-cover.png\", \"/img/bg-light.png\", \"/fonts/local/FrutigerLTW01-45Light.woff\"];\n\n//# sourceURL=webpack:///./src/js/service-worker/worker.js?");

/***/ })

/******/ });