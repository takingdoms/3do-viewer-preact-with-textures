module.exports =
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
/******/ 	__webpack_require__.p = "https://takingdoms.github.io/3do-viewer-preact-with-textures/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "qVkA");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/dwh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var OptionsUser = function OptionsUser(_ref) {
  var userSettings = _ref.userSettings,
    setUserSettings = _ref.setUserSettings;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "space-y-4"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "flex flex-col items-stretch"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
    for: "sidebarPosition"
  }, "Sidebar Position"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
    id: "sidebarPosition",
    value: userSettings.sidebarPosition,
    onChange: function onChange(ev) {
      var sidebarPosition = ev.currentTarget.value === 'left' ? 'left' : 'right';
      setUserSettings(_objectSpread(_objectSpread({}, userSettings), {}, {
        sidebarPosition: sidebarPosition
      }));
    }
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "left"
  }, "Left"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "right"
  }, "Right"))));
};
/* harmony default export */ __webpack_exports__["a"] = (OptionsUser);

/***/ }),

/***/ "/u4b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
__exportStar(__webpack_require__("CCBT"), exports);
__exportStar(__webpack_require__("ejsI"), exports);
__exportStar(__webpack_require__("BQX+"), exports);

/***/ }),

/***/ "BQX+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parse3do = void 0;
var ByteUtils = __importStar(__webpack_require__("CCBT"));
var structs_1 = __webpack_require__("weEs");
function fromBuffer(data) {
  return {
    rootNodes: parseObjects(data, 0)
  };
}
function parseObjects(data, offset) {
  var result = [];
  var nextSibling = offset;
  do {
    var struct = ByteUtils.makeStruct(data, nextSibling, structs_1.OBJECT_STRUCT);
    // debugPrintStruct(struct);
    var name = parseName(data, struct['OffsetToObjectName']);
    var vertices = parseVertices(data, struct['OffsetToVertexArray'], struct['NumberOfVertexes']);
    var primitives = parsePrimitives(data, struct['OffsetToPrimitiveArray'], struct['NumberOfPrimitives']);
    var children = struct['OffsetToChildObject'] !== 0 ? parseObjects(data, struct['OffsetToChildObject']) : [];
    var object = {
      name: name,
      vertices: vertices,
      primitives: primitives,
      children: children,
      xOffset: struct['XFromParent'],
      yOffset: struct['YFromParent'],
      zOffset: struct['ZFromParent']
    };
    result.push(object);
    nextSibling = struct['OffsetToSiblingObject'];
  } while (nextSibling !== 0);
  return result;
}
var textDecoder = new TextDecoder('ascii');
var NAME_LIMIT = 256;
function parseName(data, offset) {
  var size = 0;
  for (var i = 0; i < NAME_LIMIT; i++) {
    size = i;
    var nextByte = data.getUint8(offset + i);
    if (nextByte === 0) break;
  }
  /*if (size === 0) {
    return '';
  }*/
  var slice = new Uint8Array(data.buffer, offset, size);
  return textDecoder.decode(slice);
}
function parseVertices(data, offset, count) {
  var result = [];
  for (var i = 0; i < count; i++) {
    var struct = ByteUtils.makeStruct(data, offset + i * structs_1.VERTEX_STRUCT_SIZE, structs_1.VERTEX_STRUCT);
    result.push({
      x: struct.x,
      y: struct.y,
      z: struct.z
    });
  }
  return result;
}
function parsePrimitives(data, offset, count) {
  var result = [];
  for (var i = 0; i < count; i++) {
    var struct = ByteUtils.makeStruct(data, offset + i * structs_1.PRIMITIVE_STRUCT_SIZE, structs_1.PRIMITIVE_STRUCT);
    var vertexIndices = [];
    for (var v = 0; v < struct['NumberOfVertexIndexes']; v++) {
      // v * 2 because each vertex index reads 2 bytes (aka Uint16)
      var nextVertexIndex = data.getUint16(struct['OffsetToVertexIndexArray'] + v * 2, true);
      vertexIndices.push(nextVertexIndex);
    }
    var textureName = parseName(data, struct['OffsetToTextureName']);
    result.push({
      vertexIndices: vertexIndices,
      textureName: textureName
    });
  }
  return result;
}
function debugPrintStruct(struct) {
  for (var _i = 0, _Object$entries = Object.entries(struct); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      field = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    var hex = '0x' + value.toString(16).toUpperCase().padStart(4, '0');
    console.log("".concat(field, ": ").concat(value, " (").concat(hex, ")"));
  }
  console.log();
}
exports.Parse3do = {
  fromBuffer: fromBuffer
};

/***/ }),

/***/ "CCBT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStruct = exports.readInteger = exports.ENDIANNESSES = exports.INTEGER_TYPES = void 0;
exports.INTEGER_TYPES = ['U8', 'I8', 'U16', 'I16', 'U32', 'I32'];
exports.ENDIANNESSES = ['LE', 'BE'];
function readInteger(data, pos, type) {
  var endianness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'LE';
  if (type === 'I8') {
    return data.getInt8(pos);
  }
  if (type === 'U8') {
    return data.getUint8(pos);
  }
  if (type === 'I16') {
    return data.getInt16(pos, endianness === 'LE');
  }
  if (type === 'U16') {
    return data.getUint16(pos, endianness === 'LE');
  }
  return data.getInt32(pos, endianness === 'LE');
}
exports.readInteger = readInteger;
function makeStruct(data, offset, structDef) {
  var endianness = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'LE';
  var result = {};
  var _iterator = _createForOfIteratorHelper(structDef),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        name = _step$value[0],
        type = _step$value[1];
      result[name] = readInteger(data, offset, type, endianness);
      if (type === 'U8' || type === 'I8') {
        offset += 1;
      } else if (type === 'U16' || type === 'I16') {
        offset += 2;
      } else if (type === 'U32' || type === 'I32') {
        offset += 4;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
exports.makeStruct = makeStruct;

/***/ }),

/***/ "GssO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var _SliderControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Xvsu");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ColorControl = function ColorControl(_ref) {
  var color = _ref.color,
    setColor = _ref.setColor;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "e"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCustom = _useState2[0],
    setIsCustom = _useState2[1];
  var currentOption = 'custom';
  if (!isCustom) {
    if (color[0] === 1 && color[1] === 1 && color[2] === 1 && color[3] === 1) {
      currentOption = 'white';
    } else if (color[0] === 1 && color[1] === 0 && color[2] === 0 && color[3] === 1) {
      currentOption = 'red';
    } else if (color[0] === 0 && color[1] === 1 && color[2] === 0 && color[3] === 1) {
      currentOption = 'green';
    } else if (color[0] === 0 && color[1] === 0 && color[2] === 1 && color[3] === 1) {
      currentOption = 'blue';
    }
  }
  var custom = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "c"])(function () {
    if (!isCustom) {
      return null;
    }
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "space-y-2"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_SliderControl__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      id: "red",
      label: "Red",
      min: 0,
      max: 255,
      value: Math.floor(color[0] * 255),
      setValue: function setValue(value) {
        var newColor = value / 255;
        setColor([newColor, color[1], color[2], color[3]]);
      }
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_SliderControl__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      id: "green",
      label: "Green",
      min: 0,
      max: 255,
      value: Math.floor(color[1] * 255),
      setValue: function setValue(value) {
        var newColor = value / 255;
        setColor([color[0], newColor, color[2], color[3]]);
      }
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_SliderControl__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      id: "blue",
      label: "Blue",
      min: 0,
      max: 255,
      value: Math.floor(color[2] * 255),
      setValue: function setValue(value) {
        var newColor = value / 255;
        setColor([color[0], color[1], newColor, color[3]]);
      }
    }));
  }, [isCustom, color, setColor]);
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: ""
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
    value: currentOption,
    onChange: function onChange(ev) {
      var option = ev.currentTarget.value;
      if (option === 'custom') {
        setIsCustom(true);
        return;
      }
      setIsCustom(false);
      var color = option === 'red' ? [1, 0, 0, 1] : option === 'green' ? [0, 1, 0, 1] : option === 'blue' ? [0, 0, 1, 1] : [1, 1, 1, 1]; // white

      setColor(color);
    }
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "custom"
  }, "(Custom)"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "white"
  }, "White"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "red"
  }, "Red"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "green"
  }, "Green"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "blue"
  }, "Blue")), custom);
};
/* harmony default export */ __webpack_exports__["a"] = (ColorControl);

/***/ }),

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "IomO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Fragment) {/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var _OptionsControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NOVX");
/* harmony import */ var _OptionsMisc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tpTz");
/* harmony import */ var _OptionsUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("/dwh");
/* harmony import */ var _view_modes_RegularOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nF9+");
/* harmony import */ var _view_modes_SolidColorOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("qiYd");
/* harmony import */ var _view_modes_WireframeOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("b2Zb");








var Options = function Options(_ref) {
  var modelControls = _ref.modelControls,
    setModelControls = _ref.setModelControls,
    userSettings = _ref.userSettings,
    setUserSettings = _ref.setUserSettings,
    logoDefs = _ref.logoDefs,
    canvasRef = _ref.canvasRef;
  var controls = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "c"])(function () {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_OptionsControls__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      modelControls: modelControls,
      setModelControls: setModelControls
    });
  }, [modelControls, setModelControls]);
  var user = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "c"])(function () {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_OptionsUser__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      userSettings: userSettings,
      setUserSettings: setUserSettings
    });
  }, [userSettings, setUserSettings]);
  var viewModeOptions = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "c"])(function () {
    var viewMode = modelControls.viewMode;
    var sub = viewMode === 'regular' ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_view_modes_RegularOptions__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      modelControls: modelControls,
      setModelControls: setModelControls,
      logoDefs: logoDefs
    }) : viewMode === 'solid_color' ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_view_modes_SolidColorOptions__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
      modelControls: modelControls,
      setModelControls: setModelControls
    }) : viewMode === 'wireframe' ? Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_view_modes_WireframeOptions__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
      modelControls: modelControls,
      setModelControls: setModelControls
    }) : null;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Fragment, null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "text-center font-bold border-b border-gray-700 mb-2 pb-1 mt-6"
    }, "View Mode Settings"), sub);
  }, [modelControls, setModelControls]);
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "max-h-full overflow-auto px-6"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "text-center font-bold border-b border-gray-700 mb-2 pb-1"
  }, "Controls"), controls, viewModeOptions, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "text-center font-bold border-b border-gray-700 mb-2 pb-1 mt-6"
  }, "User Settings"), user, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "text-center font-bold border-b border-gray-700 mb-2 pb-1 mt-6"
  }, "Misc."), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_OptionsMisc__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    modelControls: modelControls,
    setModelControls: setModelControls,
    canvasRef: canvasRef,
    enableSaveImageButton: userSettings.preserveDrawingBuffer
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (Options);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "NOVX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ./lib/types/view.ts
var VIEW_MODES = ['regular', 'solid_color', 'wireframe'];
// EXTERNAL MODULE: ./components/ui/SliderControl.tsx
var SliderControl = __webpack_require__("Xvsu");

// CONCATENATED MODULE: ./components/options/OptionsControls.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var OptionsControls_OptionsControls = function OptionsControls(_ref) {
  var modelControls = _ref.modelControls,
    setModelControls = _ref.setModelControls;
  return Object(external_preact_["h"])("div", {
    class: "space-y-4"
  }, Object(external_preact_["h"])(SliderControl["a" /* default */], {
    id: "zoom",
    label: "Zoom",
    max: 1000,
    value: modelControls.zoom,
    setValue: function setValue(zoom) {
      return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        zoom: zoom
      }));
    }
  }), Object(external_preact_["h"])(SliderControl["a" /* default */], {
    id: "rotationX",
    label: "Rotation X",
    min: -180,
    max: 180,
    value: modelControls.rotationX,
    setValue: function setValue(rotationX) {
      return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        rotationX: rotationX
      }));
    }
  }), Object(external_preact_["h"])(SliderControl["a" /* default */], {
    id: "rotationY",
    label: "Rotation Y",
    min: -180,
    max: 180,
    value: modelControls.rotationY,
    setValue: function setValue(rotationY) {
      return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        rotationY: rotationY
      }));
    }
  }), Object(external_preact_["h"])(SliderControl["a" /* default */], {
    id: "rotationZ",
    label: "Rotation Z",
    min: -180,
    max: 180,
    value: modelControls.rotationZ,
    setValue: function setValue(rotationZ) {
      return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        rotationZ: rotationZ
      }));
    }
  }), Object(external_preact_["h"])(SliderControl["a" /* default */], {
    id: "panX",
    label: "Pan X",
    value: modelControls.translationX,
    setValue: function setValue(translationX) {
      return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        translationX: translationX
      }));
    }
  }), Object(external_preact_["h"])(SliderControl["a" /* default */], {
    id: "panY",
    label: "Pan Y",
    value: modelControls.translationY,
    setValue: function setValue(translationY) {
      return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        translationY: translationY
      }));
    }
  }), Object(external_preact_["h"])("div", {
    class: "flex flex-col items-stretch"
  }, Object(external_preact_["h"])("label", {
    for: "viewMode"
  }, "View Mode"), Object(external_preact_["h"])("select", {
    id: "viewMode",
    value: modelControls.viewMode,
    onChange: function onChange(ev) {
      var viewMode = VIEW_MODES.find(function (vm) {
        return vm === ev.currentTarget.value;
      });
      if (viewMode) {
        setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
          viewMode: viewMode
        }));
      }
    }
  }, Object(external_preact_["h"])("option", {
    value: "regular"
  }, "Regular"), Object(external_preact_["h"])("option", {
    value: "solid_color"
  }, "Solid Color"), Object(external_preact_["h"])("option", {
    value: "wireframe"
  }, "Wireframe"))));
};
/* harmony default export */ var options_OptionsControls = __webpack_exports__["a"] = (OptionsControls_OptionsControls);

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T; });
/* unused harmony export useContext */
/* unused harmony export useDebugValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return h; });
/* unused harmony export useErrorBoundary */
/* unused harmony export useId */
/* unused harmony export useImperativeHandle */
/* unused harmony export useLayoutEffect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return F; });
/* unused harmony export useReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return p; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function p(n) {
  return o = 1, y(B, n);
}
function y(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }
  return o.__N || o.__;
}
function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "Xvsu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var SliderControl = function SliderControl(_ref) {
  var id = _ref.id,
    label = _ref.label,
    min = _ref.min,
    max = _ref.max,
    value = _ref.value,
    setValue = _ref.setValue;
  // console.log(`Re-rendering SliderControl (${id})`);

  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
    for: id
  }, label)), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "flex items-center space-x-2"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
    type: "number",
    style: {
      width: '80px'
    },
    value: value,
    onChange: function onChange(ev) {
      setValue(+ev.currentTarget.value);
    }
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
    class: "grow",
    type: "range",
    min: min,
    max: max,
    style: {
      width: '120px'
    },
    value: value,
    onChange: function onChange(ev) {
      setValue(+ev.currentTarget.value || 0);
    }
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (SliderControl);

/***/ }),

/***/ "b2Zb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_ColorControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GssO");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var WireframeOptions = function WireframeOptions(_ref) {
  var modelControls = _ref.modelControls,
    setModelControls = _ref.setModelControls;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "space-y-4"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: ""
  }, "Wireframe Color"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_ui_ColorControl__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    color: modelControls.wireframeColor,
    setColor: function setColor(wireframeColor) {
      return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        wireframeColor: wireframeColor
      }));
    }
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (WireframeOptions);

/***/ }),

/***/ "ejsI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/***/ }),

/***/ "nF9+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var RegularOptions = function RegularOptions(_ref) {
  var modelControls = _ref.modelControls,
    setModelControls = _ref.setModelControls,
    logoDefs = _ref.logoDefs;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "space-y-4"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Team Color"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "flex flex-wrap -m-1 p-1"
    // style={{ background: '#333', border: '1px solid #222' }}
  }, logoDefs.idxList.map(function (idx) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      key: idx,
      class: "m-1"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(LogoButton, {
      htmlColor: logoDefs.idxToHtmlColor(idx),
      isSelected: modelControls.logoColorIdx === idx,
      onSelect: function onSelect() {
        return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
          logoColorIdx: idx
        }));
      }
    }));
  }))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "space-y-2"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Texture Filter (Min.)"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
    value: modelControls.textureFilterMin,
    onChange: function onChange(ev) {
      var value = ev.currentTarget.value;
      setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        textureFilterMin: value
      }));
    }
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "nearest"
  }, "Nearest"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "linear"
  }, "Linear"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Texture Filter (Mag.)"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
    value: modelControls.textureFilterMag,
    onChange: function onChange(ev) {
      var value = ev.currentTarget.value;
      setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        textureFilterMag: value
      }));
    }
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "nearest"
  }, "Nearest"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "linear"
  }, "Linear")))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
    class: "flex items-center"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
    type: "checkbox",
    checked: modelControls.enableLightingRegular,
    onChange: function onChange(ev) {
      setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        enableLightingRegular: ev.currentTarget.checked
      }));
    }
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "pl-1"
  }, "Enable Lighting"))));
};
var LogoButton = function LogoButton(_ref2) {
  var htmlColor = _ref2.htmlColor,
    isSelected = _ref2.isSelected,
    onSelect = _ref2.onSelect;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
    class: "w-8 h-8 border border-2 p-1 rounded-full flex justify-center items-center",
    style: {
      borderColor: htmlColor
    },
    onClick: function onClick() {
      if (!isSelected) onSelect();
    }
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "w-full h-full rounded-full leading-none",
    style: {
      backgroundColor: isSelected ? htmlColor : ''
    }
  }));
};
/* harmony default export */ __webpack_exports__["a"] = (RegularOptions);

/***/ }),

/***/ "qVkA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ../node_modules/gl-matrix/esm/common.js
var common_namespaceObject = {};
__webpack_require__.r(common_namespaceObject);
__webpack_require__.d(common_namespaceObject, "EPSILON", function() { return EPSILON; });
__webpack_require__.d(common_namespaceObject, "ARRAY_TYPE", function() { return ARRAY_TYPE; });
__webpack_require__.d(common_namespaceObject, "RANDOM", function() { return RANDOM; });
__webpack_require__.d(common_namespaceObject, "setMatrixArrayType", function() { return setMatrixArrayType; });
__webpack_require__.d(common_namespaceObject, "toRadian", function() { return toRadian; });
__webpack_require__.d(common_namespaceObject, "equals", function() { return equals; });

// NAMESPACE OBJECT: ../node_modules/gl-matrix/esm/mat4.js
var mat4_namespaceObject = {};
__webpack_require__.r(mat4_namespaceObject);
__webpack_require__.d(mat4_namespaceObject, "create", function() { return create; });
__webpack_require__.d(mat4_namespaceObject, "clone", function() { return clone; });
__webpack_require__.d(mat4_namespaceObject, "copy", function() { return copy; });
__webpack_require__.d(mat4_namespaceObject, "fromValues", function() { return fromValues; });
__webpack_require__.d(mat4_namespaceObject, "set", function() { return set; });
__webpack_require__.d(mat4_namespaceObject, "identity", function() { return identity; });
__webpack_require__.d(mat4_namespaceObject, "transpose", function() { return transpose; });
__webpack_require__.d(mat4_namespaceObject, "invert", function() { return invert; });
__webpack_require__.d(mat4_namespaceObject, "adjoint", function() { return adjoint; });
__webpack_require__.d(mat4_namespaceObject, "determinant", function() { return determinant; });
__webpack_require__.d(mat4_namespaceObject, "multiply", function() { return multiply; });
__webpack_require__.d(mat4_namespaceObject, "translate", function() { return mat4_translate; });
__webpack_require__.d(mat4_namespaceObject, "scale", function() { return mat4_scale; });
__webpack_require__.d(mat4_namespaceObject, "rotate", function() { return mat4_rotate; });
__webpack_require__.d(mat4_namespaceObject, "rotateX", function() { return mat4_rotateX; });
__webpack_require__.d(mat4_namespaceObject, "rotateY", function() { return mat4_rotateY; });
__webpack_require__.d(mat4_namespaceObject, "rotateZ", function() { return mat4_rotateZ; });
__webpack_require__.d(mat4_namespaceObject, "fromTranslation", function() { return fromTranslation; });
__webpack_require__.d(mat4_namespaceObject, "fromScaling", function() { return fromScaling; });
__webpack_require__.d(mat4_namespaceObject, "fromRotation", function() { return fromRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromXRotation", function() { return fromXRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromYRotation", function() { return fromYRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromZRotation", function() { return fromZRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromRotationTranslation", function() { return fromRotationTranslation; });
__webpack_require__.d(mat4_namespaceObject, "fromQuat2", function() { return fromQuat2; });
__webpack_require__.d(mat4_namespaceObject, "getTranslation", function() { return getTranslation; });
__webpack_require__.d(mat4_namespaceObject, "getScaling", function() { return getScaling; });
__webpack_require__.d(mat4_namespaceObject, "getRotation", function() { return getRotation; });
__webpack_require__.d(mat4_namespaceObject, "fromRotationTranslationScale", function() { return fromRotationTranslationScale; });
__webpack_require__.d(mat4_namespaceObject, "fromRotationTranslationScaleOrigin", function() { return fromRotationTranslationScaleOrigin; });
__webpack_require__.d(mat4_namespaceObject, "fromQuat", function() { return fromQuat; });
__webpack_require__.d(mat4_namespaceObject, "frustum", function() { return frustum; });
__webpack_require__.d(mat4_namespaceObject, "perspectiveNO", function() { return perspectiveNO; });
__webpack_require__.d(mat4_namespaceObject, "perspective", function() { return perspective; });
__webpack_require__.d(mat4_namespaceObject, "perspectiveZO", function() { return perspectiveZO; });
__webpack_require__.d(mat4_namespaceObject, "perspectiveFromFieldOfView", function() { return perspectiveFromFieldOfView; });
__webpack_require__.d(mat4_namespaceObject, "orthoNO", function() { return orthoNO; });
__webpack_require__.d(mat4_namespaceObject, "ortho", function() { return ortho; });
__webpack_require__.d(mat4_namespaceObject, "orthoZO", function() { return orthoZO; });
__webpack_require__.d(mat4_namespaceObject, "lookAt", function() { return lookAt; });
__webpack_require__.d(mat4_namespaceObject, "targetTo", function() { return targetTo; });
__webpack_require__.d(mat4_namespaceObject, "str", function() { return mat4_str; });
__webpack_require__.d(mat4_namespaceObject, "frob", function() { return frob; });
__webpack_require__.d(mat4_namespaceObject, "add", function() { return add; });
__webpack_require__.d(mat4_namespaceObject, "subtract", function() { return subtract; });
__webpack_require__.d(mat4_namespaceObject, "multiplyScalar", function() { return multiplyScalar; });
__webpack_require__.d(mat4_namespaceObject, "multiplyScalarAndAdd", function() { return multiplyScalarAndAdd; });
__webpack_require__.d(mat4_namespaceObject, "exactEquals", function() { return exactEquals; });
__webpack_require__.d(mat4_namespaceObject, "equals", function() { return mat4_equals; });
__webpack_require__.d(mat4_namespaceObject, "mul", function() { return mul; });
__webpack_require__.d(mat4_namespaceObject, "sub", function() { return sub; });

// NAMESPACE OBJECT: ../node_modules/gl-matrix/esm/vec3.js
var vec3_namespaceObject = {};
__webpack_require__.r(vec3_namespaceObject);
__webpack_require__.d(vec3_namespaceObject, "create", function() { return vec3_create; });
__webpack_require__.d(vec3_namespaceObject, "clone", function() { return vec3_clone; });
__webpack_require__.d(vec3_namespaceObject, "length", function() { return vec3_length; });
__webpack_require__.d(vec3_namespaceObject, "fromValues", function() { return vec3_fromValues; });
__webpack_require__.d(vec3_namespaceObject, "copy", function() { return vec3_copy; });
__webpack_require__.d(vec3_namespaceObject, "set", function() { return vec3_set; });
__webpack_require__.d(vec3_namespaceObject, "add", function() { return vec3_add; });
__webpack_require__.d(vec3_namespaceObject, "subtract", function() { return vec3_subtract; });
__webpack_require__.d(vec3_namespaceObject, "multiply", function() { return vec3_multiply; });
__webpack_require__.d(vec3_namespaceObject, "divide", function() { return divide; });
__webpack_require__.d(vec3_namespaceObject, "ceil", function() { return ceil; });
__webpack_require__.d(vec3_namespaceObject, "floor", function() { return floor; });
__webpack_require__.d(vec3_namespaceObject, "min", function() { return min; });
__webpack_require__.d(vec3_namespaceObject, "max", function() { return max; });
__webpack_require__.d(vec3_namespaceObject, "round", function() { return round; });
__webpack_require__.d(vec3_namespaceObject, "scale", function() { return vec3_scale; });
__webpack_require__.d(vec3_namespaceObject, "scaleAndAdd", function() { return scaleAndAdd; });
__webpack_require__.d(vec3_namespaceObject, "distance", function() { return distance; });
__webpack_require__.d(vec3_namespaceObject, "squaredDistance", function() { return squaredDistance; });
__webpack_require__.d(vec3_namespaceObject, "squaredLength", function() { return squaredLength; });
__webpack_require__.d(vec3_namespaceObject, "negate", function() { return negate; });
__webpack_require__.d(vec3_namespaceObject, "inverse", function() { return inverse; });
__webpack_require__.d(vec3_namespaceObject, "normalize", function() { return normalize; });
__webpack_require__.d(vec3_namespaceObject, "dot", function() { return dot; });
__webpack_require__.d(vec3_namespaceObject, "cross", function() { return cross; });
__webpack_require__.d(vec3_namespaceObject, "lerp", function() { return lerp; });
__webpack_require__.d(vec3_namespaceObject, "hermite", function() { return hermite; });
__webpack_require__.d(vec3_namespaceObject, "bezier", function() { return bezier; });
__webpack_require__.d(vec3_namespaceObject, "random", function() { return random; });
__webpack_require__.d(vec3_namespaceObject, "transformMat4", function() { return transformMat4; });
__webpack_require__.d(vec3_namespaceObject, "transformMat3", function() { return transformMat3; });
__webpack_require__.d(vec3_namespaceObject, "transformQuat", function() { return transformQuat; });
__webpack_require__.d(vec3_namespaceObject, "rotateX", function() { return vec3_rotateX; });
__webpack_require__.d(vec3_namespaceObject, "rotateY", function() { return vec3_rotateY; });
__webpack_require__.d(vec3_namespaceObject, "rotateZ", function() { return vec3_rotateZ; });
__webpack_require__.d(vec3_namespaceObject, "angle", function() { return angle; });
__webpack_require__.d(vec3_namespaceObject, "zero", function() { return zero; });
__webpack_require__.d(vec3_namespaceObject, "str", function() { return vec3_str; });
__webpack_require__.d(vec3_namespaceObject, "exactEquals", function() { return vec3_exactEquals; });
__webpack_require__.d(vec3_namespaceObject, "equals", function() { return vec3_equals; });
__webpack_require__.d(vec3_namespaceObject, "sub", function() { return vec3_sub; });
__webpack_require__.d(vec3_namespaceObject, "mul", function() { return vec3_mul; });
__webpack_require__.d(vec3_namespaceObject, "div", function() { return div; });
__webpack_require__.d(vec3_namespaceObject, "dist", function() { return vec3_dist; });
__webpack_require__.d(vec3_namespaceObject, "sqrDist", function() { return sqrDist; });
__webpack_require__.d(vec3_namespaceObject, "len", function() { return vec3_len; });
__webpack_require__.d(vec3_namespaceObject, "sqrLen", function() { return sqrLen; });
__webpack_require__.d(vec3_namespaceObject, "forEach", function() { return forEach; });

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// EXTERNAL MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__("QRet");

// CONCATENATED MODULE: ./lib/types/user-settings.ts
var DEFAULT_USER_SETTINGS = {
  sidebarPosition: 'right',
  sidebarWidth: 300,
  defaultTextureFilterMin: 'nearest',
  defaultTextureFilterMag: 'nearest',
  preserveDrawingBuffer: false
};
// CONCATENATED MODULE: ./lib/services/user-service.ts
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var localStorageUserService = {
  save: function save(userSettings) {
    var str = JSON.stringify(userSettings);
    localStorage.setItem('user', str);
  },
  load: function load() {
    var str = localStorage.getItem('user');
    if (str === null) {
      return undefined;
    }
    var obj = JSON.parse(str);
    if (_typeof(obj) !== 'object') {
      throw new Error("User settings is not an object");
    }
    var sidebarPosition = obj['sidebarPosition'];
    if (sidebarPosition !== 'left' && sidebarPosition !== 'right') {
      throw new Error("Invalid sidebarPosition");
    }
    var sidebarWidth = obj['sidebarWidth'];
    if (typeof sidebarWidth !== 'number') {
      throw new Error("Invalid sidebarWidth");
    }
    var defaultTextureFilterMin = obj['defaultTextureFilterMin'];
    if (defaultTextureFilterMin !== 'nearest' && defaultTextureFilterMin !== 'linear') {
      throw new Error("Invalid defaultTextureFilterMin");
    }
    var defaultTextureFilterMag = obj['defaultTextureFilterMag'];
    if (defaultTextureFilterMag !== 'nearest' && defaultTextureFilterMag !== 'linear') {
      throw new Error("Invalid defaultTextureFilterMag");
    }
    var preserveDrawingBuffer = obj['preserveDrawingBuffer'];
    if (typeof preserveDrawingBuffer !== 'boolean') {
      preserveDrawingBuffer = DEFAULT_USER_SETTINGS.preserveDrawingBuffer;
    }
    return {
      sidebarPosition: sidebarPosition,
      sidebarWidth: sidebarWidth,
      defaultTextureFilterMin: defaultTextureFilterMin,
      defaultTextureFilterMag: defaultTextureFilterMag,
      preserveDrawingBuffer: preserveDrawingBuffer
    };
  }
};
// CONCATENATED MODULE: ./lib/types/model-controls.ts
var DEFAULT_MODEL_CONTROLS = {
  rotationX: 50,
  rotationY: -150,
  rotationZ: 0,
  translationX: 0,
  translationY: 0,
  zoom: 900,
  viewMode: 'regular',
  viewColor: [1.0, 1.0, 1.0, 1.0],
  // mixes multiplicatively
  canvasBackground: 'black',
  canvasBackgroundSize: 'auto',
  canvasBackgroundRepeat: 'repeat',
  enableLightingRegular: false,
  logoColorIdx: 0,
  textureFilterMin: 'linear',
  textureFilterMag: 'linear',
  enableLightingSolidColor: true,
  solidColor: [1.0, 1.0, 1.0, 1.0],
  wireframeColor: [1.0, 1.0, 1.0, 1.0]
};
// CONCATENATED MODULE: ./components/loader/FileChooser.tsx

var SAMPLES = ['aradrag.3do', 'tardrag.3do', 'verdrag.3do', 'zondrag.3do', 'creaeri.3do', 'aralode.3do', 'araking.3do', 'cresage.3do', 'tarnecro.3do', 'vermage.3do', 'zonhunt.3do'].map(function (name) {
  return {
    name: name,
    path: 'assets/3do-samples/' + name
  };
});
var FileChooser_FileChooser = function FileChooser(_ref) {
  var _onSubmit = _ref.onSubmit;
  var option1 = Object(external_preact_["h"])("form", {
    class: "px-4 py-2 border border-4 border-gray-600 rounded",
    onSubmit: function onSubmit(ev) {
      ev.preventDefault();
      var formData = new FormData(ev.currentTarget);
      var file = formData.get('file');
      if (file && file.size && file.name) {
        _onSubmit(file);
      }
    }
  }, Object(external_preact_["h"])("div", {
    class: "text-3xl text-center mb-4"
  }, "Option 1"), Object(external_preact_["h"])("div", {
    class: "text-xl text-gray-400 mb-2"
  }, "Load your own file"), Object(external_preact_["h"])("div", {
    className: "flex items-stretch space-x-2"
  }, Object(external_preact_["h"])("input", {
    name: "file",
    type: "file",
    class: "grow border border-gray-700"
  }), Object(external_preact_["h"])("button", {
    type: "submit"
  }, "Go")));
  var option2 = Object(external_preact_["h"])("form", {
    class: "px-4 py-2 border border-4 border-gray-600 rounded",
    onSubmit: function onSubmit(ev) {
      var _formData$get;
      ev.preventDefault();
      var formData = new FormData(ev.currentTarget);
      var sample = (_formData$get = formData.get('sample')) === null || _formData$get === void 0 ? void 0 : _formData$get.toString().trim();
      if (sample) {
        _onSubmit(sample);
      }
    }
  }, Object(external_preact_["h"])("div", {
    class: "text-3xl text-center mb-4"
  }, "Option 2"), Object(external_preact_["h"])("div", {
    class: "text-xl text-gray-400 mb-2"
  }, "Pick a sample file"), Object(external_preact_["h"])("div", {
    className: "flex items-stretch space-x-2"
  }, Object(external_preact_["h"])("select", {
    name: "sample",
    class: "grow border border-gray-700"
  }, Object(external_preact_["h"])("option", {
    value: ""
  }), SAMPLES.map(function (sample, idx) {
    return Object(external_preact_["h"])("option", {
      value: sample.path,
      key: idx
    }, sample.name);
  })), Object(external_preact_["h"])("button", {
    type: "submit"
  }, "Go")));
  return Object(external_preact_["h"])("div", {
    class: "min-w-screen min-h-screen bg-gray-800 flex justify-center items-center text-white"
  }, Object(external_preact_["h"])("div", {
    class: "flex flex-col space-y-6"
  }, option1, option2));
};
/* harmony default export */ var loader_FileChooser = (FileChooser_FileChooser);
// EXTERNAL MODULE: ../node_modules/@takingdoms/lib-3do/dist/index.js
var dist = __webpack_require__("/u4b");

// CONCATENATED MODULE: ./lib/logo-colors.ts
// TAK ---------------------------------------------------------------------------------------------

var defaultLogoColorsDefinitions = {
  defaultIdx: 0,
  idxList: Array.from({
    length: 10
  }).map(function (_, idx) {
    return idx;
  }),
  idxCount: 10,
  idxToName: function idxToName(idx) {
    return idx.toString();
  },
  idxToHtmlColor: function idxToHtmlColor(idx) {
    return htmlColors[idx];
  },
  textureKeyUsesLogo: function textureKeyUsesLogo(textureKey) {
    return textureKey.toLowerCase().includes('logo');
  },
  idxToTextureKey: function idxToTextureKey(idx, textureKey) {
    if (idx === 0) return textureKey;
    return "".concat(textureKey, "/color:").concat(idx);
  },
  idxToTextureFilename: function idxToTextureFilename(idx, fileName) {
    if (idx === 0) {
      return fileName;
    }
    return "".concat(fileName, ".").concat(idx);
  }
};
var htmlColors = {
  0: 'lightblue',
  1: 'red',
  2: 'white',
  3: 'green',
  4: 'darkblue',
  5: 'purple',
  6: 'yellow',
  7: 'black',
  8: 'orange',
  9: 'brown'
};
// CONCATENATED MODULE: ./lib/utils.ts
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function compareObjectsShallow(obj1, obj2) {
  var entries1 = Object.entries(obj1);
  var entries2 = Object.keys(obj2);
  return entries1.length === entries2.length && entries1.every(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key1 = _ref2[0],
      value1 = _ref2[1];
    return key1 in obj2 && obj2[key1] === value1;
  });
}
function createUpdatedMap(map, key, value) {
  var newMap = new Map(map);
  newMap.set(key, value);
  return newMap;
}
function validateTextureName(textureName) {
  // return /^[a-zA-Z0-9]+$/.test(textureName);
  return /^(?!^(?:COM|PRN|AUX|NUL|CON|CLOCK\$)(?:\..+)?$)[^\s\\/:\*\?\"<>\|\x00-\x1F\x7F]{1,254}$/.test(textureName);
}
var Utils = {
  compareObjectsShallow: compareObjectsShallow,
  createUpdatedMap: createUpdatedMap,
  validateTextureName: validateTextureName
};
// CONCATENATED MODULE: ./lib/engines/engine.ts
function engine_typeof(obj) { "@babel/helpers - typeof"; return engine_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, engine_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return engine_typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (engine_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (engine_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Engine = /*#__PURE__*/function () {
  function Engine(config) {
    _classCallCheck(this, Engine);
    _defineProperty(this, "config", void 0);
    _defineProperty(this, "resizeObserver", void 0);
    _defineProperty(this, "cleanupEvents", void 0);
    this.config = config;
  }
  _createClass(Engine, [{
    key: "setupEvents",
    value: function setupEvents() {
      var _this = this;
      var _this$config = this.config,
        listener = _this$config.listener,
        canvas = _this$config.canvas,
        mode = _this$config.mode;

      //:: Handle mouse events

      var mouseAction;
      var mouseStartX;
      var mouseStartY;
      var controlStartX;
      var controlStartY;
      var didChange = false;
      var onMouseDown = function onMouseDown(ev) {
        if (mouseAction !== undefined) {
          // stop if another button was already being processed
          return;
        }
        if (ev.button === 0) {
          mouseAction = 'rotate';
        } else if (ev.button === 1) {
          mouseAction = 'pan';
        } else {
          // only button 0 (left-click) and button 1 (middle-click) are used
          return;
        }
        mouseStartX = ev.clientX;
        mouseStartY = ev.clientY;
        controlStartX = mouseAction === 'rotate' ? _this.config.modelControls.rotationX : _this.config.modelControls.translationX;
        controlStartY = mouseAction === 'rotate' ? _this.config.modelControls.rotationY : _this.config.modelControls.translationY;
      };
      var onMouseMove = function onMouseMove(ev) {
        if (mouseStartX === undefined || mouseStartY === undefined || controlStartX === undefined || controlStartY === undefined) {
          return;
        }
        var deltaX = Math.round((ev.clientX - mouseStartX) * 0.75);
        var deltaY = Math.round((ev.clientY - mouseStartY) * 0.75);
        if (deltaX === 0 && deltaY === 0) {
          return;
        }
        if (deltaX !== 0) {
          if (mouseAction === 'rotate') {
            var newRotation = controlStartY + deltaX;
            while (newRotation > 180) {
              newRotation -= 360;
            }
            while (newRotation < -180) {
              newRotation += 360;
            }
            _this.config.modelControls.rotationY = newRotation;
          } else {
            _this.config.modelControls.translationX = controlStartX + deltaX;
          }
        }
        if (deltaY !== 0) {
          if (mouseAction === 'rotate') {
            var _newRotation = controlStartX + deltaY;
            while (_newRotation > 180) {
              _newRotation -= 360;
            }
            while (_newRotation < -180) {
              _newRotation += 360;
            }
            _this.config.modelControls.rotationX = _newRotation;
          } else {
            _this.config.modelControls.translationY = controlStartY + deltaY;
          }
        }
        didChange = true;
        if (mode === 'static') {
          _this.render();
        }
      };
      var onMouseUp = function onMouseUp() {
        mouseAction = mouseStartX = mouseStartY = controlStartX = controlStartY = undefined;
        if (didChange) {
          listener.onModelControlsChanged(_objectSpread({}, _this.config.modelControls));
          didChange = false;
        }
      };
      var onVisibilityChange = function onVisibilityChange() {
        if (document.visibilityState === 'hidden') {
          onMouseUp();
        }
      };
      var onWheel = function onWheel(ev) {
        if (ev.deltaY === 0) return;
        _this.config.modelControls.zoom += ev.deltaY;
        if (_this.config.mode === 'static') {
          _this.render();
        }
        listener.onModelControlsChanged(_objectSpread({}, _this.config.modelControls)); // TODO DEBOUNCE! (or not?)
      };

      canvas.addEventListener('mousedown', onMouseDown);
      canvas.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      document.addEventListener('visibilitychange', onVisibilityChange);
      canvas.addEventListener('wheel', onWheel);
      this.cleanupEvents = function () {
        canvas.removeEventListener('mousedown', onMouseDown);
        canvas.removeEventListener('mousedown', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('visibilitychange', onVisibilityChange);
        canvas.removeEventListener('wheel', onWheel);
      };

      //:: Handle resizing

      var onResized = function onResized() {
        var canvasParent = canvas.parentElement;
        if (!canvasParent) {
          throw new Error("Canvas has no parent!!");
        }
        var newWidth = canvasParent.clientWidth;
        var newHeight = canvasParent.clientHeight;
        var didResize = false;
        if (canvas.width !== newWidth) {
          canvas.width = newWidth;
          didResize = true;
        }
        if (canvas.height !== newHeight) {
          canvas.height = newHeight;
          didResize = true;
        }
        if (didResize) {
          _this.onResized();
          return true;
        }
        return false;
      };
      this.resizeObserver = new ResizeObserver(onResized);
      var canvasParent = canvas.parentElement;
      if (!canvasParent) {
        window.alert('Failed to create canvas');
        throw new Error("Canvas has no parent!! (Can't listen to resizing...)");
      }
      this.resizeObserver.observe(canvasParent);

      // manually call onResized and also call this.onResized if onResized didn't already call it
      if (!onResized()) {
        this.onResized();
      }
    }
  }, {
    key: "setModelControls",
    value: function setModelControls(modelControls) {
      this.config.modelControls = modelControls;
      if (this.config.mode === 'static') {
        this.render();
      }
    }
  }, {
    key: "setTextureMapping",
    value: function setTextureMapping(textureMapping) {
      this.config.textureMapping = textureMapping;
      if (this.config.mode === 'static') {
        this.render();
      }
    }
  }, {
    key: "setObjectStateMap",
    value: function setObjectStateMap(objStateMap) {
      this.config.objStateMap = objStateMap;
      if (this.config.mode === 'static') {
        this.render();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$cleanupEvents;
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      (_this$cleanupEvents = this.cleanupEvents) === null || _this$cleanupEvents === void 0 ? void 0 : _this$cleanupEvents.call(this);
      // TODO
    }
  }, {
    key: "width",
    get: function get() {
      return this.config.canvas.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.config.canvas.height;
    }
  }]);
  return Engine;
}();
// CONCATENATED MODULE: ./lib/engines/ui-debug-engine.ts
function ui_debug_engine_typeof(obj) { "@babel/helpers - typeof"; return ui_debug_engine_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ui_debug_engine_typeof(obj); }
function ui_debug_engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ui_debug_engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ui_debug_engine_toPropertyKey(descriptor.key), descriptor); } }
function ui_debug_engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) ui_debug_engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) ui_debug_engine_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (ui_debug_engine_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ui_debug_engine_defineProperty(obj, key, value) { key = ui_debug_engine_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ui_debug_engine_toPropertyKey(arg) { var key = ui_debug_engine_toPrimitive(arg, "string"); return ui_debug_engine_typeof(key) === "symbol" ? key : String(key); }
function ui_debug_engine_toPrimitive(input, hint) { if (ui_debug_engine_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ui_debug_engine_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var UiDebugEngine = /*#__PURE__*/function (_Engine) {
  _inherits(UiDebugEngine, _Engine);
  var _super = _createSuper(UiDebugEngine);
  function UiDebugEngine(config) {
    var _this;
    ui_debug_engine_classCallCheck(this, UiDebugEngine);
    _this = _super.call(this, config);
    ui_debug_engine_defineProperty(_assertThisInitialized(_this), "ctx", void 0);
    ui_debug_engine_defineProperty(_assertThisInitialized(_this), "renderCount", 0);
    var ctx = config.canvas.getContext('2d');
    if (ctx === null) {
      window.alert('Canvas not supported in this browser.');
      throw new Error("Failed to create context");
    }
    _this.ctx = ctx;
    _this.setupEvents();
    return _this;
  }
  ui_debug_engine_createClass(UiDebugEngine, [{
    key: "onResized",
    value: function onResized() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var modelControls = this.config.modelControls;
      console.log("Rendering next \uD83D\uDDBC\uFE0F (#".concat(this.renderCount, ")"));
      var startTime = performance.now();
      var viewWidth = this.width;
      var viewHeight = this.height;

      // this.ctx.clearRect(0, 0, viewWidth, viewHeight); // redundant with the fillRect below \/

      this.ctx.fillStyle = "rgb(4, 16, 22)";
      this.ctx.fillRect(0, 0, viewWidth, viewHeight);
      this.ctx.strokeStyle = "rgb(0, 0, 200)";
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(0, viewHeight / 2);
      this.ctx.lineTo(viewWidth, viewHeight / 2);
      this.ctx.stroke();
      this.ctx.moveTo(viewWidth / 2, 0);
      this.ctx.lineTo(viewWidth / 2, viewHeight);
      this.ctx.stroke();
      var textLines = ["renderCount: ".concat(this.renderCount), "viewWidth: ".concat(viewWidth), "viewHeight: ".concat(viewHeight), "zoom: ".concat(modelControls.zoom), "rotationX: ".concat(modelControls.rotationX), "rotationY: ".concat(modelControls.rotationY), "rotationZ: ".concat(modelControls.rotationZ), "translationX: ".concat(modelControls.translationX), "translationY: ".concat(modelControls.translationY), "viewMode: ".concat(modelControls.viewMode)];
      var textSize = 18;
      var textPadding = 4;
      var showDebugRects = false;
      this.ctx.textAlign = 'left';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillStyle = 'white';
      this.ctx.font = "".concat(textSize, "px monospace");
      this.ctx.strokeStyle = 'red';
      var largestLineWidth = this.ctx.measureText(
      // \/ only works when using a monospaced font!!!
      textLines.reduce(function (l1, l2) {
        return l1.length > l2.length ? l1 : l2;
      })).width;
      var totalWidth = largestLineWidth;
      var totalHeight = textSize * textLines.length + textLines.length * textPadding * 2;
      for (var i = 0; i < textLines.length; i++) {
        var lineHeight = textSize + textPadding * 2;
        if (showDebugRects) {
          this.ctx.strokeRect(viewWidth / 2 - totalWidth / 2, viewHeight / 2 - totalHeight / 2 + i * lineHeight, totalWidth, textSize + textPadding * 2);
        }
        this.ctx.fillText(textLines[i], viewWidth / 2 - totalWidth / 2, viewHeight / 2 - totalHeight / 2 + (i * lineHeight + lineHeight / 2));
      }
      var endTime = performance.now();
      var delta = endTime - startTime;
      console.log("Finished rendering \uD83D\uDDBC\uFE0F in ".concat(delta, "ms"));
      this.renderCount++;
    }
  }]);
  return UiDebugEngine;
}(Engine);
// CONCATENATED MODULE: ./lib/engines/gl/webgl-helper.ts
// Credits to most of these: https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html

function compileShader(gl, shaderSource, shaderType) {
  var shader = gl.createShader(shaderType);
  if (shader === null) {
    throw "Failed to create shader of type \"".concat(shaderType, "\"");
  }
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    throw "Could not compile shader: ".concat(gl.getShaderInfoLog(shader));
  }
  return shader;
}
function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  if (program === null) {
    throw "Failed to create program";
  }
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    throw "Program failed to link: ".concat(gl.getProgramInfoLog(program));
  }
  return program;
}
;
function resizeCanvasToDisplaySize(canvas) {
  var displayWidth = canvas.clientWidth;
  var displayHeight = canvas.clientHeight;
  var needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;
  if (needResize) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
  return needResize;
}
var WebGlHelper = {
  compileShader: compileShader,
  createProgram: createProgram,
  resizeCanvasToDisplaySize: resizeCanvasToDisplaySize
};
// CONCATENATED MODULE: ../node_modules/gl-matrix/esm/common.js
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
    i = arguments.length;
  while (i--) {
    y += arguments[i] * arguments[i];
  }
  return Math.sqrt(y);
};
// CONCATENATED MODULE: ../node_modules/gl-matrix/esm/mat4.js

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
      a02 = a[2],
      a03 = a[3];
    var a12 = a[6],
      a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
    a01 = a[1],
    a02 = a[2],
    a03 = a[3];
  var a10 = a[4],
    a11 = a[5],
    a12 = a[6],
    a13 = a[7];
  var a20 = a[8],
    a21 = a[9],
    a22 = a[10],
    a23 = a[11];
  var a30 = a[12],
    a31 = a[13],
    a32 = a[14],
    a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function mat4_translate(out, a, v) {
  var x = v[0],
    y = v[1],
    z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function mat4_scale(out, a, v) {
  var x = v[0],
    y = v[1],
    z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function mat4_rotate(out, a, rad, axis) {
  var x = axis[0],
    y = axis[1],
    z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len < EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function mat4_rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication

  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function mat4_rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication

  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function mat4_rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication

  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
    y = axis[1],
    z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  if (len < EPSILON) {
    return null;
  }
  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0],
    by = -a[1],
    bz = -a[2],
    bw = a[3],
    ax = a[4],
    ay = a[5],
    az = a[6],
    aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
    y = q[1],
    z = q[2],
    w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
    nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}
/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
    nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */

var ortho = orthoNO;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
    eyey = eye[1],
    eyez = eye[2],
    upx = up[0],
    upy = up[1],
    upz = up[2];
  var z0 = eyex - target[0],
    z1 = eyey - target[1],
    z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }
  var x0 = upy * z2 - upz * z1,
    x1 = upz * z0 - upx * z2,
    x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function mat4_str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function mat4_equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2],
    a3 = a[3];
  var a4 = a[4],
    a5 = a[5],
    a6 = a[6],
    a7 = a[7];
  var a8 = a[8],
    a9 = a[9],
    a10 = a[10],
    a11 = a[11];
  var a12 = a[12],
    a13 = a[13],
    a14 = a[14],
    a15 = a[15];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2],
    b3 = b[3];
  var b4 = b[4],
    b5 = b[5],
    b6 = b[6],
    b7 = b[7];
  var b8 = b[8],
    b9 = b[9],
    b10 = b[10],
    b11 = b[11];
  var b12 = b[12],
    b13 = b[13],
    b14 = b[14],
    b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;
// CONCATENATED MODULE: ../node_modules/gl-matrix/esm/vec3.js

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function vec3_create() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function vec3_clone(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function vec3_length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function vec3_fromValues(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function vec3_copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function vec3_set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function vec3_add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function vec3_subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function vec3_multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function vec3_scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
    ay = a[1],
    az = a[2];
  var bx = b[0],
    by = b[1],
    bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = RANDOM() * 2.0 * Math.PI;
  var z = RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
    y = a[1],
    z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
    y = a[1],
    z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
    qy = q[1],
    qz = q[2],
    qw = q[3];
  var x = a[0],
    y = a[1],
    z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
    uvy = qz * x - qx * z,
    uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
    uuvy = qz * uvx - qx * uvz,
    uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function vec3_rotateX(out, a, b, rad) {
  var p = [],
    r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function vec3_rotateY(out, a, b, rad) {
  var p = [],
    r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function vec3_rotateZ(out, a, b, rad) {
  var p = [],
    r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
    ay = a[1],
    az = a[2],
    bx = b[0],
    by = b[1],
    bz = b[2],
    mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
    mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
    mag = mag1 * mag2,
    cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function vec3_str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec3_exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function vec3_equals(a, b) {
  var a0 = a[0],
    a1 = a[1],
    a2 = a[2];
  var b0 = b[0],
    b1 = b[1],
    b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var vec3_sub = vec3_subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var vec3_mul = vec3_multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var vec3_dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var vec3_len = vec3_length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = vec3_create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
}();
// CONCATENATED MODULE: ../node_modules/gl-matrix/esm/index.js











// CONCATENATED MODULE: ./lib/engines/gl/gl-texture.ts
function gl_texture_typeof(obj) { "@babel/helpers - typeof"; return gl_texture_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_texture_typeof(obj); }
function gl_texture_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_texture_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_texture_toPropertyKey(descriptor.key), descriptor); } }
function gl_texture_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_texture_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_texture_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_texture_defineProperty(obj, key, value) { key = gl_texture_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function gl_texture_toPropertyKey(arg) { var key = gl_texture_toPrimitive(arg, "string"); return gl_texture_typeof(key) === "symbol" ? key : String(key); }
function gl_texture_toPrimitive(input, hint) { if (gl_texture_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_texture_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GlTexture = /*#__PURE__*/function () {
  // has a valid texture

  function GlTexture(gl) {
    gl_texture_classCallCheck(this, GlTexture);
    gl_texture_defineProperty(this, "gl", void 0);
    gl_texture_defineProperty(this, "handle", void 0);
    gl_texture_defineProperty(this, "deleted", false);
    gl_texture_defineProperty(this, "ok", false);
    this.gl = gl;
    var handle = gl.createTexture();
    if (handle === null) {
      throw new Error("Failed to create texture.");
    }
    this.handle = handle;
  }
  gl_texture_createClass(GlTexture, [{
    key: "use",
    value: function use(sampler, minFilter, maxFilter) {
      if (this.deleted) {
        throw "Trying to use a texture that has already been deleted.";
      }
      if (!this.ok) {
        return false;
      }
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.handle);
      this.gl.uniform1i(sampler, 0);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, minFilter);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, maxFilter);
      return true;
    }
  }, {
    key: "loadDataFromPixels",
    value: function loadDataFromPixels(width, height, data) {
      if (this.deleted) {
        throw "Trying to use a texture that has already been deleted.";
      }
      var level = 0;
      var internalFormat = this.gl.RGBA;
      var border = 0;
      var srcFormat = this.gl.RGBA;
      var srcType = this.gl.UNSIGNED_BYTE;
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.handle);
      this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, width, height, border, srcFormat, srcType, data);
      this.ok = true;
    }
  }, {
    key: "loadDataFromImage",
    value: function loadDataFromImage(image) {
      var _this = this;
      if (this.deleted) {
        throw "Trying to use a texture that has already been deleted.";
      }
      if (!image.complete || image.naturalWidth === 0) {
        console.error("Trying to load data from an image that hasn't yet loaded!");
        var fallbackPixel = new Uint8Array([255, 255, 255, 255]); // opaque white
        this.loadDataFromPixels(1, 1, fallbackPixel);
        image.onload = function () {
          if (image.complete && image.naturalWidth !== 0) {
            _this.loadDataFromImage(image);
          }
        };
        return;
      }
      var level = 0;
      var internalFormat = this.gl.RGBA;
      var srcFormat = this.gl.RGBA;
      var srcType = this.gl.UNSIGNED_BYTE;
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.handle);
      this.gl.texImage2D(this.gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
      if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
        this.gl.generateMipmap(this.gl.TEXTURE_2D);
      }
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
      this.ok = true;
    }
  }, {
    key: "delete",
    value: function _delete() {
      this.gl.deleteTexture(this.handle);
      this.deleted = true;
    }
  }]);
  return GlTexture;
}();
function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
// CONCATENATED MODULE: ./lib/engines/gl/gl-context.ts
function gl_context_typeof(obj) { "@babel/helpers - typeof"; return gl_context_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_context_typeof(obj); }
function gl_context_slicedToArray(arr, i) { return gl_context_arrayWithHoles(arr) || gl_context_iterableToArrayLimit(arr, i) || gl_context_unsupportedIterableToArray(arr, i) || gl_context_nonIterableRest(); }
function gl_context_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function gl_context_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return gl_context_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gl_context_arrayLikeToArray(o, minLen); }
function gl_context_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function gl_context_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function gl_context_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function gl_context_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_context_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_context_toPropertyKey(descriptor.key), descriptor); } }
function gl_context_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_context_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_context_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_context_defineProperty(obj, key, value) { key = gl_context_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function gl_context_toPropertyKey(arg) { var key = gl_context_toPrimitive(arg, "string"); return gl_context_typeof(key) === "symbol" ? key : String(key); }
function gl_context_toPrimitive(input, hint) { if (gl_context_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_context_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var gl_context_GlContext = /*#__PURE__*/function () {
  // undefined = not initialized; null = no texture

  // WHITE

  function GlContext(gl, programInfo, logoDefs) {
    gl_context_classCallCheck(this, GlContext);
    gl_context_defineProperty(this, "gl", void 0);
    gl_context_defineProperty(this, "programInfo", void 0);
    gl_context_defineProperty(this, "logoDefs", void 0);
    gl_context_defineProperty(this, "currentLogoIdx", void 0);
    gl_context_defineProperty(this, "textureDatabase", {});
    gl_context_defineProperty(this, "lastTexture", void 0);
    gl_context_defineProperty(this, "baseEntityColor", new Float32Array([1.0, 1.0, 1.0, 1.0]));
    gl_context_defineProperty(this, "textureMinFilter", void 0);
    gl_context_defineProperty(this, "textureMagFilter", void 0);
    this.gl = gl;
    this.programInfo = programInfo;
    this.logoDefs = logoDefs;
    this.currentLogoIdx = logoDefs.defaultIdx;
    this.textureMinFilter = gl.NEAREST;
    this.textureMagFilter = gl.NEAREST;
  }

  /// Warning: Use this only when REALLY needed
  gl_context_createClass(GlContext, [{
    key: "getGl",
    value: function getGl() {
      return this.gl;
    }
  }, {
    key: "getProgramInfo",
    value: function getProgramInfo() {
      return this.programInfo;
    }
  }, {
    key: "getBaseEntityColor",
    value: function getBaseEntityColor() {
      return this.baseEntityColor;
    }
  }, {
    key: "setBaseEntityColor",
    value: function setBaseEntityColor(color) {
      this.baseEntityColor = color;
    }
  }, {
    key: "setUniformMatrix4",
    value: function setUniformMatrix4(uniform, matrix) {
      var location = this.programInfo.uniformLocations[uniform];
      if (location) {
        this.gl.uniformMatrix4fv(location, false, matrix);
      }
    }
  }, {
    key: "setUniformFloat4",
    value: function setUniformFloat4(uniform, data) {
      if (data.length !== 4) {
        throw new Error("data.length is not 4: ".concat(data.length));
      }
      var location = this.programInfo.uniformLocations[uniform];
      if (location) {
        this.gl.uniform4fv(location, data);
      }
    }
  }, {
    key: "setUniformBool",
    value: function setUniformBool(uniform, bool) {
      var location = this.programInfo.uniformLocations[uniform];
      if (location) {
        this.gl.uniform1i(location, bool ? 1 : 0);
      }
    }
  }, {
    key: "setTextureMinFilter",
    value: function setTextureMinFilter(filter) {
      this.textureMinFilter = filter;
    }
  }, {
    key: "setTextureMagFilter",
    value: function setTextureMagFilter(filter) {
      this.textureMagFilter = filter;
    }
  }, {
    key: "drawElements",
    value: function drawElements(length) {
      this.gl.drawElements(this.gl.TRIANGLES, length, this.gl.UNSIGNED_SHORT, 0);
    }
  }, {
    key: "useTexture",
    value: function useTexture(textureKey) {
      var texture;
      if (textureKey === null) {
        texture = null;
      } else {
        var actualTextureKey = this.logoDefs.textureKeyUsesLogo(textureKey) ? this.logoDefs.idxToTextureKey(this.currentLogoIdx, textureKey) : textureKey;
        var fromDb = this.textureDatabase[actualTextureKey];
        if (fromDb === undefined) {
          console.error("Missing texture for: ".concat(actualTextureKey));
          texture = null;
        } else {
          texture = fromDb;
        }
      }
      if (this.lastTexture === texture) {
        // already using this texture
        return texture !== null;
      }
      this.lastTexture = texture;
      if (texture === null) {
        // TODO unbind texture? or use fallback (all white) texture maybe?
        return false;
      }
      texture.use(this.programInfo.uniformLocations['sampler'], this.textureMinFilter, this.textureMagFilter);
      return true;
    }
  }, {
    key: "changeTextureMapping",
    value: function changeTextureMapping(textureMapping) {
      for (var _i = 0, _Object$entries = Object.entries(textureMapping); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = gl_context_slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        var existing = this.textureDatabase[key];
        var didChange = existing !== value;
        if (!didChange) {
          continue;
        }
        if (existing !== undefined && existing !== null) {
          existing.delete();
        }
        this.textureDatabase[key] = value === null ? null : this.setupTexture(value);
      }
    }
  }, {
    key: "setCurrentLogoIdx",
    value: function setCurrentLogoIdx(idx) {
      this.currentLogoIdx = idx;
    }
  }, {
    key: "setupTexture",
    value: function setupTexture(loadableTexture) {
      var texture = new GlTexture(this.gl);
      if (loadableTexture.type === 'html') {
        texture.loadDataFromImage(loadableTexture.image);
      } else {
        var width = loadableTexture.width,
          height = loadableTexture.height,
          data = loadableTexture.data;
        texture.loadDataFromPixels(width, height, data);
      }
      return texture;
    }
  }]);
  return GlContext;
}();
// CONCATENATED MODULE: ./lib/engines/gl/gl-custom-context.ts
function gl_custom_context_typeof(obj) { "@babel/helpers - typeof"; return gl_custom_context_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_custom_context_typeof(obj); }
function gl_custom_context_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_custom_context_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_custom_context_toPropertyKey(descriptor.key), descriptor); } }
function gl_custom_context_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_custom_context_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_custom_context_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = gl_custom_context_getPrototypeOf(object); if (object === null) break; } return object; }
function gl_custom_context_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) gl_custom_context_setPrototypeOf(subClass, superClass); }
function gl_custom_context_setPrototypeOf(o, p) { gl_custom_context_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gl_custom_context_setPrototypeOf(o, p); }
function gl_custom_context_createSuper(Derived) { var hasNativeReflectConstruct = gl_custom_context_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = gl_custom_context_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = gl_custom_context_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return gl_custom_context_possibleConstructorReturn(this, result); }; }
function gl_custom_context_possibleConstructorReturn(self, call) { if (call && (gl_custom_context_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return gl_custom_context_assertThisInitialized(self); }
function gl_custom_context_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function gl_custom_context_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function gl_custom_context_getPrototypeOf(o) { gl_custom_context_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gl_custom_context_getPrototypeOf(o); }
function gl_custom_context_defineProperty(obj, key, value) { key = gl_custom_context_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function gl_custom_context_toPropertyKey(arg) { var key = gl_custom_context_toPrimitive(arg, "string"); return gl_custom_context_typeof(key) === "symbol" ? key : String(key); }
function gl_custom_context_toPrimitive(input, hint) { if (gl_custom_context_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_custom_context_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var GlCustomContext = /*#__PURE__*/function (_GlContext) {
  gl_custom_context_inherits(GlCustomContext, _GlContext);
  var _super = gl_custom_context_createSuper(GlCustomContext);
  function GlCustomContext(gl, programInfo, logoDefs, viewMode) {
    var _this;
    gl_custom_context_classCallCheck(this, GlCustomContext);
    _this = _super.call(this, gl, programInfo, logoDefs);
    gl_custom_context_defineProperty(gl_custom_context_assertThisInitialized(_this), "viewMode", void 0);
    _this.viewMode = viewMode;
    return _this;
  }
  gl_custom_context_createClass(GlCustomContext, [{
    key: "drawElements",
    value: function drawElements(length) {
      if (this.viewMode === 'wireframe') {
        this.gl.drawElements(this.gl.LINE_LOOP, length, this.gl.UNSIGNED_SHORT, 0);
      } else {
        this.gl.drawElements(this.gl.TRIANGLES, length, this.gl.UNSIGNED_SHORT, 0);
      }
    }
  }, {
    key: "useTexture",
    value: function useTexture(textureKey) {
      if (this.viewMode === 'regular') return _get(gl_custom_context_getPrototypeOf(GlCustomContext.prototype), "useTexture", this).call(this, textureKey);
      return true;
    }
  }]);
  return GlCustomContext;
}(gl_context_GlContext);
// CONCATENATED MODULE: ./lib/engines/gl/gl-entity.ts
function gl_entity_typeof(obj) { "@babel/helpers - typeof"; return gl_entity_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_entity_typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = gl_entity_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function gl_entity_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return gl_entity_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gl_entity_arrayLikeToArray(o, minLen); }
function gl_entity_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function gl_entity_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_entity_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_entity_toPropertyKey(descriptor.key), descriptor); } }
function gl_entity_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_entity_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_entity_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_entity_defineProperty(obj, key, value) { key = gl_entity_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function gl_entity_toPropertyKey(arg) { var key = gl_entity_toPrimitive(arg, "string"); return gl_entity_typeof(key) === "symbol" ? key : String(key); }
function gl_entity_toPrimitive(input, hint) { if (gl_entity_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_entity_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var HIGHLIGHT = new Float32Array([1.0, 1.0, 0.0, 1.0]); // yellow

var gl_entity_GlEntity = /*#__PURE__*/function () {
  // this is what receives transformation operations
  // this inherits transformations from the parent tree

  function GlEntity(model, name) {
    gl_entity_classCallCheck(this, GlEntity);
    gl_entity_defineProperty(this, "model", void 0);
    gl_entity_defineProperty(this, "name", void 0);
    gl_entity_defineProperty(this, "children", void 0);
    gl_entity_defineProperty(this, "parent", void 0);
    gl_entity_defineProperty(this, "modelViewMatrix", void 0);
    gl_entity_defineProperty(this, "relativeModelViewMatrix", void 0);
    gl_entity_defineProperty(this, "stateOptions", void 0);
    this.model = model;
    this.name = name !== null && name !== void 0 ? name : null;
    this.children = [];
    this.parent = null;
    this.modelViewMatrix = mat4_namespaceObject.create();
    this.relativeModelViewMatrix = mat4_namespaceObject.create();
    this.stateOptions = {
      visibile: true,
      highlighted: false
    };
  }
  gl_entity_createClass(GlEntity, [{
    key: "addChild",
    value: function addChild(child) {
      if (child.parent !== null) {
        throw new Error("Can't add a child that already has a parent.");
      }
      this.children.push(child);
      child.parent = this;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      // TODO go back to passing the parentViewMatrix during the renderChild function!
      this.recalculateMatrices(mat4_namespaceObject.create());
      this.renderChild(ctx);
    }
  }, {
    key: "recalculateMatrices",
    value: function recalculateMatrices(parentViewMatrix) {
      this.relativeModelViewMatrix = mat4_namespaceObject.mul(mat4_namespaceObject.create(), parentViewMatrix, this.modelViewMatrix);
      var _iterator = _createForOfIteratorHelper(this.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          child.recalculateMatrices(this.relativeModelViewMatrix);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "renderChild",
    value: function renderChild(ctx) {
      var _this$color;
      var nextColor = (_this$color = this.color) !== null && _this$color !== void 0 ? _this$color : ctx.getBaseEntityColor();
      if (this.model !== null && this.stateOptions.visibile) {
        ctx.setUniformFloat4('entityColor', nextColor);
        ctx.setUniformMatrix4('modelViewMatrix', this.relativeModelViewMatrix);
        if (Array.isArray(this.model)) {
          var _iterator2 = _createForOfIteratorHelper(this.model),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var subModel = _step2.value;
              this.renderModel(ctx, subModel);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else {
          this.renderModel(ctx, this.model);
        }
      }
      var _iterator3 = _createForOfIteratorHelper(this.children),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var child = _step3.value;
          child.renderChild(ctx);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "findChild",
    value: function findChild(name, recursive) {
      var _iterator4 = _createForOfIteratorHelper(this.children),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var child = _step4.value;
          if (child.name === name) {
            return child;
          }
          if (recursive) {
            var result = child.findChild(name, recursive);
            if (result !== undefined) {
              return result;
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return undefined;
    }
  }, {
    key: "renderModel",
    value: function renderModel(ctx, model) {
      if (model.usesNormals()) {
        var normalMatrix = mat4_namespaceObject.create();
        mat4_namespaceObject.invert(normalMatrix, this.relativeModelViewMatrix);
        mat4_namespaceObject.transpose(normalMatrix, normalMatrix);
        ctx.setUniformMatrix4('normalMatrix', normalMatrix);
      }
      model.draw(ctx);
    }
  }, {
    key: "translate",
    value: function translate(x, y, z) {
      mat4_namespaceObject.translate(this.modelViewMatrix, this.modelViewMatrix, [x, y, z]);
    }
  }, {
    key: "scale",
    value: function scale(x, y, z) {
      mat4_namespaceObject.scale(this.modelViewMatrix, this.modelViewMatrix, [x, y, z]);
    }
  }, {
    key: "rotate",
    value: function rotate(rad, x, y, z) {
      var axis = [x ? 1 : 0, y ? 1 : 0, z ? 1 : 0];
      mat4_namespaceObject.rotate(this.modelViewMatrix, this.modelViewMatrix, rad, axis);
    }
  }, {
    key: "rotateX",
    value: function rotateX(rad) {
      mat4_namespaceObject.rotateX(this.modelViewMatrix, this.modelViewMatrix, rad);
    }
  }, {
    key: "rotateY",
    value: function rotateY(rad) {
      mat4_namespaceObject.rotateY(this.modelViewMatrix, this.modelViewMatrix, rad);
    }
  }, {
    key: "rotateZ",
    value: function rotateZ(rad) {
      mat4_namespaceObject.rotateZ(this.modelViewMatrix, this.modelViewMatrix, rad);
    }
  }, {
    key: "resetTransformations",
    value: function resetTransformations() {
      this.modelViewMatrix = mat4_namespaceObject.create();
    }
  }, {
    key: "color",
    get: function get() {
      if (this.stateOptions.highlighted) {
        return HIGHLIGHT;
      }
      return undefined;
    }
  }, {
    key: "getStateOptions",
    value: function getStateOptions() {
      return this.stateOptions;
    }
  }, {
    key: "setStateOptions",
    value: function setStateOptions(stateOptions) {
      this.stateOptions = stateOptions;
    }
  }]);
  return GlEntity;
}();
// CONCATENATED MODULE: ./lib/engines/gl/buffer/gl-buffer.ts
function gl_buffer_typeof(obj) { "@babel/helpers - typeof"; return gl_buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_buffer_typeof(obj); }
function gl_buffer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_buffer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_buffer_toPropertyKey(descriptor.key), descriptor); } }
function gl_buffer_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_buffer_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_buffer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_buffer_defineProperty(obj, key, value) { key = gl_buffer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function gl_buffer_toPropertyKey(arg) { var key = gl_buffer_toPrimitive(arg, "string"); return gl_buffer_typeof(key) === "symbol" ? key : String(key); }
function gl_buffer_toPrimitive(input, hint) { if (gl_buffer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_buffer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GlBuffer = /*#__PURE__*/function () {
  function GlBuffer(gl) {
    gl_buffer_classCallCheck(this, GlBuffer);
    gl_buffer_defineProperty(this, "gl", void 0);
    gl_buffer_defineProperty(this, "_handle", void 0);
    gl_buffer_defineProperty(this, "deleted", false);
    this.gl = gl;
    var handle = gl.createBuffer();
    if (handle === null) {
      throw "Failed to create buffer!";
    }
    this._handle = handle;
  }
  gl_buffer_createClass(GlBuffer, [{
    key: "handle",
    get: function get() {
      return this._handle;
    }
  }, {
    key: "bufferData",
    value: function bufferData(data) {
      if (this.deleted) {
        throw "Trying to use a buffer that has already been deleted.";
      }
      this.doBufferData(data);
    }
  }, {
    key: "use",
    value: function use() {
      if (this.deleted) {
        throw "Trying to use a buffer that has already been deleted.";
      }
      this.doUse();
    }
  }, {
    key: "delete",
    value: function _delete() {
      if (this.deleted) {
        throw "Trying to delete a buffer that has already been deleted.";
      }
      this.gl.deleteBuffer(this._handle);
      this.deleted = true;
    }
  }]);
  return GlBuffer;
}();
// CONCATENATED MODULE: ./lib/engines/gl/buffer/gl-index-buffer.ts
function gl_index_buffer_typeof(obj) { "@babel/helpers - typeof"; return gl_index_buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_index_buffer_typeof(obj); }
function gl_index_buffer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_index_buffer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_index_buffer_toPropertyKey(descriptor.key), descriptor); } }
function gl_index_buffer_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_index_buffer_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_index_buffer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_index_buffer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) gl_index_buffer_setPrototypeOf(subClass, superClass); }
function gl_index_buffer_setPrototypeOf(o, p) { gl_index_buffer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gl_index_buffer_setPrototypeOf(o, p); }
function gl_index_buffer_createSuper(Derived) { var hasNativeReflectConstruct = gl_index_buffer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = gl_index_buffer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = gl_index_buffer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return gl_index_buffer_possibleConstructorReturn(this, result); }; }
function gl_index_buffer_possibleConstructorReturn(self, call) { if (call && (gl_index_buffer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return gl_index_buffer_assertThisInitialized(self); }
function gl_index_buffer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function gl_index_buffer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function gl_index_buffer_getPrototypeOf(o) { gl_index_buffer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gl_index_buffer_getPrototypeOf(o); }
function gl_index_buffer_defineProperty(obj, key, value) { key = gl_index_buffer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function gl_index_buffer_toPropertyKey(arg) { var key = gl_index_buffer_toPrimitive(arg, "string"); return gl_index_buffer_typeof(key) === "symbol" ? key : String(key); }
function gl_index_buffer_toPrimitive(input, hint) { if (gl_index_buffer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_index_buffer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var GlIndexBuffer = /*#__PURE__*/function (_GlBuffer) {
  gl_index_buffer_inherits(GlIndexBuffer, _GlBuffer);
  var _super = gl_index_buffer_createSuper(GlIndexBuffer);
  function GlIndexBuffer() {
    var _this;
    gl_index_buffer_classCallCheck(this, GlIndexBuffer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    gl_index_buffer_defineProperty(gl_index_buffer_assertThisInitialized(_this), "length", 0);
    return _this;
  }
  gl_index_buffer_createClass(GlIndexBuffer, [{
    key: "getLength",
    value: function getLength() {
      return this.length;
    }
  }, {
    key: "doBufferData",
    value: function doBufferData(data) {
      this.length = data.byteLength / 2; // because it's an array of uint16 (this is pretty bs TODO do smth better)
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.handle);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
    }
  }, {
    key: "doUse",
    value: function doUse() {
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.handle);
    }
  }], [{
    key: "createBufferSourceFromIndices",
    value: function createBufferSourceFromIndices(indices) {
      return new Uint16Array(indices);
    }
  }]);
  return GlIndexBuffer;
}(GlBuffer);
// CONCATENATED MODULE: ./lib/engines/gl/buffer/gl-array-buffer.ts
function gl_array_buffer_typeof(obj) { "@babel/helpers - typeof"; return gl_array_buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_array_buffer_typeof(obj); }
function gl_array_buffer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_array_buffer_toPropertyKey(descriptor.key), descriptor); } }
function gl_array_buffer_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_array_buffer_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_array_buffer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_array_buffer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_array_buffer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) gl_array_buffer_setPrototypeOf(subClass, superClass); }
function gl_array_buffer_setPrototypeOf(o, p) { gl_array_buffer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gl_array_buffer_setPrototypeOf(o, p); }
function gl_array_buffer_createSuper(Derived) { var hasNativeReflectConstruct = gl_array_buffer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = gl_array_buffer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = gl_array_buffer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return gl_array_buffer_possibleConstructorReturn(this, result); }; }
function gl_array_buffer_possibleConstructorReturn(self, call) { if (call && (gl_array_buffer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return gl_array_buffer_assertThisInitialized(self); }
function gl_array_buffer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function gl_array_buffer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function gl_array_buffer_getPrototypeOf(o) { gl_array_buffer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gl_array_buffer_getPrototypeOf(o); }
function gl_array_buffer_defineProperty(obj, key, value) { key = gl_array_buffer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function gl_array_buffer_toPropertyKey(arg) { var key = gl_array_buffer_toPrimitive(arg, "string"); return gl_array_buffer_typeof(key) === "symbol" ? key : String(key); }
function gl_array_buffer_toPrimitive(input, hint) { if (gl_array_buffer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_array_buffer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var GlArrayBuffer = /*#__PURE__*/function (_GlBuffer) {
  gl_array_buffer_inherits(GlArrayBuffer, _GlBuffer);
  var _super = gl_array_buffer_createSuper(GlArrayBuffer);
  function GlArrayBuffer(gl, attribLocation) {
    var _this;
    gl_array_buffer_classCallCheck(this, GlArrayBuffer);
    _this = _super.call(this, gl);
    gl_array_buffer_defineProperty(gl_array_buffer_assertThisInitialized(_this), "attribLocation", void 0);
    _this.attribLocation = attribLocation;
    return _this;
  }
  return gl_array_buffer_createClass(GlArrayBuffer);
}(GlBuffer);
// CONCATENATED MODULE: ./lib/engines/gl/buffer/gl-normal-buffer.ts
function gl_normal_buffer_typeof(obj) { "@babel/helpers - typeof"; return gl_normal_buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_normal_buffer_typeof(obj); }
function gl_normal_buffer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_normal_buffer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_normal_buffer_toPropertyKey(descriptor.key), descriptor); } }
function gl_normal_buffer_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_normal_buffer_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_normal_buffer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_normal_buffer_toPropertyKey(arg) { var key = gl_normal_buffer_toPrimitive(arg, "string"); return gl_normal_buffer_typeof(key) === "symbol" ? key : String(key); }
function gl_normal_buffer_toPrimitive(input, hint) { if (gl_normal_buffer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_normal_buffer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function gl_normal_buffer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) gl_normal_buffer_setPrototypeOf(subClass, superClass); }
function gl_normal_buffer_setPrototypeOf(o, p) { gl_normal_buffer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gl_normal_buffer_setPrototypeOf(o, p); }
function gl_normal_buffer_createSuper(Derived) { var hasNativeReflectConstruct = gl_normal_buffer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = gl_normal_buffer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = gl_normal_buffer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return gl_normal_buffer_possibleConstructorReturn(this, result); }; }
function gl_normal_buffer_possibleConstructorReturn(self, call) { if (call && (gl_normal_buffer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return gl_normal_buffer_assertThisInitialized(self); }
function gl_normal_buffer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function gl_normal_buffer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function gl_normal_buffer_getPrototypeOf(o) { gl_normal_buffer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gl_normal_buffer_getPrototypeOf(o); }

var GlNormalBuffer = /*#__PURE__*/function (_GlArrayBuffer) {
  gl_normal_buffer_inherits(GlNormalBuffer, _GlArrayBuffer);
  var _super = gl_normal_buffer_createSuper(GlNormalBuffer);
  function GlNormalBuffer() {
    gl_normal_buffer_classCallCheck(this, GlNormalBuffer);
    return _super.apply(this, arguments);
  }
  gl_normal_buffer_createClass(GlNormalBuffer, [{
    key: "doBufferData",
    value: function doBufferData(data) {
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
    }
  }, {
    key: "doUse",
    value: function doUse() {
      var numComponents = 3; // X, Y, Z
      var type = this.gl.FLOAT;
      var normalize = false;
      var stride = 0;
      var offset = 0;
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
      this.gl.vertexAttribPointer(this.attribLocation, numComponents, type, normalize, stride, offset);
      this.gl.enableVertexAttribArray(this.attribLocation);
    }
  }], [{
    key: "createBufferSourceFromPositions",
    value: function createBufferSourceFromPositions(positions) {
      // console.log(positions);
      return new Float32Array(positions);
    }
  }]);
  return GlNormalBuffer;
}(GlArrayBuffer);
// CONCATENATED MODULE: ./lib/engines/gl/buffer/gl-position-buffer.ts
function gl_position_buffer_typeof(obj) { "@babel/helpers - typeof"; return gl_position_buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_position_buffer_typeof(obj); }
function gl_position_buffer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_position_buffer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_position_buffer_toPropertyKey(descriptor.key), descriptor); } }
function gl_position_buffer_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_position_buffer_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_position_buffer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_position_buffer_toPropertyKey(arg) { var key = gl_position_buffer_toPrimitive(arg, "string"); return gl_position_buffer_typeof(key) === "symbol" ? key : String(key); }
function gl_position_buffer_toPrimitive(input, hint) { if (gl_position_buffer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_position_buffer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function gl_position_buffer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) gl_position_buffer_setPrototypeOf(subClass, superClass); }
function gl_position_buffer_setPrototypeOf(o, p) { gl_position_buffer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gl_position_buffer_setPrototypeOf(o, p); }
function gl_position_buffer_createSuper(Derived) { var hasNativeReflectConstruct = gl_position_buffer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = gl_position_buffer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = gl_position_buffer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return gl_position_buffer_possibleConstructorReturn(this, result); }; }
function gl_position_buffer_possibleConstructorReturn(self, call) { if (call && (gl_position_buffer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return gl_position_buffer_assertThisInitialized(self); }
function gl_position_buffer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function gl_position_buffer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function gl_position_buffer_getPrototypeOf(o) { gl_position_buffer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gl_position_buffer_getPrototypeOf(o); }

var GlPositionBuffer = /*#__PURE__*/function (_GlArrayBuffer) {
  gl_position_buffer_inherits(GlPositionBuffer, _GlArrayBuffer);
  var _super = gl_position_buffer_createSuper(GlPositionBuffer);
  function GlPositionBuffer() {
    gl_position_buffer_classCallCheck(this, GlPositionBuffer);
    return _super.apply(this, arguments);
  }
  gl_position_buffer_createClass(GlPositionBuffer, [{
    key: "doBufferData",
    value: function doBufferData(data) {
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
    }
  }, {
    key: "doUse",
    value: function doUse() {
      var numComponents = 3; // X, Y, Z
      var type = this.gl.FLOAT;
      var normalize = false;
      var stride = 0;
      var offset = 0;
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
      this.gl.vertexAttribPointer(this.attribLocation, numComponents, type, normalize, stride, offset);
      this.gl.enableVertexAttribArray(this.attribLocation);
    }
  }], [{
    key: "createBufferSourceFromPositions",
    value: function createBufferSourceFromPositions(positions) {
      return new Float32Array(positions);
    }
  }]);
  return GlPositionBuffer;
}(GlArrayBuffer);
// CONCATENATED MODULE: ./lib/engines/gl/buffer/gl-texture-coord-buffer.ts
function gl_texture_coord_buffer_typeof(obj) { "@babel/helpers - typeof"; return gl_texture_coord_buffer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_texture_coord_buffer_typeof(obj); }
function gl_texture_coord_buffer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_texture_coord_buffer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_texture_coord_buffer_toPropertyKey(descriptor.key), descriptor); } }
function gl_texture_coord_buffer_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_texture_coord_buffer_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_texture_coord_buffer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_texture_coord_buffer_toPropertyKey(arg) { var key = gl_texture_coord_buffer_toPrimitive(arg, "string"); return gl_texture_coord_buffer_typeof(key) === "symbol" ? key : String(key); }
function gl_texture_coord_buffer_toPrimitive(input, hint) { if (gl_texture_coord_buffer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_texture_coord_buffer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function gl_texture_coord_buffer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) gl_texture_coord_buffer_setPrototypeOf(subClass, superClass); }
function gl_texture_coord_buffer_setPrototypeOf(o, p) { gl_texture_coord_buffer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return gl_texture_coord_buffer_setPrototypeOf(o, p); }
function gl_texture_coord_buffer_createSuper(Derived) { var hasNativeReflectConstruct = gl_texture_coord_buffer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = gl_texture_coord_buffer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = gl_texture_coord_buffer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return gl_texture_coord_buffer_possibleConstructorReturn(this, result); }; }
function gl_texture_coord_buffer_possibleConstructorReturn(self, call) { if (call && (gl_texture_coord_buffer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return gl_texture_coord_buffer_assertThisInitialized(self); }
function gl_texture_coord_buffer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function gl_texture_coord_buffer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function gl_texture_coord_buffer_getPrototypeOf(o) { gl_texture_coord_buffer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return gl_texture_coord_buffer_getPrototypeOf(o); }

var GlTextureCoordBuffer = /*#__PURE__*/function (_GlArrayBuffer) {
  gl_texture_coord_buffer_inherits(GlTextureCoordBuffer, _GlArrayBuffer);
  var _super = gl_texture_coord_buffer_createSuper(GlTextureCoordBuffer);
  function GlTextureCoordBuffer() {
    gl_texture_coord_buffer_classCallCheck(this, GlTextureCoordBuffer);
    return _super.apply(this, arguments);
  }
  gl_texture_coord_buffer_createClass(GlTextureCoordBuffer, [{
    key: "doBufferData",
    value: function doBufferData(data) {
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);
    }
  }, {
    key: "doUse",
    value: function doUse() {
      var num = 2; // U, V
      var type = this.gl.FLOAT;
      var normalize = false;
      var stride = 0;
      var offset = 0;
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.handle);
      this.gl.vertexAttribPointer(this.attribLocation, num, type, normalize, stride, offset);
      this.gl.enableVertexAttribArray(this.attribLocation);
    }
  }], [{
    key: "createBufferSourceFromCoords",
    value: function createBufferSourceFromCoords(coords) {
      return new Float32Array(coords);
    }
  }]);
  return GlTextureCoordBuffer;
}(GlArrayBuffer);
// CONCATENATED MODULE: ./lib/engines/gl/gl-model.ts
function gl_model_typeof(obj) { "@babel/helpers - typeof"; return gl_model_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, gl_model_typeof(obj); }
function gl_model_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function gl_model_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, gl_model_toPropertyKey(descriptor.key), descriptor); } }
function gl_model_createClass(Constructor, protoProps, staticProps) { if (protoProps) gl_model_defineProperties(Constructor.prototype, protoProps); if (staticProps) gl_model_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function gl_model_defineProperty(obj, key, value) { key = gl_model_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function gl_model_toPropertyKey(arg) { var key = gl_model_toPrimitive(arg, "string"); return gl_model_typeof(key) === "symbol" ? key : String(key); }
function gl_model_toPrimitive(input, hint) { if (gl_model_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (gl_model_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GlModel = /*#__PURE__*/function () {
  function GlModel(positionBuffer, indexBuffer, normalBuffer, textureCoordsBuffer) {
    gl_model_classCallCheck(this, GlModel);
    gl_model_defineProperty(this, "positionBuffer", void 0);
    gl_model_defineProperty(this, "indexBuffer", void 0);
    gl_model_defineProperty(this, "normalBuffer", void 0);
    gl_model_defineProperty(this, "textureCoordsBuffer", void 0);
    gl_model_defineProperty(this, "textureKey", null);
    this.positionBuffer = positionBuffer;
    this.indexBuffer = indexBuffer;
    this.normalBuffer = normalBuffer;
    this.textureCoordsBuffer = textureCoordsBuffer;
  }
  gl_model_createClass(GlModel, [{
    key: "setTextureKey",
    value: function setTextureKey(textureKey) {
      this.textureKey = textureKey;
    }
  }, {
    key: "getTextureKey",
    value: function getTextureKey() {
      return this.textureKey;
    }
  }, {
    key: "usesNormals",
    value: function usesNormals() {
      return this.normalBuffer !== undefined;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var textureOk = ctx.useTexture(this.textureKey);
      if (!textureOk) {
        return;
      }
      this.positionBuffer.use();
      this.indexBuffer.use();
      if (this.normalBuffer !== undefined) {
        this.normalBuffer.use();
      }
      if (this.textureCoordsBuffer !== undefined) {
        this.textureCoordsBuffer.use();
      }
      ctx.drawElements(this.indexBuffer.getLength());
    }
  }]);
  return GlModel;
}();
// CONCATENATED MODULE: ./lib/engines/gl/gl-model-helpers.ts
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || gl_model_helpers_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function gl_model_helpers_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return gl_model_helpers_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gl_model_helpers_arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return gl_model_helpers_arrayLikeToArray(arr); }
function gl_model_helpers_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }







function createModelFromIndexedVertices(ctx, data, computeNormals) {
  var positionData = data.vertices.flatMap(function (vertex) {
    return vertex;
  });
  var position = new GlPositionBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexPosition);
  position.bufferData(GlPositionBuffer.createBufferSourceFromPositions(positionData));
  var indicesData = data.indices.map(function (index) {
    if (index < 0 || index > data.vertices.length - 1) throw "Index out of bounds: ".concat(index);
    return index;
  });
  var indices = new GlIndexBuffer(ctx.getGl());
  indices.bufferData(GlIndexBuffer.createBufferSourceFromIndices(indicesData));
  var normals;
  if (computeNormals) {
    var normalList = [];
    for (var i = 0; i < data.vertices.length; i++) {
      normalList[i] = vec3_namespaceObject.create();
    }
    for (var _i = 0; _i < indicesData.length; _i += 3) {
      var indexA = indicesData[_i + 0];
      var indexB = indicesData[_i + 1];
      var indexC = indicesData[_i + 2];
      var posA = vec3_namespaceObject.fromValues.apply(vec3_namespaceObject, _toConsumableArray(data.vertices[indexA]));
      var posB = vec3_namespaceObject.fromValues.apply(vec3_namespaceObject, _toConsumableArray(data.vertices[indexB]));
      var posC = vec3_namespaceObject.fromValues.apply(vec3_namespaceObject, _toConsumableArray(data.vertices[indexC]));
      var edgeAB = vec3_namespaceObject.sub(vec3_namespaceObject.create(), posB, posA);
      var edgeAC = vec3_namespaceObject.sub(vec3_namespaceObject.create(), posC, posA);
      var areaWeightedNormal = vec3_namespaceObject.cross(vec3_namespaceObject.create(), edgeAB, edgeAC);
      vec3_namespaceObject.add(normalList[indexA], normalList[indexA], areaWeightedNormal);
      vec3_namespaceObject.add(normalList[indexB], normalList[indexB], areaWeightedNormal);
      vec3_namespaceObject.add(normalList[indexC], normalList[indexC], areaWeightedNormal);
    }
    for (var _i2 = 0; _i2 < data.vertices.length; _i2++) {
      vec3_namespaceObject.normalize(normalList[_i2], normalList[_i2]);
    }
    normals = new GlNormalBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.vertexNormal);
    normals.bufferData(GlNormalBuffer.createBufferSourceFromPositions(normalList.flatMap(function (normals) {
      return [normals[0], normals[1], normals[2]];
    })));
  }
  var texCoords;
  if (data.texCoords) {
    texCoords = new GlTextureCoordBuffer(ctx.getGl(), ctx.getProgramInfo().attribLocations.textureCoord);
    texCoords.bufferData(GlTextureCoordBuffer.createBufferSourceFromCoords(data.texCoords));
  }
  return new GlModel(position, indices, normals, texCoords);
}

/**
 * Similar to createModelFromIndexedColoredVertices but you can simply pass only the vertex+color
 * information and the function will automatically remove redundant (identical vertex) items
 * and automatically generate indices. DOESN'T YET SUPPORT TEXCOORDS
 */
function createModelFromSmartVertices(ctx, data, computeNormals) {
  var uniqueData = []; // data but without redundant (identical) items
  var uniqueDataIndices = []; // indexes data's items into the uniqueData items

  outer: for (var i = 0; i < data.length; i++) {
    var item = data[i];
    for (var j = 0; j < uniqueData.length; j++) {
      var normItem = uniqueData[j];
      if (isVertexEqual(item, normItem)) {
        uniqueDataIndices.push(j);
        continue outer;
      }
    }
    uniqueData.push(item);
    uniqueDataIndices.push(uniqueData.length - 1);
  }
  return createModelFromIndexedVertices(ctx, {
    vertices: uniqueData,
    indices: uniqueDataIndices,
    texCoords: null
  }, computeNormals);
}
function isVertexEqual(v1, v2) {
  return v1[0] === v2[0] && v1[1] === v2[1] && v1[2] === v2[2];
}
function makeCube(gl, programInfo) {
  var size = 1.0; // actually radius (because the real size will be * 2)

  var positions = new GlPositionBuffer(gl, programInfo.attribLocations.vertexPosition);
  positions.bufferData(GlPositionBuffer.createBufferSourceFromPositions([
  // Front face
  -size, -size, size, size, -size, size, size, size, size, -size, size, size,
  // Back face
  -size, -size, -size, -size, size, -size, size, size, -size, size, -size, -size,
  // Top face
  -size, size, -size, -size, size, size, size, size, size, size, size, -size,
  // Bottom face
  -size, -size, -size, size, -size, -size, size, -size, size, -size, -size, size,
  // Right face
  size, -size, -size, size, size, -size, size, size, size, size, -size, size,
  // Left face
  -size, -size, -size, -size, -size, size, -size, size, size, -size, size, -size]));
  var indices = new GlIndexBuffer(gl);
  indices.bufferData(GlIndexBuffer.createBufferSourceFromIndices([0, 1, 2, 0, 2, 3,
  // front
  4, 5, 6, 4, 6, 7,
  // back
  8, 9, 10, 8, 10, 11,
  // top
  12, 13, 14, 12, 14, 15,
  // bottom
  16, 17, 18, 16, 18, 19,
  // right
  20, 21, 22, 20, 22, 23 // left
  ]));

  var normals = new GlNormalBuffer(gl, programInfo.attribLocations.vertexNormal);
  normals.bufferData(GlNormalBuffer.createBufferSourceFromPositions([
  // Front
  0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
  // Back
  0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
  // Top
  0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
  // Bottom
  0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
  // Right
  1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
  // Left
  -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0]));
  var texCoords = new GlTextureCoordBuffer(gl, programInfo.attribLocations.textureCoord);
  texCoords.bufferData(GlTextureCoordBuffer.createBufferSourceFromCoords([
  // Front
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Back
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Top
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Bottom
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Right
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
  // Left
  0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0]));
  var rootModel = new GlModel(positions, indices, normals, texCoords);
  var rootEntity = new gl_entity_GlEntity(rootModel, 'cube');

  // rootEntity.setTextureKey('jugwingL');

  return rootEntity;
}
var GlModelHelpers = {
  createModelFromIndexedVertices: createModelFromIndexedVertices,
  createModelFromSmartVertices: createModelFromSmartVertices,
  makeCube: makeCube
};
// CONCATENATED MODULE: ./lib/engines/gl/gl-from-3do.ts
function gl_from_3do_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = gl_from_3do_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function gl_from_3do_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return gl_from_3do_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return gl_from_3do_arrayLikeToArray(o, minLen); }
function gl_from_3do_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var SCALE = 0.000001;
function addGlEntityFrom3do(ctx, child, parent, inputObjectEntityMap, triangulateQuads, computeNormals, useTextures) {
  // the wrapper exists to isolate the offsets transformations from "user" transformations
  // so for example, if the user calls entity.resetTransformations() the offsets won't be lost
  // provided that the entity being referenced isn't a wrapper (which it should never be)
  // TODO find a better solution (maybe store two matrices? one for parent offset and one for user transforms)
  var wrapper = new gl_entity_GlEntity(null, 'WRAPPER:' + child.name);
  wrapper.translate(child.xOffset * SCALE, child.yOffset * SCALE, child.zOffset * SCALE);
  var modelParts = [];
  var _iterator = gl_from_3do_createForOfIteratorHelper(child.primitives),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var primitive = _step.value;
      var model = glModelFrom3do(ctx, child.vertices, primitive, triangulateQuads, computeNormals, useTextures);
      if (model === null) {
        continue;
      }
      if (useTextures && Utils.validateTextureName(primitive.textureName)) {
        model.setTextureKey(primitive.textureName);
      }
      modelParts.push(model);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var objectEntity = new gl_entity_GlEntity(modelParts, child.name);
  wrapper.addChild(objectEntity);
  inputObjectEntityMap.set(child, objectEntity);
  var _iterator2 = gl_from_3do_createForOfIteratorHelper(child.children),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var subChild = _step2.value;
      addGlEntityFrom3do(ctx, subChild, objectEntity, inputObjectEntityMap, triangulateQuads, computeNormals, useTextures);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  parent.addChild(wrapper);
}
function glModelFrom3do(ctx, vertices, primitive, triangulateQuads, computeNormals, useTextures) {
  // pre-ordered and pre-scaled
  var preOrderedVertices = primitive.vertexIndices.map(function (index) {
    var nextVertex = vertices[index];
    return [nextVertex.x * SCALE, nextVertex.y * SCALE, nextVertex.z * SCALE];
  });
  if (primitive.vertexIndices.length === 3) {
    var texCoords = useTextures ? [0, 0, 0, 1, 1, 1] : null;
    return GlModelHelpers.createModelFromIndexedVertices(ctx, {
      vertices: preOrderedVertices,
      indices: [0, 1, 2],
      texCoords: texCoords
    }, computeNormals);
  }
  if (primitive.vertexIndices.length === 4) {
    // when using textures the quads should be triangulated
    var _texCoords = useTextures && triangulateQuads ? [0, 0, 1, 0, 1, 1, 0, 1] : null;
    return GlModelHelpers.createModelFromIndexedVertices(ctx, {
      vertices: preOrderedVertices,
      indices: triangulateQuads ? [0, 1, 2, 0, 2, 3] : [0, 1, 2, 3],
      texCoords: _texCoords
    }, computeNormals);
  }
  return null;
}
// CONCATENATED MODULE: ./lib/engines/webgl-sub-renderers/webgl-sub-renderer.ts
function webgl_sub_renderer_typeof(obj) { "@babel/helpers - typeof"; return webgl_sub_renderer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, webgl_sub_renderer_typeof(obj); }
function webgl_sub_renderer_slicedToArray(arr, i) { return webgl_sub_renderer_arrayWithHoles(arr) || webgl_sub_renderer_iterableToArrayLimit(arr, i) || webgl_sub_renderer_unsupportedIterableToArray(arr, i) || webgl_sub_renderer_nonIterableRest(); }
function webgl_sub_renderer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function webgl_sub_renderer_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function webgl_sub_renderer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function webgl_sub_renderer_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = webgl_sub_renderer_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function webgl_sub_renderer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return webgl_sub_renderer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return webgl_sub_renderer_arrayLikeToArray(o, minLen); }
function webgl_sub_renderer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function webgl_sub_renderer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function webgl_sub_renderer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, webgl_sub_renderer_toPropertyKey(descriptor.key), descriptor); } }
function webgl_sub_renderer_createClass(Constructor, protoProps, staticProps) { if (protoProps) webgl_sub_renderer_defineProperties(Constructor.prototype, protoProps); if (staticProps) webgl_sub_renderer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function webgl_sub_renderer_defineProperty(obj, key, value) { key = webgl_sub_renderer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function webgl_sub_renderer_toPropertyKey(arg) { var key = webgl_sub_renderer_toPrimitive(arg, "string"); return webgl_sub_renderer_typeof(key) === "symbol" ? key : String(key); }
function webgl_sub_renderer_toPrimitive(input, hint) { if (webgl_sub_renderer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (webgl_sub_renderer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




// TODO make these configurable(?)
var BASE_CAMERA_OFFSET = 8;
var ZOOM_MODIFIER = 0.01;
var TRANSLATION_MODIFIER = 0.02;
var DEFAULT_BASE_COLOR = [1.0, 1.0, 1.0, 1.0];
var webgl_sub_renderer_WebglSubRenderer = /*#__PURE__*/function () {
  function WebglSubRenderer(gl, shaderSources, object3doTree, logoDefs) {
    webgl_sub_renderer_classCallCheck(this, WebglSubRenderer);
    this.gl = gl;
    this.shaderSources = shaderSources;
    this.object3doTree = object3doTree;
    this.logoDefs = logoDefs;
    webgl_sub_renderer_defineProperty(this, "programInfo", void 0);
    webgl_sub_renderer_defineProperty(this, "ctx", void 0);
    webgl_sub_renderer_defineProperty(this, "rootEntity", void 0);
    webgl_sub_renderer_defineProperty(this, "objEntityMap", new Map());
    this.programInfo = this.initProgram();
    this.ctx = this.initContext();
    this.rootEntity = this.initRootEntity();
  }
  webgl_sub_renderer_createClass(WebglSubRenderer, [{
    key: "initContext",
    value: function initContext() {
      return new GlCustomContext(this.gl, this.programInfo, this.logoDefs, this.getViewMode());
    }
  }, {
    key: "initRootEntity",
    value: function initRootEntity() {
      var viewMode = this.getViewMode();
      var rootEntity = new gl_entity_GlEntity(null);
      var _iterator = webgl_sub_renderer_createForOfIteratorHelper(this.object3doTree.rootNodes),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var object3do = _step.value;
          addGlEntityFrom3do(this.ctx, object3do, rootEntity, this.objEntityMap, viewMode !== 'wireframe', viewMode !== 'wireframe', viewMode === 'regular');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return rootEntity;
    }
  }, {
    key: "changeTextureMapping",
    value: function changeTextureMapping(textureMapping) {
      // nothing
    }
  }, {
    key: "changeModelControls",
    value: function changeModelControls(modelControls) {
      // nothing
    }
  }, {
    key: "changeObjectStateMap",
    value: function changeObjectStateMap(objStateMap) {
      var _iterator2 = webgl_sub_renderer_createForOfIteratorHelper(objStateMap),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = webgl_sub_renderer_slicedToArray(_step2.value, 2),
            object = _step2$value[0],
            state = _step2$value[1];
          var entity = this.objEntityMap.get(object);
          if (entity === undefined) {
            throw new Error("Couldn't find an entity for the object: ".concat(object));
          }
          entity.setStateOptions({
            visibile: !state.hide,
            highlighted: state.highlight
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "inBeforeTheRootRender",
    value: function inBeforeTheRootRender(gl, modelControls) {
      // nothing
    }
  }, {
    key: "render",
    value: function render(gl, modelControls, delta) {
      var _modelControls$viewCo;
      var viewWidth = gl.drawingBufferWidth;
      var viewHeight = gl.drawingBufferHeight;
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clearDepth(1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      var fieldOfView = 45 * Math.PI / 180;
      var aspect = viewWidth / viewHeight;
      var zNear = 0.1;
      var zFar = 100.0;
      var projectionMatrix = mat4_namespaceObject.create();
      gl.useProgram(this.programInfo.program);
      this.ctx.setUniformFloat4('baseColor', (_modelControls$viewCo = modelControls.viewColor) !== null && _modelControls$viewCo !== void 0 ? _modelControls$viewCo : DEFAULT_BASE_COLOR);
      mat4_namespaceObject.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
      this.ctx.setUniformMatrix4('projectionMatrix', projectionMatrix);
      var xOffset = modelControls.translationX * TRANSLATION_MODIFIER;
      var yOffset = modelControls.translationY * TRANSLATION_MODIFIER * -1;
      var zOffset = (BASE_CAMERA_OFFSET + modelControls.zoom * ZOOM_MODIFIER) * -1;

      // TODO \/ stop reseting and recreating transformations for no reason. these should only happen
      // when the user actually rotates/pans the camera
      this.rootEntity.resetTransformations();
      this.rootEntity.translate(xOffset, yOffset, zOffset);
      this.rootEntity.rotateX(common_namespaceObject.toRadian(modelControls.rotationX));
      this.rootEntity.rotateY(common_namespaceObject.toRadian(modelControls.rotationY));
      this.rootEntity.rotateZ(common_namespaceObject.toRadian(modelControls.rotationZ));
      this.inBeforeTheRootRender(gl, modelControls);
      this.rootEntity.render(this.ctx);
    }
  }, {
    key: "update",
    value: function update(delta) {
      /*const wing1a = this.rootEntity.findChild('wing1a', true)!;
      const wing2a = this.rootEntity.findChild('wing2a', true)!;
        const rotation = 0;
        wing1a.resetTransformations();
      wing1a.rotateZ(glMatrix.toRadian(rotation));
        wing2a.resetTransformations();
      wing2a.rotateZ(glMatrix.toRadian(-rotation));
        wing1a.setColor([1.0, 0.0, 0.0, 1.0]);
      wing2a.setColor([0.0, 0.0, 1.0, 1.0]);*/
    }
  }]);
  return WebglSubRenderer;
}();
// CONCATENATED MODULE: ./lib/engines/webgl-sub-renderers/regular-renderer.ts
function regular_renderer_typeof(obj) { "@babel/helpers - typeof"; return regular_renderer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, regular_renderer_typeof(obj); }
function regular_renderer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function regular_renderer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, regular_renderer_toPropertyKey(descriptor.key), descriptor); } }
function regular_renderer_createClass(Constructor, protoProps, staticProps) { if (protoProps) regular_renderer_defineProperties(Constructor.prototype, protoProps); if (staticProps) regular_renderer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function regular_renderer_toPropertyKey(arg) { var key = regular_renderer_toPrimitive(arg, "string"); return regular_renderer_typeof(key) === "symbol" ? key : String(key); }
function regular_renderer_toPrimitive(input, hint) { if (regular_renderer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (regular_renderer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function regular_renderer_get() { if (typeof Reflect !== "undefined" && Reflect.get) { regular_renderer_get = Reflect.get.bind(); } else { regular_renderer_get = function _get(target, property, receiver) { var base = regular_renderer_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return regular_renderer_get.apply(this, arguments); }
function regular_renderer_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = regular_renderer_getPrototypeOf(object); if (object === null) break; } return object; }
function regular_renderer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) regular_renderer_setPrototypeOf(subClass, superClass); }
function regular_renderer_setPrototypeOf(o, p) { regular_renderer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return regular_renderer_setPrototypeOf(o, p); }
function regular_renderer_createSuper(Derived) { var hasNativeReflectConstruct = regular_renderer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = regular_renderer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = regular_renderer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return regular_renderer_possibleConstructorReturn(this, result); }; }
function regular_renderer_possibleConstructorReturn(self, call) { if (call && (regular_renderer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return regular_renderer_assertThisInitialized(self); }
function regular_renderer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function regular_renderer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function regular_renderer_getPrototypeOf(o) { regular_renderer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return regular_renderer_getPrototypeOf(o); }


var regular_renderer_RegularRenderer = /*#__PURE__*/function (_WebglSubRenderer) {
  regular_renderer_inherits(RegularRenderer, _WebglSubRenderer);
  var _super = regular_renderer_createSuper(RegularRenderer);
  function RegularRenderer() {
    regular_renderer_classCallCheck(this, RegularRenderer);
    return _super.apply(this, arguments);
  }
  regular_renderer_createClass(RegularRenderer, [{
    key: "changeTextureMapping",
    value: function changeTextureMapping(textureMapping) {
      this.ctx.changeTextureMapping(textureMapping);
    }
  }, {
    key: "changeModelControls",
    value: function changeModelControls(modelControls) {
      this.ctx.setCurrentLogoIdx(modelControls.logoColorIdx);
      regular_renderer_get(regular_renderer_getPrototypeOf(RegularRenderer.prototype), "changeModelControls", this).call(this, modelControls);
    }
  }, {
    key: "getViewMode",
    value: function getViewMode() {
      return 'regular';
    }
  }, {
    key: "initProgram",
    value: function initProgram() {
      var _this$shaderSources$r = this.shaderSources.regular,
        vsSource = _this$shaderSources$r.vsSource,
        fsSource = _this$shaderSources$r.fsSource;
      var vsShader = WebGlHelper.compileShader(this.gl, vsSource, this.gl.VERTEX_SHADER);
      var fsShader = WebGlHelper.compileShader(this.gl, fsSource, this.gl.FRAGMENT_SHADER);
      var shaderProgram = WebGlHelper.createProgram(this.gl, vsShader, fsShader);
      return {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: this.gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
          vertexNormal: this.gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
          textureCoord: this.gl.getAttribLocation(shaderProgram, 'aTextureCoord')
        },
        uniformLocations: {
          modelViewMatrix: this.gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
          projectionMatrix: this.gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          baseColor: this.gl.getUniformLocation(shaderProgram, 'baseColor'),
          entityColor: this.gl.getUniformLocation(shaderProgram, 'entityColor'),
          normalMatrix: this.gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
          sampler: this.gl.getUniformLocation(shaderProgram, 'uSampler'),
          useLights: this.gl.getUniformLocation(shaderProgram, 'useLights')
        }
      };
    }
  }, {
    key: "inBeforeTheRootRender",
    value: function inBeforeTheRootRender(gl, modelControls) {
      this.ctx.setUniformBool('useLights', modelControls.enableLightingRegular);
      var minFilter = modelControls.textureFilterMin === 'linear' ? gl.LINEAR : gl.NEAREST;
      var magFilter = modelControls.textureFilterMag === 'linear' ? gl.LINEAR : gl.NEAREST;
      this.ctx.setTextureMinFilter(minFilter);
      this.ctx.setTextureMagFilter(magFilter);
    }
  }]);
  return RegularRenderer;
}(webgl_sub_renderer_WebglSubRenderer);
// CONCATENATED MODULE: ./lib/engines/webgl-sub-renderers/solid-color-renderer.ts
function solid_color_renderer_typeof(obj) { "@babel/helpers - typeof"; return solid_color_renderer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, solid_color_renderer_typeof(obj); }
function solid_color_renderer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function solid_color_renderer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, solid_color_renderer_toPropertyKey(descriptor.key), descriptor); } }
function solid_color_renderer_createClass(Constructor, protoProps, staticProps) { if (protoProps) solid_color_renderer_defineProperties(Constructor.prototype, protoProps); if (staticProps) solid_color_renderer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function solid_color_renderer_toPropertyKey(arg) { var key = solid_color_renderer_toPrimitive(arg, "string"); return solid_color_renderer_typeof(key) === "symbol" ? key : String(key); }
function solid_color_renderer_toPrimitive(input, hint) { if (solid_color_renderer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (solid_color_renderer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function solid_color_renderer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) solid_color_renderer_setPrototypeOf(subClass, superClass); }
function solid_color_renderer_setPrototypeOf(o, p) { solid_color_renderer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return solid_color_renderer_setPrototypeOf(o, p); }
function solid_color_renderer_createSuper(Derived) { var hasNativeReflectConstruct = solid_color_renderer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = solid_color_renderer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = solid_color_renderer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return solid_color_renderer_possibleConstructorReturn(this, result); }; }
function solid_color_renderer_possibleConstructorReturn(self, call) { if (call && (solid_color_renderer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return solid_color_renderer_assertThisInitialized(self); }
function solid_color_renderer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function solid_color_renderer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function solid_color_renderer_getPrototypeOf(o) { solid_color_renderer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return solid_color_renderer_getPrototypeOf(o); }


var solid_color_renderer_SolidColorRenderer = /*#__PURE__*/function (_WebglSubRenderer) {
  solid_color_renderer_inherits(SolidColorRenderer, _WebglSubRenderer);
  var _super = solid_color_renderer_createSuper(SolidColorRenderer);
  function SolidColorRenderer() {
    solid_color_renderer_classCallCheck(this, SolidColorRenderer);
    return _super.apply(this, arguments);
  }
  solid_color_renderer_createClass(SolidColorRenderer, [{
    key: "getViewMode",
    value: function getViewMode() {
      return 'solid_color';
    }
  }, {
    key: "changeModelControls",
    value: function changeModelControls(modelControls) {
      this.ctx.setBaseEntityColor(modelControls.solidColor);
    }
  }, {
    key: "initProgram",
    value: function initProgram() {
      var _this$shaderSources$s = this.shaderSources.solid,
        vsSource = _this$shaderSources$s.vsSource,
        fsSource = _this$shaderSources$s.fsSource;
      var vsShader = WebGlHelper.compileShader(this.gl, vsSource, this.gl.VERTEX_SHADER);
      var fsShader = WebGlHelper.compileShader(this.gl, fsSource, this.gl.FRAGMENT_SHADER);
      var shaderProgram = WebGlHelper.createProgram(this.gl, vsShader, fsShader);
      return {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: this.gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
          vertexNormal: this.gl.getAttribLocation(shaderProgram, 'aVertexNormal')
        },
        uniformLocations: {
          modelViewMatrix: this.gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
          projectionMatrix: this.gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          baseColor: this.gl.getUniformLocation(shaderProgram, 'baseColor'),
          entityColor: this.gl.getUniformLocation(shaderProgram, 'entityColor'),
          normalMatrix: this.gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
          useLights: this.gl.getUniformLocation(shaderProgram, 'useLights')
        }
      };
    }
  }, {
    key: "inBeforeTheRootRender",
    value: function inBeforeTheRootRender(gl, modelControls) {
      this.ctx.setUniformBool('useLights', modelControls.enableLightingSolidColor);
    }
  }]);
  return SolidColorRenderer;
}(webgl_sub_renderer_WebglSubRenderer);
// CONCATENATED MODULE: ./lib/engines/webgl-sub-renderers/wireframe-renderer.ts
function wireframe_renderer_typeof(obj) { "@babel/helpers - typeof"; return wireframe_renderer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, wireframe_renderer_typeof(obj); }
function wireframe_renderer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function wireframe_renderer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, wireframe_renderer_toPropertyKey(descriptor.key), descriptor); } }
function wireframe_renderer_createClass(Constructor, protoProps, staticProps) { if (protoProps) wireframe_renderer_defineProperties(Constructor.prototype, protoProps); if (staticProps) wireframe_renderer_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function wireframe_renderer_toPropertyKey(arg) { var key = wireframe_renderer_toPrimitive(arg, "string"); return wireframe_renderer_typeof(key) === "symbol" ? key : String(key); }
function wireframe_renderer_toPrimitive(input, hint) { if (wireframe_renderer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (wireframe_renderer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function wireframe_renderer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) wireframe_renderer_setPrototypeOf(subClass, superClass); }
function wireframe_renderer_setPrototypeOf(o, p) { wireframe_renderer_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return wireframe_renderer_setPrototypeOf(o, p); }
function wireframe_renderer_createSuper(Derived) { var hasNativeReflectConstruct = wireframe_renderer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = wireframe_renderer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = wireframe_renderer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return wireframe_renderer_possibleConstructorReturn(this, result); }; }
function wireframe_renderer_possibleConstructorReturn(self, call) { if (call && (wireframe_renderer_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return wireframe_renderer_assertThisInitialized(self); }
function wireframe_renderer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function wireframe_renderer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function wireframe_renderer_getPrototypeOf(o) { wireframe_renderer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return wireframe_renderer_getPrototypeOf(o); }


var wireframe_renderer_WireframeRenderer = /*#__PURE__*/function (_WebglSubRenderer) {
  wireframe_renderer_inherits(WireframeRenderer, _WebglSubRenderer);
  var _super = wireframe_renderer_createSuper(WireframeRenderer);
  function WireframeRenderer() {
    wireframe_renderer_classCallCheck(this, WireframeRenderer);
    return _super.apply(this, arguments);
  }
  wireframe_renderer_createClass(WireframeRenderer, [{
    key: "getViewMode",
    value: function getViewMode() {
      return 'wireframe';
    }
  }, {
    key: "changeModelControls",
    value: function changeModelControls(modelControls) {
      this.ctx.setBaseEntityColor(modelControls.wireframeColor);
    }
  }, {
    key: "initProgram",
    value: function initProgram() {
      var _this$shaderSources$w = this.shaderSources.wireframe,
        vsSource = _this$shaderSources$w.vsSource,
        fsSource = _this$shaderSources$w.fsSource;
      var vsShader = WebGlHelper.compileShader(this.gl, vsSource, this.gl.VERTEX_SHADER);
      var fsShader = WebGlHelper.compileShader(this.gl, fsSource, this.gl.FRAGMENT_SHADER);
      var shaderProgram = WebGlHelper.createProgram(this.gl, vsShader, fsShader);
      return {
        program: shaderProgram,
        attribLocations: {
          vertexPosition: this.gl.getAttribLocation(shaderProgram, 'aVertexPosition')
        },
        uniformLocations: {
          modelViewMatrix: this.gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
          projectionMatrix: this.gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
          baseColor: this.gl.getUniformLocation(shaderProgram, 'baseColor'),
          entityColor: this.gl.getUniformLocation(shaderProgram, 'entityColor')
        }
      };
    }
  }]);
  return WireframeRenderer;
}(webgl_sub_renderer_WebglSubRenderer);
// CONCATENATED MODULE: ./lib/engines/webgl-engine.ts
function webgl_engine_typeof(obj) { "@babel/helpers - typeof"; return webgl_engine_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, webgl_engine_typeof(obj); }
function webgl_engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function webgl_engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, webgl_engine_toPropertyKey(descriptor.key), descriptor); } }
function webgl_engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) webgl_engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) webgl_engine_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function webgl_engine_get() { if (typeof Reflect !== "undefined" && Reflect.get) { webgl_engine_get = Reflect.get.bind(); } else { webgl_engine_get = function _get(target, property, receiver) { var base = webgl_engine_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return webgl_engine_get.apply(this, arguments); }
function webgl_engine_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = webgl_engine_getPrototypeOf(object); if (object === null) break; } return object; }
function webgl_engine_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) webgl_engine_setPrototypeOf(subClass, superClass); }
function webgl_engine_setPrototypeOf(o, p) { webgl_engine_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return webgl_engine_setPrototypeOf(o, p); }
function webgl_engine_createSuper(Derived) { var hasNativeReflectConstruct = webgl_engine_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = webgl_engine_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = webgl_engine_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return webgl_engine_possibleConstructorReturn(this, result); }; }
function webgl_engine_possibleConstructorReturn(self, call) { if (call && (webgl_engine_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return webgl_engine_assertThisInitialized(self); }
function webgl_engine_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function webgl_engine_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function webgl_engine_getPrototypeOf(o) { webgl_engine_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return webgl_engine_getPrototypeOf(o); }
function webgl_engine_defineProperty(obj, key, value) { key = webgl_engine_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function webgl_engine_toPropertyKey(arg) { var key = webgl_engine_toPrimitive(arg, "string"); return webgl_engine_typeof(key) === "symbol" ? key : String(key); }
function webgl_engine_toPrimitive(input, hint) { if (webgl_engine_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (webgl_engine_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var webgl_engine_WebglEngine = /*#__PURE__*/function (_Engine) {
  webgl_engine_inherits(WebglEngine, _Engine);
  var _super = webgl_engine_createSuper(WebglEngine);
  function WebglEngine(config, shaderSources, object3doTree, logoDefs) {
    var _this;
    webgl_engine_classCallCheck(this, WebglEngine);
    _this = _super.call(this, config);
    webgl_engine_defineProperty(webgl_engine_assertThisInitialized(_this), "gl", void 0);
    webgl_engine_defineProperty(webgl_engine_assertThisInitialized(_this), "subRenderers", void 0);
    var gl = config.canvas.getContext('webgl', {
      preserveDrawingBuffer: config.preserveDrawingBuffer
    });
    if (gl === null) {
      throw "Couldn't get WebGL rendering context!";
    }
    _this.gl = gl;
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    //:: Setup subRenderers

    _this.subRenderers = {
      regular: new regular_renderer_RegularRenderer(gl, shaderSources, object3doTree, logoDefs),
      solid_color: new solid_color_renderer_SolidColorRenderer(gl, shaderSources, object3doTree, logoDefs),
      wireframe: new wireframe_renderer_WireframeRenderer(gl, shaderSources, object3doTree, logoDefs)
    };
    for (var _i = 0, _Object$values = Object.values(_this.subRenderers); _i < _Object$values.length; _i++) {
      var subRenderer = _Object$values[_i];
      subRenderer.changeTextureMapping(config.textureMapping);
    }

    //:: Setup resizing handler and then render

    _this.setupEvents();
    if (config.mode === 'continuous') {
      var then = 0;
      var render = function render(now) {
        now *= 0.001; // convert to seconds
        var deltaTime = now - then;
        then = now;
        _this.update(deltaTime);
        _this.render(deltaTime);
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    }
    return _this;
  }
  webgl_engine_createClass(WebglEngine, [{
    key: "onResized",
    value: function onResized() {
      console.log("Resized! (".concat(this.width, " x ").concat(this.height, ")"));
      this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
      if (this.config.mode === 'static') {
        this.render();
      }
    }
  }, {
    key: "render",
    value: function render(delta) {
      var currentViewMode = this.config.modelControls.viewMode;
      var currentSubRenderer = this.subRenderers[currentViewMode];
      currentSubRenderer.render(this.gl, this.config.modelControls, delta);
    }
  }, {
    key: "setTextureMapping",
    value: function setTextureMapping(textureMapping) {
      for (var _i2 = 0, _Object$values2 = Object.values(this.subRenderers); _i2 < _Object$values2.length; _i2++) {
        var subRenderer = _Object$values2[_i2];
        subRenderer.changeTextureMapping(textureMapping);
      }
      webgl_engine_get(webgl_engine_getPrototypeOf(WebglEngine.prototype), "setTextureMapping", this).call(this, textureMapping);
    }
  }, {
    key: "setModelControls",
    value: function setModelControls(modelControls) {
      for (var _i3 = 0, _Object$values3 = Object.values(this.subRenderers); _i3 < _Object$values3.length; _i3++) {
        var subRenderer = _Object$values3[_i3];
        subRenderer.changeModelControls(modelControls);
      }
      webgl_engine_get(webgl_engine_getPrototypeOf(WebglEngine.prototype), "setModelControls", this).call(this, modelControls);
    }
  }, {
    key: "setObjectStateMap",
    value: function setObjectStateMap(objStateMap) {
      for (var _i4 = 0, _Object$values4 = Object.values(this.subRenderers); _i4 < _Object$values4.length; _i4++) {
        var subRenderer = _Object$values4[_i4];
        subRenderer.changeObjectStateMap(objStateMap);
      }
      webgl_engine_get(webgl_engine_getPrototypeOf(WebglEngine.prototype), "setObjectStateMap", this).call(this, objStateMap);
    }
  }, {
    key: "update",
    value: function update(delta) {
      var currentViewMode = this.config.modelControls.viewMode;
      var currentSubRenderer = this.subRenderers[currentViewMode];
      currentSubRenderer.update(delta);
    }
  }]);
  return WebglEngine;
}(Engine);
// CONCATENATED MODULE: ./components/canvas/CanvasWrapper.tsx

var CanvasWrapper_CanvasWrapper = function CanvasWrapper(_ref) {
  var canvasRef = _ref.canvasRef;
  console.log('Re-rendering CanvasWrapper');
  var canvas =
  // don't touch this div \/ because the engine listen to resize events on it
  Object(external_preact_["h"])("div", {
    class: "absolute inset-0"
  }, Object(external_preact_["h"])("canvas", {
    ref: canvasRef
  }));
  return Object(external_preact_["h"])("div", {
    class: "w-full h-full max-w-full max-h-full relative"
  }, canvas);
};
/* harmony default export */ var canvas_CanvasWrapper = (CanvasWrapper_CanvasWrapper);
// CONCATENATED MODULE: ./components/ui/Spoiler.tsx
function Spoiler_slicedToArray(arr, i) { return Spoiler_arrayWithHoles(arr) || Spoiler_iterableToArrayLimit(arr, i) || Spoiler_unsupportedIterableToArray(arr, i) || Spoiler_nonIterableRest(); }
function Spoiler_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Spoiler_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Spoiler_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Spoiler_arrayLikeToArray(o, minLen); }
function Spoiler_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Spoiler_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Spoiler_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Spoiler_Spoiler = function Spoiler(_ref) {
  var title = _ref.title,
    children = _ref.children,
    showByDefault = _ref.showByDefault;
  var _useState = Object(hooks_module["e" /* useState */])(showByDefault !== null && showByDefault !== void 0 ? showByDefault : false),
    _useState2 = Spoiler_slicedToArray(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  var content = show ? Object(external_preact_["h"])("div", null, children) : null;
  var showHide = Object(external_preact_["h"])("button", {
    onClick: function onClick() {
      return setShow(!show);
    }
  }, show ? '[Hide]' : '[Show]');
  return Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("div", {
    class: "flex justify-between"
  }, title, showHide), content);
};
/* harmony default export */ var ui_Spoiler = (Spoiler_Spoiler);
// CONCATENATED MODULE: ./components/object-list/ObjectListTree.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var ObjectListTree_module = ({"NameWrapper":"NameWrapper__lk4ti","LeftBorder":"LeftBorder__WZG0Y","MiddleBorder":"MiddleBorder__FcOEe","Root":"Root__0piuG"});
// CONCATENATED MODULE: ./components/object-list/ObjectSideControls.tsx
function ObjectSideControls_typeof(obj) { "@babel/helpers - typeof"; return ObjectSideControls_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ObjectSideControls_typeof(obj); }
function ObjectSideControls_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ObjectSideControls_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ObjectSideControls_ownKeys(Object(source), !0).forEach(function (key) { ObjectSideControls_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ObjectSideControls_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ObjectSideControls_defineProperty(obj, key, value) { key = ObjectSideControls_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ObjectSideControls_toPropertyKey(arg) { var key = ObjectSideControls_toPrimitive(arg, "string"); return ObjectSideControls_typeof(key) === "symbol" ? key : String(key); }
function ObjectSideControls_toPrimitive(input, hint) { if (ObjectSideControls_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ObjectSideControls_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ObjectSideControls_ObjectSideControls = function ObjectSideControls(_ref) {
  var state = _ref.state,
    setState = _ref.setState;
  return Object(external_preact_["h"])("div", {
    class: "flex pr-1"
  }, Object(external_preact_["h"])("div", {
    class: 'flex items-center px-1 cursor-pointer' + (state.highlight ? ' text-yellow-500' : ''),
    onClick: function onClick() {
      return setState(ObjectSideControls_objectSpread(ObjectSideControls_objectSpread({}, state), {}, {
        highlight: !state.highlight
      }));
    }
  }, "H"), Object(external_preact_["h"])("div", {
    class: 'flex items-center px-1 cursor-pointer' + (state.hide ? '' : ' text-yellow-500'),
    onClick: function onClick() {
      return setState(ObjectSideControls_objectSpread(ObjectSideControls_objectSpread({}, state), {}, {
        hide: !state.hide
      }));
    }
  }, "V"));
};
/* harmony default export */ var object_list_ObjectSideControls = (ObjectSideControls_ObjectSideControls);
// CONCATENATED MODULE: ./components/object-list/ObjectListTree.tsx
function ObjectListTree_toConsumableArray(arr) { return ObjectListTree_arrayWithoutHoles(arr) || ObjectListTree_iterableToArray(arr) || ObjectListTree_unsupportedIterableToArray(arr) || ObjectListTree_nonIterableSpread(); }
function ObjectListTree_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ObjectListTree_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function ObjectListTree_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return ObjectListTree_arrayLikeToArray(arr); }
function ObjectListTree_slicedToArray(arr, i) { return ObjectListTree_arrayWithHoles(arr) || ObjectListTree_iterableToArrayLimit(arr, i) || ObjectListTree_unsupportedIterableToArray(arr, i) || ObjectListTree_nonIterableRest(); }
function ObjectListTree_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ObjectListTree_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ObjectListTree_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ObjectListTree_arrayLikeToArray(o, minLen); }
function ObjectListTree_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ObjectListTree_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ObjectListTree_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var INDENT = '1.50rem';
var ROW_HEIGHT = '34px';
var SPACING_Y = '0.50rem';
var ObjectListTree_ObjectListTree = function ObjectListTree(_ref) {
  var _current$name;
  var current = _ref.current,
    nodes = _ref.nodes,
    onChangeNodeStack = _ref.onChangeNodeStack,
    nodeStack = _ref.nodeStack,
    objStateMap = _ref.objStateMap,
    setObjStateMap = _ref.setObjStateMap;
  var _useState = Object(hooks_module["e" /* useState */])(true),
    _useState2 = ObjectListTree_slicedToArray(_useState, 2),
    showChildren = _useState2[0],
    setShowChildren = _useState2[1];
  var hasChildren = nodes.length > 0;
  var objState = current && objStateMap.get(current);
  return Object(external_preact_["h"])("div", {
    class: ObjectListTree_module.Root + ' w-full overflow-hidden text-sm'
  }, current !== null && Object(external_preact_["h"])("div", {
    style: {
      height: ROW_HEIGHT
    },
    class: ObjectListTree_module.NameWrapper + ' flex py-1 bg-cyan-900 box-border'
  }, Object(external_preact_["h"])("div", {
    onClick: hasChildren ? function () {
      return setShowChildren(!showChildren);
    } : undefined,
    class: "flex items-center px-1 pl-2 ".concat(hasChildren ? 'cursor-pointer hover:text-yellow-400' : 'invisible')
  }, showChildren ? '▲' : '▼'), Object(external_preact_["h"])("div", {
    class: "min-w-0 flex items-center grow hover:text-yellow-400 cursor-pointer",
    onClick: function onClick() {
      return onChangeNodeStack(nodeStack);
    }
  }, Object(external_preact_["h"])("div", {
    class: "truncate px-1",
    title: current.name
  }, (_current$name = current.name) !== null && _current$name !== void 0 ? _current$name : Object(external_preact_["h"])("span", {
    class: "text-gray-300"
  }, '<empty name>'))), objState && Object(external_preact_["h"])(object_list_ObjectSideControls, {
    state: objState,
    setState: function setState(newObjState) {
      var newMap = Utils.createUpdatedMap(objStateMap, current, newObjState);
      setObjStateMap(newMap);
    }
  })), nodes.length > 0 && Object(external_preact_["h"])("div", {
    class: showChildren ? 'block' : 'hidden'
  }, nodes.map(function (subNode, index) {
    return Object(external_preact_["h"])("div", {
      key: index,
      class: "flex"
    }, Object(external_preact_["h"])("div", {
      class: ObjectListTree_module.LeftBorder,
      style: {
        marginLeft: "calc(".concat(INDENT, " / 2)"),
        height: index === nodes.length - 1 ? "calc(".concat(ROW_HEIGHT, " / 2 + ").concat(SPACING_Y, ")") : 'auto'
      }
    }), Object(external_preact_["h"])("div", {
      class: ObjectListTree_module.MiddleBorder + ' self-start',
      style: {
        width: "calc(".concat(INDENT, " / 2)"),
        height: "calc(".concat(ROW_HEIGHT, " / 2 + ").concat(SPACING_Y, ")")
      }
    }), Object(external_preact_["h"])("div", {
      class: "grow max-w-full overflow-hidden",
      style: {
        paddingTop: SPACING_Y
      }
    }, Object(external_preact_["h"])(ObjectListTree, {
      current: subNode,
      nodes: subNode.children,
      onChangeNodeStack: onChangeNodeStack,
      nodeStack: [].concat(ObjectListTree_toConsumableArray(nodeStack), [subNode]),
      objStateMap: objStateMap,
      setObjStateMap: setObjStateMap
    })));
  })));
};
/* harmony default export */ var object_list_ObjectListTree = (ObjectListTree_ObjectListTree);
// CONCATENATED MODULE: ./components/object-list/PrimitivesTable.tsx

var cellCss = 'px-1.5 py-1 align-top text-left';
var thCss = "".concat(cellCss, " whitespace-nowrap");
var tdCss = "".concat(cellCss, " break-all");
var PrimitivesTable_PrimitivesTable = function PrimitivesTable(_ref) {
  var primitives = _ref.primitives;
  return Object(external_preact_["h"])("table", {
    class: "w-full overflow-hidden"
  }, Object(external_preact_["h"])("thead", null, Object(external_preact_["h"])("tr", null, Object(external_preact_["h"])("th", {
    class: thCss
  }, "#"), Object(external_preact_["h"])("th", {
    class: thCss,
    title: "Vertex Indices"
  }, "V.Indices"), Object(external_preact_["h"])("th", {
    class: thCss
  }, "Texture"))), Object(external_preact_["h"])("tbody", null, primitives.map(function (primitive, index) {
    return Object(external_preact_["h"])("tr", {
      key: index
    }, Object(external_preact_["h"])("td", {
      class: tdCss
    }, index), Object(external_preact_["h"])("td", {
      class: tdCss
    }, "[", primitive.vertexIndices.join(', '), "]"), Object(external_preact_["h"])("td", {
      class: "".concat(tdCss)
    }, primitive.textureName));
  })));
};
/* harmony default export */ var object_list_PrimitivesTable = (PrimitivesTable_PrimitivesTable);
// CONCATENATED MODULE: ./components/object-list/ObjectList.tsx
function ObjectList_slicedToArray(arr, i) { return ObjectList_arrayWithHoles(arr) || ObjectList_iterableToArrayLimit(arr, i) || ObjectList_unsupportedIterableToArray(arr, i) || ObjectList_nonIterableRest(); }
function ObjectList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ObjectList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ObjectList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ObjectList_arrayLikeToArray(o, minLen); }
function ObjectList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ObjectList_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ObjectList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var ObjectList_ObjectList = function ObjectList(_ref) {
  var object3doTree = _ref.object3doTree,
    objStateMap = _ref.objStateMap,
    setObjStateMap = _ref.setObjStateMap;
  var _useState = Object(hooks_module["e" /* useState */])([]),
    _useState2 = ObjectList_slicedToArray(_useState, 2),
    nodeStack = _useState2[0],
    setNodeStack = _useState2[1];
  var currentParent = nodeStack.length === 0 ? null // (aka root)
  : nodeStack[nodeStack.length - 1]; // top of the stack

  var currentChildren = currentParent === null ? object3doTree.rootNodes : currentParent.children;
  var currentObjState = currentParent && objStateMap.get(currentParent);
  var pathing = Object(hooks_module["c" /* useMemo */])(function () {
    var sep = Object(external_preact_["h"])("div", {
      class: "mx-1 text-pink-600"
    }, "\xBB");
    var selCss = 'font-bold';
    var unselCss = 'cursor-pointer text-gray-400 hover:text-white';
    return Object(external_preact_["h"])("div", {
      class: "flex flex-wrap bg-gray-900 px-1 py-0.5"
    }, Object(external_preact_["h"])("div", {
      class: currentParent === null ? selCss : unselCss,
      onClick: function onClick() {
        return setNodeStack([]);
      }
    }, Object(external_preact_["h"])("span", {
      class: "italic"
    }, "(ROOT)")), currentParent !== null && sep, nodeStack.map(function (node, index) {
      return Object(external_preact_["h"])(external_preact_["Fragment"], {
        key: index
      }, Object(external_preact_["h"])("div", {
        onClick: function onClick() {
          return setNodeStack(nodeStack.slice(0, index + 1));
        },
        class: index === nodeStack.length - 1 ? selCss : unselCss
      }, node.name), index < nodeStack.length - 1 && sep);
    }));
  }, [nodeStack, currentParent]);
  var currentParentInfo = Object(hooks_module["c" /* useMemo */])(function () {
    var _currentParent$name;
    return Object(external_preact_["h"])("div", {
      class: 'flex py-1 bg-cyan-900 border border-yellow-500 text-sm'
    }, Object(external_preact_["h"])("div", {
      class: "min-w-0 grow px-1 pl-2"
    }, currentParent === null ? Object(external_preact_["h"])("span", {
      class: "italic"
    }, "(ROOT)") : (_currentParent$name = currentParent.name) !== null && _currentParent$name !== void 0 ? _currentParent$name : Object(external_preact_["h"])("span", {
      class: "text-gray-300"
    }, '<empty name>')), currentObjState && Object(external_preact_["h"])(object_list_ObjectSideControls, {
      state: currentObjState,
      setState: function setState(newObjState) {
        var newMap = Utils.createUpdatedMap(objStateMap, currentParent, newObjState);
        setObjStateMap(newMap);
      }
    }));
  }, [currentParent, currentObjState, objStateMap, setObjStateMap]);
  var currentParentPositions = Object(hooks_module["c" /* useMemo */])(function () {
    if (currentParent === null || currentParent.primitives.length === 0) {
      return null;
    }
    return Object(external_preact_["h"])("div", {
      class: "border border-dashed border-gray-500 px-2 py-1 mt-2 mb-1 text-sm text-gray-300"
    }, Object(external_preact_["h"])(ui_Spoiler, {
      title: "Vertices"
    }, Object(external_preact_["h"])("div", {
      class: "border-t border-gray-700 mt-1 pt-1 text-xs"
    }, Object(external_preact_["h"])("span", {
      class: "break-all"
    }, "[", currentParent.vertices.map(function (v) {
      return "[".concat(v.x, ", ").concat(v.y, ", ").concat(v.z, "]");
    }).join(', '), "]"))));
  }, [currentParent]);
  var currentParentPrimitives = Object(hooks_module["c" /* useMemo */])(function () {
    if (currentParent === null || currentParent.primitives.length === 0) {
      return null;
    }
    return Object(external_preact_["h"])("div", {
      class: "border border-dashed border-gray-500 px-2 py-1 mt-2 mb-1 text-sm text-gray-300"
    }, Object(external_preact_["h"])(ui_Spoiler, {
      title: "Primitives"
    }, Object(external_preact_["h"])("div", {
      class: "border-t border-gray-700 mt-1 pt-1 text-xs"
    }, Object(external_preact_["h"])(object_list_PrimitivesTable, {
      primitives: currentParent.primitives
    }))));
  }, [currentParent]);
  return Object(external_preact_["h"])("div", {
    class: "flex flex-col h-full overflow-hidden"
  }, Object(external_preact_["h"])("div", {
    className: "px-6"
  }, Object(external_preact_["h"])("div", {
    class: "mb-4"
  }, pathing), Object(external_preact_["h"])("div", {
    class: "mb-2 font-bold"
  }, "Current:"), currentParentInfo, Object(external_preact_["h"])("div", {
    class: "pl-4"
  }, currentParentPositions, currentParentPrimitives), currentChildren.length > 0 && Object(external_preact_["h"])("div", {
    class: "mt-6 mb-2 font-bold flex justify-between"
  }, Object(external_preact_["h"])("span", null, "Children:"), Object(external_preact_["h"])("span", null, "(", currentChildren.length, ")"))), Object(external_preact_["h"])("div", {
    class: "grow overflow-auto px-6"
  }, Object(external_preact_["h"])(object_list_ObjectListTree, {
    current: null,
    nodes: currentChildren,
    onChangeNodeStack: setNodeStack,
    nodeStack: nodeStack,
    objStateMap: objStateMap,
    setObjStateMap: setObjStateMap
  })));
};
/* harmony default export */ var object_list_ObjectList = (ObjectList_ObjectList);
// EXTERNAL MODULE: ./components/options/Options.tsx
var Options = __webpack_require__("IomO");

// EXTERNAL MODULE: ./lib/io-utils.ts
var io_utils = __webpack_require__("u6ao");

// CONCATENATED MODULE: ./components/textures/TextureList.tsx
function TextureList_slicedToArray(arr, i) { return TextureList_arrayWithHoles(arr) || TextureList_iterableToArrayLimit(arr, i) || TextureList_unsupportedIterableToArray(arr, i) || TextureList_nonIterableRest(); }
function TextureList_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TextureList_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TextureList_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TextureList_arrayLikeToArray(o, minLen); }
function TextureList_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TextureList_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TextureList_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TextureList_TextureList = function TextureList(_ref) {
  var textures = _ref.textures,
    setTextures = _ref.setTextures;
  return Object(external_preact_["h"])("div", {
    class: "flex flex-col space-y-2"
  }, Object.entries(textures).map(function (_ref2, index) {
    var _ref3 = TextureList_slicedToArray(_ref2, 2),
      key = _ref3[0],
      value = _ref3[1];
    var isOk = value !== null;
    if (value !== null && value.type === 'html') {
      isOk = value.image.complete && value.image.naturalWidth !== 0;
    }
    var msg = isOk ? 'OK' : 'ERROR';
    return Object(external_preact_["h"])("div", {
      key: index,
      class: 'flex items-center group' + (isOk ? ' text-green-600 hover:text-green-500' : ' text-red-600 hover:text-red-500')
    }, Object(external_preact_["h"])("div", {
      class: "break-all"
    }, key), Object(external_preact_["h"])("div", {
      class: "grow border-b border-dashed border-gray-600 group-hover:border-gray-500 mx-1\r text-transparent text-center",
      style: {
        minWidth: '24px',
        marginBottom: '6px'
      }
    }, "-"), (value === null || value === void 0 ? void 0 : value.type) === 'html' ? Object(external_preact_["h"])("a", {
      href: value.image.src,
      target: "_blank",
      rel: "noreferrer"
    }, msg) : Object(external_preact_["h"])("div", null, msg));
  }));
};
/* harmony default export */ var textures_TextureList = (TextureList_TextureList);
// CONCATENATED MODULE: ./components/textures/TextureManager.tsx
function TextureManager_typeof(obj) { "@babel/helpers - typeof"; return TextureManager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TextureManager_typeof(obj); }
function TextureManager_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function TextureManager_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TextureManager_ownKeys(Object(source), !0).forEach(function (key) { TextureManager_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TextureManager_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function TextureManager_defineProperty(obj, key, value) { key = TextureManager_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function TextureManager_toPropertyKey(arg) { var key = TextureManager_toPrimitive(arg, "string"); return TextureManager_typeof(key) === "symbol" ? key : String(key); }
function TextureManager_toPrimitive(input, hint) { if (TextureManager_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (TextureManager_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function TextureManager_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = TextureManager_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function TextureManager_slicedToArray(arr, i) { return TextureManager_arrayWithHoles(arr) || TextureManager_iterableToArrayLimit(arr, i) || TextureManager_unsupportedIterableToArray(arr, i) || TextureManager_nonIterableRest(); }
function TextureManager_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TextureManager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TextureManager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TextureManager_arrayLikeToArray(o, minLen); }
function TextureManager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TextureManager_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function TextureManager_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var validFormats = ['image/png', 'image/gif', 'image/jpeg'];
var TextureManager_TextureManager = function TextureManager(_ref) {
  var regularTextures = _ref.regularTextures,
    customTextures = _ref.customTextures,
    setCustomTextures = _ref.setCustomTextures;
  var _useState = Object(hooks_module["e" /* useState */])(false),
    _useState2 = TextureManager_slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  var loadFiles = Object(hooks_module["a" /* useCallback */])( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (files) {
      var newMapping = {};
      var _iterator = TextureManager_createForOfIteratorHelper(files),
        _step;
      try {
        var _loop = function* _loop() {
          var file = _step.value;
          if (!validFormats.includes(file.type)) {
            return "continue";
          }
          var updateMapping = function updateMapping(image) {
            var fileBasename = file.name.replace(/^.*[\\\/]/, '').replace(/\.[^/.]+$/, '');
            newMapping[fileBasename] = {
              type: 'html',
              image: image
            };
          };
          yield io_utils["a" /* IoUtils */].loadDataUrl(file).then(io_utils["a" /* IoUtils */].createImageFromDataUrl).then(updateMapping).catch(console.error);
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = yield* _loop();
          if (_ret === "continue") continue;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      setCustomTextures(TextureManager_objectSpread(TextureManager_objectSpread({}, customTextures), newMapping));
    });
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }(), [customTextures, setCustomTextures]);
  var fileInput = Object(external_preact_["h"])("input", {
    type: "file",
    multiple: true,
    accept: validFormats.join(', '),
    disabled: isLoading,
    onChange: function onChange(ev) {
      if (isLoading) {
        ev.currentTarget.value = '';
        return;
      }
      var files = ev.currentTarget.files;
      if (files !== null) {
        setIsLoading(true);
        loadFiles(files).finally(function () {
          setIsLoading(false);
        });
      }
      ev.currentTarget.value = '';
    }
  });
  return Object(external_preact_["h"])("div", {
    class: "flex flex-col max-h-full overflow-hidden"
  }, Object(external_preact_["h"])("div", {
    class: "text-center font-bold mb-2"
  }, "Custom Textures"), Object(external_preact_["h"])("div", {
    class: "grow overflow-auto px-6"
  }, Object(external_preact_["h"])(textures_TextureList, {
    textures: customTextures,
    setTextures: setCustomTextures
  })), Object(external_preact_["h"])("div", {
    className: "px-6 mt-2"
  }, fileInput), Object(external_preact_["h"])("div", {
    class: "mb-6"
  }), Object(external_preact_["h"])("div", {
    class: "text-center font-bold mb-2"
  }, "TAK Textures"), Object(external_preact_["h"])("div", {
    class: "grow overflow-auto px-6"
  }, Object(external_preact_["h"])(textures_TextureList, {
    textures: regularTextures
  })));
};
/* harmony default export */ var textures_TextureManager = (TextureManager_TextureManager);
// CONCATENATED MODULE: ./components/Main.tsx
function Main_typeof(obj) { "@babel/helpers - typeof"; return Main_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Main_typeof(obj); }
function Main_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Main_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Main_ownKeys(Object(source), !0).forEach(function (key) { Main_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Main_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Main_defineProperty(obj, key, value) { key = Main_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Main_toPropertyKey(arg) { var key = Main_toPrimitive(arg, "string"); return Main_typeof(key) === "symbol" ? key : String(key); }
function Main_toPrimitive(input, hint) { if (Main_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Main_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Main_slicedToArray(arr, i) { return Main_arrayWithHoles(arr) || Main_iterableToArrayLimit(arr, i) || Main_unsupportedIterableToArray(arr, i) || Main_nonIterableRest(); }
function Main_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Main_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Main_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Main_arrayLikeToArray(o, minLen); }
function Main_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Main_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Main_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CONTENT_WIDTH = '1600px';
var SIDEBAR_TABS = ['options', 'objects', 'textures'];
var Main_Main = function Main(_ref) {
  var engineName = _ref.engineName,
    shaders = _ref.shaders,
    object3doTree = _ref.object3doTree,
    regularTextures = _ref.regularTextures,
    defaultObjStateMap = _ref.defaultObjStateMap,
    logoDefs = _ref.logoDefs,
    userService = _ref.userService,
    defaultUserSettings = _ref.defaultUserSettings,
    defaultModelControls = _ref.defaultModelControls;
  console.log('Re-rendering App');

  //:: States & Refs

  var _useState = Object(hooks_module["e" /* useState */])(false),
    _useState2 = Main_slicedToArray(_useState, 2),
    expandContent = _useState2[0],
    setExpandContent = _useState2[1];
  var _useState3 = Object(hooks_module["e" /* useState */])('options'),
    _useState4 = Main_slicedToArray(_useState3, 2),
    sidebarTab = _useState4[0],
    setSidebarTab = _useState4[1];
  var _useState5 = Object(hooks_module["e" /* useState */])(defaultModelControls),
    _useState6 = Main_slicedToArray(_useState5, 2),
    modelControls = _useState6[0],
    _setModelControls = _useState6[1];
  var _useState7 = Object(hooks_module["e" /* useState */])(defaultObjStateMap),
    _useState8 = Main_slicedToArray(_useState7, 2),
    objStateMap = _useState8[0],
    _setObjStateMap = _useState8[1];
  var _useState9 = Object(hooks_module["e" /* useState */])(),
    _useState10 = Main_slicedToArray(_useState9, 2),
    engine = _useState10[0],
    setEngine = _useState10[1];
  var _useState11 = Object(hooks_module["e" /* useState */])(defaultUserSettings),
    _useState12 = Main_slicedToArray(_useState11, 2),
    userSettings = _useState12[0],
    _setUserSettings = _useState12[1];
  var setUserSettings = Object(hooks_module["a" /* useCallback */])(function (newUserSettings) {
    _setUserSettings(newUserSettings);
    userService.save(newUserSettings);
  }, [userService]);
  var _useState13 = Object(hooks_module["e" /* useState */])({}),
    _useState14 = Main_slicedToArray(_useState13, 2),
    customTextures = _useState14[0],
    _setCustomTextures = _useState14[1];
  var canvasRef = Object(hooks_module["d" /* useRef */])();

  //:: Effects

  Object(hooks_module["b" /* useEffect */])(function () {
    var canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    console.log('Creating the Engine');
    var engineListener = {
      onModelControlsChanged: _setModelControls
    };
    var engineConfig = {
      mode: 'static',
      canvas: canvas,
      modelControls: defaultModelControls,
      listener: engineListener,
      textureMapping: Main_objectSpread({}, regularTextures),
      objStateMap: defaultObjStateMap,
      preserveDrawingBuffer: defaultUserSettings.preserveDrawingBuffer
    };
    var engine = engineName === 'webgl' ? new webgl_engine_WebglEngine(engineConfig, shaders, object3doTree, logoDefs) : new UiDebugEngine(engineConfig);
    setEngine(engine);
    return function () {
      engine.destroy();
      setEngine(undefined);
      alert("Unmounting the engine. This should probably not be happening normally!!!");
    };
    // \/ important: all dependencies should come from non-stateful values: AKA never change
  }, [canvasRef, shaders, defaultObjStateMap, engineName, object3doTree, regularTextures, logoDefs, defaultModelControls, defaultUserSettings]);
  Object(hooks_module["b" /* useEffect */])(function () {
    var canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    canvas.style.background = modelControls.canvasBackground;
    canvas.style.backgroundSize = modelControls.canvasBackgroundSize;
    canvas.style.backgroundRepeat = modelControls.canvasBackgroundRepeat;
    canvas.style.backgroundPosition = 'center';
  }, [canvasRef, modelControls]);

  //:: Memos

  var canvasWrapper = Object(hooks_module["c" /* useMemo */])(function () {
    return Object(external_preact_["h"])(canvas_CanvasWrapper, {
      canvasRef: canvasRef
    });
  }, [canvasRef]);
  var canvasPanel = Object(hooks_module["c" /* useMemo */])(function () {
    return Object(external_preact_["h"])("div", {
      class: "h-full flex flex-col"
    }, Object(external_preact_["h"])("div", {
      class: "flex text-white border-b border-gray-700"
    }, Object(external_preact_["h"])("div", {
      class: "grow px-4 py-4 text-center"
    }, "Canvas"), Object(external_preact_["h"])("div", {
      class: "px-4 py-4 cursor-pointer hover:bg-blue-700 font-mono",
      onClick: function onClick() {
        return setExpandContent(!expandContent);
      }
    }, expandContent ? '>[ ]<' : '<[ ]>')), Object(external_preact_["h"])("div", {
      class: "grow p-6"
    }, canvasWrapper));
  }, [canvasWrapper, expandContent]);
  var optionsPanel = Object(hooks_module["c" /* useMemo */])(function () {
    return Object(external_preact_["h"])(Options["a" /* default */], {
      modelControls: modelControls,
      setModelControls: function setModelControls(newModelControls) {
        _setModelControls(newModelControls);
        if (newModelControls.textureFilterMin !== modelControls.textureFilterMin || newModelControls.textureFilterMag !== modelControls.textureFilterMag) {
          setUserSettings(Main_objectSpread(Main_objectSpread({}, userSettings), {}, {
            defaultTextureFilterMin: newModelControls.textureFilterMin,
            defaultTextureFilterMag: newModelControls.textureFilterMag
          }));
        }
        if (engine) {
          engine.setModelControls(newModelControls);
        }
      },
      userSettings: userSettings,
      setUserSettings: setUserSettings,
      logoDefs: logoDefs,
      canvasRef: canvasRef
    });
  }, [engine, modelControls, userSettings, setUserSettings, logoDefs, canvasRef]);
  var objectsPanel = Object(hooks_module["c" /* useMemo */])(function () {
    return Object(external_preact_["h"])(object_list_ObjectList, {
      object3doTree: object3doTree,
      objStateMap: objStateMap,
      setObjStateMap: function setObjStateMap(newObjStateMap) {
        _setObjStateMap(newObjStateMap);
        if (engine) {
          engine.setObjectStateMap(newObjStateMap);
        }
      }
    });
  }, [engine, object3doTree, objStateMap]);
  var texturesPanel = Object(hooks_module["c" /* useMemo */])(function () {
    return Object(external_preact_["h"])(textures_TextureManager, {
      regularTextures: regularTextures,
      customTextures: customTextures,
      setCustomTextures: function setCustomTextures(newCustomTextures) {
        if (engine) {
          engine.setTextureMapping(Main_objectSpread(Main_objectSpread({}, regularTextures), newCustomTextures));
        }
        _setCustomTextures(newCustomTextures);
      }
    });
  }, [engine, customTextures, regularTextures]);
  var sidebar = Object(hooks_module["c" /* useMemo */])(function () {
    return Object(external_preact_["h"])("div", {
      class: "h-full flex flex-col"
    }, Object(external_preact_["h"])("div", {
      class: "flex text-white border-b border-gray-700"
    }, SIDEBAR_TABS.map(function (tab, index, arr) {
      var isSelected = tab === sidebarTab;
      var seletedCss = isSelected ? 'font-bold' : 'cursor-pointer text-gray-400 hover:text-white';
      var borderCss = index !== arr.length - 1 ? 'border-r border-gray-700' : '';
      return Object(external_preact_["h"])("div", {
        key: index,
        class: "grow basis-0 px-2 py-4 text-center ".concat(seletedCss, " ").concat(borderCss),
        onClick: function onClick() {
          if (!isSelected) {
            setSidebarTab(tab);
          }
        }
      }, tab === 'options' ? 'Options' : tab === 'objects' ? 'Objects' : 'Textures');
    })), Object(external_preact_["h"])("div", {
      class: "grow max-h-full overflow-hidden py-6",
      style: {
        width: userSettings.sidebarWidth,
        overflowX: 'auto'
      }
    }, sidebarTab === 'options' ? optionsPanel : sidebarTab === 'objects' ? objectsPanel : texturesPanel));
  }, [sidebarTab, optionsPanel, userSettings, objectsPanel, texturesPanel]);

  //:: Final result

  var contentBorderCss = expandContent ? ' border-gray-800' : ' border-gray-700';
  var flexDirCss = userSettings.sidebarPosition === 'left' ? '' : ' flex-row-reverse';
  var sidebarBorderCss = userSettings.sidebarPosition === 'left' ? ' border-r' : ' border-l';
  return Object(external_preact_["h"])("div", {
    class: "flex justify-center items-stretch h-screen overflow-hidden bg-gray-900"
  }, Object(external_preact_["h"])("div", {
    class: "grow flex bg-gray-800 border ".concat(contentBorderCss, " ").concat(flexDirCss),
    style: {
      "max-width": expandContent ? '100%' : CONTENT_WIDTH
    }
  }, Object(external_preact_["h"])("div", {
    class: "hidden lg:block border-gray-700 ".concat(sidebarBorderCss)
  }, sidebar), Object(external_preact_["h"])("div", {
    class: "grow"
  }, canvasPanel)));
};
/* harmony default export */ var components_Main = (Main_Main);
// CONCATENATED MODULE: ./components/loader/Loader.tsx
function Loader_typeof(obj) { "@babel/helpers - typeof"; return Loader_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Loader_typeof(obj); }
function Loader_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function Loader_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Loader_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Loader_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Loader_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = Loader_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function Loader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Loader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Loader_ownKeys(Object(source), !0).forEach(function (key) { Loader_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Loader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Loader_defineProperty(obj, key, value) { key = Loader_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Loader_toPropertyKey(arg) { var key = Loader_toPrimitive(arg, "string"); return Loader_typeof(key) === "symbol" ? key : String(key); }
function Loader_toPrimitive(input, hint) { if (Loader_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Loader_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Loader_slicedToArray(arr, i) { return Loader_arrayWithHoles(arr) || Loader_iterableToArrayLimit(arr, i) || Loader_unsupportedIterableToArray(arr, i) || Loader_nonIterableRest(); }
function Loader_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Loader_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Loader_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Loader_arrayLikeToArray(o, minLen); }
function Loader_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Loader_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function Loader_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Loader_Loader = function Loader(_ref) {
  var dataSource = _ref.dataSource,
    userService = _ref.userService,
    defaultUserSettings = _ref.defaultUserSettings,
    defaultModelControls = _ref.defaultModelControls;
  var _useState = Object(hooks_module["e" /* useState */])(),
    _useState2 = Loader_slicedToArray(_useState, 2),
    result = _useState2[0],
    setResult = _useState2[1];
  var _useState3 = Object(hooks_module["e" /* useState */])(),
    _useState4 = Loader_slicedToArray(_useState3, 2),
    shaders = _useState4[0],
    setShaders = _useState4[1];
  var _useState5 = Object(hooks_module["e" /* useState */])(),
    _useState6 = Loader_slicedToArray(_useState5, 2),
    textures = _useState6[0],
    setTextures = _useState6[1];
  var _useState7 = Object(hooks_module["e" /* useState */])(),
    _useState8 = Loader_slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var logoDefs = defaultLogoColorsDefinitions;

  // TODO move this up in the component tree since shaders can be loaded BEFORE the user selects a
  // dataSource
  Object(hooks_module["b" /* useEffect */])(function () {
    loadShaders().then(setShaders);
  }, []);
  Object(hooks_module["b" /* useEffect */])(function () {
    loadModel(dataSource).then(function (res) {
      setResult(res);
      return loadTextures(res, logoDefs, 'assets/custom/pngs/', 'png');
    }).then(setTextures).catch(setError);
  }, [dataSource]);
  if (error !== undefined) {
    return Object(external_preact_["h"])("div", {
      class: "min-w-screen min-h-screen flex flex-col justify-center items-center text-3xl\r bg-black"
    }, Object(external_preact_["h"])("div", {
      class: "text-red-300"
    }, "Error!"), Object(external_preact_["h"])("div", {
      class: "text-red-600"
    }, "(TODO)"), Object(external_preact_["h"])("div", {
      class: "text-red-600"
    }, JSON.stringify(error)));
  }
  if (result === undefined || shaders === undefined || textures === undefined) {
    var message = 'Loading...';
    if (result && shaders) {
      message = 'Loading textures...';
    }
    return Object(external_preact_["h"])("div", {
      class: "min-w-screen min-h-screen flex justify-center items-center text-3xl bg-black"
    }, Object(external_preact_["h"])("span", {
      class: "text-gray-400"
    }, message));
  }
  var allTexturesFailed = Object(hooks_module["c" /* useMemo */])(function () {
    return Object.values(textures).every(function (value) {
      return value === null;
    });
  }, [textures]);
  return Object(external_preact_["h"])(components_Main, {
    engineName: "webgl",
    object3doTree: result,
    shaders: shaders,
    regularTextures: textures,
    defaultObjStateMap: createStateMap(result),
    logoDefs: logoDefs,
    userService: userService,
    defaultUserSettings: defaultUserSettings,
    defaultModelControls: Loader_objectSpread(Loader_objectSpread({}, defaultModelControls), {}, {
      viewMode: allTexturesFailed ? 'wireframe' : defaultModelControls.viewMode
    })
  });
};
/* harmony default export */ var loader_Loader = (Loader_Loader);
function createStateMap(object3doTree) {
  var result = new Map();
  var next = function next(node) {
    result.set(node, {
      highlight: false,
      hide: false
    });
    var _iterator = Loader_createForOfIteratorHelper(node.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        next(child);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  var _iterator2 = Loader_createForOfIteratorHelper(object3doTree.rootNodes),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var rootChild = _step2.value;
      next(rootChild);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
}
function loadShaders() {
  return _loadShaders.apply(this, arguments);
}
function _loadShaders() {
  _loadShaders = Loader_asyncToGenerator(function* () {
    return {
      regular: {
        fsSource: yield fetch('assets/shaders/regular.fs').then(function (res) {
          return res.text();
        }),
        vsSource: yield fetch('assets/shaders/regular.vs').then(function (res) {
          return res.text();
        })
      },
      solid: {
        fsSource: yield fetch('assets/shaders/solid_color.fs').then(function (res) {
          return res.text();
        }),
        vsSource: yield fetch('assets/shaders/solid_color.vs').then(function (res) {
          return res.text();
        })
      },
      wireframe: {
        fsSource: yield fetch('assets/shaders/wireframe.fs').then(function (res) {
          return res.text();
        }),
        vsSource: yield fetch('assets/shaders/wireframe.vs').then(function (res) {
          return res.text();
        })
      }
    };
  });
  return _loadShaders.apply(this, arguments);
}
function loadModel(_x2) {
  return _loadModel.apply(this, arguments);
}
function _loadModel() {
  _loadModel = Loader_asyncToGenerator(function* (dataSource) {
    var data;
    if (typeof dataSource === 'string') {
      var response = yield fetch(dataSource);
      data = yield response.arrayBuffer();
    } else {
      data = yield dataSource.arrayBuffer();
    }
    var view = new DataView(data);
    return dist["Parse3do"].fromBuffer(view);
  });
  return _loadModel.apply(this, arguments);
}
function loadTextures(_x3, _x4, _x5, _x6) {
  return _loadTextures.apply(this, arguments);
}
function _loadTextures() {
  _loadTextures = Loader_asyncToGenerator(function* (tree, logoDefs, basePath, fileExtension) {
    var textureNames = new Set();
    var loadNext = function loadNext(node) {
      var _iterator3 = Loader_createForOfIteratorHelper(node.primitives),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var primitive = _step3.value;
          var textureName = primitive.textureName;
          if (Utils.validateTextureName(textureName)) {
            textureNames.add(textureName);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = Loader_createForOfIteratorHelper(node.children),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var child = _step4.value;
          loadNext(child);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    };
    var _iterator5 = Loader_createForOfIteratorHelper(tree.rootNodes),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var rootNode = _step5.value;
        loadNext(rootNode);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    var result = {};
    yield Promise.all(Array.from(textureNames).map(function (textureName) {
      return new Promise(function (resolve, reject) {
        textureName = textureName.trim();
        if (textureName === '') {
          result[textureName] = null;
          resolve();
          return;
        }
        var usesLogo = logoDefs.textureKeyUsesLogo(textureName);
        if (!usesLogo) {
          var textureFilePath = "".concat(textureName, ".").concat(fileExtension);
          var image = new Image();
          image.src = basePath + textureFilePath;
          image.onerror = function () {
            console.error("Failed to load image at: ".concat(image.src));
            result[textureName] = null;
            resolve();
          };
          image.onload = function () {
            result[textureName] = {
              type: 'html',
              image: image
            };
            resolve();
          };
          return;
        }
        Promise.all(logoDefs.idxList.map(function (nextIdx) {
          return new Promise(function (resolveInner, _rejectInner) {
            var logoTextureName = logoDefs.idxToTextureKey(nextIdx, textureName);
            var textureFileName = logoDefs.idxToTextureFilename(nextIdx, textureName);
            var textureFilePath = "".concat(textureFileName, ".").concat(fileExtension);
            var image = new Image();
            image.src = basePath + textureFilePath;
            image.onerror = function () {
              console.error("Failed to load image at: ".concat(image.src));
              result[logoTextureName] = null;
              resolveInner();
            };
            image.onload = function () {
              result[logoTextureName] = {
                type: 'html',
                image: image
              };
              resolveInner();
            };
          });
        })).then(function () {
          return resolve();
        }, reject);
      });
    }));
    return result;
  });
  return _loadTextures.apply(this, arguments);
}
// CONCATENATED MODULE: ./components/App.tsx
function App_typeof(obj) { "@babel/helpers - typeof"; return App_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, App_typeof(obj); }
function App_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function App_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? App_ownKeys(Object(source), !0).forEach(function (key) { App_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : App_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function App_defineProperty(obj, key, value) { key = App_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function App_toPropertyKey(arg) { var key = App_toPrimitive(arg, "string"); return App_typeof(key) === "symbol" ? key : String(key); }
function App_toPrimitive(input, hint) { if (App_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (App_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function App_slicedToArray(arr, i) { return App_arrayWithHoles(arr) || App_iterableToArrayLimit(arr, i) || App_unsupportedIterableToArray(arr, i) || App_nonIterableRest(); }
function App_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function App_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return App_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return App_arrayLikeToArray(o, minLen); }
function App_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function App_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function App_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var App_App = function App() {
  var _useState = Object(hooks_module["e" /* useState */])(),
    _useState2 = App_slicedToArray(_useState, 2),
    dataSource = _useState2[0],
    setDataSource = _useState2[1]; // string = url

  var _useState3 = Object(hooks_module["e" /* useState */])(localStorageUserService),
    _useState4 = App_slicedToArray(_useState3, 1),
    userService = _useState4[0];
  var _useState5 = Object(hooks_module["e" /* useState */])(),
    _useState6 = App_slicedToArray(_useState5, 2),
    defaultUserSettings = _useState6[0],
    setDefaultUserSettings = _useState6[1];
  var _useState7 = Object(hooks_module["e" /* useState */])(),
    _useState8 = App_slicedToArray(_useState7, 2),
    defaultModelControls = _useState8[0],
    setDefaultModelControls = _useState8[1];
  Object(hooks_module["b" /* useEffect */])(function () {
    var userSettings;
    try {
      var _userService$load;
      userSettings = (_userService$load = userService.load()) !== null && _userService$load !== void 0 ? _userService$load : DEFAULT_USER_SETTINGS;
    } catch (err) {
      console.error(err);
      userSettings = DEFAULT_USER_SETTINGS;
      userService.save(userSettings);
    }
    setDefaultUserSettings(userSettings);
    setDefaultModelControls(App_objectSpread(App_objectSpread({}, DEFAULT_MODEL_CONTROLS), {}, {
      textureFilterMin: userSettings.defaultTextureFilterMin,
      textureFilterMag: userSettings.defaultTextureFilterMag
    }));
  }, [userService]);
  if (defaultUserSettings === undefined || defaultModelControls === undefined) {
    return Object(external_preact_["h"])("div", {
      class: "min-h-screen flex justify-center items-center"
    }, Object(external_preact_["h"])("span", null, "Loading..."));
  }
  if (dataSource === undefined) {
    return Object(external_preact_["h"])(loader_FileChooser, {
      onSubmit: setDataSource
    });
  }
  return Object(external_preact_["h"])(loader_Loader, {
    dataSource: dataSource,
    userService: userService,
    defaultUserSettings: defaultUserSettings,
    defaultModelControls: defaultModelControls
  });
};
/* harmony default export */ var components_App = (App_App);
// CONCATENATED MODULE: ./index.ts


/* harmony default export */ var index_0 = __webpack_exports__["default"] = (components_App);

/*
  Components will load like this:
  App -> FileChooser -> Loader -> Main
*/

/***/ }),

/***/ "qiYd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_ColorControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GssO");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var SolidColorOptions = function SolidColorOptions(_ref) {
  var modelControls = _ref.modelControls,
    setModelControls = _ref.setModelControls;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "space-y-4"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
    class: "flex items-center"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
    type: "checkbox",
    checked: modelControls.enableLightingSolidColor,
    onChange: function onChange(ev) {
      setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        enableLightingSolidColor: ev.currentTarget.checked
      }));
    }
  }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    class: "pl-1"
  }, "Enable Lighting"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: ""
  }, "Solid Color"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_ui_ColorControl__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    color: modelControls.solidColor,
    setColor: function setColor(solidColor) {
      return setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        solidColor: solidColor
      }));
    }
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (SolidColorOptions);

/***/ }),

/***/ "tpTz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
/* harmony import */ var _lib_io_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("u6ao");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var OptionsMisc = function OptionsMisc(_ref) {
  var modelControls = _ref.modelControls,
    setModelControls = _ref.setModelControls,
    enableSaveImageButton = _ref.enableSaveImageButton,
    canvasRef = _ref.canvasRef;
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "e"])(getInitialBg(modelControls.canvasBackground)),
    _useState2 = _slicedToArray(_useState, 2),
    canvasBg = _useState2[0],
    setCanvasBg = _useState2[1];
  var onChangeCanvasBg = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useCallback */ "a"])(function (value) {
    setCanvasBg(value);
    if (value !== 'custom') {
      setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
        canvasBackground: value
      }));
    }
  }, [modelControls, setModelControls]);
  var customBgFile = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "c"])(function () {
    if (canvasBg !== 'custom') {
      return null;
    }
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
      type: "file",
      multiple: false,
      onChange: function onChange(ev) {
        var files = ev.currentTarget.files;
        if (files === null || files.length === 0) {
          ev.currentTarget.value = '';
          return;
        }
        var file = files[0];
        _lib_io_utils__WEBPACK_IMPORTED_MODULE_2__[/* IoUtils */ "a"].loadDataUrl(file).then(function (dataUrl) {
          var imageUrl = "url(".concat(dataUrl, ")");
          setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
            canvasBackground: imageUrl
          }));
        });
      }
    });
  }, [canvasBg, modelControls, setModelControls]);
  var selectBgSize = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "c"])(function () {
    if (canvasBg !== 'custom') {
      return null;
    }
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Background Size"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
      class: "w-full",
      value: modelControls.canvasBackgroundSize,
      onChange: function onChange(ev) {
        setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
          canvasBackgroundSize: ev.currentTarget.value
        }));
      }
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "auto"
    }, "Auto"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "cover"
    }, "Cover"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "contain"
    }, "Contain")));
  }, [canvasBg, modelControls]);
  var selectBgRepeat = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "c"])(function () {
    if (canvasBg !== 'custom' || modelControls.canvasBackgroundSize === 'cover') {
      return null;
    }
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Background Repeat"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
      class: "w-full",
      value: modelControls.canvasBackgroundRepeat,
      onChange: function onChange(ev) {
        setModelControls(_objectSpread(_objectSpread({}, modelControls), {}, {
          canvasBackgroundRepeat: ev.currentTarget.value
        }));
      }
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "repeat"
    }, "On"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
      value: "no-repeat"
    }, "Off")));
  }, [canvasBg, modelControls]);
  var saveCanvasImage = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useCallback */ "a"])(function () {
    var canvas = canvasRef.current;
    if (canvas === undefined) {
      return;
    }
    var dataURL = canvas.toDataURL();
    var downloadLink = document.createElement('a');
    var timestamp = new Date().getTime();
    downloadLink.href = dataURL;
    downloadLink.download = "3do-".concat(timestamp, ".png");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, [canvasRef]);
  var saveImageButton = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useMemo */ "c"])(function () {
    if (!enableSaveImageButton) {
      return null;
    }
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "text-center"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
      class: "text-white hover:text-yellow-500 focus:text-yellow-500",
      onClick: saveCanvasImage
    }, "Save Model Image"));
  }, [enableSaveImageButton, saveCanvasImage]);
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "space-y-4"
  }, saveImageButton, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Canvas Background", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("select", {
    class: "w-full",
    value: canvasBg,
    onChange: function onChange(ev) {
      return onChangeCanvasBg(ev.currentTarget.value);
    }
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "transparent"
  }, "Transparent"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "black"
  }, "Black"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "white"
  }, "White"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("option", {
    value: "custom"
  }, "(Custom Image)")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
    class: "mt-0.5"
  }, customBgFile)), selectBgSize, selectBgRepeat);
};
/* harmony default export */ __webpack_exports__["a"] = (OptionsMisc);
function getInitialBg(canvasBg) {
  if (canvasBg === 'black' || canvasBg === 'white' || canvasBg === 'transparent') {
    return canvasBg;
  }
  return 'custom';
}

/***/ }),

/***/ "u6ao":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IoUtils; });
function loadDataUrl(file) {
  var fileReader = new FileReader();
  var loadDataUrlPromise = new Promise(function (resolve, reject) {
    fileReader.onload = function () {
      var result = fileReader.result;
      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error("Failed to read file: ".concat(file.name)));
      }
    };
    fileReader.onerror = function () {
      reject(new Error("Failed to read file: ".concat(file.name)));
    };
  });
  fileReader.readAsDataURL(file);
  return loadDataUrlPromise;
}
function createImageFromDataUrl(dataUrl) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload = function () {
      resolve(image);
    };
    image.onerror = function () {
      reject(new Error("Failed to create image for dataUrl: ".concat(dataUrl)));
    };
    image.src = dataUrl;
  });
}
var IoUtils = {
  loadDataUrl: loadDataUrl,
  createImageFromDataUrl: createImageFromDataUrl
};

/***/ }),

/***/ "weEs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRIMITIVE_STRUCT_SIZE = exports.PRIMITIVE_STRUCT = exports.VERTEX_STRUCT_SIZE = exports.VERTEX_STRUCT = exports.OBJECT_STRUCT_SIZE = exports.OBJECT_STRUCT = void 0;
exports.OBJECT_STRUCT = [['VersionSignature', 'U32'], ['NumberOfVertexes', 'U32'], ['NumberOfPrimitives', 'U32'], ['UnknownFlag', 'U32'], ['XFromParent', 'U32'], ['YFromParent', 'U32'], ['ZFromParent', 'U32'], ['OffsetToObjectName', 'U32'], ['Always_0', 'U32'], ['OffsetToVertexArray', 'U32'], ['OffsetToPrimitiveArray', 'U32'], ['OffsetToSiblingObject', 'U32'], ['OffsetToChildObject', 'U32']];
// IMPORTANT: * 4 only because coincidentally every field is an U32 (4 bytes)
exports.OBJECT_STRUCT_SIZE = exports.OBJECT_STRUCT.length * 4;
exports.VERTEX_STRUCT = [['x', 'U32'], ['y', 'U32'], ['z', 'U32']];
// IMPORTANT: * 4 only because coincidentally every field is an U32 (4 bytes)
exports.VERTEX_STRUCT_SIZE = exports.VERTEX_STRUCT.length * 4;
exports.PRIMITIVE_STRUCT = [['Unknown_0', 'U32'], ['NumberOfVertexIndexes', 'U32'], ['Always_0', 'U32'], ['OffsetToVertexIndexArray', 'U32'], ['OffsetToTextureName', 'U32'], ['Unknown_1', 'U32'], ['Unknown_2', 'U32'], ['Unknown_3', 'U32']];
// IMPORTANT: * 4 only because coincidentally every field is an U32 (4 bytes)
exports.PRIMITIVE_STRUCT_SIZE = exports.PRIMITIVE_STRUCT.length * 4;

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map