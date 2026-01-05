import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/article'

const timelineDataJa = [
  {
    date: '2021.03',
    title: '富山県立高岡工芸高等学校 電子機械科 卒業',
    description: ''
  },
  {
    date: '2021.04',
    title: '富山県立大学 工学部 情報システム工学科 入学',
    logo: '/images/AboutMe/logo_tpu.png'
  },
  {
    date: '2021.09 - 2023.06',
    title: '星乃珈琲店 アルバイト',
    description:
      'お客様や従業員との接し方を学び、人への気配りやコミュニケーション能力を磨いてきた。2023年にはバイトリーダーを務め、新人指導及び教育を担当。またドリップを習得'
  },
  {
    date: '2022.10 - ',
    title: '学生団体「POLYGON」 加入',
    description:
      '情報分野に興味のある学生が集う学生団体に加入。IoT開発プロジェクトやハッカソンに積極的に参加。また、後述する富山県庁DX推進の業務にアサイン',
    logo: '/images/AboutMe/logo_polygon.png'
  },
  {
    date: '2023.04 - 2026.03',
    title: '富山県庁 DX推進サポーター 任命',
    description:
      '会計年度任用職員として雇用され、学生視点からの助言・技術的な支援や、業務改善を通じて県庁のDX推進を行う。2024年10月から1年間リーダーを務めた。kintoneやPower Automateを活用した業務改善、財政課の予算要求参照RAGシステムの企画・開発などを担当。'
  },
  {
    date: '2023.08',
    title: '株式会社CARTA HOLDINGS サマーインターン「Treasure」 参加',
    description:
      '3週間のサマーインターン「Treasure」に参加。前半に講義でインプットし、後半はチームでハッカソン形式で企画･開発。最終発表ではフロントエンド賞を受賞',
    logo: '/images/AboutMe/logo_carta.jpg'
  },
  {
    date: '2023.09',
    title:
      'エキサイトホールディングス株式会社 サマーインターン「Booost!!!」 参加',
    description:
      '1週間のサマーインターン「Booost!!!」に参加。ヘルスケア事業のお悩み相談サービスのレコメンドシステムをチームで企画･開発',
    logo: '/images/AboutMe/logo_excite.png'
  },
  {
    date: '2023.10 - 2027.03',
    title: '岩本・河崎研究室(SIDLab)配属',
    description:
      '研究活動や外部と連携したプロジェクト、KGリーダーで後輩の育成などを行う',
    logo: '/images/AboutMe/logo_sidlab.svg'
  },
  {
    date: '2024.02 - 2024.03',
    title: '大学事務局 アルバイト',
    description:
      '学生団体POLYGONの取り組みとして、アルバイトの勤怠管理DXを行った。総務課へのヒアリング、業務フローの見直し、Power Automateを使用したシステムの実装を行った'
  },
  {
    date: '2025.03',
    title: '富山県立大学 工学部 情報システム工学科 卒業',
    description: ''
  },
  {
    date: '2025.04',
    title:
      '富山県立大学 大学院 工学研究科 電子・情報工学専攻 博士前期課程 入学',
    description: ''
  },
  {
    date: '2026.04 - 2027.03',
    title: 'フィリピン・カナダへ留学',
    description:
      '1年間休学し、夢の実現のためフィリピンで4ヶ月間、カナダで7ヶ月間留学を予定'
  }
]

const timelineDataEn = [
  {
    date: '2021.03',
    title:
      'Graduated from Toyama Prefectural Takaoka Technical High School, Department of Electronic Machinery',
    description: ''
  },
  {
    date: '2021.04',
    title:
      'Entered Toyama Prefectural University, Faculty of Engineering, Department of Information Systems Engineering',
    logo: '/images/AboutMe/logo_tpu.png'
  },
  {
    date: '2021.09 - 2023.06',
    title: 'Part-time job at Hoshino Coffee',
    description:
      'Learned how to interact with customers and employees, and developed my attention to people and communication skills. In 2023, I served as a part-time leader, responsible for training and educating new employees. I also learned drip coffee brewing'
  },
  {
    date: '2022.10 - ',
    title: 'Joined student organization "POLYGON"',
    description:
      'Joined a student organization for students interested in information technology. Actively participated in IoT development projects and hackathons. Also assigned to Toyama Prefectural Government DX promotion work mentioned below',
    logo: '/images/AboutMe/logo_polygon.png'
  },
  {
    date: '2023.04 - 2026.03',
    title:
      'Appointed as DX Promotion Supporter at Toyama Prefectural Government',
    description:
      'Employed as a fixed-term employee to promote DX at the prefectural government through advice from a student perspective, technical support, and business improvement. Served as leader for one year from October 2024. Responsible for business improvement using kintone and Power Automate, and planning and developing a RAG system for budget request reference in the Finance Division.'
  },
  {
    date: '2023.08',
    title: 'Participated in CARTA HOLDINGS Summer Internship "Treasure"',
    description:
      'Participated in a 3-week summer internship "Treasure". Learned through lectures in the first half, and planned and developed in a hackathon format with a team in the second half. Won the Frontend Award at the final presentation',
    logo: '/images/AboutMe/logo_carta.jpg'
  },
  {
    date: '2023.09',
    title: 'Participated in Excite Holdings Summer Internship "Booost!!!"',
    description:
      'Participated in a 1-week summer internship "Booost!!!". Planned and developed a recommendation system for a healthcare consultation service with a team',
    logo: '/images/AboutMe/logo_excite.png'
  },
  {
    date: '2023.10 - 2027.03',
    title: 'Assigned to Iwamoto-Kawasaki Laboratory (SIDLab)',
    description:
      'Conducting research activities, projects in collaboration with external parties, and training juniors as KG leader',
    logo: '/images/AboutMe/logo_sidlab.svg'
  },
  {
    date: '2024.02 - 2024.03',
    title: 'Part-time job at University Administration Office',
    description:
      'As an initiative of student organization POLYGON, worked on DX for part-time employee attendance management. Conducted interviews with the General Affairs Division, reviewed business flows, and implemented a system using Power Automate'
  },
  {
    date: '2025.03',
    title:
      'Graduated from Toyama Prefectural University, Faculty of Engineering, Department of Information Systems Engineering',
    description: ''
  },
  {
    date: '2025.04',
    title:
      "Entered Toyama Prefectural University Graduate School, Master's Program in Electronics and Information Engineering",
    description: ''
  },
  {
    date: '2026.04 - 2027.03',
    title: 'Study abroad in the Philippines and Canada',
    description:
      'Planning to take a year off to study abroad in the Philippines for 4 months and Canada for 7 months to realize my dreams'
  }
]

const awardDataJa = [
  {
    date: '2023.04.27',
    title: 'サポーターズ LT会 出場'
  },
  {
    date: '2023.06.17',
    title: 'サポーターズ 技育CAMPキャラバン@福岡 優秀賞',
    description:
      'YouTubeの海外の動画を、リアルタイムで日本語の音声に変換して再生するChrome拡張「ZUNDAMON-X」を開発',
    image: '/images/AboutMe/2023_技育CAMPキャラバン優秀賞.jpg'
  },
  {
    date: '2023.07.29',
    title: 'サポーターズ 技育CAMPキャラバン@金沢 登壇',
    description:
      '学生団体POLYGONでプロジェクトの管理･参加をするための掲示板「QuestBoard」を開発'
  },
  {
    date: '2023.08.07 - 08.25',
    title:
      '株式会社CARTA HOLDINGS サマーインターンシップ【Treasure】参加 / フロントエンド賞受賞',
    image: '/images/AboutMe/2023_CARTAHOLDINGSフロントエンド賞.jpg'
  },
  {
    date: '2023.08.12',
    title: 'サポーターズ 技育展 登壇',
    description: '「QuestBoard」をブラッシュアップして出場'
  },
  {
    date: '2023.09.02',
    title: 'サポーターズ 技育CAMPアドバンス Vol.3 大賞(優勝)',
    description:
      'YouTube吹き替え翻訳「ZUNDAMON-X」をブラッシュアップして出場。プレゼンを担当し、優勝(大賞)を受賞',
    image: '/images/AboutMe/2023_技育アドバンス優勝.jpg'
  },
  {
    date: '2024.02',
    title: 'とやまローカルメディアハッカソン 受賞',
    image: '/images/AboutMe/とやまローカルメディアハッカソン.jpeg'
  },
  {
    date: '2025.02.26',
    title: 'UBI研究会 Japan UBI Symposium2025 研究発表',
    description:
      '「音楽嗜好の共有を通じた自己開示が受容性に及ぼす影響」というテーマでポスター発表'
  },
  {
    date: '2025.07.19',
    title: '大阪・関西万博 フューチャライフビレッジ 登壇',
    description: '若者に向けて「自分を変えるということ」というテーマで登壇'
  },
  {
    date: '2025.10.09',
    title: 'J-LIS 地方自治情報化推進フェア Microsoftブースで登壇',
    description: '県庁DX推進サポーターの取り組みを発表'
  }
]

const awardDataEn = [
  {
    date: '2023.04.27',
    title: 'Supporters LT Session Participation'
  },
  {
    date: '2023.06.17',
    title: 'Supporters Geek CAMP Caravan @Fukuoka Excellence Award',
    description:
      'Developed "ZUNDAMON-X", a Chrome extension that converts and plays overseas YouTube videos in real-time Japanese audio',
    image: '/images/AboutMe/2023_技育CAMPキャラバン優秀賞.jpg'
  },
  {
    date: '2023.07.29',
    title: 'Supporters Geek CAMP Caravan @Kanazawa Speaker',
    description:
      'Developed "QuestBoard", a bulletin board for managing and participating in projects at student organization POLYGON'
  },
  {
    date: '2023.08.07 - 08.25',
    title:
      'CARTA HOLDINGS Summer Internship [Treasure] Participation / Frontend Award',
    image: '/images/AboutMe/2023_CARTAHOLDINGSフロントエンド賞.jpg'
  },
  {
    date: '2023.08.12',
    title: 'Supporters Geek Exhibition Speaker',
    description: 'Participated with an improved version of "QuestBoard"'
  },
  {
    date: '2023.09.02',
    title: 'Supporters Geek CAMP Advance Vol.3 Grand Prize (Winner)',
    description:
      'Participated with an improved version of YouTube dubbing translation "ZUNDAMON-X". Gave the presentation and won the grand prize',
    image: '/images/AboutMe/2023_技育アドバンス優勝.jpg'
  },
  {
    date: '2024.02',
    title: 'Toyama Local Media Hackathon Award',
    image: '/images/AboutMe/とやまローカルメディアハッカソン.jpeg'
  },
  {
    date: '2025.02.26',
    title: 'UBI Research Group Japan UBI Symposium2025 Research Presentation',
    description:
      'Poster presentation on the theme "The Effect of Self-Disclosure through Music Preference Sharing on Acceptance"'
  },
  {
    date: '2025.07.19',
    title: 'Osaka-Kansai Expo Future Life Village Speaker',
    description:
      'Gave a speech on the theme "What It Means to Change Yourself" for young people'
  },
  {
    date: '2025.10.09',
    title:
      'J-LIS Local Government Informatization Promotion Fair Microsoft Booth Speaker',
    description:
      'Presented the initiatives of Prefectural Government DX Promotion Supporter'
  }
]

const qualificationDataJa = [
  {
    title: '基本情報技術者試験'
  },
  {
    title: '普通自動車第一種運転免許'
  },
  {
    title: '乙種第4類危険物取扱者'
  }
]

const qualificationDataEn = [
  {
    title: 'Fundamental Information Technology Engineer Examination'
  },
  {
    title: "Driver's License (Class 1 Ordinary Vehicle)"
  },
  {
    title: 'Hazardous Materials Engineer (Class 4)'
  }
]

// スキルデータ
const frontendSkills = [
  {
    title: 'Javascript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: 4
  },
  {
    title: 'Typescript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 3
  },
  {
    title: 'React',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 4
  },
  {
    title: 'Next.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    level: 4
  }
]

const backendSkills = [
  {
    title: 'Go',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg',
    level: 2
  },
  {
    title: 'Python',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    level: 3
  },
  {
    title: 'GraphQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    level: 2
  },
  {
    title: 'Postgre SQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    level: 2
  },
  {
    title: 'Supabase',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    level: 3
  }
]

const generalSkills = [
  {
    title: 'C',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    level: 2
  },
  {
    title: 'C#',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    level: 2
  },
  {
    title: 'C++',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    level: 2
  },
  {
    title: 'Java',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    level: 2
  },
  {
    title: 'MATLAB',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg',
    level: 2
  },
  {
    title: 'Arduino',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
    level: 2
  }
]

const cloudSkills = [
  {
    title: 'AWS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    level: 2
  },
  {
    title: 'Azure',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    level: 2
  }
]

const designSkills = [
  {
    title: 'Figma',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    level: 3
  },
  {
    title: 'HTML',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: 3
  },
  {
    title: 'CSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: 3
  },
  {
    title: 'SCSS',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    level: 3
  }
]

const dxSkills = [
  {
    title: 'kintone',
    img: '/images/AboutMe/logo_kintone.jpg',
    level: 3,
    imgClass: 'w-20 h-20 object-contain'
  },
  {
    title: 'Power Automate',
    img: '/images/AboutMe/logo_PowerAutomate.svg',
    level: 3
  },
  {
    title: 'MS365',
    img: '/images/AboutMe/logo_MS365.jpg',
    level: 3
  }
]

const otherSkills = [
  {
    title: 'GitHub',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    level: 4
  },
  {
    title: 'Notion',
    img: '/images/AboutMe/logo_notion.png',
    level: 3
  },
  {
    title: 'Docker',
    img: '/images/AboutMe/logo_docker.png',
    level: 2
  },
  {
    title: 'Final Cut Pro',
    img: '/images/AboutMe/logo_FinalCutPro.png',
    level: 3
  },
  {
    title: 'Premiere Pro',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg',
    level: 3
  },
  {
    title: 'Adobe Lightroom',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg',
    level: 3
  },
  {
    title: 'Unity',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg',
    level: 2
  }
]

// タイムラインアイテムコンポーネント
const ExTimelineItem = ({ date, title, description, logo, isLast }) => {
  return (
    <div className="ml-5 relative pb-8 last:pb-0 flex">
      {/* 左側: ドットと縦線 */}
      <div className="mt-1 w-9 relative">
        <div className="w-[15px] h-[15px] bg-blue-500 rounded-full z-[1] relative" />
        {!isLast && (
          <div className="absolute top-5 left-[6px] -bottom-8 w-[3px] bg-blue-500" />
        )}
      </div>

      {/* 中央: 日付 */}
      <div className="w-20 md:w-[120px]">
        <p className="text-[15px]">{date}</p>
      </div>

      {/* 右側: タイトルと説明 */}
      <div className="w-full md:w-[510px] flex-1">
        <p className="text-[17px] font-bold pb-1">{title}</p>
        <p className="text-[15px]">{description}</p>
      </div>

      {/* ロゴ（オプション） */}
      {logo && (
        <div className="ml-10 hidden lg:block">
          <Image
            src={logo}
            alt="Logo"
            width={80}
            height={80}
            className="w-20 h-auto"
          />
        </div>
      )}
    </div>
  )
}

// シンプルなタイムラインアイテムコンポーネント（実績用）
const TimelineItem = ({ date, title, description, image, isLast }) => {
  return (
    <div className="ml-5 relative pb-8 last:pb-0 flex">
      {/* 左側: ドットと縦線 */}
      <div className="mt-1 w-9 relative">
        <div className="w-[15px] h-[15px] bg-blue-500 rounded-full z-[1] relative" />
        {!isLast && (
          <div className="absolute top-5 left-[6px] -bottom-8 w-[3px] bg-blue-500" />
        )}
      </div>

      {/* 中央: 日付 */}
      <div className="w-20 md:w-[120px]">
        <p className="text-[15px]">{date}</p>
      </div>

      {/* 右側: タイトルと説明 */}
      <div className="w-full md:w-[510px] flex-1">
        <p className={`text-[17px] font-bold ${description ? 'pb-1' : ''}`}>
          {title}
        </p>
        {description && <p className="text-[15px]">{description}</p>}
        {image && (
          <div className="mt-3">
            <Image
              src={image}
              alt={title}
              width={280}
              height={200}
              className="rounded-lg shadow-sm w-auto h-auto max-w-full max-h-[300px]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

// スキルカードコンポーネント
const SkillCard = ({ skills }) => {
  if (skills.length === 0) {
    return <p className="text-gray-500">準備中...</p>
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(150px,100%),150px))] gap-4 justify-center">
      {skills.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center py-2 px-2 w-full h-full"
        >
          <div className="h-20 flex items-center justify-center mb-1">
            <Image
              src={card.img}
              alt={card.title}
              width={56}
              height={56}
              className={card.imgClass || 'w-14 h-14 object-contain'}
            />
          </div>
          <p className="font-medium text-center leading-[1.1] w-full break-words">
            {card.title}
          </p>
          {/* <span className="flex justify-center gap-0">
            {generateStars(card.level)}
          </span> */}
        </div>
      ))}
    </div>
  )
}

const AboutMe = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { locale } = router

  // localeに応じてデータを切り替え
  const timelineData = locale === 'en' ? timelineDataEn : timelineDataJa
  const awardData = locale === 'en' ? awardDataEn : awardDataJa
  const qualificationData =
    locale === 'en' ? qualificationDataEn : qualificationDataJa

  return (
    <Layout title="About Me">
      <div>
        <div>
          <h3 className="text-xl mb-2 font-bold">My Skills</h3>
          <p className="text-[15px] text-gray-700 pb-4">
            {t('aboutMe.skillsIntro')}
          </p>

          {/* Frontend */}
          <h5 className="text-lg font-bold pb-2">Frontend</h5>
          <p className="text-[15px] text-gray-700 pb-4">
            {t('aboutMe.frontend')}
          </p>
          <SkillCard skills={frontendSkills} />

          {/* Backend */}
          <h5 className="text-lg font-bold pb-2 pt-4">Backend</h5>
          <p className="text-[15px] text-gray-700 pb-4">
            {t('aboutMe.backend')}
          </p>
          <SkillCard skills={backendSkills} />

          {/* General */}
          <h5 className="text-lg font-bold pb-2 pt-4">General</h5>
          <p className="text-[15px] text-gray-700 pb-4">
            {t('aboutMe.general')}
          </p>
          <SkillCard skills={generalSkills} />

          {/* Cloud */}
          <h5 className="text-lg font-bold pb-2 pt-4">Cloud</h5>
          <p className="text-[15px] text-gray-700 pb-4">{t('aboutMe.cloud')}</p>
          <SkillCard skills={cloudSkills} />

          {/* Design */}
          <h5 className="text-lg font-bold pb-2 pt-4">Design</h5>
          <p className="text-[15px] text-gray-700 pb-4">
            {t('aboutMe.design')}
          </p>
          <SkillCard skills={designSkills} />

          {/* DX推進 */}
          <h5 className="text-lg font-bold pb-2 pt-4">DX推進</h5>
          <p className="text-[15px] text-gray-700 pb-4">
            {t('aboutMe.dxPromotion')}
          </p>
          <SkillCard skills={dxSkills} />

          {/* Other */}
          <h5 className="text-lg font-bold pb-2 pt-4">Other</h5>
          <p className="text-[15px] text-gray-700 pb-4">{t('aboutMe.other')}</p>
          <SkillCard skills={otherSkills} />
        </div>

        <div className="mt-10">
          <h3 className="text-xl mb-4 font-bold">Experience</h3>
          {timelineData.map((item, index) => (
            <ExTimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              logo={item.logo}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl mb-4 font-bold">Awards</h3>
          {awardData.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              image={item.image}
              isLast={index === awardData.length - 1}
            />
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl mb-4 font-bold">Qualifications</h3>
          <ul className="list-disc ml-8 space-y-3">
            {qualificationData.map((item, index) => (
              <li key={index} className="text-[17px]">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutMe

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}
