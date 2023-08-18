let btn = document.querySelector("#white-icon");
let sidebar= document.querySelector(".sidebar");
let sidebarsmall=document.querySelector("#sidebarsmall") 
let searchbar= document.querySelector("input");
let magnifyingglass=document.querySelector(".fa-magnifying-glass")
// searchbar.addEventListener("click",()=>{
//     console.log("hellow");
//     searchbar.append(magnifyingglass);
    
// })
btn.addEventListener("click",function(){
    console.log("hellow");
    sidebar.classList.toggle("sidebar-clicked");
    sidebarsmall.classList.toggle("sidebar-small");
});