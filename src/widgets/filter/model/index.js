export default class FilterModel {
    static selectors={
        instanceSelector: "data-js-filter",
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
        console.debug(this.inputs)
        this.init()
    }

    getSearchParam(btn){
        return btn.getAttribute(FilterModel.selectors.checkboxSelectors)
    }

    checkboxChanged(ev){
        console.debug(ev)
        console.debug(this.inputs)
        //метод билдера, принимает значение чекбокса, собирает выбранные, посылает запрос на бэк
        //обновить через innerhtml
    }

    init(){
        this.inputs.forEach(function (input) {
            input.addEventListener("change", this.checkboxChanged)
        })
    }
}