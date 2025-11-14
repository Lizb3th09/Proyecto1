const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'doctores.json');

const leerDB = () => {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { doctores: [] };
  }
};

const escribirDB = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch {
    return false;
  }
};

// OBTENER Todos
const obtenerDoctores = () => leerDB().doctores;


// Obtener por ID
const obtenerDoctorPorId = (id) => leerDB().doctores.find(d => d.id === id);

// CREAR
const crearDoctor = (id, nombre, especialidad, horarioInicio, horarioFin, diasDisponibles) => {
  const db = leerDB();
  const nuevoDoctor = { id, nombre, especialidad, horarioInicio, horarioFin, diasDisponibles };
  db.doctores.push(nuevoDoctor);
  escribirDB(db);
  return nuevoDoctor;
};

const actualizarDoctor = (id, cambios) => {
  const db = leerDB();
  const index = db.doctores.findIndex(d => d.id === id);
  if (index === -1) return null;

  const doctor = db.doctores[index];

  if (cambios.nombre !== undefined) doctor.nombre = cambios.nombre;
  if (cambios.especialidad !== undefined) doctor.especialidad = cambios.especialidad;
  if (cambios.horarioInicio !== undefined) doctor.horarioInicio = cambios.horarioInicio;
  if (cambios.horarioFin !== undefined) doctor.horarioFin = cambios.horarioFin;
  if (cambios.diasDisponibles !== undefined) doctor.diasDisponibles = cambios.diasDisponibles;

  escribirDB(db);
  return doctor;
};


// ELIMINAR
const eliminarDoctor = (id) => {
  const db = leerDB();
  const index = db.doctores.findIndex(d => d.id === id);
  if (index === -1) return false;
  db.doctores.splice(index, 1);
  escribirDB(db);
  return true;
};

module.exports = {
  obtenerDoctores,
  obtenerDoctorPorId,
  crearDoctor,
  actualizarDoctor,
  eliminarDoctor
};
