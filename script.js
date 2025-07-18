const ramos = [
  {
    codigo: "QQUI101",
    nombre: "Química General I",
    prerrequisitos: [],
    abre: ["QQUI202"]
  },
  {
    codigo: "QQUI202", 
    nombre: "Química General II",
    prerrequisitos: ["QQUI101"],
    abre: ["QQUI303"]
  },
  {
    codigo: "FPED126",
    nombre: "Pedagogía e Identidad Profesional Docente", 
    prerrequisitos: [],
    abre: ["QQUI204"]
  },
  {
    codigo: "QQUI204",
    nombre: "Práctica I",
    prerrequisitos: ["FPED126"],
    abre: ["QQUI305"]
  },
  {
    codigo: "QQUI303",
    nombre: "Química Orgánica I",
    prerrequisitos: ["QQUI202"],
    abre: []
  },
  {
    codigo: "QQUI305", 
    nombre: "Práctica II",
    prerrequisitos: ["QQUI204"],
    abre: []
  }
];

const estadoRamos = {};

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  ramos.forEach(ramo => {
    const aprobado = estadoRamos[ramo.codigo] || false;
    const requisitosCumplidos = ramo.prerrequisitos.every(pr => estadoRamos[pr]);

    const card = document.createElement("div");
    card.className = "card";

    if (aprobado) {
      card.classList.add("aprobado");
    } else if (requisitosCumplidos) {
      card.classList.add("habilitado");
    } else {
      card.classList.add("bloqueado");
    }

    card.innerHTML = `
      <h3>${ramo.nombre}</h3>
      <p><strong>${ramo.codigo}</strong></p>
      <div class="botones">
        <button onclick="aprobarRamo('${ramo.codigo}')" ${aprobado || !requisitosCumplidos ? "disabled" : ""}>
          ${aprobado ? "Aprobado" : "Aprobar"}
        </button>
        
