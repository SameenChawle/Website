var featuredButton = document.getElementById("featured");
var latestButton = document.getElementById("latest");

var featuredProducts = document.getElementById("featuredProducts");
var latestProducts = document.getElementById("latestProducts");

featuredButton.onclick = function(){
    featuredButton.style.color= "#0e1422";
    featuredButton.style.border= "solid 2px #b3bb6f";
    featuredButton.style.padding= "3px 12px";
    featuredButton.style.fontWeight= "500";
    featuredButton.style.borderRadius= "100px";
    featuredProducts.style.display="flex";
    featuredProducts.style.transition= "display 1.5s ease-out";

    latestButton.style.color = "#3d6200"
    latestButton.style.border = "none";
    latestButton.style.fontWeight = "400";
    latestProducts.style.display = "none";
    latestProducts.style.transition= "display 1.5s ease-out";
}


latestButton.onclick = function(){
    latestButton.style.color= "#0e1422";
    latestButton.style.border= "solid 2px #b3bb6f";
    latestButton.style.padding= "3px 12px";
    latestButton.style.fontWeight= "500";
    latestButton.style.borderRadius= "100px";
    latestProducts.style.display = "flex";

    featuredButton.style.color = "#3d6200"
    featuredButton.style.border = "none";
    featuredButton.style.fontWeight = "400";
    featuredProducts.style.display = "none";

}

function likeProduct(likeButton){
    var productImage = likeButton.closest('.productImage');
        productImage.classList.toggle('liked');

        likeButton.classList.toggle('liked');
        likeButton.src = likeButton.classList.contains('liked') 
            ? 'icons/filledheart.svg' 
            : 'icons/heart.svg';
}

function showProduct(productNumber){
    localStorage.setItem('SelectedProduct', productNumber);
    window.location.href='productDescription.html';
}