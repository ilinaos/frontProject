import { getPage } from "../../shared/lib/index.js";
import { Header } from "../../widgets/header/index.js";
import { Footer } from "../../widgets/footer/index.js";
import { cartCard } from "../../entities/cart-card/ui/index.js";

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
          
          
          <div class="order-area">
          <section class="cards">
          ${cartCard()}
          ${cartCard()}
          ${cartCard()}
</section>
          
          
          <form class="order-form">          
          <h2 class="order-item">Итого</h2>
          <div class="order-info order-item">
          <p class="order-item">3 товара</p><p class="order-item money">24 000</p>
          </div>
          <label  class="order-item"><p class="order-item">Промокод</p><p class="order-item"><input class="input" type="text" placeholder="Введите промокод"></p></label>
          <div  class="order-info order-item ">
          <p class="order-item ">Итоговая сумма</p><p class="order-item money">24 000</p>
          </div>
          <div class="isCentred"><input type="submit" value="Оформить заказ"  class="button"></div>
</form>
          </div>
          <p class="toCatalog"><a href="../../../catalog.html">Продолжить покупки</a></p>
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