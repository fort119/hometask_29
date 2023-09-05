const form1 = document.forms[0];



form1.addEventListener("submit", function (event) {
  event.preventDefault();

  const formWrapper = document.querySelector(".form-wrapper");
  const surAndFirstNames = form1.fname;
  const citySelect = form1.selectCity;
  const sexRadio = form1.sex;
  const dateOfBirth = form1.year;
  const formAdress = form1.adress
  let checkedLanguages = [];

  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked) {
      checkedLanguages.push(item.value);
    }
  })
  let languageStr = checkedLanguages.join(", ");


  if (surAndFirstNames.value && dateOfBirth.value && sexRadio.value && citySelect.value && formAdress.value && checkedLanguages.length > 0) {
    form1.classList.add("-hidden");

    formWrapper.innerHTML = `
    <table class = "table">
      <tr>
        <td>Your name and surname: ${surAndFirstNames.value}</td
      </tr>
      <tr>
        <td>Your date of birth: ${dateOfBirth.value}</td
      </tr>
      <tr>
        <td>Your sex: ${sexRadio.value}</td
      </tr>
      <tr>
         <td>Your city: ${citySelect.value}</td
      </tr>
      <tr>
         <td>Your adress: ${formAdress.value}</td
      </tr>
      <tr>
         <td>Your language(s): ${languageStr}</td
      </tr>
    </table>
    `
  } else {
    const warningForUser = document.createElement("p");
    warningForUser.classList.add("warning");
    warningForUser.textContent = "Fill in all the fields"
    formWrapper.appendChild(warningForUser);
  }
})