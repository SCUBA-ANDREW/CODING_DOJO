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
    <title>Book Share</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
   <div class="container mt-5">
		<h1 class="text-primary">Change your Entry!</h1>
		<a href="/books">back to the shelves</a>


		<div class="row">
			<div class="col">


				<form:form action="/books/${book.id }/edit" method="post" modelAttribute="book">
				<form:errors path="title" class="text-danger"></form:errors>
				<form:errors path="authorName" class="text-danger"></form:errors>
				<form:errors path="myThoughts" class="text-danger"></form:errors>
					<form:hidden path="user" value="${user_id }"></form:hidden>
					<div class="form-group">
						<label>Title:</label>
						<form:input path="title" class="form-control"></form:input>
					</div>
					<div class="form-group">
						<label>Author:</label>
						<form:input path="authorName" class="form-control"></form:input>
					</div>
					<div class="form-group">
						<label>My Thoughts:</label>
						<form:textarea path="myThoughts" class="form-control"></form:textarea>
					</div>
					
					<input type="submit" value="Submit" class="btn btn-primary" />
				</form:form>
			</div>

		</div>
	</div>

</body>
</html>