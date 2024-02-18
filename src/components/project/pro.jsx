import React, { useEffect, useState } from "react";

import '../project/project.css';
import { json } from "react-router-dom";

export function Pro() {
  const [prodata, setProdata] = useState({ data: { PropertyList: [] },  });

  

  useEffect(() => {
     fetch("http://localhost:9966/property/getAllProperty").then(
      response =>response.json()
     ).then(data => setProdata(data))
     
  }, []);
  

  return (
    <div className="container-fluid card" id="w">
      <div id="bg">
        <button type="button" className="btn btn-primary m-3">House</button>
      </div>
      <div>
        <h6>Property 1</h6>
        <span>spo property 1 aus</span>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8" id="gb">
        <p className="inline-flex flex-col-2">
          <span className="text-sm h-8 text-gray-400">
            Project Value
          </span>
          {(Array.isArray(prodata.data.PropertyList) ) ? (
            prodata.data.PropertyList.map(item => (
              <div key={item.latestRate}>
                <p>{item.baseRate}</p>

              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </p>
        <p className="inline-flex ml-xl-4">
          <span className="h-8 text-sm xl:items-center text-gray-400">
            Block Price
          </span>
         
          {(Array.isArray(prodata.data.PropertyList) ) ? (
            prodata.data.PropertyList.map(item => (
              <div key={item.latestRate}>
                <p>{item.latestRate}</p>

              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
         
        </p>
        <p className="inline-flex flex-col w xl:items-center">
          <span className="text-sm h-8 text-gray-400">
            Target Completion
          </span>
          {(Array.isArray(prodata.data.PropertyList) ) ? (
            prodata.data.PropertyList.map(item => (
              <div key={item.targetCompletionDate}>
                <p>{item.targetCompletionDate}</p>

              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
         

         
        </p>
        <p className="inline-flex flex-col xl:items-center">
          <span className="text-sm h-8 text-gray-400">
            Project Growth Rate
          </span>
          {(Array.isArray(prodata.data.PropertyList) ) ? (
            prodata.data.PropertyList.map(item => (
              <div key={item.createdDate}>
                <p>{item.createdDate}</p>

              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </p>
      </div>
    </div>
  );
}
