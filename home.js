function addcart(){
    alert("Added To Cart")
}
function addsign(){
  alert("THANK YOU")
}
/* shopimage 1,2,3 */

var MainImg = document.getElementById("MainImg");
      var smallimg = document.getElementsByClassName("small-img");

      smallimg[0].onclick = function(){
        MainImg.src = smallimg[0].src;
      }
      smallimg[1].onclick = function(){
        MainImg.src = smallimg[1].src;
      }
      smallimg[2].onclick = function(){
        MainImg.src = smallimg[2].src;
      }
      smallimg[3].onclick = function(){
        MainImg.src = smallimg[3].src;
      }


  // add to cart
  
  
  
    function addToCart(productName, price, imageUrl) {
    
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Add the new product to the cart
        cart.push({
            productName: productName,
            price: price,
            imageUrl: imageUrl,
            quantity: 1, 
        });

        
        localStorage.setItem("cart", JSON.stringify(cart));

    
        // window.location.href = "cart.html";
    }