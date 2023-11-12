import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";
import { getBtn } from "../../../features/toCartButton/index.js";
import { testCard } from "../../../shared/config/constants.js";

export function catalogCard (props) {
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "catCard",
        getCN,
    } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    const cardMarkup=`
    <div class="${getClassName("", extraClasses)}">
    <img class="${getClassName("item", extraClasses)}" src="${testCard.img}"/>
    <p class="${getClassName("item", extraClasses)}">${testCard.label}</p>
    <p class="${getClassName("item", extraClasses)}">«${testCard.productName}»</p>
    ${getBtn(testCard.btnText)}
</div>
    `;

    return cardMarkup;
}