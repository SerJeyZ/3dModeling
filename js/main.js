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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/calc/calc.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/calc/calc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  //DOM elements\n  var calcPacage = document.querySelectorAll('.pacage-group__item');\n  var pacageGroupe = document.querySelector('.pacage-group');\n  var roomSpaceInput = document.getElementById('area');\n  var meterAveragePrice = document.getElementById('cost');\n  var objectPrice = document.getElementById('object-cost'); //input variables\n\n  var inputNumber = parseInt(roomSpaceInput.value);\n  var activePacage = parseInt(meterAveragePrice.value); //slider\n\n  var sliderElem = document.querySelector('.scale');\n  var thumbElem = document.querySelector('.bar');\n  var pos, posLeft;\n  var posRight = sliderElem.offsetWidth - thumbElem.offsetWidth; //classes\n\n  var pacageGroupeActiveClass = 'pacage-group__item--active'; //body\n\n  var onItemActive = function onItemActive(e) {\n    calcPacage.forEach(function (el) {\n      el.classList.remove(pacageGroupeActiveClass);\n    });\n    e.target.classList.add(pacageGroupeActiveClass);\n  };\n\n  var resultPrice = function resultPrice(input, pacage) {\n    var fullPrice = input * pacage;\n    objectPrice.value = fullPrice;\n  };\n\n  calcPacage.forEach(function (el) {\n    el.addEventListener('click', function (e) {\n      activePacage = parseInt(e.target.dataset.price);\n      meterAveragePrice.value = parseInt(e.target.dataset.price);\n      resultPrice(inputNumber, activePacage);\n    });\n  });\n  roomSpaceInput.addEventListener('input', function (e) {\n    if (roomSpaceInput.value > 0 || roomSpaceInput.value === !NaN) {\n      inputNumber = parseInt(roomSpaceInput.value);\n    } else {\n      inputNumber = 0;\n    }\n\n    if (inputNumber < 10000) {\n      thumbElem.style.left = Math.ceil(inputNumber * 0.058) + 'px';\n    } else {\n      thumbElem.style.left = Math.ceil(10000 * 0.058) + 'px';\n    }\n\n    resultPrice(inputNumber, activePacage);\n    console.log(inputNumber);\n  }); //end call\n\n  pacageGroupe.addEventListener('click', onItemActive); //..................................................\n  //slider\n\n  sliderElem.onmousedown = function (e) {\n    posLeft = e.clientX - thumbElem.offsetWidth / 2 - 441;\n    checkPos(posLeft, posRight);\n    roomSpaceInput.value = Math.ceil(pos * 10000 / posRight);\n    var thumbCoords = getCoords(thumbElem);\n    var shiftX = e.pageX - thumbCoords.left; // shiftY здесь не нужен, слайдер двигается только по горизонтали\n\n    var sliderCoords = getCoords(sliderElem);\n\n    document.onmousemove = function (e) {\n      //  вычесть координату родителя, т.к. position: relative\n      posLeft = e.pageX - shiftX - sliderCoords.left; // курсор ушёл вне слайдера\n\n      checkPos(posLeft, posRight);\n      roomSpaceInput.value = Math.ceil(pos * 10000 / posRight);\n      inputNumber = parseInt(roomSpaceInput.value);\n      resultPrice(inputNumber, activePacage);\n    };\n\n    document.onmouseup = function () {\n      document.onmousemove = document.onmouseup = null;\n    };\n\n    return false; // disable selection start (cursor change)\n  };\n\n  thumbElem.ondragstart = function () {\n    return false;\n  };\n\n  function getCoords(elem) {\n    // кроме IE8-\n    var box = elem.getBoundingClientRect();\n    return {\n      top: box.top + pageYOffset,\n      left: box.left + pageXOffset\n    };\n  }\n\n  function checkPos(posLeft, posRight) {\n    pos = posLeft < 0 ? 0 : posLeft > posRight ? posRight : posLeft;\n    thumbElem.style.left = pos + 'px';\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvY2FsYy9jYWxjLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tb2R1bGVzL2NhbGMvY2FsYy5qcz8xNmM0Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gIC8vRE9NIGVsZW1lbnRzXG4gIHZhciBjYWxjUGFjYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2FnZS1ncm91cF9faXRlbScpO1xuICB2YXIgcGFjYWdlR3JvdXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhY2FnZS1ncm91cCcpO1xuICB2YXIgcm9vbVNwYWNlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJlYScpO1xuICB2YXIgbWV0ZXJBdmVyYWdlUHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29zdCcpO1xuICB2YXIgb2JqZWN0UHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb2JqZWN0LWNvc3QnKTsgLy9pbnB1dCB2YXJpYWJsZXNcblxuICB2YXIgaW5wdXROdW1iZXIgPSBwYXJzZUludChyb29tU3BhY2VJbnB1dC52YWx1ZSk7XG4gIHZhciBhY3RpdmVQYWNhZ2UgPSBwYXJzZUludChtZXRlckF2ZXJhZ2VQcmljZS52YWx1ZSk7IC8vc2xpZGVyXG5cbiAgdmFyIHNsaWRlckVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NhbGUnKTtcbiAgdmFyIHRodW1iRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXInKTtcbiAgdmFyIHBvcywgcG9zTGVmdDtcbiAgdmFyIHBvc1JpZ2h0ID0gc2xpZGVyRWxlbS5vZmZzZXRXaWR0aCAtIHRodW1iRWxlbS5vZmZzZXRXaWR0aDsgLy9jbGFzc2VzXG5cbiAgdmFyIHBhY2FnZUdyb3VwZUFjdGl2ZUNsYXNzID0gJ3BhY2FnZS1ncm91cF9faXRlbS0tYWN0aXZlJzsgLy9ib2R5XG5cbiAgdmFyIG9uSXRlbUFjdGl2ZSA9IGZ1bmN0aW9uIG9uSXRlbUFjdGl2ZShlKSB7XG4gICAgY2FsY1BhY2FnZS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShwYWNhZ2VHcm91cGVBY3RpdmVDbGFzcyk7XG4gICAgfSk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChwYWNhZ2VHcm91cGVBY3RpdmVDbGFzcyk7XG4gIH07XG5cbiAgdmFyIHJlc3VsdFByaWNlID0gZnVuY3Rpb24gcmVzdWx0UHJpY2UoaW5wdXQsIHBhY2FnZSkge1xuICAgIHZhciBmdWxsUHJpY2UgPSBpbnB1dCAqIHBhY2FnZTtcbiAgICBvYmplY3RQcmljZS52YWx1ZSA9IGZ1bGxQcmljZTtcbiAgfTtcblxuICBjYWxjUGFjYWdlLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgYWN0aXZlUGFjYWdlID0gcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5wcmljZSk7XG4gICAgICBtZXRlckF2ZXJhZ2VQcmljZS52YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQucHJpY2UpO1xuICAgICAgcmVzdWx0UHJpY2UoaW5wdXROdW1iZXIsIGFjdGl2ZVBhY2FnZSk7XG4gICAgfSk7XG4gIH0pO1xuICByb29tU3BhY2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHJvb21TcGFjZUlucHV0LnZhbHVlID4gMCB8fCByb29tU3BhY2VJbnB1dC52YWx1ZSA9PT0gIU5hTikge1xuICAgICAgaW5wdXROdW1iZXIgPSBwYXJzZUludChyb29tU3BhY2VJbnB1dC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0TnVtYmVyID0gMDtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXROdW1iZXIgPCAxMDAwMCkge1xuICAgICAgdGh1bWJFbGVtLnN0eWxlLmxlZnQgPSBNYXRoLmNlaWwoaW5wdXROdW1iZXIgKiAwLjA1OCkgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHVtYkVsZW0uc3R5bGUubGVmdCA9IE1hdGguY2VpbCgxMDAwMCAqIDAuMDU4KSArICdweCc7XG4gICAgfVxuXG4gICAgcmVzdWx0UHJpY2UoaW5wdXROdW1iZXIsIGFjdGl2ZVBhY2FnZSk7XG4gICAgY29uc29sZS5sb2coaW5wdXROdW1iZXIpO1xuICB9KTsgLy9lbmQgY2FsbFxuXG4gIHBhY2FnZUdyb3VwZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uSXRlbUFjdGl2ZSk7IC8vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbiAgLy9zbGlkZXJcblxuICBzbGlkZXJFbGVtLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICBwb3NMZWZ0ID0gZS5jbGllbnRYIC0gdGh1bWJFbGVtLm9mZnNldFdpZHRoIC8gMiAtIDQ0MTtcbiAgICBjaGVja1Bvcyhwb3NMZWZ0LCBwb3NSaWdodCk7XG4gICAgcm9vbVNwYWNlSW5wdXQudmFsdWUgPSBNYXRoLmNlaWwocG9zICogMTAwMDAgLyBwb3NSaWdodCk7XG4gICAgdmFyIHRodW1iQ29vcmRzID0gZ2V0Q29vcmRzKHRodW1iRWxlbSk7XG4gICAgdmFyIHNoaWZ0WCA9IGUucGFnZVggLSB0aHVtYkNvb3Jkcy5sZWZ0OyAvLyBzaGlmdFkg0LfQtNC10YHRjCDQvdC1INC90YPQttC10L0sINGB0LvQsNC50LTQtdGAINC00LLQuNCz0LDQtdGC0YHRjyDRgtC+0LvRjNC60L4g0L/QviDQs9C+0YDQuNC30L7QvdGC0LDQu9C4XG5cbiAgICB2YXIgc2xpZGVyQ29vcmRzID0gZ2V0Q29vcmRzKHNsaWRlckVsZW0pO1xuXG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gINCy0YvRh9C10YHRgtGMINC60L7QvtGA0LTQuNC90LDRgtGDINGA0L7QtNC40YLQtdC70Y8sINGCLtC6LiBwb3NpdGlvbjogcmVsYXRpdmVcbiAgICAgIHBvc0xlZnQgPSBlLnBhZ2VYIC0gc2hpZnRYIC0gc2xpZGVyQ29vcmRzLmxlZnQ7IC8vINC60YPRgNGB0L7RgCDRg9GI0ZHQuyDQstC90LUg0YHQu9Cw0LnQtNC10YDQsFxuXG4gICAgICBjaGVja1Bvcyhwb3NMZWZ0LCBwb3NSaWdodCk7XG4gICAgICByb29tU3BhY2VJbnB1dC52YWx1ZSA9IE1hdGguY2VpbChwb3MgKiAxMDAwMCAvIHBvc1JpZ2h0KTtcbiAgICAgIGlucHV0TnVtYmVyID0gcGFyc2VJbnQocm9vbVNwYWNlSW5wdXQudmFsdWUpO1xuICAgICAgcmVzdWx0UHJpY2UoaW5wdXROdW1iZXIsIGFjdGl2ZVBhY2FnZSk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZhbHNlOyAvLyBkaXNhYmxlIHNlbGVjdGlvbiBzdGFydCAoY3Vyc29yIGNoYW5nZSlcbiAgfTtcblxuICB0aHVtYkVsZW0ub25kcmFnc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGdldENvb3JkcyhlbGVtKSB7XG4gICAgLy8g0LrRgNC+0LzQtSBJRTgtXG4gICAgdmFyIGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogYm94LnRvcCArIHBhZ2VZT2Zmc2V0LFxuICAgICAgbGVmdDogYm94LmxlZnQgKyBwYWdlWE9mZnNldFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1Bvcyhwb3NMZWZ0LCBwb3NSaWdodCkge1xuICAgIHBvcyA9IHBvc0xlZnQgPCAwID8gMCA6IHBvc0xlZnQgPiBwb3NSaWdodCA/IHBvc1JpZ2h0IDogcG9zTGVmdDtcbiAgICB0aHVtYkVsZW0uc3R5bGUubGVmdCA9IHBvcyArICdweCc7XG4gIH1cbn0pKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/modules/calc/calc.js\n");

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/modules/footer/footer.js\n");

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvaGVhZGVyL2hlYWRlci5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/modules/header/header.js\n");

/***/ }),

/***/ "./src/blocks/modules/main/main.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/main/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvbWFpbi9tYWluLmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/blocks/modules/main/main.js\n");

/***/ }),

/***/ "./src/blocks/modules/our-clients/our-clients.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/our-clients/our-clients.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL21vZHVsZXMvb3VyLWNsaWVudHMvb3VyLWNsaWVudHMuanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/modules/our-clients/our-clients.js\n");

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wb3J0L2NvbXBvbmVudHMuanMuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/import/components.js\n");

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header.js */ \"./src/blocks/modules/header/header.js\");\n/* harmony import */ var _modules_header_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer.js */ \"./src/blocks/modules/footer/footer.js\");\n/* harmony import */ var _modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_main_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/main/main.js */ \"./src/blocks/modules/main/main.js\");\n/* harmony import */ var _modules_main_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_main_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blocks_modules_our_clients_our_clients_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/modules/our-clients/our-clients.js */ \"./src/blocks/modules/our-clients/our-clients.js\");\n/* harmony import */ var _blocks_modules_our_clients_our_clients_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_our_clients_our_clients_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _blocks_modules_calc_calc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/modules/calc/calc.js */ \"./src/blocks/modules/calc/calc.js\");\n/* harmony import */ var _blocks_modules_calc_calc_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_calc_calc_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW1wb3J0L21vZHVsZXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW1wb3J0L21vZHVsZXMuanM/MmVhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIlbW9kdWxlcyUvaGVhZGVyL2hlYWRlci5qc1wiO1xuaW1wb3J0IFwiJW1vZHVsZXMlL2Zvb3Rlci9mb290ZXIuanNcIjtcbmltcG9ydCBcIiVtb2R1bGVzJS9tYWluL21haW4uanNcIjtcbmltcG9ydCBcIi4uLy4uL2Jsb2Nrcy9tb2R1bGVzL291ci1jbGllbnRzL291ci1jbGllbnRzLmpzXCI7XG5pbXBvcnQgXCIuLi8uLi9ibG9ja3MvbW9kdWxlcy9jYWxjL2NhbGMuanNcIjsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/import/modules.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _import_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules.js */ \"./src/js/import/modules.js\");\n/* harmony import */ var _import_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components.js */ \"./src/js/import/components.js\");\n/* harmony import */ var _import_components_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components_js__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Mzg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2ltcG9ydC9tb2R1bGVzLmpzXCI7XG5pbXBvcnQgXCIuL2ltcG9ydC9jb21wb25lbnRzLmpzXCI7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });