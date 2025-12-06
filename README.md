Tecnológico Nacional de México Instituto Tecnológico de Ensenada

Asignatura: Frontend 1 Docente: Xenia Padilla Actividad: Proyecto Final Nombre del estudiante: Rosa Lizbeth Barcenas Mancilla: C21930200 Grupo: 8SE Fecha de entrega: 05/12/2025

# Instrucciones de instalación.

Las instrucciones para ejecutar el backend son las siguientes:

Instalar NODE y ExpressJS.

con node corremos el comando.

- npm i

## Para correr el servidor utilizamos uno de los siguientes comandos:

(para modo desarrollo, con errores más especificos) npm run dev

(para modo producción) npm run start


# 🏥 Práctica Integradora: Sistema de Gestión de Citas Médicas

Este proyecto consiste en desarrollar un **sistema backend** que permita gestionar pacientes, doctores y citas médicas. El objetivo principal es digitalizar un proceso que actualmente se realiza en papel dentro de una clínica médica.

---

##  Contexto del Problema

La clínica necesita una API que permita resolver las siguientes necesidades:

- Registrar y administrar pacientes
- Gestionar doctores y sus especialidades
- Agendar, consultar y cancelar citas médicas
- Visualizar el historial de citas de cada paciente

El sistema debe garantizar la disponibilidad de doctores, evitar citas duplicadas y mantener la integridad de la información.

---

##  Objetivos de Aprendizaje

- Diseñar un modelo de datos relacional para pacientes, doctores y citas.
- Implementar persistencia mediante lectura y escritura de archivos JSON.
- Construir endpoints RESTful siguiendo buenas prácticas.
- Validar los datos que recibe la API antes de procesarlos.
- Manejar errores con códigos y mensajes adecuados.
- Implementar lógica de negocio como disponibilidad, conflictos de horarios y validaciones.

--- 


# Screenshots


# DASHBOARD


<img width="1902" height="906" alt="image" src="https://github.com/user-attachments/assets/2d600cfa-aec1-4bbc-adb4-986a9296bfd9" />
<img width="1915" height="926" alt="image" src="https://github.com/user-attachments/assets/d259eeec-7d13-400c-a4e1-040f972f22a7" />

# PAGINA PACIENTES

<img width="1905" height="911" alt="image" src="https://github.com/user-attachments/assets/8a548046-d9a1-43e1-bf58-e29a8e8246ed" />
<img width="1905" height="916" alt="image" src="https://github.com/user-attachments/assets/51038cb0-ae90-47a4-804c-0afb1f49de39" />
<img width="1914" height="921" alt="image" src="https://github.com/user-attachments/assets/5db5b7db-671b-4a9e-bcfa-b2a7454a9c8c" />
<img width="1891" height="907" alt="image" src="https://github.com/user-attachments/assets/3ac47353-76c3-4df9-bf3a-0e72ef25653d" />
<img width="1905" height="914" alt="image" src="https://github.com/user-attachments/assets/050b0849-4054-4c46-b8e7-7dc4d64dd03b" />
<img width="1901" height="911" alt="image" src="https://github.com/user-attachments/assets/59331679-41b1-4bfa-8b54-367c94f7d9c2" />
<img width="1906" height="910" alt="image" src="https://github.com/user-attachments/assets/3b72bf86-a434-4ba5-95df-1b12fe3d549d" />
<img width="1914" height="919" alt="image" src="https://github.com/user-attachments/assets/8c162a0d-f3d6-452a-b8cc-40bf9bc0d4ac" />
<img width="1897" height="911" alt="image" src="https://github.com/user-attachments/assets/4579d950-7178-4887-9a01-12e80429c247" />
<img width="1898" height="914" alt="image" src="https://github.com/user-attachments/assets/146be313-c3c2-4d36-a1f1-76569c84b41e" />
<img width="1897" height="915" alt="image" src="https://github.com/user-attachments/assets/fda3e79a-dfec-4f3d-8e77-3bbab311521c" />
<img width="1913" height="918" alt="image" src="https://github.com/user-attachments/assets/4db95f56-3319-46d8-87ed-67ed17d94497" />
<img width="1904" height="909" alt="image" src="https://github.com/user-attachments/assets/28ef628f-118f-41fa-b4cd-fa756fe069c9" />
<img width="1907" height="914" alt="image" src="https://github.com/user-attachments/assets/6395147b-a1ea-4109-a45c-d49fedd15db0" />
<img width="1902" height="910" alt="image" src="https://github.com/user-attachments/assets/62094615-e542-49e6-af11-c19210139397" />
<img width="1915" height="918" alt="image" src="https://github.com/user-attachments/assets/688b5fc8-1c7c-4b40-ae1a-fc51fdd61594" />
<img width="1903" height="916" alt="image" src="https://github.com/user-attachments/assets/8dee5d03-6222-498f-8bec-94d9fcd57070" />
<img width="1905" height="913" alt="image" src="https://github.com/user-attachments/assets/730d4bfd-f9ef-4c75-bcd4-99bd56ae0f8c" />
<img width="1902" height="913" alt="image" src="https://github.com/user-attachments/assets/0029bd3c-7fda-4fa1-ba56-16a6382d52ca" />
<img width="1905" height="914" alt="image" src="https://github.com/user-attachments/assets/4b2e2b23-b27e-41be-b202-0175f8164ab8" />
<img width="1911" height="919" alt="image" src="https://github.com/user-attachments/assets/3318e378-9031-48e2-a9ed-d38ea2567e0b" />



# PAGINA DOCTORES

<img width="1898" height="905" alt="image" src="https://github.com/user-attachments/assets/3be0a35d-0145-490f-9ece-8d9612a3eca9" />
<img width="1901" height="912" alt="image" src="https://github.com/user-attachments/assets/9af7e4d1-4df6-4c47-9a8a-7e714f8fc4af" />
<img width="1894" height="908" alt="image" src="https://github.com/user-attachments/assets/b6040f68-26dc-4849-ae99-92030e9d9b5a" />
<img width="1898" height="893" alt="image" src="https://github.com/user-attachments/assets/b91c9fed-cd26-4616-95eb-47edb46ac69f" />
<img width="1902" height="916" alt="image" src="https://github.com/user-attachments/assets/18c631d7-c24c-4f03-9802-6c7903e5e639" />
<img width="1897" height="911" alt="image" src="https://github.com/user-attachments/assets/40e2bbce-f4ea-47ac-bc4e-23c11ebc0b5f" />
<img width="1905" height="915" alt="image" src="https://github.com/user-attachments/assets/06eeb7c1-de92-44b0-a69a-479e4620f81e" />
<img width="1912" height="915" alt="image" src="https://github.com/user-attachments/assets/212ebda6-ba6d-439c-8f13-b79da5b012b3" />
<img width="1918" height="811" alt="image" src="https://github.com/user-attachments/assets/89bbc9a1-7287-4feb-993d-c07fd6fb80ba" />
<img width="1900" height="907" alt="image" src="https://github.com/user-attachments/assets/4df4c965-5158-4f10-a0bd-7dd8e59171d7" />
<img width="1902" height="908" alt="image" src="https://github.com/user-attachments/assets/3d99d80c-91d6-438d-8f87-f43864558fff" />
<img width="1913" height="921" alt="image" src="https://github.com/user-attachments/assets/3c6912af-de8f-4a2b-803a-f09a5cf8b916" />
<img width="1912" height="919" alt="image" src="https://github.com/user-attachments/assets/ad82b323-9b0d-4d7e-8882-32d9b8cea754" />
<img width="1897" height="911" alt="image" src="https://github.com/user-attachments/assets/f7e435c0-ff5b-43fb-b6f7-01a1278048c3" />
<img width="1906" height="913" alt="image" src="https://github.com/user-attachments/assets/2a5ab51a-e637-45f0-a836-1f2aa88090d5" />
<img width="1905" height="912" alt="image" src="https://github.com/user-attachments/assets/4277015a-fbc0-4b1e-910c-c193c357cf6a" />
<img width="1897" height="899" alt="image" src="https://github.com/user-attachments/assets/0ae827a4-0f22-47da-abc3-742cfec29235" />
<img width="1903" height="918" alt="image" src="https://github.com/user-attachments/assets/33fb9bf7-9c45-46bb-888d-44999176a964" />
<img width="1892" height="909" alt="image" src="https://github.com/user-attachments/assets/a7c1459c-e174-4d62-95b8-6cde8d495fe6" />
<img width="1895" height="904" alt="image" src="https://github.com/user-attachments/assets/709c524d-69c9-459a-af23-972d095df9fd" />
<img width="1905" height="890" alt="image" src="https://github.com/user-attachments/assets/49b5fb1b-a7ae-4b7b-a80e-9ca66760c0f1" />
<img width="1905" height="920" alt="image" src="https://github.com/user-attachments/assets/4c38a982-9af3-4479-b8e1-5d0ad67ea42a" />



# PAGINA CITAS

<img width="1849" height="915" alt="image" src="https://github.com/user-attachments/assets/a167f2f7-d9ba-4bd9-96e9-93e1db2eafe4" />
<img width="1884" height="913" alt="image" src="https://github.com/user-attachments/assets/96d39e2c-7a76-40a3-b43a-89812e1533ad" />
<img width="1861" height="918" alt="image" src="https://github.com/user-attachments/assets/947b6323-e2c6-4f16-8b32-86c7e4b18bbc" />
<img width="1883" height="912" alt="image" src="https://github.com/user-attachments/assets/1289772c-0df3-4d0f-a494-5209d65a6025" />
<img width="1917" height="978" alt="image" src="https://github.com/user-attachments/assets/3ec5f4cd-525c-484b-8690-f3538050a4eb" />
<img width="1882" height="914" alt="image" src="https://github.com/user-attachments/assets/e6a9ab10-f644-4f76-8aed-9e98a367c91b" />
<img width="1877" height="919" alt="image" src="https://github.com/user-attachments/assets/bc36a281-cbb7-4b83-91cd-af4dccada070" />
<img width="1876" height="915" alt="image" src="https://github.com/user-attachments/assets/ef00ab68-6d6d-4410-b092-81682a380029" />
<img width="1885" height="917" alt="image" src="https://github.com/user-attachments/assets/7c16e675-795e-421f-9dec-88d325ccc52b" />
<img width="1893" height="935" alt="image" src="https://github.com/user-attachments/assets/ee0aa7a5-8758-4aee-8dfe-4ff58e7db858" />
<img width="1893" height="926" alt="image" src="https://github.com/user-attachments/assets/34bc2e53-6cf0-4985-b39d-b635916daee6" />


<img width="1878" height="925" alt="image" src="https://github.com/user-attachments/assets/9068dbb0-5059-4fa6-b451-46a44d827438" />
<img width="1891" height="915" alt="image" src="https://github.com/user-attachments/assets/21641750-d392-4b4c-9782-858d44f52626" />
<img width="1887" height="919" alt="image" src="https://github.com/user-attachments/assets/41be9f9e-d7d2-4a84-9ae9-bf7a330747b3" />
<img width="1892" height="918" alt="image" src="https://github.com/user-attachments/assets/5cd35d87-79d4-48c7-bf05-d62f2ec1ca1a" />
<img width="1905" height="917" alt="image" src="https://github.com/user-attachments/assets/a54a6bcc-03c3-4fa6-8f9b-3758db789417" />
<img width="1887" height="917" alt="image" src="https://github.com/user-attachments/assets/2ddcf22a-f58f-458a-a700-8f34f334ad2b" />
<img width="1910" height="920" alt="image" src="https://github.com/user-attachments/assets/06943af5-41de-48e4-a850-c1e33990cd94" />
<img width="1891" height="933" alt="image" src="https://github.com/user-attachments/assets/97c54078-1191-4255-99e2-574969383760" />
<img width="1908" height="924" alt="image" src="https://github.com/user-attachments/assets/d0b2a2e5-5750-41b9-a841-156c7c2de040" />
<img width="1904" height="918" alt="image" src="https://github.com/user-attachments/assets/35833c96-8707-40b2-acb5-132ba8350bfd" />
<img width="1919" height="924" alt="image" src="https://github.com/user-attachments/assets/d3ca91bc-6a61-48c3-903b-6ebc325d5f97" />
<img width="1907" height="921" alt="image" src="https://github.com/user-attachments/assets/6a11165d-2d91-48de-8cc5-d39b9732fe9c" />
<img width="1909" height="914" alt="image" src="https://github.com/user-attachments/assets/014b6e98-bc6a-4587-a50c-0b928fd5094f" />
<img width="1906" height="918" alt="image" src="https://github.com/user-attachments/assets/55cefbc6-a2c1-4c16-bdb8-d52eefeaa924" />
<img width="1903" height="918" alt="image" src="https://github.com/user-attachments/assets/00cdeee9-4477-4263-8e0d-81bff5754147" />







# Diseño de Pagina

El diseño se separa en 4 páginas principales, el Dashboard, con estadisticas generales y una página para los pacientes, doctores y las citas.

Los flujos de usuario son los siguientes:



<img width="3960" height="3900" alt="Diagrama " src="https://github.com/user-attachments/assets/b4f39b02-99c5-4151-a995-f5e13e9cdfc0" />





# ENDPOINTS  Implementados



## En Dashboard: 


GET http://localhost:3000/data/pacientes → Contar pacientes totales y mostrar nombres en las citas de hoy

GET http://localhost:3000/data/doctores → Filtrar doctores activos hoy y mostrar su información en la lista y en las citas

GET http://localhost:3000/data/citas → Contar citas totales y mostrar las citas programadas para hoy

GET http://localhost:3000/data/citas?fecha=YYYY-MM-DD → Mostrar las citas de la fecha hoy

GET http://localhost:3000/data/estadisticas/doctores → Mostrar el doctor con más citas en el dashboard
 

 

## En Pacientes :


GET http://localhost:3000/data/pacientes → Cargar y mostrar la lista de pacientes

POST http://localhost:3000/data/pacientes → Registrar un nuevo paciente

PUT http://localhost:3000/data/pacientes/{id} → Actualizar datos de un paciente existente

DELETE http://localhost:3000/data/pacientes/{id} → Eliminar un paciente específico




## En Historial:


GET http://localhost:3000/data/pacientes/{id} → Cargar y mostrar los datos del paciente

GET http://localhost:3000/data/pacientes/{id}/historial → Cargar todas las citas del paciente

GET http://localhost:3000/data/doctores → Obtener información de los doctores para mostrar nombre y especialidad en el historial



## En citas :


GET http://localhost:3000/data/pacientes → Obtener la lista de pacientes para el formulario y filtro.

GET http://localhost:3000/data/doctores → Obtener la lista de doctores para el formulario y filtro.

GET http://localhost:3000/data/citas?fecha={fecha}&estado={estado} → Obtener todas las citas, con filtros de fecha y estado .

POST http://localhost:3000/data/citas → Crear una nueva cita con los datos del formulario.

DELETE http://localhost:3000/data/citas/{id} → Eliminar una cita específica.

PUT http://localhost:3000/data/citas/{id}/cancelar → Cambiar el estado de una cita a “cancelada”.



## En doctores:


GET http://localhost:3000/data/doctores → Obtener la lista completa de doctores para mostrar en la lista y buscador.

GET http://localhost:3000/data/doctores/{id} → Obtener un doctor específico por ID para el buscador o para editarlo.

POST http://localhost:3000/data/doctores → Registrar un nuevo doctor con los datos del formulario.

PUT http://localhost:3000/data/doctores/{id} → Actualizar los datos de un doctor existente por ID.

DELETE http://localhost:3000/data/doctores/{id} → Eliminar un doctor específico por ID mediante el modal de confirmación.


## En agenda:


GET http://localhost:3000/data/doctores/{id} → Obtener la información de un doctor específico por su ID. Se usa para mostrar el header con nombre, especialidad, horario y días disponibles.

GET http://localhost:3000/data/citas/doctor/{id} → Obtener todas las citas de un doctor específico. Se usa para llenar la tabla de citas y el resumen de programadas/canceladas.


## los manda a pacientes.json , doctores.json y citas.json de esta forma:

nuevo doctor 

{
  "id": "D005",
  "nombre": "Dr. Pedro",
  "especialidad": "pediatra",
  "horarioInicio": "10:00",
  "horarioFin": "18:00",
  "diasDisponibles": ["Lunes", "Martes", "Miércoles"]
}



nueva cita  

 {
    "id": "C001",
    "pacienteId": "P001",
    "doctorId": "D001",
    "fecha": "2025-11-10",
    "hora": "10:00",
    "motivo": "Revisión general"
  }



nuevo paciente  

  {
    "id": "P003",
    "nombre": "julio ",
    "edad": 60,
    "telefono": "666-6666",
    "email": "wow@gmail.com",
    "fechaRegistro": "2025-03-7"
  }


--- 







# Problemas encontrados y soluciones implementadas


- debe de haber un periodo de tiempo de espera para agendar otra cita
   ejemplo: hay una cita 4:10 no deberia permitirme agendar otra cita  a las 4:11 con ese doctor , debe ver un tiempo
- mejorar el diseño de todas las ventanas: tener una mejor diseño y tener un ajuste de tamaño ,aun que ya sea responsiva la pagina.
- si se elimina un doctor oh paciente , es cita debe aunto cancelarse y eliminarse.

