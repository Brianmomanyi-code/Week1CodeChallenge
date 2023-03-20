
//Challenge 3.Net Salary Calculator (Toy Problem)
// Define the basic salary and benefits of the employee
const basicSalary = 50000;
const benefits = 10000;

// Define the tax and deduction rates
const PAYEE_TAX_RATE = 0.3;
const NHIF_RATE = 0.02;
const NSSF_RATE = 0.06;

// Calculate the payee tax
const taxableIncome = basicSalary + benefits;
const payeeTax = taxableIncome * PAYEE_TAX_RATE;

// Calculate the NHIF and NSSF deductions
const nhifDeduction = basicSalary * NHIF_RATE;
const nssfDeduction = basicSalary * NSSF_RATE;

// Calculate the net salary
const totalDeductions = payeeTax + nhifDeduction + nssfDeduction;
const netSalary = basicSalary + benefits - totalDeductions;

// Output the results
console.log("Basic Salary: " + basicSalary);
console.log("Benefits: " + benefits);
console.log("Taxable Income: " + taxableIncome);
console.log("Payee Tax: " + payeeTax);
console.log("NHIF Deduction: " + nhifDeduction);
console.log("NSSF Deduction: " + nssfDeduction);
console.log("Total Deductions: " + totalDeductions);
console.log("Net Salary: " + netSalary);

