Descripción de la prueba / Test description

La prueba técnica consta de dos pantallas.

Pantalla 1: Login

1. Debes presentar un login social que permita al usuario loguearse a través de Facebook, Twitter o Google.
2. El login debe funcionar.

Pantalla 2: Listado páginado

1. Para acceder a esta pantalla, el usuario debe haberse logeado en la pantalla 1.
2. La pantalla debe mostrar algo de información obtenida de la API a través de la
   que se haya logeado. (Nombre, email, foto...)
3. Debe haber un listado, paginado de 5 en 5 registros que consuma de un API.
   a. Como API puedes usar https://reqres.in
   b. Listado de usuarios: GET /api/users (query params "page", para la
   paginación)

Tu interfaz debe además incluir las siguientes funcionalidades:

1. Obtener datos de un usuario: GET /api/users/{id}
2. Crear un usuario: POST /api/users (campos del body: name, job)
3. Editar usuario: PATCH /api/users/{id}

Diseño y distribución de la interfaz
Esta prueba técnica no es para un perfil de diseñador, ni de UX, pero si esperamos que seas capaz de distribuir una interfaz básica de forma clara y accesible al usuario.

Tecnologías de la prueba técnica
Es necesario que hagas uso de estas tecnologías en la prueba técnica, que son las que necesitarás en tu día a día desarrollando para nuestros clientes:

1. React
2. Redux (hooks)
3. Axios
4. Styled Components

The technical test consists of two screens.

Screen 1: Login

1. You must present a social login that allows the user to log in through Facebook, Twitter or Google.
2. The login should work.

Screen 2: Paged list

1. To access this screen, the user must have logged in on screen 1.
2. The screen should display some information obtained from the API via the that it has been logged in. (Name, email, photo...)
3. There must be a list, paginated from 5 to 5 records that consumes an API.
   a. As API you can use https://reqres.in
   b. List of users: GET /api/users (query params "page", for the
   pagination)

Your interface must also include the following functionalities:

1. Get user data: GET /api/users/{id}
2. Create a user: POST /api/users (body fields: name, job)
3. Edit user: PATCH /api/users/{id}

Interface design and layout
This technical test is not for a designer or UX profile, but we do expect that you are able to distribute a basic interface in a clear and accessible way to the user.

Tech Test Technologies
It is necessary that you make use of these technologies in the technical test, which are the ones you will need in your day to day developing for our clients:

1. React
2. Redux (hooks)
3. Axios
4. Styled Components

Estructura del proyecto / Project structure

-Index
--App
---Home
----LoginButton
---Profile
----LogoutButton
----UserList
-----Modal
---NotFound

Descripción de la aplicación:

La primera pantalla que veremos será la de bienvenida, aquí encontramos un botón que nos llevará a la pantalla de login donde podremos logearnos mediante Google o con una cuenta propia, una vez hecho esto el botón de login se cambiará por otro botón para acceder a la pagina "Profile", si tratamos de acceder a esta pagina sin habernos autentificado previamente la app nos redigirá a la pantalla de login ya mencionada. Para el sistema de login utilizo auth0 (https://auth0.com/) que me permite generar la pagina de login, obtener datos del usuario que se ha logeado y otras funcionalidades como por ejemplo: redirigir a una pagina en caso de que el usuario no se haya autenticado.

En "Profile" veremos el nombre, el email y el avatar del usuario que se ha conectado, ademas dispondremos de un botón para logout, mas abajo se encuentra el listado de 5 en 5 usuarios obtenidos de la API https://reqres.in. Abajo del todo tenemos la paginación para poder ver a los usuarios, cada usuario tiene un botón "Check" que abre un "Modal" que permite ver: First name, Last name, Email y su Avatar.

He añadido un botón para crear y editar usuarios, sin embargo he observado que no hay correalación entre los usuarios que se obtienen y los que se crean ya que cuando obtengo los usuarios tengo nombre,email, avatar, etc pero a la hora de crear un usuario solo me pide un "name" y un "job" pero con el fin de realizar la prueba si creamos un usuario se nos abre el "Modal" y ahí deberemos rellenar los campos, una vez hecho nos aparecerá un alert indicando el id del nuevo usuario y el status 201 que indica que se ha podido crear exisitosamente (también hay console.log() para mas información).

De la misma forma si pulsamos "Edit" con alguno de los usuarios nos aparecerá un formulario similar pero con los campos rellenados (job esta rellenado por defecto con el valor "Job"), si modificamos los campos y aceptamos nuevamente muestra un alert y console.log() con los datos y el status 200.

Finalmente he agregado una pagina de Not Found por si accedemos a una pagina que no exista.

---

Application Description

The first screen will see is the welcome page, here we can find a button that takes us to the login page where we can log in with Google or with our own account, once this is done, the login button will be changed to another button to access the "Profile" page, if we try to access this page without having previously authenticated ourselves, the app will redirect us to the aforementioned login screen. For the login system I use auth0 (https://auth0.com/) which allows me to generate the login page, obtain data from the user who has logged in and other features such as: redirect to a page in case the user has not been authenticated.

In "Profile" we will see the name, email and avatar of the user who has connected, we will also have a logout button, below is the list of 5 in 5 users obtained from the API https://reqres.in. At the bottom we have the pagination to see the users, each user has a "Check" button that opens a "Modal" that allows you to see: First name, Last name, Email and their Avatar. I have added a button to create and edit users, however I have observed that there is no correlation between the users that are obtained and those that are created since when I obtain the users I have a name, email, avatar, etc, but when creating a user it only asks me for a "name" and a "job" but in order to carry out the test if we create a user the "Modal" opens and there we must fill in the fields, once done an alert will appear indicating the id of the new user and status 201 indicating that it has been created successfully (there is also console.log() for more information). In the same way, if we press "Edit" with any of user, a similar form will appear but with the fields filled in (job is filled in by default with the value "job"), if we modify the fields and accept again, it shows an alet and a console.log() with the data and status 200.

Finally I added a Not Found page in case we access non existent page
