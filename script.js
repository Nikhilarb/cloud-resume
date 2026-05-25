// Fetch the visitor count from the API Gateway endpoint
async function fetchVisitorCount() {
    const counterElement = document.getElementById('visitor-count');
    try {
        // This URL will be replaced with your real API Gateway URL later
        const response = await fetch('YOUR_API_GATEWAY_URL/count');
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