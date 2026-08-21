const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const products = document.querySelectorAll(".product");

const resultCount = document.getElementById("resultCount");
const resultsTitle = document.getElementById("resultsTitle");
const noResults = document.getElementById("noResults");


function searchProducts() {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    let numberOfResults = 0;


    products.forEach(product => {

        const productName =
            product.dataset.name.toLowerCase();


        if (productName.includes(searchValue)) {

            product.style.display = "block";

            numberOfResults++;

        } else {

            product.style.display = "none";

        }

    });


    /* UPDATE RESULT NUMBER */

    resultCount.textContent =
        numberOfResults + " PRODUCTS";


    /* UPDATE TITLE */

    if (searchValue === "") {

        resultsTitle.textContent = "ALL PRODUCTS";

    } else {

        resultsTitle.textContent =
            'RESULTS FOR "' +
            searchInput.value.toUpperCase() +
            '"';

    }


    /* NO RESULTS */

    if (numberOfResults === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

}


/* SEARCH BUTTON */

searchButton.addEventListener(
    "click",
    searchProducts
);


/* SEARCH WHILE TYPING */

searchInput.addEventListener(
    "input",
    searchProducts
);


/* PRESS ENTER */

searchInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            searchProducts();

        }

    }
);