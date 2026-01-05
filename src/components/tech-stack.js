const TechStack = ({ skillStr }) => {
  if (!skillStr) {
    return null
  }

  return (
    <div className="mt-4">
      <img
        src={`https://skillicons.dev/icons?i=${skillStr}`}
        alt="Skill Icons"
        className="max-w-full h-auto"
      />
    </div>
  )
}

export default TechStack
