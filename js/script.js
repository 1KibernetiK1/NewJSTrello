const btnCreateList = document.querySelector(".btn");
const desk = document.querySelector(".new_desk");

btnCreateList.addEventListener("click", function(){
    let list = document.createElement('div');
    let listName = document.getElementById("list-name").nodeValue;
    list.innerHTML = listName;
    listName.document.querySelector("#desk")
});