const express = require('express');
const {
  obtenerPacientes,
  obtenerPacientePorId,
  crearPaciente,
  actualizarPaciente,
  eliminarPaciente
} = require('./dbPacientes');

const {
  obtenerDoctores,
  obtenerDoctorPorId,
  crearDoctor,
  actualizarDoctor,
  eliminarDoctor
} = require('./dbDoctores');

const {
  obtenerCitas,
  obtenerCitaPorId,
  crearCita,
  cancelarCita,
  eliminarCita
} = require('./dbCitas');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --------------------------------------------------


app.get('/', (req, res) => { 
  res.send('<h1>HOSPITAL uwu</h1>'); 
});







// CRUD PACIENTES

// GET - todos los pacientes
app.get('/data/pacientes', (req, res) => {
  res.json({ success: true, data: obtenerPacientes() });
});

// GET - paciente por ID
app.get('/data/pacientes/:id', (req, res) => {
  const paciente = obtenerPacientePorId(req.params.id);
  if (!paciente) return res.status(404).json({ success: false, message: 'Paciente no encontrado' });
  res.json({ success: true, data: paciente });
});

// POST - crear paciente
app.post('/data/pacientes', (req, res) => {
  const { id, nombre, email, telefono, edad } = req.body;

  // Validaciones básicas
  if (!nombre || !email || !telefono || edad == null || edad <= 0) {
    return res.status(400).json({ success: false, message: 'Datos incompletos o inválidos' });
  }

  // Email único
  const existe = obtenerPacientes().find(p => p.email.toLowerCase() === email.toLowerCase());
  if (existe) return res.status(400).json({ success: false, message: 'Email ya registrado' });

  const paciente = crearPaciente(id, nombre, email, telefono, edad);
  res.status(201).json({ success: true, message: 'Paciente agregado correctamente'});
});

// PUT - actualizar paciente
app.put('/data/pacientes/:id', (req, res) => {
  const paciente = actualizarPaciente(req.params.id, req.body);
  if (!paciente) return res.status(404).json({ success: false, message: 'Paciente no encontrado' });
  res.json({ success: true, message: ' Se ha actualizado correctamente'});
});

// DELETE - eliminar paciente
app.delete('/data/pacientes/:id', (req, res) => {
  const eliminado = eliminarPaciente(req.params.id);
  if (!eliminado) return res.status(404).json({ success: false, message: 'Paciente no encontrado' });
  res.json({ success: true, message: 'Paciente eliminado' });
});

// GET - historial de citas de paciente
app.get('/data/pacientes/:id/historial', (req, res) => {
  const citas = obtenerCitas().filter(c => c.pacienteId === req.params.id);
  if (citas.length === 0) return res.status(404).json({ success: false, message: 'El paciente no tiene citas registradas' });
  res.json({ success: true, data: citas });
});

// --------------------------------------------------
// CRUD DOCTORES

// GET - todos los doctores
app.get('/data/doctores', (req, res) => {
  res.json({ success: true, data: obtenerDoctores() });
});


// GET - doctores disponibles por fecha y hora
app.get('/data/doctores/disponibles', (req, res) => {
  const { fecha, hora } = req.query;

  if (!fecha || !hora) {
    return res.status(400).json({ success: false, message: 'Faltan parámetros: fecha y hora' });
  }

  const fechaObj = new Date(fecha);
  const diasSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const diaTexto = diasSemana[fechaObj.getDay()];

  const doctores = obtenerDoctores();
  const citas = obtenerCitas();

  const disponibles = doctores.filter(d => {
    if (!d.diasDisponibles.includes(diaTexto)) return false;
    if (hora < d.horarioInicio || hora >= d.horarioFin) return false;

    const ocupado = citas.some(c =>
      c.doctorId === d.id &&
      c.fecha === fecha &&
      c.hora === hora &&
      c.estado !== 'cancelada'
    );

    return !ocupado;
  });

  res.json({ success: true, data: disponibles });
});


// GET - doctor por ID
app.get('/data/doctores/:id', (req, res) => {
  const doctor = obtenerDoctorPorId(req.params.id);
  if (!doctor) return res.status(404).json({ success: false, message: 'Doctor no encontrado' });
  res.json({ success: true, data: doctor });
});

// POST - crear doctor
app.post('/data/doctores', (req, res) => {
  const { id, nombre, especialidad, horarioInicio, horarioFin, diasDisponibles } = req.body;

  if (!nombre || !especialidad || horarioInicio == null || horarioFin == null || !Array.isArray(diasDisponibles) || diasDisponibles.length === 0) {
    return res.status(400).json({ success: false, message: 'Datos incompletos o inválidos' });
  }

  if (horarioInicio >= horarioFin) return res.status(400).json({ success: false, message: 'Horario de inicio debe ser menor que fin' });

  const existe = obtenerDoctores().find(d => d.nombre.toLowerCase() === nombre.toLowerCase() && d.especialidad.toLowerCase() === especialidad.toLowerCase());
  if (existe) return res.status(400).json({ success: false, message: 'Ya existe un doctor con el mismo nombre y especialidad' });

  const doctor = crearDoctor(id, nombre, especialidad, horarioInicio, horarioFin, diasDisponibles);
  res.status(201).json({ success: true, message: 'Doctor agregado correctamente' });
});

// PUT - actualizar doctor
app.put('/data/doctores/:id', (req, res) => {
  const doctor = actualizarDoctor(req.params.id, req.body);
  if (!doctor) return res.status(404).json({ success: false, message: 'Doctor no encontrado' });
  res.json({ success: true, message: 'Se ha actualizado correctamente' });
});

// DELETE - eliminar doctor
app.delete('/data/doctores/:id', (req, res) => {
  const eliminado = eliminarDoctor(req.params.id);
  if (!eliminado) return res.status(404).json({ success: false, message: 'Doctor no encontrado' });
  res.json({ success: true, message: 'Doctor eliminado ' });
});

// GET - buscar doctores por especialidad
app.get('/data/doctores/especialidad/:especialidad', (req, res) => {
  const especialidad = req.params.especialidad.toLowerCase();
  const resultado = obtenerDoctores().filter(d => d.especialidad.toLowerCase() === especialidad);
  if (resultado.length === 0) return res.status(404).json({ success: false, message: 'No se encontraron doctores con esa especialidad' });
  res.json({ success: true, data: resultado });
});

// --------------------------------------------------

// CRUD CITAS

// GET - todas las citas y por fecha
app.get('/data/citas', (req, res) => {
  const { fecha, estado } = req.query;
  let citas = obtenerCitas();

  if (fecha) {
    citas = citas.filter(c => c.fecha === fecha);
  }

  if (estado) {
    citas = citas.filter(c => c.estado.toLowerCase() === estado.toLowerCase());
  }

  res.json({ success: true, data: citas });
});


// GET - cita por ID
app.get('/data/citas/:id', (req, res) => {
  const cita = obtenerCitaPorId(req.params.id);
  if (!cita) return res.status(404).json({ success: false, message: 'Cita no encontrada' });
  res.json({ success: true, data: cita });
});

// POST - crear cita
app.post('/data/citas', (req, res) => {
  const { id, pacienteId, doctorId, fecha, hora, motivo, estado } = req.body;

  const paciente = obtenerPacientePorId(pacienteId);
  const doctor = obtenerDoctorPorId(doctorId);
  if (!paciente) return res.status(400).json({ success: false, message: 'Paciente no existe' });
  if (!doctor) return res.status(400).json({ success: false, message: 'Doctor no existe' });

  const fechaCita = new Date(fecha);
  if (fechaCita <= new Date()) return res.status(400).json({ success: false, message: 'La fecha debe ser futura' });

  // Revisar disponibilidad del doctor
  const diasSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const diaTexto = diasSemana[fechaCita.getDay()];
  if (!doctor.diasDisponibles.includes(diaTexto)) return res.status(400).json({ success: false, message: `El doctor no atiende los ${diaTexto}` });

 // Validar horario disponible del doctor 
  if (hora < doctor.horarioInicio || hora >= doctor.horarioFin) {
    return res.status(400).json({
      success: false,
      message: `Hora no disponible. El doctor solo atiende de: ${doctor.horarioInicio} - ${doctor.horarioFin}`
    });
  }


  // Revisar si ya hay cita a la misma hora
  const conflicto = obtenerCitas().find(c => c.doctorId === doctorId && c.fecha === fecha && c.hora === hora);
  if (conflicto) return res.status(400).json({ success: false, message: 'Ya existe otra cita para el doctor a esa hora y fecha' });

  const cita = crearCita(id, pacienteId, doctorId, fecha, hora, motivo, estado);
  res.status(201).json({ success: true,  message: 'cita agregada'  });
});

// PUT - cancelar cita
app.put('/data/citas/:id/cancelar', (req, res) => {
  const cita = cancelarCita(req.params.id);

  if (cita === null) {
    return res.status(404).json({ success: false, message: 'Cita no encontrada' });
  }

  if (cita === false) {
    return res.status(400).json({ success: false, message: 'No se puede cancelar una cita que ya está cancelada' });
  }

  res.json({ success: true, message: 'Cita cancelada correctamente'});
});

// GET - agenda de un doctor
app.get('/data/citas/doctor/:doctorId', (req, res) => {
  const agenda = obtenerCitas().filter(c => c.doctorId === req.params.doctorId);
  if (agenda.length === 0) return res.status(404).json({ success: false, message: 'El doctor no tiene citas registradas' });
  res.json({ success: true, data: agenda ,});
});

// DELETE - eliminar cita
app.delete('/data/citas/:id', (req, res) => {
  const eliminado = eliminarCita(req.params.id);
  if (!eliminado) return res.status(404).json({ success: false, message: 'Cita no encontrada' });
  res.json({ success: true, message: 'Cita eliminada correctamente' });
});

//----------------------------------------------------------------------------------------------------------


// Extras estadisticas

// ENDPOINTS EXTRA

// Doctor con más citas
app.get('/data/estadisticas/doctores', (req, res) => {
  const citas = obtenerCitas();

  if (citas.length === 0) {
    return res.json({ message: 'No hay citas registradas' });
  }

  // Contar citas por doctor
  const contador = {};
  citas.forEach(c => {
    contador[c.doctorId] = (contador[c.doctorId] || 0) + 1;
  });

  // Doctor con más citas
  const topDoctorId = Object.keys(contador).reduce((a, b) =>
    contador[a] > contador[b] ? a : b
  );

  const d = obtenerDoctorPorId(topDoctorId);

  res.json({
    nombre: d.nombre,
    especialidad: d.especialidad,
    totalCitas: contador[topDoctorId]
  });
});

// Especialidad más solicitada
app.get('/data/estadisticas/especialidades', (req, res) => {
  const citas = obtenerCitas();
  const doctores = obtenerDoctores();

  if (citas.length === 0) {
    return res.json({ message: "No hay citas registradas" });
  }

  // Contar citas por especialidad
  const contador = {};
  citas.forEach(c => {
    const d = obtenerDoctorPorId(c.doctorId);
    if (!d) return;
    contador[d.especialidad] = (contador[d.especialidad] || 0) + 1;
  });

  // Especialidad más solicitada
  const especialidad = Object.keys(contador).reduce((a, b) =>
    contador[a] > contador[b] ? a : b
  );

  // Citas por doctor SOLO de esa especialidad
  const citasPorDoctor = {};
  citas.forEach(c => {
    const d = obtenerDoctorPorId(c.doctorId);
    if (d && d.especialidad === especialidad) {
      citasPorDoctor[d.nombre] = (citasPorDoctor[d.nombre] || 0) + 1;
    }
  });

  res.json({
    especialidad,
    totalCitas: contador[especialidad],
    doctores: citasPorDoctor
  });
});

// 



// --------------------------------------------------

// Ruta 404
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Ruta no encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
