export const handler = async (event, context) => {
  try {
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    
    if (!GITHUB_TOKEN) {
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: "No GitHub token found",
          env: Object.keys(process.env).filter(key => key.includes('GITHUB'))
        })
      };
    }

    // Test GitHub API access
    const response = await fetch('https://api.github.com/repos/hamusapriv/egebasari', {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: response.ok,
        status: response.status,
        repoName: data.name,
        permissions: data.permissions,
        tokenLength: GITHUB_TOKEN ? GITHUB_TOKEN.length : 0,
        message: response.ok ? 'Token works!' : 'Token failed'
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error.message,
        stack: error.stack 
      })
    };
  }
};