package com.data.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.data.entity.Employee;
import com.data.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService eservice;

    @PostMapping("/add")
    public ResponseEntity<String> save(@RequestBody Employee e) {
        return ResponseEntity.ok(eservice.save(e));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> findAll() {
        return ResponseEntity.ok(eservice.findAll());
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<?> findById(@PathVariable int id) {
        Employee e = eservice.findById(id);
        return e != null ? ResponseEntity.ok(e) : ResponseEntity.notFound().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@PathVariable int id, @RequestBody Employee newemp) {
        return ResponseEntity.ok(eservice.update(id, newemp));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable int id) {
        return ResponseEntity.ok(eservice.deleteById(id));
    }

    @GetMapping("/department")
    public ResponseEntity<List<Employee>> findByDept(@RequestParam String dept) {
        return ResponseEntity.ok(eservice.findByDepartment(dept));
    }

    @GetMapping("/role")
    public ResponseEntity<List<Employee>> findByRole(@RequestParam String role) {
        return ResponseEntity.ok(eservice.findByRole(role));
    }

    @GetMapping("/name")
    public ResponseEntity<List<Employee>> findByName(@RequestParam String name) {
        return ResponseEntity.ok(eservice.findByName(name));
    }
}

