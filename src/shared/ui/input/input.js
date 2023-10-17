export default () => {
    return `
    <input type="text" className="page__input" placeholder="Ваш текст">
<script >
let input = document.querySelector(".page__input")
input.addEventListener("input", function() {
    return input.value;
});</script>
    `
}