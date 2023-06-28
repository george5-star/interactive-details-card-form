"use strict";

const allInputs = document.querySelectorAll(".form__input");
const allErrorMessages = document.querySelectorAll(".form__error");
const cardNameEl = document.getElementById("card-name");
const cardNumberEl = document.getElementById("card-number");
const cardDateMonthEl = document.getElementById("card-month");
const cardDateYearEl = document.getElementById("card-year");
const cardCvcEl = document.getElementById("cvc-number");

const errorMessageCardName = document.querySelector(
  ".form__error-message-card-name"
);
const errorMessageCardNumber = document.querySelector(
  ".form__error-message-card-number"
);
const errorMessageDate = document.querySelector(".form__error-message-date");
const errorMessageCvc = document.querySelector(".form__error-message-cvc");

const page = document.querySelector(".container");
const responseCard = document.querySelector(".response-card");
const submitBtn = document.querySelector(".form__btn");
const responseBtn = document.querySelector(".response-card__btn");

let bgCardName = document.querySelector(".card__name");
let bgCardNumber = document.querySelector(".card__number");
let bgCardDateMonth = document.querySelector(".card__month");
let bgCardDateYear = document.querySelector(".card__year");
let bgCardCvc = document.querySelector(".card__secret");

function formatName(value) {
  const onlyStrings = value.replace(/[\d]/g, "");
  return onlyStrings;
}

function formatNumber(value) {
  const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) => {
    return [$1, $2, $3, $4].filter((group) => group).join(" ");
  });
}

function formatCvc(value) {
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers;
}

function formatDate(value) {
  const onlyNumbers = value.replace(/[^\d]/g, "");

  return onlyNumbers;
}

cardNameEl.addEventListener("input", function (e) {
  e.target.value = formatName(e.target.value);
  if (e.target.value) {
    cardNameEl.classList.remove("error");
    errorMessageCardName.classList.remove("active");
  } else {
    cardNameEl.classList.add("error");
    errorMessageCardName.classList.add("active");
  }

  if (!cardNameEl.value) {
    bgCardName.textContent = "Jane Appleseed";
  } else {
    bgCardName.textContent = cardNameEl.value;
  }
});

cardNumberEl.addEventListener("input", function (e) {
  e.target.value = formatNumber(e.target.value);

  if (e.target.value) {
    cardNumberEl.classList.remove("error");
    errorMessageCardNumber.classList.remove("active");
  } else {
    cardNumberEl.classList.add("error");
    errorMessageCardNumber.classList.add("active");
  }

  if (!cardNumberEl.value) {
    bgCardNumber.textContent = "0000 0000 0000 0000";
  } else {
    bgCardNumber.textContent = formatNumber(cardNumberEl.value);
  }
});

cardDateMonthEl.addEventListener("input", function (e) {
  e.target.value = formatDate(e.target.value);
  if (e.target.value) {
    cardDateMonthEl.classList.remove("error");
    errorMessageDate.classList.remove("active");
  } else {
    cardDateMonthEl.classList.add("error");
    errorMessageDate.classList.add("active");
  }

  if (!cardDateMonthEl.value) {
    bgCardDateMonth.textContent = "00";
  } else {
    bgCardDateMonth.textContent = cardDateMonthEl.value;
  }
});

cardDateYearEl.addEventListener("input", function (e) {
  e.target.value = formatDate(e.target.value);
  if (e.target.value) {
    cardDateYearEl.classList.remove("error");
    errorMessageDate.classList.remove("active");
  } else {
    cardDateYearEl.classList.add("error");
    errorMessageDate.classList.add("active");
  }

  if (!cardDateYearEl.value) {
    bgCardDateYear.textContent = "00";
  }
  bgCardDateYear.textContent = cardDateYearEl.value;
});

cardCvcEl.addEventListener("input", function (e) {
  e.target.value = formatCvc(e.target.value);

  if (e.target.value) {
    cardCvcEl.classList.remove("error");
    errorMessageCvc.classList.remove("active");
  } else {
    cardCvcEl.classList.add("error");
    errorMessageCvc.classList.add("active");
  }

  if (!cardCvcEl.value) {
    bgCardCvc.textContent = "000";
  }
  bgCardCvc.textContent = cardCvcEl.value;
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    cardNameEl.value &&
    cardNumberEl.value &&
    cardDateMonthEl.value &&
    cardDateYearEl.value &&
    cardCvcEl.value &&
    cardNumberEl.value.length === 19 &&
    cardCvcEl.value.length === 3
  ) {
    page.classList.add("hide");
    responseCard.classList.add("show");
  } else {
    allInputs.forEach((input) => input.classList.add("error"));
    allErrorMessages.forEach((error) => error.classList.add("active"));
  }
});

responseBtn.addEventListener("click", function () {
  page.classList.remove("hide");
  responseCard.classList.remove("show");
  allInputs.forEach((input) => (input.value = ""));
  allInputs.forEach((input) => input.classList.remove("error"));
  allErrorMessages.forEach((error) => error.classList.remove("active"));

  bgCardCvc.textContent = "000";
  bgCardDateYear.textContent = "00";
  bgCardDateMonth.textContent = "00";
  bgCardName.textContent = "Jane Appleseed";
  bgCardNumber.textContent = "0000 0000 0000 0000";
});
