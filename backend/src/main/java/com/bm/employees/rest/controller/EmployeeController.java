package com.bm.employees.rest.controller;

import java.net.URI;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.bm.employees.rest.dao.EmployeeDAO;
import com.bm.employees.rest.model.Employee;
import com.bm.employees.rest.model.Employees;
import com.bm.employees.rest.model.Request;
import com.bm.employees.rest.model.Response;
import com.bm.employees.rest.model.SearchRequest;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/employees")
public class EmployeeController 
{
    @Autowired
    private EmployeeDAO employeeDao;
    
    @PostMapping(path="/", produces = "application/json")
    public Response getEmployees(@RequestBody Request req) 
    		throws Exception
    {
    	String str = "";
        return employeeDao.getAllEmployees(req, str);
    }
    
    @PostMapping(path= "/add", produces = "application/json")
    public Response addEmployee(
                        @RequestBody Employee employee) 
                 throws Exception 
    {       
    	Request req = new Request();
    	String str = "";
        Integer id = employeeDao.getAllEmployees(req, str).getResult().getEmployeeList().size() + 1;
        employee.setId(id);
        
        //add resource
        employeeDao.addEmployee(employee);
        
        return this.getEmployees(req);
    }
    
    @PutMapping(path= "/update/{id}", produces = "application/json")
    public Response updateEmployee(
    		@PathVariable("id") int id, @RequestBody Employee employee) 
                 throws Exception 
    {       
    	Request req = new Request();
    	employee.setId(id);
        employeeDao.updateEmployee(id, employee);
        
        return this.getEmployees(req);
    };
    
    @GetMapping(path= "/delete/{id}", produces = "application/json")
    public Response updateEmployee(
    		@PathVariable("id") int id) 
                 throws Exception 
    {       
    	Request req = new Request();
        
        employeeDao.deleteEmployee(id);
        
        return this.getEmployees(req);
    };
    
    @PostMapping(path= "/search", produces = "application/json")
    public Response searchEmployee(
    		@RequestBody SearchRequest query) 
                 throws Exception 
    {       
    	Request req = new Request();
        return employeeDao.getAllEmployees(req, query.getQuery());
        
    }
}
