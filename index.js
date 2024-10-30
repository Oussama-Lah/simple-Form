const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
let btn = document.getElementById("btn");
const result = document.getElementById("fullName");

btn.onclick = function () {
  result.innerHTML = `Your Full Name is :${fname.value} ${lname.value}`;
};
document.forms[0].onsubmit = (e) => e.preventDefault();
