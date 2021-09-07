let database = [
    
  {
    id: "Работник",
    name: "",
    type: "none",
    number: "",
  },

];

let databaseBusiness = [
  {
    id: "Бизнес",
    name: "NO",
    type: "Салон красоты",
    number: "+996554515411",
  },
];

const $cards = document.querySelector(".cards");
const $rab = document.querySelector(".rab");
const $bzn = document.querySelector(".bzn");


$rab.addEventListener("click", () => {
    cardTemplate(database)
});

$bzn.addEventListener("click", () => {
    cardTemplate(databaseBusiness)
});

function cardTemplate(arr) {
  const card = arr
    .map((item) => {
      return `
        <div class="card  text-white bg-dark mb-3 " style="max-width: 18rem;">
        <div class="card-header">${item.id}</div>
        <div class="card-body">
          <h5 class="card-title ">Имя: ${item.name}</h5>
          <p class="card-text mb-3 h6">Тип: ${item.type}</p>
          <a href="tel:${item.number}" class="h6 card-text mt-2 d-blcok text-decoration-none" >${item.number}</a>
          <a href="https://wa.me/${item.number}" class="h6 card-text d-block mt-2 text-decoration-none">Написать</a>
        </div>
      </div>
        `;
    })
    .join("");

  $cards.innerHTML = card;
}
