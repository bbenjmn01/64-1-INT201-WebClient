const cancelBtn = document.querySelector("#cancel");

//1. binding with event function name

// cancelBtn.onclick = showMessage;

// function showMessage() {

//   alert('you click on cancel button now!');

// }

//2. binding with event function expression

// cancelBtn.onclick = function () {
//   alert("you click on cancel button now!");
// };

cancelBtn.onclick = function (event) {
  alert(`you click on cancel button now!: ${event.target.id}`);
};

// cancelBtn.onclick = () => alert("you click on cancel button now!");
