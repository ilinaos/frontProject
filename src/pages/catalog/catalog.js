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
        ${Header(
            {
                extraClasses: {},
                extraAttrs: {},

            }
        )}
            <h1>Каталог</h1>
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                    <li>
                        <a href="/catalog.html">Каталог</a>
                    </li>
                </ul>
            </nav>
            ${Filter({ category: cat })}
             ${Footer(
            {
                extraClasses: {},
                extraAttrs: {},

            }
        )}
        `
    })
}