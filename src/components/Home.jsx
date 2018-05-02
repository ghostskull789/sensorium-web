import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Col, Button } from 'reactstrap';
import {Image,Grid} from 'react-bootstrap';
import './Home.css';
import './style.css';
export default class Home extends Component {
  render() {
    return (
      <div className="row">
      <header className="masthead row">
      <div className="col-md-12">
      
      <section className="hero-area">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div class="block">
                          <a className="btn btn-grad-peach" href="#about" role="button">Register</a>

                      </div>
                  </div>
              </div>
          </div>
      </section>
        
      </div>
    </header>

    <section className="about  row">
       
          <Container>
            <Row textcenter>
              <div class="col-md-12">
              <section class="rw-wrapper">
                <h3 class="rw-sentence">
                  <span>Division remains a force within the world.</span>
                  <span> We each exist within our own confines,</span>
                  

                  <br />

                  <span>divided from the experiences of those who do not share our</span>
                  <div class="rw-words rw-words-1 grad-text">
                      <span>race</span>
                      <span>ethnicity</span>
                      <span>faith</span>
                      <span>ideology</span>
                      <span>gender</span>
                      <span>sexuality</span>
                      <span>profession</span>
                      <span>body</span>
                      <span>mind</span>
                  </div>

                </h3>
                <a class=" btn btn-grad-peach learn-more" href="#">Learn More</a>

              </section>
                <div >
                </div>
              </div>
            </Row>
          </Container>
       
    </section>
    {/*i knwo that we can use this componenets and shoudn't be written like this
     but i will change this later or
    if you want youcan make this a component*/}
    <Container >
      <Col xs="12" md="4" className="text-center">
          <div className="s-cards bg-grad-green">
            <h1>WHAT</h1>
              <p className="text-justify">
                Children of the sun, see your time has just begun, searching for your ways, through adventures every day. 
                Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. 
                Ah-ah-ah-ah-ah... wishing for The Cities of Gold. Ah-ah-ah-ah-ah... 
                some day we will find The Cities of Gold.
              </p>
              <a className="btn btn-grad-green">read more..</a>
          </div>
      </Col>
      <Col xs="12" md="4" className="text-center">
          <div className="empty-box"></div>
          <div className=" s-cards bg-grad-pink">
          <h1>WHY</h1>
          <p className="text-justify">
          Ulysses, Ulysses - Soaring through all the galaxies. In search of Earth, flying in to the night. 
          Ulysses, Ulysses - Fighting evil and tyranny, with all his power, and with all of his might. 
          Ulysses - no-one else can do the things you do. Ulysses - like a bolt of thunder from the blue. 
          Ulysses - always fighting all the evil forces bringing peace and justice to all.


          </p>
          <a className="btn btn-grad-pink">read more..</a>
          </div>
      </Col>
      <Col xs="12" md="4" className="text-center">
           <div className="s-cards bg-grad-blue">
            <h1>WHEN</h1>
              <p className="text-justify">
                Children of the sun, see your time has just begun, searching for your ways, through adventures every day. 
                Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. 
                Ah-ah-ah-ah-ah... wishing for The Cities of Gold. Ah-ah-ah-ah-ah... 
                some day we will find The Cities of Gold.
              </p>
              <a className="btn btn-grad-blue">read more..</a>
          </div>
      </Col>
    </Container>
    
      <Grid>
        <Jumbotron className="bg-grad-blue s-cards text-center mt-5">
          <h2>DING DING DING it’s time for registraion!</h2>
          <p>Register for the first social media website that literally born in  a fandom !!</p>
          <Link to="/about">
           <a className="btn btn-grad-blue">Register</a>
          </Link>
        </Jumbotron>

        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>if we get mentioned by some prestigious blogs or peoples we can add them here</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>if we get mentioned by some prestigious blogs or peoples we can add them here</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>if we get mentioned by some prestigious blogs or peoples we can add them here</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>

      </Grid>
      </div>
    )
  }
}
