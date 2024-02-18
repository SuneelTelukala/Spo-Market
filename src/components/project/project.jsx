  

  import React from "react";
  import '../project/project.css';
  
  import axios from 'axios';

  import { useEffect } from "react";
  import { useState } from "react";

  export function Project(){
  const [data,setData] = useState([]);
  const [baserate,setBaserate] =useState([]);
  const [block,setBlock] = useState ([]);
  const [growth,setGrowth] = useState ([]);

  useEffect(()=>{
    axios.get("http://localhost:9966/property/getAllProperty")
    .then(responce => setData(responce.data)
    ) },[])

  useEffect(()=>{
    axios.get("http://localhost:9966/property/getAllProperty")
    .then(responce => setBaserate(responce.baseRate)
    ) },[])
    useEffect(()=>{
      axios.get("http://localhost:9966/property/getAllProperty")
      .then(responce => setBlock(responce.block)
      ) },[])

      useEffect(()=>{
        axios.get("http://localhost:9966/property/getAllProperty")
        .then(responce => setGrowth(responce.growth)
        ) },[])
  




    return(
        <div className="container-fluid card" id="w" >
            <div id="bg">
                <button type="button" className="btn btn-primary m-3" >House</button>
            
            
               
            </div>
            <div>
            <h6>Proprty 1</h6>
            <span>spo property 1 aus</span>
            </div>
            <div  className="grid grid-cols-2 grid-rows-2 gap-4  mt-8" id="gb">
              
             
                <p className="inline-flex flex-col-2 ">
                        <span className="   text-sm h-8 text-gray-400">
                          Project Value
                        </span>
                        <span>
                        {data.map(item => {item.baseRate})}
                        </span>
                       
                </p>
                <p className="inline-flex ml-xl-4">
                        <span className=" h-8  text-sm xl:items-center  text-gray-400">
                          Block Price
                        </span>
                        <span className=" font-medium text-base text-2xl text-gray-800 ">
                              {baserate.map(item => {item.developmentCost})}

                        </span>
               </p>
               
               <p className="inline-flex flex-col w xl:items-center ">
                        <span className=" text-sm h-8 text-gray-400">
                          Target Completion
                        </span>
                        <span className="font-medium text-base text-2xl text-gray-800 ">
                        {block.map(item => {item.settlementDate})}

                          
                        </span>
               </p>
               <p className="inline-flex flex-col xl:items-center ">
                        <span className=" text-sm h-8  text-gray-400">
                          Project Growth Rate
                        </span>
                        <span className=" font-medium text-base text-2xl text-gray-800 ">

                       {growth.map(item => {item.propertyCode})}
   
                     
                        </span>
               </p>
                
            </div>

        </div>
    )
  }