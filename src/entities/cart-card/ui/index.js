import { commonComponentProps, getAttrs } from "../../../shared/lib/index.js";
import { testCard } from "../../../shared/config/constants.js";

export function cartCard (props) {
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "cartCard",
        getCN,
    } = { ...commonComponentProps, ...props }
    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    const cardMarkup=`
    <div class="${getClassName("", extraClasses)}">
    <img class="${getClassName("item", extraClasses)}" src="${testCard.img}"/>
    <div class="${getClassName("item", extraClasses)} ${getClassName("info", extraClasses)}">
    <p class="${getClassName("label", extraClasses)}">${testCard.label}</p>
    <p class="${getClassName("productName", extraClasses)}">«${testCard.productName}»</p>
    <p class="${getClassName("registration", extraClasses)}">Регистрация на курс: ${testCard.registration.startDate} - ${testCard.registration.endDate}</p>
    <p class="${getClassName("startCourse", extraClasses)}">Начало курса: ${testCard.startCourse}</p>
    <img class="close" src="./close.png"/>
    </div>
</div>
    `;

    return cardMarkup;
}