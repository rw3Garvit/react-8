import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Api = () => {
  let [data, setdata] = useState([]);

  let fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      //   console.log(res.data);
      setdata(res.data);
    });
  };

  //   console.log(data, "data");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div class="row">
      {data?.map((val, ind) => {
        return (
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{val.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{val.id}</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                view
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
