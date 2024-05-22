import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assests/1.jpg'
import img2 from '../assests/2.jpg'
import img3 from '../assests/3.jpeg'
import img4 from '../assests/4.webp'
import img5 from '../assests/5.jpg'




const headingOption = {
    pos: "absolute",
    left: '50%',
    top: '50%',
    transform: "translate(-50%,-50%)",
    textTransform: 'uppercase',
    p: '4',
    size: '4xl'
}
const Home = () => {
    return <Box>
        <MyCarousel />
        <Container minHeight={'100vh'} maxWidth={'container.xl'}
            p="16">
            <Heading textTransform={"uppercase"} py="2" w={"fit-content"}
                borderBottom={'2px solid'} m="auto">Services</Heading>
            <Stack
                h={'full'}
                p={'4'}
                alignItems={'center'}
                direction={['column', 'row']}
            >
                <Image src={img5} h={["40", "400"]} filter={'hue-rotate(-130deg)'} />
                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus saepe
                    incidunt eum aliquam! Id dicta corrupti doloremque fuga in. Rerum numquam ab
                    amet porro alias impedit perferendis, perspiciatis architecto deserunt eaque
                    nisi soluta quas veniam sapiente eveniet unde qui temporibus doloribus quidem
                    repudiandae minus? Aut cupiditate debitis ipsam, veritatis labore, veniam,
                    illum nulla eaque tempore dicta doloremque porro. Obcaecati perferendis qui,
                    sapiente amet accusantium atque minus quas aliquam, ducimus voluptatibus omnis
                    laudantium magni numquam nesciunt laboriosam! Modi officia itaque assumenda vel
                    reprehenderit consequatur voluptatibus iure pariatur dolorem repellat. Iusto, voluptatum.

                </Text>
            </Stack>
        </Container>

    </Box>

};
const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1200}
        showArrows={false}
        showStatus={false}
        showThumbs={false}>

        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.300"} color={'white'}
                {...headingOption}>
                Watch the Future
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.300"} color={'black'} {...headingOption}>
                Future is Gaming
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={"blackAlpha.300"} color={'white'} {...headingOption}>
                Night life is Cool
            </Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.300"} color={'black'}{...headingOption}>
                Shadow Gamer
            </Heading>
        </Box>
    </Carousel>
);

export default Home

