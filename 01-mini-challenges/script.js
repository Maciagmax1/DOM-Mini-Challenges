// VENDING MACHINE CHALLENGE
const limeButton = document.querySelector(".lime-cola");

const displayedTotal = document.querySelector(".total");

const peanutButton = document.querySelector(".salted-peanuts");

const chocolateButton = document.querySelector(".chocolate-bar");

const fruitButton = document.querySelector(".fruit-gummies");

let totalPrice = 0;

limeButton.addEventListener("click", (e) => {
  e.preventDefault();
  totalPrice += 2;
  displayedTotal.textContent = `Total: $${totalPrice}.00`;
});

peanutButton.addEventListener("click", (e) => {
  e.preventDefault();
  totalPrice += 3;
  displayedTotal.textContent = `Total: $${totalPrice}.00`;
});

chocolateButton.addEventListener("click", (e) => {
  e.preventDefault();
  totalPrice += 4;
  displayedTotal.textContent = `Total: $${totalPrice}.00`;
});

fruitButton.addEventListener("click", (e) => {
  e.preventDefault();
  totalPrice += 6;
  displayedTotal.textContent = `Total: $${totalPrice}.00`;
});

// COIN CHALLENGE
const quantity = document.querySelector("#quantity");

const coin = document.querySelector("#coin");

const moneyButton = document.querySelector("button");

const coinForm = document.querySelector("form");

const coinContainer = document.querySelector(".coinBase");

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let quantity = document.querySelector("#quantity").value;
  let coinType = document.querySelector("#coin").value;
  for (let i = 0; i < quantity; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add("coin");
    newCoin.textContent = coinType;
    coinContainer.append(newCoin);
  }
});

// LIGHT CHALLENGE
const lightParent = document.querySelector(".light-parent");

const lightContainer = document.querySelector(".light-container");

const light = document.querySelector(".light");

const onButton = document.querySelector(".on");

const offButton = document.querySelector(".off");

const toggleButton = document.querySelector(".toggle");

const endButton = document.querySelector(".end");

onButton.addEventListener("click", (e) => {
  e.preventDefault();
  light.classList.add("lit");
});

offButton.addEventListener("click", (e) => {
  e.preventDefault();
  light.classList.remove("lit");
});

toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  light.classList.toggle("lit");
});

endButton.addEventListener("click", (e) => {
  e.preventDefault();
  lightParent.removeChild(lightContainer);
  onButton.setAttribute("disabled", "true");
  offButton.setAttribute("disabled", "true");
  toggleButton.setAttribute("disabled", "true");
  endButton.setAttribute("disabled", "true");
});
