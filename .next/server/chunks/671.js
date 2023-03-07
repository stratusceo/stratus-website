"use strict";
exports.id = 671;
exports.ids = [671];
exports.modules = {

/***/ 6885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-large-black.19fbb3ec.svg","height":77,"width":293,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 8671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(4287);
var external_gsap_default = /*#__PURE__*/__webpack_require__.n(external_gsap_);
;// CONCATENATED MODULE: ./static/images/navbar-image.webp
/* harmony default export */ const navbar_image = ({"src":"/_next/static/media/navbar-image.498c3491.webp","height":667,"width":516,"blurDataURL":"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADwAQCdASoGAAgAAkA4JZACdGuAAswQwOoA/buzcUp2rFu41VHs089Y4UNhU2P8dbT0eX8Qx71IAAAA","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./static/images/logo-large-black.svg
var logo_large_black = __webpack_require__(6885);
;// CONCATENATED MODULE: ./static/images/hamburger-icon.svg
/* harmony default export */ const hamburger_icon = ({"src":"/_next/static/media/hamburger-icon.bbdae458.svg","height":52,"width":78,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./pages/components/Navbar.jsx








const CloseNavbar = ()=>{
    // handle hide
    const timeline = external_gsap_default().timeline();
    timeline.to("section.navbar div.element a", {
        y: "100%",
        ease: "power4.out",
        duration: 0.8,
        stagger: 0.1
    }, 0);
    timeline.to("section.navbar p", {
        y: "100%",
        ease: "power4.out",
        duration: 0.4,
        stagger: 0.1
    }, 0);
    // create a form
    timeline.to("section.navbar hr", {
        width: "0",
        ease: "power4.out",
        duration: 0.8,
        stagger: 0.1
    }, 0);
    timeline.to("section.navbar img", {
        height: "0%",
        ease: "power4.out",
        duration: 0.8
    }, 0.4);
    timeline.to("section.navbar", {
        y: "-100vh",
        ease: "power4.inOut",
        duration: 1,
        onComplete: ()=>{
            document.querySelector("section.navbar").classList.remove("show");
            document.querySelector("section.navbar img").style.height = "0";
            document.querySelector("section.navbar div.gray-divider").style.height = "0";
            document.querySelectorAll("section.navbar div.links a").forEach((element)=>element.style.transform = "translateY(-100%)");
        }
    }, 0.6);
};
function Navbar() {
    const hamburgerButtonRef = (0,external_react_.useRef)();
    const buttonsArray = [
        {
            name: "home",
            href: "/"
        },
        {
            name: "work",
            href: "/work"
        },
        {
            name: "blog",
            href: "/blog"
        },
        {
            name: "about",
            href: "/about"
        }
    ];
    const handleNavbar = (e)=>{
        e.preventDefault();
        if (document.querySelector("section.navbar").classList.contains("show")) {
            CloseNavbar();
        } else {
            // handle show
            const timeline = external_gsap_default().timeline();
            timeline.to("section.navbar", {
                y: 0,
                ease: "power4.out",
                duration: 1,
                onComplete: ()=>document.querySelector("section.navbar").classList.add("show")
            }, 0);
            timeline.to("section.navbar div.links a", {
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.1
            }, 0.1);
            timeline.to("section.navbar hr", {
                width: "100%",
                ease: "power4.out",
                duration: 0.8,
                stagger: 0.1
            }, 0.1);
            timeline.to("section.navbar img", {
                height: "100%",
                ease: "power4.out",
                duration: 0.8
            }, 0.4);
            timeline.to("section.navbar div.gray-divider", {
                height: "100vh",
                ease: "power4.out",
                duration: 0.8
            }, 0.6);
            timeline.to("section.navbar p", {
                y: 0,
                ease: "power4.out",
                duration: 0.4,
                stagger: 0.1
            }, 0.6);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "navbar",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "links",
                                children: buttonsArray.map((x, i)=>/*#__PURE__*/ jsx_runtime_.jsx(ButtonElement, {
                                        options: x
                                    }, i))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: navbar_image,
                                alt: ""
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "gray-divider"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row copyrights",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "element",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Copyright \xa9 STRATUS"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "element",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.leonardomattar.com/",
                                    rel: "nopenner noreferrer",
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "\xa9 Leonardo Mattar"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "logo",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            onClick: CloseNavbar,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo_large_black/* default */.Z,
                                alt: "logo",
                                width: 130,
                                height: 77
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "WE BRING YOU TO WEB 3.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hamburger",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: handleNavbar,
                            ref: hamburgerButtonRef,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: hamburger_icon,
                                alt: "icon button",
                                width: 30,
                                height: 30
                            })
                        })
                    })
                ]
            })
        ]
    });
}
const ButtonElement = ({ options  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "element",
        children: [
            options.href.startsWith("http") ? /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: options.href,
                target: "_blank",
                rel: "noopener noreferrer",
                children: options.name
            }) : /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: options.href,
                onClick: CloseNavbar,
                children: options.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
        ]
    });
};


/***/ })

};
;