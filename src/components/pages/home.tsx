import React from 'react'

import { Box, Badge, Container, Stack, Link, Flex, Avatar, Text, Button, Center, Progress, Heading } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import ProfileIcon from '../../assets/portfolio_icon1.jpg'

type panelContainerProps = {
  children: React.ReactNode,
  title: string,
  icon?: React.ReactNode
}
const PanelContainer: React.FC<panelContainerProps> = ({ title, children, icon = null }) => (
  <Flex flexDirection='column' alignItems='flex-start' mt={5} px={5} py={2}>
    <Heading size='md' as='h4' borderBottomWidth='3px' borderBottomColor='#ddd' mb={4}>
      {title}
      {icon ? icon : ''}
    </Heading>

    {children}
  </Flex>
)

const Profile = () => (
  <Flex justifyContent='space-between' alignItems='flex-start' flexDirection='row' px={5} py={2}>
    <Box>
      <Heading as='h2' size='lg' fontFamily='heading'>Masahito Osako</Heading>
      <Text>Backend Engineer / Frontend Engineer</Text>
    </Box>
    <Box>
      <Avatar size='2xl' showBorder src={ProfileIcon} />
    </Box>
  </Flex>
)

const Work = () => (
  <PanelContainer title='Works'>
    <Text>
      九州大学を休学し、東京でインターン生としてエンジニアの世界に入ったあと、フルスタックエンジニアとしてメディアやECなどの様々なシステムに携わらせていただきました。復学後もお世話になった企業様からお仕事をいただき、さらに技術力を磨いてきました。<br />
      現在、大学にて4回生になり研究室配属されると、仕事の方はお休みさせていただきましたが、これまで培ったエンジニアの知識を用いて、マウスの神経活動データをリアルタイムで取得し、機械学習等で解析を行っております。また、神経活動のリアルタイムデータを取得するライブラリは発展途上のため、時間を見つけてコミットしております。
    </Text>
    <Center w='100%' mt={4}>
      <Button variant='solid' size='md' colorScheme='whatsapp' rightIcon={<ArrowForwardIcon />}>Portfolio</Button>
    </Center>
  </PanelContainer>
)

type bioItemProps = {
  year: string,
  children: React.ReactNode
}
const BioItem: React.FC<bioItemProps> = ({ year, children }) => (
  <Flex mb={2}>
    <Text fontWeight='800' mr={5}>{year}</Text>
    <Text>{children}</Text>
  </Flex>
)
const SHOBON_ACTION_URL = 'https://apps.apple.com/jp/app/%E3%81%97%E3%82%87%E3%81%BC%E3%82%93%E3%81%AE%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3-%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB/id894330337'
const Bio = () => (
  <PanelContainer title='Bio'>
    <Flex w='100%' flexDirection='column' alignItems='flex-start'>
      <BioItem year='1997'>鹿児島県南九州市に誕生</BioItem>
      <BioItem year='2007'>
        ゲーム&nbsp;
        <Badge colorScheme='red'>
          <Link href={SHOBON_ACTION_URL} isExternal>
            しょぼんのアクション
          </Link>
        </Badge>
        のソースコードを偶然見つけたことからプログラミングにのめり込む。C/C++に苦戦。
      </BioItem>
      <BioItem year='2015'>
        九州大学理学部生物学科&nbsp;入学
      </BioItem>
      <BioItem year='2017'>大学休学。上京してバックエンドエンジニアとしてキャリアをスタート。</BioItem>
      <BioItem year='2018'>フリーランスとして様々な企業のプロジェクトに参画</BioItem>
      <BioItem year='2019'>大学復学のため、福岡移住。フリーランスとしての活動は継続。</BioItem>
      <BioItem year='2021'>九州大学 行動神経科学研究室 所属</BioItem>
    </Flex>
  </PanelContainer>
)

type skillContentProps = {
  name: string,
  value: number
}
const SkillContent: React.FC<skillContentProps> = ({ name, value }) => (
  <Flex w='100%' alignItems='center' mb={4}>
    <Text mr={5} fontWeight='bold' w={40}>{name}</Text>
    <Box w='100%' mr={2}>
      <Progress value={value} max={100} min={0} hasStripe colorScheme='gray' />
    </Box>
    <Text fontWeight='bold'>{`${value}%`}</Text>
  </Flex>
)
const skills: { [s: string]: number } = {
  'Ruby': 95,
  'Ruby on Rails': 95,
  'javascript': 90,
  'typescript': 90,
  'HTML5/CSS3': 90,
  'React.js': 80,
  'SCSS': 80,
  'Python3': 80,
  'Docker': 65,
}
const Skill = () => (
  <PanelContainer title='Skills'>
    <Flex w='100%' flexDirection='column' alignItems='flex-start'>
      {Object.keys(skills).map(key => <SkillContent name={key} value={skills[key]} key={key} />)}
    </Flex>
  </PanelContainer>
)

const Love = () => (
  <PanelContainer title='Loves' icon={<BsFillSuitHeartFill style={{ 'display': 'inline', 'marginLeft': '5px', 'width': '0.8em' }} />}>
    <Text>
      Music(RADWIMPS, Blue Wednessday), Comic(ハイキュー, ONE PIECE, ブルーピリオド), Movie(Interstellar, Inception, ベスト・キッド)
    </Text>
  </PanelContainer>
)

const Home = () => {
  return (
    <Box mt={20}>
      <Profile />
      <Work />
      <Bio />
      <Skill />
      <Love />
    </Box>
  )
}

export default Home
