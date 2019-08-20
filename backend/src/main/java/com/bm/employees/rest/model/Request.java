package com.bm.employees.rest.model;

public class Request {

	Integer page;
	Integer results;
	String sortField;
	String sortOrder;
	
	public Request() {
			
		};
	public Request(Integer page, Integer results, String sortField, String sortOrder) {
		super();
		this.page = page;
		this.results = results;
		this.sortField = sortField;
		this.sortOrder = sortOrder;
	};
	public Integer getPage() {
		return page;
	}
	public void setPage(Integer page) {
		this.page = page;
	}
	public Integer getResults() {
		return results;
	}
	public void setResults(Integer results) {
		this.results = results;
	}
	public String getSortField() {
		return sortField;
	}
	public void setSortField(String sortField) {
		this.sortField = sortField;
	}
	public String getSortOrder() {
		return sortOrder;
	}
	public void setSortOrder(String sortOrder) {
		this.sortOrder = sortOrder;
	}
	
}
