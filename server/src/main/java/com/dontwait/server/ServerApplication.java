package com.dontwait.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;
@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		Dotenv env = Dotenv.load();
		
		env.entries().forEach(entry -> 
		    System.setProperty(entry.getKey(), entry.getValue())
		);

		SpringApplication.run(ServerApplication.class, args);
	}

}
