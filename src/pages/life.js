import Layout from '../components/layouts/article'

const Life = () => (
  <Layout title="Life">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Life</h1>

      {/* Article content with note-style spacing */}
      <article className="life-article">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">タイトル</h2>
          <p>
            ここに文章を書いてください。noteのような読みやすい行間で表示されます。
          </p>
          <p>
            段落と段落の間には適切なスペースが設けられ、長文でも読みやすくなっています。
          </p>
          <p>
            この形式で、あなたの哲学や人生の原則、大学院進学の理由、休学して留学する動機などを書くことができます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">セクション2</h2>
          <p>
            新しいセクションを追加することで、内容を整理して読みやすくすることができます。
          </p>
        </section>
      </article>
    </div>
  </Layout>
)

export default Life
