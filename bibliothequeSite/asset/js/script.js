// show menu 

document.querySelector(".fa-bars").onclick = function(){
    let menu = document.querySelector(".menu")
    menu.style.left = "0px"
}

document.querySelector(".fa-window-close").onclick = function(){
    let menu = document.querySelector(".menu")
    menu.style.left = "-1000px"
}


// show children
let iconsChild = document.querySelectorAll(".menu__option span>i")
iconsChild.forEach(function(icon) {
    icon.onclick = function(){
        let option = this.parentElement.parentElement
        option.classList.toggle("expandChild")
        option.querySelector(".menu__option-children").classList.toggle("displayChild")
    }  
});


// show subchildren
let iconsSubChild = document.querySelectorAll(".option__child span>i")
iconsSubChild.forEach(function (icon) {
    icon.onclick = function () {
        let option = this.parentElement.parentElement
        option.classList.toggle("expandSubChild")
    }
})


//Function for weitung text

// function typeWriter(emenent_id, a, i = 0) {
//   if (i <= a) {
//     //console.log(id)
//     console.log(i)
//     emenent_id.innerHTML = i;
//     i++;
//     setTimeout(()=>{typeWriter(a,i)}, 10);
//   }
// }

// const a = document.getElementById("a")


// console.log(a)
// function handleScrollAnimation(){
    

// }
// window.addEventListener('scroll', () => {
//   typeWriter("entrepereneurs",100)
// })