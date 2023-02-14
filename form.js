// Definiere die 100 gültigen Referenzcodes
const validCodes = ['ABC', 'DEF', 'GHI']; // Füge die restlichen 97 Codes hier hinzu

// Warte auf das Absenden des Formulars
document.querySelector('form').addEventListener('submit', function(event) {
  // Hole den Wert des Eingabefelds
  const refCode = document.querySelector('.ref_code').value.toUpperCase();

  // Überprüfe, ob der Referenzcode gültig ist
  if (validCodes.includes(refCode)) {
    // Wenn der Code gültig ist, lasse das Formular absenden
    return true;
  } else {
    // Andernfalls verhindere das Absenden des Formulars
    event.preventDefault();
    alert('Ungültiger Referenzcode. Bitte versuche es erneut.');
    return false;
  }
});
