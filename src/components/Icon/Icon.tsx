import React from 'react'
import { SizeProp, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWineBottle,
  faPlus,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

type IconName = 'wine-glass' | 'wine-bottle' | 'envelope' | 'plus'

const icons: { [key in IconName]: IconDefinition } = {
  'wine-bottle': faWineBottle,
  'wine-glass': faWineGlass,
  envelope: faEnvelope,
  plus: faPlus,
}

interface Props {
  name: IconName
  size?: SizeProp
}

const Icon: React.FC<Props> = ({ name, size }) => (
  <FontAwesomeIcon icon={icons[name]} size={size} />
)

export default Icon
