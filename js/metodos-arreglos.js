const tareas = [
  {
    id: 1,
    titulo: "Análisis de requisitos",
    materia: "Ingeniería de Software",
    fechaEntrega: "2026-10-01",
    estado: "PENDIENTE"
  },
  {
    id: 2,
    titulo: "Programa RegEx",
    materia: "Teoría de la Computación",
    fechaEntrega: "2026-10-03",
    estado: "COMPLETADA"
  },
  {
    id: 3,
    titulo: "Examen U3",
    materia: "Base de Datos II",
    fechaEntrega: "2026-11-03",
    estado: "PENDIENTE"
  },
  {
    id: 4,
    titulo: "Ejercicio de práctica #2",
    materia: "Programación III",
    fechaEntrega: "2026-11-12",
    estado: "PENDIENTE"
  },
  {
    id: 5,
    titulo: "Bubble sort",
    materia: "Estructura de Datos II",
    fechaEntrega: "2026-10-28",
    estado: "COMPLETADA"
  },
  {
    id: 6,
    titulo: "Actividad 5",
    materia: "Diseño de Interfaces de Usuario",
    fechaEntrega: "2026-10-08",
    estado: "PENDIENTE"
  }
];

const pendientes = tareas.filter(t => t.estado === "PENDIENTE");

const nuevaTarea = {
  id: 7,
  titulo: "Nueva tarea pendiente",
  materia: "Programación Web",
  fechaEntrega: "2026-10-23",
  estado: "PENDIENTE"
};

const { titulo: tituloNuevaTarea, materia: materiaNuevaTarea } = nuevaTarea;

const pendienteExtra = [...pendientes, nuevaTarea]

const sumaIds = tareas.reduce((acc, { id }) => acc + id, 0);

const promedioIds = sumaIds / tareas.length;

const porFecha = [...tareas].sort((a, b) => new Date(a.fechaEntrega) - new Date(b.fechaEntrega));

console.log("---------ARREGLO ORIGINAL-----------")
console.table(tareas);
console.log("-------------PENDIENTES-------------")
console.table(pendientes)
console.log(`SUMA DE LOS IDS = ${sumaIds}`)
console.log(`PROMEDIO DE LOS IDS = ${promedioIds}`)
console.log("-----TAREAS ORDENADAS POR FECHA-----")
console.table(porFecha);
console.log("----COPIA DE PENDIENTES CON UNA TAREA NUEVA----")
console.table(pendienteExtra);
console.log(`Se agregó una nueva tarea\n Nombre: ${tituloNuevaTarea}\n Materia: ${materiaNuevaTarea}`)
console.log("---------ARREGLO ORIGINAL-----------")
console.table(tareas);


