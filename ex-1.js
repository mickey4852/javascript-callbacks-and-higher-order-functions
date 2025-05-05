// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  let result = [];
  for (let num of array) {
    result.push(addSalaries(num,operation));
  };
  return result;
};

function addSalaries (salaries,addValue) {
  return salaries + addValue;
};

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here
newEmployeeSalaries = forEach(employeeSalaries,5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
