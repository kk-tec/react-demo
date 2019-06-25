import React from 'react'
import MyContainer from './MyContainer'
import MySub from './MySub'

function CloneElement() {
    return (
        <MyContainer>
            <MySub subInfo={'1'} />
            <MySub subInfo={'2'} />
        </MyContainer>
    )
}

export default CloneElement
