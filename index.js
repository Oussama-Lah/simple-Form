const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
let btn = document.querySelector("#btn");
const result = document.querySelector("#fullName");

btn.onclick = function () {
  result.innerHTML = `Your Full Name is :${fname.value} ${lname.value}`;
};
document.forms[0].onsubmit = (e) => e.preventDefault();
