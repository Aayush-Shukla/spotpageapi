import Head from 'next/head'
import useSwr from 'swr'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import SongInfo from '../lib/songinfo'
// const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Home({ allPostsData }) {

  // const { data, error } =  useSwr('/api/', fetcher)
  // if (error) return <div>Failed to load users</div>
  // if (!data) return <div>Loading...</div>
  // console.log(data)
  return (

    <div> 
     <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
 <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
 <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>

    <script src="https://use.fontawesome.com/0631e1eff5.js"></script>
    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4SJCQNB3DJ"></script>
    
    <SongInfo/>
    
    
    </div>

  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
