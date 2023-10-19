import { getPage } from "../../shared/lib/index.js";
import { Button } from "../../shared/ui/button/button.js"
import { Input } from "../../shared/ui/input/input.js"

export default () => {
    return getPage({
        title: "Главная",
        body: `
            <h1>Главная</h1>            
            <nav>
                <ul>
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/about.html">О Нас</a>
                    </li>
                </ul>
            </nav>
            ${Input({
            type: "text", 
            placeholder: "your text",
            extraAttrs: {
                
            }, 
            extraClasses: {
                
            }
            })}
            
            ${Button({
            label: "click me",
            extraAttrs: {
                "data-js-required": true,
                "id": "btn"
            },
            extraClasses: {
                
            }
        })}
            

            
        `,
        meta: [

        ]
    })
}