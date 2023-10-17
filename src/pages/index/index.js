import { getPage } from "../../shared/lib/index.js";
import btn from "../../shared/ui/button/button.js"
import inputTxt from "../../shared/ui/input/input.js"

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
            
            <div>${inputTxt("your text")}</div>
            <div>${btn("clicker", "button", "_isEnable")}</div>

            
        `,
        meta: [

        ]
    })
}