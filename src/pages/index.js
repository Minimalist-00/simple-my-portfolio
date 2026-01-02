import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoNewspaper
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Home = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  // Bioデータの配列
  const bioData = [
    {
      year: '2021.3',
      description: '富山県立高岡工芸高等学校 電子機械科 卒業'
    },
    {
      year: '2021.4',
      description: '富山県立大学 工学部 情報システム工学科 入学'
    },
    {
      year: '2023.4',
      description: '富山県庁で「DX推進サポーター」 任命'
    },
    {
      year: '2023.10',
      description: '岩本・河崎研究室（社会情報システムデザイン研究室） 配属'
    },
    {
      year: '2025.3',
      description: '富山県立大学 工学部 情報システム工学科 卒業'
    },

    {
      year: '2025.4',
      description: '富山県立大学 研究工学科 電子・情報工学専攻 入学'
    },
    {
      year: '2026.4',
      description: '1年休学し、フィリピンとカナダに留学を予定'
    }
  ]

  return (
    <Layout>
      <div>
        {/* 挨拶 */}
        <div className="rounded-lg mb-6 p-3 text-center bg-white/50 glass">
          {t('greeting')}
        </div>

        {/* プロフィール */}
        <div className="md:flex">
          <div className="flex-grow">
            <h2 className="text-4xl font-bold">Koki Nakagawa</h2>
            <p>{t('profile.role')}</p>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6 text-center">
            <div className="inline-block w-[100px] h-[100px] border-2 border-white/80 rounded-full overflow-hidden">
              <Image
                src="/images/Top/koki_face.jpg"
                alt="Profile image"
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>

        {/* 自己紹介 */}
        <Section delay={0.1}>
          <h3 className="section-title">{t('selfIntro.title')}</h3>
          <p
            className="text-justify hyphens-auto"
            dangerouslySetInnerHTML={{ __html: t('selfIntro.content') }}
          />
        </Section>

        <Section delay={0.2}>
          <h3 className="section-title">Bio</h3>
          {bioData.map((bio, index) => (
            <div key={index} className="mb-2">
              <div className="grid grid-cols-[5em_1fr]">
                <div className="font-bold">{bio.year}</div>
                <div>{bio.description}</div>
              </div>
            </div>
          ))}
        </Section>

        <Section delay={0.3}>
          <h3 className="section-title">開発経験とモチベーション</h3>
          <div className="text-justify hyphens-auto">
            <div>
              <p>2022年12月よりプログラミングを開始</p>
              <ul className="list-disc list-inside pt-2">
                <li>Next.js（TypeScript）を用いたWebアプリケーション開発</li>
                <li>
                  Figmaを使用した簡単なUIデザイン、TailwindCSSやMaterial
                  UIを用いたスタイリング
                </li>
                <li>
                  TypeScriptやPython、Goを用いた簡単なAPI作成、オープンAPIを使用したバックエンド制作
                </li>
                <li>
                  Azure、AWSなどのクラウドサービスを用いたクラウドベースの開発
                </li>
                <li>Gitを使用したバージョン管理、プロジェクト共有</li>
              </ul>
            </div>
            <div className="pt-2">
              これまで、授業の開発を始めとして3回ハッカソンへの出場（内2回受賞）、インターンシップや個人で開発を行ってきた。海外の動画を別の言語にリアルタイムで吹き替えする拡張機能や、学生団体のプロジェクトをゲームの掲示板風に管理するサービスを作ってきた。業務面では、フルスタックなToDoアプリ教材の制作や、行政で過去の予算要求を参照するRAGシステムをAzureで開発してきた
            </div>
            <div className="pt-2">
              現在は単なるWebアプリ開発に留まらず、アーティストやクリエイターの自己表現の憧れから、「やりたい」を諦めてきたゲーム制作と、Vlog制作（動画撮影、編集）に挑戦している。
            </div>
          </div>
        </Section>

        {/* SNSリンク */}
        <Section delay={0.3}>
          <h3 className="section-title">SNS</h3>
          <ul>
            <li>
              <a
                href="https://github.com/Minimalist-00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 hover:bg-teal-50 rounded transition-colors">
                  <IoLogoGithub className="mr-2" />
                  GitHub
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/Minimalist_30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 hover:bg-teal-50 rounded transition-colors">
                  <IoLogoTwitter className="mr-2" />x / Twitter
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/koki.n.0_0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 hover:bg-teal-50 rounded transition-colors">
                  <IoLogoInstagram className="mr-2" />
                  Instagram
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/koki-nakagawa-236443292/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 hover:bg-teal-50 rounded transition-colors">
                  <IoLogoLinkedin className="mr-2" />
                  LinkedIn
                </button>
              </a>
            </li>
            <li>
              <a
                href="https://note.com/minimalist30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center px-4 py-2 text-teal-600 hover:bg-teal-50 rounded transition-colors">
                  <IoNewspaper className="mr-2" />
                  note
                </button>
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
