import React from 'react'
import Head from 'next/head'
import { NotionAPI } from 'notion-client'
import { Collection, CollectionRow, Modal, NotionRenderer } from 'react-notion-x'

export async function getServerSideProps(context) {

    const notion = new NotionAPI()

    let recordMap;
    try {
      recordMap = await notion.getPage(context.params.pageId);
    } catch (error) {
      recordMap = false;
    }

    return { props: { recordMap } }
}

export default function Home({recordMap}) {
  if (Boolean(recordMap) === false){
    return (
      <>
        <Head>
          <title>Not Found.</title>
          <meta name="description" content="Not Found." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <code style={{color:'black'}}>Not Found.</code>
      </>
    )
  }
  else {
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
          }} recordMap={recordMap} fullPage={true} darkMode={true} />

      </>
    )
  }
}
