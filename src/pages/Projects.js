import { useEffect, useState } from 'react'
import CardList from '../components/card-list'
import Layout from '../components/layouts/article'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'データの取得に失敗しました')
        }

        setProjects(data.projects)
      } catch (err) {
        console.error('Projects fetch error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // ローディング中の表示
  if (loading) {
    return (
      <Layout title="Projects">
        <div>
          <h3 className="text-xl mb-4 font-bold">研究室での活動</h3>
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-500"></div>
          </div>
        </div>
      </Layout>
    )
  }

  // エラーがある場合は表示
  if (error) {
    return (
      <Layout title="Projects">
        <div>
          <h3 className="text-xl mb-4 text-red-500">
            データの取得に失敗しました
          </h3>
          <p>{error}</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Projects">
      <div>
        <h3 className="text-xl mb-4 font-bold">これまでの活動</h3>
        <CardList items={projects} delay={0} apiEndpoint="/api/projects" />
      </div>
    </Layout>
  )
}

export default Projects
