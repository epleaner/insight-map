module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/insightGraph/index.js":
/*!**********************************************!*\
  !*** ./src/components/insightGraph/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "d3-scale");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_scale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale-chromatic */ "d3-scale-chromatic");
/* harmony import */ var d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "d3-selection");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_selection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-force */ "d3-force");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_force__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/epleaner/workspace/insight-map/src/components/insightGraph/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const InsightGraph = ({
  nodes
}) => {
  const radius = 8;
  const maxHistory = 5;
  const width = 600;
  const height = 400;
  const {
    0: showRecent,
    1: setShowRecent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const toggleRecent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setShowRecent(show => !show), []);
  const {
    0: inputHistory,
    1: setInputHistory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: chart,
    1: setChart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const svgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: chartData,
    1: setChartData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nodes: [],
    links: []
  });
  const color = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"])(d3_scale_chromatic__WEBPACK_IMPORTED_MODULE_2__["schemeTableau10"]), []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(svgRef.current).append('svg').style('width', '100vw').style('height', '100vh').attr('viewBox', [-width / 2, -height / 2, width, height]);
    const simulation = Object(d3_force__WEBPACK_IMPORTED_MODULE_4__["forceSimulation"])().force('charge', Object(d3_force__WEBPACK_IMPORTED_MODULE_4__["forceManyBody"])().strength(-1000)).force('link', Object(d3_force__WEBPACK_IMPORTED_MODULE_4__["forceLink"])().id(d => d.id).distance(100)).force('center', Object(d3_force__WEBPACK_IMPORTED_MODULE_4__["forceCenter"])()).force('x', Object(d3_force__WEBPACK_IMPORTED_MODULE_4__["forceX"])()).force('y', Object(d3_force__WEBPACK_IMPORTED_MODULE_4__["forceY"])()).on('tick', ticked);
    let link = svg.append('g').attr('stroke', '#000').selectAll('line');
    let circle = svg.append('g').selectAll('g');

    function ticked() {
      circle.attr('transform', d => `translate(${d.x}, ${d.y})`);
      link.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
    }

    setChart(Object.assign(Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(svgRef.current).node(), {
      update({
        nodes,
        links
      }) {
        // Make a shallow copy to protect against mutation, while
        // recycling old nodes to preserve position and velocity.
        const old = new Map(circle.data().map(d => [d.id, d]));
        nodes = nodes.map(d => Object.assign(old.get(d.id) || {}, d));
        links = links.map(d => Object.assign({}, d));
        circle = circle.data(nodes, d => d.id).join('g').attr('data', d => d.data);
        circle.append('circle').attr('r', 8).attr('stroke', '#fff').attr('stroke-width', 1.5).attr('fill', d => color(d.id));
        circle.append('text').text(d => d.id).attr('fill', d => color(d.id)).attr('dy', radius * 3).attr('font-size', '1rem').attr('text-anchor', 'middle');
        link = link.data(links, d => [d.source, d.target]).join('line').attr('opacity', d => 1 - d.weight / maxHistory);
        simulation.nodes(nodes);
        simulation.force('link').links(links);
        simulation.alpha(1).restart();
      }

    }));
    return () => {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])(svg).remove();
    };
  }, [color]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (chart) {
      chart.update(chartData);
    }
  }, [chart, chartData.nodes.length, chartData.links.length]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (nodes.length === 0) return;
    const newWord = nodes[nodes.length - 1];
    if (newWord.error) return;
    console.log('in graph effect, new word:', newWord);
    if (inputHistory.length === maxHistory) inputHistory.pop();
    const newNode = {
      id: newWord.transcription,
      data: newWord
    };
    setChartData(prevData => {
      let newData = _objectSpread({}, prevData);

      const newWordAlreadyInGraph = prevData.nodes.some(e => e.id === newNode.id);
      if (!newWordAlreadyInGraph) newData.nodes.push(newNode);
      let updatedLinks = []; // keep track of which previous inputs have already been updated

      inputHistory.forEach((prevInput, ndx) => {
        if ( // don't need to update yourself
        prevInput.id !== newNode.id && // only update links once
        !updatedLinks.includes(prevInput.id)) {
          // look through the links and update weight with average if we find a match
          newData.links = newData.links.map(e => {
            if (e.source === prevInput.id && e.target === newNode.id || e.source === newNode.id && e.target === prevInput.id) {
              e.weight = (e.weight + ndx) / 2;
              updatedLinks.push(prevInput.id);
            }

            return e;
          }); // if we didn't update this link (meaning it didn't exist), create a link

          if (!updatedLinks.includes(prevInput.id)) {
            newData.links.push({
              source: prevInput.id,
              target: newNode.id,
              weight: ndx
            });
          }
        }
      });
      return newData;
    });
    inputHistory.unshift(newNode);
    setInputHistory(inputHistory);
  }, [inputHistory, nodes.length]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "absolute m-2 text-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, "Show recent nodes", __jsx("input", {
    className: "mx-2",
    type: "checkbox",
    value: showRecent,
    onClick: toggleRecent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  })), showRecent && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, inputHistory.map((i, ndx) => __jsx("li", {
    key: i.id + ndx,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, i.data.transcription))))), __jsx("main", {
    ref: svgRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InsightGraph);

/***/ }),

/***/ "./src/components/insightGraph/webSocketListener.js":
/*!**********************************************************!*\
  !*** ./src/components/insightGraph/webSocketListener.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/epleaner/workspace/insight-map/src/components/insightGraph/webSocketListener.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SOCKET_STATUS = {
  '0': 'Attempting to connect...',
  '1': 'Open',
  '2': 'Closing',
  '3': 'Closed'
};

const WebSocketListener = ({
  onMessage
}) => {
  const {
    0: socket,
    1: setSocket
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: socketState,
    1: setSocketState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('disconnected');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const connectToWebSocket = () => {
      // Create WebSocket connection.
      const socket = new WebSocket('ws://localhost:5678');

      socket.onopen = event => {
        setSocketState('connected');
      };

      socket.onmessage = event => {
        console.log('Message from server ', event.data);
        onMessage(JSON.parse(event.data));
      };

      socket.onclose = event => {
        console.log('Connection closed');
        setSocketState('disconnected');
        setTimeout(() => connectToWebSocket(), 1000);
      };

      socket.onerror = error => {
        console.log('Error', error);
        setSocketState('error');
      };

      setSocket(socket);
    };

    connectToWebSocket();
    return () => socket && socket.close();
  }, []);
  return __jsx("div", {
    className: "absolute right-0 m-2 text-gray-200",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "Socket:", ' ', __jsx("span", {
    className: socketState === 'connected' ? 'text-green-400' : 'text-red-400',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, socket && SOCKET_STATUS[socket.readyState]));
};

WebSocketListener.propTypes = {
  onMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WebSocketListener);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_insightGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/insightGraph */ "./src/components/insightGraph/index.js");
/* harmony import */ var _components_insightGraph_webSocketListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/insightGraph/webSocketListener */ "./src/components/insightGraph/webSocketListener.js");
var _jsxFileName = "/Users/epleaner/workspace/insight-map/src/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const InsightGraphPage = () => {
  const {
    0: nodes,
    1: setNodes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const addNode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newNode => {
    setNodes(prev => {
      const newState = [...prev];
      newState.push(newNode);
      return newState;
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_insightGraph_webSocketListener__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onMessage: addNode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_components_insightGraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
    nodes: nodes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InsightGraphPage);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/epleaner/workspace/insight-map/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "d3-force":
/*!***************************!*\
  !*** external "d3-force" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-force");

/***/ }),

/***/ "d3-scale":
/*!***************************!*\
  !*** external "d3-scale" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-scale");

/***/ }),

/***/ "d3-scale-chromatic":
/*!*************************************!*\
  !*** external "d3-scale-chromatic" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-scale-chromatic");

/***/ }),

/***/ "d3-selection":
/*!*******************************!*\
  !*** external "d3-selection" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-selection");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map