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
		<div class="d-flex justify-content-between">
			<h1>
				<c:out value="${book.title }" />
			</h1>

			<a href="/books">back to the shelves</a>
		</div>
		<div>
			<c:choose>
				<c:when test="${book.user.id==user_id }">
					<p>
						You read
						<c:out value="${book.title }"></c:out>
						by
						<c:out value="${book.authorName }"></c:out>
						.
					</p>
					<p>Here are your thoughts:</p>
				</c:when>
				<c:otherwise>
					<p>
						<c:out value="${book.user.userName }"></c:out>
						read
						<c:out value="${book.title }"></c:out>
						by
						<c:out value="${book.authorName }"></c:out>
						.
					</p>
					<p>
						Here are
						<c:out value="${book.user.userName }"></c:out>
						's thoughts:
					</p>
				</c:otherwise>
			</c:choose>
			<p>
				<c:out value="${book.myThoughts }"></c:out>
			</p>


		</div>

		<c:choose>
			<c:when test="${book.user.id==user_id }">
				<a href="/books/${book.id}/edit" class="btn btn-success">edit</a>
				<form action="/books/${book.id}/delete" method="post">
					<input type="hidden" name="_method" value="delete"> <input
						type="submit" value="Delete" class="btn btn-danger">
				</form>
			</c:when>
		</c:choose>


	</div>
	   

</body>
</html>