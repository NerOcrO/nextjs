import Link from 'next/link'

import styles from './Home.module.css'

export default function Recherche() {
  return (
    <main className={styles['main']}>
      <Link href="/">
        {'Home'}
      </Link>

      <h1 className={styles['title']}>
        {'RECHERCHE'}
      </h1>

      <p className={styles['description']}>
        {'Get started by editing'}
        {' '}
        <code className={styles['code']}>
          {'pages/index.tsx'}
        </code>
      </p>

      <div className={styles['grid']}>
        <a
          className={styles['card']}
          href="https://nextjs.org/docs"
        >
          <h2>
            {'Documentation '}
          </h2>
          <p>
            {'Find in-depth information about Next.js features and API.'}
          </p>
        </a>

        <a
          className={styles['card']}
          href="https://nextjs.org/learn"
        >
          <h2>
            {'Learn '}
          </h2>
          <p>
            {'Learn about Next.js in an interactive course with quizzes!'}
          </p>
        </a>

        <a
          className={styles['card']}
          href="https://github.com/vercel/next.js/tree/canary/examples"
        >
          <h2>
            {'Examples '}
          </h2>
          <p>
            {'Discover and deploy boilerplate example Next.js projects.'}
          </p>
        </a>

        <a
          className={styles['card']}
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>
            {'Deploy '}
          </h2>
          <p>
            {'Instantly deploy your Next.js site to a public URL with Vercel.'}
          </p>
        </a>
      </div>
    </main>

  )
}
