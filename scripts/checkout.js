
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';

import '../data/backend-practice.js'


async function loadPage(){
  console.log('load page');

  await loadProductsFetch();

  await new Promise((resolve) => {
 
    loadCart(() => {
      resolve();
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
  return 'value2';
}

loadPage();
/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
 
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();

});
*/
/*
new Promise((resolve) => {
 
  loadProducts(() => {
    
    resolve();
  });


}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  
 
}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/



/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
  
*/

/*
loadProducts(() => {
  loadCart(()=> {
    renderOrderSummary();
    renderPaymentSummary();
  });
  
});
*/