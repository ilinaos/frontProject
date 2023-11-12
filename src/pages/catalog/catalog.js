import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
import { Filter } from "../../widgets/filter/index.js";
import { catalogCard } from "../../entities/catalog-card/ui/index.js";

// const cat = [
//     {
//         all: {
//             name: "Все курсы",
//             searchParam: "all",
//             isChecked: true
//         },
//         front: {
//             name: "Фронтенд",
//             searchParam: "front",
//             isChecked: false
//         },
//         back: {
//             name: "Бэкенд",
//             searchParam: "back",
//             isChecked: false
//         },
//     }
// ]

const cat = [
    {

        name: "Все курсы",
        searchParam: "all",
        isActive: true
    },
    {
        name: "Бэкенд-разработка",
        searchParam: "backend",
        isActive: false
    },
    {
        name: "Веб-разработка",
        searchParam: "web",
        isActive: false
    },
    {
        name: "Мобильная разработка",
        searchParam: "mobile",
        isActive: false
    },

    {
        name: "Анализ данных",
        searchParam: "data",
        isActive: false
    },

    {
        name: "IT-инфраструктура",
        searchParam: "it",
        isActive: false
    },
    {
        name: "Управление разработкой",
        searchParam: "management",
        isActive: false
    },

]
export default () => {
    return getPage({
        title: "Каталог",
        body: `
<div class="content-container">
        ${Header(
            {
                extraClasses: {},
                extraAttrs: {},

            }
        )}
            <h1>Каталог</h1>
           
           <div class="catalogContent">
           
            ${Filter({ category: cat })}
            <section class="goods">
            ${catalogCard()}
            ${catalogCard()}
            ${catalogCard()}
            ${catalogCard()}
            ${catalogCard()}
            ${catalogCard()}
            ${catalogCard()}
            ${catalogCard()}
</section>
</div>
            </div>
             ${Footer(
            {
                extraClasses: {},
                extraAttrs: {},

            }
        )}
        `
    })
}