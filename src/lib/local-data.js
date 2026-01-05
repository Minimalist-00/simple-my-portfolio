import fs from 'fs'
import path from 'path'

/**
 * 翻訳ファイルからデータを取得
 * @param {string} locale - 言語コード
 * @returns {object} 翻訳データ
 */
function getTranslations(locale = 'ja') {
  const filePath = path.join(
    process.cwd(),
    'src',
    'data',
    'content',
    'locales',
    locale,
    'common.json'
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
}

/**
 * JSONファイルからプロジェクト一覧を取得
 * @param {string} jsonFileName - JSONファイル名('projects.json' または 'development.json')
 * @param {string} locale - 言語コード
 * @returns {Array} プロジェクトデータの配列
 */
export function getProjectsFromJson(jsonFileName, locale = 'ja') {
  const filePath = path.join(process.cwd(), 'src', 'data', jsonFileName)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const parsedData = JSON.parse(fileContents)

  // 翻訳データを取得
  const translations = getTranslations(locale)
  const translationType =
    jsonFileName === 'projects.json' ? 'projects' : 'development'

  // { tagDefinitions, projects } 形式のJSONファイルから projects を取得
  const data = parsedData.projects || []
  const tagDefinitions = parsedData.tagDefinitions || {}

  return data
    .map(item => {
      let processedItem = { ...item }

      // 翻訳からタイトルと説明文を取得
      if (
        processedItem.id &&
        translations[translationType]?.[processedItem.id]
      ) {
        const translatedData = translations[translationType][processedItem.id]
        processedItem.title = translatedData.title
        processedItem.description = translatedData.description
      }

      // タグキーをタグオブジェクトに展開する
      if (processedItem.tags && Array.isArray(processedItem.tags)) {
        const expandedTags = processedItem.tags.map(tagKey => {
          const tagDef = tagDefinitions[tagKey]
          // 翻訳からタグ名を取得
          const tagName = translations.tags?.[tagKey] || tagKey
          return tagDef
            ? { ...tagDef, id: tagKey, name: tagName }
            : { id: tagKey, name: tagName, color: 'gray' }
        })
        processedItem.tags = expandedTags
      }

      return processedItem
    })
    .filter(item => !item.hidden)
}

/**
 * Markdownファイルからコンテンツを取得
 * @param {string} contentFile - コンテンツファイルのパス(例: 'projects/project-1.md')
 * @param {string} locale - 言語コード (デフォルト: 'ja')
 * @returns {string} Markdownコンテンツ
 */
export function getMarkdownContent(contentFile, locale = 'ja') {
  let filePath
  if (contentFile.startsWith('ja/') || contentFile.startsWith('en/')) {
    // すでにロケールが含まれている場合(life.jsからの呼び出しなど)
    filePath = path.join(process.cwd(), 'src', 'data', 'content', contentFile)
  } else {
    // ロケールが含まれていない場合(projects/xxx.mdなど)、ロケールを付与
    filePath = path.join(
      process.cwd(),
      'src',
      'data',
      'content',
      locale,
      contentFile
    )
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8')
    return content.trim()
  } catch (error) {
    console.error(`Markdownファイル読み込みエラー: ${filePath}`, error)
    return ''
  }
}

/**
 * プロジェクトIDから詳細情報を取得
 * @param {string} jsonFileName - JSONファイル名
 * @param {string} projectId - プロジェクトID
 * @param {string} locale - 言語コード
 * @returns {object|null} プロジェクト詳細情報
 */
export function getProjectById(jsonFileName, projectId, locale = 'ja') {
  const projects = getProjectsFromJson(jsonFileName, locale)
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return null
  }

  // Markdownコンテンツを取得して追加
  if (project.contentFile) {
    const content = getMarkdownContent(project.contentFile, locale)
    return {
      ...project,
      content
    }
  }

  return project
}

/**
 * Projectsページ用のデータを取得
 * @param {string} locale - 言語コード
 */
export function getProjects(locale = 'ja') {
  return getProjectsFromJson('projects.json', locale)
}

/**
 * Developmentページ用のデータを取得
 * @param {string} locale - 言語コード
 */
export function getDevelopmentProjects(locale = 'ja') {
  return getProjectsFromJson('development.json', locale)
}

/**
 * ページの詳細情報とコンテンツを取得
 * @param {string} pageId - ページID
 * @param {string} jsonFileName - JSONファイル名
 * @param {string} locale - 言語コード
 * @returns {object|null} ページ情報とコンテンツ
 */
export function getPageWithContent(pageId, jsonFileName, locale = 'ja') {
  return getProjectById(jsonFileName, pageId, locale)
}
