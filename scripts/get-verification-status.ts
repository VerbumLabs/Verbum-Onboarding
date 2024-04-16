export function getVerificationStatus(walletAddress: string): Promise<boolean> {
    return fetch(`http://localhost:3001/api/users/${walletAddress}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      console.log('Verification status:', data.sellerVerified);
      return data.sellerVerified;  // Assuming the backend sends this property
    })
    .catch(error => {
      console.error('Failed to retrieve verification status:', error);
      // Consider what default value should be returned in case of an error
      // If it's critical to show as unverified on error, return false
      return false;
    });
}
