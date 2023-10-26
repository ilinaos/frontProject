import { commonComponentProps, getAttrs } from "../../lib/index.js";

export function Input (props) {
    const { type = "", placeholder="", extraClasses = {}, extraAttrs = {}, baseClass = "input", getCN, children } = { ...commonComponentProps, ...props }

    const getClassName = (elem, mod) => getCN(baseClass, elem, mod)

    return `<input class="${getClassName("", extraClasses)}" ${getAttrs((extraAttrs))} type="${type}" placeholder="${placeholder}"/>`
}


/*
* return `<button class="${getClassName("",  extraClasses)}" ${getAttrs(extraAttrs)}>
                ${children || `<span class="${getClassName("label")}">${label}</span>`}
            </button>
* */