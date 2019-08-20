package com.bm.employees.rest.model;

public class Response {
	Integer total;
	Employees result;
	
	public Response(){
		
	};
	public Integer getTotal() {
		return total;
	}
	public void setTotal(Integer total) {
		this.total = total;
	}
	public Employees getResult() {
		return result;
	}
	public void setResult(Employees result) {
		this.result = result;
	}
}
