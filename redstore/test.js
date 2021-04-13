function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var total = 0;
  
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i];
      var priceElement = cartRow.getElementsByClassName("cart-price")[0];
      var quantityElement = cartRow.getElementsByClassName(
        "cart-quantity-input"
      )[0];
  
      console.log(priceElement, quantityElement);
  
      var price = parseFloat(priceElement.innerText.replace("$", ""));
  
      console.log(price);
  
      var quantity = quantityElement.value;
  
      console.log(price * quantity);
      
      total = total + price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("cart-total-price")[0].innerText =
      "$" + total;
  }
  

  // try more targetted approach to class names
  // append cart right before related products