import { commonComponentProps, getAttrs } from "../../lib/index.js";

export function Menu (props) {
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "menu",
        getCN,
        menuItems=[]
    } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)
    let menuMarkup=""

    if (menuItems && menuItems.length > 0) {
        menuMarkup += `<ul class="${getClassName("", extraClasses)}" ${getAttrs((extraAttrs))}>`;

        // Добавляем каждый пункт меню в разметку
        menuItems.forEach((menuItem) => {
            menuMarkup += `<li class="${getClassName("item", extraClasses)}" ${getAttrs((extraAttrs))}>${menuItem}</li>`;
        });

        menuMarkup += `</ul>`;
    }

    return menuMarkup;
}

// <svg>
//             <use xlink:href="${imgSrc}"></use>
//         </svg>