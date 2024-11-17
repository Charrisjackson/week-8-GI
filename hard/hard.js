//  Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and SSN. Only the name property should be accessible, and it should be called through a public function. The SSN property should not be accessible at all. Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data. You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.
// // Output: Undefined
//   console.log(patient2.names);
// // Output: Undefined
//   console.log(patient2.ssn);
// // Output: John
//   console.log(patient2.getName());
// // Output: 123-45-6789
//   console.log(patient2.getSSN());

//closure is a function that is returning a function and then some
//anything created in this function is invisble// restricted from being accessed
//anything outside of a function is scope -doesnt exist
function info() {
  const PII = {
    name: "john doe",
    ssn: 123456789,
  };
  return {
    //public function
    //public function is anything you an use anywhere in your code base
    // returns function that returns name
    getName: function () {
      return PII.name;
    },
    // getSocial(){

    // }
  };
}
//creating a variable called info and assignment it to the value of the public function
const information = info();
//output should be undefined
console.log(information.ssn);
console.log(information.getName());
