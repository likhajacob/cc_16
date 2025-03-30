//Task 2 - fetching products
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Product names (using .then()):');
        data.forEach(product => {
          console.log(product.fields.name);
        });
      })
      .catch(error => {
        handleError(error);
      });
  }
  // Task 3 - fetching products
async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }
  // Task 4: Display the Products
function displayProducts(products) {
    // Select container where products will be displayed
    const container = document.getElementById("product-container");
  
    // Clear container in case there is already content
    container.innerHTML = "";
  
    // Loop through the first 5 products only
    products.slice(0, 5).forEach(product => {
      // Destructure necessary fields from product object
      const { name, price, image } = product.fields;
  
      // Create wrapper div for each product
      const productDiv = document.createElement("div");
      productDiv.className = "product"; // Add CSS class
  
      // Create image element and set its attributes
      const img = document.createElement("img");
      img.src = image[0].url;
      img.alt = name;
  
      // Create a heading for product name
      const productName = document.createElement("h2");
      productName.textContent = name;
  
      // Create a paragraph for product price
      const productPrice = document.createElement("p");
      // Divide price by 100 to convert from cents to dollars
      productPrice.textContent = `$${(price / 100).toFixed(2)}`;
  
      // Append image, name, and price to the product div
      productDiv.appendChild(img);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
  
      // Append the product card to the container
      container.appendChild(productDiv);
    });
  }
  //  Task 5: Reusable error handler
function handleError(error) {
    console.error('An error occurred:', error.message);
  }
  