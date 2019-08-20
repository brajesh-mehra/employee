package com.bm.rest.repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class CreateEmployeesTable {

	public void createEmpTable() {
		 Connection con = null;
	      Statement stmt = null;
	      int result = 0;
	      
	      try {
	         Class.forName("org.hsqldb.jdbc.JDBCDriver");
	         con = DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/testdb", "SA", "");
	         stmt = con.createStatement();
	         
	         result = stmt.executeUpdate("CREATE TABLE tutorials_tbl ( id INT NOT NULL, title VARCHAR(50) NOT NULL, author VARCHAR(20) NOT NULL, submission_date DATE,PRIMARY KEY (id));");
				
	      }  catch (Exception e) {
	         e.printStackTrace(System.out);
	      }
	      System.out.println("Table created successfully");
	}
}
