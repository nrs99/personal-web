import React from 'react'
import '../css/Footer.css'
import {
    Button,
    Grid,
    Header,
    Image,
    List,
    Segment,
    Input, 
    Container
  } from 'semantic-ui-react'


const Footer = () => (
    <>
    <div>
            {/* Footer */}

        <Segment inverted color='red' className='main'>
        <Grid divided inverted stackable >
            <Grid.Row>
            <Grid.Column width={5}>
                <Header inverted as='h4' content='Contact Us' />
                <p style={{fontSize: '2em'}}>
                    Send us a message
                </p>
                <Input className="fullname" placeholder="Your fullname"  />
                <Input className="email" placeholder="Your email"  />
                <Input className="msg" placeholder="Your message"  />
                <Button className="submit"> Submit</Button>

            </Grid.Column>
            <Grid.Column width={4}>
                <Header inverted as='h4' content='Sitemap' />
                <List link inverted>
                <List.Item as='a'>Home</List.Item>
                <List.Item as='a'>About Us</List.Item>
                <List.Item as='a'>Features</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column width={4}>
            <Image bordered rounded className="logo"/>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
            {/* End footer */}

    </div>
    </>

)
export default Footer