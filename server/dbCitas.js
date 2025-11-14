const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'citas.json');

const leerDB = () => {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { citas: [] };
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
const obtenerCitas = () => leerDB().citas;
// Obtener por ID
const obtenerCitaPorId = (id) => leerDB().citas.find(c => c.id === id);

// CREAR
const crearCita = (id, pacienteId, doctorId, fecha, hora, motivo, estado) => {
  const db = leerDB();
  const nuevaCita = { id, pacienteId, doctorId, fecha, hora, motivo, estado };
  db.citas.push(nuevaCita);
  escribirDB(db);
  return nuevaCita;
};


// ELIMINAR
const eliminarCita = (id) => {
  const db = leerDB();
  const index = db.citas.findIndex(c => c.id === id);
  if (index === -1) return false;
  db.citas.splice(index, 1);
  escribirDB(db);
  return true;
};

// CANCELAR 
const cancelarCita = (id) => {
  const db = leerDB();
  const index = db.citas.findIndex(c => c.id === id);
  if (index === -1) return null;

  if (db.citas[index].estado !== 'programada') return false;

  db.citas[index].estado = 'cancelada';
  escribirDB(db);
  return db.citas[index];
};

module.exports = {
  obtenerCitas,
  obtenerCitaPorId,
  crearCita,
  cancelarCita,
  eliminarCita
};
