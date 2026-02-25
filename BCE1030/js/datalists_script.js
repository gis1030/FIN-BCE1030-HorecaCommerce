

// Función para poblar el datalist
function populateDatalist(listId, dataArray) {
    const datalist = document.getElementById(listId);

    // Asegúrate de que el datalist exista
    if (datalist) {
        datalist.innerHTML = ""; // Clear existing options
        // Itera sobre el array de datos
        dataArray.forEach(item => {
            // Crea un nuevo elemento <option>
            const option = document.createElement('option');

            // Asigna el valor del array al atributo 'value' de la opción
            option.value = item;

            // Agrega la opción al datalist
            datalist.appendChild(option);
        });
    } else {
        console.error(`Datalist con ID "${listId}" no encontrado.`);
    }
}

function ListaPropiedad(nombrePropiedad, origenDatos) {
    const valoresUnicos = new Set();

    // Nos aseguramos de tratar el origen como una lista, 
    // por si el usuario pasa un array [ProjectsChantiers1030]
    const fuentes = Array.isArray(origenDatos) ? origenDatos : [origenDatos];

    fuentes.forEach(fuente => {
        if (fuente && fuente.features) {
            fuente.features.forEach(feature => {
                // Accedemos al valor de la propiedad dentro de 'properties'
                const valor = feature.properties[nombrePropiedad];

                // Solo agregamos valores que no sean nulos o vacíos
                if (valor !== undefined && valor !== null && valor !== "") {
                    valoresUnicos.add(valor);
                }
            });
        }
    });

    // Convertimos el Set a un Array y lo ordenamos alfabéticamente
    return Array.from(valoresUnicos).sort();
}

/*
BCE_TypeEntity >> datalist_TypeEntity
BCE_TypeEnterprise >> datalist_TypeEnterprise
BCE_JuridicalForm >> datalist_JuridicalForm
BCE_SecEconomique >> datalist_SecEconomique
streetNames1030_FR >> datalist_StreetFR
Quartier1030 >> datalist_Quartier
Condition1030 >> datalist_Condition
*/

// Evento que se dispara cuando el DOM está completamente cargado
const BCE_TypeEntity_0 = ListaPropiedad("EntityType", [ListBCEMarkers1030]);
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    populateDatalist('datalist_TypeEntity', BCE_TypeEntity_0);
});

const BCE_TypeEnterprise_0 = ListaPropiedad("TypeOfEnterprise", [ListBCEMarkers1030]);
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    populateDatalist('datalist_TypeEnterprise', BCE_TypeEnterprise_0);
});

const BCE_JuridicalForm_0 = ListaPropiedad("JuridicalForm", [ListBCEMarkers1030]);
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    populateDatalist('datalist_JuridicalForm', BCE_JuridicalForm_0);
});

const BCE_SecEconomique_0 = ListaPropiedad("SectorGroup", [ListBCEMarkers1030]);
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    populateDatalist('datalist_SecEconomique', BCE_SecEconomique_0);
});

const Quartier1030_0 = ListaPropiedad("Quartier", [ListBCEMarkers1030]);
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    populateDatalist('datalist_Quartier', Quartier1030_0);
});

const streetNames1030_FR_0 = ListaPropiedad("StreetFR", [ListBCEMarkers1030]);
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    populateDatalist('datalist_StreetFR', streetNames1030_FR_0);
});

const Condition1030_0 = ListaPropiedad("Condition", [ListBCEMarkers1030]);
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    populateDatalist('datalist_Condition', Condition1030_0);
});

const Taxe1030_0 = ListaPropiedad("Taxe1030", [ListBCEMarkers1030]);
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    populateDatalist('datalist_Taxe1030', Taxe1030_0);
});