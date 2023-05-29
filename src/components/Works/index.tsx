import React from 'react'
import { Center, Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading, Text } from '@chakra-ui/react'
import Article from './article'
import Video from './video'
export default function Works({ works }: any) {
    const csElems = works[0].cs.map((work: any, index: Number) => {
        return <Article key={index} title={work.title} description={work.description} image={work.image} link={work.link} tag={work.tag} isLive={work.isLive} github={work.github} />
    })
    const articlesElems = works[1].articles.map((work: any, index: Number) => {
        return <Article key={index} title={work.title} description={work.description} image={work.image} link={work.link} tag={work.tag} />
    })
    const videosElems = works[2].videos.map((work: any, index: Number) => {
        return <Video key={index} title={work.title} description={work.description} url={work.url} link={work.link} tag={work.tag} />
    })
    return (
        <>
            <Heading textAlign="center">Portfolio</Heading>
            <Box p="3" id="portfolio">
                <Tabs maxW="70vw" w="70vw" variant="soft-rounded" isFitted colorScheme="blue">
                    <TabList>
                        <Tab>Computer Science Projects</Tab>
                        <Tab>Articles</Tab>
                        <Tab>Videos</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
                                {csElems}
                            </Box>
                            <Text marginTop="5" fontSize="2xs">!!!Some Apps might not work because i ran out of railway credits</Text>
                            <Text marginTop="5" fontSize="2xs">!!!Heroku shut down it's free tier so some apps are down</Text>
                        </TabPanel>
                        <TabPanel>
                            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
                                {articlesElems}
                            </Box>
                        </TabPanel>
                        <TabPanel>
                            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
                                {videosElems}
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}