// Write your code here
import {useState} from 'react'

import {
  ImageElement,
  Heading,
  DivContainer,
  Para1,
  Para2,
  ButtonEle,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const {reactReadLess, reactReadMore} = reactHooksDescription

  // const [para, setPara] = useState(reactReadLess)
  const [buttonValue, setButton] = useState(true)

  const onChangePara = () => {
    //  const value = reactReadMore
    //  setPara(value)
    setButton(!buttonValue)
  }

  const buttonText = buttonValue ? 'Read More' : 'Read Less'
  const ParaText = buttonValue ? reactReadLess : reactReadMore

  return (
    <DivContainer>
      <Heading>React Hooks</Heading>
      <Para1>Hooks are a new addition to React</Para1>
      <ImageElement
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para2>{ParaText}</Para2>
      <ButtonEle onClick={onChangePara}>{buttonText}</ButtonEle>
    </DivContainer>
  )
}

export default ReadMore
