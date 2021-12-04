import React from 'react'

import { Text } from '@chakra-ui/react'
import { PanelContainer } from './common'
import { BsFillSuitHeartFill } from 'react-icons/bs'

const Love: React.FC = () => (
  <PanelContainer title='Loves' icon={<BsFillSuitHeartFill style={{ 'display': 'inline', 'marginLeft': '5px', 'width': '0.8em' }} />}>
    <Text>
      Music(RADWIMPS, Blue Wednessday), Comic(ハイキュー, ONE PIECE, ブルーピリオド), Movie(Interstellar, Inception, ベスト・キッド)
    </Text>
  </PanelContainer>
)
export default Love
