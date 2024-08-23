window.onload = function() {
    
    const today = new Date();
    const formattedDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    document.getElementById('currentDate').innerText = formattedDate;
    
  
    document.getElementById('calculateAgeButton').addEventListener('click', calculateAge);
};

function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const today = new Date();

   
    if (isNaN(dob.getTime())) {
        document.getElementById('ageResult').innerText = "Please enter a valid date in MM/DD/YYYY format.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('ageResult').innerText = `Your Age is: ${age} years.`;
}
