import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      {/* <div>
        <h3>fgo recovery</h3>
      </div> */}
    </>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
