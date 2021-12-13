import React,{ memo } from 'react'
import Container from './components/container'
import { InformationContainer } from './InformationStyled'

const Information = () => {
    return (<InformationContainer>
        <Container />
    </InformationContainer>)
}

export default memo(Information)