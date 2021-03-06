import React, { FC, ReactElement, ReactNode } from 'react'
import styles from './MainLayout.module.css'

import Head from 'next/head'
import { Navbar } from '../Navbar'

interface Props{
  children: ReactNode
}

export const MainLayout:FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    
        <Navbar />
    
        <main className={styles.main}>
          { children }
        </main>
    
    
      </div>
      )
}
