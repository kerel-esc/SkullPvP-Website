import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const screenshots = [
  {
    src: '/gallery/arena-01.jpg',
    alt: 'A dark stone structure and lit bridge beneath a purple night sky.',
    label: 'Arena view',
  },
  {
    src: '/gallery/arena-02.jpg',
    alt: 'A stone arena courtyard at night with a tower, paths, and warm lights.',
    label: 'Arena view',
  },
  {
    src: '/gallery/arena-03.jpg',
    alt: 'An overhead view of a sunken stone arena with illuminated platforms.',
    label: 'Arena view',
  },
  {
    src: '/gallery/arena-04.jpg',
    alt: 'A wide view across the arena courtyard and its central stone structure.',
    label: 'Arena view',
  },
  {
    src: '/gallery/arena-05.jpg',
    alt: 'A bird’s-eye view of the walled arena and its central tower.',
    label: 'Arena view',
  },
  {
    src: '/gallery/arena-06.jpg',
    alt: 'A daylight view of a large skull-shaped stone build in the arena.',
    label: 'Server view',
  },
  {
    src: '/gallery/arena-07.jpg',
    alt: 'The server hub with cosmetics and leaderboard displays.',
    label: 'Server hub',
  },
  {
    src: '/gallery/arena-08.jpg',
    alt: 'A second daylight angle of the skull-shaped stone build and arena walls.',
    label: 'Server view',
  },
]

function GalleryPage() {
  const [activeScreenshot, setActiveScreenshot] = useState(null)
  const previewDialogRef = useRef(null)

  useEffect(() => {
    const dialog = previewDialogRef.current

    if (activeScreenshot && dialog && !dialog.open) {
      dialog.showModal()
    } else if (!activeScreenshot && dialog && dialog.open) {
      dialog.close()
    }
  }, [activeScreenshot])

  return (
    <>
      <div className="page-top-space" />
      <main id="main-content">
        <section className="subpage-hero" aria-labelledby="gallery-title">
          <div className="container">
            <a className="back-link" href="/#top">← Back to Skull PvP</a>
            <p className="section-kicker">The Skull PvP server</p>
            <h1 className="subpage-title" id="gallery-title">Arena screenshots</h1>
            <p className="subpage-intro">
              Take a closer look at the arenas and server hub.
            </p>
          </div>
        </section>
        <section className="gallery-page-section" aria-label="Server screenshots">
          <div className="container screenshots-grid">
            {screenshots.map((screenshot, index) => (
              <Reveal
                as="figure"
                className="screenshot-card"
                key={screenshot.src}
                delay={(index % 3) * 70}
              >
                <button
                  className="screenshot-preview-trigger"
                  type="button"
                  aria-label={`Preview ${screenshot.label.toLowerCase()} screenshot ${index + 1}`}
                  onClick={() => setActiveScreenshot(screenshot)}
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width="1600"
                    height="856"
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </button>
                <figcaption>
                  <span>{screenshot.label}</span>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <dialog
        ref={previewDialogRef}
        className="image-preview-dialog"
        aria-labelledby="image-preview-title"
        onClose={() => setActiveScreenshot(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close()
          }
        }}
      >
        {activeScreenshot && (
          <>
            <div className="image-preview-header">
              <h2 className="image-preview-title" id="image-preview-title">
                Screenshot preview
              </h2>
              <button
                className="image-preview-close"
                type="button"
                aria-label="Close screenshot preview"
                onClick={() => previewDialogRef.current?.close()}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <img
              className="image-preview-image"
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
            />
          </>
        )}
      </dialog>
    </>
  )
}

export default GalleryPage
