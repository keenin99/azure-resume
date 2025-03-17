window.addEventListener('DOMContentLoaded', (event) => { 
    getVisitCount();
});

const functionApi = 'https://example.com/api'; // Replace with your actual API endpoint

const getVisitCount = () => {
    let count = 30;  // Default count

    fetch(functionApi)
        .then(response => response.json())
        .then(response => {
            console.log("Website called function API");
            count = response.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.error("Error fetching visit count:", error);
        });

    return count;
};