import { useEffect, useState } from 'react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Article = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/note')
        if (response.ok) {
          const data = await response.json()
          setArticles(data)
        } else {
          console.error('Failed to fetch articles')
        }
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return (
    <Layout title="Article">
      <div>
        <h3 className="text-xl font-bold mb-4">Article</h3>

        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">記事を読み込み中...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">記事が見つかりませんでした</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {articles.map((article, index) => (
              <Section key={article.id} delay={index * 0.1}>
                <WorkGridItem
                  _id={article.id}
                  title={article.title}
                  thumbnail={article.thumbnail}
                  onClick={() => window.open(article.url, '_blank')}
                >
                  {article.description}
                </WorkGridItem>
              </Section>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Article
