// votre code ici
function checkAge(age) {
  if (!Number.isInteger(age)) {
    ("Veuillez indiquer un nombre entier");
  }

  if (age < 18) {
    return "vous êtes mineur";
  } else if (age < 65) {
    return "vous êtes majeur";
  } else {
    return "vous êtes sénior";
  }
}

export default checkAge;
