import { catalogCard } from "../../entities/catalog-card/ui/index.js";

export function Slider() {
    return `
    <swiper-container class="mySwiper" navigation="true">
    <swiper-slide>${catalogCard()}</swiper-slide>
    <swiper-slide>${catalogCard()}</swiper-slide>
    <swiper-slide>${catalogCard()}</swiper-slide>
    <swiper-slide>${catalogCard()}</swiper-slide>
    <swiper-slide>${catalogCard()}</swiper-slide>
    <swiper-slide>${catalogCard()}</swiper-slide>
    <swiper-slide>${catalogCard()}</swiper-slide>

  </swiper-container>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    `
}