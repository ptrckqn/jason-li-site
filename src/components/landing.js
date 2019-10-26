import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url('https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1549&q=80');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
`

const Tagline = styled.h1`
    color: #fff;
    font-weight: 700;
    top: 35%;
    left: 15%;
    position: absolute;
`

const Landing = () => (
    <Container>
        <Tagline>Hey, I'm Jason!</Tagline>
    </Container>
)

export default Landing