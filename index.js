
const click = document.querySelector(`.click`);
const btn1 = document.querySelector(`.btn1`);
const btn2 = document.querySelector(`.btn2`);
const pop = document.querySelector(`.popup_box`);

click.addEventListener("click", function() {
    pop.style.display = "block";
    pop.style.opacity = "1";
    pop.style.pointerEvents = "auto";
});
btn1.addEventListener("click", function(){
    pop.style.display = "none";
});
btn2.addEventListener("click", function(){
    pop.style.display = "none";
    alert("Account Permanently Deleted.");
})