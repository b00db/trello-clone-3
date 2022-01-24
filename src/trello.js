// 카드 추가를 위한 코드
const cardAddWrap = document.querySelector(".cardAddWrap"),
    cardAddLabel = cardAddWrap.querySelector(".addLabel"),
    addCardForm = cardAddWrap.querySelector("form");

// .addLabel 클릭 시 입력할 수 있는 form을 생성
function clickCardAddLabelEvent(event) {
    event.preventDefault();
    cardAddLabel.style.display = 'none';
    addCardForm.style.display = 'block';
    addCardForm.querySelector("input").focus();
}

function init() {
    cardAddLabel.addEventListener("click", clickCardAddLabelEvent);
}

init();