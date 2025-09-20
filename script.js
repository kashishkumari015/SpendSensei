function calculateSalary() {
    const basicPay = parseFloat(document.getElementById('basicPay').value) || 0;
    const daPercent = parseFloat(document.getElementById('daPercent').value) || 0;
    const hraPercent = parseFloat(document.getElementById('hraPercent').value) || 0;
    const otherAllowances = parseFloat(document.getElementById('otherAllowances').value) || 0;
    const taxPercent = parseFloat(document.getElementById('taxPercent').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;

    // Calculations
    const da = (basicPay * daPercent) / 100;
    const hra = (basicPay * hraPercent) / 100;
    const grossSalary = basicPay + da + hra + otherAllowances;
    const tax = (grossSalary * taxPercent) / 100;
    const netSalary = grossSalary - tax - deductions;

    // Display Results
    document.getElementById('grossSalary').innerText = `Gross Salary: ₹${grossSalary.toFixed(2)}`;
    document.getElementById('netSalary').innerText = `Net Salary: ₹${netSalary.toFixed(2)}`;
    document.getElementById('taxAmount').innerText = `Tax Deducted: ₹${tax.toFixed(2)}`;
}
