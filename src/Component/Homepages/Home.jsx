import React, { Component } from "react";
import { Parallax } from "react-parallax";
import { Zoom } from "react-reveal";
import Map from "../../Assets/map.png";
import HSK from "../../Assets/HSK.jpg";
import BUS from "../../Assets/BUS.jpg";
import ORA from "../../Assets/ORA.jpg";
import WE from "../../Assets/WE.jpg";
import MMtext1 from "../../Assets/Scroll1.png";
import MMtext2 from "../../Assets/Scroll2.png";
import SHA from "../../Assets/shake.png";
import COM from "../../Assets/comp.png";
import GLO from "../../Assets/globe.png";
import BOU from "../../Assets/Bounce.png";
import CHU from "../../Assets/Chuckle.png";
import HUH from "../../Assets/Huh.jpg";
import HUR from "../../Assets/Hurrah.jpg";
import SPL from "../../Assets/Splat.jpg";
import PAW from "../../Assets/paws.png";
import T1 from "../../Assets/T1.jpg";
import T2 from "../../Assets/T2.jpg";
import T3 from "../../Assets/T3.jpg";
import T4 from "../../Assets/T4.jpg";
import T5 from "../../Assets/T5.jpg";
import T6 from "../../Assets/T6.jpg";
import QUO from "../../Assets/quotes.png";
import "./Home.css";
import Header from "./Header";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Fade } from 'react-reveal';
// import ContactButton from "./ContactButton";

export default class Home extends Component {
  render() {
    return (
    
      <div>
        {" "}
        <Header className="top" />
        {/* <Parallax></Parallax> */}
        <Parallax className="part1">
          <Zoom>
            <div style={{ height: "50rem" }}>
            
            
              <hr />
             
        
              <Row style={{ margin: 80 }}>
              
                
                
                
                  <img
                    src={Map}
                    alt="map"
                    style={{
                     
                      width: "30rem",
                      boxShadow: "4px 4px rgb(195 195 195)",
                      border: "7px solid black",
                      marginLeft: "15%",
                      marginTop: "12%",
                      
                    }}
                  />
              
                
                  
                  
                     <img
                    src={MMtext1}
                    alt="map"
                    style={{
                     marginTop: "11%",
                      width: "6rem",
                      
                  
                    }}
                  />
              <div>
                    <h2
                      style={{
                        
                        marginTop: "80%",
                        color: "orange",
                        
                                                                      
                      }}
                    >
                    We Design and Build
                    
              <hr />
                    </h2>
                    <h3
                      style={{
                      
                    	}}>
                   <h5>To bring together people</h5>
                   <h5>from nations' abroad</h5>
                  
                   <h5>To bring immersive Chinese</h5>
                   <h5>teaching to your doorstep</h5>
                    </h3>
                  </div>
             
                  <img
                    src={MMtext2}
                    alt="map"
                    style={{
                     marginTop: "11%",
                      width: "6rem",
                     
                  
                    }}
                  />
              
              

                
              </Row>

            </div>
            
             
		<img
                    src={HUH}
                    alt="map"
                    style={{
                     
                      width: "10rem",
                    	height: "10rem",
                    	marginLeft: "70%",
                    	
                      
                    }}
                  />
            
              <hr />
        
          </Zoom>
        </Parallax>
        
        <Card style={{backgroundColor: "#fadba2", }}>
        
        
        <Parallax>
        
        <Zoom>
            <div style={{ height: "85rem"}}>
              <Row style={{ margin: 60}}>
                
                  
                  <img
                    src={PAW}
                    alt="map"
                    style={{
                     
                      width: "15rem",
                      height: "30rem",
                     
                     marginTop: "6%",
                      
                    }}
                  />
                  
                     <img
                    src={WE}
                    alt="map"
                    style={{
                     
                      width: "40rem",
                      height: "30rem",
                      border: "20px solid white",
                      margin: "80px",
                      
                      
                    }}
                  />
              <div>
                    <h2
                      style={{
                        
                        marginTop: "20%",
                       
                        
                                                                      
                      }}
                    >
                   
                   <p>We're Changing the Way</p>
                   <p>You Work with Agencies.</p>
                   
                   
              <hr />
                    
                 
                    </h2>
                   
                   <br />
                    
                    <p>
                    Mandarin Mates is Chinese language school based in 
		    </p>
		    <p>
                    Hangzhou, providing Chinese learning services and 
		    </p>
		    <p>
                    community activities to local expats. Our mission 
		    </p>
		    <p>
                    is to help foreigners join the local community.
                  
		    </p>
		   
		<br />
		
		    <p>
                    Our Mandarin Mates have all spent time living and
		    </p>
		    <p>
                    studying abroad, so we know what it's like to be 
                  
		    </p>
		    <p>
                    in a strange new country. Not knowing anyone, not
		    </p>
		    <p>
                    speaking the language can make life very difficult. 
                   </p>
		   
		
                  </div>
                  
              </Row>
              
              
              
              
                  <hr />
        
<h3
                      style={{
                        
                        
                                                                  
                      }}
                    >
            
                   <Parallax className="part2">
          <div style={{ height: "150rem",  }}>
            <Container>
              <Zoom>
                <Row className="justify-content-sm-center">
                  <h3 style={{ 
                
                  marginTop: "10%",
                  }}> 
                   
                   </h3>
                </Row>
              </Zoom>
              <Row>
              
              
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30,}}>
                      <img
                      
                        variant="top"
                        src={GLO}
                        alt="hsk"
                        style={{
                         width: "2rem",
                      	  height: "2rem",
                      	  borderRadius: 8,
                      	  margin: "2.5%",
                      	
                        }}
                      
                      />
                      
                      
                      <h2
                      
                      style={{
                      marginLeft: "10%",
                      }}>
                      <hr />
                          Global Network
                          
                           <hr />
                      </h2>
                      
                    <Card.Body>
                      <Card.Text>
                      <h6> There is no need to travel across the city</h6>
                      <h6> to learn Chinese at a language school. We </h6>
                      <h6> bring Chinese learning to your doorstep.</h6>
                      <h6> We can see you anywhere in the world!</h6>
                      <br />
                      </Card.Text>
                      </Card.Body>               
                    
                     
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30 }}>
                        <Card.Img
                        variant="top"
                        src={COM}
                        alt="hsk"
                        style={{
                         width: "2rem",
                      	  height: "2rem",
                      	  borderRadius: 8,
                      	  margin: "3%",
                      	
                        }}
                        />
                       
                      <h2
                      
                      style={{
                      marginLeft: "10%",
                      }}><hr />
                          Digital Agency
                          <hr />
                      </h2>
                      
                      <Card.Body>
                      <Card.Text>
                      <h6> We provide the option of online classes</h6>
                      <h6> with our Mandarin Mates on a global scale.</h6>
                      <h6> You could talk to your teacher from</h6>
                      <h6> the comfort of your own home or on site.</h6>
                        <br />
                      </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30 }}>
                       <Card.Img
                        variant="top"
                        src={SHA}
                        alt="hsk"
                        style={{
                         width: "2rem",
                      	  height: "2rem",
                      	  borderRadius: 8,
                      	  margin: "3%",
                      	
                        }}
                       />
                       
                      <h2
                      
                      style={{
                      marginLeft: "10%",
                      }}>
                      <hr />
                          Trusted Partner<hr />
                      </h2>
                      
                      <Card.Body>
                      <Card.Text>
                      <h6> We take the time to match you with the </h6>
                      <h6> ideal teacher. They will base your lesson</h6>
                      <h6> plans on your current skill level</h6>
                      <h6> as well as your interests and goals.</h6>
                        <br />
                      </Card.Text>
                      </Card.Body>
                      
                    </Card>
                  </Zoom>
                </Col>
                
              </Row>
            </Container>
          </div>
        </Parallax>
                   
                   
                   
                   
              
                   
                   
                   
                   
                   
                    </h3>
            </div>
          </Zoom>
        </Parallax>
        
        </Card>
        
           <hr />  
        
        <Parallax className="part2">
          <div style={{ height: "70rem" }}>
            <Container>
              <Zoom>
                <Row className="justify-content-sm-center">
                  <h2 style={{ 
                  textAlign: "center",
                
                  margin: "20%", }}>Our Courses</h2>
                </Row>
              </Zoom>
              <Row>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30 }}>
                      <Card.Img
                        variant="top"
                        src={HSK}
                        alt="hsk"
                        style={{
                         width: "21.8rem",
                      	  height: "15rem",
                        }}
                      
                      />
                      
                      <Card.Body>
                      <Card.Text>
                          HSK
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30 }}>
                        <Card.Img
                        variant="top"
                        src={BUS}
                        alt="hsk"
                        style={{
                         width: "21.8rem",
                      	  height: "15rem",
                        }}
                        />
                      <Card.Body>
                        <Card.Text>
                          Business
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30 }}>
                       <Card.Img
                        variant="top"
                        src={ORA}
                        alt="hsk"
                        style={{
                         width: "21.8rem",
                      	  height: "15rem",
                        }}
                       />
                      <Card.Body>
                        <Card.Text>
                          Oral
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
              </Row>
            </Container>
          </div>
        </Parallax>
        
        
                  <img
                    src={HUR}
                    alt="map"
                    style={{
                     
                      width: "15rem",
                      marginLeft: "80%",
                      
                    }}
                  />
              
               <hr />
                  
        
        
         
        <Parallax className="part3">
          <div style={{ height: "180rem" }}>
            <Container>
              <Zoom>
                <Row className="justify-content-sm-center">
                  <h2 style={{ 
                  textAlign: "center",
                
                  margin: "10%", }}>Our Teachers</h2>
                </Row>
              </Zoom>
              <Row>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30, backgroundColor: "#fadba2", }}>
                      <Card.Img
                        variant="top"
                        src={T1}
                        alt="hsk"
                        style={{
                         width: "30rem",
                      	  height: "20rem",
                        }}
                      
                      />
                      
                      <Card.Body>
                      <Card.Text>
                          Teacher:
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30, backgroundColor: "#f5c076", }}>
                        <Card.Img
                        variant="top"
                        src={T2}
                        alt="hsk"
                        style={{
                         width: "30rem",
                      	  height: "20rem",
                        }}
                        />
                      <Card.Body>
                        <Card.Text>
                          Teacher:
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                
              </Row>
            </Container>
            
            
            
            
            
                <Container>
              <Zoom>
                <Row className="justify-content-sm-center">
                  <h2 style={{ 
                   }}></h2>
                </Row>
              </Zoom>
              <Row>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30, backgroundColor: "#f5c076", }}>
                      <Card.Img
                        variant="top"
                        src={T3}
                        alt="hsk"
                        style={{
                width: "20rem",
                      	  height: "30rem",
                      	  marginLeft: "20%",
                        }}
                      
                      />
                      
                      <Card.Body>
                      <Card.Text>
                          Teacher:
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30, backgroundColor: "#fadba2", }}>
                        <Card.Img
                        variant="top"
                        src={T4}
                        alt="hsk"
                        style={{
                      width: "20rem",
                      	  height: "30rem",
                      	   marginLeft: "20%",
                        }}
                        />
                      <Card.Body>
                        <Card.Text>
                          Teacher:
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                
              </Row>
            </Container>
            
            
            
            
            
            
            
            
               <Container>
              <Zoom>
                <Row className="justify-content-sm-center">
                  <h2 style={{ 
                   }}></h2>
                </Row>
              </Zoom>
              <Row>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30, backgroundColor: "#fadba2", }}>
                      <Card.Img
                        variant="top"
                        src={T5}
                        alt="hsk"
                        style={{
                       width: "20rem",
                      	  height: "30rem",
                      	   marginLeft: "20%",
                        }}
                      
                      />
                      
                      <Card.Body>
                      <Card.Text>
                          Teacher:
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30, backgroundColor: "#f5c076" }}>
                        <Card.Img
                        variant="top"
                        src={T6}
                        alt="hsk"
                        style={{
                         width: "20rem",
                      	  height: "30rem",
                      	   marginLeft: "20%",
                        }}
                        />
                      <Card.Body>
                        <Card.Text>
                          Teacher:
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                
              </Row>
            </Container>
            
            <br />
            <br />
            
                     <hr />
            

  <Parallax className="part2">
          <div style={{ height: "100rem" }}>
            <Container>
              <Zoom>
                <Row className="justify-content-sm-center">
                  <h2 style={{ 
                  textAlign: "center",
                
                  margin: "20%", }}>Testimonials</h2>
                </Row>
              </Zoom>
              <Row>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30 }}>
                      <Card.Img
                        variant="top"
                        src={QUO}
                        alt="hsk"
                        style={{
                         width: "1rem",
                      	  height: "1rem",
                        }}
                      
                      />
                      
                      <Card.Body>
                      <Card.Text>
                          Mandarin Mates helped me to feel more comfortable at work
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30 }}>
                        <Card.Img
                       variant="top"
                        src={QUO}
                        alt="hsk"
                        style={{
                         width: "1rem",
                      	  height: "1rem",
                        }}
                      
                      />
                      <Card.Body>
                        <Card.Text>
                          I was able to do all 30 chapters online and am now qualified to work locally. 
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
                <Col>
                  <Zoom>
                    <Card style={{ borderRadius: 30 }}>
                       <Card.Img
                        variant="top"
                        src={QUO}
                        alt="hsk"
                        style={{
                         width: "1rem",
                      	  height: "1rem",
                        }}
                      
                      />
                      <Card.Body>
                        <Card.Text>
                          When I joined Mandarin Mates, I discovered a new family as well as hometown. 
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Zoom>
                </Col>
              </Row>
            </Container>
                 <img
                    src={CHU}
                    alt="map"
                    style={{
                     
                      width: "15rem",
                      marginLeft: "80%",
                      
                    }}
                  />
                  
                  <hr />
              
          </div>
         
        </Parallax>
        
       
            
          </div>
          
             <img
                    src={SPL}
                    alt="map"
                    style={{
                      marginTop: "35%",
                      width: "15rem",
                
                    }}
                  />
        </Parallax>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* <ContactButton /> */}
      </div>
    );
  }
}
