import React from 'react'
import Head from 'next/head'
import { NotionAPI } from 'notion-client'
import { Collection, CollectionRow, Modal, NotionRenderer } from 'react-notion-x'

export async function getStaticProps(context) {
  const notion = new NotionAPI()
  const recordMap = await notion.getPage(context.params.pageId);

  return { props: { recordMap } }
}

export async function getStaticPaths() {
  const pageList = [
    '153c50eb0ad74f5b8061c994285307f6',
    '3c238e5e90c94d8b8161c132e955438d',
    '6f4c380859074eff85baf456976789d0',
    'f176d08c0af14e0881dd19346aea8a74',
    '190a4ace924c4cdf88dcbb0115cb649c',
    'e751dc703f2140368c414076b46d301a',
    'ba7e0c8b68e14ec2893adb8cc47692a4',
    'b8d5629ea373498ea07f22bdf3f81f12',
  ]
  return {
    paths: pageList.map((id)=>({
      params: { pageId: id }
    })),
    fallback: true // false or 'blocking'
  };
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
        }} recordMap={recordMap} fullPage={true} darkMode={true} />

    </>
  )
}
