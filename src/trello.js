// 카드관련 html tag 추출
let cardWrap = document.querySelector(".cardWrap"),
    cardAddWrap = document.querySelector(".cardAddWrap"),
    cardAddLabel = cardAddWrap.querySelector(".addLabel"),
    addCardForm = cardAddWrap.querySelector("form"),
    addCardInput = addCardForm.querySelector("input"),
    addCardBtn = addCardForm.querySelector("button"),
    addCardClose = addCardForm.querySelector(".close");

// 리스트관련 html tag 추출
let listWrap = document.querySelector(".listWrap"),
    list = listWrap.querySelector(".list"),
    listTitleWrap = list.querySelector(".listTitleWrap"),
    title = listTitleWrap.querySelector(".title"),
    titleEdit = listTitleWrap.querySelector("form"),
    listTitle = titleEdit.querySelector("input"),
    listAddWrap = document.querySelector(".listAddWrap"),
    listAddLabel = listAddWrap.querySelector(".addLabel"),
    addListForm = listAddWrap.querySelector("form"),
    addListInput =addListForm.querySelector("input"),
    addListClose = addListForm.querySelector(".close");

// 카드 추가를 위한 코드

// .addLabel 클릭 시 입력할 수 있는 form을 생성
function clickCardAddLabelEvent(event) {
    event.preventDefault();
    const clickedItem = event.target;
    const clickedAddCard = clickedItem.parentNode.querySelector(".addCard");
    clickedItem.style.display = "none";
    clickedAddCard.style.display = "block";
    clickedAddCard.focus();
}

// form에 입력한 내용을 card에 add
function cardSubmit(event) {
    event.preventDefault();
    const clickedItem = event.target;
    const clickedInput = clickedItem.querySelector(".addCardContent");
    const clickedAddLabel = clickedItem.parentNode.querySelector(".addLabel");
    const clickedCardWrap = clickedItem.parentNode.parentNode.querySelector(".cardWrap");
    const currentValue = clickedInput.value;
    const div = document.createElement("div");
    div.className = "cardContent";
    div.innerText = currentValue;
    clickedCardWrap.appendChild(div);
    clickedInput.value ="";
    clickedItem.style.display = "none";
    clickedAddLabel.style.display = "block";
    console.log(clickedItem);
    console.log(cardWrap);
}

// addCardBtn 옆 x 누를 시 내용 지우고 form을 닫고 원래 addLabel을 노출
function clickAddCardCloseEvent(event) {
    event.preventDefault();
    const clickedItem = event.target.parentNode;
    const clickedAddLabel = clickedItem.parentNode.querySelector(".addLabel");
    const clickedInput = clickedItem.parentNode.querySelector(".addCardContent");
    clickedInput.value = "";
    clickedItem.style.display = "none";
    clickedAddLabel.style.display = "block";
}

// list 추가를 위한 코드

// .addLabel 클릭 시 입력할 수 있는 form을 생성
function clickListAddLabelEvent(event) {
    event.preventDefault();
    listAddLabel.style.display = 'none';
    addListForm.style.display = 'block';
    addListInput.focus();
}

// form에 입력한 내용을 list에 add
function listSubmit(event) {
    event.preventDefault();
    const currentValue = addListInput.value;
    
    list = document.createElement("div");
    list.className = "list";
    listTitleWrap = document.createElement("div");
    listTitleWrap.className = "listTitleWrap";
    title = document.createElement("div");
    title.className = "title";
    title.innerText = currentValue;
    titleEdit = document.createElement("form");
    titleEdit.className = "titleEdit";
    listTitle = document.createElement("input");
    listTitle.className = "listTitle";
    listTitle.type = "text";
    listTitle.placeholder = "list";
    titleEdit.appendChild(listTitle);
    listTitleWrap.appendChild(title);
    listTitleWrap.appendChild(titleEdit);
    list.appendChild(listTitleWrap);

    cardWrap = document.createElement("div");
    cardWrap.className = "cardWrap";
    cardAddWrap = document.createElement("div");
    cardAddWrap.className = "cardAddWrap";
    cardAddLabel = document.createElement("div");
    cardAddLabel.className = "addLabel";
    cardAddLabel.innerText = "+ Add another card";
    addCardForm = document.createElement("form");
    addCardForm.className = "addCard";
    addCardInput = document.createElement("input");
    addCardInput.className = "addCardContent";
    addCardInput.type = "text";
    addCardInput.placeholder = "card";
    addCardBtn = document.createElement("button");
    addCardBtn.className = "btn addCardBtn";
    addCardBtn.innerText = "Add Card";
    addCardClose = document.createElement("span");
    addCardClose.className = "close addCardClose";
    addCardClose.innerText = "X";
    addCardForm.appendChild(addCardInput);
    addCardForm.appendChild(addCardBtn);
    addCardForm.appendChild(addCardClose);
    cardAddWrap.appendChild(cardAddLabel);
    cardAddWrap.appendChild(addCardForm);

    list.appendChild(cardWrap);
    list.appendChild(cardAddWrap);

    listWrap.appendChild(list);

    addListInput.value = "";
    addListForm.style.display = 'none';
    listAddLabel.style.display = 'block';

    list = document.querySelectorAll(".list");
    for(let i=0; i<list.length; i++) {
        list[i].querySelector(".addLabel").addEventListener("click", clickCardAddLabelEvent);
        list[i].querySelector(".addCard").addEventListener("submit", cardSubmit);
        list[i].querySelector(".close").addEventListener("click", clickAddCardCloseEvent);
    }
}

// addListBtn 옆 x 누를 시 내용 지우고 form을 닫고 원래 addLabel을 노출
function clickAddListCloseEvent(event) {
    event.preventDefault();
    addListInput.value ="";
    addListForm.style.display = 'none';
    listAddLabel.style.display = 'block';
}

function init() {
    listAddLabel.addEventListener("click", clickListAddLabelEvent);
    addListForm.addEventListener("submit", listSubmit);
    addListClose.addEventListener("click", clickAddListCloseEvent);
    cardAddLabel.addEventListener("click", clickCardAddLabelEvent);
    addCardForm.addEventListener("submit", cardSubmit);
    addCardClose.addEventListener("click", clickAddCardCloseEvent);
}

init();