// № 3
interface Person  {
    name: string,
    age: number,
};

interface Student extends Person {
    grade: number,
};

interface Teacher extends Person {
    subject: string,
};

const student: Student =  {
    name: "Javohir",
    age: 18,
    grade: 5,
};

const teacher: Teacher = {
    name: "Dilmurod",
    age: 33,
    subject: "Programmer",
};

console.log("Student", student);
console.log("Teacher", teacher);

// № 4
type ID = number | string;
type status = "active" | "inactive" | "pending";

type Profile = {
    id: ID,
    status: status, 
};

const profile1: Profile = {
    id: 1,
    status: "active",
};

const profelie2: Profile = {
    id: "abc123",
    status: "inactive",
};
console.log("Profeli 1", profile1);
console.log("Profile 2", profelie2);

// № 5
interface Product {
    name: string,
    price: number,
    inStock: boolean,
};

function calculateDiscountedPrice(product: Product, discountPercentage: number): number {
    const discount = (product.price * discountPercentage) / 200;
    return product.price - discount;
};

const product: Product = {
    name: "Bob",
    price: 2800,
    inStock: true,
};

const discountedPrice = calculateDiscountedPrice(product, 19);
console.log(`NoDiscount Price ${product.price}`);
console.log(`Discounted Price: ${discountedPrice}`);