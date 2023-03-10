"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492,794];
exports.modules = {

/***/ 908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Post),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "markdown-it"
const external_markdown_it_namespaceObject = require("markdown-it");
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./pages/components/CTA.jsx
var CTA = __webpack_require__(352);
;// CONCATENATED MODULE: ./pages/blog/[slug].jsx








// The page for each post
function Post({ allPostsData  }) {
    const router = (0,router_namespaceObject.useRouter)();
    // Get the query parameter from the URL
    const [slug, setSlug] = (0,external_react_.useState)(router.query.slug);
    const allPostsDataCopy = allPostsData;
    const [load, setLoad] = (0,external_react_.useState)(false);
    const [widthBanner, setWidthBanner] = (0,external_react_.useState)();
    const [otherPostsData, setOtherPostsData] = (0,external_react_.useState)();
    const [content, setContent] = (0,external_react_.useState)(allPostsData.find((element)=>element.id === router.query.slug));
    const [html, setHTML] = (0,external_react_.useState)();
    const [description, setDescription] = (0,external_react_.useState)(`${content.post.replace(/\*\*|#|\n/g, "").slice(0, 150)}...`);
    (0,external_react_.useEffect)(()=>{
        setWidthBanner(window.innerWidth);
        if (!load) {
            if (content) {
                const md = new (external_markdown_it_default())({
                    html: true,
                    linkify: true,
                    typographer: true
                });
                setHTML(md.render(content.post));
                let str = content.post.replace(/\*\*|#|\n/g, "");
                setDescription(str.slice(0, 100));
                const indexPost = allPostsDataCopy.indexOf(content);
                allPostsDataCopy.splice(indexPost, 1);
                allPostsDataCopy.sort((a, b)=>{
                    if (new Date(a.date).getTime() < new Date(b.date).getTime()) return 1;
                    else return -1;
                });
                setOtherPostsData(allPostsDataCopy);
                setLoad(true);
            }
        }
    }, [
        load,
        content,
        allPostsData,
        slug,
        otherPostsData,
        allPostsDataCopy
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: content.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/static/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "title",
                        content: content.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://stratusagency.io/blog/${slug}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: content.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: content.bannerImage
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:url",
                        content: `https://stratusagency.io/blog/${slug}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:title",
                        content: content.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:description",
                        content: description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:image",
                        content: content.bannerImage
                    })
                ]
            }),
            load ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "post headline",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        children: content.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        children: content.date
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: content.bannerImage,
                                alt: "thumbnail",
                                width: widthBanner ? widthBanner : 0,
                                height: 700
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "post content",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "markdown",
                            dangerouslySetInnerHTML: {
                                __html: html
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "other-posts",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: "OTHER POSTS"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: otherPostsData.slice(0, 2).map(({ id , bannerImage , date , title  }, i)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `/blog/${id}`,
                                        onClick: ()=>{
                                            setSlug(id);
                                            setLoad(false);
                                            setContent(allPostsData.find((element)=>element.id === id));
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "post",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: bannerImage,
                                                    alt: "thumbnail",
                                                    width: 708,
                                                    height: 422
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "date",
                                                    children: date
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    className: "title",
                                                    children: title
                                                })
                                            ]
                                        })
                                    }, i))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CTA["default"], {})
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: content.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "markdown",
                        dangerouslySetInnerHTML: {
                            __html: html
                        }
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps() {
    const res = await fetch("https://api.stratusagency.io/posts-details");
    const allPostsData = await res.json();
    return {
        props: {
            allPostsData
        }
    };
}


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

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,443,675,352], () => (__webpack_exec__(908)));
module.exports = __webpack_exports__;

})();