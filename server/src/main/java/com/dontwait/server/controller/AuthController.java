package com.dontwait.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/auth")
public class AuthController{
    @GetMapping("/test")
    public String getHello() {
        return new String("Hello from AuthController");
    }
    
}
