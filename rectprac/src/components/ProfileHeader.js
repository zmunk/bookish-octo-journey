import React, { Component } from 'react'
import '../App.css'



import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


import logo from '../logo192.png'

import asemImage from '../asemImage.png'
import asemImage1 from '../ss.png'

import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';
import MarkunreadMailboxTwoToneIcon from '@material-ui/icons/MarkunreadMailboxTwoTone';
import { red } from '@material-ui/core/colors'



export class ProfileHeader extends Component {
    render() {

        return (
            <div>
                <div className='wrapper'>
                    
                    <div className='picImageDiv' >
                        <img className="profileImage" src={logo} alt="pp" />
                    </div>
                    <div className='headerInfo'>
                        <h1>Asem Okby</h1>
                        <Button className='AllButtons' style={{ marginRight: 5, background: '#3ac569', color:'whitesmoke'}} variant="contained" >
                            Follow
                        </Button>
                        <Button variant="contained" className='AllButtons' style={{ background:'#3ac569', color:'whitesmoke'}}>
                            Contact
                        </Button>
                    </div>
                    
                </div>
                {/* <div class='divider'></div> */}

                {/* <div class='headerIconShipment'>
                    <LocalShippingTwoToneIcon style={{ fontSize: 50, color: red[600] }} />
                    <MarkunreadMailboxTwoToneIcon style={{ fontSize: 47, color: red[600] }} />
                </div> */}
                

                {/* <div class='headerIconDelivery'>
                  
                </div> */}
                
            </div>
        )
    }
}

export default ProfileHeader
