//EASY:
//A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
//Write one function that can dynamically print the value of the exercise for that day, and it must be closure.
// Output: Today's exercise: Running
// console.log(exercise("Running"));
// Output: Today's exercise: Swimming
//console.log(exercise("Swimming"));
// Output: Today's exercise: Dancing
// console.log(exercise("Dancing"));
// Output: Today's exercise: Fencing
//console.log(exercise("Fencing"));

//creating a variable for input box
const input = document.querySelector(".inputbox").value.trim();

document.querySelector(".enter").addEventListener("click", function () {
  //creating a variable for input box
  const input = document.querySelector(".inputbox").value.trim();

  document.querySelector(".output").textContent = "Todays Exercise is :";
  document.querySelector(".output2").textContent = input;

  if (!input) {
    alert("please enter valid exercise.");
  }
});