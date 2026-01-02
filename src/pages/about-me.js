import Image from 'next/image'
import Layout from '../components/layouts/article'

const timelineData = [
  {
    date: '2021.03',
    title: '富山県立高岡工芸高等学校 電子機械科 卒業',
    description: ''
  },
  {
    date: '2021.04',
    title: '富山県立大学 工学部 情報システム工学科 入学',
    description:
      '2022年12月に授業をきっかけでプログラミングを開始。主にReact（Typescript）やNext、Goを使用してWebアプリを開発。UI/UX面にとても関心があり、Figmaを使用したデザインやMUI･Tailwind･MantainなどのUIライブラリ等を使用して実装までを行う。2023年4月に登壇したLT大会と、6月に参加したハッカソンをきっかけに、他のエンジニアとの技術的な交流も積極的に行っている。',
    logo: '/images/logo_tpu.png'
  },
  {
    date: '2021.09 - 2023.06',
    title: '星乃珈琲店 アルバイト',
    description:
      'お客様や従業員との接し方を学び、人への気配りやコミュニケーション能力を磨いてきた。2023年にはバイトリーダーを務め、新人指導及び教育を担当'
  },
  {
    date: '2022.10 - ',
    title: '学生団体「POLYGON」 加入',
    description: '富山県立大学で情報分野に興味･関心がある学生が集う学生団体',
    logo: '/images/logo_polygon.png'
  },
  {
    date: '2023.04 - 2026.03',
    title: '富山県庁 DX推進サポーター 任命',
    description:
      '雇用形態：会計年度任用職員。富山県庁内で抱えている課題の改善（業務改善）を行っている。実際に県庁の方々とのヒアリング･ミーティングを行いながら、問題を根本から解決するために学生視点からの提案･解決を行っている。'
  },
  {
    date: '2023.08',
    title: '株式会社CARTA HOLDINGS サマーインターン「Treasure」 参加',
    description:
      'サマーインターン「Treasure」に参加（3week）。前半 講義 / 後半 チームで企画･開発。最終発表では フロントエンド賞 を受賞',
    logo: '/images/logo_carta.jpg'
  },
  {
    date: '2023.09',
    title:
      'エキサイトホールディングス株式会社 サマーインターン「Booost!!!」 参加',
    description:
      'サマーインターン「Booost!!!」に参加（5day）。ヘルスケア事業のお悩み相談サービスのレコメンドシステムをチームで企画･開発',
    logo: '/images/logo_excite.png'
  },
  {
    date: '2023.10 - 2027.03',
    title: '岩本・河崎研究室（SIDLab）配属',
    description: '',
    logo: '/images/logo_sidlab.svg'
  },
  {
    date: '2024.02 - 2024.03',
    title: '大学事務局 アルバイト',
    description:
      'POLYGONの取り組みとして、アルバイトの勤怠管理DXを行った。具体的には、総務課へのヒアリング、業務フローの見直し、MS製品（PowerAutomateなど）を使用したシステムの実装などを担当'
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
  }
]

const awardData = [
  {
    date: '2023.04.27',
    title: 'サポーターズ LT会 出場'
  },
  {
    date: '2023.06.17',
    title: 'サポーターズ 技育CAMPキャラバン@福岡 優秀賞',
    description:
      'YouTubeの海外の動画を、リアルタイムで日本語の音声に変換して再生するChrome拡張「ZUNDAMON-X」を開発'
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
      '株式会社CARTA HOLDINGS サマーインターンシップ【Treasure】参加 / フロントエンド賞受賞'
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
      'YouTube吹き替え翻訳「ZUNDAMON-X」をブラッシュアップして出場。プレゼンを担当し、優勝（大賞）を受賞'
  },
  {
    date: '2025.02.26',
    title: 'UBI研究会 Japan UBI Symposium2025 研究発表',
    description:
      '「音楽嗜好の共有を通じた自己開示が受容性に及ぼす影響」というテーマでポスター発表'
  }
]

const qualificationData = [
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
    title: 'TypeScript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    level: 3
  },
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
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    level: 3
  },
  {
    title: 'Power Automate',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
    level: 3
  },
  {
    title: 'MS365',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
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
    title: 'PostgreSQL',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    level: 2
  },
  {
    title: 'Supabase',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    level: 3
  },
  {
    title: 'Docker',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    level: 2
  },
  {
    title: 'Final Cut Pro',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg',
    level: 3
  },
  {
    title: 'Premiere Pro',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg',
    level: 3
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
const TimelineItem = ({ date, title, description, isLast }) => {
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {skills.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center py-4 px-2 w-full h-full"
        >
          <Image
            src={card.img}
            alt={card.title}
            width={56}
            height={56}
            className="w-14 h-14 object-contain mb-2"
          />
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

// 星アイコンコンポーネント
const StarIcon = ({ filled }) => (
  <svg
    width="20px"
    height="19px"
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {filled ? (
      <path
        d="M10 3.90594L11.2601 6.93547L11.6119 7.78141L12.5252 7.85463L15.7958 8.11683L13.3039 10.2514L12.6081 10.8474L12.8207 11.7386L13.582 14.9302L10.7819 13.2199L10 12.7423L9.21812 13.2199L6.418 14.9302L7.17931 11.7386L7.39189 10.8474L6.69608 10.2514L4.2042 8.11683L7.47484 7.85463L8.3881 7.78141L8.73995 6.93547L10 3.90594Z"
        fill="#F1C644"
        stroke="#F1C644"
        strokeWidth="3"
      />
    ) : (
      <path
        d="M10 2.60396L11.7217 6.74345L11.9563 7.30742L12.5651 7.35623L17.0341 7.7145L13.6292 10.6311L13.1653 11.0285L13.307 11.6226L14.3473 15.9835L10.5213 13.6466L10 13.3282L9.47875 13.6466L5.65272 15.9835L6.69296 11.6226L6.83468 11.0285L6.3708 10.6311L2.96595 7.7145L7.43488 7.35623L8.04372 7.30742L8.27829 6.74345L10 2.60396Z"
        stroke="#F1C644"
        strokeWidth="2"
      />
    )}
  </svg>
)

// 星を生成する関数
const generateStars = level => {
  const maxLevel = 5
  const stars = []

  for (let i = 1; i <= maxLevel; i++) {
    stars.push(<StarIcon key={i} filled={i <= level} />)
  }

  return stars
}

const AboutMe = () => (
  <Layout title="About Me">
    <div>
      <div>
        <h3 className="text-xl mb-4 font-bold">Development Skills</h3>

        {/* Frontend */}
        <h5 className="text-lg font-bold pb-2">Frontend</h5>
        <p className="text-[15px] text-gray-700 pb-4">
          2022年12月より。HTML、CSS、JS/TS、CSSフレームワーク、React、Next.jsを使用。技育CAMPハッカソンで優秀賞、アドバンスで大賞受賞。CARTA
          HOLDINGSインターンでUI/UX担当。
        </p>
        <SkillCard skills={frontendSkills} />

        {/* Backend */}
        <h5 className="text-lg font-bold pb-2 pt-4">Backend</h5>
        <p className="text-[15px] text-gray-700 pb-4">
          2023年8月より。Go、GraphQL、Docker、Firebase、Supabaseを使用。ハッカソンでGo（Echo、GORM）を用いたREST
          API開発全般を担当。Spotify Web
          APIやSupabaseを用いた研究用アプリケーション開発。
        </p>
        <SkillCard skills={backendSkills} />

        {/* Cloud */}
        <h5 className="text-lg font-bold pb-2 pt-4">Cloud</h5>
        <p className="text-[15px] text-gray-700 pb-4">
          2025年3月より。研究室のインフラ整備としてAWSクラウド環境整備を担当。Amazon
          BedrockやAzure OpenAI Serviceを用いた開発を学習中。
        </p>
        <SkillCard skills={cloudSkills} />

        {/* Design */}
        <h5 className="text-lg font-bold pb-2 pt-4">Design</h5>
        <p className="text-[15px] text-gray-700 pb-4">
          UI/UX面に強い関心があり、Figmaを使用したデザインから実装まで一貫して対応。MUI、Tailwind、Mantineなどのライブラリを活用。
        </p>
        <SkillCard skills={designSkills} />

        {/* DX推進 */}
        <h5 className="text-lg font-bold pb-2 pt-4">DX推進</h5>
        <p className="text-[15px] text-gray-700 pb-4">
          富山県庁DX推進サポーターとしてチームリーダーを務める（2023年4月〜現在）。kintone、FormBridge、Power
          Automateを活用した業務改善。MS365普及促進のための情報発信。生成AI活用チーム責任者としてRAGを用いた庁内検索システムの企画・開発。
        </p>
        <SkillCard skills={dxSkills} />

        {/* Other */}
        <h5 className="text-lg font-bold pb-2 pt-4">Other</h5>
        <p className="text-[15px] text-gray-700 pb-4">
          バージョン管理、データベース、コンテナ技術、動画編集など幅広いツールを活用。
        </p>
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

export default AboutMe
