package com.bm.rest.comparator;

import java.util.Comparator;

import com.bm.employees.rest.model.Employee;

public class IdSorter implements Comparator<Employee>{

	public int compare(Employee e1, Employee e2) {
		return e1.getId().compareTo(e2.getId());
	}
}