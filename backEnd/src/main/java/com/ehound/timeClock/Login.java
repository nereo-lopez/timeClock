package com.ehound.timeClock;

public class Login {

    // Hardcoded username and password for demonstration purposes
    private static final String USERNAME = "admin";
    private static final String PASSWORD = "password";

    // Method to authenticate user
    public boolean authenticate(String username, String password) {
        return username.equals(USERNAME) && password.equals(PASSWORD);
    }

    public static void main(String[] args) {
        // Create an instance of the Login class
        Login login = new Login();

        // Example input (these would normally come from the user input in a real application)
        String inputUsername = "admin";
        String inputPassword = "password";

        // Check if login credentials are correct
        if (login.authenticate(inputUsername, inputPassword)) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Login failed! Invalid credentials.");
        }
    }
}
