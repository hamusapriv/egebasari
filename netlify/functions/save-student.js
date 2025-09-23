export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { studentId, studentData, userEmail } = req.body;

    // GitHub configuration
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = 'hamusapriv';
    const GITHUB_REPO = 'egebasari';
    const BRANCH = 'main';

    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: 'GitHub token not configured' });
    }

    // Prepare the file content
    const fileContent = JSON.stringify(studentData, null, 2);
    const filePath = `public/data/students/${studentId}.json`;

    // Get current file to get SHA (required for updates)
    let currentSha = null;
    try {
      const currentFileResponse = await fetch(
        `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
        {
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
          }
        }
      );
      
      if (currentFileResponse.ok) {
        const currentFileData = await currentFileResponse.json();
        currentSha = currentFileData.sha;
      }
    } catch (error) {
      console.log('File might not exist yet, will create new');
    }

    // Create or update the file
    const commitData = {
      message: `Update student data: ${studentData.name} by ${userEmail}`,
      content: Buffer.from(fileContent).toString('base64'),
      branch: BRANCH
    };

    if (currentSha) {
      commitData.sha = currentSha;
    }

    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commitData)
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GitHub API Error:', errorData);
      return res.status(500).json({ error: 'Failed to save to GitHub', details: errorData });
    }

    const result = await response.json();
    
    return res.status(200).json({ 
      success: true, 
      message: 'Student data saved successfully',
      commit: result.commit
    });

  } catch (error) {
    console.error('Error saving student data:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}