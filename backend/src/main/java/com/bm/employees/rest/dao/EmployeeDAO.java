package com.bm.employees.rest.dao;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.bm.employees.rest.model.Employee;
import com.bm.employees.rest.model.Employees;
import com.bm.employees.rest.model.Request;
import com.bm.employees.rest.model.Response;
import com.bm.rest.comparator.DepartmentSorter;
import com.bm.rest.comparator.DobSorter;
import com.bm.rest.comparator.IdSorter;
import com.bm.rest.comparator.LastNameSorter;
import com.bm.rest.comparator.NameSorter;
import com.bm.rest.comparator.RoleSorter;

@Repository
public class EmployeeDAO 
{
    private static Employees masterlist = new Employees();
    
    static 
    {
    	masterlist.getEmployeeList().add(new Employee(1, "Lokesh", "Gupta", "2018-05-01", "Manager", "IT", "brajesh.mehra@yahoo.com" ));
    	masterlist.getEmployeeList().add(new Employee(2, "Brajesh", "Mehra", "2018-05-01", "Manager", "IT", "brajesh.mehra@yahoo.com"  ));
    	masterlist.getEmployeeList().add(new Employee(3, "Bindu", "Mehra", "2018-05-01", "Manager", "IT", "brajesh.mehra@yahoo.com"  ));
    }
    
    private Employees employeeSearch(Employees masterlist, String query) {
    	Employees list = new Employees();
    	List<Employee> employeeList = new ArrayList<Employee>();
    	try {
    	for(int i=0; i < masterlist.getEmployeeList().size(); i++)
        {
            if(masterlist.getEmployeeList().get(i).getName().equalsIgnoreCase(query) || masterlist.getEmployeeList().get(i).getLastName().equalsIgnoreCase(query)) {
                 	employeeList.add(masterlist.getEmployeeList().get(i));
            }
        }
    	}catch(Exception e)
    	{
    		System.out.println(e.getStackTrace());
    	}
    	list.setEmployeeList(employeeList);
    	return list;
    };
    
    public Response getAllEmployees(Request req, String query) 
    {
    	Employees newmasterlist = new Employees();
    	newmasterlist = masterlist;
    	Response res = new Response();
    	
    	if(query != null && !query.isEmpty())
    	{
    		newmasterlist = employeeSearch(newmasterlist, query);
    	}
    	
    	res.setTotal(newmasterlist.getEmployeeList().size());
    	
    	if(req.getSortField() != null && req.getSortField().equals("name"))
    	{
    		if(req.getSortOrder().equals("descend"))
    		{
    			Collections.sort(newmasterlist.getEmployeeList(), new NameSorter().reversed());
    		}else
    		{
    			Collections.sort(newmasterlist.getEmployeeList(), new NameSorter());
    		}
    	}else if(req.getSortField() != null && req.getSortField().equals("lastName"))
    	{
    		if(req.getSortOrder().equals("descend")) {
    			Collections.sort(newmasterlist.getEmployeeList(), new LastNameSorter().reversed());
    		}else
    		{
    			Collections.sort(newmasterlist.getEmployeeList(), new LastNameSorter());
    		}
    		
    	} else if(req.getSortField() != null && req.getSortField().equals("dob"))
    	{
    		if(req.getSortOrder().equals("descend")) {
    			Collections.sort(newmasterlist.getEmployeeList(), new DobSorter().reversed());
    		}else
    		{
    			Collections.sort(newmasterlist.getEmployeeList(), new DobSorter());
    		}
    		
    	} else if(req.getSortField() != null && req.getSortField().equals("role"))
    	{
    		
    		if(req.getSortOrder().equals("descend")) {
    			Collections.sort(newmasterlist.getEmployeeList(), new RoleSorter().reversed());
    		}else
    		{
    			Collections.sort(newmasterlist.getEmployeeList(), new RoleSorter());
    		}
    	} else if(req.getSortField() != null && req.getSortField().equals("department"))
    	{
    		if(req.getSortOrder().equals("descend")) {
    			Collections.sort(newmasterlist.getEmployeeList(), new DepartmentSorter().reversed());
    		}else
    		{
    			Collections.sort(newmasterlist.getEmployeeList(), new DepartmentSorter());
    		}
    		
    	}else
    	{
    		if(req.getSortOrder() != null && req.getSortOrder().equals("descend")) {
    			Collections.sort(newmasterlist.getEmployeeList(), new IdSorter().reversed());
    		}else
    		{
    			Collections.sort(newmasterlist.getEmployeeList(), new IdSorter());
    		}
    		
    	}
    	
    	Employees list = new Employees();
    	int startIndex;
		int lastIndex;
		
		startIndex = req.getPage() != null ? (req.getPage()*req.getResults())-req.getResults():0;
		lastIndex = startIndex + (req.getResults() != null ? req.getResults(): 0);
		
    	if(req.getPage() != null && req.getPage() > 1 && startIndex < lastIndex)
    	{
    		
    		if(lastIndex > newmasterlist.getEmployeeList().size())
    		{
    			lastIndex = newmasterlist.getEmployeeList().size();
    		}
    		
    		list.setEmployeeList(newmasterlist.getEmployeeList().subList(startIndex, lastIndex));
    	}else
    	{
    		if(req.getResults() == null)
    		{
    			list.setEmployeeList(newmasterlist.getEmployeeList().subList(0, newmasterlist.getEmployeeList().size() < 10 ? newmasterlist.getEmployeeList().size(): 10));
    		}else
    		{
    			list.setEmployeeList(newmasterlist.getEmployeeList().subList(0, req.getResults() > newmasterlist.getEmployeeList().size() ? newmasterlist.getEmployeeList().size():req.getResults()));
    		}
    		
    	}
    	
    	res.setResult(list);
        return res;
    }
    
    public void addEmployee(Employee employee) {
    	masterlist.getEmployeeList().add(employee);
    }
    
    public void updateEmployee(int id, Employee employee) {
        for(int i=0; i < masterlist.getEmployeeList().size(); i++)
        {
            if(masterlist.getEmployeeList().get(i).getId().equals(id)) {
            	masterlist.getEmployeeList().set(i, employee);
            }
        }
    }
    
    public void deleteEmployee(int id) {
        for(int i=0; i < masterlist.getEmployeeList().size(); i++)
        {
            if(masterlist.getEmployeeList().get(i).getId().equals(id)) {
            	masterlist.getEmployeeList().remove(i);
            }
        }
    }
}
