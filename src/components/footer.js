const Footer = () => {
  return (
    <div className="text-center opacity-40 text-sm">
      &copy; {new Date().getFullYear()} Koki Nakagawa. All Rights Reserved.
      <div className="mt-2 text-xs">
        Based on{' '}
        <a
          href="https://www.craftz.dog/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Takuya Matsuyama&apos;s website
        </a>
      </div>
    </div>
  )
}

export default Footer
