const ageInput = document.querySelector("#ageInput");
const ageOutput = document.querySelector("#ageOutput");

ageInput.addEventListener("input", () => {
  const inputValue = Number(ageInput.value);
  let result = "";

  if (inputValue <= 0) {
    ageOutput.innerHTML = `Enter a number greater than 0.`;
    return;
  }

  if (inputValue >= 65) {
    result = "7-8";
  } else if (inputValue >= 18) {
    result = "7-9";
  } else if (inputValue >= 14) {
    result = "8-10";
  } else if (inputValue >= 6) {
    result = "9-11";
  } else if (inputValue >= 3) {
    result = "10-13";
  } else if (inputValue >= 1) {
    result = "11-14";
  } else {
    result = "14-17";
  }

  ageOutput.innerHTML = `You need ${result} hours of sleep every night.`;
});
