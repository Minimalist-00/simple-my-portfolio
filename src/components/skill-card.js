import Image from 'next/image'

const SkillCard = ({ skills }) => {
  if (!skills || skills.length === 0) {
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
        </div>
      ))}
    </div>
  )
}

export default SkillCard
