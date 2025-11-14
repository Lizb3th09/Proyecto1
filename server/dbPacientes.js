const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'pacientes.json');

const leerDB = () => {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { pacientes: [] };
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

// OBTENER
const obtenerPacientes = () => leerDB().pacientes;
const obtenerPacientePorId = (id) => leerDB().pacientes.find(p => p.id === id);

// CREAR
const crearPaciente = (id, nombre, email, telefono, edad) => {
  const db = leerDB();
  const nuevoPaciente = { id, nombre, email, telefono, edad };
  db.pacientes.push(nuevoPaciente);
  escribirDB(db);
  return nuevoPaciente;
};

// ACTUALIZAR
const actualizarPaciente = (id, datosActualizados) => {
  const db = leerDB();
  const index = db.pacientes.findIndex(p => p.id === id);
  if (index === -1) return null;

  if (datosActualizados.nombre) db.pacientes[index].nombre = datosActualizados.nombre;
  if (datosActualizados.email) db.pacientes[index].email = datosActualizados.email;
  if (datosActualizados.telefono) db.pacientes[index].telefono = datosActualizados.telefono;
  if (datosActualizados.edad != null) db.pacientes[index].edad = datosActualizados.edad;

  escribirDB(db);
  return db.pacientes[index];
};

// ELIMINAR
const eliminarPaciente = (id) => {
  const db = leerDB();
  const index = db.pacientes.findIndex(p => p.id === id);
  if (index === -1) return false;
  db.pacientes.splice(index, 1);
  escribirDB(db);
  return true;
};

module.exports = {
  obtenerPacientes,
  obtenerPacientePorId,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente
};
