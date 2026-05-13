import Head from 'next/head'
import CVPage from '../components/CVPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Camilo A. Lopez Restrepo — Portfolio & CV</title>
        <meta name="description" content="CV online moderno enfocado en desarrollo, análisis de datos y proyectos digitales." />
      </Head>
      <CVPage />
    </>
  )
}