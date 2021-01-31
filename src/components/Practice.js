import React from 'react'
import Button from 'react-bootstrap/Button';
import CoverImage from '../images/QM.png'
import dataStack  from "../questions.json";

export default function Practice() {
    let newData = dataStack.topics[0].technology
   return (
        <div>

 <head>
   <meta charset="utf-8"/>
   <meta name="viewport" content="width=device-width, initial-scale=1"/>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous"/>
   <link rel="stylesheet" href="style.css"/>
   <title>Credits</title>
 </head>
 <body id="bg-color">
   <div>

       <div class="container-fluid">
           <div class="row" style={{backgroundColor: "white"}}>
               <div class="col-md-4">
                   <img src={CoverImage} alt="header" id="myImg" />
               </div>
               <div class="col-md-4"></div>
               <div class="col-md-4 ">
                   <Button href="/" type="button" className="btn  btn-primary mt-3 w-50" id="myBtn" style={{marginLeft: "42%",float: "right", borderRadius: "24px"}} >
                            <h3 className="fw-bold">Home</h3>
                   </Button>
               </div>
           </div>
       </div>
       <div class="container">
           <div class="row text-align-center">
               <h1 class="fs-15 fw-bold text-center text-white mt-5"> Choose topic</h1>
           </div>


           {/* {
            //    allTopics[0].map((item)=>{
               allTopics[0].map((item)=>{

                   console.log('cat list',item);

               return(
                   <div class="text-center">
                       <Button href="" className="btn btn-success w-50 mb-2" style={{borderRadius: "22px"}}>
                           <h3 className="fs-3 fw-bold">
                              hello
                           </h3>
                       </Button>
                   </div>
                   );


               }
               )
               } */}







       </div>

   </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>


 </body>

        </div>
    )
}
