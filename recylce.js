// app.js
document.getElementById("recycling-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const recycled = parseFloat(document.getElementById("recycled").value);
    const total = parseFloat(document.getElementById("total").value);
  
    if (total <= 0) {
      alert("Total waste must be greater than 0!");
      return;
    }
  
    const efficiency = ((recycled / total) * 100).toFixed(2);
  
    document.getElementById("score").textContent = `Efficiency: ${efficiency}%`;
  
    let tips;
    if (efficiency >= 75) {
      tips = "Great job! Keep up the excellent recycling habits!";
    } else if (efficiency >= 50) {
      tips = "Good effort! Consider separating waste more carefully.";
    } else {
      tips = "You can do better! Try to recycle more items and reduce waste. ";
    }
  
    document.getElementById("tips").textContent = tips;
  });
  