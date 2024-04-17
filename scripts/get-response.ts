export default function sendEmail(name: string, email: string, message: string): Promise<boolean> {
    return fetch(`http://localhost:3001/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (!response.ok) {
            // Log specific problem for debugging
            console.error(`HTTP error! Status: ${response.status}`);
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .catch(error => {
        console.error('Failed to send email:', error);
        // If the error handling needs to be more specific, you can check the error message here and decide the return value
        return false;
    });
}
