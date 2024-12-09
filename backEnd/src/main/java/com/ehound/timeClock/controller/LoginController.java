package com.ehound.timeClock.controller;

import com.ehound.timeClock.Login;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LoginController {

    private final Login login = new Login();
    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest loginRequest) {
        boolean isAuthenticated = login.authenticate(loginRequest.getUsername(), loginRequest.getPassword());
        if (isAuthenticated) {
            return "Login successful!";
        } else {
            return "Login failed! Invalid credentials.";
        }
    }

    public static class LoginRequest {
        private String username;
        private String password;

        // Getters and setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}