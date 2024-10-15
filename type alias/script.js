var student = {
    name: "Javohir",
    age: 18,
    grade: 5,
};
var teacher = {
    name: "Dilmurod",
    age: 33,
    subject: "Programmer",
};
console.log("Student", student);
console.log("Teacher", teacher);

var profile1 = {
    id: 1,
    status: "active",
};
var profelie2 = {
    id: "abc123",
    status: "inactive",
};
console.log("Profeli 1", profile1);
console.log("Profile 2", profelie2);

function calculateDiscountedPrice(product, discountPercentage) {
    var discount = (product.price * discountPercentage) / 200;
    return product.price - discount;
}
;
var product = {
    name: "Bob",
    price: 2800,
    inStock: true,
};
var discountedPrice = calculateDiscountedPrice(product, 19);
console.log("NoDiscount Price ".concat(product.price));
console.log("Discounted Price: ".concat(discountedPrice));