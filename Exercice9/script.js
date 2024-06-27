// votre code ici
function checkAge(age) {
  if (!Number.isInteger(age)) {
    ("Veuillez indiquer un nombre entier");
  }

  if (age < 18) {
    return "Vous êtes mineur.";
  } else if (age < 65) {
    return "Vous êtes majeur.";
  } else {
    return "Vous êtes senior.";
  }
}

export default checkAge;
