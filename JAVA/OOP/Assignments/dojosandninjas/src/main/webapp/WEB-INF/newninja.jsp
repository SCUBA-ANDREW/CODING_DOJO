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
    <title>New Ninja</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
   <div class="container">
	<h1>New Ninja</h1>
	<form:form action="/ninjas/new" method="POST" class="form" modelAttribute="ninja">
		
		
		<form:label class="form-label" path="dojo">Dojo:</form:label>
		<form:select class="form-select" path="dojo">
		
		<c:forEach var="dj" items="${dojos }">
		<option value="${dj.id}">${dj.name}</option>
		</c:forEach>
		
		
		</form:select>
		
		<form:label class="form-label" path="firstName">First Name:</form:label>
		<form:input class="form-control" path="firstName"></form:input>

		<form:label class="form-label" path="lastName">Last Name:</form:label>
		<form:input class="form-control" path="lastName"></form:input>

		<form:label class="form-label" path="age">Age:</form:label>
		<form:input class="form-control" path="age"></form:input>


		<button class="btn btn-primary">Create</button>
	
	</form:form>

</div>

</body>
</html>