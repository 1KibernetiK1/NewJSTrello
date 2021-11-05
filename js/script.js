const btnCreateList = document.querySelector("#btn-create-list");
const desk = document.querySelector("#desk");
let counter = 1;
const clearBtn = document.querySelector("#btn_clear_desk");
const inputListName = document.querySelector("#list-name");



function AddList() {
    let list = document.createElement("div");
    list.classList.add("list");
    let list_content = document.createElement("div");
    list_content.classList.add("list_content");
    list.append(list_content);

    let listName = document.getElementById("list-name").value;
    let h2 = document.createElement("H2");
    if (listName == "") {
        listName = "Новый список" + counter;
        counter++;
    }

    h2.innerHTML = listName;
    list_content.append(h2);
    let edit_img = document.createElement("img");
    edit_img.setAttribute("src", "img/pen-solid.svg");
    edit_img.setAttribute("alt", "redact list name");
    edit_img.setAttribute("width", "30px");
    edit_img.classList.add("edit-list");
    list_content.append(edit_img);
    
    let add_card = document.createElement("p");
    add_card.innerHTML = " + Добавить карточку";
    add_card.classList.add("add_card");

    let delete_button_img = document.createElement("img");
    delete_button_img.setAttribute("src", "img/delete.svg");
    delete_button_img.setAttribute("alt", "redact list name");
    delete_button_img.setAttribute("width", "20px");
    delete_button_img.classList.add("delete-list");
    list_content.append(delete_button_img);

    list.append(add_card);
    
    desk.append(list);
}

function EditList(e) {
        let obj = e.target;
        if(obj.classList.contains("edit-list")){
            let list = obj.parentNode.parentNode;
            let list_text = list.querySelector("h2");
            list_text.setAttribute("contenteditable","true");
            list_text.focus();
        }
        if(obj.classList.contains("delete-list")){
            obj.parentNode.parentNode.remove();
            //counter = 1;
        }
        if(obj.classList.contains("add_card")){
            let card = document.createElement("div");
            card.classList.add("list-card");
            card.innerHTML = "<textarea class='area' ></textarea> <p><img class='delete_card' src='img/times-solid.svg' alt=''></p>";
            obj.append(card);
        }
        if(obj.classList.contains("delete_card")){
            obj.parentNode.parentNode.remove();
        }
}

btnCreateList.addEventListener("click", AddList);

inputListName.addEventListener("keydown", e => {
    if (e.key == "Enter") {
        btnCreateList.click();
    }
}
);

clearBtn.addEventListener("click", function () {
    desk.innerHTML = null;
    counter = 1;
});

desk.addEventListener("click", EditList);



