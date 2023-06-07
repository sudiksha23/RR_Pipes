
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
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {BsSearch} from "react-icons/bs"
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
            </MDBListGroup>
        </MDBCard>
      </MDBCol>
    
      );
}
const Product = () => {
    let [pipeList, setPipeList] = useState(PipeObj); 
    let [searchText, setSearchText] = useState("");
    tempPipeList=PipeObj
    // useEffect(() => {
    //     console.log("useEffect called "+ pipeList.length)
    //     pipeList=PipeObj 
    //     console.log("useEffect called "+ pipeList.length)
    // },pipeList)
    console.log(searchText + " Rendered "+ pipeList.length + " pipelistLength")
    return (
        <>
        <div>
            <ButtonGroup className="ButtonGroup">
                <Button variant='info'
                    onClick={()=>{
                        const filteredPipeList = tempPipeList.filter(
                        (filterPipe) => filterPipe.category=="SWR"
                        )
                        setPipeList(filteredPipeList)
                    }}
                >SWR Pipes</Button>
                  <Button variant='dark'
                    onClick={()=>{
                        const filteredPipeList = tempPipeList.filter(
                            (filterPipe) => filterPipe.category=="AGRI"
                        )
                        console.log(filteredPipeList)
                        setPipeList(filteredPipeList)
                    }}
                >Agri Pipes</Button>
                <Button variant='secondary'
                    onClick={()=>{
                        const filteredPipeList = tempPipeList.filter(
                            (filterPipe) => filterPipe.category=="UPVC"
                        )
                        console.log(filteredPipeList)
                        setPipeList(filteredPipeList)
                    }}
                    >UPVC Pipes</Button>
                <Button variant='light'
                     onClick={()=>{
                            const filteredPipeList = tempPipeList.filter(
                                (filterPipe) => filterPipe.category=="PVC"
                            )
                            console.log(filteredPipeList)
                            setPipeList(filteredPipeList)
                        }}
                    >Electric Conduits</Button>       
            </ButtonGroup>
            <input placeholder='Search...' type='text' 
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
            />
            <Button size='sm' variant='light'
                onClick={() => {
                    const filteredPipeList = tempPipeList.filter((filterPipe) => 
                        (filterPipe.category.toLowerCase().includes(searchText.toLowerCase()) || 
                        filterPipe.name.toLowerCase().includes(searchText.toLowerCase()) || 
                        filterPipe.desc.toLowerCase().includes(searchText.toLowerCase()) || 
                        filterPipe.class.toLowerCase().includes(searchText.toLowerCase()) || 
                        filterPipe.size.toLowerCase().includes(searchText.toLowerCase()))
                    )
                    setPipeList(filteredPipeList)
                }}
            ><BsSearch/></Button>
        </div>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4 CardGroups'  >
                {
                    pipeList.map((pipe) =>(
                    <IndividualCard key={pipe.id} pipeData={pipe}/>
                    ))
                    
                }
            </MDBRow>
        </>
      );
}
export default Product