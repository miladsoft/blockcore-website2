
export async function fetchGitHubOrgInfo(org: string) {
  const response = await fetch(`https://api.github.com/orgs/${org}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch organization info: ${response.statusText}`);
  }
  return response.json();
}

export async function fetchGitHubOrgRepos(org: string) {
  const response = await fetch(`https://api.github.com/orgs/${org}/repos?per_page=100`);
  if (!response.ok) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
}

export async function getOrganizationStats(org: string) {
  try {
    const orgData = await fetchGitHubOrgInfo(org);
    const repos = await fetchGitHubOrgRepos(org);

    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

    return {
      name: orgData.name,
      publicRepos: orgData.public_repos,
      followers: orgData.followers,
      totalStars,
      totalForks,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
