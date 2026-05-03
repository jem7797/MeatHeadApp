import { useEffect } from 'react'

type LegalDocumentPageProps = {
  src: string
  title: string
}

export default function LegalDocumentPage({ src, title }: LegalDocumentPageProps) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])

  return (
    <iframe
      src={src}
      title={title}
      style={{
        width: '100%',
        height: '100dvh',
        border: 'none',
        display: 'block',
      }}
    />
  )
}
