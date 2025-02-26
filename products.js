
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
