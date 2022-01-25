// 카드 추가를 위한 코드
const cardWrap = document.querySelector(".cardWrap"),
    cardAddWrap = document.querySelector(".cardAddWrap"),
    cardAddLabel = cardAddWrap.querySelector(".addLabel"),
    addCardForm = cardAddWrap.querySelector("form"),
    addCardInput = addCardForm.querySelector("input");

// .addLabel 클릭 시 입력할 수 있는 form을 생성
function clickCardAddLabelEvent(event) {
    event.preventDefault();
    cardAddLabel.style.display = 'none';
    addCardForm.style.display = 'block';
    addCardInput.focus();
}

// form에 입력한 내용을 card에 add
function cardSubmit(event) {
    event.preventDefault();
    const currentValue = addCardInput.value;
    const div = document.createElement("div");
    div.className = "cardContent";
    div.innerText = currentValue;
    cardWrap.appendChild(div);
    addCardInput.value ="";
    addCardForm.style.display = 'none';
    cardAddLabel.style.display = 'block';
}

function init() {
    cardAddLabel.addEventListener("click", clickCardAddLabelEvent);
    addCardForm.addEventListener("submit", cardSubmit);
}

init();