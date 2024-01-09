import React, {useState} from "react";


function About(props){

    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",        
    // })

    let myStyle = {
      color: props.mode === 'dark' ? 'white' : '#5A5A5A',
      backgroundColor: props.mode === 'dark' ? '#5A5A5A' : 'white',
    }



//enable button in accordion - just for learning purpose
    // const [btnText, setbtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //   if(myStyle.color === 'black'){
    //     setMyStyle({
    //       color: "white",
    //       backgroundColor: "black"
    //     })
    //       setbtnText("Enable Light Mode")


    //   }else{
    //     setMyStyle({
    //       color: "black",
    //       backgroundColor: "white",
    //     })
    //     setbtnText("Enable Dark Mode")
    //   }
    // }
    return(
        <>
        <div className="container" style={myStyle}>
        <h1 className="my-3">About us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Analyzing a text involves breaking down its ideas and structure to understand it better, think critically about it, and draw conclusions. This unit covers different strategies for analyzing print and digital media, as well as how to create graphic organizers to help you analyze what you read.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Yes, all photos and videos on Pexels are free for commercial use. You can use them on your commercial website, blog, product, or anywhere else. Please note that depicted content like trademarks, logos, or brands may still be protected by privacy, copyright or trademark rights.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Browser Compatibility refers to the ability of a certain website or app to appear fully functional on different browsers that are available in the market. This means that your website's HTML coding, as well as the scripts on that website, should be compatible to run on all browsers your users might use.
      </div>
    </div>
  </div>
</div>
</div>

{/* just for learning purpose */}
{/* <div className="container" style={myStyle}>
    <button onClick={toggleStyle} className="btn btn-primary my-3">{btnText}</button>
</div> */}
</>
    )
}

export default About;