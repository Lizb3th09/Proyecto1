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


<img width="1919" height="920" alt="image" src="https://github.com/user-attachments/assets/a863ff99-4fbe-4d72-86e3-4d054a436cc5" />
<img width="1910" height="917" alt="image" src="https://github.com/user-attachments/assets/9b46cd86-8a73-4f85-b2e2-e9448af3dca6" />
<img width="1907" height="905" alt="image" src="https://github.com/user-attachments/assets/00c319e4-6638-4d19-b604-a2b834c2a7d2" />
<img width="1913" height="920" alt="image" src="https://github.com/user-attachments/assets/9e4e5e6b-f82f-402c-8e0a-377f09621ef3" />
<img width="1907" height="927" alt="image" src="https://github.com/user-attachments/assets/56062305-a534-464d-a6c8-defcb40edf41" />
<img width="1906" height="917" alt="image" src="https://github.com/user-attachments/assets/bccee875-9524-44de-b9cb-97976cfd1e32" />




<img width="1907" height="926" alt="image" src="https://github.com/user-attachments/assets/5279ec1c-55d2-4560-891a-d485b73511c0" />
<img width="1913" height="930" alt="image" src="https://github.com/user-attachments/assets/df7e2237-f08e-4311-89a3-87d353e0bf7d" />
<img width="1907" height="917" alt="image" src="https://github.com/user-attachments/assets/25e81368-36d8-484b-b4d3-ed5831b83f4c" />

<img width="1917" height="922" alt="image" src="https://github.com/user-attachments/assets/ea1a6b05-61bf-4e20-bd43-8780aa136773" />
<img width="1908" height="919" alt="image" src="https://github.com/user-attachments/assets/7a68c0dd-0bcd-4de4-a228-3ebc5aff6bfe" />

<img width="1909" height="914" alt="image" src="https://github.com/user-attachments/assets/6beb2f14-f5df-4d75-98c2-c5e684fe5fe1" />
<img width="1914" height="923" alt="image" src="https://github.com/user-attachments/assets/658d9be9-3b2b-4a5a-baae-f254fa37eb2a" />



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












