Es necesario tener parado el servidor mongod en la maquina host para que pueda arrancar el contenedor
Para desactivar mongod:sudo systemctl stop mongod
Para activar mongod:sudo systemctl start mongod
Para comprobar su estado: sudo systemctl status mongod
para levantar: docker-compose up
para eliminar contenedores: docker-compose down 

Cargar pokemons en base de datos: node cargarBD.js

Falta:
-Definir si todos los cmapos son obligatorios (SI CONSEGUIMOS HACER Q NO SEAN OBLIGATORIOS HAY Q ELMINAR EL CAMPO DE NINGUN TIPO EN EL SEGUNDO TIPO POKEMON) y si hay algo por defecto(mirar proyecto q piden)
-cambiar numero pokemon menor 100
-La opcion de modificar
-Organizar los botones y las imagenes para que se adapten al tamaño de la pantalla y se ordenen los pokemon
-Q solo se vea la imagen y al poner el poner el raton encima aparazeca nombre y caracteristicas o al clickar, cualquiera vale.
-Que se puedna ver los pokemon de numero menor al 100

SI LA PAGINA CARGA MUY LENTA HAY Q CAMBIAR EL BUDGET DE 20 KB A 4KB EN ANGUJAR.JSON
Al cambiar esto el css se pasa de tamaño asi q o se divide en varios o se quitan cosas

Direccion para hacer post y get: http://localhost:3000/api/pokemon

Comando para desactivar hyper-v y activar avx en windows: bcdedit/set xsavedisable 0