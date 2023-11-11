export default class FilterModel {
    static selectors={
        instanceSelector: "[data-js-filter]",
        btnSelectors: "data-js-search-params"
    };

    static instance = null
    
    constructor() {
        if (FilterModel.instance){
            return FilterModel.instance
        }

        FilterModel.instance = document.querySelector(FilterModel.selectors.instanceSelector)
        this.btns = Array.from(document.querySelectorAll(`[${FilterModel.selectors.btnSelectors}]`))
this.url = new URL(window.location.href)
        // eslint-disable-next-line no-console
        console.log(this.btns)
        this.init()
    }

    getSearchParam(btn){
        return btn.getAttribute(FilterModel.selectors.btnSelectors)
    }

    buttonClick(ev, clickedBtn){
        // eslint-disable-next-line no-console
        console.log(ev)
        // eslint-disable-next-line no-console
        console.log(clickedBtn)

    }


    init(){
        this.btns.forEach((btn) => {
            btn.addEventListener("click", this.buttonClick.bind(this, btn))
        })
    }
}