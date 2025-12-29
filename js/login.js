const users = [
  { username: "employee1", password: "123456" },
  { username: "employee2", password: "abcdef" }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "admin.html?dashboard=true";
  } else {
    alert("Username or password incorrect");
  }
}
