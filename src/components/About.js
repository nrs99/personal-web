import React from 'react'
import { Grid, Image, Container, Header, Segment } from 'semantic-ui-react'
import Nick from '../icons/Nick.png'
import Health from '../images/health.png'
import Tech from '../images/tech.png'
import Equity from '../images/equity.png'
import Agriculture from '../images/agriculture.png'


const GridExampleColumnWidth = () => (
  <>
  <Segment>
  <Grid>
    <Grid.Column width={4}>
      <Image src={Nick} alt="photo of me" />
    </Grid.Column>
    <Grid.Column width={9}>
      {/* <Image src='/images/wireframe/paragraph.png' /> */}
      <Container text>
        <p>
        As a senior computer science and business major, I’ve held a part time 
        position in the Computer Science and Engineering department at Lehigh University 
        
        in Bethlehem, PA. During this part time job that I’ve held for two years now, I 
        
        began my journey in learning the best practices in system administration. A main
        responsibility has been listening to our professors and faculty to understand their
         needs which align with the job description. In my case, I was automating python 
         environment installations on our sandbox environment using Ansible playbooks. I 
         desire to grow my knowledge in information security as well as data privacy. I 
         believe that my technical 
        background and attention to detail are important skills that will assist in training others. 
        </p>
        
    </Container>
    </Grid.Column>
  </Grid>
  </Segment>
  
  <Segment color='brown'>
    <Container text>
      <p>
        Prospective Employers: I am seeking employment health, tech, equity, and 
        agriculture industries with a focus on applying my network/system 
        administration, software engineering, and data science (machine learning) skills. 
      </p>
   <Grid relaxed columns={4}>
    <Grid.Column>
      <Image src={Health} />
    </Grid.Column>
    <Grid.Column>
      <Image src={Tech} />
    </Grid.Column>
    <Grid.Column>
      <Image src={Equity} />
    </Grid.Column>
    <Grid.Column>
      <Image src={Agriculture}/>
    </Grid.Column>
  </Grid>



      </Container>
  </Segment>
  </>
)

export default GridExampleColumnWidth
