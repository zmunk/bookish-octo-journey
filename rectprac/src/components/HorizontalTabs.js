import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import SerachBox from './SearchBox'
import Card from './Card';
import Button from '@material-ui/core/Button';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default function DisabledTabs(props) {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    

    };

    return (
        <Paper square>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                centered
            >
                <Tab label="About me" />

                <Tab label="Delivered" />
                <Tab label="Shipped"  />
                <Tab label="Reviews" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <p>My name is Asim. I am a student. I deliver for money</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{float:'left', marginRight:30}}>
                    <Button variant="contained" className='AllButtons' style={{ background: '#3ac569', color:'whitesmoke'}} >
                        Add a trip   
                    </Button>
                </div>
                <div style={{width:500}}>
                    <SerachBox />
                </div>
               
                {
                    // console.log(props.tripsData, props.tripsKeys)
                    props.tripsKeys.map((key) => props.tripsData.content[key].map((obj) => <Card tripData={obj} index={1}/>))

                    // props.tripsData[1]
                    // console.log(props.tripsData, "from horizontal")
                    // props.tripsData.map((e) => )
                }
                {
                    
                    // Array.from(Array(5)).map(() => <Card index={1}/>)
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div style={{ float: 'left', marginRight: 30 }}>
                    <Button variant="contained" className='AllButtons' style={{ background: '#3ac569', color: 'whitesmoke' }} >
                        Add a shipment
                    </Button>
                </div>
                <div style={{ width: 500 }}>
                    <SerachBox />
                </div>

                {
                    //TODO trip data should be shipmentData(to be fixed)
                    props.shipmentsKeys.map((key) => props.shipmentsData.content[key].map((obj) => <Card tripData={obj} index={2} />))
                }
                {/* {

                    Array.from(Array(5)).map(() => <Card index={2}/>)
                } */}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {
                  
                }
            </TabPanel>
        </Paper>
    );
}