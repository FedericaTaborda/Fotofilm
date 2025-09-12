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


