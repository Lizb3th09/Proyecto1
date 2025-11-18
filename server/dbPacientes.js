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

// GET
const obtenerPacientes = () => leerDB().pacientes;
const obtenerPacientePorId = (id) => leerDB().pacientes.find(p => p.id === id);

// POST CORREGIDO
const crearPaciente = (nombre, email, telefono, fecha,edad) => {
  const db = leerDB();

  // IDs tipo P001
  const nuevoIdNumero = db.pacientes.length > 0
    ? Math.max(...db.pacientes.map(p => parseInt(p.id.slice(1)))) + 1: 1;
  const nuevoId = "P" + String(nuevoIdNumero).padStart(3, "0");

  const nuevoPaciente = { id: nuevoId, nombre, email, telefono,fecha, edad };
  db.pacientes.push(nuevoPaciente);
  escribirDB(db);
  return nuevoPaciente;
};



// PUT - CORREGIDO
const actualizarPaciente = (id, nombre,email,telefono,fecha,edad) => {
  const db = leerDB();
  const index = db.pacientes.findIndex(p => p.id === id);
  
  if (index === -1) return null;
  if (nombre) db.pacientes[index].nombre = nombre;
  if (email) db.pacientes[index].email = email;
  if (telefono) db.pacientes[index].telefono = telefono;
  if (fecha) db.pacientes[index].fecha = fecha;
  if (edad != null) db.pacientes[index].edad = edad;

  escribirDB(db);
  return db.pacientes[index];
};

// DELETE 
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
