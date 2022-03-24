import React from 'react'
import Head from 'next/head'
import { NotionAPI } from 'notion-client'
import { Collection, CollectionRow, Modal, NotionRenderer } from 'react-notion-x'

export async function getStaticProps() {

  const notion = new NotionAPI()
  const recordMap = await notion.getPage('3c238e5e90c94d8b8161c132e955438d');

  return { props: { recordMap }, revalidate: 1 }

}

export default function Home({recordMap}) {
  return (
    <>
      <Head>
        <title>Careers - Cupoc, Inc.</title>
        <meta name="description" content="Careers at Cupoc, Inc." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <NotionRenderer components={ {
            collection: Collection,
            collectionRow: CollectionRow,
            modal: Modal,
        }}
        rootPageId={'3c238e5e90c94d8b8161c132e955438d'}
        recordMap={recordMap} fullPage={true} darkMode={true} />

    </>
  )
}
