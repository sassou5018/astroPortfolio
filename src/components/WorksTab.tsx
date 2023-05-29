import React from 'react'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Works from '../components/Works'
import theme from '../theme'
import ToggleColorMode from './toggleColorMode'
import ColorProvider from './ColorProvider'

const works = [
    {cs: [
      {title: 'Cowardice', description: "Testing out NextJS13 Beta features (Serverside components). Simple blog", image:"https://iili.io/HOHviEx.md.png", link:"https://cowardice.benahmed.tech", isLive: true, github: "https://github.com/sassou5018/cowardice", tag:["NextBeta", "Incomplete"] },
      {title: 'Dark Fools', description: "A simple 2D Platformer / RPG made in Unity for a class project", image: 'https://iili.io/HOHvd57.md.png', link:"https://github.com/sassou5018/Dark-Fools/releases/tag/dev-build", github:"https://github.com/sassou5018/Dark-Fools", tag:["Unity", "C#"]},
      {title: 'Lutris Artwork Downloader Tool', description:"A simple tool that downloads artwork for your lutris library of games if you're lazy", link:"https://github.com/sassou5018/lutris-art-downloader", github:"https://github.com/sassou5018/lutris-art-downloader", image:"", tag:["NodeJS", "Linux", "CLI"]},
      {title:'Lyricfy', description: "Small NextJs app that checks your currently playing track on spotify and returns the lyrics for it from genius.", image:"https://iili.io/HnmB84p.md.png", link:"https://lyricfy.benahmed.tech/", tag:["NextJS", "Spotify"], isLive: true, github:"https://github.com/sassou5018/lyricfy"},
      {title: 'GeoLoc API and Front School Project', description: "Save businesses and places of interest through /create Find places near you through /get", image:"https://iili.io/HnC9rHF.th.png", link:"https://geolocsoa.netlify.app", tag:["ASP.NET", "Postgres", "Vite"], github:"https://github.com/sassou5018/geolocfront"},
      {title:'Gestionfuite', description: "Simple CRUD App for managing and creating user complaints. Made with NEXTJS and MongoDB.", image:"https://iili.io/bXQMYu.png", link:"https://gestionfuite.herokuapp.com/", tag:["NextJS", "MongoDB"], github:"https://github.com/sassou5018/gestionfuite"},
      {title: 'Multiplayer Snake Game', description: "Simple Snake Game i used to test out NodeJS's Socket.IO Module.", image: 'https://yassinebenahmed.herokuapp.com/assets/img/CS%20Projects/MPS_CSP.png', link: 'https://snake-socket-test.herokuapp.com/', tag: 'SocketIO', github:"https://github.com/sassou5018/SnakeGame"},
      {title: 'TimeStamp Microservice API', description: "Simple API that returns a timestamp. I made this as a part of FCC's projects.", image: 'https://yassinebenahmed.herokuapp.com/assets/img/CS%20Projects/TSMAPI_CSP.png', link: 'https://timestampfcc-test.herokuapp.com/', tag: 'Express', github:"https://github.com/sassou5018/boilerplate-project-timestamp"},
      {title: 'ISAMM Fighter', description: "A simple fighting game made with HTML Canvas and JS.", image: 'https://iili.io/HnmKd1S.md.png', link: 'https://isammfighter.kanyewestlikesfingersinhisass.ninja', tag: 'JS', isLive: true, github:"https://github.com/sassou5018/ISAMMFighter"},
      {title: 'Request Header Parser Microservice API', description: "Simple API that returns the IP address, language and operating system for your browser.", image: 'https://yassinebenahmed.herokuapp.com/assets/img/CS%20Projects/HPMAPI_CSP.png', link: 'https://fcc-project-test.herokuapp.com/', tag: 'Express', github:"https://github.com/sassou5018/boilerplate-project-headerparser"},
      {title: 'URL Shortener Microservice API', description: "Simple API that returns a shortened URL.", image: 'https://yassinebenahmed.herokuapp.com/assets/img/CS%20Projects/clipboard-image.png', link:"https://urlshortner-1ntj.onrender.com", tag: 'Express', github:"https://github.com/sassou5018/boilerplate-project-urlshortener"},
      {title: 'Exercise Tracker App', description: "Fullstack exercise tracker made as part of FCC's certification projects.", image: 'https://yassinebenahmed.herokuapp.com/assets/img/CS%20Projects/clipboard-image-1.png', link: 'https://extracker1.herokuapp.com', tag: 'Express', github:"https://github.com/sassou5018/boilerplate-project-exercisetracker"},
      {title: 'File Metadata Microservice API', description: "Simple API that returns the size of a file.", image: 'https://yassinebenahmed.herokuapp.com/assets/img/CS%20Projects/clipboard-image-2.png', link: 'https://requestheaderfcc-test.herokuapp.com', tag: 'Express', github:"https://github.com/sassou5018/boilerplate-project-filemetadata"},
    ]},
    {articles: [
      {title: 'Mariya Takeuchi’s Plastic Love', description: '', image: 'https://iili.io/Hnm9IHv.md.png', link: 'https://web.archive.org/web/20210614205425/https://www.jetunisia.org/2019/05/26/mariya-takeuchis-plastic-love/', tag: 'Culture'},
      {title: 'Final Fantasy VII Remake Release Date Announced at E3', description: '', image: 'https://s9.gifyu.com/images/ff7.gif', link: 'https://web.archive.org/web/20210614202744/https://www.jetunisia.org/2019/06/17/final-fantasy-vii-remake-release-data-announced-at-e3/', tag: 'Gaming'},
      {title: 'Sentô Kaishi 4: JSC Simply Pulls Off the Event of the Year', description: 'Event Coverage', image: 'https://iili.io/HnmHd1n.md.png', link:'https://web.archive.org/web/20210614213343/https://www.jetunisia.org/2019/12/26/sento-kaishi-4-jsc-simply-pulls-off-the-event-of-the-year/', tag: 'Culture'},
      {title: 'Youtube and obscure Japanese EPs', description: '', image: 'https://iili.io/HnmJPSa.md.png', link:'https://docs.google.com/document/d/1SfP_fgzLVdAIMKHyUrjZec-3pqBkoch5g798HRck38M/edit?usp=sharing', tag: 'Culture'},
      {title: 'Space Jazz', description: 'Link breaks sometimes just refresh the page', image: 'https://cdn.arstechnica.net/wp-content/uploads/2018/11/cowboy-bebop-return-800x641.jpg', link:'https://cowardice.benahmed.tech/article/rlfeumaitkp2gjp', tag: 'Culture'},
      {title: 'Is blockchain going to kill us all ?', description:"", image: 'https://media-exp1.licdn.com/dms/image/C4D12AQEdBeYxAK6GMQ/article-cover_image-shrink_720_1280/0/1637781141575?e=1676505600&v=beta&t=rhbau-5zcZh6Xd0K3pf8aNEW0-QcCXdaxHoGYCzoCsc', link:'https://www.linkedin.com/pulse/blockchain-going-kill-us-all-orenda-junior-enterprise/', tag: 'Tech'},
      {title: "Starlink: A reality or a rich man's fantasy", description:"", image: 'https://media-exp1.licdn.com/dms/image/C4D12AQHXsYNbn_HEiQ/article-cover_image-shrink_720_1280/0/1613642833298?e=1676505600&v=beta&t=gZWercl8EtFVRAmdHa-4qDgvSFPDgODHaD50fNeFDa0', link:'https://www.linkedin.com/pulse/starlink-reality-rich-mans-fantasy-orenda-junior-enterprise/', tag: 'Tech'},
      {title: "Are smart homes worth it?", description:"", image: 'https://media-exp1.licdn.com/dms/image/C4D12AQECph-IOxqWhQ/article-cover_image-shrink_720_1280/0/1613123067630?e=1676505600&v=beta&t=uCFLlhfTKXZkyXoa2AarIfbRj0EJj9i5MyCkI-wo4rk', link:'https://www.linkedin.com/pulse/smart-homes-worth-orenda-junior-enterprise/', tag: 'Tech'},
      {title: "Takashi Murakami", description:"", image:'https://atwoodmagazine.com/wp-content/uploads/2018/06/uaNIo6X-1050x700.jpg', link:'https://docs.google.com/document/d/14vGAgdkU_IZe1blWxp1sFAX48050yyemOPUQ8jZ53pk/edit?usp=sharing', tag: 'Culture'},
      {title: "Retrospect on anime classics", description:"", image:'https://c.tenor.com/7VhAawmeCT4AAAAC/perfect-blue-anime.gif', link:'https://docs.google.com/document/d/1LWA1T_C6BRcMmttMFpJ13MqzpZfq1RSWh4sYMuSGL90/edit?usp=sharing', tag: 'Culture'},
      {title:"Lofi Hiphop and its Japanese influences", description:"", image:'https://thumbs.gfycat.com/AgedMiniatureBoto-max-1mb.gif', link:'https://docs.google.com/document/d/1vhiQIa0OSBVMY9FSzQRDHY7IyDRlfRhpkwuiixEdc7c/edit?usp=sharing', tag: 'Culture'},
    ]},
    {videos: [
      {title: 'ISAMM Legends - Loujey Zidi (Mo55ek 3ejja)', description: '', url: 'https://www.youtube.com/watch?v=8yk8AkDBtRE', link: 'link', tag: 'ISAMM Legends'},
      {title: 'Orenda Guest - Episode 3: Louay Rezgui (السينما في تونس)', description: '', url: 'https://www.youtube.com/watch?v=Qs96_zqPgaE', link: 'link', tag: 'Orenda Guest'},
      {title: 'Orenda Guest - Episode 2: Malek Ben Arbia (اليوتوب يدخّل فلوس في تونس؟)', description:'', url: 'https://www.youtube.com/watch?v=vK8Vjtvu-y4', link: 'link', tag: 'Orenda Guest'},
      {title: 'Orenda Guest - Episode 1: Marwen Essalah (AKA Marwen UX)', description:"", url:'https://www.youtube.com/watch?v=6zEGVOspkz0', link:'link', tag: 'Orenda Guest'},
    ]}
  ]

export default function WorksTab(){
    return(
        <ChakraProvider theme={theme}>
            <Box>
            <Works works={works} />
            </Box>
            <ColorProvider/>
        </ChakraProvider>
    )
}