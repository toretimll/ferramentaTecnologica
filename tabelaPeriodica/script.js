const elements = [
    { name: "Carbono",      symbol: "C",    gif: "gifs/Carbono.gif",    column: 14, row: 2, comGif: true },
    { name: "Hidrogênio",   symbol: "H",    gif: "gifs/Hidrogenio.gif", column: 1,  row: 1, comGif: true },
    { name: "Hélio",        symbol: "He",   gif: "helium.gif",          column: 18, row: 1 },
    { name: "Lítio",        symbol: "Li",   gif: "gifs/Litio.gif",      column: 1,  row: 2, comGif: true },
    { name: "Berílio",      symbol: "Be",   gif: "beryllium.gif",       column: 2,  row: 2 },
    { name: "Boro",         symbol: "B",    gif: "boron.gif",           column: 13, row: 2 },
    { name: "Nitrogênio",   symbol: "N",    gif: "nitrogen.gif",        column: 15, row: 2 },
    { name: "Oxigênio",     symbol: "O",    gif: "oxygen.gif",          column: 16, row: 2 },
    { name: "Flúor",        symbol: "F",    gif: "fluorine.gif",        column: 17, row: 2 },
    { name: "Neônio",       symbol: "Ne",   gif: "neon.gif",            column: 18, row: 2 },
    { name: "Sódio",        symbol: "Na",   gif: "gifs/Sodio.gif",      column: 1,  row: 3, comGif: true },
    { name: "Magnésio",     symbol: "Mg",   gif: "gifs/Magnesio.gif",   column: 2,  row: 3, comGif: true },
    { name: "Alumínio",     symbol: "Al",   gif: "gifs/Aluminio.gif",   column: 13, row: 3, comGif: true },
    { name: "Silício",      symbol: "Si",   gif: "silicon.gif",         column: 14, row: 3 },
    { name: "Fósforo",      symbol: "P",    gif: "phosphorus.gif",      column: 15, row: 3 },
    { name: "Enxofre",      symbol: "S",    gif: "sulfur.gif",          column: 16, row: 3 },
    { name: "Cloro",        symbol: "Cl",   gif: "chlorine.gif",        column: 17, row: 3 },
    { name: "Argônio",      symbol: "Ar",   gif: "argon.gif",           column: 18, row: 3 },
    { name: "Potássio",     symbol: "K",    gif: "gifs/Potassio.gif",   column: 1,  row: 4, comGif: true },
    { name: "Cálcio",       symbol: "Ca",   gif: "gifs/Calcio.gif",     column: 2,  row: 4, comGif: true },
    { name: "Escândio",     symbol: "Sc",   gif: "scandium.gif",        column: 3,  row: 4 },
    { name: "Titânio",      symbol: "Ti",   gif: "titanium.gif",        column: 4,  row: 4 },
    { name: "Vanádio",      symbol: "V",    gif: "vanadium.gif",        column: 5,  row: 4 },
    { name: "Cromo",        symbol: "Cr",   gif: "gifs/Cromo.gif",      column: 6,  row: 4, comGif: true },
    { name: "Manganês",     symbol: "Mn",   gif: "manganese.gif",       column: 7,  row: 4 },
    { name: "Ferro",        symbol: "Fe",   gif: "gifs/Ferro.gif",      column: 8,  row: 4, comGif: true},
    { name: "Cobalto",      symbol: "Co",   gif: "cobalt.gif",          column: 9,  row: 4 },
    { name: "Níquel",       symbol: "Ni",   gif: "nickel.gif",          column: 10, row: 4 },
    { name: "Cobre",        symbol: "Cu",   gif: "gifs/Cobre.gif",      column: 11, row: 4, comGif: true },
    { name: "Zinco",        symbol: "Zn",   gif: "gifs/Zinco.gif",      column: 12, row: 4, comGif: true },
    { name: "Gálio",        symbol: "Ga",   gif: "gallium.gif",       column: 13, row: 4 },
    { name: "Germânio",     symbol: "Ge",   gif: "germanium.gif",     column: 14, row: 4 },
    { name: "Arsênio",      symbol: "As",   gif: "arsenic.gif",       column: 15, row: 4 },
    { name: "Selênio",      symbol: "Se",   gif: "selenium.gif",      column: 16, row: 4 },
    { name: "Bromo",        symbol: "Br",   gif: "bromine.gif",       column: 17, row: 4 },
    { name: "Criptônio",    symbol: "Kr",   gif: "krypton.gif",       column: 18, row: 4 },
    { name: "Rubídio",      symbol: "Rb",   gif: "rubidium.gif",      column: 1,  row: 5 },
    { name: "Estrôncio",    symbol: "Sr",   gif: "strontium.gif",     column: 2,  row: 5 },
    { name: "Ítrio",        symbol: "Y",    gif: "yttrium.gif",       column: 3,  row: 5 },
    { name: "Zircônio",     symbol: "Zr",   gif: "zirconium.gif",     column: 4,  row: 5 },
    { name: "Nióbio",       symbol: "Nb",   gif: "niobium.gif",       column: 5,  row: 5 },
    { name: "Molibdênio",   symbol: "Mo",   gif: "molybdenum.gif",    column: 6,  row: 5 },
    { name: "Tecnécio",     symbol: "Tc",   gif: "technetium.gif",    column: 7,  row: 5 },
    { name: "Rutênio",      symbol: "Ru",   gif: "ruthenium.gif",     column: 8,  row: 5 },
    { name: "Ródio",        symbol: "Rh",   gif: "rhodium.gif",       column: 9,  row: 5 },
    { name: "Paládio",      symbol: "Pd",   gif: "palladium.gif",     column: 10, row: 5 },
    { name: "Prata",        symbol: "Ag",   gif: "silver.gif",        column: 11, row: 5 },
    { name: "Cádmio",       symbol: "Cd",   gif: "cadmium.gif",       column: 12, row: 5 },
    { name: "Índio",        symbol: "In",   gif: "indium.gif",        column: 13, row: 5 },
    { name: "Estanho",      symbol: "Sn",   gif: "tin.gif",           column: 14, row: 5 },
    { name: "Antimônio",    symbol: "Sb",   gif: "antimony.gif",      column: 15, row: 5 },
    { name: "Telúrio",      symbol: "Te",   gif: "tellurium.gif",     column: 16, row: 5 },
    { name: "Iodo",         symbol: "I",    gif: "iodine.gif",        column: 17, row: 5 },
    { name: "Xenônio",      symbol: "Xe",   gif: "xenon.gif",         column: 18, row: 5 },
    { name: "Césio",        symbol: "Cs",   gif: "cesium.gif",        column: 1,  row: 6 },
    { name: "Bário",        symbol: "Ba",   gif: "barium.gif",        column: 2,  row: 6 },
    { name: "Lantânio",     symbol: "La",   gif: ".gif",              column: 3,  row: 9 },
    { name: "Cério",        symbol: "Ce",   gif: ".gif",              column: 4,  row: 9 },
    { name: "Praseodímio",  symbol: "Pr",   gif: ".gif",              column: 5,  row: 9 },
    { name: "Neodímio",     symbol: "Nd",   gif: ".gif",              column: 6,  row: 9 },
    { name: "Promécio",     symbol: "Pm",   gif: ".gif",              column: 7,  row: 9 },
    { name: "Samário",      symbol: "Sm",   gif: ".gif",              column: 8,  row: 9 },
    { name: "Európio",      symbol: "Eu",   gif: ".gif",              column: 9,  row: 9 },
    { name: "Gadolínio",    symbol: "Gd",   gif: ".gif",              column: 10, row: 9 },
    { name: "Térbio",       symbol: "Tb",   gif: ".gif",              column: 11, row: 9 },
    { name: "Disprósio",    symbol: "Dy",   gif: ".gif",              column: 12, row: 9 },
    { name: "Hólmio",       symbol: "Ho",   gif: ".gif",              column: 13, row: 9 },
    { name: "Érbio",        symbol: "Er",   gif: ".gif",              column: 14, row: 9 },
    { name: "Térbio",       symbol: "Tm",   gif: ".gif",              column: 15, row: 9 },
    { name: "Lutécio",      symbol: "Lu",   gif: ".gif",              column: 16, row: 9 },
    { name: "Háfnio",       symbol: "Hf",   gif: "hafnium.gif",       column: 4,  row: 6 },
    { name: "Tântalo",      symbol: "Ta",   gif: "tantalum.gif",      column: 5,  row: 6 },
    { name: "Tungstênio",   symbol: "W",    gif: "tungsten.gif",      column: 6,  row: 6 },
    { name: "Rênio",        symbol: "Re",   gif: "rhenium.gif",       column: 7,  row: 6 },
    { name: "Ósmio",        symbol: "Os",   gif: "osmium.gif",        column: 8,  row: 6 },
    { name: "Irídio",       symbol: "Ir",   gif: "iridium.gif",       column: 9,  row: 6 },
    { name: "Platina",      symbol: "Pt",   gif: "platinum.gif",      column: 10, row: 6 },
    { name: "Ouro",         symbol: "Au",   gif: "gold.gif",          column: 11, row: 6 },
    { name: "Mercúrio",     symbol: "Hg",   gif: "gifs/Mercurio.gif", column: 12, row: 6, comGif: true },
    { name: "Tálio",        symbol: "Tl",   gif: "thallium.gif",      column: 13, row: 6 },
    { name: "Chumbo",       symbol: "Pb",   gif: "gifs/Chumbo.gif",   column: 14, row: 6, comGif: true },
    { name: "Bismuto",      symbol: "Bi",   gif: "bismuth.gif",       column: 15, row: 6 },
    { name: "Polônio",      symbol: "Po",   gif: "polonium.gif",      column: 16, row: 6 },
    { name: "Astato",       symbol: "At",   gif: "astatine.gif",      column: 17, row: 6 },
    { name: "Radônio",      symbol: "Rn",   gif: "radon.gif",         column: 18, row: 6 },
    { name: "Frâncio",      symbol: "Fr",   gif: "francium.gif",      column: 1,  row: 7 },
    { name: "Rádio",        symbol: "Ra",   gif: "radium.gif",        column: 2,  row: 7 },

    { name: "Lantâni",      symbol: "La",   gif: ".gif",              column: 3,  row: 9 },
    { name: "Cério",        symbol: "Ce",   gif: ".gif",              column: 4,  row: 9 },
    { name: "Praseodímio",  symbol: "Pr",   gif: ".gif",              column: 5,  row: 9 },
    { name: "Neodímio",     symbol: "Nd",    gif: ".gif",              column: 6,  row: 9 },
    { name: "Promécio",     symbol: "Pm",   gif: ".gif",              column: 7,  row: 9 },
    { name: "Samário",      symbol: "Sm",   gif: ".gif",              column: 8,  row: 9 },
    { name: "Európio",      symbol: "Eu",   gif: ".gif",              column: 9,  row: 9 },
    { name: "Gadolínio",    symbol: "Gd",   gif: ".gif",              column: 10, row: 9 },
    { name: "Térbio",       symbol: "Tb",   gif: ".gif",              column: 11, row: 9 },
    { name: "Disprósio",    symbol: "Dy",   gif: ".gif",              column: 12, row: 9 },
    { name: "Hólmio",       symbol: "Ho",   gif: ".gif",              column: 13, row: 9 },
    { name: "Érbio",        symbol: "Er",   gif: ".gif",              column: 14, row: 9 },
    { name: "Túlio",        symbol: "Tm",   gif: ".gif",              column: 15, row: 9 },
    { name: "Itérbio",      symbol: "Yb",   gif: ".gif",              column: 16, row: 9 },
    { name: "Lutécio",      symbol: "Lu",   gif: ".gif",              column: 17, row: 9 },

    { name: "Actínio",      symbol: "Ac",   gif: "actinium.gif",      column: 3,  row: 10 },
    { name: "Tório",        symbol: "Th",   gif: "thorium.gif",       column: 4,  row: 10 },
    { name: "Protactínio",  symbol: "Pa",   gif: "protactinium.gif",  column: 5,  row: 10 },
    { name: "Uranio",       symbol: "U",    gif: "uranium.gif",       column: 6,  row: 10 },
    { name: "Neptúnio",     symbol: "Np",   gif: "neptunium.gif",     column: 7,  row: 10 },
    { name: "Plutônio",     symbol: "Pu",   gif: "plutonium.gif",     column: 8,  row: 10 },
    { name: "Amerício",     symbol: "Am",   gif: "americium.gif",     column: 9,  row: 10 },
    { name: "Cúrio",        symbol: "Cm",   gif: "curium.gif",        column: 10, row: 10 },
    { name: "Berkélio",     symbol: "Bk",   gif: "berkelium.gif",     column: 11, row: 10 },
    { name: "Califórnio",   symbol: "Cf",   gif: "californium.gif",   column: 12, row: 10 },
    { name: "Einsteínio",   symbol: "Es",   gif: "einsteinium.gif",   column: 13, row: 10 },
    { name: "Férmio",       symbol: "Fm",   gif: "fermium.gif",       column: 14, row: 10 },
    { name: "Mendelévio",   symbol: "Md",   gif: "mendelevium.gif",   column: 15, row: 10 },
    { name: "Nobelium",     symbol: "No",   gif: "nobelium.gif",      column: 16, row: 10 },
    { name: "Laurêncio",    symbol: "Lr",   gif: "lawrencium.gif",    column: 17, row: 10 },
    { name: "Rutherfórdio", symbol: "Rf",   gif: "rutherfordium.gif", column: 4,  row: 7 },
    { name: "Dúbnio",       symbol: "Db",   gif: "dubnium.gif",       column: 5,  row: 7 },
    { name: "Seabórgio",    symbol: "Sg",   gif: "seaborgium.gif",    column: 6,  row: 7 },
    { name: "Bohriúm",      symbol: "Bh",   gif: "bohrium.gif",       column: 7,  row: 7 },
    { name: "Hassio",       symbol: "Hs",   gif: "hassium.gif",       column: 8,  row: 7 },
    { name: "Meitnério",    symbol: "Mt",   gif: "meitnerium.gif",    column: 9,  row: 7 },
    { name: "Darmstádio",   symbol: "Ds",   gif: "darmstadtium.gif",  column: 10, row: 7 },
    { name: "Roentgênio",   symbol: "Rg",   gif: "roentgenium.gif",   column: 11, row: 7 },
    { name: "Copernício",   symbol: "Cn",   gif: "copernicium.gif",   column: 12, row: 7 },
    { name: "Nihônio",      symbol: "Nh",   gif: "nihonium.gif",      column: 13, row: 7 },
    { name: "Fleróvio",     symbol: "Fl",   gif: "flerovium.gif",     column: 14, row: 7 },
    { name: "Moscóvio",     symbol: "Mc",   gif: "moscovium.gif",     column: 15, row: 7 },
    { name: "Livermório",   symbol: "Lv",   gif: "livermorium.gif",   column: 16, row: 7 },
    { name: "Tenessino",    symbol: "Ts",   gif: "tennessine.gif",    column: 17, row: 7 },
    { name: "Oganessônio",  symbol: "Og",   gif: "oganesson.gif",     column: 18, row: 7 },
];

function showElement(element) {
    const modal = document.getElementById("elementModal");
    const modalContent = document.getElementById("modalContent");
    modal.style.display = "block";
    modalContent.innerHTML = `
        <h2>${element.name} (${element.symbol})</h2>
        <img src="${element.gif}" alt="${element.name}" />
    `;
}

function closeModal() {
    const modal = document.getElementById("elementModal");
    modal.style.display = "none";
}

window.onload = function () {
    const table = document.querySelector(".periodic-table");
    elements.forEach((el) => {
        const cell = document.createElement("div");
        cell.className = "element";
        cell.style.gridColumn = el.column;
        cell.style.gridRow = el.row;
        cell.innerText = el.symbol;
        cell.onclick = () => showElement(el);
        table.appendChild(cell);
    });

    // Adicionar comGif como class pra estilizar no css
    elements.forEach((el) => {
        const cell = document.createElement("div");
        cell.className = "element";
        cell.dataset.gif = el.comGif; 
        cell.style.gridColumn = el.column;
        cell.style.gridRow = el.row;
        cell.innerText = el.symbol;
    
        cell.onclick = () => showElement(el);
        table.appendChild(cell);
    });

    // Alterar fonte
    document.getElementById('changeFontBtn').addEventListener('click', function() {
        const textElements = document.querySelectorAll('.element'); 
        textElements.forEach(textElement => {
            textElement.classList.toggle('alternate'); 
        });
    });
};