import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import {Link} from "react-router-dom";

const Navigation = () =>{
    return (
        <Menu secondary>
        <Image src={'logo-soundwave.png'} size={'mini'} floated='left' />
        <Link to ='/soundwave'>SoundWave</Link>
        <Link to ='/discover'>Discover</Link>
        <Link to ='/join'>Join</Link>
        </Menu>
    )
}

export default Navigation