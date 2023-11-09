import { commonComponentProps, getAttrs, getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
// import { Button } from "../../shared/ui/button/button.js"
// import { Input } from "../../shared/ui/input/input.js"


export default (props) => {
    const {
        extraClasses = {},
        extraAttrs = {},
        baseClass = "",
        getCN
    } = { ...commonComponentProps, ...props }

    const getClassName = (block, elem, mod) => getCN(block,elem, mod)

    return getPage({
        title: "Главная",
        body: `
<div class="content-container">


${Header(
            {
                extraClasses: {},
                extraAttrs: {},

            }
        )}
              
<section class="popular" ${getAttrs(extraAttrs)}>
Здесь будет слайдер
</section>

<section class="FAQ" ${getAttrs(extraAttrs)}>
<div class="${getClassName("FAQ", "item", extraClasses)} 'aboutUs' " ${getAttrs(extraAttrs)}>
<h2 class="${getClassName("FAQ", "header", extraClasses)} " ${getAttrs(extraAttrs)}>О нас</h2>
<p class="${getClassName("FAQ", "miniHeader", extraClasses)} " ${getAttrs(extraAttrs)}>> 100 сотрудников</p>
<p class="${getClassName("FAQ", "text", extraClasses)} " ${getAttrs(extraAttrs)}>Аттестованных middle и senior разработчиков со всеми необходимыми компетенциями для создания качественных продуктов, которые занимают призовые места на всероссийских и международных конкурсах.</p>
<p class="${getClassName("FAQ", "miniHeader", extraClasses)} " ${getAttrs(extraAttrs)}>Своя диджитал академия</p>
<p class="${getClassName("FAQ", "text", extraClasses)} " ${getAttrs(extraAttrs)}>Курсы по основам управления проектами, веб-разработки, программированию. Много практики, основанной на проектах нашей компании, познавательные лекции и море интерактива.</p>
</div>
<div class="${getClassName("FAQ", "item", extraClasses)} 'aboutCourse' " ${getAttrs(extraAttrs)}>
<h2 class="${getClassName("FAQ", "header", extraClasses)} " ${getAttrs(extraAttrs)}>Как пройти курс</h2>
<div>
    <div>
        <p class="${getClassName("FAQ", "text", extraClasses)} " ${getAttrs(extraAttrs)}>Записывайтесь и получайте новые знания! Делайте репост и отправляйте друзьям, которым эта новость будет полезна.</p>
        <p class="${getClassName("FAQ", "miniHeader", extraClasses)} " ${getAttrs(extraAttrs)}>Ждем вас на наших курсах!</p>
    </div>
    <div><img src="./img/qr.png" alt="qr-код"/></div>
</div>
</div>
</section>
</div>
          
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