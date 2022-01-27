// 카드관련 html tag 추출
/*
let cardWrap = document.querySelector(".cardWrap"),
    cardAddWrap = document.querySelector(".cardAddWrap"),
    cardAddLabel = cardAddWrap.querySelector(".addLabel"),
    addCardForm = document.querySelector(".addCard"),
    addCardInput = document.querySelector(".addCardContent"),
    addCardBtn = document.querySelector(".addCardBtn"),
    addCardClose = document.querySelector(".addCardClose");
*/
// 리스트관련 html tag 추출
let listWrap = document.querySelector(".listWrap"),
    /*
    list = document.querySelector(".list"),
    listTitleWrap = document.querySelector(".listTitleWrap"),
    title = document.querySelector(".title"),
    titleEdit = document.querySelector(".titleEdit"),
    listTitle = document.querySelector(".listTitle"),
    */
    listAddWrap = document.querySelector(".listAddWrap"),
    listAddLabel = listAddWrap.querySelector(".addLabel"),
    addListForm = document.querySelector(".addList"),
    addListInput =document.querySelector(".addListTitle"),
    addListClose = document.querySelector(".addListClose");

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
    
    cardAddLabel.addEventListener("click", clickCardAddLabelEvent);
    addCardForm.addEventListener("submit", cardSubmit);
    addCardClose.addEventListener("click", clickAddCardCloseEvent);
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
    /*
    cardAddLabel.addEventListener("click", clickCardAddLabelEvent);
    addCardForm.addEventListener("submit", cardSubmit);
    addCardClose.addEventListener("click", clickAddCardCloseEvent);
    */
}

init();