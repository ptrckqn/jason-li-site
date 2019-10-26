import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 5rem;
    top: 0;
    z-index: 99;
    left: 0;
    align-items: center;
    background-color: #f0f0f0;
    justify-content: space-between;
    border-bottom: 1px solid #333;
`

const Name = styled.h4`
    text-transform: uppercase;
    font-weight: 300;
    font-size: 2rem;
    margin-left: 3rem;
`

const NavList = styled.ul`
    list-style: none;
    padding-right: 3rem;
`

const NavItem = styled.li`
    display: inline-block;
    :not(:last-child){
        margin-right: 3rem;
    }
`

class Navbar extends Component{
    render(){
        return(
            <Container>
                <Link to='/'><Name>Jason Li</Name></Link>
                <NavList>
                    <NavItem><Link to='/about'>About</Link></NavItem>
                    <NavItem><Link to='/blog'>Blog</Link></NavItem>
                    <NavItem><Link to='/contact'>Contact</Link></NavItem>

                </NavList>
            </Container>
        )
    }
}

export default Navbar