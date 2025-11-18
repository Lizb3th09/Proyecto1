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

// GET
const obtenerDoctores = () => leerDB().doctores;
const obtenerDoctorPorId = (id) => leerDB().doctores.find(d => d.id === id);

// POST - CORREGIDO
const crearDoctor = (nombre, especialidad, horarioInicio, horarioFin, diasDisponibles) => {
  const db = leerDB();

  // Generar ID tipo D001
  const nuevoIdNumero = db.doctores.length > 0
    ? Math.max(...db.doctores.map(d => parseInt(d.id.slice(1)))) + 1: 1;
  const nuevoId = "D" + String(nuevoIdNumero).padStart(3, "0");

  const nuevoDoctor = {id: nuevoId,nombre,especialidad,horarioInicio,horarioFin,diasDisponibles};
  db.doctores.push(nuevoDoctor);
  escribirDB(db);
  return nuevoDoctor;
};


// PUT - corregido
const actualizarDoctor = ( id,nombre, especialidad, horarioInicio, horarioFin, diasDisponibles) => {
  const db = leerDB();
  const index = db.doctores.findIndex(d => d.id === id);

  if (index === -1) return null;
  if (nombre) db.doctores[index].nombre = nombre;
  if (especialidad) db.doctores[index].especialidad = especialidad;
  if (horarioInicio) db.doctores[index].horarioInicio = horarioInicio;
  if (horarioFin) db.doctores[index].horarioFin = horarioFin;
  if (diasDisponibles) db.doctores[index].diasDisponibles = diasDisponibles;

  escribirDB(db);
  return db.doctores[index];
};



// DELETE
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
