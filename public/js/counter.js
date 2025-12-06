// Put this in your Hugo assets/js/main.js or static/js/main.js

const apiEndpoint = "https://eij3eezoni.execute-api.us-east-1.amazonaws.com"; // Get this from terraform output

async function updateCounter() {
    try {
        const response = await fetch(`${apiEndpoint}/visit`, {
            method: 'POST',
            body: JSON.stringify({ resume_id: 'default' })
        });
        const data = await response.json();
        const counterElement = document.getElementById('visitor-counter');
        if (counterElement) {
            counterElement.innerText = data.count;
        }
    } catch (error) {
        console.error('Error updating visitor count:', error);
    }
}

document.addEventListener('DOMContentLoaded', updateCounter);
