document.addEventListener("DOMContentLoaded", () => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then(response => response.json())
      .then(products => {
        const productGrid = document.querySelector(".product-grid");
        products.forEach(product => {
          const brandName = product.brand;
          const productName = product.name;
          const price = product.price;
          const imageLink = product.image_link;
          const productLink = product.product_link;
          const description = product.description;
  
          // create a container to display the product information
          const productContainer = document.createElement("div");
          productContainer.classList.add("product-container");
  
          // create a header to display the product name and brand
          const header = document.createElement("h2");
          header.innerText = `${productName} by ${brandName}`;
          productContainer.appendChild(header);
  
          // create an image element to display the product image
          const image = document.createElement("img");
          image.src = imageLink;
          productContainer.appendChild(image);
  
          // create a paragraph element to display the product price
          const priceElement = document.createElement("p");
          priceElement.classList.add("price"); // add the class "price"
          priceElement.innerText = `Price: ${price}`;
          productContainer.appendChild(priceElement);
  
          // create a paragraph element to display the product description
          const descriptionElement = document.createElement("p");
          descriptionElement.innerText = description;
          productContainer.appendChild(descriptionElement);
  
          // create a link element to display the product link
          const linkElement = document.createElement("a");
          linkElement.href = productLink;
          linkElement.innerText = "View product";
          productContainer.appendChild(linkElement);
  
          // add the product container to the grid
          productGrid.appendChild(productContainer);
        });
      })
      .catch(error => console.log(error));
  });
  