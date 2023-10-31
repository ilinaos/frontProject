import { commonComponentProps, getAttrs } from "../../../shared/lib";
import { Logo } from "../../../shared/ui/logo/index.js";

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
            <ul>
            <li><a href="/">Главная</a></li>
            <li><a href="/catalog.html">Каталог</a></li>
            <li><a href="/cart.html">Корзина</a></li>
            </ul>
</nav>
            </header>
            `
}