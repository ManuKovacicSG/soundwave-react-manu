import { useState } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Navigation = () =>{
    
    const [activeItem, setActiveItem] = useState('')
    
    const handleClick = (e:any, { name }:any ) => {
        setActiveItem('')
    }
    return (
        <Menu secondary fluid id='fonts'>
                
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
    )
}

export default Navigation






/* const Navigation = () =>{
    
    return (
        <Menu secondary fluid>
        <Menu.Item
        name='SoundWave'
        icon={'logo-soundwave.png'} />
        <Image src={'logo-soundwave.png'} size={'mini'} floated='left' />
        <Link to ='/soundwave'>SoundWave</Link>

        <Link to ='/discover'>Discover</Link>
        
        <Link to ='/join'>Join</Link>
        </Menu>
    )
}

export default Navigation */