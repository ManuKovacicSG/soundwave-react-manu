import { useState } from 'react'
import { Menu, Image, Container } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import '../index.css'

const Navigation = () =>{
    
    const [activeItem, setActiveItem] = useState('')
    
    const handleClick = (e:any, { name }:any ) => {
        setActiveItem('')
    }
    return (
        <Container >
        <Menu secondary fluid id='fonts' className='navigator' >
                
                <Image src='' />
                <Image src={'logo-soundwave.png'} width='60' floated='left' verticalAlign='middle'/>
                
                <Menu.Item
                    as={Link} to="/soundwave"
                    name='SoundWave'
                    active={activeItem === 'soundwave'}
                    onClick={handleClick}>
                    SoundWave
                </Menu.Item>
               <Menu.Item
                position='right'
                    as={Link} to="/discover"
                    name='Discover'
                    active={activeItem === 'discover'}
                    onClick={handleClick}>
                    Discover
                </Menu.Item>
                <Menu.Item
                    as={Link} to="/join"
                    name='Join'
                    active={activeItem === 'join'}
                    onClick={handleClick}>
                    Join
                </Menu.Item>
        
                </Menu>
                </Container>
    )
}

export default Navigation