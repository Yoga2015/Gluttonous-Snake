/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.less */ \"./src/style/index.less\");\n/* harmony import */ var _moduls_GameControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/GameControl */ \"./src/moduls/GameControl.ts\");\n//引入样式\n // import Food from './moduls/Food';\n// import ScorePanel from './moduls/ScorePanel';\n// // 测试代码 Food类\n// const food = new Food();\n// console.log(food.x,food.y);\n// food.change();\n// console.log(food.x,food.y);\n// // 测试代码  ScorePanel类\n// const scorePanel = new ScorePanel(100,2);\n// for(let i=0; i<200; i++){\n//     scorePanel.addScore();\n// }\n\n\nvar gameControl = new _moduls_GameControl__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); // setInterval(()=>{\n//     console.log(gameControl.direction);\n// },1000);\n\n//# sourceURL=webpack://tsdemo/./src/index.ts?");

/***/ }),

/***/ "./src/moduls/Food.ts":
/*!****************************!*\
  !*** ./src/moduls/Food.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//定义食物类food\nvar Food = /*#__PURE__*/function () {\n  function Food() {\n    _classCallCheck(this, Food);\n\n    //获取页面中的food元素并将其赋值给element\n    this.element = document.getElementById('food');\n  } //2、定义一个获取到食物的坐标\n  // 定义一个获取食物 x轴坐标 的方法\n\n\n  _createClass(Food, [{\n    key: \"X\",\n    get: function get() {\n      return this.element.offsetLeft;\n    } //定义一个获取食物 y轴坐标 的方法\n\n  }, {\n    key: \"Y\",\n    get: function get() {\n      return this.element.offsetTop;\n    } //3、修改食物的位置\n\n  }, {\n    key: \"change\",\n    value: function change() {\n      //生成一个随机的位置\n      //食物的位置最小是 0，最大是290\n      //蛇移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整10\n      //这样就生成0到29之间的一个数字，然后对这个数字进行四舍五入取整，既包括0也包括29。然后整体乘于10\n      var top = Math.round(Math.random() * 29) * 10; //写死29 的话会降低扩展性，尽量不要使用字面量的情况\n\n      var left = Math.round(Math.random() * 29) * 10;\n      this.element.style.left = left + 'px';\n      this.element.style.top = top + 'px';\n    }\n  }]);\n\n  return Food;\n}(); // // 测试代码\n// const food = new Food();\n// console.log(food.x,food.y);\n// food.change();\n// console.log(food.x,food.y);\n//把 Food类 作为 默认模块 给它暴露出去   被导入用\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Food);\n\n//# sourceURL=webpack://tsdemo/./src/moduls/Food.ts?");

/***/ }),

/***/ "./src/moduls/GameControl.ts":
/*!***********************************!*\
  !*** ./src/moduls/GameControl.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Snake */ \"./src/moduls/Snake.ts\");\n/* harmony import */ var _Food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Food */ \"./src/moduls/Food.ts\");\n/* harmony import */ var _ScorePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScorePanel */ \"./src/moduls/ScorePanel.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//引入其他的类\n\n\n //游戏控制器 ，要控制其他的所有类\n\nvar GameControl = /*#__PURE__*/function () {\n  function GameControl() {\n    _classCallCheck(this, GameControl);\n\n    // 创建一个属性来存储蛇的移动方向(也就是按键的方向) ，初始就是空值\n    this.direction = ''; //一进入游戏是不会动的，按下“方向按键”后，根据“方向按键”方向移动\n    //创建一个属性用来记录游戏是否结束   相当于一个开关，负责记录游戏是否在进行当中。\n\n    this.isLive = true; //布尔值,默认值是true，也就是游戏没有结束\n\n    this.snake = new _Snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.food = new _Food__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.scorePanel = new _ScorePanel__WEBPACK_IMPORTED_MODULE_2__[\"default\"](10, 2);\n    this.init(); //怎么来调用初始化方法，就放在constructor中\n  } // 游戏的初始化方法，调用后游戏即开始\n\n\n  _createClass(GameControl, [{\n    key: \"init\",\n    value: function init() {\n      // 1、绑定键盘按键按下的事件    //第一个this 是指向 document\n      document.addEventListener('keydown', this.keydownHandler.bind(this)); //这里 bind的作用实际上是在创建一个新函数 ，把this绑定成 this.keydownHandler.bind(this)\n      // 调用 run方法，使蛇移动\n\n      this.run();\n    } //2、创建一个键盘按下的响应函数  ,返回的是字符串  (也就是按下按键后触发了那个执行方法)   记得兼容IE\n\n  }, {\n    key: \"keydownHandler\",\n    value: function keydownHandler(event) {\n      // console.log(event.key);    // ArrowDown  、 ArrowUp 、 ArrowRight 、 ArrowLeft\n      // console.log(this);\n      // 需要检查event.key的值是否合法（用户是否按了正确的按键）\n      //修改direction属性\n      this.direction = event.key;\n    } // 创建一个控制蛇移动的方法\n\n  }, {\n    key: \"run\",\n    value: function run() {\n      /*  根据方向（this.direction）来使蛇的位置改变\r\n       向上 top 减少\r\n       向下 top 增加\r\n       向左 left 减少\r\n       向右 left 增加 */\n      //获取蛇现在坐标   不能用常量 const\n      var X = this.snake.X;\n      var Y = this.snake.Y; // 根据按键的方向来修改X值和Y值\n\n      switch (this.direction) {\n        case \"ArrowUp\":\n        case \"Up\":\n          //向上移动 top 减少\n          Y -= 10;\n          break;\n\n        case \"ArrowDown\":\n        case \"Down\":\n          //向上移动 top 增加\n          Y += 10;\n          break;\n\n        case \"ArrowLeft\":\n        case \"Left\":\n          //向上移动 Left 减少\n          X -= 10;\n          break;\n\n        case \"ArrowRight\":\n        case \"Right\":\n          //向上移动 Left 增加\n          X += 10;\n          break;\n      } //检查蛇是否吃到了食物\n\n\n      this.checkEat(X, Y); // 修改蛇的X值和Y值\n\n      try {\n        this.snake.X = X;\n        this.snake.Y = Y;\n      } catch (e) {\n        //不进入catch ，就继续往下执行，\n        //进入到catch ，说明了异常，游戏结束，弹出一个提示信息\n        alert(e.message + 'Game Over!'); //将isLive设置为false\n\n        this.isLive = false;\n      } // 开启一个定时调用\n      // setTimeout(this.run,300);\n\n\n      this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30); //也就是当isLive = true的时候， 我才开启定时器，否则非\n    } //定义一个方法，用来检查蛇是否吃到食物  （通过蛇的坐标和食物的坐标是否重叠得知）\n\n  }, {\n    key: \"checkEat\",\n    value: function checkEat(X, Y) {\n      if (X === this.food.X && Y === this.food.Y) {\n        //食物的位置要进行重置\n        this.food.change(); // 分数增加\n\n        this.scorePanel.addScore(); // 蛇要增加一节\n\n        this.snake.addBody();\n      }\n\n      ;\n    }\n  }]);\n\n  return GameControl;\n}(); //把 GameControl类 作为 默认类 给它暴露出去  (被导入用)\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameControl);\n\n//# sourceURL=webpack://tsdemo/./src/moduls/GameControl.ts?");

/***/ }),

/***/ "./src/moduls/ScorePanel.ts":
/*!**********************************!*\
  !*** ./src/moduls/ScorePanel.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 定义表示记分牌 类\nvar ScorePanel = /*#__PURE__*/function () {\n  //表示默认值，如果你传参了，直接用你传的那个，你传80，我就用80，没传我就用默认值10\n  function ScorePanel() {\n    var maxLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n    var upScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n\n    _classCallCheck(this, ScorePanel);\n\n    // score和level 用来记录分数和等级\n    this.score = 0; //原本是以 private 方式写入 \n\n    this.level = 1;\n    this.scoreEle = document.getElementById('score'); //不给它为空\n\n    this.levelEle = document.getElementById('level');\n    this.maxLevel = maxLevel;\n    this.upScore = upScore;\n  } // 设置一个加分的方法\n\n\n  _createClass(ScorePanel, [{\n    key: \"addScore\",\n    value: function addScore() {\n      //1、使分数自增\n      this.scoreEle.innerHTML = ++this.score + ''; //2、判断分数是否超过10，超过10就提升等级\n\n      if (this.score % this.upScore === 0) {\n        this.levelUp();\n      }\n    } //提升等级的方法   这个是由分数来决定等级提升\n\n  }, {\n    key: \"levelUp\",\n    value: function levelUp() {\n      if (this.level < this.maxLevel) {\n        //写死10 的话会降低灵活性、扩展性，尽量不要使用字面量的情况\n        //使等级自增\n        this.levelEle.innerHTML = ++this.level + '';\n      }\n    }\n  }]);\n\n  return ScorePanel;\n}(); // // 测试代码\n// const scorePanel = new ScorePanel(100,2);\n// for(let i=0; i<200; i++){\n//     scorePanel.addScore();\n// }\n//把 ScorePanel类 作为 默认类 给它暴露出去   被导入用\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScorePanel);\n\n//# sourceURL=webpack://tsdemo/./src/moduls/ScorePanel.ts?");

/***/ }),

/***/ "./src/moduls/Snake.ts":
/*!*****************************!*\
  !*** ./src/moduls/Snake.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Snake = /*#__PURE__*/function () {\n  function Snake() {\n    _classCallCheck(this, Snake);\n\n    this.element = document.getElementById('snake');\n    this.head = document.querySelector('#snake>div');\n    this.bodies = this.element.getElementsByTagName('div');\n  } //蛇的坐标（蛇头坐标）\n  //3、 获取蛇的X轴坐标\n\n\n  _createClass(Snake, [{\n    key: \"X\",\n    get: function get() {\n      return this.head.offsetLeft;\n    } // 获取蛇的Y轴坐标\n    ,\n    set: //2、设置蛇的坐标\n    function set(value) {\n      // 如果新值和旧值相同，则直接返回不在修改\n      if (this.X === value) {\n        return;\n      } // X的值的合法范围0-290之间\n\n\n      if (value < 0 || value > 290) {\n        //进入判断说明蛇撞墙了,抛出一个异常，但实际上应该是提示用户游戏结束\n        throw new Error('蛇撞墙了');\n      } // 修改x时，是在修改水平x坐标, 蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然。\n\n\n      if (this.bodies[1] && this.bodies[1].offsetLeft === value) {\n        // console.log(\"水平方向发生掉头\");\n        // 如果发生了掉头，让蛇向反方向继续移动\n        if (value > this.X) {\n          //如果新值value 大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走\n          value = this.X - 10;\n        } else {\n          //向左走\n          value = this.X + 10;\n        }\n      } //移动身体\n\n\n      this.moveBody();\n      this.head.style.left = value + 'px'; // 检查有没有撞到自己\n\n      this.checkHeadBody();\n    }\n  }, {\n    key: \"Y\",\n    get: function get() {\n      return this.head.offsetTop;\n    },\n    set: function set(value) {\n      // 如果新值和旧值相同，则直接返回不在修改\n      if (this.Y === value) {\n        return;\n      } // X的值的合法范围0-290之间\n\n\n      if (value < 0 || value > 290) {\n        //进入判断说明蛇撞墙了,抛出一个异常，但实际上应该是提示用户游戏结束\n        throw new Error('蛇撞墙了');\n      } // 修改Y时，是在修改垂直Y坐标, 蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然。\n\n\n      if (this.bodies[1] && this.bodies[1].offsetTop === value) {\n        // console.log(\"水平方向发生掉头\");\n        // 如果发生了掉头，让蛇向反方向继续移动\n        if (value > this.Y) {\n          //如果新值value 大于旧值Y，则说明蛇在向上走，此时发生掉头，应该使蛇继续向下走\n          value = this.Y - 10;\n        } else {\n          //向下走\n          value = this.Y + 10;\n        }\n      } //移动身体\n\n\n      this.moveBody();\n      this.head.style.top = value + 'px'; // 检查有没有撞到自己\n\n      this.checkHeadBody();\n    } //4、蛇增加身体的方法\n\n  }, {\n    key: \"addBody\",\n    value: function addBody() {\n      //向element中添加一个div\n      this.element.insertAdjacentHTML(\"beforeend\", \"<div></div>\");\n    } //5、添加一个蛇身体移动的方法\n\n  }, {\n    key: \"moveBody\",\n    value: function moveBody() {\n      /*\r\n        将后边的身体设置为前边身体的位置\r\n          举个例子：\r\n              第4节===第3节位置\r\n              第3节===第2节位置\r\n              第2节===蛇头的位置\r\n       */\n      // 遍历前边身体的位置\n      for (var i = this.bodies.length - 1; i > 0; i--) {\n        //获取前边的身体的位置\n        var X = this.bodies[i - 1].offsetLeft;\n        var Y = this.bodies[i - 1].offsetTop; // 将值设置到当前身体上\n\n        this.bodies[i].style.left = X + 'px';\n        this.bodies[i].style.top = Y + 'px';\n      }\n    } //检查蛇头有没有撞到自己身体\n\n  }, {\n    key: \"checkHeadBody\",\n    value: function checkHeadBody() {\n      // 先来获取所有的身体，检查是否和蛇头的坐标发生重叠\n      for (var i = 1; i < this.bodies.length; i++) {\n        var bd = this.bodies[i];\n\n        if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {\n          //进入判断说明蛇头撞到了身体，游戏结束\n          throw new Error('撞到自己了');\n        }\n      }\n    }\n  }]);\n\n  return Snake;\n}(); //把 Snake类 作为 默认类 给它暴露出去 被导入用\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Snake);\n\n//# sourceURL=webpack://tsdemo/./src/moduls/Snake.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n}\\nbody {\\n  font: bold 20px \\\"Courier\\\";\\n}\\n#main {\\n  width: 360px;\\n  height: 420px;\\n  background-color: #b7d4a8;\\n  margin: 100px auto;\\n  border: 10px solid black;\\n  border-radius: 40px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-flow: column;\\n          flex-flow: column;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n}\\n#main #stage {\\n  width: 304px;\\n  height: 304px;\\n  border: 2px solid black;\\n  position: relative;\\n}\\n#main #stage #snake > div {\\n  width: 10px;\\n  height: 10px;\\n  background-color: #000;\\n  border: 1px solid #b7d4a8;\\n  position: absolute;\\n}\\n#main #stage #food {\\n  width: 10px;\\n  height: 10px;\\n  position: absolute;\\n  left: 40px;\\n  top: 100px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-flow: row wrap;\\n          flex-flow: row wrap;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -ms-flex-line-pack: justify;\\n      align-content: space-between;\\n}\\n#main #stage #food > div {\\n  width: 4px;\\n  height: 4px;\\n  background-color: #000;\\n  border: 1px solid #b7d4a8;\\n  -webkit-transform: rotate(45deg);\\n          transform: rotate(45deg);\\n}\\n#main #score-panel {\\n  width: 300px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-pack: distribute;\\n      justify-content: space-around;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tsdemo/./src/style/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://tsdemo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tsdemo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/index.less":
/*!******************************!*\
  !*** ./src/style/index.less ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/less-loader/dist/cjs.js!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/less-loader/dist/cjs.js!./src/style/index.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tsdemo/./src/style/index.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tsdemo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tsdemo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tsdemo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tsdemo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tsdemo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tsdemo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;