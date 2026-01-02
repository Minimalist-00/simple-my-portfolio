/**
 * note 非公式API連携ユーティリティ
 * 注意: 非公式APIのため、仕様変更の可能性があります
 */

const NOTE_API_BASE = 'https://note.com/api/v2'

/**
 * 指定したnoteユーザーの記事一覧を取得
 * @param {string} username - noteのユーザー名
 * @param {number} page - ページ番号（デフォルト: 1）
 * @returns {Promise<Array>} 記事一覧
 */
export async function getNoteArticles(username, page = 1) {
  try {
    const response = await fetch(
      `${NOTE_API_BASE}/creators/${username}/contents?kind=note&page=${page}`
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.status}`)
    }

    const data = await response.json()

    // APIレスポンスから必要な情報を抽出
    const articles = data.data.contents.map(article => ({
      id: article.id,
      title: article.name,
      description: article.description || '',
      thumbnail:
        article.eyecatch ||
        'https://assets.st-note.com/production/uploads/images/default_eyecatch.png',
      url: `https://note.com/${username}/n/${article.key}`,
      publishedAt: article.publishAt,
      likeCount: article.likeCount || 0,
      commentCount: article.commentCount || 0
    }))

    return articles
  } catch (error) {
    console.error('Error fetching note articles:', error)
    return []
  }
}

/**
 * 記事の詳細情報を取得
 * @param {string} noteKey - 記事のキー
 * @returns {Promise<Object|null>} 記事詳細
 */
export async function getNoteArticleDetail(noteKey) {
  try {
    const response = await fetch(`${NOTE_API_BASE}/notes/${noteKey}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch article detail: ${response.status}`)
    }

    const data = await response.json()
    return data.data
  } catch (error) {
    console.error('Error fetching note article detail:', error)
    return null
  }
}
