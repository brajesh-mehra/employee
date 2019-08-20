package com.bm.employees.rest.model;

import java.util.Date;

public class Employee {

	private Integer id;
    private String name;
    private String lastName;
    private String dob;
    private String role;
    private String department;
    private String email;
	
	public Employee(){
		}
	
	public Employee(
			Integer id,
		    String name,
		    String lastName,
		    String dob,
		    String role,
		    String department,
		    String email){
		super();
		this.id = id;
	    this.name = name;
	    this.lastName = lastName;
	    this.dob = dob;
	    this.role = role;
	    this.department = department;
	    this.email = email;
	}
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	 @Override
	    public String toString() {
	        return "Employee [id=" + id + ", name=" + name + ", lastName=" + lastName + ", email=" + email + "]";
	    }

//    @Override
//    public String toString() {
//        return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + "]";
//    }
}
