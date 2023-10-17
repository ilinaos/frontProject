export default (text = "", className="button", state="_isEnable") => {
return `
    <button class="${className}${state}">${text}</button>
<!--<script >-->
<!--let button = document.querySelector(".page__button")-->
<!--button.addEventListener("click", function() {-->
<!--    -->
<!--});</script>-->

`
};

