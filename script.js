document.getElementById("calculateButton").addEventListener("click", function () {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter valid values for height and weight.");
        return;
    }

    var bmi = weight / ((height / 100) * (height / 100));
    document.getElementById("bmiResult").textContent = bmi.toFixed(2);
});
