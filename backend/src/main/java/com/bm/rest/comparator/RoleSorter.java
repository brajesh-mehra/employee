package com.bm.rest.comparator;

import java.util.Comparator;

import com.bm.employees.rest.model.Employee;

public class RoleSorter implements Comparator<Employee>{

	public int compare(Employee e1, Employee e2) {
		return e1.getRole().compareTo(e2.getRole());
	}
}