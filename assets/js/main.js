import visa from "../img/svgIcons/visa.svg";
import diners from "../img/svgIcons/diners.svg";
import amex from "../img/svgIcons/amex.svg";
import discover from "../img/svgIcons/discover.svg";
import jcb from "../img/svgIcons/jcb.svg";
import maestro from "../img/svgIcons/maestro.svg";
import mastercard from "../img/svgIcons/mastercard.svg";
import unionpay from "../img/svgIcons/unionpay.svg";
import amex_single from "../img/svgIcons/amex_single.svg";
import visa_single from "../img/svgIcons/visa_single.svg";
import diners_single from "../img/svgIcons/diners_single.svg";
import discover_single from "../img/svgIcons/discover_single.svg";
import jcb_single from "../img/svgIcons/jcb_single.svg";
import maestro_single from "../img/svgIcons/maestro_single.svg";
import mastercard_single from "../img/svgIcons/mastercard_single.svg";
import unionpay_single from "../img/svgIcons/unionpay_single.svg";

import { CardDataStorage } from "./db";
import { containsObj } from "./helper";

window.onload = () => {
  const name = document.getElementById("name");
  const cardnumber = document.getElementById("cardNumber");
  const expirationdate = document.getElementById("expirationDate");
  const securitycode = document.getElementById("securityCode");
  //   const output = document.getElementById("output");
  const ccicon = document.getElementById("ccicon");
  //   const ccsingle = document.getElementById("ccsingle");
  //   const generatecard = document.getElementById("generateCard");
  let cardCount = 0;

  function handleSubmitForm(e) {
    e.preventDefault();
    if (CardDataStorage.get("CardCount")) {
      cardCount = CardDataStorage.get("CardCount", true);
    } else {
      cardCount = 1;
    }
    const formData = new FormData(form);
    window[`cardDetails${cardCount}`] = {};
    for (let [key, value] of formData.entries()) {
      window[`cardDetails${cardCount}`][key] = value;
    }

    const storageData = CardDataStorage.getAll();
    const cardDataArr = Object.values(storageData);
    const isPresent = containsObj(
      window[`cardDetails${cardCount}`],
      cardDataArr
    );
    /**
     * @param cardCount
     */
    if (!isPresent) {
      CardDataStorage.save(
        `cardDetails${cardCount}`,
        window[`cardDetails${cardCount}`]
      );
      CardDataStorage.save("CardCount", cardCount + 1);
    }
    // console.log(CardDataStorage.get("CardCount", true));
  }

  const form = document.getElementById("paymentDetailsForm");
  form
    ? form.addEventListener("submit", handleSubmitForm)
    : console.log("form element not found");
};
