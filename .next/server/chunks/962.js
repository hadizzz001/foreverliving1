exports.id = 962;
exports.ids = [962];
exports.modules = {

/***/ 17512:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76551))

/***/ }),

/***/ 49670:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 13259:
/***/ (() => {



/***/ }),

/***/ 36382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ useBooleanValue),
/* harmony export */   c: () => (/* binding */ BooleanProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ BooleanProvider,useBooleanValue auto */ 

const CartBoolContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const BooleanProvider = ({ children })=>{
    const [isBooleanValue, setBooleanValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartBoolContext.Provider, {
        value: {
            isBooleanValue,
            setBooleanValue
        },
        children: children
    });
};
const useBooleanValue = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartBoolContext);
};


/***/ }),

/***/ 51799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CartProvider),
/* harmony export */   j: () => (/* binding */ useCart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ CartProvider,useCart auto */ 

const CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const cartReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return action.payload; // Assuming action.payload is the updated cart array
        case "UPDATE_CART":
            return action.payload; // Assuming action.payload is the updated cart array
        case "REMOVE_FROM_CART":
            return state.filter((item)=>item.id !== action.payload);
        case "CLEAR_CART":
            return []; // Return an empty array to clear the cart
        default:
            return state;
    }
};
const CartProvider = ({ children })=>{
    const [cart, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(cartReducer, [], (initial)=>{
        if (false) {}
    });
    const [quantities, setQuantities] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        if (false) {}
    });
    const [subtotal, setSubtotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
        cart
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, [
        quantities
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Calculate subtotal whenever quantities change
        const newSubtotal = cart.reduce((acc, item)=>{
            const quantity = quantities[item.id] || 1;
            return acc + item.price * quantity;
        }, 0);
        setSubtotal(newSubtotal);
    }, [
        quantities,
        cart
    ]);
    const addToCart = (item, quantity = {})=>{
        const existingCartItemIndex = cart.findIndex((cartItem)=>String(cartItem.id) === String(item.id));
        if (existingCartItemIndex !== -1) {
            setQuantities((prevQuantities)=>({
                    ...prevQuantities,
                    [item.id]: (prevQuantities[item.id] || 0) + quantity
                }));
            dispatch({
                type: "UPDATE_CART",
                payload: cart.map((cartItem)=>String(cartItem.id) === String(item.id) ? {
                        ...cartItem,
                        quantity: (cartItem.quantity || 0) + quantity
                    } : cartItem)
            });
        } else {
            dispatch({
                type: "ADD_TO_CART",
                payload: [
                    ...cart,
                    {
                        ...item,
                        quantity
                    }
                ]
            });
            setQuantities((prevQuantities)=>({
                    ...prevQuantities,
                    [item.id]: quantity
                }));
        }
    };
    const removeFromCart = (itemId)=>{
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: itemId
        });
        setQuantities((prevQuantities)=>{
            const { [itemId]: removedItem, ...newQuantities } = prevQuantities;
            return newQuantities;
        });
    };
    const clearCart = ()=>{
        dispatch({
            type: "CLEAR_CART"
        });
        setQuantities({});
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartContext.Provider, {
        value: {
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            quantities,
            subtotal
        },
        children: children
    });
};
const useCart = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};



/***/ }),

/***/ 76551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./components/index.ts + 4 modules
var components = __webpack_require__(69135);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(71338);
// EXTERNAL MODULE: ./app/custom.css
var custom = __webpack_require__(96577);
// EXTERNAL MODULE: ./app/bootstrap.min.css
var bootstrap_min = __webpack_require__(84986);
// EXTERNAL MODULE: ./app/bs-select.css
var bs_select = __webpack_require__(56812);
// EXTERNAL MODULE: ./app/slick.css
var slick = __webpack_require__(38604);
// EXTERNAL MODULE: ./app/context/CartContext.js
var CartContext = __webpack_require__(51799);
// EXTERNAL MODULE: ./app/context/CartBoolContext.js
var CartBoolContext = __webpack_require__(36382);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
;// CONCATENATED MODULE: ./components/GifLoader.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

const GifLoader = ()=>{
    const [showGif, setShowGif] = (0,react_experimental_.useState)(true);
    (0,react_experimental_.useEffect)(()=>{
        const timeoutId = setTimeout(()=>{
            setShowGif(false);
        }, 2000);
        // Cleanup the timeout when the component unmounts
        return ()=>clearTimeout(timeoutId);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: showGif && /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "9999999999"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "5em",
                    zIndex: "9999999999"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/load.gif",
                    alt: "Loading"
                })
            })
        })
    });
};
/* harmony default export */ const components_GifLoader = (GifLoader);

;// CONCATENATED MODULE: ./app/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        className: "no-js no-touch supports-no-cookies",
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "text/html; charset=utf-8",
                        httpEquiv: "Content-Type"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "en",
                        httpEquiv: "Content-Language"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "IE=edge",
                        httpEquiv: "X-UA-Compatible"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "width=device-width, initial-scale=1, maximum-scale=1",
                        name: "viewport"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "max-image-preview:large",
                        name: "robots"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Forever Living"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "At Forever Living, we're reshaping the way businesses connect.",
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "Forever Living",
                        name: "keywords",
                        property: ""
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "Forever Living",
                        name: "",
                        property: "og:title"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "https://bellroy.com/collection/slim-your-wallet",
                        name: "",
                        property: "og:url"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "website",
                        name: "",
                        property: "og:type"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "At Forever Living, we're reshaping the way businesses connect.",
                        name: "",
                        property: "og:description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "/logo.png",
                        name: "",
                        property: "og:image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/favicon.ico",
                        rel: "apple-touch-icon",
                        sizes: "180x180"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/favicon.ico",
                        rel: "icon",
                        sizes: "32x32"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/favicon.ico",
                        rel: "icon",
                        sizes: "16x16"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "#ffffff",
                        name: "msapplication-TileColor"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: "#ffffff",
                        name: "theme-color"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://assets.bellroy.com",
                        rel: "preconnect"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://bellroy.imgix.net",
                        rel: "preconnect"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "css/webfonts-3e3c2400.css",
                        rel: "preload",
                        as: "style"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/webfonts-3e3c2400.css",
                        media: "print"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/style-4109db2b.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.cdnfonts.com/css/lato",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_GifLoader, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(CartBoolContext/* BooleanProvider */.c, {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CartContext/* CartProvider */.Z, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components/* Navbar2 */.lH, {}),
                                children,
                                /*#__PURE__*/ jsx_runtime_.jsx(components/* Footer */.$_, {})
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 69135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _h: () => (/* reexport */ components_CarCard),
  $_: () => (/* reexport */ components_Footer),
  lH: () => (/* reexport */ Navbar2)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
;// CONCATENATED MODULE: ./components/Footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

const Footer = ()=>{
    const [isFoot1, setIsFoot1] = (0,react_experimental_.useState)(true);
    const [isFoot2, setIsFoot2] = (0,react_experimental_.useState)(true);
    const [isFoot3, setIsFoot3] = (0,react_experimental_.useState)(true);
    const handleFoot = ()=>{
        var d2 = document.getElementById("footId1");
        setIsFoot1(!isFoot1);
        if (d2) {
            if (isFoot1) {
                d2.className += " open";
            } else {
                d2.classList.remove("open");
            }
        }
    };
    const handleFoot2 = ()=>{
        var d2 = document.getElementById("footId2");
        setIsFoot2(!isFoot2);
        if (d2) {
            if (isFoot2) {
                d2.className += " open";
            } else {
                d2.classList.remove("open");
            }
        }
    };
    const handleFoot3 = ()=>{
        var d2 = document.getElementById("footId3");
        setIsFoot3(!isFoot3);
        if (d2) {
            if (isFoot3) {
                d2.className += " open";
            } else {
                d2.classList.remove("open");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        "data-roybell": "",
        "data-location": "footer",
        id: "SiteFooter",
        className: "SiteFooter hide",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: '.NewsletterSignupModalWrapper{z-index:9999999999999;display:none;position:fixed;top:0;right:0;bottom:0;left:0}.NewsletterSignupModalWrapper_Backdrop{opacity:0;transition:opacity .3s ease;position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,0.4);z-index:1}.NewsletterSignupModal{opacity:0;transition:opacity .3s ease;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:346px;max-height:477px;min-height:477px;width:calc(100vw - 40px);height:calc(100vh - 40px);z-index:2;background-color:#f4f4f4}.NewsletterSignupModal img{object-fit:cover;width:100%;position:absolute;bottom:-1px}.NewsletterSignupModal_Close{position:absolute;z-index:2;top:15px;right:11px;width:20px;height:20px;background:none;border:none;cursor:pointer;outline:none}.NewsletterSignupModal_Close:before,.NewsletterSignupModal_Close:after{content:\'\';position:absolute;width:23px;height:1px;background:#231f20;top:50%;left:50%}.NewsletterSignupModal_Close:before{transform:translate(-50%, -50%) rotate(45deg)}.NewsletterSignupModal_Close:after{transform:translate(-50%, -50%) rotate(-45deg)}.NewsletterSignupModal_Inner{padding:58px 18px 0 18px}.NewsletterSignupModal_Inner .NewsletterSignup_InputWrapper_Front{border:1px solid #ccc}.NewsletterSignupModal_Inner_Disclaimer a,.NewsletterSignupModal_Inner_Disclaimer a:hover,.NewsletterSignupModal_Inner_Disclaimer a:visited,.NewsletterSignupModal_Inner_Disclaimer a:focus{text-decoration:underline;color:#c01907}@media (min-width: 1000px){.NewsletterSignupModal{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);max-width:800px;max-height:376px;min-height:auto;width:800px;height:376px;z-index:2}.NewsletterSignupModal_Inner_Preheading,.NewsletterSignupModal_Inner_Heading,.NewsletterSignupModal_Inner_Disclaimer{text-align:left}.NewsletterSignupModal img{max-height:550px;width:unset;height:112%;position:absolute;bottom:0}.NewsletterSignupModal_Inner{padding:0 70px 0 0;position:absolute;left:376px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center}.NewsletterSignupModal_Inner_Disclaimer{text-align:left}}@media (min-width: 1280px){.NewsletterSignupModal{max-width:1040px;max-height:490px;width:1040px;height:490px}.NewsletterSignupModal_Inner{left:490px}.NewsletterSignupModal_Inner_Heading{line-height:3.5rem;font-size:2.75rem}}.NewsletterSignupModalWrapper.active{display:block}.NewsletterSignupModalWrapper.show .NewsletterSignupModalWrapper_Backdrop,.NewsletterSignupModalWrapper.show .NewsletterSignupModal{opacity:1}.pageHeaderMenuOverlay.pageHeaderMenuOverlays--newsletter.open{display:none !important}.NewsletterSignupModal_Component{position:relative;font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;max-width:100% !important}.NewsletterSignupModal_Component .klaviyo_helptext{font-family:"PT Serif", serif;padding-top:10px}.NewsletterSignupModal_Component .klaviyo_gdpr_text{font-family:"PT Serif", serif;font-size:14px;line-height:1.3}.NewsletterSignupModal_Component label{color:#222}.NewsletterSignupModal_Component .klaviyo_field_group{display:flex;transform-style:preserve-3d;backface-visibility:hidden;transition:transform .4s ease, background-color .4s ease;height:42px;border-radius:4px;margin:0;background-color:#fff;border:1px solid #FFF;padding:3px;box-shadow:0 15px 15px -10px rgba(0,0,0,0.3)}.NewsletterSignupModal_Component .klaviyo_field_group .klaviyo_form_actions{text-align:left}.NewsletterSignupModal_Component input[type=checkbox]+label{display:inline;font-weight:normal;padding-left:5px}.NewsletterSignupModal_Component input[type=text],.NewsletterSignupModal_Component input[type=email]{font-family:Lato, sans-serif;font-size:12px;font-weight:700;border-radius:0px;border:none;outline:none;transition:background .1s ease}.NewsletterSignupModal_Component input[type=email]::placeholder{color:#b0b0b0;letter-spacing:0.5px}.NewsletterSignupModal_Component input[type=email]:focus+.klaviyo_form_actions .klaviyo_submit_button,.NewsletterSignupModal_Component input[type=email]:valid+.klaviyo_form_actions .klaviyo_submit_button{background:#c01907}.NewsletterSignupModal_Component .klaviyo_submit_button{font-family:"Lato", sans-serif;font-size:12px;font-weight:700;background:#d7d7d7;text-align:center;padding:0 5px;min-width:64px;outline:none;border:0;border-radius:4px;color:#fff;text-transform:uppercase;letter-spacing:1.5px;cursor:pointer}.NewsletterSignupModal_Component .klaviyo_messages{margin-top:5px;font-family:"Lato", sans-serif;font-size:12px;font-weight:normal}.NewsletterSignupModal_Component .klaviyo_messages .error_message{display:flex;font-family:"Lato", sans-serif;font-size:12px;font-weight:700;color:#c43e22;letter-spacing:.5px;text-align:left;margin-top:10px}.NewsletterSignupModal_Component .klaviyo_messages .error_message:before{display:inline-block;content:"\\2191";font-size:10px;padding:0 5px}.NewsletterSignupModal_Component .klaviyo_messages .success_message{color:#c01907;background-color:#fff;padding:9px;border-radius:3px;font-family:"Lato", sans-serif;font-size:12px;font-weight:700;text-align:center;box-shadow:0 15px 15px -10px rgba(0,0,0,0.3)}.NewsletterSignupModalWrapper.NewsletterSignupIPhoneSE .NewsletterSignupModal{background-image:url("https://bellroy-cms-images.imgix.net/4429/newsletter-sign-up-image-mobile.jpg?auto=format&fit=max")}@media (min-width: 1000px){.NewsletterSignupModalWrapper.NewsletterSignupIPhoneSE .NewsletterSignupModal{background-image:url("https://bellroy-cms-images.imgix.net/4430/iphone-sign-up-image-desktop.jpg?auto=format&fit=max")}}\n'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: ".NewsletterSignupFooter{display:block;background:#f4f4f4;padding:20px 15px}.NewsletterSignupFooter_Component{margin:20px auto;min-height:42px;max-width:454px}.NewsletterSignupFooter_Disclaimer{max-width:454px;margin:0 auto}.NewsletterSignupFooter_Disclaimer a,.NewsletterSignupFooter_Disclaimer a:hover,.NewsletterSignupFooter_Disclaimer a:visited,.NewsletterSignupFooter_Disclaimer a:active{color:#c01907}@media (min-width: 1280px){.NewsletterSignupFooter_Heading{line-height:2.5rem;font-size:1.75rem}}\n"
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "SiteFooter__wrapper",
                id: "footer",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "SiteFooterSitemap",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                "data-roybell": "",
                                "data-location": "footerSocial",
                                className: "SiteFooterSitemap__social column",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                href: "https://www.tiktok.com/@Forever Living_officiel",
                                                "data-auto-id": "true",
                                                id: "page-footer-http-www-instagram-com-bellroy-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 2500 2500",
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    xmlSpace: "preserve",
                                                    height: "20px",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "TikTok"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M2202.4 0H297.6C133.5 0 0 133.5 0 297.6v1904.8C0 2366.5 133.5 2500 297.6 2500h1904.8c164.1 0 297.6-133.5 297.6-297.6V297.6C2500 133.5 2366.5 0 2202.4 0m-237.8 1090.7c-13.7 1.3-27.4 2-41.1 2.1-150.4 0-290.7-75.8-373.2-201.7v686.7c0 280.3-227.2 507.6-507.6 507.6s-507.6-227.2-507.6-507.6 227.2-507.6 507.6-507.6c10.6 0 21 1 31.4 1.6V1322c-10.4-1.2-20.7-3.2-31.4-3.2-143.1 0-259 116-259 259s116 259 259 259c143.1 0 269.5-112.7 269.5-255.8l2.5-1166.3H1554c22.6 214.6 195.6 382.2 410.8 397.9v278"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                href: "https://www.instagram.com/Forever Living_officiel",
                                                "data-auto-id": "true",
                                                id: "page-footer-http-www-instagram-com-bellroy-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 44 44",
                                                    height: "20px",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "Instagram"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            className: "st0",
                                                            d: "M21.3,14.4c-3.8,0-6.9,3.1-6.9,6.9c0,3.8,3.1,6.9,6.9,6.9c3.8,0,6.9-3.1,6.9-6.9c0,0,0,0,0,0 C28.3,17.5,25.2,14.4,21.3,14.4C21.3,14.4,21.3,14.4,21.3,14.4z"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            className: "st0",
                                                            d: "M43.9,12.9c0-1.8-0.4-3.6-1-5.3c-0.6-1.5-1.4-2.8-2.5-3.9c-1.1-1.1-2.4-2-3.9-2.5c-1.7-0.6-3.5-1-5.3-1   C28.7,0,28,0,22,0s-6.7,0-9.1,0.1c-1.8,0-3.6,0.4-5.3,1C6.1,1.7,4.8,2.6,3.7,3.7c-1.1,1.1-2,2.4-2.5,3.9c-0.6,1.7-1,3.5-1,5.3   C0,15.3,0,16,0,22s0,6.7,0.1,9.1c0,1.8,0.4,3.6,1,5.3c0.6,1.5,1.4,2.8,2.5,3.9c1.1,1.1,2.4,2,3.9,2.5c1.7,0.6,3.5,1,5.3,1   C15.3,44,16,44,22,44s6.7,0,9.1-0.1c1.8,0,3.6-0.4,5.3-1c1.5-0.6,2.8-1.4,3.9-2.5c1.1-1.1,2-2.4,2.5-3.9c0.6-1.7,1-3.5,1-5.3   C44,28.7,44,28,44,22S44,15.3,43.9,12.9z M21.3,32c-5.9,0-10.7-4.8-10.7-10.7s4.8-10.7,10.7-10.7S32,15.4,32,21.3S27.2,32,21.3,32   L21.3,32z M35.3,13.3c-1.8,0-3.3-1.5-3.3-3.3s1.5-3.3,3.3-3.3c1.8,0,3.3,1.5,3.3,3.3C38.7,11.8,37.2,13.3,35.3,13.3   C35.3,13.3,35.3,13.3,35.3,13.3z"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                href: "https://www.facebook.com/Forever Livingofficiel/",
                                                "data-auto-id": "true",
                                                id: "page-footer-https-www-facebook-com-bellroy-official-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 44 44",
                                                    height: "20px",
                                                    style: {
                                                        marginRight: "-10px"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "Facebook"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            className: "st0",
                                                            d: "M14.3,44V23.9h6.5l1-7.8h-7.5v-5c0-2.3,0.6-3.8,3.7-3.8h4v-7C20.1,0.1,18.1,0,16.2,0c-5.8,0-9.7,3.7-9.7,10.3 v5.8H0v7.8h6.5V44H14.3z"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                target: "_blank",
                                                href: "https://wa.me/243828379987",
                                                "data-auto-id": "true",
                                                id: "page-footer-https-www-youtube-com-channel-ucy6vodc_wyzj4rlslixgp1q-1",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                    id: "Layer_1",
                                                    "data-name": "Layer 1",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 176 124",
                                                    height: "22px",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                                                            children: "WhatsApp"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            fill: "#000000",
                                                            viewBox: "0 0 16 16",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                    id: "SVGRepo_bgCarrier",
                                                                    "stroke-width": "0"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                    id: "SVGRepo_tracerCarrier",
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                    id: "SVGRepo_iconCarrier",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column collapsable-section",
                                id: "footId1",
                                onClick: handleFoot,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        children: [
                                            "HELP",
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                version: "1.1",
                                                id: "Layer_1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                x: "0px",
                                                y: "0px",
                                                viewBox: "0 0 11 6",
                                                xmlSpace: "preserve",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    className: "st0",
                                                    d: "M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/contact",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-customer-care-contact-us-1",
                                                    children: "Contact Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/term",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-customer-care-terms-conditions-1",
                                                    children: "Terms & Conditions"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/privacy",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-customer-care-privacy-policy-2",
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column collapsable-section",
                                id: "footId2",
                                onClick: handleFoot2,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        children: [
                                            "Shop Collections",
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                version: "1.1",
                                                id: "Layer_1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                x: "0px",
                                                y: "0px",
                                                viewBox: "0 0 11 6",
                                                xmlSpace: "preserve",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    className: "st0",
                                                    d: "M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/search?cat=Cr\xe8me Homme",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-collection-bestsellers-1",
                                                    children: "Cr\xe8me Homme"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/search?cat=Cr\xe8me Femme",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-coming-soon-1",
                                                    children: "Cr\xe8me Femme"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "/search?cat=Cr\xe8me B\xe9b\xe9",
                                                    "data-auto-id": "true",
                                                    id: "page-footer-collection-premium-1",
                                                    children: "Cr\xe8me B\xe9b\xe9"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "column collapsable-section",
                                id: "footId3",
                                onClick: handleFoot3,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                        children: [
                                            "ABOUT",
                                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                version: "1.1",
                                                id: "Layer_1",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                x: "0px",
                                                y: "0px",
                                                viewBox: "0 0 11 6",
                                                xmlSpace: "preserve",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    className: "st0",
                                                    d: "M5.4,4.4l4.5-4.2c0.2-0.3,0.7-0.3,0.9,0c0,0,0,0,0,0c0.3,0.3,0.3,0.7,0,1c0,0,0,0,0,0L5.9,5.8 C5.6,6.1,5.2,6.1,5,5.8L0.2,1.1c-0.3-0.3-0.3-0.7,0-0.9C0.4,0,0.8,0,1.1,0.2c0,0,0,0,0,0L5.4,4.4z"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "/about",
                                                "data-auto-id": "true",
                                                id: "page-footer-about-us-1",
                                                children: "Our Story"
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "column ",
                                children: "  "
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("section", {
                        className: "SiteFooter__footNote",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "SiteFooter__footNote__inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://greatplacetowork.com.au/gptwcertified/bellroy/",
                                        "data-auto-id": "true",
                                        id: "page-footer-https-greatplacetowork-com-au-gptwcertified-bellroy-1"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "column",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "question",
                                                children: [
                                                    "Got a question?",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            "Contact",
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "mailto:info@anazon-lb.com",
                                                                "data-auto-id": "true",
                                                                id: "page-footer-mailto-support-bellroy-com-1",
                                                                children: "info@anazon-lb.com"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "column",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "copyright",
                                                children: [
                                                    "All rights reserved \xa9 ",
                                                    new Date().getFullYear(),
                                                    " Forever Living"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/CarCard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
const CarCard = ({ temp })=>{
    const { id, title, category, img } = temp;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "br_grid br_grid-cols-1 supports-subgrid:br_row-span-4 supports-subgrid:br_grid-rows-[subgrid]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "Layout br_contents",
            children: /*#__PURE__*/ jsx_runtime_.jsx("center", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "br_contents br_edition-",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "initial:br_row-span-1 br_col-start-1 br_row-start-1 br_relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "br_aspect-[4/5] sm:br_aspect-square",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "br_w-full br_h-full br_relative br_flex br_items-center br_justify-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            className: "br_w-full br_h-full br_object-center br_object-contain br_mx-auto br_max-h-64 sm:br_max-h-72 sm:br_px-4",
                                            alt: "Slim Sleeve - Cocoa-Java",
                                            loading: "lazy",
                                            sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 50vw",
                                            src: img[0]
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "initial:br_row-span-1 br_col-start-1 br_row-start-2 br_px-3 group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "br_text-base-sans-spaced br_line-clamp-2 sm:br_line-clamp-none edition:br_text-grey-500 edition:br_hidden first:edition:br_inline edition:before:br_content-['_–_'] apex:edition:br_text-grey-300",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        href: `/product?id=${id}`,
                                        className: "br_text-current br_no-underline",
                                        children: [
                                            title,
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "br_absolute br_inset-0 br_z-10"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "initial:br_row-span-1 br_col-start-1 br_row-start-4 br_px-3 br_self-end group-[.centered]/tile:br_justify-center group-[.centered]/tile:br_text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "br_text-sm-sans-spaced br_text-grey-500 apex:br_text-grey-300 br_line-clamp-3 sm:br_line-clamp-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "br_text-base-sans-bold-cta-uppercase ",
                                        children: "Buy now >"
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const components_CarCard = (CarCard);

// EXTERNAL MODULE: ./app/context/CartContext.js
var CartContext = __webpack_require__(51799);
// EXTERNAL MODULE: ./app/context/CartBoolContext.js
var CartBoolContext = __webpack_require__(36382);
;// CONCATENATED MODULE: ./components/Cart.js





const Cart = ()=>{
    const { cart, removeFromCart, quantities, subtotal, addToCart } = (0,CartContext/* useCart */.j)();
    const [localQuantities, setLocalQuantities] = (0,react_experimental_.useState)(quantities);
    const { isBooleanValue, setBooleanValue } = (0,CartBoolContext/* useBooleanValue */.I)();
    const [errors, setErrors] = (0,react_experimental_.useState)({});
    const handleRemoveFromCart = (itemId)=>{
        removeFromCart(itemId);
    };
    const handleQuantityChange = (itemId, quantity)=>{
        addToCart(cart.find((item)=>item.id === itemId), undefined, quantity);
        // Update localQuantities immediately (local state)
        setLocalQuantities((prevQuantities)=>({
                ...prevQuantities,
                [itemId]: quantity
            }));
    };
    (0,react_experimental_.useEffect)(()=>{
        // Update quantities in the context when localQuantities change
        setLocalQuantities(quantities);
    }, [
        quantities
    ]);
    const handleClickc = ()=>{
        var cartb = document.getElementById("cartid");
        var cartb2 = document.getElementById("cartid2");
        setBooleanValue(!isBooleanValue);
        if (cartb && cartb2) {
            if (isBooleanValue) {
                cartb2.className += " MiniCart_Cart-visible";
            } else {
                cartb2.classList.remove("MiniCart_Cart-visible");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "MiniCart_Slider_Overlay",
                        id: "cartid"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "MiniCart_Slider",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "MiniCart_Slider_CloseButton",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("slot", {
                                    name: "close-button"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("slot", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("template", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "Checkout",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    id: "cartid2",
                    className: "MiniCart_Cart ",
                    style: {
                        zIndex: "99999999"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "MiniCart_Cart_Heading br_text-grey-500",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/checkout",
                                    className: "MiniCart_CartIndicator",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        viewBox: "0 0 31 28",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: 13,
                                                cy: 24,
                                                r: 2
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: 24,
                                                cy: 24,
                                                r: 2
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M1.5 2h3s1.5 0 2 2l4 13s.4 1 1 1h13s3.6-.3 4-4l1-5s0-1-2-1h-19"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Your shopping cart"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    slot: "close-button",
                                    className: "MiniCart_Cart_CloseButton",
                                    "aria-label": "Close",
                                    id: "cartid",
                                    style: {
                                        zIndex: "99999999999"
                                    },
                                    onClick: handleClickc,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "MiniCart_Cart_CloseButtonIcon"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            "data-render-if": "!cart-is-empty",
                            className: "MiniCart_Cart_CheckoutCart",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "Checkout_Cart_Wrapper Checkout_Cart_Wrapper--All",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "Checkout_Cart_TableHeading",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "Checkout_Cart_TableHeading_Quantity",
                                                    children: "Qty"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "Checkout_Cart_TableHeading_Total",
                                                    children: "Total price"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "Checkout_Cart_LineItems",
                                            children: [
                                                cart && cart.length > 0 ? (cart?.map((obj, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "Checkout_Cart_LineItems_LineItem",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "Checkout_Cart_LineItems_LineItem_Thumb",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: obj.img[0]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "Checkout_Cart_LineItems_LineItem_Details",
                                                                    children: [
                                                                        obj.title,
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Category:"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: obj.category
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Type:"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: obj.type
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "Checkout_Cart_LineItems_LineItem_Details_Quantity",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "Qty:"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: localQuantities[obj.id] || 1
                                                                                })
                                                                            ]
                                                                        }),
                                                                        errors[obj.id] && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                            style: {
                                                                                color: "red"
                                                                            },
                                                                            children: [
                                                                                errors[obj.id],
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    style: {
                                                                                        color: "#4acb4a",
                                                                                        display: "inline"
                                                                                    },
                                                                                    href: `/product?id=${obj.id}&&custom=1`,
                                                                                    children: " add now"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "Checkout_Cart_LineItems_LineItem_Price",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "Currency",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                        className: "Currency_Monetary",
                                                                                        children: [
                                                                                            "$",
                                                                                            obj.price * localQuantities[obj.id] || obj.price
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "Currency_Code",
                                                                                        children: "USD"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                                    className: "Checkout_Cart_LineItems_LineItem_Remove",
                                                                    onClick: ()=>handleRemoveFromCart(obj.id),
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                            className: "Checkout_Cart_LineItems_LineItem_Remove_Cross",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "Checkout_Cart_LineItems_LineItem_Remove_Spinner",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    }))) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    "data-render-if": "cart-is-empty",
                                                    className: "MiniCart_Cart_EmptyCart",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "You have no items in your shopping cart."
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "Checkout_Cart_LineItems_LineItem Checkout_Cart_LineItems_LineItem-SalesPromotion Checkout_Cart_LineItems_LineItem-SalesPromotion-Custom",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "Checkout_Cart_LineItems_LineItem_ContentBlock"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "Checkout_Cart_LineItems_LineItem_Details",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "Checkout_Cart_LineItems_LineItem_Price",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                        className: "Currency",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                                className: "Currency_Monetary",
                                                                                children: [
                                                                                    "Total: $",
                                                                                    subtotal
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "Currency_Code",
                                                                                children: "USD"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    class: "Common_Button Common_Button--short MiniCart_Cart_CtaButton",
                                    href: "/checkout",
                                    rel: "nofollow",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Go to checkout"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Cart = (Cart);

;// CONCATENATED MODULE: ./components/Navbar2.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




function NavBar() {
    const [isActive, setIsActive] = (0,react_experimental_.useState)(true);
    const { isBooleanValue, setBooleanValue } = (0,CartBoolContext/* useBooleanValue */.I)();
    const [isActive2, setIsActive2] = (0,react_experimental_.useState)(true);
    const { cart } = (0,CartContext/* useCart */.j)();
    const [isHovered, setIsHovered] = (0,react_experimental_.useState)(true);
    // Function to handle hover
    const handleHover = ()=>{
        setIsHovered(!isHovered);
        var d = document.getElementById("myUniD");
        var d1 = document.getElementById("yourDivId");
        if (d && d1) {
            if (isHovered) {
                d.className += " br_submenu-open";
                d1.className += " br_open";
            } else {
                d.classList.remove("br_submenu-open");
                d1.classList.remove("br_open");
            }
        }
    };
    const handleClick = ()=>{
        var d = document.getElementById("myUniD");
        var d1 = document.getElementById("hamburger");
        setIsActive(!isActive);
        if (d && d1) {
            if (isActive) {
                d.className += " drawer-active br_open";
                d1.className += " open";
            } else {
                d.classList.remove("drawer-active");
                d.classList.remove("br_open");
                d1.classList.remove("open");
            }
        }
    // setIsActive(current => !current);
    };
    const handleClickc = ()=>{
        var cartb = document.getElementById("cartid");
        var cartb2 = document.getElementById("cartid2");
        setBooleanValue(!isBooleanValue);
        if (cartb && cartb2) {
            if (isBooleanValue) {
                cartb2.className += " MiniCart_Cart-visible";
            } else {
                cartb2.classList.remove("MiniCart_Cart-visible");
            }
        }
    };
    const handleClickc2 = ()=>{
        var search = document.getElementById("search-menu-overlay");
        var searchc = document.getElementById("search-menu-overlay");
        setIsActive2(!isActive2);
        if (search && searchc) {
            if (isActive2) {
                search.className += " open";
            } else {
                search.classList.remove("open");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: 'html,body{margin:0;padding:0}#topBannerWrapper{position:relative}#topBannerWrapper>a,.topBannerRotating>a{display:block;text-decoration:none;text-align:center}.topBannerRotating{min-height:30px;background-color:#231f20}.topBannerRotating .topBanner{position:absolute;width:100%;height:100%;animation-timing-function:ease-in-out;animation-iteration-count:infinite;z-index:1;opacity:0;display:flex;justify-content:center;align-items:center}.topBanner{font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;background-color:#231f20;color:#cecdca;position:relative;height:auto;overflow:hidden}.topBanner_Close{display:block;border:none;background:none;position:absolute;top:50%;right:0;height:32px;width:32px;cursor:pointer;z-index:2;transform:translateY(-50%)}.topBanner_Close:before,.topBanner_Close:after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.topBanner_Close:before{transform:translate(-50%, -50%) rotate(45deg)}.topBanner_Close:after{transform:translate(-50%, -50%) rotate(-45deg)}.topBanner_Inner{display:flex}.topBanner_Inner_Icon{position:absolute;top:50%;left:5px;transform:translateY(-50%);padding:0 4px;display:flex;flex-direction:column;justify-content:center}.topBanner_Inner_Icon svg{height:24px;width:auto;max-width:24px;max-height:24px}.topBanner_Inner_Title{padding:0 5px}.topBanner_Inner_Cta{text-transform:uppercase;letter-spacing:1px;color:#c01907;font-weight:bold}.topBanner_Inner{box-sizing:border-box;flex:1 1 auto;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;margin:0 42px;font-size:12px;font-weight:bold;line-height:18px;padding:6px 0;letter-spacing:1px}@media (min-width: 768px){.topBanner_Inner{display:flex;justify-content:center}.topBanner_Inner_Icon{position:static;top:auto;left:auto;transform:none;padding:0 4px;flex:0 1 auto}.topBanner_Inner{flex:0 1 auto;margin:0 20px;font-size:13px;line-height:18px;padding:6px 0}}@keyframes rotate--2{0%,50%,100%{opacity:0;z-index:1}3%,47%{opacity:1;z-index:2}}@keyframes rotate--3{0%,34%,100%{opacity:0;z-index:1}2%,32%{opacity:1;z-index:2}}.topBannerRotating--2 .topBanner{animation-name:rotate--2;animation-duration:6.8s}.topBannerRotating--3 .topBanner{animation-name:rotate--3;animation-duration:10.2s}.topBannerRotating .topBanner:nth-child(1){animation-delay:0s}.topBannerRotating .topBanner:nth-child(2){animation-delay:3.4s}.topBannerRotating .topBanner:nth-child(3){animation-delay:6.8s}\n'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: 'body{overflow-x:hidden}body.drawer-open{overflow:hidden}.MiniCart{top:80px}.pageHeaderMenuPreHeader{z-index:51}.pageHeaderMenuOverlays{z-index:52;position:relative;height:0}.pageHeaderMenuOverlay{position:absolute;top:0;left:0;right:0;height:124px;background:#efefef;display:none}.pageHeaderMenuOverlay.open{display:block}.pageHeaderMenuOverlay__close{border:none;background-color:#222;color:#ccc;width:32px;height:32px;padding:0;margin:0;position:absolute;right:0;top:0;outline:none;cursor:pointer;z-index:1}.pageHeaderMenuOverlay__close::before,.pageHeaderMenuOverlay__close::after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.pageHeaderMenuOverlay__close::before{transform:translate(-50%, -50%) rotate(45deg)}.pageHeaderMenuOverlay__close::after{transform:translate(-50%, -50%) rotate(-45deg)}.pageHeaderMenuOverlay__close:hover{background-color:#c01907}.searchOverlay{width:80%;position:absolute;left:50%;top:48%;transform:translate(-50%, -50%)}.searchOverlay button{position:absolute;left:0;top:58%;border:0;background:transparent;outline:none;transform:translateY(-50%)}.searchOverlay button svg{height:32px;fill:#888}.searchInputWrapper{display:block;position:relative;height:45px;left:60px;right:0;width:90%}.searchInputWrapper input[type="text"],.searchInputWrapper__underline{position:absolute;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;position:absolute;font-size:28px;font-weight:300;height:45px;line-height:45px}.searchInputWrapper input[type="text"]{width:100%;outline:none;background:transparent;border:0;color:#231f20;z-index:3;padding:0}.searchInputWrapper__underline{border-bottom:2px solid #c01907;color:transparent;z-index:2}.newsletterOverlay{width:768px;margin:0;height:100%;position:relative;display:flex;flex-direction:column}.newsletterOverlay__Content{display:flex;flex-direction:row;height:100%;margin:9px 15px 6px;justify-content:left}.newsletterOverlay__Title{font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;display:block;color:#231f20;line-height:18px;text-align:left;width:190px}.newsletterOverlay__Component{margin:0 0 3px 20px;text-align:center;max-width:400px}.newsletterOverlay__Disclaimer{font-family:"PT Serif", sans-serif;-webkit-font-smoothing:antialiased;color:#9A9A9A;font-size:11px;letter-spacing:0.5px;line-height:1.5;text-align:left;max-width:420px;margin:0 0 0 20px}.newsletterOverlay__Disclaimer a{color:inherit;font-weight:bold}.pageHeaderMenuPreHeader{background:#fff;font-family:"Lato", sans-serif;font-size:13px;-webkit-font-smoothing:antialiased;position:relative}.pageHeaderMenuPreHeader *{box-sizing:border-box}.pageHeaderMenuPreHeader ul,.pageHeaderMenuPreHeader li{margin:0;padding:0;list-style:none}.pageHeaderMenuPreHeader .tablet-only{display:none}.secondaryLevel{position:absolute;right:0;z-index:unset}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:none}.secondaryLevel .my-cart{z-index:2}.secondaryLevel .red-indicator__icon__count{background-color:#bc5d2c;height:14px;width:14px;display:inline-block;border-radius:50%;color:white;line-height:13px;text-align:center;font-weight:700;font-style:initial;font-size:11px;position:relative;top:-8px;letter-spacing:0}.secondaryLevel .red-indicator__icon__count.lineItemCount:empty{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount--hasItems{display:block}.secondaryLevel .red-indicator__icon__count.lineItemCount--double{width:16px;border-radius:9%;margin-left:1px;margin-top:-1px}.red-indicator__icon .filled{display:none}.lineItemCount--hasItems~.filled{display:block}.lineItemCount--hasItems~.empty{display:none}.shippingMessage{display:none}@media (max-width: 1199px),(pointer: coarse){.pageHeaderMenu__openOverlay{position:relative}.pageHeaderContainer{position:sticky;position:-webkit-sticky;height:56px;z-index:9990;top:0;left:0;right:0}.pageHeaderMenuPreHeader{border-bottom:1px solid #ccc;position:relative;box-sizing:border-box;height:56px;top:0;left:0;right:0}.pageHeaderMenuOverlay{height:56px}.pageHeaderMenuOverlay .searchOverlay{width:100%;position:absolute;left:0;top:0;transform:none;padding:10px 20px;display:flex;align-items:center;gap:10px}.pageHeaderMenuOverlay .searchOverlay button{position:relative;left:0;top:2px;border:0;background:transparent;outline:none;transform:none;padding:0}.pageHeaderMenuOverlay .searchOverlay button svg{height:24px;fill:#888}.pageHeaderMenuOverlay .searchInputWrapper{position:relative;height:32px;left:0;right:0;width:100%}.pageHeaderMenuOverlay .searchInputWrapper input[type="text"],.pageHeaderMenuOverlay .searchInputWrapper__underline{position:absolute;font-size:24px;letter-spacing:.5px;height:32px;line-height:32px;width:auto}@supports (not (position: sticky)) and (not (position: -webkit-sticky)){.pageHeaderContainer{position:fixed}body{margin-top:56px}}.pageHeaderMenuPreHeader .hamburger{border:none;display:block;position:absolute;background:transparent;outline:none;left:0;top:0;bottom:0;width:60px;margin:0;padding:0}.pageHeaderMenuPreHeader .hamburger span{left:20px;width:20px;position:absolute;height:2px;background:#999;border-radius:1px;transition:transform .4s ease, width .4s ease;will-change:transform, width}.pageHeaderMenuPreHeader .hamburger span:nth-child(1){transform:translateY(-6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(2){transform:translateY(6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(3){transform:translateY(0) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(1){transform:translate(0) rotate(-45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(2){transform:translate(0) rotate(45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(3){transform:translate(10px) rotate(0);width:0}.secondaryLevel{right:15px;top:17px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{flex:1 0 auto;margin:0 6px}.secondaryLevel ul li>a{display:inline-block;font-weight:700;letter-spacing:1px;font-size:11px;color:#666;text-transform:uppercase;padding:0 3px}.secondaryLevel ul li a i{height:15px;position:relative}.secondaryLevel ul li a i svg{height:22px;fill:#999;margin:0 0 -4px 0}.secondaryLevel ul li a i .lineItemCount{color:#999;text-align:center;position:absolute;top:85%;left:50%;transform:translate(-41%, -50%);font-style:normal;font-weight:700;font-size:13px}.secondaryLevel ul li a i.red-indicator__icon .red-indicator__icon__count{font-size:12px;color:#fff;left:23px;z-index:2}}@media (max-width: 767px){.mobile-hidden{display:none}.secondaryLevel ul li{margin:0 4px}}@media (min-width: 1200px) and (pointer: fine){.newsletterOverlay{margin:0 auto;width:950px}.newsletterOverlay__Content{flex-direction:column;margin:9px 0}.newsletterOverlay__Title{text-align:center;width:unset}.newsletterOverlay__Component{margin:7px auto 6px}.newsletterOverlay__Disclaimer{text-align:center;max-width:unset;margin:0 auto}.pageHeaderMenuPreHeader{height:30px;position:relative;background-color:#FFF}.pageHeaderMenuOverlay{height:105px}.shippingMessage{display:block;position:absolute;right:20px;top:0;line-height:30px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;font-size:11px;font-weight:700;letter-spacing:1px;color:#999}.shippingMessage img{display:inline-block;width:16px;margin:0 2px 0 8px;vertical-align:middle}.secondaryLevel{right:20px;line-height:26px;top:50px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{display:block;flex:1 0 auto;margin:0 3px}.secondaryLevel .secondaryLevel_Item{display:inline-block;letter-spacing:1px;font-size:11px;color:#7F7F7F;padding:0 5px}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:inline-block;padding:0;margin-right:20px}.secondaryLevel .secondaryLevel_Item:hover{color:#c01907}.secondaryLevel_Item i{height:15px;position:relative}.secondaryLevel_Item i svg{height:26px;fill:#999;margin:0 0 -4px 0}}@media (min-width: 1200px) and (max-width: 1200px){.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{margin-right:20px}}.pageHeaderMenuSearchUnderlay{position:relative;height:156px;background:#efefef}.menuicon svg{height:24px;width:auto;fill:none;stroke-width:2.5px;stroke:#999;stroke-linecap:round;stroke-miterlimit:10}@media (min-width: 768px){.MiniCart_CartIndicator svg,.menuicon svg{height:20px}}\n'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                type: "text/css",
                dangerouslySetInnerHTML: {
                    __html: 'body{overflow-x:hidden}body.drawer-open{overflow:hidden}.MiniCart{top:80px}.pageHeaderMenuPreHeader{z-index:51}.pageHeaderMenuOverlays{z-index:52;position:relative;height:0}.pageHeaderMenuOverlay{position:absolute;top:0;left:0;right:0;height:124px;background:#efefef;display:none}.pageHeaderMenuOverlay.open{display:block}.pageHeaderMenuOverlay__close{border:none;background-color:#222;color:#ccc;width:32px;height:32px;padding:0;margin:0;position:absolute;right:0;top:0;outline:none;cursor:pointer;z-index:1}.pageHeaderMenuOverlay__close::before,.pageHeaderMenuOverlay__close::after{position:absolute;display:block;content:" ";width:18px;height:1px;background-color:#fff;top:50%;left:50%}.pageHeaderMenuOverlay__close::before{transform:translate(-50%, -50%) rotate(45deg)}.pageHeaderMenuOverlay__close::after{transform:translate(-50%, -50%) rotate(-45deg)}.pageHeaderMenuOverlay__close:hover{background-color:#c01907}.searchOverlay{width:80%;position:absolute;left:50%;top:48%;transform:translate(-50%, -50%)}.searchOverlay button{position:absolute;left:0;top:58%;border:0;background:transparent;outline:none;transform:translateY(-50%)}.searchOverlay button svg{height:32px;fill:#888}.searchInputWrapper{display:block;position:relative;height:45px;left:60px;right:0;width:90%}.searchInputWrapper input[type="text"],.searchInputWrapper__underline{position:absolute;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;position:absolute;font-size:28px;font-weight:300;height:45px;line-height:45px}.searchInputWrapper input[type="text"]{width:100%;outline:none;background:transparent;border:0;color:#231f20;z-index:3;padding:0}.searchInputWrapper__underline{border-bottom:2px solid #c01907;color:transparent;z-index:2}.newsletterOverlay{width:768px;margin:0;height:100%;position:relative;display:flex;flex-direction:column}.newsletterOverlay__Content{display:flex;flex-direction:row;height:100%;margin:9px 15px 6px;justify-content:left}.newsletterOverlay__Title{font-family:"Lato", sans-serif;-webkit-font-smoothing:antialiased;font-weight:700;font-size:13px;letter-spacing:1.5px;text-transform:uppercase;display:block;color:#231f20;line-height:18px;text-align:left;width:190px}.newsletterOverlay__Component{margin:0 0 3px 20px;text-align:center;max-width:400px}.newsletterOverlay__Disclaimer{font-family:"PT Serif", sans-serif;-webkit-font-smoothing:antialiased;color:#9A9A9A;font-size:11px;letter-spacing:0.5px;line-height:1.5;text-align:left;max-width:420px;margin:0 0 0 20px}.newsletterOverlay__Disclaimer a{color:inherit;font-weight:bold}.pageHeaderMenuPreHeader{background:#fff;font-family:"Lato", sans-serif;font-size:13px;-webkit-font-smoothing:antialiased;position:relative}.pageHeaderMenuPreHeader *{box-sizing:border-box}.pageHeaderMenuPreHeader ul,.pageHeaderMenuPreHeader li{margin:0;padding:0;list-style:none}.pageHeaderMenuPreHeader .tablet-only{display:none}.secondaryLevel{position:absolute;right:0;z-index:unset}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:none}.secondaryLevel .my-cart{z-index:2}.secondaryLevel .red-indicator__icon__count{background-color:#bc5d2c;height:14px;width:14px;display:inline-block;border-radius:50%;color:white;line-height:13px;text-align:center;font-weight:700;font-style:initial;font-size:11px;position:relative;top:-8px;letter-spacing:0}.secondaryLevel .red-indicator__icon__count.lineItemCount:empty{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount{display:none}.secondaryLevel .red-indicator__icon__count.lineItemCount--hasItems{display:block}.secondaryLevel .red-indicator__icon__count.lineItemCount--double{width:16px;border-radius:9%;margin-left:1px;margin-top:-1px}.red-indicator__icon .filled{display:none}.lineItemCount--hasItems~.filled{display:block}.lineItemCount--hasItems~.empty{display:none}.shippingMessage{display:none}@media (max-width: 1199px),(pointer: coarse){.pageHeaderMenu__openOverlay{position:relative}.pageHeaderContainer{position:sticky;position:-webkit-sticky;height:56px;z-index:9990;top:0;left:0;right:0}.pageHeaderMenuPreHeader{border-bottom:1px solid #ccc;position:relative;box-sizing:border-box;height:56px;top:0;left:0;right:0}.pageHeaderMenuOverlay{height:56px}.pageHeaderMenuOverlay .searchOverlay{width:100%;position:absolute;left:0;top:0;transform:none;padding:10px 20px;display:flex;align-items:center;gap:10px}.pageHeaderMenuOverlay .searchOverlay button{position:relative;left:0;top:2px;border:0;background:transparent;outline:none;transform:none;padding:0}.pageHeaderMenuOverlay .searchOverlay button svg{height:24px;fill:#888}.pageHeaderMenuOverlay .searchInputWrapper{position:relative;height:32px;left:0;right:0;width:100%}.pageHeaderMenuOverlay .searchInputWrapper input[type="text"],.pageHeaderMenuOverlay .searchInputWrapper__underline{position:absolute;font-size:24px;letter-spacing:.5px;height:32px;line-height:32px;width:auto}@supports (not (position: sticky)) and (not (position: -webkit-sticky)){.pageHeaderContainer{position:fixed}body{margin-top:56px}}.pageHeaderMenuPreHeader .hamburger{border:none;display:block;position:absolute;background:transparent;outline:none;left:0;top:0;bottom:0;width:60px;margin:0;padding:0}.pageHeaderMenuPreHeader .hamburger span{left:20px;width:20px;position:absolute;height:2px;background:#999;border-radius:1px;transition:transform .4s ease, width .4s ease;will-change:transform, width}.pageHeaderMenuPreHeader .hamburger span:nth-child(1){transform:translateY(-6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(2){transform:translateY(6px) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger span:nth-child(3){transform:translateY(0) rotate(0deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(1){transform:translate(0) rotate(-45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(2){transform:translate(0) rotate(45deg)}.pageHeaderMenuPreHeader .hamburger.open span:nth-child(3){transform:translate(10px) rotate(0);width:0}.secondaryLevel{right:15px;top:17px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{flex:1 0 auto;margin:0 6px}.secondaryLevel ul li>a{display:inline-block;font-weight:700;letter-spacing:1px;font-size:11px;color:#666;text-transform:uppercase;padding:0 3px}.secondaryLevel ul li a i{height:15px;position:relative}.secondaryLevel ul li a i svg{height:22px;fill:#999;margin:0 0 -4px 0}.secondaryLevel ul li a i .lineItemCount{color:#999;text-align:center;position:absolute;top:85%;left:50%;transform:translate(-41%, -50%);font-style:normal;font-weight:700;font-size:13px}.secondaryLevel ul li a i.red-indicator__icon .red-indicator__icon__count{font-size:12px;color:#fff;left:23px;z-index:2}}@media (max-width: 767px){.mobile-hidden{display:none}.secondaryLevel ul li{margin:0 4px}}@media (min-width: 1200px) and (pointer: fine){.newsletterOverlay{margin:0 auto;width:950px}.newsletterOverlay__Content{flex-direction:column;margin:9px 0}.newsletterOverlay__Title{text-align:center;width:unset}.newsletterOverlay__Component{margin:7px auto 6px}.newsletterOverlay__Disclaimer{text-align:center;max-width:unset;margin:0 auto}.pageHeaderMenuPreHeader{height:30px;position:relative;background-color:#FFF}.pageHeaderMenuOverlay{height:105px}.shippingMessage{display:block;position:absolute;right:20px;top:0;line-height:30px;font-family:Lato, sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;letter-spacing:.5px;font-size:11px;font-weight:700;letter-spacing:1px;color:#999}.shippingMessage img{display:inline-block;width:16px;margin:0 2px 0 8px;vertical-align:middle}.secondaryLevel{right:20px;line-height:26px;top:50px}.secondaryLevel ul{display:flex}.secondaryLevel ul li{display:block;flex:1 0 auto;margin:0 3px}.secondaryLevel .secondaryLevel_Item{display:inline-block;letter-spacing:1px;font-size:11px;color:#7F7F7F;padding:0 5px}.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{display:inline-block;padding:0;margin-right:20px}.secondaryLevel .secondaryLevel_Item:hover{color:#c01907}.secondaryLevel_Item i{height:15px;position:relative}.secondaryLevel_Item i svg{height:26px;fill:#999;margin:0 0 -4px 0}}@media (min-width: 1200px) and (max-width: 1200px){.secondaryLevel .secondaryLevel_Item.menuitem-Find-in-store,.secondaryLevel .secondaryLevel_Item.menuitem-Help{margin-right:20px}}.pageHeaderMenuSearchUnderlay{position:relative;height:156px;background:#efefef}.menuicon svg{height:24px;width:auto;fill:none;stroke-width:2.5px;stroke:#999;stroke-linecap:round;stroke-miterlimit:10}@media (min-width: 768px){.MiniCart_CartIndicator svg,.menuicon svg{height:20px}}\n'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: ".MiniCart_Cart_Heading{font-family:'Lato', sans-serif;-webkit-font-smoothing:antialiased;line-height:30px;font-size:12px;letter-spacing:0.5px;text-transform:none;min-height:73px;border-bottom:none;cursor:default;display:flex;flex-direction:column;align-items:center;justify-content:space-between;position:relative;background-color:white}.MiniCart_Cart_Heading a{pointer-events:none;max-height:24px}.MiniCart_Cart_Heading bellroy-cart-indicator{padding-top:25px;max-height:24px}.MiniCart_Cart_CloseButton{position:absolute;right:0;padding:20px 25px;border:none;font-family:'Lato', sans-serif;font-weight:700;font-size:12px;line-height:15px;color:#676767;background-color:transparent;cursor:pointer;-webkit-font-smoothing:antialiased;letter-spacing:1px}.MiniCart_Cart_CloseButton>span{margin-right:15px}.MiniCart_Cart_CloseButtonIcon{width:15px;height:15px}.MiniCart_Cart_CloseButtonIcon:before,.MiniCart_Cart_CloseButtonIcon:after{display:block;content:' ';border-left:1px solid #676767;position:absolute;right:50%;top:20px;height:15px}.MiniCart_Cart_CloseButtonIcon:before{transform:rotate(45deg)}.MiniCart_Cart_CloseButtonIcon:after{transform:rotate(-45deg)}.MiniCart_Cart_CloseButton:focus{outline:none}\n"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n                .MiniCart_Slider_Overlay {\n                    width: 100vw;\n                    height: 100vh;\n                    position: fixed;\n                    top: 0;\n                    bottom: 0;\n                    left: 0;\n                    right: 0;\n                    z-index: 1000000000;\n                    background-color: #000;\n                    opacity: 0;\n                    pointer-events: none;\n                }\n                .MiniCart_Slider_Overlay-visible {\n                    opacity: 0.4;\n                    pointer-events: all;\n                    transition: opacity 200ms ease-in;\n                }\n                .MiniCart_Slider {\n                    position: fixed;\n                    right: 0;\n                    bottom: 0;\n                    top: 0;\n                    width: 435px;\n                    max-width: 90vw;\n                    z-index: 1000000000;\n                    opacity: 0;\n                    pointer-events: none;\n                    transform: translateX(100%);\n                    transition: all 200ms linear;\n                }\n                .MiniCart_Slider-visible {\n                    transform: translateX(0);\n                    transition: all 500ms linear;\n                    opacity: 1;\n                    pointer-events: all;\n                }\n                .MiniCart_Slider_CloseButton {\n                    position: absolute;\n                    right: 0;\n                    top: 0;\n                    z-index: 200;\n                }\n            "
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Cart, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "pageHeaderContainer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "pageHeaderMenuOverlays",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "pageHeaderMenuOverlay pageHeaderMenuOverlays--search",
                            id: "search-menu-overlay",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "pageHeaderMenuOverlay__close js-close-overlay",
                                    "aria-label": "close",
                                    onClick: handleClickc2
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "/search",
                                    method: "get",
                                    className: "searchOverlay",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 35.6 36",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M35 32.6l-8.4-8.4A14.96 14.96 0 0 0 14.9 0C6.7 0 0 6.7 0 14.9s6.7 14.9 14.9 14.9c3.3 0 6.3-1.1 8.8-2.9l8.5 8.5c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8zM4 14.9C4 8.9 8.9 4 14.9 4s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9S4 20.9 4 14.9z"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                            className: "searchInputWrapper",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    name: "q",
                                                    placeholder: "Search"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "searchInputWrapper__underline"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pageHeaderMenuPreHeader",
                        id: "PageMenuPreHeader",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "/",
                                className: "br_absolute br_left-1/2 br_top-1/2 br_-translate-y-1/2 br_-translate-x-1/2 xl:pointer-fine:br_absolute xl:pointer-fine:br_left-8 xl:pointer-fine:br_top-6 xl:pointer-fine:br_p-0 xl:pointer-fine:br_m-0 xl:pointer-fine:br_transform-none all-link-states:br_text-grey-600",
                                "data-roybell": "",
                                "data-location": "homePageLogoLink",
                                "data-auto-id": "true",
                                id: "page-header-homepage-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://ucarecdn.com/6ccff8ab-d3c1-421d-80ac-46844acc40d5/white.webp",
                                    alt: "",
                                    width: 100
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                id: "hamburger",
                                className: "hamburger xl:pointer-fine:br_invisible",
                                onClick: handleClick,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "shippingMessage"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                                dangerouslySetInnerHTML: {
                                    __html: "\n  #page-header-homepage-1{\n    margin-top:1em;\n  }\n\n  @media screen and (max-width: 767px) {\n      #page-header-homepage-1{\n    margin-top:0em;\n  }\n  }\n"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                                type: "text/css",
                                dangerouslySetInnerHTML: {
                                    __html: '.mobileNewsletter{position:absolute;top:15px;left:62px}.menuicon{position:relative}.menuicon .indicator{position:absolute;top:-14px;right:-9px;border-radius:50%;background-color:#c01907;color:#fff;font-size:10px;height:12px;line-height:13px;text-indent:1px;white-space:nowrap;min-width:12px;text-align:center;font-family:"Lucida Console", Monaco, monospace;border:2px solid #fff;box-sizing:content-box}@media (min-width: 768px){.mobileNewsletter{display:none}.menuicon .indicator{top:-17px}}\n'
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobileNewsletter",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "js-open-newsletter",
                                    "data-auto-id": "true",
                                    id: "page-header-newsletter-1",
                                    onClick: handleClickc,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "menuicon",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "64px",
                                                height: "64px",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                stroke: "#999999",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        id: "SVGRepo_bgCarrier",
                                                        "stroke-width": "0"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        id: "SVGRepo_tracerCarrier",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                        id: "SVGRepo_iconCarrier",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z",
                                                                stroke: "#00055",
                                                                "stroke-width": "2",
                                                                "stroke-linecap": "round",
                                                                "stroke-linejoin": "round"
                                                            }),
                                                            " "
                                                        ]
                                                    })
                                                ]
                                            }),
                                            cart && cart.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "MiniCart_CartIndicator_Badge1"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "secondaryLevel",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "mobile-hidden",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "secondaryLevel_Item br_no-underline js-open-newsletter",
                                                "data-auto-id": "true",
                                                onClick: handleClickc,
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "menuicon",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                            width: "64px",
                                                            height: "64px",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            stroke: "#999999",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                    id: "SVGRepo_bgCarrier",
                                                                    "stroke-width": "0"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                    id: "SVGRepo_tracerCarrier",
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                    id: "SVGRepo_iconCarrier",
                                                                    children: [
                                                                        " ",
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z",
                                                                            stroke: "#00055",
                                                                            "stroke-width": "2",
                                                                            "stroke-linecap": "round",
                                                                            "stroke-linejoin": "round"
                                                                        }),
                                                                        " "
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        cart && cart.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "MiniCart_CartIndicator_Badge1"
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                onClick: handleClickc2,
                                                className: "js-open-search secondaryLevel_Item",
                                                "data-auto-id": "true",
                                                id: "page-header-search-1",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "menuicon",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 31 27",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                cx: "13.7",
                                                                cy: "11.1",
                                                                r: 9
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M20.1 17.5l6.8 6.8"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "myUniD",
                        style: {
                            background: "black"
                        },
                        className: "pageHeaderMenu br_group/menu br_z-50 br_pointer-events-none br_relative br_w-screen br_h-screen br_inset-0 br_overflow-hidden br_bg-black/25 br_opacity-0 br_transition-opacity br_ease-in-out br_duration-300 open:br_opacity-100 open:br_pointer-events-auto xl:pointer-fine:br_h-[75px] xl:pointer-fine:br_overflow-visible xl:pointer-fine:br_opacity-100 xl:pointer-fine:br_bg-transparent xl:pointer-fine:br_pointer-events-auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "topLevel__close br_absolute br_inset-0"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "topLevel  br_h-screen br_overflow-y-auto br_max-w-[420px] br_h-screen br_pb-36 br_-translate-x-full br_transition-transform br_ease-in-out br_duration-300 group-open/menu:br_translate-x-0 xl:pointer-fine:br_translate-x-0 xl:pointer-fine:br_overflow-visible xl:pointer-fine:br_z-10 xl:pointer-fine:br_h-auto xl:pointer-fine:br_max-w-none xl:pointer-fine:br_absolute xl:pointer-fine:br_left-0 xl:pointer-fine:br_top-[9px] xl:pointer-fine:br_pb-0",
                                "data-location": "Menu",
                                "data-roybell": "",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "xl:pointer-fine:br_flex xl:pointer-fine:br_pl-[155px]",
                                    id: "myNavv",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "br_group/item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:",
                                                href: "/",
                                                id: "2_phoneCases_all-phone-cases",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "br_flex br_items-center br_gap-2",
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            className: "br_group/item",
                                            onClick: handleHover,
                                            id: "yourDivId",
                                            onMouseEnter: ()=>{
                                                document.getElementById("yourDivId").style.cursor = "pointer";
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "br_flex br_items-center br_gap-2",
                                                        style: {
                                                            color: "white"
                                                        },
                                                        children: "Menu"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "subMenu br_bg-white br_max-h-0 br_overflow-hidden br_transition-[max-height] br_duration-300 br_ease-in-out group-open/item:br_max-h-[720px] group-open/item:br_overflow-y-auto xl:pointer-fine:br_absolute xl:pointer-fine:br_left-0 xl:pointer-fine:br_w-screen xl:pointer-fine:br_block xl:pointer-fine:br_opacity-0 xl:pointer-fine:br_h-0 xl:pointer-fine:br_max-h-min xl:pointer-fine:br_overflow-hidden xl:pointer-fine:br_transition-all xl:pointer-fine:br_duration-300 xl:pointer-fine:group-submenu-open/menu:br_h-[174px] xl:pointer-fine:group-submenu-open/menu:br_overflow-hidden xl:pointer-fine:group-open/item:br_opacity-100 xl:pointer-fine:group-open/item:br_z-20 xl:pointer-fine:br_pointer-events-none xl:pointer-fine:group-hover/item:br_pointer-events-auto",
                                                    style: {
                                                        background: "black"
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "br_px-8 br_py-4 xl:pointer-fine:br_pb-8 xl:pointer-fine:br_pt-12",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                                className: "br_hidden br_border-none xl:pointer-fine:br_block xl:pointer-fine:br_bg-grey-200 br_absolute br_w-full br_h-[1px] br_top-[5px] br_left-0 "
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "br_columns-2 br_gap-4 xl:pointer-fine:br_columns-auto xl:pointer-fine:br_flex xl:pointer-fine:br_gap-5 xl:pointer-fine:br_justify-center xl:pointer-fine:br_items-stretch 2xl:pointer-fine:br_justify-start 2xl:pointer-fine:br_ml-[140px]",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/search?cat=Cr\xe8me Homme",
                                                                            id: "0_bags_0_backpacks",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Backpacks",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "https://ucarecdn.com/203791dd-2376-408b-8d3c-d5b404eb15f0/1.webp?auto=format&fit=max"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    style: {
                                                                                        color: "white"
                                                                                    },
                                                                                    children: "Cr\xe8me Homme"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/search?cat=Cr\xe8me Femme",
                                                                            id: "0_bags_1_crossbody-bags",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Slings & Crossbody Bags",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "https://ucarecdn.com/9bc42e1b-2fc0-4a0c-8895-80cc6a6ed9fb/2.webp?auto=format&fit=max"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    style: {
                                                                                        color: "white"
                                                                                    },
                                                                                    children: "Cr\xe8me Femme"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/search?cat=Cr\xe8me B\xe9b\xe9",
                                                                            id: "0_bags_2_tote-bags",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Tote & Shoulder Bags",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "https://ucarecdn.com/d553a1a1-9f38-43f9-b4a6-f7cd504ab20d/3.webp?auto=format&fit=max"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    style: {
                                                                                        color: "white"
                                                                                    },
                                                                                    children: "Cr\xe8me B\xe9b\xe9"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "br_group/sub-item br_break-inside-avoid xl:pointer-fine:br_w-[10vw] xl:pointer-fine:br_max-w-[120px] xl:pointer-fine:br_text-center",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                            className: "br_block br_py-2 br_text-grey-500 br_no-underline br_text-base-sans-stretched hover:br_text-orange active:br_text-orange xl:pointer-fine:br_relative xl:pointer-fine:br_py-0 xl:pointer-fine:br_flex xl:pointer-fine:br_flex-col xl:pointer-fine:br_gap-1 xl:pointer-fine:br_items-center",
                                                                            href: "/shop",
                                                                            id: "0_bags_4_work-bags",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                                                                                    className: "br_hidden xl:pointer-fine:br_flex xl:pointer-fine:br_items-center xl:pointer-fine:br_h-24",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                        alt: "Work Bags",
                                                                                        className: "br_block br_w-full br_h-full br_rounded-md br_object-contain br_object-center",
                                                                                        loading: "lazy",
                                                                                        sizes: "100vw",
                                                                                        src: "https://ucarecdn.com/f0a18bf0-3a27-4e97-a46a-7d6b559e0839/all.webp"
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    style: {
                                                                                        color: "white"
                                                                                    },
                                                                                    children: "All"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "br_group/item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:",
                                                href: "/about",
                                                id: "4_travel_all-travel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "br_flex br_items-center br_gap-2",
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "About Us"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "br_group/item",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "br_flex br_items-center br_justify-between br_px-8 br_py-4  br_border-solid br_border-0 br_border-b  br_text-grey-600 br_text-lg-sans-bold-stretched br_no-underline xl:pointer-fine: xl:pointer-fine:br_text-base-sans-bold-stretched xl:pointer-fine:group-hover/item: xl:pointer-fine:focus:",
                                                href: "/contact",
                                                id: "about-us_about-us",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "br_flex br_items-center br_gap-2",
                                                    style: {
                                                        color: "white"
                                                    },
                                                    children: "Contact Us"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: "\n.MiniCart_CartIndicator_Badge1 {\n    box-sizing: content-box!important;\n    position: absolute;\n    top: -5px;\n    right: -5px;\n    height: 3px;\n    width: 3px;\n    border-radius: 8px;\n    background-color: #c01907; \n    color: #fff;\n    border: 2px solid #fff;\n    padding: 2px;\n}\n"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                dangerouslySetInnerHTML: {
                    __html: " \n  @media only screen and (max-width: 600px) {\n      #page-header-homepage-1{\n        margin-top: 0;\n  }\n  }\n"
                }
            })
        ]
    });
}
/* harmony default export */ const Navbar2 = (NavBar);

;// CONCATENATED MODULE: ./components/index.ts






/***/ }),

/***/ 60729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\abc\Desktop\Hadi\My Bussiness\ForeverLiving\web\app\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 24521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Load"
    });
}


/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 84986:
/***/ (() => {



/***/ }),

/***/ 56812:
/***/ (() => {



/***/ }),

/***/ 96577:
/***/ (() => {



/***/ }),

/***/ 71338:
/***/ (() => {



/***/ }),

/***/ 38604:
/***/ (() => {



/***/ })

};
;