"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@mui/material/styles");
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const InputBase_1 = __importDefault(require("@mui/material/InputBase"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Menu_1 = __importDefault(require("@mui/material/Menu"));
const Menu_2 = __importDefault(require("@mui/icons-material/Menu"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const Search_1 = __importDefault(require("@mui/icons-material/Search"));
const DynamicFeed_1 = __importDefault(require("@mui/icons-material/DynamicFeed"));
const MenuItemLink_1 = require("./MenuItemLink");
let menuItems;
menuItems = [
    { text: "Animals", to: "/animals" },
    { text: "Exercises", to: "/exercises" },
];
let settings;
settings = ["Profile", "Account", "Dashboard", "Logout"];
const Search = (0, styles_1.styled)("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0, styles_1.alpha)(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: (0, styles_1.alpha)(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));
const SearchIconWrapper = (0, styles_1.styled)("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const StyledInputBase = (0, styles_1.styled)(InputBase_1.default)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = react_1.default.useState(null);
    const [anchorElUser, setAnchorElUser] = react_1.default.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (react_1.default.createElement(AppBar_1.default, { position: "static" },
        react_1.default.createElement(Container_1.default, { maxWidth: "xl" },
            react_1.default.createElement(Toolbar_1.default, { disableGutters: true },
                react_1.default.createElement(MenuItemLink_1.MenuItemLink, { to: "/", component: react_router_dom_1.Link },
                    react_1.default.createElement(DynamicFeed_1.default, { sx: { display: { xs: "none", md: "flex" }, mr: 1 } })),
                react_1.default.createElement(Box_1.default, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } } },
                    react_1.default.createElement(IconButton_1.default, { size: "large", "aria-label": "account of current user", "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleOpenNavMenu, color: "inherit" },
                        react_1.default.createElement(Menu_2.default, null)),
                    react_1.default.createElement(Menu_1.default, { id: "menu-appbar", anchorEl: anchorElNav, anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        }, keepMounted: true, transformOrigin: {
                            vertical: "top",
                            horizontal: "left",
                        }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                            display: { xs: "block", md: "none" },
                        } }, menuItems.map((item) => (react_1.default.createElement(MenuItemLink_1.MenuItemLink, { key: item.text, to: item.to, onClick: handleCloseNavMenu },
                        react_1.default.createElement(Typography_1.default, { textAlign: "center" }, item.text)))))),
                react_1.default.createElement(MenuItemLink_1.MenuItemLink, { to: "/", component: react_router_dom_1.Link },
                    react_1.default.createElement(DynamicFeed_1.default, { sx: { display: { xs: "flex", md: "none" }, mr: 1 } })),
                react_1.default.createElement(Box_1.default, { sx: { flexGrow: 1, display: { xs: "none", md: "flex" } } }, menuItems.map((item) => (react_1.default.createElement(Button_1.default, { component: react_router_dom_1.Link, key: item.text, to: item.to, onClick: handleCloseNavMenu, sx: { my: 2, color: "white", display: "block" } }, item.text)))),
                react_1.default.createElement(Search, null,
                    react_1.default.createElement(SearchIconWrapper, null,
                        react_1.default.createElement(Search_1.default, null)),
                    react_1.default.createElement(StyledInputBase, { placeholder: "Search\u2026", inputProps: { "aria-label": "search" } })),
                react_1.default.createElement(Box_1.default, { sx: { flexGrow: 0 } },
                    react_1.default.createElement(Tooltip_1.default, { title: "Open settings" },
                        react_1.default.createElement(IconButton_1.default, { onClick: handleOpenUserMenu, sx: { p: 0 } },
                            react_1.default.createElement(Avatar_1.default, { alt: "Remy Sharp", src: "/static/images/avatar/2.jpg" }))),
                    react_1.default.createElement(Menu_1.default, { sx: { mt: "45px" }, id: "menu-appbar", anchorEl: anchorElUser, anchorOrigin: {
                            vertical: "top",
                            horizontal: "right",
                        }, keepMounted: true, transformOrigin: {
                            vertical: "top",
                            horizontal: "right",
                        }, open: Boolean(anchorElUser), onClose: handleCloseUserMenu }, settings.map((setting) => (react_1.default.createElement(MenuItem_1.default, { key: setting, onClick: handleCloseUserMenu },
                        react_1.default.createElement(Typography_1.default, { textAlign: "center" }, setting))))))))));
};
exports.default = ResponsiveAppBar;
//# sourceMappingURL=ResponsiveAppBar.js.map