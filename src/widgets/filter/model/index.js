export default class FilterModel {
    static selectors={
        instanceSelector: "[data-js-filter]",
        checkboxSelectors: "data-js-search-params"
    };

    static instance = null
    
    constructor() {
        if (FilterModel.instance){
            return FilterModel.instance
        }

        FilterModel.instance = document.querySelector(FilterModel.selectors.instanceSelector)
        this.inputs = Array.from(document.querySelectorAll(`[${FilterModel.selectors.checkboxSelectors}]`))
this.url = new URL(window.location.href)
        // eslint-disable-next-line no-console
        console.log(this.inputs)
        this.init()
    }

    getSearchParam(checkbox){
        return checkbox.getAttribute(FilterModel.selectors.checkboxSelectors)
    }

    checkboxChanged(ev, input){
        // eslint-disable-next-line no-console
        console.log(ev)
        // eslint-disable-next-line no-console
        console.log(input)
        //метод билдера, принимает значение чекбокса, собирает выбранные, посылает запрос на бэк
        //обновить через innerhtml
    }

    init(){
        this.inputs.forEach((input) => {
            input.addEventListener("change", this.checkboxChanged.bind(this, input))
        })
    }
}