"use strict";
exports.__esModule = true;
var solid_bootstrap_1 = require("solid-bootstrap");
var App_module_css_1 = require("./App.module.css");
var HeaderLogo = function (props) {
    var link = props.link, text = props.text, logo = props.logo;
    return (React.createElement(solid_bootstrap_1.Navbar, { bg: "light", variant: "light", "class": App_module_css_1["default"].header, style: { "padding": 0 } },
        React.createElement(solid_bootstrap_1.Container, null,
            React.createElement(solid_bootstrap_1.Navbar.Brand, { href: link },
                React.createElement("img", { alt: "", src: logo, width: "30", height: "30" }),
                text))));
};
exports["default"] = HeaderLogo;
