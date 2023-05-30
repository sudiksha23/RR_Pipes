
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
    MDBCol,
  } from 'mdb-react-ui-kit';
  import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

  import PipeObj from '../utils/mockData';
import { useEffect, useState } from 'react';



const IndividualCard = (props) => {
    const {pipeData}=props;
 //   console.log(pipeData)
    return (       
      <MDBCol >
        <MDBCard className='h-100 individual-cards' >
            <MDBCardImage src={pipeData.image} />
            <MDBCardBody className='font-s'>
            <MDBCardText><b>{pipeData.name}</b></MDBCardText>
            </MDBCardBody>
            <MDBListGroup >
                <MDBListGroupItem>Category: {pipeData.category}</MDBListGroupItem>
                <MDBListGroupItem>Class: {pipeData.class}</MDBListGroupItem>
                <MDBListGroupItem>Size: {pipeData.size}</MDBListGroupItem>
                <MDBListGroupItem>Pipes per bundle: {pipeData.ppb}</MDBListGroupItem>
                <MDBListGroupItem>Cost per bundle: {pipeData.costPerBundle}</MDBListGroupItem>
            </MDBListGroup>
        </MDBCard>
      </MDBCol>
    
      );
}
const Product = () => {
    let [pipeList, setPipeList] = useState(PipeObj); 

    useEffect(() => {
        console.log("useEffect called "+ pipeList.length)
        pipeList=PipeObj 
        console.log("useEffect called "+ pipeList.length)
    },pipeList)
    
    return (
        <div>
            <ButtonGroup className="ButtonGroup">
                <Button variant='info'
                    onClick={()=>{
                        const filteredPipeList = pipeList.filter(
                        (filterPipe) => filterPipe.category=="SWR"
                        )
                        setPipeList(filteredPipeList)
                    }}
                >SWR Pipes</Button>
                <Button variant='dark'
                    onClick={()=>{
                        const filteredPipeList = pipeList.filter(
                            (filterPipe) => filterPipe.category=="AGRI"
                        )
                        console.log(filteredPipeList)
                        setPipeList(filteredPipeList)
                    }}
                >Agri Pipes</Button>
                <Button variant='secondary'
                    onClick={()=>{
                        const filteredPipeList = pipeList.filter(
                            (filterPipe) => filterPipe.category=="UPVC"
                        )
                        console.log(filteredPipeList)
                        setPipeList(filteredPipeList)
                    }}
                    >UPVC Pipes</Button>
                <DropdownButton as={ButtonGroup} title="PVC Pipes" id="bg-nested-dropdown" variant='light'>
                    <Dropdown.Item eventKey="1"
                        onClick={()=>{
                            const filteredPipeList = pipeList.filter(
                                (filterPipe) => filterPipe.category=="PVC"
                            )
                            console.log(filteredPipeList)
                            setPipeList(filteredPipeList)
                        }}
                    >All PVC Pipes</Dropdown.Item>
                    <Dropdown.Item eventKey="2"
                        onClick={()=>{
                            const filteredPipeList = pipeList.filter(
                                (filterPipe) => (filterPipe.category=="PVC" && filterPipe.class=="LMS")
                            )
                            console.log(filteredPipeList)
                            setPipeList(filteredPipeList)
                        }}
                    >Class: LMS</Dropdown.Item>
                    <Dropdown.Item eventKey="2"
                        onClick={()=>{
                            const filteredPipeList = pipeList.filter(
                                (filterPipe) => (filterPipe.category=="PVC" && filterPipe.class=="MMS")
                            )
                            console.log(filteredPipeList)
                            setPipeList(filteredPipeList)
                        }}
                    >Category: MMS</Dropdown.Item>
                    <Dropdown.Item eventKey="2"
                        onClick={()=>{
                            const filteredPipeList = pipeList.filter(
                                (filterPipe) => (filterPipe.category=="PVC" && filterPipe.class=="HMS")
                            )
                            console.log(filteredPipeList)
                            setPipeList(filteredPipeList)
                        }}
                    >Category: HMS</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>

            <MDBRow className='row-cols-1 row-cols-md-4 g-4 CardGroups'  >
                {
                    pipeList.map((pipe) =>(
                    <IndividualCard key={pipe.id} pipeData={pipe}/>
                    ))
                    
                }
            </MDBRow>
        </div>
      );
}
export default Product