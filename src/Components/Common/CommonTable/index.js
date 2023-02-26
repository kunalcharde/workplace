import moment from "moment";
import React from "react";
import "./table.css";
function CommonTable({ columns, data,btnAction }) {
  return (
    <div
    className="table"
    >
    <div className="table-container">
      <div className="table-header">
        {columns.map((column, index) => {
          return (
            <div style={column.style} key={index}>
              {column.label}
            </div>
          );
        })}
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div className="table-body">
              {columns.map((column, index) => {
                if (column.type === "date") {
                  return (
                    <div style={column.style} key={index}>
                      {moment(item[column.datakey].toDate())
                        .startOf("day")
                        .fromNow()}
                    </div>
                  );
                } 
                else if (column.type === "url") {
                  return (
                  <div style={column.style} key={index}>
                    <a
                      href={item[column.datakey]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open
                    </a>
                  </div>);
                }
                else if(column.type === "action"){
                  return (
                   
                    <div
                  
                    style={column.style} key={index}>
                      <button
                      className="shortlist-btn"
                      disabled={item.status === "accepted" || item.status === "rejected"}
                      onClick={()=>btnAction(item,'shortlist')}
                      style={{ opacity: item.status === "accepted" || item.status === "rejected" ? 0.5 : 1,}}
                      >Shortlist</button>
                      <button
                        style={{ opacity: item.status === "accepted" || item.status === "rejected" ? 0.5 : 1,}}
                      disabled={item.status === "accepted" || item.status === "rejected"}
                      onClick={()=>btnAction(item,'reject')}
                      className="reject-btn"
                      >Reject</button>
                    </div>
                   
                  );
                }
                else{
                return (
                  <div style={column.style} key={index}>
                    {item[column.datakey]}
                  </div>
                );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default CommonTable;
