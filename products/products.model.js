const products = [
    {
        id: "redshoe",
        description: "Red Shoe",
        price: 5000,
        reviews: [],
    },
    {
        id: "bluejean",
        description: "Blue Jeans",
        price: 3500,
        reviews: [],
    },
];

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >= min && product.price <= max;
    });
}

function getProductsById(ID) {
    return products.filter((product) => {
        return product.id == ID;
    });
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        price,
        description,
        reviews: [],
    };

    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, rating, comment) {
    // const product = getProductsById(id);   //It return an array of products

    const product = products.find((product) => {   //this returns the product itself
        return product.id == id;
    });

    if (product) {
        const newReview = {
            rating,
            comment,
        };

        product.reviews.push(newReview);

        return newReview;
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
    addNewProductReview,
};
