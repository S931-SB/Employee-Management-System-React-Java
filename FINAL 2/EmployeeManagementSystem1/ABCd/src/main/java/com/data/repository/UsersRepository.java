package com.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.data.entity.Users;

public interface UsersRepository extends JpaRepository<Users,Integer> {
	 boolean existsByEmail(String email);
Users findByEmail(String email);
Users findByEmailAndPassword(String email, String password);



}
