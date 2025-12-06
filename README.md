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

<img width="1912" height="917" alt="image" src="https://github.com/user-attachments/assets/f431ea67-766d-4042-8bdc-9b7bf8fb0122" />
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

<img width="1911" height="918" alt="image" src="https://github.com/user-attachments/assets/b2db3c57-6acb-4ea9-9458-7c389592e3c9" />
<img width="1915" height="925" alt="image" src="https://github.com/user-attachments/assets/18912a37-cc93-43ee-b7f1-6193fa624db2" />

<img width="1911" height="921" alt="image" src="https://github.com/user-attachments/assets/38f05877-4f70-433a-bacc-ed7979d3b8f0" />
<img width="1907" height="913" alt="image" src="https://github.com/user-attachments/assets/6f93d72d-b098-4550-a066-d7357e0ea9bf" />

<img width="1910" height="922" alt="image" src="https://github.com/user-attachments/assets/18ac5dda-a167-4d8b-a4bd-0a38076adfb9" />
<img width="1911" height="912" alt="image" src="https://github.com/user-attachments/assets/88851ac3-ceb3-4693-913d-9219a915fabc" />


<img width="1916" height="923" alt="image" src="https://github.com/user-attachments/assets/e9a7d079-8f12-41d9-b705-e27805e1c15b" />

<img width="1904" height="919" alt="image" src="https://github.com/user-attachments/assets/55918ea2-d001-420a-aef9-90c35f8ecca1" />
<img width="1907" height="913" alt="image" src="https://github.com/user-attachments/assets/8c77eb17-029f-44ea-8b14-2e6c117c6ae9" />
<img width="1910" height="917" alt="image" src="https://github.com/user-attachments/assets/a704bc85-195b-4cf9-8274-108726454ac0" />
<img width="1915" height="920" alt="image" src="https://github.com/user-attachments/assets/9e4637eb-b701-4fa9-a7fa-4444a8b306da" />
<img width="1909" height="916" alt="image" src="https://github.com/user-attachments/assets/d3770dd8-4296-4548-9a43-1d697b09785d" />
<img width="1912" height="924" alt="image" src="https://github.com/user-attachments/assets/dc7c722b-1722-432f-a6f0-93febb7d96e9" />
<img width="1917" height="927" alt="image" src="https://github.com/user-attachments/assets/824bcb77-4c4f-45f2-9aa9-8eef6f0b4948" />



# PAGINA CITAS


<img width="1900" height="923" alt="image" src="https://github.com/user-attachments/assets/659af6c0-1348-449e-aa99-3660e684b5a3" />
<img width="1895" height="920" alt="image" src="https://github.com/user-attachments/assets/bec781de-9d0d-4bc8-a9bf-93678298503c" />
<img width="1910" height="913" alt="image" src="https://github.com/user-attachments/assets/465bf2ac-f2bd-4b7e-b0a9-3f5da4264cd3" />
<img width="1883" height="927" alt="image" src="https://github.com/user-attachments/assets/7a22dc5c-2ef6-48b2-9993-6e8c1c1aab95" />
<img width="1906" height="917" alt="image" src="https://github.com/user-attachments/assets/48d54609-768f-483c-8ee8-c1f1d81a8986" />
<img width="1910" height="921" alt="image" src="https://github.com/user-attachments/assets/a274f99e-3bd9-42d0-9565-a27e2bc2ed3c" />
<img width="1893" height="922" alt="image" src="https://github.com/user-attachments/assets/99345b59-08e0-4335-8ee3-0aec3187af7f" />
<img width="1899" height="912" alt="image" src="https://github.com/user-attachments/assets/0337cdf0-d93e-4ec4-aabb-4f4a8ef377da" />
<img width="1888" height="925" alt="image" src="https://github.com/user-attachments/assets/d55e5bb1-01ea-40cf-b425-a5a7b9febf01" />



# Diseño de Pagina

El diseño se separa en 4 páginas principales, el Dashboard, con estadisticas generales y una página para los pacientes, doctores y las citas.

Los flujos de usuario son los siguientes:















# ENDPOINTS  Implementados


## GET - consultar

ver citas - http://localhost:3000/data/citas

ver doctores - http://localhost:3000/data/doctores

Ver pacientes - http://localhost:3000/data/pacientes

--- 

## GET - consultar por id

ver citas por id - http://localhost:3000/data/citas/C002

ver doctores por id - http://localhost:3000/data/doctores/D001

Ver pacientes por id - http://localhost:3000/data/pacientes/P003

--- 

VER historial paciente - http://localhost:3000/data/pacientes/P001/historial

ver agenda de un doctor - http://localhost:3000/data/citas/doctor/D001

ver por especialidad - http://localhost:3000/data/doctores/especialidad/ginecologo

--- 

## GET - ESTADISTICAS

ver doctor con mas citas  - http://localhost:3000/data/estadisticas/doctores

ver especialidad mas solicitada - http://localhost:3000/data/estadisticas/especialidades

--- 

## GET- BUSQUEDAS AVANZADAS

ver por citas por fecha - http://localhost:3000/data/citas?fecha=2025-11-19

ver cita por fecha y estado - http://localhost:3000/data/citas?fecha=2025-11-19&estado=programada

ver citas programadas - http://localhost:3000/data/citas?estado=programada

ver doctores disponibles a una fecha y hora - http://localhost:3000/data/doctores/disponibles?fecha=2025-11-21&hora=12:00


--- 




## POST - crear



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


## PUT - Modificar


cancelar cita - http://localhost:3000/data/citas/C001/cancelar

modificar doctores - http://localhost:3000/data/doctores/D004  

modificar pacientes - http://localhost:3000/data/pacientes/P003


--- 


## DELETE - Eliminar


Eliminar citas - http://localhost:3000/data/citas/C005

Eliminar doctores - http://localhost:3000/data/doctores/D001

Eliminar pacientes - http://localhost:3000/data/pacientes/P003












