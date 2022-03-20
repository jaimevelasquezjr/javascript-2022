/**
 *
 * Title: Variable Naming Rules
 * 1. No keyword
 * 2. Cannot start with number
 * 3. Case sensitive - fullname vs Fullname
 * 4. camelCase or under_score
 *
 */

// let 12fullname = 'Jaime Velasquez';
// console.log(12fullname); // ❌ cannot start with number

// let fullname = 'Jaime Velasquez';
// console.log(fullName); // ❌ case sensitive fullname is not the same on fullName

let first_name = 'Jaime';
console.log(first_name); // ✅ this will work, nothing problem on it

let firstName = 'Jaime';
console.log(firstName); // ✅ this will work, and I recommend camel case
