//helper functions
import _ from "lodash";
export const containsObj = (obj, list) => {
  return !!list.find((listItem) => _.isEqual(listItem, obj));
};

export const enableFormOnInputCompletion = () => {
  let canSubmit = false;
  let counter = 1; //since submit element is also a form element
  const formElements = document.forms["payment-details-form"].elements;
  for (var i = 0; i < formElements.length; i++) {
    if (formElements[i].value.length > 0) counter = counter + 1;
  }
  canSubmit = counter == formElements.length;
  document.getElementById("submitForm").disabled = !canSubmit;
};
const numbersOnly = (event) => {
  return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));
};

export const setValidatedData = (event) => {
  const attributeArr = event.target.attributes;
  for (let index = 0; index < attributeArr.length; index++) {
    const element = attributeArr[index];
    if (element.name == "inputmode" && element.value == "numeric") {
      const returnVal = numbersOnly(event);
      console.log(returnVal);
    }
  }
};

document.addEventListener("keyup", enableFormOnInputCompletion);

document.addEventListener("keypress", setValidatedData);
