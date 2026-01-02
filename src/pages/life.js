import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../components/layouts/article'
import MarkdownRenderer from '../components/markdown-renderer'
import { getMarkdownContent } from '../lib/local-data'

const Life = ({ content }) => (
  <Layout title="Life">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-xl mb-4 font-bold">Life</h3>

      <article className="life-article">
        <section className="mb-8">
          <MarkdownRenderer content={content} />
        </section>
      </article>
    </div>
  </Layout>
)

export async function getStaticProps({ locale }) {
  const content = getMarkdownContent(`${locale}/life.md`)
  return {
    props: {
      content,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default Life
