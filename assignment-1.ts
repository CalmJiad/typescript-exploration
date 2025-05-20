function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase();
  }
  return input.toUpperCase();
}

formatString("Hello"); // Output: "HELLO"
formatString("Hello", true); // Output: "HELLO"
formatString("Hello", false); // Output: "hello"

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

filterByRating(books);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}

concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  getModel(): string {
    return `Model: ${this.model}`;
  }
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"

function processValue(value: string | number): number {
  return typeof value === "number" ? value * 2 : value.length;
}

processValue("hello"); // Output: 5
processValue(10); // Output: 20

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  return products.reduce(
    (acc, curr) => (curr.price > acc.price ? curr : acc),
    products[0]
  );
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 55 },
  { name: "Bag", price: 50 },
];

getMostExpensiveProduct(products); // Output: { name: "Bag", price: 50 }

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

getDayType(Day.Monday); // Output: "Weekday"
getDayType(Day.Sunday); // Output: "Weekend"

async function squareAsync(n: number): Promise<number> {
  if (n <= 0) {
    throw new Error("Negative number not allowed");
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    });
  }
}

squareAsync(4).then((res) => console.log(res)); // Output after 1s: 16
squareAsync(-3).catch((err) => console.error(err)); // Output: Error: Negative number not allowed
