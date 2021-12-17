"use strict";
(() => {
var exports = {};
exports.id = 844;
exports.ids = [844];
exports.modules = {

/***/ 1342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  if (req.method === 'POST') {
    let {
      uid,
      enbale
    } = req.body; //console.log(uid)

    let users = [];
    _firebase_fbAdmin__WEBPACK_IMPORTED_MODULE_0__/* .default.auth */ .Z.auth().setCustomUserClaims(uid, {
      "ROLE": enbale ? "ADMIN_TNDFC" : "USER"
    }).then(() => {
      res.status(200).json({
        status: "SUCCESS",
        data: users
      });
    }).catch(error => {
      res.status(405).json({
        status: 'METHOD_NOT_SUPPORTED'
      });
    });
  } else {
    res.status(405).json({
      status: 'METHOD_NOT_SUPPORTED'
    });
  }
}

/***/ }),

/***/ 4054:
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("next/config");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [396], () => (__webpack_exec__(1342)));
module.exports = __webpack_exports__;

})();