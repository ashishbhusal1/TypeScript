"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[3];
}
const getMoreSearchProducts = (products) => {
    //database operation
    const myIndex = 4;
    return products[myIndex];
};
