<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>Operaciones Base: Suma de arreglos A y B en C</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
		crossorigin="anonymous"></script>
</head>

<body>
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-warning">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">4CM3</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								Inicio
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="../index.html">Inicio</a></li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								Condicionales
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="../condicionales/puedesVotar.html">Puedes Votar</a>
								</li>
								<li><a class="dropdown-item" href="../condicionales/mayor3Numeros.html">Mayor de 3
										números</a></li>
								<li><a class="dropdown-item" href="../condicionales/ejemploSwitch.html">Ejemplo
										Switch</a></li>

							</ul>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								Ciclos
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="../ciclos/paresFor.html">Pares 1 - 100 for</a></li>
								<li><a class="dropdown-item" href="../ciclos/sumatoriaFor.html">Sumatoria 100 for</a>
								</li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="../ciclos/paresWhile.html">Pares 1 - 100 while</a>
								</li>
								<li><a class="dropdown-item" href="../ciclos/sumatoriaWhile.html">Sumatoria 100
										while</a>
								</li>

								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="../ciclos/paresDo.html">Pares 1 - 100 do-while</a>
								</li>
								<li><a class="dropdown-item" href="../ciclos/sumatoriaDo.html">Sumatoria 100
										do-while</a>
								</li>
							</ul>
						</li>

						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								Algoritmos de Ordenación (Arreglos)
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="../algoritmosOrdenacion/bubbleSort.html">Bubble
										Sort</a></li>
								<li><a class="dropdown-item" href="../algoritmosOrdenacion/insertionSort.html">Insertion
										Sort</a></li>
								<li><a class="dropdown-item" href="../algoritmosOrdenacion/selectionSort.html">Selection
										Sort</a></li>
							</ul>
						</li>


						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								Operaciones Base
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="paresImpares.html">Pares -
										Impares</a></li>
								<li><a class="dropdown-item" href="tablasMultiplicar.html">Tabla de
										Multiplicar</a></li>
								<li><a class="dropdown-item" href="productoSumas.html">Producto con
										sumas</a></li>
								<li><a class="dropdown-item" href="numMayorArreglo.html">Número Mayor
										en Arreglo</a></li>
								<li><a class="dropdown-item" href="sumaArreglos.html">Suma de
										Arreglos
										A y B en C</a></li>
								<li><a class="dropdown-item" href="mediaAritmetica.html">Media
										Aritmética</a></li>
								<li><a class="dropdown-item" href="ordenArreglo.html">Ordenación de
										Arreglo</a></li>
								<li><a class="dropdown-item" href="operacionesTexto.html">Operaciones
										con Textos</a></li>
							</ul>
						</li>

				</div>
		</nav>
		<div>
			<section>
				<article>
					<hr>
					<h2>Operaciones Base: Suma de arreglos A y B en C</h2>
					<hr>
				</article>
				<article>
					<hr>
					<script type="text/javascript">
						var n = prompt("¿Cuántos números quiere ingresar en el arreglo A y B?");
						alert("Datos de A");
						let A = entradaDatos(n);
						alert("Datos de B");
						let B = entradaDatos(n);
						document.write("<p>Arreglo A: " + "[" + A + "]" + "</p>");
						document.write("<p>Arreglo B: " + "[" + B + "]" + "</p>");
						sumaC(A, B, n);

						function sumaC(A, B, n) {
							let C = [];
							for (var i = 0; i < n; i++) {
								C[i] = A[i] + B[i];
							}
							document.write("<p>Arreglo C: " + "[" + C + "]" + "</p>");
						}

						function entradaDatos(n) {
							let D = [];
							for (var i = 0; i < n; i++) {
								D[i] = parseInt(prompt("Ingrese un número: "));
							}
							return D;
						}
					</script>
				</article>
			</section>
		</div>
		<footer>
		</footer>

</body>

</html>