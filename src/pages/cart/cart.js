import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";

export default () => {
    return getPage({
        title: "Корзина",
        body: `
<div class="content-container">
        ${Header(
            {
                extraClasses: {},
                extraAttrs: {},

            }
        )}
            <h1>Корзина</h1>
          
          
          <div class="order-area"><section class="cards"></section>
          <section class="order-form"></section>
          </div>
          <p class="to-catalog"><a href="../../../catalog.html">Продолжить покупки</a></p>
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