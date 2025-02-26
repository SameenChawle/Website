const slides = document.querySelectorAll(".productSlides img");
const dots = document.querySelectorAll(".dotsDisplay .dot");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    updateDots(slideIndex);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");

  updateDots(slideIndex);
}

function updateDots(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.src = "icons/selectedDot.svg";
    } else {
      dot.src = "icons/Dot.svg";
    }
  });
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

const quantitySelections = document.querySelectorAll(".quantitySelection");

quantitySelections.forEach((selection) => {
  const counter = selection.querySelector(".quantity");
  const decreaseBtn = selection.querySelector(".minus");
  const increaseBtn = selection.querySelector(".plus");

  let count = 0;

  increaseBtn.onclick = function () {
    count++;
    counter.textContent = count;
  };

  decreaseBtn.onclick = function () {
    if (count > 1) {
      count--;
      counter.textContent = count;
    }
  };
});

const details = document.getElementById("details");
var detailTab = document.getElementById("detailTab");

const reviews = document.getElementById("reviews");
var reviewTab = document.getElementById("reviewTab");

var detailIcon = document.getElementById("detailIcon");
var reviewIcon = document.getElementById("reviewIcon");

details.onclick = function () {
  detailTab.style.display = "flex";
  reviewTab.style.display = "none";
  details.style.backgroundColor = "#dde69b";
  reviews.style.color = "black";
  details.style.color = "#3d6200";
  reviews.style.backgroundColor = "white";

  detailIcon.src =
    detailIcon.src.includes("blackMore.svg") &&
    !detailIcon.src.includes("greenMore.svg")
      ? "icons/greenMore.svg"
      : "icons/blackMore.svg";

  reviewIcon.src =
    reviewIcon.src.includes("blackEmptyStar.svg") &&
    !reviewIcon.src.includes("greenEmptyStar.svg")
      ? "icons/greenEmptyStar.svg"
      : "icons/blackEmptyStar.svg";
};

reviews.onclick = function () {
  detailTab.style.display = "none";
  reviewTab.style.display = "flex";
  details.style.backgroundColor = "white";
  reviews.style.backgroundColor = "#dde69b";
  details.style.color = "black";
  reviews.style.color = "#3d6200";

  reviewIcon.src =
    reviewIcon.src.includes("blackEmptyStar.svg") &&
    !reviewIcon.src.includes("greenEmptyStar.svg")
      ? "icons/greenEmptyStar.svg"
      : "icons/blackEmptyStar.svg";

  detailIcon.src =
    detailIcon.src.includes("blackMore.svg") &&
    !detailIcon.src.includes("greenMore.svg")
      ? "icons/greenMore.svg"
      : "icons/blackMore.svg";
};

var likeButtons = document.querySelectorAll(".likeButton");
likeButtons.forEach(function (likeButton) {
  likeButton.onclick = function () {
    var productImage = likeButton.closest(".productImage");
    productImage.classList.toggle("liked");

    likeButton.classList.toggle("liked");
    likeButton.src = likeButton.classList.contains("liked")
      ? "icons/filledheart.svg"
      : "icons/heart.svg";
  };
});

var heartIcon = document.getElementById("heartIcon");

heartIcon.onclick = function () {
  heartIcon.classList.toggle("liked");
  heartIcon.src = heartIcon.classList.contains("liked")
    ? "icons/filledheart.svg"
    : "icons/heart.svg";
};

var cartSidebar = document.getElementById("addToCartSidebar");
var overlay = document.querySelector(".overlay");

function openCartSidebar() {
  cartSidebar.classList.add("openSidebar");
  overlay.classList.add("visible");
}

function closeCartSidebar() {
  cartSidebar.classList.remove("openSidebar");
  overlay.classList.remove("visible");
}

var shareBox = document.getElementById("shareModal");

function openShareBox() {
  shareBox.classList.add("openShareBox");
  overlay.classList.add("visible");
}

var reviewBox = document.getElementById("writeReview");

function openReviewBox() {
  reviewBox.classList.add("openReviewBox");
  overlay.classList.add("visible");
}

function closeReviewBox() {
  reviewBox.classList.remove("openReviewBox");
  overlay.classList.remove("visible");
}

function removeOverlay() {
  overlay.classList.remove("visible");
  cartSidebar.classList.remove("openSidebar");
  shareBox.classList.remove("openShareBox");
  reviewBox.classList.remove("openReviewBox");
}

const products = {
  product1: {
    name: "Smith's White Sliced Bread 500g",
    price: "AED 5.00",
    details:
      "Smith's White Sliced Bread stands out with its commitment to quality and sustainability. The bread's soft and fluffy texture is ideal for various uses, from a simple piece of buttered toast to a hearty sandwich. Packaged in eco-friendly, recyclable materials, it supports your commitment to a sustainable lifestyle.<br><br>Smith's White Sliced Bread is a classic favorite, baked fresh daily with the finest organic ingredients. Enjoy its soft, airy texture and golden crust, perfect for sandwiches, toast, and more.<br><br> <li> Organic Ingredients: Pure and wholesome.</li><li> No Additives: Free from artificial preservatives, colors, and flavors.</li><li>Soft and Fluffy: Perfect for any use.</li><li>Eco-Friendly Packaging: Recyclable materials.</li>",
    image1: "products/smith'sWhiteSlicedBread500g.svg",
    image2: "products/smith'sWhiteSlicedBread500g2.svg",
    image3: "products/smith'sWhiteSlicedBread500g3.svg",
    image4: "products/smith'sWhiteSlicedBread500g4.svg",
    category: "bakery",
  },

  product2: {
    name: "Smith's Brown Sliced Bread 500g",
    price: "AED 4.75",
    details:
      "Smith's Brown Sliced Bread is renowned for its dedication to quality and sustainability. With a rich, hearty texture, this bread is versatile enough for everything from a wholesome slice of toast to a satisfying sandwich. Packaged in environmentally friendly, recyclable materials, it aligns with your commitment to a greener lifestyle.<br><br>Freshly baked each day using only the finest organic ingredients, Smith's Brown Sliced Bread delivers a delightful nutty flavor and a soft yet robust texture, making it perfect for sandwiches, toast, and more.",
    image1: "products/smith'sBrownSlicedBread500g.svg",
    image2: "products/smith'sBrownSlicedBread500g2.svg",
    image3: "products/smith'sBrownSlicedBread500g3.svg",
    image4: "products/smith'sBrownSlicedBread500g4.svg",
    category: "bakery",
  },

  product3: {
    name: "Green Valley Burger Buns 6pcs",
    price: "AED 5.00",
    details:
      "<p>Enjoy the perfect pairing for your favorite burgers with our Soft Burger Buns. Each pack contains six freshly baked, pillowy-soft buns, crafted to elevate your meal experience. These versatile buns are ideal for classic beef burgers, grilled chicken sandwiches, or even veggie patties.</p><br>  <p><strong>Key Features:</strong></p><br><li><strong>Quantity:</strong> 6 buns per pack</li><li><strong>Texture:</strong> Light and fluffy, with a soft crust</li><li><strong>Taste:</strong> Mildly sweet flavor that complements any filling</li><li><strong>Versatile:</strong> Perfect for burgers, sliders, or as a base for creative sandwiches</li><li><strong>Freshness Guaranteed:</strong> Baked daily with quality ingredients</li><br><p><strong>Suggested Uses:</strong></p><br><li>Stack with your favorite proteins and toppings for a delicious burger night.</li><li>Use for mini sliders at parties or gatherings.</li><li>Toast lightly for a crunchy texture, perfect for breakfast sandwiches.</li><p><br>Elevate your dining experience with our Soft Burger Buns—your ideal companion for all your burger cravings!</p>",
    image1: "products/greenValleyBurgerBuns6pcs.svg",
    image2: "products/greenValleyBurgerBuns6pcs2.svg",
    image3: "products/greenValleyBurgerBuns6pcs3.svg",
    image4: "products/greenValleyBurgerBuns6pcs4.svg",
    category: "bakery",
  },

  product4: {
    name: "Carrots 500g",
    price: "AED 3.00",
    details:
      "<p>Fresh and crunchy, our 500g pack of carrots is perfect for a range of dishes - from salads to soups. Naturally sweet and packed with nutrients, these carrots are a great source of beta-carotene, fiber, and vitamins. Ideal for snacking or cooking, they bring color and health to every meal.</p>",
    image1: "products/carrots500g.svg",
    image2: "products/carrots500g2.svg",
    image3: "products/carrots500g3.svg",
    image4: "products/carrots500g4.svg",
    category: "vegetables",
  },

  product5: {
    name: "Chocolate Donuts 6pcs",
    price: "AED 5.00",
    details:
      "<p>Indulge in our delicious 6-pack of chocolate donuts, perfect for satisfying your sweet cravings! Soft and fluffy with a rich chocolate glaze, these donuts are ideal for breakfast, dessert, or a special treat any time of day. Enjoy with a cup of coffee or as a snack - pure chocolatey delight in every bite!</p>",
    image1: "products/chocolateDonut1.svg",
    image2: "products/chocolateDonut2.svg",
    image3: "products/chocolateDonut3.svg",
    image4: "products/chocolateDonut4.svg",
    category: "bakery",
  },

  product6: {
    name: "Croissant 6pcs",
    price: "AED 6.00",
    details:
      "<p>Our 6-pack of buttery croissants offers a taste of French-inspired delight! Flaky and golden on the outside, soft and airy on the inside, these croissants are perfect for breakfast or a quick snack. Enjoy them plain, or pair with your favorite jam, cheese, or chocolate spread for a delicious treat any time of day.</p>",
    image1: "products/croissant1.svg",
    image2: "products/croissant2.svg",
    image3: "products/croissant3.svg",
    image4: "products/croissant4.svg",
    category: "bakery",
  },

  product7: {
    name: "Eggplant Big 1kg",
    price: "AED 5.25",
    details:
      "<p>Our fresh, big 1kg eggplants are perfect for adding a rich, hearty texture and flavor to your meals. With a glossy, deep-purple skin and tender flesh, these eggplants are ideal for roasting, grilling, or adding to stews and curries. Packed with fiber, vitamins, and antioxidants, they're a nutritious choice for vegetarian and meat dishes alike. Enjoy their versatility and earthy taste in everything from baba ganoush to eggplant parmesan!</p>",
    image1: "products/eggplantBig1kg.svg",
    image2: "products/eggplantBig1kg2.svg",
    image3: "products/eggplantBig1kg3.svg",
    image4: "products/eggplantBig1kg4.svg",
    category: "vegetables",
  },

  product8: {
    name: "Fresh Cauliflower 1kg",
    price: "AED 6.95",
    details:
      "<p>Our fresh 1kg cauliflower is a crisp, nutritious addition to any meal, with dense, white florets perfect for a variety of dishes. This versatile vegetable can be roasted, steamed, mashed, or even enjoyed raw in salads and veggie platters. Rich in fiber, vitamins C and K, and antioxidants, cauliflower is a wholesome choice for adding flavor and nutrients to your meals. Perfect for making soups, stir-fries, or low-carb alternatives like cauliflower rice and mash!</p>",
    image1: "products/freshCauliflower1kg.svg",
    image2: "products/freshCauliflower1kg2.svg",
    image3: "products/freshCauliflower1kg3.svg",
    image4: "products/freshCauliflower1kg4.svg",
    category: "vegetables",
  },

  product9: {
    name: "Fresh Indian Malta 1kg",
    price: "AED 7.00",
    details:
      "<p>Our 1kg pack of fresh Indian Malta oranges brings a naturally sweet and tangy flavor, perfect for brightening up any snack or meal. Known for their vibrant color and juicy pulp, these Malts are ideal for fresh-squeezed juice, adding zest to fruit salads, or enjoying on their own. Packed with vitamin C and antioxidants, they're a refreshing, nutritious choice to enjoy daily. Elevate your fruit bowl with these juicy delights!</p>",
    image1: "products/freshIndianMalta1kg2.svg",
    image2: "products/freshIndianMalta1kg.svg",
    image3: "products/freshIndianMalta1kg3.svg",
    image4: "products/freshIndianMalta1kg4.svg",
    category: "fruits",
  },

  product10: {
    name: "Fresh Milk 2L",
    price: "AED 10.00",
    details:
      "<p>Our fresh milk is rich, creamy, and packed with essential nutrients like calcium and protein, making it a wholesome choice for the whole family. Perfect for pouring over cereal, blending into smoothies, or simply enjoyed on its own, this milk adds a touch of goodness to any meal. Whether for cooking, baking, or daily sipping, it's a fresh and delicious staple you can count on.</p>",
    image1: "products/freshMilk2L.svg",
    image2: "products/freshMilk2L2.svg",
    image3: "products/freshMilk2L3.svg",
    image4: "products/freshMilk2L4.svg",
    category: "dairy",
  },

  product11: {
    name: "Fresh Prawns Farmed Medium 350g",
    price: "AED 9.10",
    details:
      "<p>Our fresh, farmed medium prawns bring a delicate, succulent flavor to your favorite seafood dishes. These prawns are expertly cleaned and ready to cook, making them a convenient and delicious choice for meals. Ideal for grilling, stir-frying, or adding to pasta and curries, they offer a tender texture and sweet taste that seafood lovers will enjoy. Perfect for quick, flavorful meals with a touch of gourmet flair!</p>",
    image1: "products/freshPrawnsFarmedMedium350g.svg",
    image2: "products/freshPrawnsFarmedMedium350g2.svg",
    image3: "products/freshPrawnsFarmedMedium350g3.svg",
    image4: "products/freshPrawnsFarmedMedium350g4.svg",
    category: "seafood",
  },

  product12: {
    name: "Green Valley White Sliced Bread 250g",
    price: "AED 3.00",
    details:
      "<p>Green Valley White Sliced Bread is a delightful staple for any kitchen, crafted to offer a soft, fluffy texture and a deliciously mild flavor. Each slice is perfect for making sandwiches, toast, or as a base for your favorite spreads. This bread is made with quality ingredients, ensuring every bite is fresh and satisfying. Enjoy it with breakfast, lunch, or dinner, and elevate your meals with the simple pleasure of perfectly sliced bread.<br><br>Whether you're whipping up classic grilled cheese sandwiches, hearty peanut butter and jelly, or gourmet avocado toast, Green Valley White Sliced Bread provides the ideal canvas for your culinary creations. Its versatile nature means it's equally at home in a cozy family meal or a fancy brunch spread. With every loaf baked to perfection, this bread is not just a sidekick; it's an essential ingredient in your daily dining experience.</p>",
    image1: "products/greenValleyWhiteSlicedBread250g.svg",
    image2: "products/greenValleyWhiteSlicedBread250g2.svg",
    image3: "products/greenValleyWhiteSlicedBread250g3.svg",
    image4: "products/greenValleyWhiteSlicedBread250g4.svg",
    category: "bakery",
  },

  product13: {
    name: "Green Valley Whole Grain Seeded Bread 250g",
    price: "AED 15.00",
    details:
      "<p>Green Valley Whole Grain Seeded Bread is a wholesome and nutritious choice for those who value health without sacrificing flavor. Packed with a medley of seeds and whole grains, this bread boasts a hearty texture and rich taste that adds depth to any meal. Each slice is loaded with dietary fiber and essential nutrients, making it a fantastic option for sandwiches, toasting, or enjoying with your favorite spreads.<br><br>Perfect for breakfast, lunch, or dinner, this seeded bread pairs beautifully with a variety of toppings, from avocado and poached eggs to classic nut butter or hummus. Its robust flavor complements salads and soups, making it a versatile addition to your pantry. With Green Valley Whole Grain Seeded Bread, you can indulge in the goodness of whole grains while enjoying every bite!</p>",
    image1: "products/greenValleyWholeGrainSeededBread250g.svg",
    image2: "products/greenValleyWholeGrainSeededBread250g2.svg",
    image3: "products/greenValleyWholeGrainSeededBread250g3.svg",
    image4: "products/greenValleyWholeGrainSeededBread250g4.svg",
    category: "bakery",
  },

  product14: {
    name: "HPMD Chocolate Chip Muffins 12pcs",
    price: "AED 7.95",
    details:
      "<p>HPMD Chocolate Chip Muffins are a delightful treat that combines the rich, buttery flavor of freshly baked muffins with generous pockets of melt-in-your-mouth chocolate chips. Perfectly soft and moist, each muffin is a little indulgence that brings joy to any moment, whether it's breakfast, an afternoon snack, or a sweet dessert. The irresistible aroma of chocolate and baked goodness fills your kitchen, making them a favorite for both kids and adults alike.<br><br>This pack of 12 muffins is ideal for sharing with family and friends or keeping on hand for those moments when you crave something sweet. Enjoy them warm with a cup of coffee or tea, or simply on their own. HPMD Chocolate Chip Muffins are not just a snack; they're a delicious way to brighten your day and satisfy your sweet tooth!</p>",
    image1: "products/HPMDChocolateChipMuffins12pcs.svg",
    image2: "products/HPMDChocolateChipMuffins12pcs2.svg",
    image3: "products/HPMDChocolateChipMuffins12pcs3.svg",
    image4: "products/HPMDChocolateChipMuffins12pcs4.svg",
    category: "bakery",
  },

  product15: {
    name: "HPMD Gluten Free Bread 250g",
    price: "AED 15.25",
    details:
      "<p>HPMD Gluten Free Bread is a delicious alternative for those who are gluten-sensitive or seeking a healthier lifestyle without compromising on taste. Crafted with a blend of high-quality gluten-free ingredients, this bread offers a soft texture and a wholesome flavor that makes it perfect for sandwiches, toast, or enjoying with your favorite spreads. Each slice is carefully made to ensure it holds up well, providing a satisfying bite every time.<br><br>Whether you're making a classic peanut butter and jelly sandwich, a hearty grilled cheese, or simply enjoying a slice with butter, HPMD Gluten Free Bread delivers the versatility you need in your kitchen. Packed in a convenient 250g size, it's a pantry staple that allows everyone to enjoy the simple pleasure of bread without worry. Embrace the goodness of gluten-free living with this tasty, nutritious option!</p>",
    image1: "products/HPMDglutenFreeBread250g.svg",
    image2: "products/HPMDglutenFreeBread250g2.svg",
    image3: "products/HPMDglutenFreeBread250g3.svg",
    image4: "products/HPMDglutenFreeBread250g4.svg",
    category: "bakery",
  },

  product16: {
    name: "HPMD Pita Bread 250g 4pcs",
    price: "AED 5.00",
    details:
      "<p>HPMD Pita Bread is a versatile and delicious addition to your meals, perfect for creating satisfying wraps, sandwiches, or enjoying as a side with your favorite dips. Each pack contains four freshly baked pita pockets that are soft, fluffy, and easy to work with. Ideal for filling with an array of ingredients, from grilled meats and fresh vegetables to hummus and tzatziki, these pita breads elevate any dining experience with their delightful texture and flavor.<br><br>Whether you're hosting a casual gathering or preparing a quick family meal, HPMD Pita Bread provides endless possibilities. They're great for packing lunches, making quick snacks, or serving alongside soups and salads. Enjoy the convenience and taste of HPMD Pita Bread as a wholesome foundation for your culinary creations!</p>",
    image1: "products/HPMDPitaBread250g4pcs.svg",
    image2: "products/HPMDPitaBread250g4pcs2.svg",
    image3: "products/HPMDPitaBread250g4pcs3.svg",
    image4: "products/HPMDPitaBread250g4pcs4.svg",
    category: "bakery",
  },

  product17: {
    name: "HPMD Vegan Apple Danish Puff 4pcs",
    price: "AED 11.85",
    details:
      "<p>HPMD Vegan Apple Danish Puffs are a delightful pastry that brings a touch of indulgence to your plant-based diet. Each pack contains four beautifully crafted danishes, featuring a flaky, buttery crust filled with a luscious apple filling that strikes the perfect balance of sweetness and tartness. Made with high-quality vegan ingredients, these puffs are not only delicious but also a guilt-free treat you can enjoy any time of day.<br><br>Perfect for breakfast, brunch, or a satisfying snack, HPMD Vegan Apple Danish Puffs are best enjoyed warm, allowing the flavors to shine through. Pair them with your favorite coffee or tea for a delightful experience, or serve them as a dessert for your guests. With their irresistible aroma and delectable taste, these danish puffs are sure to become a beloved favorite in your household!</p>",
    image1: "products/HPMDVeganAppleDanishPuff4pcs.svg",
    image2: "products/HPMDVeganAppleDanishPuff4pcs2.svg",
    image3: "products/HPMDVeganAppleDanishPuff4pcs3.svg",
    image4: "products/HPMDVeganAppleDanishPuff4pcs4.svg",
    category: "bakery",
  },

  product18: {
    name: "Indian Mutton Boneless 500g",
    price: "AED 22.00",
    details:
      "<p>Our Indian Mutton Boneless is expertly cut and packed to provide a tender, flavorful meat that's perfect for a variety of dishes. Each 500g portion is ideal for curries, stews, or grilled preparations, allowing you to create authentic Indian meals right in your kitchen. Known for its rich flavor and succulent texture, this mutton is sourced from quality farms, ensuring a premium product you can trust.<br><br>Elevate your culinary creations with this versatile ingredient that absorbs spices beautifully, making it perfect for classic dishes like Rogan Josh or kebabs. Whether you're hosting a dinner party or cooking a cozy family meal, our boneless mutton will impress with its mouthwatering taste and satisfying texture. Experience the robust flavors of Indian cuisine with this essential ingredient!</p>",
    image1: "products/indianMuttonBoneless500g.svg",
    image2: "products/indianMuttonBoneless500g2.svg",
    image3: "products/indianMuttonBoneless500g3.svg",
    image4: "products/indianMuttonBoneless500g4.svg",
    category: "poultry",
  },

  product19: {
    name: "Strawberry Macarons 6pcs",
    price: "AED 10.00",
    details:
      "<p>Our delightful Strawberry Macarons come in a pack of six, offering a perfect blend of elegance and flavor. Each macaron features a delicate, crisp shell with a luscious strawberry filling that bursts with fresh fruit flavor, making them an irresistible treat for any occasion. The light, airy texture combined with the sweet and tangy notes of strawberry creates a truly indulgent experience that will tantalize your taste buds.<br><br>Ideal for celebrations, afternoon tea, or as a sweet gift, these macarons are beautifully crafted to impress. Serve them at your next gathering or enjoy them as a special snack to brighten your day. With their vibrant color and exquisite taste, our Strawberry Macarons are not just desserts; they're a delightful moment of joy in every bite!</p>",
    image1: "products/pinkMacaron1.svg",
    image2: "products/pinkMacaron2.svg",
    image3: "products/pinkMacaron3.svg",
    image4: "products/pinkMacaron4.svg",
    category: "bakery",
  },

  product20: {
    name: "Pomegranate Egypt 1kg",
    price: "AED 3.45",
    details:
      "<p>Our 1kg pack of Egyptian pomegranates is a treasure trove of flavor and nutrition, perfect for adding a burst of sweetness and tang to your meals. Renowned for their vibrant red seeds and juicy texture, these pomegranates are not only delicious but also packed with antioxidants, vitamins, and minerals. Enjoy them fresh as a snack, sprinkle them over salads, or blend them into smoothies for a refreshing drink.<br><br>With their rich history and cultural significance, Egyptian pomegranates offer a unique taste experience that is both exotic and familiar. Each fruit is easy to open, revealing jewel-like arils that are perfect for garnishing dishes or enjoying on their own. Elevate your culinary creations with these exquisite pomegranates and savor the delightful flavor they bring to your table!</p>",
    image1: "products/pomegranateEgypt1kg.svg",
    image2: "products/pomegranateEgypt1kg2.svg",
    image3: "products/pomegranateEgypt1kg3.svg",
    image4: "products/pomegranateEgypt1kg4.svg",
    category: "fruits",
  },

  product21: {
    name: "Salted Butter 500g",
    price: "AED 15.00",
    details:
      "<p>Our 500g block of salted butter is a kitchen essential that enhances the flavor of your favorite dishes with its rich, creamy goodness. Perfect for baking, cooking, or simply spreading on warm bread, this butter delivers a delightful balance of saltiness and creaminess that elevates any meal. Made from high-quality cream, it adds a luxurious touch to everything from pastries and cookies to savory sauces and roasted vegetables.<br><br>Whether you're whipping up a batch of cookies, sautéing vegetables, or spreading it on a fresh baguette, this salted butter is versatile enough for all your culinary needs. Its smooth texture and delightful flavor make it a staple in both everyday cooking and gourmet recipes. Experience the difference that high-quality salted butter can make in your kitchen!</p>",
    image1: "products/saltedButter500g.svg",
    image2: "products/saltedButter500g2.svg",
    image3: "products/saltedButter500g3.svg",
    image4: "products/saltedButter500g4.svg",
    category: "dairy",
  },

  product22: {
    name: "Scottish Salmon Fish 175g",
    price: "AED 20.00",
    details:
      "<p>Our 175g pack of Scottish Salmon Fish offers a premium seafood experience that combines rich flavor with exceptional quality. Sourced from the pristine waters of Scotland, this salmon is known for its vibrant color and buttery texture, making it a perfect choice for grilling, baking, or enjoying raw in sushi. Its naturally high omega-3 fatty acid content makes it not only delicious but also a nutritious addition to your diet.<br><br>Ideal for a quick weeknight dinner or an elegant weekend feast, this salmon can be prepared in a variety of ways—from a simple sear with herbs to a flavorful marinade. Whether served alongside seasonal vegetables or incorporated into a fresh salad, our Scottish Salmon brings a taste of the sea right to your table. Elevate your meals with this exquisite fish and enjoy a touch of luxury in every bite!</p>",
    image1: "products/scottishSalmonFish175g.svg",
    image2: "products/scottishSalmonFish175g2.svg",
    image3: "products/scottishSalmonFish175g3.svg",
    image4: "products/scottishSalmonFish175g4.svg",
    category: "seafood",
  },

  product23: {
    name: "Smith's Multigrain Bread 250g",
    price: "AED 3.25",
    details:
      "<p>Smith's Multigrain Bread is a wholesome and hearty choice that packs a nutritious punch in every slice. This 250g loaf is expertly crafted with a delightful blend of whole grains, seeds, and fibers, offering a rich texture and nutty flavor that pairs perfectly with any meal. Whether toasted for breakfast or used for sandwiches, this bread provides the essential nutrients you need to fuel your day.<br><br>Ideal for health-conscious individuals and families alike, Smith's Multigrain Bread is a versatile addition to your pantry. Enjoy it with avocado, hummus, or your favorite spreads for a delicious snack, or incorporate it into your favorite recipes for added texture and flavor. Elevate your everyday meals with this delicious and nutritious bread, and savor the goodness of whole grains in every bite!</p>",
    image1: "products/smith'sMultigrainBread250g.svg",
    image2: "products/smith'sMultigrainBread250g2.svg",
    image3: "products/smith'sMultigrainBread250g3.svg",
    image4: "products/smith'sMultigrainBread250g4.svg",
    category: "bakery",
  },

  product24: {
    name: "Sunrise Natural Tortilla Wraps 5pcs",
    price: "AED 4.00",
    details:
      "<p>Sunrise Natural Tortilla Wraps are a versatile and wholesome option for your meals, perfect for wraps, burritos, and more. Each pack contains five soft and delicious tortillas made with all-natural ingredients, ensuring that you enjoy quality in every bite.</p><br><h3>Features:</h3><br><li><strong>All-Natural Ingredients:</strong> Made with simple, wholesome ingredients and free from artificial preservatives.</li><li><strong>Soft and Flexible:</strong> Perfect for rolling and folding without tearing, making meal prep a breeze.</li><li><strong>Versatile Use:</strong> Great for wraps, tacos, quesadillas, or even as a base for pizzas and salads.</li><li><strong>High in Fiber:</strong> A nutritious choice to keep you feeling full and satisfied.</li><li><strong>Easy to Prepare:</strong> Ready to use straight from the pack or warm them up for an even softer texture.</li><br><p>Crafted with care, these tortilla wraps are not just a meal component; they are a canvas for your culinary creativity. Fill them with your favorite proteins, vegetables, and sauces to create delicious, personalized dishes that your family will love!</p>",
    image1: "products/sunriseNaturalTortillaWraps5pcs.svg",
    image2: "products/sunriseNaturalTortillaWraps5pcs2.svg",
    image3: "products/sunriseNaturalTortillaWraps5pcs3.svg",
    image4: "products/sunriseNaturalTortillaWraps5pcs4.svg",
    category: "bakery",
  },

  product25: {
    name: "Surjapur Mango 1kg",
    price: "AED 12.45",
    details:
      "<p>Surjapur Mangoes are a delectable tropical delight that showcases the rich, sweet flavors of the season. Known for their vibrant golden color and juicy, fibrous flesh, these mangoes are a true treat for fruit lovers. Sourced from the lush orchards of Surjapur, each mango is handpicked at peak ripeness to ensure optimal flavor and sweetness.</p><br><h3>Features:</h3><br><li><strong>Rich Flavor:</strong> Enjoy the perfect balance of sweetness and acidity, making these mangoes irresistible.</li><li><strong>Juicy Texture:</strong> Each bite is bursting with juice, ideal for eating fresh or using in smoothies and desserts.</li><li><strong>Versatile Uses:</strong> Perfect for snacking, adding to fruit salads, or blending into refreshing drinks and desserts.</li><li><strong>Nutrient-Rich:</strong> Packed with vitamins A and C, fiber, and antioxidants, they contribute to a healthy diet.</li><li><strong>Seasonal Delight:</strong> Available during the peak mango season, bringing a taste of summer to your table.</li><p><br>Elevate your fruit experience with Surjapur Mangoes and savor the sweetness that nature has to offer. Whether eaten on their own or incorporated into your favorite recipes, these mangoes are sure to bring joy to every bite!</p>",
    image1: "products/surjapurMango.svg",
    image2: "products/surjapurMango2.svg",
    image3: "products/surjapurMango3.svg",
    image4: "products/surjapurMango4.svg",
    category: "fruits",
  },

  product26: {
    name: "White Chicken Eggs 30pcs",
    price: "AED 20.00",
    details:
      "<p>Our fresh white chicken eggs are perfect for any meal and packed with essential nutrients to start your day right. These high-quality eggs come in a convenient pack of 30, offering a versatile ingredient for baking, cooking, or simply boiling for a healthy snack.</p><br><br><p>Whether you're preparing a hearty breakfast, whipping up desserts, or creating protein-packed meals, these eggs provide a rich source of protein, vitamins, and minerals. Add them to your pantry for a delicious and nutritious option that fits any occasion.</p><br><li><strong>Fresh & Nutritious:</strong> Rich in protein and vitamins.</li><li><strong>Large Quantity:</strong> Comes in a convenient 30-piece pack, perfect for families.</li> <li><strong>Versatile Ingredient:</strong> Ideal for baking, cooking, and enjoying on its own.</li>",
    image1: "products/chickenWhiteEggs.svg",
    image2: "products/chickenWhiteEggs2.svg",
    image3: "products/chickenWhiteEggs3.svg",
    image4: "products/chickenWhiteEggs4.svg",
    category: "poultry",
  },

  product27: {
    name: "Cod Fillet 1kg",
    price: "AED 43.65",
    details:
      "<p>Our premium cod fillets are a fantastic choice for seafood lovers, offering a mild flavor and tender texture that adapts well to a variety of cooking methods. These fillets are carefully selected and packaged for freshness, making them a perfect fit for your favorite recipes.</p><br><p>From pan-searing to baking, cod is a versatile fish that works beautifully with marinades, seasonings, and side dishes. Enjoy its delicate, flaky texture and subtle taste, whether you're preparing it for a weeknight meal or a special dinner.</p><br><li><strong>Mild & Flaky:</strong> Perfectly balanced flavor that complements many seasonings.</li><li><strong>Versatile Preparation:</strong> Great for grilling, baking, frying, or poaching.</li><li><strong>Rich in Omega-3:</strong> A nutritious option, high in protein and heart-healthy fats.</li>",
    image1: "products/cod.svg",
    image2: "products/cod2.svg",
    image3: "products/cod3.svg",
    image4: "products/cod4.svg",
    category: "seafood",
  },

  product28: {
    name: "Frozen Whole Chicken",
    price: "AED 15.50",
    details:
      "Our frozen whole chicken offers a convenient and versatile choice for creating delicious, hearty meals.<br>Individually packed to preserve freshness, this whole chicken is perfect for roasting, grilling, or slow-cooking.<br>Rich in flavor and nutrients, it's a wholesome addition to any family dinner or gathering.<br><li><strong>Convenient & Fresh:</strong> Flash-frozen to lock in natural flavor and quality.</li><li><strong>Perfect for Any Recipe:</strong> Great for roasting, grilling, or slow-cooking.</li><li><strong>High in Protein:</strong> A nutritious source of protein, ideal for balanced meals.</li><li><strong>No Added Preservatives:</strong> Pure and natural, without artificial additives.</li>",
    image1: "products/frozenChicken.svg",
    image2: "products/frozenChicken2.svg",
    image3: "products/frozenChicken3.svg",
    image4: "products/frozenChicken4.svg",
    category: "poultry",
  },

  product29: {
    name: "Frozen Chicken Wings 1kg",
    price: "AED 18.50",
    details:
      "<p>Our frozen chicken wings are ideal for easy and tasty meals, perfect for appetizers, game-day snacks, or main dishes. These wings are individually frozen for convenience, so you can cook as many as you need and store the rest for later.</p><br><p>With a tender texture and versatile flavor, they can be baked, fried, grilled, or air-fried to achieve a deliciously crispy finish. Add your favorite sauces or marinades, and enjoy a crowd-pleasing dish anytime.</p><br><li><strong>Conveniently Frozen:</strong> Allows for flexible portion control.</li><li><strong>Perfect for Many Recipes:</strong> Great for grilling, frying, or baking.</li><li><strong>Juicy & Tender:</strong> High-quality wings that retain their flavor and texture.</li>",
    image1: "products/frozenChickenWings2kg.svg",
    image2: "products/frozenChickenWings2kg2.svg",
    image3: "products/frozenChickenWings2kg3.svg",
    image4: "products/frozenChickenWings2kg4.svg",
    category: "poultry",
  },

  product30: {
    name: "Fresh Beef Mince 500g",
    price: "AED 20.90",
    details:
      "<p>Our fresh beef mince is crafted from high-quality cuts, offering a fine texture and rich flavor that's perfect for a wide range of dishes. Whether you're making classic meatballs, savory Bolognese sauce, or a flavorful casserole, this mince is a versatile addition to your kitchen.</p><br><p>It's packed with protein and essential nutrients, providing a hearty and wholesome choice for family meals. Freshly prepared and conveniently packed, this mince is ready to elevate any recipe with its natural taste and tenderness.</p><br>><li><strong>Finely Mined & Fresh:</strong> Ideal for a smooth, consistent texture in recipes.</li><li><strong>Versatile Use:</strong> Suitable for meatballs, sauces, casseroles, and more.</li> <li><strong>Rich in Protein:</strong> A nutritious, protein-packed choice for balanced meals.</li>",
    image1: "products/groundBeef.svg",
    image2: "products/groundBeef2.svg",
    image3: "products/groundBeef3.svg",
    image4: "products/groundBeef4.svg",
    category: "poultry",
  },

  product31: {
    name: "Kiwi Iran 1kg",
    price: "AED 12.37",
    details:
      "<p>Our fresh kiwi offers a vibrant burst of flavor and nutrition, with a tangy sweetness that’s perfect for snacking, smoothies, or adding to salads. Known for its soft green flesh and tiny black seeds, kiwi is as visually appealing as it is delicious.</p><br><p>Rich in vitamins C and K, as well as dietary fiber, kiwi is a refreshing way to boost your nutrient intake. Enjoy it on its own or pair it with other fruits for a delicious and healthy treat.</p><br><li><strong>Sweet & Tangy Flavor:</strong> Adds a refreshing zest to any dish.</li><li><strong>Nutrient-Dense:</strong> High in vitamins C and K, along with fiber.</li><li><strong>Versatile Use:</strong> Great for snacks, smoothies, desserts, and salads.</li>",
    image1: "products/kiwi500g.svg",
    image2: "products/kiwi500g2.svg",
    image3: "products/kiwi500g3.svg",
    image4: "products/kiwi500g4.svg",
    category: "fruits",
  },

  product32: {
    name: "Fresh Lobster Whole 500g",
    price: "AED 43.50",
    details:
      "<p>Our fresh lobster is a premium seafood delicacy, perfect for a luxurious dining experience at home. Known for its tender, succulent meat and sweet, briny flavor, lobster is ideal for grilling, steaming, or preparing in rich dishes like lobster bisque and lobster rolls.</p><br><p>High in protein and low in fat, lobster is a wholesome choice that adds a touch of elegance to any meal. Enjoy it as the star of a dish or as a complement to pasta and salads.</p><br><li><strong>Rich & Succulent:</strong> Sweet, tender meat with a distinctive taste.</li><li><strong>Versatile Cooking Options:</strong> Perfect for grilling, steaming, or gourmet recipes.</li><li><strong>Protein-Packed:</strong> A lean seafood choice, rich in protein and nutrients.</li>",
    image1: "products/lobster1.svg",
    image2: "products/lobster2.svg",
    image3: "products/lobster3.svg",
    image4: "products/lobster4.svg",
    category: "seafood",
  },

  product33: {
    name: "Mozarella block ~2kg",
    price: "AED 9.85",
    details:
      "<p>Indulge in the soft, delicate texture and mild taste of our fresh mozzarella cheese, crafted to bring an authentic Italian touch to your kitchen. This cheese is celebrated for its luscious, milky flavor and perfect stretch, making it an excellent choice for elevating pizzas, lasagna, and salads.</p><br><p>High in protein and a good source of calcium, mozzarella offers not only great taste but also nutritional benefits. Enjoy it as a fresh ingredient in salads, melted over pasta, or layered in a classic caprese for a creamy and satisfying treat.</p><br><li><strong>Delicate & Creamy:</strong> Mild, milky taste that complements a variety of dishes.</li><li><strong>Ideal for Melting:</strong> Adds perfect stretch and flavor to pizzas, pastas, and hot dishes.</li><li><strong>Nutritionally Rich:</strong> Packed with protein and calcium for balanced, tasty meals.</li>",
    image1: "products/mozarella.svg",
    image2: "products/mozarella2.svg",
    image3: "products/mozarella3.svg",
    image4: "products/mozarella4.svg",
    category: "dairy",
  },

  product34: {
    name: "Red Grapes 500g",
    price: "AED 7.75",
    details:
      "<p>Our fresh red grapes are juicy and sweet, perfect for snacking or adding a burst of flavor to your favorite dishes. Known for their vibrant color and delightful crunch, these grapes make an excellent addition to fruit salads, cheese platters, or enjoyed on their own as a healthy treat.</p><br><p>Rich in antioxidants and vitamins, red grapes provide numerous health benefits, including heart health support and hydration. Enjoy them fresh, frozen, or blended into smoothies for a nutritious and refreshing boost.</p><br><li><strong>Sweet & Juicy:</strong> Bursting with flavor, perfect for snacking.</li><li><strong>Versatile Use:</strong> Great for fruit salads, desserts, or cheese boards.</li><li><strong>Health Benefits:</strong> Packed with antioxidants and vitamins for a nutritious snack.</li>",
    image1: "products/redGrapes250g.svg",
    image2: "products/redGrapes250g2.svg",
    image3: "products/redGrapes250g3.svg",
    image4: "products/redGrapes250g4.svg",
    category: "fruits",
  },

  product35: {
    name: "Shredded Cheddar Cheese 180g",
    price: "AED 14.60",
    details:
      "<p>Our shredded cheddar cheese offers a rich, tangy flavor and a convenient way to enhance your meals. Perfect for topping casseroles, salads, and baked dishes, this cheese melts beautifully, adding creaminess and depth to any recipe. Whether you're making a classic macaroni and cheese or sprinkling it over nachos, our shredded cheddar is an essential kitchen staple.</p><br><p>Made from high-quality ingredients, this cheese not only provides great taste but also delivers a good dose of calcium and protein. Enjoy it straight from the bag, in your favorite recipes, or as part of a delicious cheese platter.</p><br><li><strong>Bold & Flavorful:</strong> A sharp, tangy taste that elevates your dishes.</li><li><strong>Easy to Use:</strong> Conveniently shredded for quick and effortless meal preparation.</li><li><strong>Nutritious Addition:</strong> Provides calcium and protein for a well-rounded diet.</li>",
    image1: "products/shreddedCheddar.svg",
    image2: "products/shreddedCheddar2.svg",
    image3: "products/shreddedCheddar3.svg",
    image4: "products/shreddedCheddar4.svg",
    category: "dairy",
  },

  product36: {
    name: "Spinach",
    price: "AED 2.00",
    details:
      "<p>Our fresh spinach leaves are vibrant, tender, and packed with nutrients, making them a perfect addition to any meal. Known for their mild flavor and versatility, spinach can be enjoyed raw in salads, sautéed as a side dish, or blended into smoothies for a nutritious boost. Rich in vitamins A, C, and K, as well as iron and calcium, spinach is a powerhouse of health benefits.</p><br><p>Whether you're adding it to your favorite pasta, using it in a savory omelet, or creating a fresh green salad, spinach is an easy way to incorporate more greens into your diet. Enjoy it fresh for maximum flavor and nutrition!</p><br><li><strong>Nutritious & Healthy:</strong> Loaded with vitamins and minerals for overall well-being.</li><li><strong>Versatile Ingredient:</strong> Perfect for salads, smoothies, and cooked dishes.</li><li><strong>Fresh & Crisp:</strong> Tender leaves that add color and texture to any meal.</li>",
    image1: "products/spinach.svg",
    image2: "products/spinach2.svg",
    image3: "products/spinach3.svg",
    image4: "products/spinach4.svg",
    category: "vegetables",
  },

  product37: {
    name: "Pakistani Fresh Tomato 1kg",
    price: "AED 7.63",
    details:
      "<p>These juicy tomatoes are bursting with flavor and are an essential ingredient in countless recipes. Whether enjoyed raw in salads, cooked into sauces, or sliced for sandwiches, their versatility makes them a kitchen staple. Rich in vitamins A and C, as well as antioxidants, tomatoes not only enhance the taste of your dishes but also contribute to a healthy diet.</p><br><p>From sweet cherry tomatoes to hearty beefsteak varieties, there's a type of tomato for every culinary need. Their natural sweetness and acidity balance perfectly in a variety of cuisines, making them a favorite for chefs and home cooks alike.</p><br><li><strong>Fresh & Flavorful:</strong> Adds a burst of taste to salads, sauces, and more.</li><li><strong>Rich in Nutrients:</strong> Packed with vitamins and antioxidants for a health boost.</li><li><strong>Versatile Options:</strong> Available in various types, each with its own unique flavor profile.</li>",
    image1: "products/tomatoes.svg",
    image2: "products/tomatoes2.svg",
    image3: "products/tomatoes3.svg",
    image4: "products/tomatoes4.svg",
    category: "vegetables",
  },

  product38: {
    name: "Fresh Tuna 500g",
    price: "AED 12.75",
    details:
      "<p>This high-quality tuna is packed with flavor and perfect for a variety of dishes. Whether you're preparing a classic tuna salad, adding it to pasta, or using it in sushi, its rich taste and firm texture make it a versatile choice for any meal. Tuna is also an excellent source of protein and omega-3 fatty acids, making it a nutritious addition to your diet.</p><br><p>With its deep flavor and meaty consistency, this tuna can elevate simple recipes into gourmet meals. Enjoy it fresh, canned, or as a part of your favorite seafood dishes for a delicious and healthy option.</p><br><li><strong>Rich in Flavor:</strong> Ideal for salads, sandwiches, and various recipes.</li><li><strong>Nutritious & Healthy:</strong> A great source of protein and essential fatty acids.</li><li><strong>Convenient Packaging:</strong> Ready to use for quick and easy meal preparation.</li>",
    image1: "products/tuna.svg",
    image2: "products/tuna2.svg",
    image3: "products/tuna3.svg",
    image4: "products/tuna4.svg",
    category: "seafood",
  },

  product39: {
    name: "Full Cream Yogurt 2kg",
    price: "AED 13.28",
    details:
      "<p>This creamy and rich full cream yogurt offers a delightful texture and a slightly tangy flavor that can enhance a variety of dishes. Whether enjoyed on its own, used as a base for smoothies, or as a topping for desserts and breakfast bowls, it adds a luscious creaminess that elevates your meals. Packed with probiotics, full cream yogurt supports gut health and digestion, making it a nutritious addition to your diet.</p><br><p>Versatile and indulgent, this yogurt can be used in savory recipes as a cooling sauce or dressing, or simply enjoyed with fresh fruits, nuts, or honey for a satisfying snack. Embrace the richness and health benefits of full cream yogurt in your culinary creations!</p><br><li><strong>Creamy & Delicious:</strong> A smooth texture that enhances both sweet and savory dishes.</li><li><strong>Nutritious & Wholesome:</strong> Contains probiotics and essential nutrients for better digestion.</li><li><strong>Versatile Use:</strong> Perfect for cooking, baking, or as a standalone snack.</li>",
    image1: "products/yogurt.svg",
    image2: "products/yogurt2.svg",
    image3: "products/yogurt3.svg",
    image4: "products/yogurt4.svg",
    category: "dairy",
  },
};

//get description page of selected product
let selectedProduct = localStorage.getItem("SelectedProduct");

if (!selectedProduct) {
  selectedProduct = "product1";
  localStorage.setItem("SelectedProduct", selectedProduct);
}
const product = products[selectedProduct];
if (product) {
  document.getElementById("productName").innerText = product.name;
  document.getElementById("line3").innerText = product.price;
  document.getElementById("productDescription").innerHTML = product.details;

  const imgElement1 = document.getElementById("img1");
  imgElement1.src = product.image1;

  const imgElement2 = document.getElementById("img2");
  imgElement2.src = product.image2;

  const imgElement3 = document.getElementById("img3");
  imgElement3.src = product.image3;

  const imgElement4 = document.getElementById("img4");
  imgElement4.src = product.image4;
} else {
  document.getElementById("productName").innerText = "Product not found.";
}

//get similar products
const currentProductName = product.name;

const productArray = Object.entries(products);
const currentProduct = productArray.find(
  ([key, product]) => product.name === currentProductName
);

let similarProducts = productArray.filter(
  ([key, product]) =>
    product.category === currentProduct[1].category &&
    product.name !== currentProduct[1].name
);

similarProducts = shuffleArray(similarProducts);
similarProducts = similarProducts.slice(0, 4);

const similarProductsContainer = document.getElementById("similarProducts");

similarProductsContainer.innerHTML = similarProducts
  .map(
    ([key, product]) => `
    <div class="product" onclick="showProduct('${key}')">
        <div class="productImage">
            <img class="likeButton" src="icons/heart.svg" onclick="likeProduct(this); event.stopPropagation();">
            <img class="productIMG" src="${product.image1}" alt="${product.name}">
            <div class="addToCart">
                Add to cart <img src="icons/CartAdd.svg">
            </div>
        </div>
        <div class="productDetails">
            <p class="productName">${product.name}</p>
            <div class="stockNprice">
                <p class="stock">IN STOCK</p>
                <p class="productPrice">${product.price}</p>
            </div>
        </div>
    </div>
`
  )
  .join("");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function likeProduct(likeButton) {
  var productImage = likeButton.closest(".productImage");
  productImage.classList.toggle("liked");

  likeButton.classList.toggle("liked");
  likeButton.src = likeButton.classList.contains("liked")
    ? "icons/filledheart.svg"
    : "icons/heart.svg";
}

function showProduct(productNumber) {
  localStorage.setItem("SelectedProduct", productNumber);
  window.location.href = "productDescription.html";
}

const pagePath = document.getElementById("path");
if (product) {
  pagePath.innerHTML = `QuickMart <img src="icons/ChevronRight.svg" /> ${product.name}`;
}
