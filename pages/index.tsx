import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import GameHeader from '@/components/GameHeader';
import Wordoku from '@/components/Wordoku';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>WORDOKU</title>
        <meta name="description" content="wordoku" />
        <meta name="description" content="scrabble poker" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       <GameHeader />
       <Wordoku />
      </main>
    </>
  )
}
