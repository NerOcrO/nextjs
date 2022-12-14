import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../components/Home.module.css'

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>
          {'Create Next App'}
        </title>
        <meta
          content="Generated by create next app"
          name="description"
        />
        <link
          href="favicon.ico"
          rel="icon"
        />
      </Head>

      <main className={styles['main']}>
        <Link href="recherche">
          {'Une autre page'}
        </Link>
        <h1 className={styles['title']}>
          {'Welcome to '}
          <a href="https://nextjs.org">
            {'Next.js!'}
          </a>
        </h1>
      </main>

      <footer className={styles['footer']}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          {'Powered by '}
          <span className={styles['logo']}>
            <Image
              alt="Vercel Logo"
              height={16}
              src="vercel.svg"
              width={72}
            />
          </span>
        </a>
      </footer>
    </div>
  )
}
