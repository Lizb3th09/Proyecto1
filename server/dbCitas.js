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

// GET
const obtenerCitas = () => leerDB().citas;
const obtenerCitaPorId = (id) => leerDB().citas.find(c => c.id === id);

// POST - CORREGIDO
const crearCita = (pacienteId, doctorId, fecha, hora, motivo, estado) => {
  const db = leerDB();

  // Generar ID tipo C001
  const nuevoIdNumero = db.citas.length > 0
    ? Math.max(...db.citas.map(c => parseInt(c.id.slice(1)))) + 1 : 1;
  const nuevoId = "C" + String(nuevoIdNumero).padStart(3, "0");

  const nuevaCita = {id: nuevoId,pacienteId,doctorId,fecha,hora,motivo,estado };
  db.citas.push(nuevaCita);
  escribirDB(db);
  return nuevaCita; 
};

// DELETE
const eliminarCita = (id) => {
  const db = leerDB();
  const index = db.citas.findIndex(c => c.id === id);
  if (index === -1) return false;
  db.citas.splice(index, 1);
  escribirDB(db);
  return true;
};

//PUT - Cancelar
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
