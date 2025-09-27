function updateDropdowns(levelId, nextLevelId) {
    const level = document.getElementById(levelId).value;
    const nextLevel = document.getElementById(nextLevelId);
    
    // Limpiar el siguiente dropdown
    nextLevel.innerHTML = '<option value="">Selecciona</option>';

    if (levelId === 'level1') {
        if (level === "Opción A") {
            nextLevel.innerHTML += '<option value="Opción A1">Opción A1</option>';
            nextLevel.innerHTML += '<option value="Opción A2">Opción A2</option>';
        } else if (level === "Opción B") {
            nextLevel.innerHTML += '<option value="Opción B1">Opción B1</option>';
            nextLevel.innerHTML += '<option value="Opción B2">Opción B2</option>';
        } else if (level === "Opción C") {
            nextLevel.innerHTML += '<option value="Opción C1">Opción C1</option>';
            nextLevel.innerHTML += '<option value="Opción C2">Opción C2</option>';
        }
    } else if (levelId === 'level2') {
        if (level === "Opción A1") {
            nextLevel.innerHTML += '<option value="Opción A1.1">Opción A1.1</option>';
            nextLevel.innerHTML += '<option value="Opción A1.2">Opción A1.2</option>';
        } else if (level === "Opción A2") {
            nextLevel.innerHTML += '<option value="Opción A2.1">Opción A2.1</option>';
            nextLevel.innerHTML += '<option value="Opción A2.2">Opción A2.2</option>';
        } else if (level === "Opción B1") {
            nextLevel.innerHTML += '<option value="Opción B1.1">Opción B1.1</option>';
            nextLevel.innerHTML += '<option value="Opción B1.2">Opción B1.2</option>';
        } else if (level === "Opción B2") {
            nextLevel.innerHTML += '<option value="Opción B2.1">Opción B2.1</option>';
            nextLevel.innerHTML += '<option value="Opción B2.2">Opción B2.2</option>';
        } else if (level === "Opción C1") {
            nextLevel.innerHTML += '<option value="Opción C1.1">Opción C1.1</option>';
            nextLevel.innerHTML += '<option value="Opción C1.2">Opción C1.2</option>';
        } else if (level === "Opción C2") {
            nextLevel.innerHTML += '<option value="Opción C2.1">Opción C2.1</option>';
            nextLevel.innerHTML += '<option value="Opción C2.2">Opción C2.2</option>';
        }
    } else if (levelId === 'level3') {
        if (level === "Opción A1.1") {
            nextLevel.innerHTML += '<option value="Opción A1.1.1">Opción A1.1.1</option>';
            nextLevel.innerHTML += '<option value="Opción A1.1.2">Opción A1.1.2</option>';
        } else if (level === "Opción A1.2") {
            nextLevel.innerHTML += '<option value="Opción A1.2.1">Opción A1.2.1</option>';
            nextLevel.innerHTML += '<option value="Opción A1.2.2">Opción A1.2.2</option>';
        }
        // Agrega más opciones según sea necesario
    }
}



function generateSentence() {
    let sentence = '';
    const textInput1 = document.getElementById('textInput1').value;
    const textInput2 = document.getElementById('textInput2').value;
    const textInput3 = document.getElementById('textInput3').value;
    const textInput4 = document.getElementById('textInput4').value;
    const textInput5 = document.getElementById('textInput5').value;
    const textInput6 = document.getElementById('textInput6').value;
    const textInput7 = document.getElementById('textInput7').value;
    const textInput8 = document.getElementById('textInput8').value;

    // Verificar que todos los campos de texto están llenos
    if (!textInput1 || !textInput2 || !textInput3 || !textInput4 || !textInput5 || !textInput6 || !textInput7 || !textInput8) {
        alert("Por favor completa todos los campos de texto.");
        return;
    }
    
    const level1 = document.getElementById('level1').value;
    const level2 = document.getElementById('level2').value;
    const level3 = document.getElementById('level3').value;

    // Construir la oración
    sentence += `Nombre de cliente: ${textInput1}. `;
    sentence += `Quien toma el pedido: ${textInput2}. `;
    sentence += `Mail: ${textInput3}. `;
    sentence += `Teléfono: ${textInput4}. `;
    sentence += `CUIT: ${textInput5}. `;
    sentence += `Fecha de entrega: ${textInput6}. `;
    sentence += `Tipo de factura: ${textInput7}. `;

    if (level1) {
        sentence += `Has seleccionado vinilo: ${level1}. `;
    }
    if (level2) {
        sentence += `Lonas seleccionadas: ${level2}. `;
    }
    if (level3) {
        sentence += `Placas seleccionadas: ${level3}. `;
    }

    sentence += `Precio: ${textInput8}. `;

    // Mostrar la oración en el elemento con id 'sentence'
    document.getElementById('sentence').textContent = sentence;
}

function saveToDatabase() {
    // Funcionalidad para guardar en la base de datos (simulación)
    alert("Datos guardados en la base de datos (simulación).");
}

function logout() {
    // Cerrar sesión (simulación)
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html';
}



//CRONOGRAMA

const calendario = document.getElementById("calendario");
const selectorMes = document.getElementById("mes");
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrar-modal");
const tituloModal = document.getElementById("titulo-modal");
const listaActividades = document.getElementById("lista-actividades");
const formActividad = document.getElementById("form-actividad");
const inputHora = document.getElementById("hora");
const inputDescripcion = document.getElementById("descripcion");
const inputFecha = document.getElementById("fecha-hidden");

// LocalStorage
function cargarActividades() {
  return JSON.parse(localStorage.getItem("actividades")) || {};
}

function guardarActividades(data) {
  localStorage.setItem("actividades", JSON.stringify(data));
}

// Inicial: mostrar mes actual
window.addEventListener("DOMContentLoaded", () => {
  const hoy = new Date();
  const año = hoy.getFullYear();
  const mes = hoy.getMonth() + 1;

  selectorMes.value = `${año}-${String(mes).padStart(2, "0")}`;
  generarCalendario(año, mes);
});

selectorMes.addEventListener("change", () => {
  const [año, mes] = selectorMes.value.split("-").map(Number);
  generarCalendario(año, mes);
});

function generarCalendario(año, mes) {
  calendario.innerHTML = "";

  const actividades = cargarActividades();

  const primerDiaMes = new Date(año, mes - 1, 1);
  const ultimoDiaMes = new Date(año, mes, 0);
  const diasMes = ultimoDiaMes.getDate();

  let primerDiaSemana = primerDiaMes.getDay();
  primerDiaSemana = primerDiaSemana === 0 ? 6 : primerDiaSemana - 1;

  const nombresDias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  nombresDias.forEach(dia => {
    const encabezado = document.createElement("div");
    encabezado.classList.add("dia");
    encabezado.innerHTML = `<strong>${dia}</strong>`;
    calendario.appendChild(encabezado);
  });

  for (let i = 0; i < primerDiaSemana; i++) {
    const vacio = document.createElement("div");
    vacio.classList.add("dia", "vacio");
    calendario.appendChild(vacio);
  }

  const hoy = new Date();
  const hoyStr = `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;

  for (let dia = 1; dia <= diasMes; dia++) {
    const fechaStr = `${año}-${String(mes).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
    const divDia = document.createElement("div");
    divDia.classList.add("dia");

    if (fechaStr === hoyStr) {
      divDia.classList.add("hoy");
    }

    const titulo = document.createElement("h3");
    titulo.textContent = dia;
    divDia.appendChild(titulo);

    if (actividades[fechaStr]) {
      actividades[fechaStr].forEach(item => {
        const p = document.createElement("div");
        p.classList.add("actividad");
        p.textContent = `${item.hora} - ${item.descripcion}`;
        divDia.appendChild(p);
      });
    }

    divDia.addEventListener("click", () => abrirModal(fechaStr));
    calendario.appendChild(divDia);
  }
}

// Modal
cerrarModal.addEventListener("click", () => {
  modal.style.display = "none";
  formActividad.reset();
  listaActividades.innerHTML = "";
});

function abrirModal(fecha) {
  inputFecha.value = fecha;
  tituloModal.textContent = `Actividades para ${fecha}`;
  modal.style.display = "block";
  mostrarActividadesEnModal(fecha);
}

function mostrarActividadesEnModal(fecha) {
  const actividades = cargarActividades();
  listaActividades.innerHTML = "";

  if (actividades[fecha]) {
    actividades[fecha].forEach((act, index) => {
      const div = document.createElement("div");
      div.classList.add("actividad-item");

      const texto = document.createElement("span");
      texto.textContent = `${act.hora} - ${act.descripcion}`;

      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.classList.add("boton-eliminar");

      btnEliminar.onclick = () => {
        actividades[fecha].splice(index, 1);
        if (actividades[fecha].length === 0) {
          delete actividades[fecha];
        }
        guardarActividades(actividades);
        mostrarActividadesEnModal(fecha);

        // Actualiza el calendario correctamente según la fecha real
        const fechaObj = new Date(fecha);
        const año = fechaObj.getFullYear();
        const mes = fechaObj.getMonth() + 1;
        generarCalendario(año, mes);
      };

      div.appendChild(texto);
      div.appendChild(btnEliminar);
      listaActividades.appendChild(div);
    });
  }
}

// Guardar actividad
formActividad.addEventListener("submit", (e) => {
  e.preventDefault();
  const fecha = inputFecha.value;
  const hora = inputHora.value;
  const descripcion = inputDescripcion.value;

  if (!hora || !descripcion) return;

  const actividades = cargarActividades();

  if (!actividades[fecha]) {
    actividades[fecha] = [];
  }

  const idx = actividades[fecha].findIndex(act => act.hora === hora);
  if (idx !== -1) {
    actividades[fecha][idx].descripcion = descripcion;
  } else {
    actividades[fecha].push({ hora, descripcion });
    actividades[fecha].sort((a, b) => a.hora.localeCompare(b.hora));
  }

  guardarActividades(actividades);
  mostrarActividadesEnModal(fecha);

  // 🔄 Regenera el calendario basado en la fecha modificada, no solo el selector
  const fechaObj = new Date(fecha);
  const año = fechaObj.getFullYear();
  const mes = fechaObj.getMonth() + 1;
  generarCalendario(año, mes);

  formActividad.reset();
});
