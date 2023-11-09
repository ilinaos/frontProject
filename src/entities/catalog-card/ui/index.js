import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";
import { getBtn } from "../../../features/toCartButton/index.js";

const testCard={
    img: "./cardImg.png",
    head: "Бесплатный офлайн курс",
    goodName: "Frontend-разработчик",
    btnText: "В корзину"
}

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
    <p class="${getClassName("item", extraClasses)}">${testCard.head}</p>
    <p class="${getClassName("item", extraClasses)}">«${testCard.goodName}»</p>
    ${getBtn(testCard.btnText)}
</div>
    `;

    return cardMarkup;
}