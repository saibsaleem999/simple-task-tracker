// Store Inventory Program

// Step 1: Create array of store items
let storeItems = [
  { name: "Laptop", price: 850, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Mouse", price: 45, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Webcam", price: 60, inStock: false }
];

// Step 2: Function to calculate total value of all items
function calculateTotal(items) {
  let totalValue = 0; // start from 0
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].price; // add each item's price
  }
  return totalValue; // give result back
}

// Step 3: Function to check availability of a specific item
function checkItemAvailability(items, itemName) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].name === itemName) { // compare names
      if (items[i].inStock === true) {
        console.log(` The ${itemName} is available in our store!`);
      } else {
        console.log(` The ${itemName} is currently out of stock.`);
      }
      return; // stop once found
    }
  }
  console.log(`⚠ The ${itemName} is not found in the store.`);
}

// Step 4: Function to calculate total with tax
function calculateTotalWithTax(subtotal) {
  let tax = subtotal * 0.10; // 10% of subtotal
  return subtotal + tax; // final price including tax
}

// ==========================
// Main Program
// ==========================

// // Get total of all items
let totalValue = calculateTotal(storeItems);
console.log("Total value of all items:", totalValue);

// Check if Keyboard is available
checkItemAvailability(storeItems, "Keyboard");

// Get final price with tax
let finalPrice = calculateTotalWithTax(totalValue);

// Print using if...else if...else
if (finalPrice > 1000) {
  console.log("💰 Final Price (with tax):", finalPrice, "- That's a big purchase!");
} else if (finalPrice > 500) {
  console.log("💰 Final Price (with tax):", finalPrice, "- That's a medium purchase.");
} else {
  console.log("💰 Final Price (with tax):", finalPrice, "- That's a small purchase.");
}