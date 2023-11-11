import { commonComponentProps, getAttrs } from "../../../shared/lib";
import { Menu } from "../../../shared/ui/menu/index.js"

const footerMenuMarkup = `
<ul class="menu">
<li class="menu__item"><a href="">курсы</a></li>
<li class="menu__item"><a href="../../../index.html">о нас</a></li>
<li class="menu__item"><a href="">отзывы</a></li>
<li class="menu__item"><a href="">контакты</a></li>
</ul>
`

// const menuItemsText = [
//     {
//         name: "КУРСЫ",
//         pageSrc: ""
//     },
//     {
//         name: "О НАС",
//         pageSrc: "../../../index.html"
//     },
//     {
//         name: "ОТЗЫВЫ",
//         pageSrc: ""
//     },
//     {
//         name: "КОНТАКТЫ",
//         pageSrc: ""
//     },
// ]
// let footerMenuItems = []
// for (const menuItem of menuItemsText) {
//     footerMenuItems.push(`<a href="${menuItem.pageSrc}">${menuItem.name}</a>`)
// }

export function Footer (props){
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "footer",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `
    <footer class="${getClassName("", extraClasses)}" ${getAttrs(extraAttrs)} data-js-footer="" >
    <div class="${getClassName("first", extraClasses)}" ${getAttrs(extraAttrs)}>
    <nav class="${getClassName("nav")}">
            ${footerMenuMarkup}
</nav>
<div><a href="">Политика конфиденциальности</a></div>
</div>
    <div class="${getClassName("second", extraClasses)}" ${getAttrs(extraAttrs)}>
    <div class="${getClassName("contacts", extraClasses)}" ${getAttrs(extraAttrs)}>
    <p class="${getClassName("title", extraClasses)}">Наш адрес</p>
    <p class="${getClassName("info", extraClasses)}">г. Челябинск, ул. Лесопарковая 5/2</p>
</div>
    <div class="${getClassName("contacts", extraClasses)}" ${getAttrs(extraAttrs)}>
    <p class="${getClassName("title", extraClasses)}">Эл. почта</p>
    <p class="${getClassName("info", extraClasses)}">info@d-element.ru</p>
</div>
    
</div>

</footer>
    `
}