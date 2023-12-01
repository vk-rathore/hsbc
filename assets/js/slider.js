const sliderIdxs = [0, 1, 2, 3];

const riskArray = [
  { idx: 0, value: 0, text: "" },
  { idx: 1, value: 4, text: "Low" },
  { idx: 2, value: 6, text: "Low to Moderate" },
  { idx: 3, value: 8, text: "Moderate" },
  { idx: 4, value: 11, text: "Moderately High" },
  { idx: 5, value: 12, text: "High" },
  { idx: 6, value: 19, text: "Very High" },
];

const placeTextInDoc = (targetId, text) => {

    document.getElementById(targetId).innerHTML = text;

};

const calculateCompountedValue = (amount, interest, years) => {

    return Math.floor(amount*(Math.pow((1+(interest/100)),years)));

};

const calculateSipData = () => {

  const target = Number(document.getElementsByClassName(`slider_0`)[0].value),
    initialInvestment = Number(document.getElementsByClassName(`slider_1`)[0].value),
    interest =
      riskArray[document.getElementsByClassName(`slider_2`)[0].value].value,
    years = Number(document.getElementsByClassName(`slider_3`)[0].value);

    placeTextInDoc('display_interest', interest); 

    placeTextInDoc('display_years', years); 
    
    placeTextInDoc('display_current_investment', initialInvestment.toLocaleString('en-IN'));

    const futureTarget = calculateCompountedValue(target, 6, years);

    placeTextInDoc('display_future_target', futureTarget.toLocaleString('en-IN')) 

    const appretiatedInvestmentValue = calculateCompountedValue(initialInvestment, interest, years);

    placeTextInDoc('display_appretiated_investment', appretiatedInvestmentValue.toLocaleString('en-IN'));

    const amountDiff = futureTarget - appretiatedInvestmentValue;

    let additonalAmount = 0;

    if (amountDiff > 0) {

        additonalAmount = amountDiff;

    } 

    placeTextInDoc('display_additional_amount', additonalAmount.toLocaleString('en-IN'));


};

for (const sliderIdx in sliderIdxs) {
  const range = document.getElementsByClassName(`slider_${sliderIdx}`)[0];

  const tooltip = document.getElementsByClassName(`tooltip_${sliderIdx}`)[0];

  tooltip.style.display = "none";

  const selectedTextButton = document.getElementById(`text_box_${sliderIdx}`);

  const setValue = () => {
    const newValue = Number(
      ((range.value - range.min) * 100) / (range.max - range.min)
    );

    const newPosition = 16 - newValue * 0.32;

    if (sliderIdx === "2") {
      tooltip.innerHTML = `<span>${riskArray[range.value].text}</span>`;

      selectedTextButton.innerHTML = riskArray[range.value].text;
    } else {
      tooltip.innerHTML = `<span>${Number(range.value).toLocaleString('en-IN')}</span>`;

      selectedTextButton.innerHTML = Number(range.value).toLocaleString('en-IN');
    }

    tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;

    range.style.setProperty(
      "--range-progress",
      `calc(${newValue}% + (${newPosition}px))`
    );

    calculateSipData();
  };

  document.addEventListener("DOMContentLoaded", setValue);

  range.addEventListener("input", setValue);

  range.addEventListener(
    "mouseover",
    () => {
      tooltip.style.display = "";
    },
    false
  );

  range.addEventListener(
    "mouseleave",
    () => {
      tooltip.style.display = "none";
    },
    false
  );
}
