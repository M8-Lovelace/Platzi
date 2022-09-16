// Funcion que recibe la opcion del usuario y envia la palabra correspondiente
const findOption = (option) => {
    const options = {
        1: "Piedra",
        2: "Papel",
        3: "Tijera",
    };
    return options[option] || "Opcion no encontrada";
};

// Funcion que genera un numero aleatorio
const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Se recibe la informacion del jugador y la computadora generada aleatoriamente
let jugador = prompt("¿1. Piedra, 2. Papel, 3. Tijera?");
let maquina = generateRandom(1, 3);
    alert(`Jugador elige ${ findOption(jugador) } \nMaquina elige ${ findOption(maquina) }`);

// Encontrar quien es el ganador dependiendo de las opciones
const findWinner = (jugador, maquina) => {
    const options = {
        1: { 1: "Empate", 2: "Gana maquina", 3: "Gana jugador" },
        2: { 1: "Gana jugador", 2: "Empate", 3: "Gana maquina" },
        3: { 1: "Gana maquina", 2: "Gana jugador", 3: "Empate" },
    };
    // Validar si gano maquina o jugador
    const winner = options[jugador][maquina].includes("jugador")
        ? jugador
        : maquina;
    alert(`${ options[jugador][maquina] } con ${ findOption(winner) }`);
};

findWinner(jugador, maquina);