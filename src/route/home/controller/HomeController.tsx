import axios from "axios";
import React, { useEffect } from "react";
import HomeView from "../view/HomeView";

const HomeController = () => {
  const getData = () => {
    axios.get("https://api.unsplash.com").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <HomeView />;
};

export default HomeController;
