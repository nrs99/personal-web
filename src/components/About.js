import React from 'react'
import { Grid, Image, Container, Header } from 'semantic-ui-react'
import Nick from '../icons/Nick.png'

const GridExampleColumnWidth = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src={Nick} alt="photo of me" />
    </Grid.Column>
    <Grid.Column width={9}>
      {/* <Image src='/images/wireframe/paragraph.png' /> */}
      <Container text>
        <p>
        I am a Professor in the Department of Computer Science & Engineering at Lehigh University.
         I worked as a research assistant in the Computer Vision Research Lab with Dr. Kevin Bowyer
         , Dr. Walter Scheirer and Dr. Patrick Flynn at the University of Notre Dame and graduated 
         with my Ph.D. earlier this year. Prior to that, I graduated from IIIT-Delhi with a B. Tech 
         in Computer Science & Engineering and specialized in Image Analysis and Machine Intelligence. I conducted research during the senior years of my undergrad under the supervision of Dr. Mayank Vatsa and Dr. Richa Singh. My research interests include Image Forensics, Computer Vision, Biometrics, Pattern Recognition and Machine Learning. 

        </p>
        
    </Container>
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
)

export default GridExampleColumnWidth
