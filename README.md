Estructura del proyecto

-Index
--App
---Home
----LoginButton
---Profile
----LogoutButton
----UserList
-----Modal
---NotFound

Resumen de la aplicación:

La primera pantalla que veremos será la de bienvenida, aquí veremos un botón que nos llevará a la pantalla de login donde podremos logearnos mediante Google o con una cuenta propia, una vez hecho esto el botón de login se cambiará por otro botón para acceder a la pagina "Profile", si tratamos de acceder a esta pagina sin habernos autentificado previamente la app nos redigirá a la pantalla de login ya mencionada. Para el sistema de login utilizo auth0 (https://auth0.com/) que me permite generar la pagina de login, obtener datos del usuario que se ha logeado y otras funcionalidades como por ejemplo redirigir a una pagina en caso de que el usuario no se haya autenticado.

En "Profile" veremos el nombre, el email y el avatar del usuario que se ha conectado, ademas dispondremos de un botón para logout, mas abajo se encuentra el listado de 5 en 5 usuarios obtenidos de la API https://reqres.in. Abajao del todo tenemos la paginación para poder ver a los usuarios, cada usuario tiene un botón "Check" que abre un "Modal" que permite ver: First name, Last name, Email y su Avatar. He añadido un botón para crear y editar usuarios, sin embargo he observado que no hay correalación entre los usuarios que se obtienen y los que se crean ya que cuando obtengo los usuarios tengo nombre,email, avatar, etc pero a la hora de crear un usuario solo me pide un "name" y un "job" pero con el fin de realizar la prueba si creamos un usuario se nos abre el "Modal" y ahí deberemos rellenar los campos, una vez hecho nos aparecerá un alert indicando el id del nuevo usuario y el status 201 que indica que se ha podido crear exisitosamente (también hay console.log() para mas información); de la misma forma si pulsamos "Edit" con alguno de los usuarios nos aparecerá un formulario similar pero con los campos rellenados (job esta rellenado por defecto con el valor "Job"), si modificamos los campos y aceptamos nuevamente muestra un alert y console.log() con los datos y el status 200.

Finalmente he agregado una pagina de Not Found por si accedemos a una pagina que no exista.
