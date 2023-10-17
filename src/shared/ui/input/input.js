export default (placeholder="", className="") => {
    return `
    <input type="text" class="${className}" placeholder="${placeholder}">
<!--<script >-->
<!--let input = document.querySelector(".page__input")-->
<!--input.addEventListener("input", function() {-->
<!--    return input.value;-->
<!--});</script>-->
    `
}