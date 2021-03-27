import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";
import createFooter from "./components/common/createFooter.js";

const productsUrl = baseUrl + "objects";

createMenu();
createFooter();

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";
    // throw "custom message";

    json.forEach(function (object) {
      container.innerHTML += `<a class="object" href="/">
                                        <h4> ${object.name}</h4>
                                        <p> ${object.description}</p>
                                        <p>Quantity available ${object.quantity}</p>
                                    </a>`;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
})();
