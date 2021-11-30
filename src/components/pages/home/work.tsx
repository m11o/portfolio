import React from 'react'

import { PanelContainer } from './common'
import { Text, Center, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

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
export default Work
