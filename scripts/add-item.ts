export function submitItem(itemData: any): Promise<any> {
    return fetch('https://janus-kappa.vercel.app/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemData)
    }).then(response => {
      if (response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).catch(error => {
      console.error('Failed to submit item:', error, error.message);
    });
}
