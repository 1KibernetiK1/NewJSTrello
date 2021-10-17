const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");


btnCreateList.addEventListener("click", function(){
    let list = document.createElement('div');
    let listName = document.getElementById("list-name").value;
    list.innerHTML = listName;
    document.getElementById("desk").innerHTML+=listName;
    
});

if(listName = null)
{
   listName = toString("Новый список");
}