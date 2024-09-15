
// Function to validate annual income
function validateAnnualIncome() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const errorElement = document.getElementById('annualIncomeErr');
  
    // if annual income is not a number or less than zero
    if (isNaN(annualIncome) || annualIncome <= 0) {
      errorElement.textContent = 'Please enter a valid annual income.';
      return false;
    } else {
      errorElement.textContent = '';
      return true;
    }
  }
  
  // Function to validate current amount in account
  function validateCurrentAmount() {
    const currentAmount = parseFloat(document.getElementById('currentAmount').value);
    const errorElement = document.getElementById('currentAmountErr');
  
    // if current amount is not a number or less than zero
    if (isNaN(currentAmount) || currentAmount < 0) {
      errorElement.textContent = 'Please enter a valid current amount.';
      return false;
    } else {
      errorElement.textContent = '';
      return true;
    }
  }
  
  // Function to validate loan amount
  function validateLoanAmount() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const errorElement = document.getElementById('loanAmountErr');
  
    // if loan amount is not a number or less than zero
    if (isNaN(loanAmount) || loanAmount <= 0) {
      errorElement.textContent = 'Please enter a valid loan amount.';
      return false;
    } else {
      errorElement.textContent = '';
      return true;
    }
  }
  
  // Function to validate repayment period
  function validateRepaymentPeriod() {
    const repaymentPeriod = parseInt(document.getElementById('repaymentPeriod').value);
    const errorElement = document.getElementById('repaymentPeriodErr');
  
    // if repayment period is not a number or less than zero
    if (isNaN(repaymentPeriod) || repaymentPeriod <= 0) {
      errorElement.textContent = 'Please enter a valid repayment period.';
      return false;
    } else {
      errorElement.textContent = '';
      return true;
    }
  }
  
  // Adding event listeners for real time validation
  document.getElementById('annualIncome').addEventListener('input', validateAnnualIncome);
  document.getElementById('currentAmount').addEventListener('input', validateCurrentAmount);
  document.getElementById('loanAmount').addEventListener('input', validateLoanAmount);
  document.getElementById('repaymentPeriod').addEventListener('input', validateRepaymentPeriod);
  
  // Main form submission handling
  document.getElementById('loanForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
  
    // Validate the form fields before processing
    const isValid = validateAnnualIncome() &&
      validateCurrentAmount() &&
      validateLoanAmount() &&
      validateRepaymentPeriod();
  
    if (!isValid) {
      alert('Please fix the errors in the form before submitting.');
      return;
    }
  
    // Get form values
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const currentAmount = parseFloat(document.getElementById('currentAmount').value);
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const creditHistory = document.getElementById('creditHistory').value;
    const lastDeposit = new Date(document.getElementById('lastDeposit').value);
    const lastLoan = new Date(document.getElementById('lastLoan').value);
    const repaymentPeriod = parseInt(document.getElementById('repaymentPeriod').value);
    const accountType = document.getElementById('accountType').value;
  
    let score = 0;
  
  
    if (currentAmount > loanAmount) {
      score += 10;
    } else {
      score -= 10;
    }
  
    if (creditHistory === 'good') {
      score += 10;
    }
  
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    if (lastDeposit >= oneMonthAgo) {
      score += 5;
    }
  
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    if (lastLoan <= sixMonthsAgo) {
      score += 10;
    }
  
    if (repaymentPeriod < 6) {
      score += 5;
    }
  
    if (accountType === 'current') {
      score += 10;
    } else if (accountType === 'savings') {
      score += 5;
    }
  
  
    const resultElement = document.getElementById('result');
    if (score > 30) {
      resultElement.textContent = `Eligible for loan!`;
    } else {
      resultElement.textContent = `Not eligible for loan`;
    }
  });


  // document.getElementById("loanForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     let annualIncome = parseFloat(document.getElementById("annualIncome").value);
//     let currentAmount = parseFloat(document.getElementById("currentAmount").value);
//     let loanAmount = parseFloat(document.getElementById("loanAmount").value);
//     let creditHistory = document.getElementById("creditHistory").value;
//     let lastDeposit = new Date (document.getElementById("lastDeposit").value);
//     let lastLoan = new Date (document.getElementById("lastLoan").value);
//     let repaymentPeriod = parseInt(document.getElementById("repaymentPeriod").value);
//     let accountPeriod = document.getElementById("accountType").value;

//     let Point = 0;
//     let valid = true

//     let annualIncomeErr = document.getElementById('annualIncomeErr');
//     let currentAmountErr = document.getElementById('currentAmountErr');
        
//     if(currentAmountErr === ""){
//         currentAmountErr.
//     }
//     if(annualIncome === ''){
//             annualIncomeErr.innerHTML = 'smookeggggggggggggggg'
//             valid = false
//     }
//     if (currentAmount > loanAmount) {
//         Point +=10;
//     } else {
//         Point -=10;
//     }

//     if (creditHistory === "good") {
//         Point +=10; 
//     }

//     const oneMonthAgo = new Date ();
//     oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
//     if (lastDeposit >= oneMonthAgo) {
//         Point +=5
//     }

//     const sixMonthAgo = new Date ()
//     sixMonthAgo.getMonth(sixMonthAgo.getMonth() - 6)
//     if (lastLoan <= sixMonthAgo ) {
//         Point +=10;
//     }

//     if (repaymentPeriod < 6) {
//         Point += 5;
//     }

//     if (accountType ==="current") {
//         Point +=10;
//     } else if (accountType === "savings") {
//         Point +=5;
//     }
    
//     const resultElement = document.getElementById("result");
//     if (Point >= 30) {
//         resultElement.innerHTML = `Eligible for loan!`;
//     } else {
//         resultElement.innerHTML = `Not Eligible for loan`;
//     }
    
// })

