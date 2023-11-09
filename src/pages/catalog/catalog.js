import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
import { Filter } from "../../widgets/filter/index.js";

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
            isChecked: true
        },
    {
            name: "Фронтенд",
            searchParam: "front",
            isChecked: false
        },
        {
            name: "Бэкенд",
            searchParam: "back",
            isChecked: false
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
           
           
           
            ${Filter({ category: cat })}
            <section class="goods">
            
</section>
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