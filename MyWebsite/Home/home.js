let toogleNavStatus = false;
let toogleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTittle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");


    if (toogleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "300px";
        getSidebarTittle.style.opacity = "0.5";


        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = '1';
        }

        toogleNavStatus = true;
    } else if (toogleNavStatus === true) {

        getSidebar.style.width = "50px";
        getSidebarTittle.style.opacity = "0";


        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = '0';
        }
        getSidebarUl.style.visibility = "hidden";

        toogleNavStatus = false;
    }
}
// $(function(){
//     $('#link01').click(function(){
//         $('html, body').animate({
//             scrollTop : $('.graphical').offset().top
//         }, 300);
//     });
// });

// $(function(){
//     $('#link02').click(function(){
//         $('html, body').animate({
//             scrollTop: $('.simple').offset().top
//         }, 300)
//     })
// })