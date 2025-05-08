import {flashSalesProduct, bonusProducts, SponsoredProducts, topSellers1, topSellers2} from "./data/products.js";
import { template } from "./data/template.js";

let isNavBarOpen = false;
const flashSalesContainer = document.querySelector('.flashSalesProduct-container');
const bonusProductContainer = document.querySelector('.bonusProductsContainer');
const sponsProdContainer = document.querySelector('.spons-products');
const topSellerProds = document.querySelector('.top-seller-prod');
const topSellerProds2 = document.querySelector('.top-selling-items');
const grandSection = document.querySelector('.grandSect');
const showMoreBtn = document.querySelector('.show-more');
const companyDescription = document.querySelector('.company-description');
const backToTopBtn = document.querySelector('.back-to-top > small');
// const mainPage = document.querySelector('.main-page');
const backdrop = document.querySelector('.backdrop');



let flashSalesHTML = '';
flashSalesProduct.forEach((product) => {
  flashSalesHTML += `
    <div class="sales-items">
      <img class="sales-image" src="${product.image}" alt="">
      <small>${product.description}</small>
      <p class="price"># ${product.priceCents}</p>
      <small>${product.quantity} items left</small>
      <div class="progress"></div>
    </div>
  `
})
flashSalesContainer.innerHTML = flashSalesHTML;


document.querySelector('.close')
.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar-container');
  navbar.classList.toggle('render-sideNavBar');
  isNavBarOpen = false;
  showBackDrop(isNavBarOpen)
});

document.querySelector('.hamburger')
  .addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-container');
    navbar.classList.toggle('render-sideNavBar');
    isNavBarOpen = true;
    showBackDrop(isNavBarOpen);
});

const bonus = bonusProducts.map((item) => {
  return (
    `<div class="bonus">
        <div class="box"></div>
        <p class="bonus-desc">${item.desc}</p>
      </div>`
    )
})

bonusProductContainer.innerHTML = bonus.join('');

function createProdHTML(item) {
  return (
    `<div class="spons-items">
      <div class="box"></div>
      <small class="spons-desc">${item.description}</small>
      <p class="spons-price">${item.price}</p>
    </div>`
  )
};

function showBackDrop(param) {
 if (param) {
  backdrop.classList.add('showBackdrop')
 } else {
  backdrop.classList.remove('showBackdrop')
 }
}

const sponsProduct = SponsoredProducts.map((item) => {
  return createProdHTML(item)
})

sponsProdContainer.innerHTML = sponsProduct.join('');

const topProduct = topSellers1.map((item) => {
  return createProdHTML(item)
});

topSellerProds.innerHTML = topProduct.join('')

const topProduct2 = topSellers2.map((item) => {
  return createProdHTML(item)
})

topSellerProds2.innerHTML = topProduct2.join('')

const templateHTML = template.map((item) => {
  return (
    `<section>
      <div class="top-seller-header">
        <p>${item.header}</p>
        <small>See all</small>
      </div>
      <div class="top-selling-items">
      ${topProduct2.join('')}
      </div>
    </section>
    <div class="somediv"></div>
    `
  )
})

grandSection.innerHTML = templateHTML.join('')

showMoreBtn.addEventListener('click', () => {
  if (showMoreBtn.innerText === 'Show Less') {
    showMoreBtn.innerText = 'Show More'
  } else {
    showMoreBtn.innerText = 'Show Less'
  }
  companyDescription.classList.toggle('renderAllDesc')
})

backToTopBtn.addEventListener('click', () => {
  window.scroll({top:0, behavior: 'smooth'})
})

backdrop.classList.add('preventScroll')