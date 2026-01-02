export default async function handler(req, res) {
  const username = 'minimalist30'
  const page = req.query.page || 1

  try {
    const response = await fetch(
      `https://note.com/api/v2/creators/${username}/contents?kind=note&page=${page}`
    )

    if (!response.ok) {
      if (response.status === 404) {
        return res.status(404).json({ error: 'User not found' })
      }
      throw new Error(`Note API responded with status ${response.status}`)
    }

    const data = await response.json()

    const articles = data.data.contents.map(article => ({
      id: article.id,
      title: article.name,
      description: article.description || '',
      thumbnail:
        article.eyecatch ||
        'https://assets.st-note.com/production/uploads/images/default_eyecatch.png',
      url: `https://note.com/${username}/n/${article.key}`,
      publishedAt: article.publishAt
    }))

    res.status(200).json(articles)
  } catch (error) {
    console.error('Error fetching note data:', error)
    res.status(500).json({ error: 'Failed to fetch data' })
  }
}
