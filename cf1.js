document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const emissionsOutput = document.querySelector(".Emissions");

    button.addEventListener("click", () => {
        const distance = parseFloat(document.getElementById("distance").value);
        const mileage = parseFloat(document.getElementById("mileage").value);
        const fuelType = document.getElementById("cars").value;

        if (isNaN(distance) || isNaN(mileage) || distance <= 0 || mileage <= 0) {
            emissionsOutput.textContent = "Emissions: Please enter valid distance and mileage values.";
            return;
        }

    
        const emissionFactors = {
            Petrol: 2.31,
            Diesel: 2.68,
            LPG : 2.01,
            CNG: 1.98
        };

    
        const fuelConsumed = distance / mileage;

     
        const emissions = fuelConsumed * emissionFactors[fuelType];

        const trees = emissions / 25;

        
        emissionsOutput.innerHTML = `
            Emissions: ${emissions.toFixed(2)} kg CO₂e<br>
            Trees required to offset emissions in a year: ${Math.ceil(trees)} tree(s)
        `;
    });
});
