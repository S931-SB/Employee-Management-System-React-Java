package com.data.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.data.dto.RegisterDTO;
import com.data.entity.Users;
import com.data.repository.UsersRepository;
import com.data.service.UsersService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UsersController {

	 @Autowired
	    private UsersRepository employeeRepository;

	    @PostMapping("/register")
	    public String register(@RequestBody RegisterDTO registerDTO) {
	        Users existingUser = employeeRepository.findByEmail(registerDTO.getEmail());

	        if (existingUser != null) {
	            return "User already exists!";
	        }

	        Users newEmp = new Users();
	        newEmp.setEmail(registerDTO.getEmail());
	        newEmp.setPassword(registerDTO.getPassword());
	        newEmp.setRole(registerDTO.getRole());
	        employeeRepository.save(newEmp);

	        return "Registration successful, please login.";
	    }

	    @PostMapping("/login")
	    public ResponseEntity<?> login(@RequestBody RegisterDTO loginDTO) {
	        Users user = employeeRepository.findByEmail(loginDTO.getEmail());

	        if (user == null || !user.getPassword().equals(loginDTO.getPassword())) {
	            return ResponseEntity.ok("Invalid email or password");
	        }

	        System.out.println("User Role: " + user.getRole()); // Debug print
	        return ResponseEntity.ok(user); // Sends { id, email, password, role }
	    }

	    @GetMapping("/all")
	    public List<Users> getAllUsers() {
	        return employeeRepository.findAll();
	    }
	
	
	

}
