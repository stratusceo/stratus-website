"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 8909:
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
// EXTERNAL MODULE: ../../.nvm/versions/node/v16.18.0/lib/node_modules/next/router.js
var next_router = __webpack_require__(5658);
;// CONCATENATED MODULE: external "markdown-it"
const external_markdown_it_namespaceObject = require("markdown-it");
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_namespaceObject);
// EXTERNAL MODULE: ../../.nvm/versions/node/v16.18.0/lib/node_modules/next/image.js
var next_image = __webpack_require__(755);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ../../.nvm/versions/node/v16.18.0/lib/node_modules/next/head.js
var head = __webpack_require__(7829);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ../../.nvm/versions/node/v16.18.0/lib/node_modules/next/link.js
var next_link = __webpack_require__(7492);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./pages/components/CTA.jsx
var CTA = __webpack_require__(4230);
;// CONCATENATED MODULE: ./pages/blog/[slug].jsx








// The page for each post
function Post({ allPostsData  }) {
    const router = (0,next_router.useRouter)();
    const [load, setLoad] = (0,external_react_.useState)(false);
    const [widthBanner, setWidthBanner] = (0,external_react_.useState)();
    const [otherPostsData, setOtherPostsData] = (0,external_react_.useState)();
    const [content, setContent] = (0,external_react_.useState)();
    // Get the query parameter from the URL
    const { slug  } = router.query;
    const allPostsDataCopy = allPostsData;
    const [html, setHTML] = (0,external_react_.useState)();
    const [description, setDescription] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        setWidthBanner(window.innerWidth);
        if (!load) {
            setContent(allPostsData.find((element)=>element.id === slug));
            if (content) {
                const md = new (external_markdown_it_default())({
                    html: true,
                    linkify: true,
                    typographer: true
                });
                setHTML(md.render(content.post));
                let str = content.post.replace(/\*\*|#|\n/g, "");
                ;
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
    return load ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
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
                        content: content.bannerImage
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
                        content: "https://cdn.discordapp.com/attachments/793382333339271178/1055180454900285540/icon_black.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "twitter:url",
                        content: content.bannerImage
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
                        content: "https://cdn.discordapp.com/attachments/793382333339271178/1055180454900285540/icon_black.jpg"
                    })
                ]
            }),
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
                                href: `/blog/${id}.html`,
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
    }) : undefined;
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

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1668:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 3773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/interpolate-as.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 4639:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/omit.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [453,806,755,591,543,230], () => (__webpack_exec__(8909)));
module.exports = __webpack_exports__;

})();