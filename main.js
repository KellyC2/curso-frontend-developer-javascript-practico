const menuEmail=document.querySelector(".navbar-email");
const menuHamIcon=document.querySelector(".menu");
const menuCarritoIcon=document.querySelector(".navbar-shopping-cart");
const productDetailClosedIcon=document.querySelector(".product-detail-close");

const DesktopMenu =document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu");
const shoppingCartContainer=document.querySelector("#shoppingCartContainer");
const cardsContainer=document.querySelector(".cards-container");
const productDetailContainer=document.querySelector("#productDetail");
 
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailClosedIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed= shoppingCartContainer.classList.contains("inactive");
    const isProductDetailContainerclosed=productDetailContainer.classList.contains("inactive");
    if(!isAsideClosed||!isProductDetailContainerclosed){
        productDetailContainer.classList.add("inactive");
        shoppingCartContainer.classList.add("inactive");
    }    
    DesktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    const isAsideClosed= shoppingCartContainer.classList.contains("inactive");
    const isProductDetailContainerclosed=productDetailContainer.classList.contains("inactive");

    if(!isAsideClosed||!isProductDetailContainerclosed){
        shoppingCartContainer.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed= menuEmail.classList.contains("inactive");
    const isProductDetailContainerclosed=productDetailContainer.classList.contains("inactive");

    if(!isMobileMenuClosed||!isDesktopMenuClosed||!isProductDetailContainerclosed){
        mobileMenu.classList.add("inactive");
        DesktopMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");     
}
function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    DesktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

const productList=[];
productList.push({
    name:"Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name:"pantalla",
    price:620,
    image:"https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "laptop",
    price:3650,
    image:"https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:"Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name:"pantalla",
    price:620,
    image:"https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "laptop",
    price:3650,
    image:"https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement("div");
        productCard.classList.add("product-card");

            const productImg=document.createElement("img");
            productImg.setAttribute("src", product.image);
            productImg.addEventListener("click", openProductDetailAside);

            const productInfo=document.createElement("div");
            productInfo.classList.add("product-info");
                const productIfonDIv=document.createElement("div");
                    const productPrice=document.createElement("p");
                    productPrice.innerText="$" + product.price;
                    const productName=document.createElement("p");
                    productName.innerText=product.name;
                productIfonDIv.appendChild(productPrice);
                productIfonDIv.appendChild(productName);
                
                const productInfoFigure=document.createElement("figure");
                    const iconCarrito=document.createElement("img"); /* la constante en la clase del profesor se llama: productImgCart*/
                    iconCarrito.setAttribute("src", "./icons/bt_add_to_cart.svg");
                productInfoFigure.appendChild(iconCarrito);
            productInfo.appendChild(productIfonDIv);
            productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);        

    }
}
renderProducts(productList);



