import ReactDom from 'react-dom/client'

const App = (props) => {
  return (
    <div className="App" >
      <div style={{ border:"#928d8d 1px solid",padding:"10px",width:"300px"}}>
        <img src={props.gallaryImg} alt='dog-pet' style={{width:"300px",height:"200px",backgroundColor:"white"}}/>
        <p style={{color:"#000",textAlign:"center",fontSize:"16px",fontWeight:"bold"}}>{props.petnames}</p>
      </div>
    </div>
  );
}

export default App;
