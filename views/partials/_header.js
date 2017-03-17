<!DOCTYPE html>

<html lang = "eng">
	<head>
		<title> TinyApp </title>

		<style> 

			body {
				text-align: center;
			}

			h1 {
				font-family: Helvetica, sans-serif;
				margin: 6%;		
			}

			li {
				list-style: none;
			}

			input {
				display: inline-block;
			}
			
		</style>
	</head>

	<body>
		<h1> TINY APP </h1>

		<form method = "POST" action = "/urls/login">
			<input type = "text" name = "username" placehodler = "Username" />
			<input type = "text" name = "password" placeholder = "Password" />
			<input type = "submit" name = "access" placeholder = "Login" />
		</form>
	</body>
</html>