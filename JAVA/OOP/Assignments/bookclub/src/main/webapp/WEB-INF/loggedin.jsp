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
    <title>Login &amp; Registration</title>
	<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</head>
<body>
   
	<div class="container mt-5">
		<div class="top-nav">
			<div class="justify-content-between d-flex align-items-center">
				<h1>
					Welcome,
					<c:out value="${userName }"></c:out>
					!
				</h1>
				<a href="/logout">logout</a>
			</div>
			<div class="justify-content-between d-flex align-items-center">
				<p>Books from everyone's shelves:</p>
				<a href="/books/new">+ Add a book to my shelf!</a>
			</div>
		</div>

<div>
<table class="table">
    <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author Name</th>
            <th>Posted By</th>

        </tr>
    </thead>
    <tbody>
    <c:forEach var="book" items="${books }" >
        <tr>
        <td>
                <c:out value="${book.id}"/>
            </td>
            <td>
            <a href="/books/${book.id }"><c:out value="${book.title}"/></a>
            </td>
            <td>
                <c:out value="${book.authorName}"/>
            </td>
            <td>
                <c:out value="${book.user.userName}"/>
            </td>
            
        </tr>
    </c:forEach>
    
    
    
    </tbody>
</table>

</div>



	</div>

</body>
</html>