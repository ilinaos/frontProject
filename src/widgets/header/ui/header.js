import { commonComponentProps, getAttrs } from "../../../shared/lib";
import { Logo } from "../../../shared/ui/logo/index.js";
import { Menu } from "../../../shared/ui/menu/index.js"

const menuItemsText = [
    {
        name: "ГЛАВНАЯ",
        pageSrc: "../../../index.html"
    },
    {
        name: "КАТАЛОГ",
        pageSrc: "../../../catalog.html"
    },
    {
        name: "КОРЗИНА",
        pageSrc: "../../../cart.html"
    } ]
let headerMenuItems = []
for (const menuItem of menuItemsText) {
    headerMenuItems.push(`<a href="${menuItem.pageSrc}">${menuItem.name}</a>`)
}

export function Header(props) {

    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "header",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
            <header  class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-header="" >
            <div class="${getClassName("logo")}">
                ${Logo({ imgSrc: "./icons/logo.svg" })}
            </div>
            <nav class="${getClassName("nav")}">
            ${Menu({ menuItems: headerMenuItems })}
</nav>
            </header>
            `
}