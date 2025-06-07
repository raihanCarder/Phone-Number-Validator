const inputText = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsText = document.getElementById("results-div");

let regexArray = [
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\d{10}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/
];

checkBtn.addEventListener("click", () => {

    const input = inputText.value;

    if (input === "") {
        alert("Please provide a phone number");
    }

    if (isValid(input)) {
        console.log("WooHoo");
        resultsText.innerHTML += `Valid US number: ${input} <br>`;
    }
    else {
        console.log("Invalid");
        resultsText.innerHTML += `Invalid US number: ${input} <br>`;
    }

});

function isValid(input) {
    for (const regex of regexArray) {
        if (regex.test(input)) {
            return true;
        }
    }
    return false;
}

clearBtn.addEventListener("click", () => {
    resultsText.innerHTML = "";
});