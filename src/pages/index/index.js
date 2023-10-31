import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
import { Button } from "../../shared/ui/button/button.js"
import { Input } from "../../shared/ui/input/input.js"


export default () => {
    return getPage({
        title: "Главная",
        body: `


${Header(
            {
                extraClasses: {},
                extraAttrs: {},

            }
        )}
            <h1>Главная</h1>            
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/cart.html">Корзина</a>
                    </li>
                    <li>
                        <a href="/catalog.html">Каталог</a>
                    </li>
                </ul>
            </nav>
            ${Input({
            type: "text",
            placeholder: "your text",
            extraAttrs: {},
            extraClasses: {}
        })}
            
            ${Button({
            label: "click me",
            extraAttrs: {
                "data-js-required": true,
                "id": "btn"
            },
            extraClasses: {}
        })}
             ${Footer(
            {
                extraClasses: {},
                extraAttrs: {},

            }
        )}

            
        `,
        meta: [

        ]
    })
}