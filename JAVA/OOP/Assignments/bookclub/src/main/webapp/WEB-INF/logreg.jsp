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
    <title>Read Share</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
   
	<div class="container mt-5">
		<h1 class="text-primary">Book Club</h1>
		<p>A place for firends to share thoughts on books</p>


		<div class="row">
			<div class="col">

				<h2>Register</h2>
				<form:form action="/register" method="post" modelAttribute="newUser">
					<div class="form-group">
						<label>User Name:</label>
						<form:input path="userName" class="form-control"></form:input>
						<form:errors path="userName" class="text-danger"></form:errors>
					</div>
					<div class="form-group">
						<label>Email:</label>
						<form:input type="email" path="email" class="form-control"></form:input>
						<form:errors path="email" class="text-danger"></form:errors>
					</div>
					<div class="form-group">
						<label>Password:</label>
						<form:input type="password" path="password" class="form-control"></form:input>
						<form:errors path="password" class="text-danger"></form:errors>
					</div>
					<div class="form-group">
						<label>Confirm PW:</label>
						<form:input type="password" path="confirm" class="form-control"></form:input>
						<form:errors path="confirm" class="text-danger"></form:errors>
					</div>
					<input type="submit" value="Submit" class="btn btn-primary" />
				</form:form>
			</div>

			<div class="col">

				<h2>Log in</h2>
				<form:form action="/login" method="post" modelAttribute="newLogin">

					<div class="form-group">
						<label>Email:</label>
						<form:input type="email" path="email" class="form-control"></form:input>
						<form:errors path="email" class="text-danger"></form:errors>
					</div>
					<div class="form-group">
						<label>Password:</label>
						<form:input type="password" path="password" class="form-control"></form:input>
						<form:errors path="password" class="text-danger"></form:errors>
					</div>
					<input type="submit" value="Submit" class="btn btn-primary" />
				</form:form>
			</div>
		</div>




	</div>

</body>
</html>