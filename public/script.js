document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(data.message);
        window.location.href = `/welcome?username=${encodeURIComponent(
          username
        )}`;
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred.");
    }
  });
});
