import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoNewspaper
} from 'react-icons/io5'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import TechStack from '../components/tech-stack'
import { skillIconsString, toolSkillIconsString } from '../data/skills'

const Home = () => {
  const { t } = useTranslation('common')

  // 翻訳ファイルからBioデータを取得
  const bioData = t('bio', { returnObjects: true })

  return (
    <Layout>
      <div>
        {/* 挨拶 */}
        <div className="rounded-lg mb-6 p-3 text-center bg-white/50 glass">
          {t('greeting')}
        </div>

        {/* プロフィール */}
        <div className="sm:flex">
          <div className="flex-grow">
            <h2 className="text-4xl font-bold">Koki Nakagawa</h2>
            <p>{t('profile.role')}</p>
          </div>
          <div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-6 text-center">
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
          <h3 className="section-title">Development</h3>
          <div className="text-justify hyphens-auto mb-6">
            <div>
              <p>{t('developmentSection.intro')}</p>
              <div className="pt-2 pb-2">
                <p>{t('developmentSection.frontend')}</p>
                <p>{t('developmentSection.design')}</p>
                <p>{t('developmentSection.backend')}</p>
                <p>{t('developmentSection.cloud')}</p>
                <TechStack skillStr={skillIconsString} />
              </div>
            </div>
            <div className="pt-2">{t('developmentSection.experience')}</div>
            <div className="pt-2">{t('developmentSection.current')}</div>
            <TechStack skillStr={toolSkillIconsString} />
          </div>
        </Section>

        <Section delay={0.4}>
          <h3 className="section-title">Hobby</h3>
          <div className="text-justify hyphens-auto">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>{t('hobby.gaming.title')}</strong>{' '}
                {t('hobby.gaming.description')}
              </li>
              <li>
                <strong>{t('hobby.photography.title')}</strong>{' '}
                {t('hobby.photography.description')}
              </li>
              <li>
                <strong>{t('hobby.singing.title')}</strong>{' '}
                {t('hobby.singing.description')}
              </li>
              <li>
                <strong>{t('hobby.snowboarding.title')}</strong>{' '}
                {t('hobby.snowboarding.description')}
              </li>
            </ul>
          </div>
        </Section>

        {/* SNSリンク */}
        <Section delay={0.5}>
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
