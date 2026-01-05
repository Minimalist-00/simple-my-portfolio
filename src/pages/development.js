import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CardList from '../components/card-list'
import Layout from '../components/layouts/article'

const Development = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`/api/development?locale=${locale}`)
        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch data')
        }

        setProjects(data.projects)
      } catch (err) {
        console.error('Development fetch error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [locale])

  // ローディング中の表示
  if (loading) {
    return (
      <Layout title="Development">
        <div>
          <h3 className="text-xl mb-4">Development</h3>
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
      <Layout title="Development">
        <div>
          <h3 className="text-xl mb-4 text-red-500">Failed to fetch data</h3>
          <p>{error}</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout title="Development">
      <div>
        <h3 className="text-xl mb-4 font-bold">Development</h3>
        <CardList items={projects} delay={0.3} apiEndpoint="/api/development" />
      </div>
    </Layout>
  )
}

export default Development

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
