// Fetch the visitor count from the API Gateway endpoint
async function fetchVisitorCount() {
    const counterElement = document.getElementById('visitor-count');
    try {
        // This URL will be replaced with your real API Gateway URL later
        const response = await fetch('https://29r2k8v64h.execute-api.us-east-1.amazonaws.com/count');
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        counterElement.textContent = data.count;
    } catch (error) {
        console.error('Failed to fetch visitor count:', error);
        // Show N/A when the API is not yet available
        counterElement.textContent = 'N/A';
    }
}

// Run immediately when the script loads
fetchVisitorCount();