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


# PRUEBAS  DE LOS ENDPOINTS EN POSTMAN:


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
    "motivo": "Revisión general",
    "estado": "programada"
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






