const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#emailSign").value.trim();
  const password = document.querySelector("#passwordSign").value.trim();

  if (email && password) {
    const response = await fetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#emailAcct").value.trim();
  const password = document.querySelector("#passwordAcct").value.trim();

  if (email && password) {
    const response = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#signIn")
  .addEventListener("#signInID", loginFormHandler);

document
  .querySelector("#createAccount")
  .addEventListener("accountID", signupFormHandler);
