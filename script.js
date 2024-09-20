async function handleFileUpload() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('inputText').value = event.target.result;
        };
        reader.readAsText(file);
    }
}

async function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const key = document.getElementById('key').value;
    const cipherType = document.getElementById('cipherType').value;

    if (key.length < 12) {
        alert('Kunci harus minimal 12 karakter!');
        return;
    }

    const response = await fetch('cipher.cpp', {
        method: 'POST',
        body: JSON.stringify({ inputText, key, cipherType, action: 'encrypt' }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        console.error('Error during encryption:', response.statusText);
        return;
    }

    const result = await response.text();
    document.getElementById('outputText').value = result;
}

async function decrypt() {
    const inputText = document.getElementById('outputText').value;
    const key = document.getElementById('key').value;
    const cipherType = document.getElementById('cipherType').value;

    if (key.length < 12) {
        alert('Kunci harus minimal 12 karakter!');
        return;
    }

    const response = await fetch('cipher.cpp', {
        method: 'POST',
        body: JSON.stringify({ inputText, key, cipherType, action: 'decrypt' }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        console.error('Error during encryption:', response.statusText);
        return;
    }
    
    const result = await response.text();
    document.getElementById('outputText').value = result;
}
