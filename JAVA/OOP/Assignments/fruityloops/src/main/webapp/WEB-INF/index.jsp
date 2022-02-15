<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<h1>Fruit Store</h1>
	<table>
		<tbody>
			<tr>
				<th>Name</th>
				<th>Price</th>
			</tr>
			<c:forEach var="fruit" items="${fruits }">
				<tr>
					<td>${fruit.getName() }</td>
					<td>${fruit.getPrice() }</td>
				</tr>
			</c:forEach>
		</tbody>
	
	</table>
</body>
</html>