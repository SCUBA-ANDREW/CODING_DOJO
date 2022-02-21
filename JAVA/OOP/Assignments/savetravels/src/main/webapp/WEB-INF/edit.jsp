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
    <title>Edit My Task</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<h1>Edit Expense</h1>
		<a href="/expenses">Go back</a>
		
		<form:form action="/expenses/${expense.id }/update" method="POST" class="form" modelAttribute="expense">
		<input type="hidden" name="_method" value="put">
		<form:label class="form-label" path="exp">Expense Name:</form:label>
		<form:input class="form-control" path="exp"></form:input>
		<p>
			<form:errors path="exp"></form:errors>
		</p>
		<form:label class="form-label" path="vendor">Vendor:</form:label>
		<form:input class="form-control" path="vendor"></form:input>
		<p>
			<form:errors path="vendor"></form:errors>
		</p>
		<form:label class="form-label" path="amount">Amount Spent:</form:label>
		<form:input class="form-control" path="amount"></form:input>
		<p>
			<form:errors path="amount"></form:errors>
		</p>
		<form:label class="form-label" path="description">Expense Description:</form:label>
		<form:textarea class="form-control" path="description"></form:textarea>
		<p>
			<form:errors path="description"></form:errors>
		</p>
		<button class="btn btn-primary">Submit</button>
	
	</form:form>

	

	
	
	</div>
   

</body>
</html>