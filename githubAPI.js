const owner = import.meta.env.VITE_GH_OWNER;
const repo = import.meta.env.VITE_GH_REPO;
const filePath = 'tips.json';
const token = import.meta.env.VITE_GH_TOKEN;

export async function fetchTips() {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`);
  const data = await res.json();
  const content = atob(data.content);
  return JSON.parse(content);
}

export async function writeTips(tips) {
  const getShaRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`);
  const getShaData = await getShaRes.json();

  await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: 'Update tips',
      content: btoa(JSON.stringify(tips, null, 2)),
      sha: getShaData.sha
    })
  });
}
