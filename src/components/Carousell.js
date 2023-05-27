

import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import PipeObj from '../utils/mockData';


const PipeCardGroup = (props) => {
    const {data}=props;
    let ranInt = []
    let i=0
    while(i<4){
     let num
     while(true){
       num = (Math.floor(Math.random() * (data.length-1)) + 1);
       if(!ranInt.includes(num)){
         ranInt.push(num)
         break;
       }
     }
     i++;
    }
    console.log(ranInt)
     return (
         <CardGroup >
     <Card  >
         <Container className="cardImg">
         <Card.Img  variant="top" src={data[ranInt[0]].image} />
         </Container> 
       </Card> 
 
       <Card >
       <Container className="cardImg">
         <Card.Img  variant="top" src={data[ranInt[1]].image} />
         </Container>
        
       </Card> 
 
        <Card >
        <Container className="cardImg">
         <Card.Img  variant="top" src={data[ranInt[2]].image} />
         </Container>
        
       </Card> 
 
        <Card >
       <Container className="cardImg">
         <Card.Img  variant="top" src={data[ranInt[3]].image} />
         </Container>
       </Card> 
     </CardGroup>
     );
 }
 
 const Carousell = () => {
     return (
         <Carousel variant="dark">
 
         <Carousel.Item>
           <PipeCardGroup data={PipeObj}/>
          
         </Carousel.Item>
 
         <Carousel.Item>
         <PipeCardGroup data={PipeObj}/>
   
         
         </Carousel.Item>
 
         <Carousel.Item>
         <PipeCardGroup data={PipeObj} />
   
         
         </Carousel.Item>
 
         <Carousel.Item>
         <PipeCardGroup data={PipeObj} />
   
          
         </Carousel.Item>
 
       </Carousel>
     );
 }
 
 export default Carousell