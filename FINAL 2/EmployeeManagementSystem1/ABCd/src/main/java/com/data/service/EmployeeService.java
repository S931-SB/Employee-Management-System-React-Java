package com.data.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.data.entity.Employee;
import com.data.repository.EmployeeRepository;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository eresp;

    public String save(Employee e) {
        eresp.save(e);
        return "Employee record added successfully";
    }

    public List<Employee> findAll() {
        return eresp.findAll();
    }

    public Employee findById(int eid) {
        return eresp.findById(eid).orElse(null);
    }

    public String deleteById(int eid) {
        if (eresp.existsById(eid)) {
            eresp.deleteById(eid);
            return "Employee deleted successfully";
        }
        return "Employee not found";
    }

    public String update(int eid, Employee newemp) {
        Optional<Employee> optional = eresp.findById(eid);
        if (optional.isEmpty()) return "No record matched";

        Employee existing = optional.get();

        if (newemp.getName() != null) existing.setName(newemp.getName());
        if (newemp.getEmail() != null) existing.setEmail(newemp.getEmail());
        if (newemp.getRole() != null) existing.setRole(newemp.getRole());
        if (newemp.getDepartment() != null) existing.setDepartment(newemp.getDepartment());
        if (newemp.getImg() != null) existing.setImg(newemp.getImg());
        if (newemp.getContactno() != 0) existing.setContactno(newemp.getContactno());
        if (newemp.getSalary() != 0.0) existing.setSalary(newemp.getSalary());

        eresp.save(existing);
        return "Employee record updated";
    }

    public List<Employee> findByName(String name) {
        return eresp.findByName(name);
    }

    public List<Employee> findByRole(String role) {
        return eresp.findByRole(role);
    }

    public List<Employee> findByDepartment(String dept) {
        return eresp.findByDepartment(dept);
    }
}
