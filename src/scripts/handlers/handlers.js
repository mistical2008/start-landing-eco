// import { AsYouType } from "libphonenumber-js";
import { printFormData } from "/@input/scripts/utils";

function toggleActive(selector, toggleClassName) {
  const el = document.querySelector(`${selector}`);
  el.classList.toggle(toggleClassName);
}

function showPopupContainer(containerSelector, pageContentSelector) {
  const $popupContainer = document.querySelector(containerSelector);
  document.body.style.overflowY = "hidden";
  document.querySelector(pageContentSelector).classList.add("_blur");
  document.querySelector("footer").classList.add("_blur");
  $popupContainer.style.display = "block";
}

function hidePopupContainer(containerSelector, pageContentSelector) {
  const $popupContainer = document.querySelector(containerSelector);
  document.body.style.overflowY = "auto";
  $popupContainer.style.display = "none";
  document.querySelector(pageContentSelector).classList.remove("_blur");
  document.querySelector("footer").classList.remove("_blur");
}

function showPopup(popupSelector) {
  const $popup = document.querySelector(popupSelector);
  $popup.style.display = "block";
}

function hidePopup(popupSelector) {
  const $popup = document.querySelector(popupSelector);
  $popup.style.display = "none";
}

function formatPhoneAsYouType(value, countryCode = "RU") {
  return new AsYouType(countryCode).input(value);
}

function handleSubmit(form, sendCallback) {
  const formData = new FormData();
  Array.from(form.elements).forEach((item) => {
    if (item.tagName === "INPUT") {
      formData.append(item.name, item.value);
    }
  });

  sendCallback(formData);
}

export {
  toggleActive,
  hidePopup,
  showPopup,
  formatPhoneAsYouType,
  handleSubmit,
  printFormData,
  showPopupContainer,
  hidePopupContainer,
};
