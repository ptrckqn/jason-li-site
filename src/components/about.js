import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
`

const Portrait = styled.img`
    width: 20rem;
    border-radius: 50%;
    height: 20rem;
    object-fit: cover;
    margin: 15rem auto 10rem;
    display: block;
`

const Details = styled.p`
    width: 65%;
    margin: 0 auto;
    text-align: justify;
`  

const About = () => (
    <Container>
        <Portrait alt='My Portrait' src='https://images.unsplash.com/photo-1566250599398-cfbf6f411b52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'/> 
        <Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Vel pretium lectus quam id leo in vitae. Curabitur gravida arcu ac tortor. Quam elementum pulvinar etiam non quam lacus suspendisse. Ac auctor augue mauris augue neque gravida in fermentum. Elementum tempus egestas sed sed risus pretium. Magna fringilla urna porttitor rhoncus dolor purus non enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Scelerisque eleifend donec pretium vulputate sapien. Et molestie ac feugiat sed lectus. Urna molestie at elementum eu facilisis sed. At ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed. Neque convallis a cras semper. Mauris a diam maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo ullamcorper. Sodales ut etiam sit amet. Maecenas sed enim ut sem viverra aliquet eget sit.
        </Details>
    </Container>
)

export default About