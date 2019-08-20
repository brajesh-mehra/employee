package com.bm.rest.comparator;

import java.util.Comparator;

import com.bm.employees.rest.model.Employee;

public class LastNameSorter implements Comparator<Employee>{

	public int compare(Employee e1, Employee e2) {
		return e1.getLastName().compareTo(e2.getLastName());
	}
}