import fs from 'fs'
import path from 'path'

/**
 * JSONファイルからプロジェクト一覧を取得
 * @param {string} jsonFileName - JSONファイル名（'projects.json' または 'development.json'）
 * @returns {Array} プロジェクトデータの配列
 */
export function getProjectsFromJson(jsonFileName) {
  const filePath = path.join(process.cwd(), 'src', 'data', jsonFileName)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const parsedData = JSON.parse(fileContents)

  // { tagDefinitions, projects } 形式のJSONファイルから projects を取得
  const data = parsedData.projects || []
  const tagDefinitions = parsedData.tagDefinitions || {}

  return data
    .map(item => {
      let processedItem = { ...item }

      // IDがない場合はcontentFileから生成する
      if (!processedItem.id && processedItem.contentFile) {
        const id = path.basename(processedItem.contentFile, '.md')
        processedItem.id = id
      }

      // タグキーをタグオブジェクトに展開する
      if (processedItem.tags && Array.isArray(processedItem.tags)) {
        const expandedTags = processedItem.tags.map(tagKey => {
          const tagDef = tagDefinitions[tagKey]
          return tagDef
            ? { ...tagDef, id: tagKey }
            : { id: tagKey, name: tagKey, color: 'gray' }
        })
        processedItem.tags = expandedTags
      }

      return processedItem
    })
    .filter(item => !item.hidden)
}

/**
 * Markdownファイルからコンテンツを取得
 * @param {string} contentFile - コンテンツファイルのパス（例: 'projects/project-1.md'）
 * @param {string} locale - 言語コード (デフォルト: 'ja')
 * @returns {string} Markdownコンテンツ
 */
export function getMarkdownContent(contentFile, locale = 'ja') {
  // contentFileがすでにlocaleを含んでいる場合（life.mdのケースなど）を考慮
  // ただし、life.js側ですでに {locale}/life.md として渡している場合はそのままでよいが、
  // projectsなどは projects/xxx.md として渡されるため、 ja/projects/xxx.md に変換する必要がある。
  // ここでは汎用性を高めるため、単純にパスを結合するアプローチをとる。
  // life.jsからは 'life.md' だけ渡して、ここで locale を結合する方が統一感があるが、
  // 現状life.jsは修正済みなので、projects/developmentの方を合わせる。

  let filePath
  if (contentFile.startsWith('ja/') || contentFile.startsWith('en/')) {
    // すでにロケールが含まれている場合（life.jsからの呼び出しなど）
    filePath = path.join(process.cwd(), 'src', 'data', 'content', contentFile)
  } else {
    // ロケールが含まれていない場合（projects/xxx.mdなど）、ロケールを付与
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
  const projects = getProjectsFromJson(jsonFileName)
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
 */
export function getProjects() {
  return getProjectsFromJson('projects.json')
}

/**
 * Developmentページ用のデータを取得
 */
export function getDevelopmentProjects() {
  return getProjectsFromJson('development.json')
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
