"use strict";
(() => {
var exports = {};
exports.id = 337;
exports.ids = [337,383];
exports.modules = {

/***/ 523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Work)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../.nvm/versions/node/v16.18.0/lib/node_modules/next/head.js
var head = __webpack_require__(7829);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ../../.nvm/versions/node/v16.18.0/lib/node_modules/next/image.js
var next_image = __webpack_require__(755);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./static/images/solidity-docs-work.webp
/* harmony default export */ const solidity_docs_work = ({"src":"/_next/static/media/solidity-docs-work.045f7f6e.webp","height":715,"width":580,"blurDataURL":"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACQAQCdASoGAAgAAkA4JaQAAvdX1XAA/vvHt2AleqTNiMEzPcrBkBH+fSGcdDULclKAAA==","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./static/images/mont-blanc-climate-change-work.webp
/* harmony default export */ const mont_blanc_climate_change_work = ({"src":"/_next/static/media/mont-blanc-climate-change-work.2d5f958a.webp","height":715,"width":580,"blurDataURL":"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoGAAgAAkA4JaQAAl19R2OAAP762qjgOPEarcPfOkEU47O3TKh9Iumd0H1beu4IAAA=","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./static/images/cirrus-work.webp
/* harmony default export */ const cirrus_work = ({"src":"/_next/static/media/cirrus-work.fcc92c1d.webp","height":715,"width":580,"blurDataURL":"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAAAwAQCdASoGAAgAAkA4JaQAA3AA/vrsrXstZ2M0+c1Qrz2/p9l4oAAA","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./static/images/netalys-work.webp
/* harmony default export */ const netalys_work = ({"src":"/_next/static/media/netalys-work.96671bad.webp","height":715,"width":580,"blurDataURL":"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAACwAQCdASoGAAgAAkA4JaQAApxZWyQAAP73b+Pf+7vgkEjHy5iPjp5vBETtPfGA77vNTQKJvrjvty0lma9cd3wMZegAAA==","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./static/images/light-node-work.webp
var light_node_work = __webpack_require__(4155);
// EXTERNAL MODULE: ./static/images/poap-work.webp
var poap_work = __webpack_require__(9326);
// EXTERNAL MODULE: ./static/images/meetuplyon-work.webp
var meetuplyon_work = __webpack_require__(2214);
// EXTERNAL MODULE: ./static/images/faucet-work.webp
var faucet_work = __webpack_require__(5677);
// EXTERNAL MODULE: ./static/images/tihar-work.webp
var tihar_work = __webpack_require__(5525);
// EXTERNAL MODULE: ./static/images/optimism-work.webp
var optimism_work = __webpack_require__(928);
// EXTERNAL MODULE: ./pages/components/CTA.jsx
var CTA = __webpack_require__(4230);
;// CONCATENATED MODULE: ./pages/work.jsx
















function Work() {
    (0,external_react_.useEffect)(()=>{
        const buttonsProjects = document.querySelectorAll("section.work div.element div.project-hover");
        // Projects hover animation
        buttonsProjects.forEach((button)=>{
            button.onmouseover = ()=>external_gsap_default().to(button, {
                    cursor: "pointer",
                    opacity: 1,
                    duration: 0.3
                });
            button.onmouseleave = ()=>external_gsap_default().to(button, {
                    cursor: "default",
                    opacity: 0,
                    duration: 0.3
                });
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "STRATUS - Work"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/static/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "work page",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "titles",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "RECENT WORK"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "COMPLETED PROJECTS"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "left",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: meetuplyon_work/* default */.Z,
                                            url: "https://www.linkedin.com/company/meetup-lyon/",
                                            date: 2023,
                                            title: "STRATUS X MEETUP LYON"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: tihar_work/* default */.Z,
                                            url: "https://tihar.webflow.io/",
                                            date: 2023,
                                            title: "STRATUS X TihAR"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: optimism_work/* default */.Z,
                                            url: "https://crowdin.com/project/optimism-help-center/fr",
                                            date: 2023,
                                            title: "OPTIMISM DOCUMENTATION"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: cirrus_work,
                                            url: "https://cirrus.stratusagency.io",
                                            date: 2022,
                                            title: "CIRRUS"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: mont_blanc_climate_change_work,
                                            url: "https://mont-blanc-climate-change.netlify.app",
                                            date: 2022,
                                            title: "MONT BLANC — CLIMATE CHANGE"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "right",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: faucet_work/* default */.Z,
                                            url: "https://faucet.stratusagency.io/",
                                            date: 2023,
                                            title: "G\xd6ERLI FAUCET"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: light_node_work/* default */.Z,
                                            url: "https://medium.com/@stratusagency/stratus-commits-to-the-development-of-web-3-0-677e82406537",
                                            date: 2023,
                                            title: "STRATUS commits to the development of Web 3.0"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: solidity_docs_work,
                                            url: "https://docs.soliditylang.org/fr/v0.8.11/",
                                            date: 2022,
                                            title: "SOLIDITY DOCUMENTATION"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: poap_work/* default */.Z,
                                            url: "https://app.poap.xyz/token/6246968",
                                            date: 2022,
                                            title: "ETHEREUM DOCUMENTATION"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(WorkElement, {
                                        options: {
                                            icon_url: netalys_work,
                                            url: "https://netalys-hexagon.netlify.app/",
                                            date: 2022,
                                            title: "NETALYS"
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CTA["default"], {})
        ]
    });
}
const WorkElement = ({ options  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "element",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: options.icon_url,
                alt: "",
                width: 620,
                height: 730
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: options.url,
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "project-hover",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "top",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: options.date
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "bottom",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: options.title
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 4287:
/***/ ((module) => {

module.exports = require("gsap");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [453,806,755,230,548], () => (__webpack_exec__(523)));
module.exports = __webpack_exports__;

})();