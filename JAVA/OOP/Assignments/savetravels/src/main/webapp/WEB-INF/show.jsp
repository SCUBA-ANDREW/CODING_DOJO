<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
    <title>Show Expense</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
   <div class="container">
	<h1>Expense Details</h1>
	<a href="/expenses">Go back</a>
	
	<table>
		<tr>
			<th>Expense Name: </th>
			<th>${expense.exp }</th>
		</tr>
		<tr>
			<th>Expense Description: </th>
			<th>${expense.description }</th>
		</tr>
		<tr>
			<th>Vendor: </th>
			<th>${expense.vendor }</th>
		</tr>
		<tr>
			<th>Amount Spent: </th>
			<th>${expense.amount }</th>
		</tr>
	</table>
	
</div>

</body>
</html>