import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Videos = () => {
    const videosArr = [
'https://assets.allsamplefiles.com/mp4/ns/60s/sample-file-4k-uhd.mp4',
'https://assets.mixkit.co/videos/51918/51918-720.mp4',
'https://assets.mixkit.co/videos/51134/51134-720.mp4',
'https://assets.mixkit.co/videos/51312/51312-720.mp4',
'https://assets.mixkit.co/videos/4067/4067-720.mp4',
'https://assets.mixkit.co/videos/4332/4332-720.mp4',
'https://assets.mixkit.co/videos/344/344-720.mp4',
'https://assets.mixkit.co/videos/830/830-720.mp4',

    ];

    




const [videoSrc, setVideoSrc] = useState(videosArr[0]); 
    return (
        <Stack direction={["column", "row"]} height={'100vh'}>
            <VStack w={'full'}>
                <video
                    controls
                    controlsList='nodownload'
                    src={videoSrc}
                    style={{ width: "100%" }}>

                </video>
                <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
                    <Heading>Sample Video</Heading>
                    <Text>This is a Sample Video for testing and demo.
                        this is called Description.
                    </Text>
                </VStack>
            </VStack>
            <VStack width={["full", "xl"]} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
            {
                videosArr.map((item, index) => (
                <Button variant={'ghost'} 
                colorScheme='purple'
                onClick={() => setVideoSrc(item)}>
                Lecture {index + 1}
            </Button>
            ))}
            </VStack>
        </Stack>
    )
}

export default Videos