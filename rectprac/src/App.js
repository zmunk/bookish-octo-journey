import React, { Component } from 'react'
import VerticalTabs from './components/VerticalTabs'
import HorizontalTabs from './components/HorizontalTabs'
import ProfileHeader from './components/ProfileHeader'
import Footer from './components/Footer'
import tripsJson from './jsonData/trips.json'
import shipmentsJson from './jsonData/shipments.json'


export class App extends Component {

  constructor(){
    super()

    //Get the keys in data.content. 
    this.tripsContentKeys = Object.keys(tripsJson.content);
    this.shipmentsContentKeys = Object.keys(shipmentsJson.content);
   
    }


  render() {
    return (
      <div className='compWrapper'>

        <div className='compHeader'>
          <ProfileHeader/>
        </div>
        <div className='compMain'>
          <HorizontalTabs tripsKeys={this.tripsContentKeys} tripsData={tripsJson} shipmentsKeys={this.shipmentsContentKeys} shipmentsData={shipmentsJson}/>
        </div>
        <div className='compFooter'>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App
