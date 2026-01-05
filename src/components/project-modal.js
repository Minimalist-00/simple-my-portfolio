import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import MarkdownRenderer from './markdown-renderer'

/**
 * プロジェクト詳細モーダルコンポーネント
 * カードをクリックした時に表示されるポップアップ
 *
 * @param {boolean} isOpen - モーダルの開閉状態
 * @param {function} onClose - モーダルを閉じる関数
 * @param {object} project - 表示するプロジェクトデータ
 * @param {boolean} isLoading - コンテンツ読み込み中かどうか
 */
const ProjectModal = ({ isOpen, onClose, project, isLoading = false }) => {
  const { t } = useTranslation('common')
  // ESCキーでモーダルを閉じる & 背景スクロール無効化（スクロールバーは維持）
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      // 現在のスクロール位置を保存
      const scrollY = window.scrollY

      // 背景を固定してスクロールを無効化（スクロールバーは残る）
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'

      document.addEventListener('keydown', handleEsc)

      return () => {
        // クリーンアップ: 元のスクロール位置に戻す
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.width = ''
        window.scrollTo(0, parseInt(scrollY || '0') * -1)

        document.removeEventListener('keydown', handleEsc)
      }
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2">
          {/* Overlay with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content with fade and scale animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-white rounded-2xl max-h-[90vh] max-w-4xl w-full mx-auto overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="pt-6 pb-2 px-4">
              <div className="flex items-center justify-between max-w-[605px] mx-auto w-full">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="overflow-y-auto">
              <div className="p-6">
                <div className="max-w-[605px] mx-auto w-full">
                  {isLoading ? (
                    <div className="flex justify-center py-10">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* タグセクション */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                tag.color === 'blue'
                                  ? 'bg-blue-100 text-blue-800'
                                  : tag.color === 'green'
                                    ? 'bg-green-100 text-green-800'
                                    : tag.color === 'red'
                                      ? 'bg-red-100 text-red-800'
                                      : tag.color === 'yellow'
                                        ? 'bg-yellow-100 text-yellow-800'
                                        : tag.color === 'purple'
                                          ? 'bg-purple-100 text-purple-800'
                                          : tag.color === 'pink'
                                            ? 'bg-pink-100 text-pink-800'
                                            : tag.color === 'orange'
                                              ? 'bg-orange-100 text-orange-800'
                                              : tag.color === 'cyan'
                                                ? 'bg-cyan-100 text-cyan-800'
                                                : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {t(`tags.${tag.id}`)}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* スキルアイコン */}
                      {project.skills && project.skills.length > 0 && (
                        <div className="mt-4">
                          <h3 className="text-sm font-bold mb-2">
                            {t('technicalStack')}
                          </h3>
                          <div>
                            <img
                              src={`https://skillicons.dev/icons?i=${project.skills.join(',')}`}
                              alt="Skill Icons"
                            />
                          </div>
                        </div>
                      )}

                      {/* マークダウンコンテンツ */}
                      {project.content ? (
                        <MarkdownRenderer content={project.content} />
                      ) : (
                        <div className="text-center py-10 text-gray-400">
                          <p className="text-lg">No Contents</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
