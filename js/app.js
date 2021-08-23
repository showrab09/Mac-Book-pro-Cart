//function for updating extra facilities and total
function upgrade(extraID,price) {
    const extraFeaturePrice = document.getElementById(extraID);
    extraFeaturePrice.innerText = price;
    
    const memoryTotal = document.getElementById("extra-memory").innerText;
    const storageTotal = document.getElementById("extra-storage").innerText;
    const deliveryTotal= document.getElementById("fast-delivery").innerText;

    const totalAmount = 1299 + parseInt(memoryTotal) + parseInt(storageTotal) + parseInt(deliveryTotal);
    //price Without promo Code
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = totalAmount;
    //Final Total Display
    const finalTotal = document.getElementById("final-total");
    finalTotal.innerText = totalAmount;
    
}
//function for applying promo Code
function promo() {
     const promoInput = document.getElementById("promo-input").value;
     if (promoInput.toLowerCase() == "stevekaku") {
         const totalPrice = document.getElementById("total-price");
         const discountPrice = parseInt(totalPrice.innerText) * .80;
         const finalTotal = document.getElementById("final-total");
         finalTotal.innerText = discountPrice;
     } else {
         alert("Please Apply Valid Promo Code. Ex- SteveKaku");
     }
}


//memory
document.getElementById('memory-8').addEventListener('click', function () {
    upgrade("extra-memory", 0);  
})
document.getElementById('memory-16').addEventListener('click', function () {
    upgrade("extra-memory", 180);
})
//storage Extra
document.getElementById("storage-256").addEventListener("click", function () {
    upgrade("extra-storage", 0);
});
document.getElementById("storage-512").addEventListener("click", function () {
    upgrade("extra-storage", 100);
});
document.getElementById("storage-1t").addEventListener("click", function () {
    upgrade("extra-storage", 180);
});
//delivery Extra
document.getElementById("delivery-normal").addEventListener("click", function () {
    upgrade("fast-delivery", 0);
});
document.getElementById("delivery-fast").addEventListener("click", function () {
      upgrade("fast-delivery", 20);
});

//Promo Apply Button
document.getElementById("promo-apply").addEventListener("click", function () {
    promo();
    const promoInput = document.getElementById("promo-input");
    promoInput.value = '';
});