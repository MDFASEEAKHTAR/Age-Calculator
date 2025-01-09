function calculateAge() {
   const day = document.getElementById("dobDay").value;
    const month = document.getElementById("dobMonth").value - 1;
    const year = document.getElementById("dobYear").value;
    const today = new Date();
    const birthDate = new Date(year, month, day);
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed = today.getMonth() > month || (today.getMonth() === month && today.getDate() >= day);

    if (!isBirthdayPassed) {
        age--;
    }
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You are : ${age} years old.`;
}
