const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    try {
        const response = await login(username, password);

        if (response.includes("Login successful")) {
            window.location.href = "timeClockMenu.html";
        } else {
            loginErrorMsg.style.opacity = 1;
        }
    } catch (error) {
        console.error("Error during login:", error);
        loginErrorMsg.style.opacity = 1;
    }
});

async function login(username, password) {
    try {
        const response = await fetch('http://localhost:8082/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ username: username, password: password }),
        });

        const data = await response.text();
        return data;

    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}

