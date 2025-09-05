package com.data.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.data.entity.Users;
import com.data.repository.UsersRepository;

@Service
public class UsersService {

@Autowired
private UsersRepository userRepository;

public String register(Users users) {
	if(userRepository.existsByEmail(users.getEmail())) {
	return "Users aleredy exists";	
	}
	userRepository.save(users);
	return "Users register successfully";
}
public List<Users> findAll() {
     return userRepository.findAll();
 }
}
