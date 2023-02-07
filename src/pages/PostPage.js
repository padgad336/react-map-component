// import axios from 'axios'
import React, { Fragment, useState } from "react";
import Post from "../components/Post";

import "./page.css";
// import dataActors from "./actor_data";

const PostPage = () => {
  // const [dataActor, setActor] = useState([]);
  const dataActors = [
    {
      name: "Harry Potter",
      species: "human",
      gender: "male",
      house: "Gryffindor",
      dateOfBirth: "31-07-1980",
      yearOfBirth: 1980,
      ancestry: "half-blood",
      eyeColour: "green",
      hairColour: "black",
      wand: {
        wood: "holly",
        core: "phoenix feather",
        length: 11
      },
      patronus: "stag",
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: "Daniel Radcliffe",
      alive: true,
      image: "http://hp-api.herokuapp.com/images/harry.jpg"
    },
    {
      name: "Hermione Granger",
      species: "human",
      gender: "female",
      house: "Gryffindor",
      dateOfBirth: "19-09-1979",
      yearOfBirth: 1979,
      ancestry: "muggleborn",
      eyeColour: "brown",
      hairColour: "brown",
      wand: {
        wood: "vine",
        core: "dragon heartstring",
        length: ""
      },
      patronus: "otter",
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: "Emma Watson",
      alive: true,
      image: "http://hp-api.herokuapp.com/images/hermione.jpeg"
    },
    {
      name: "Ron Weasley",
      species: "human",
      gender: "male",
      house: "Gryffindor",
      dateOfBirth: "01-03-1980",
      yearOfBirth: 1980,
      ancestry: "pure-blood",
      eyeColour: "blue",
      hairColour: "red",
      wand: {
        wood: "willow",
        core: "unicorn tail-hair",
        length: 14
      },
      patronus: "Jack Russell terrier",
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: "Rupert Grint",
      alive: true,
      image: "http://hp-api.herokuapp.com/images/ron.jpg"
    },
    {
      name: "Draco Malfoy",
      species: "human",
      gender: "male",
      house: "Slytherin",
      dateOfBirth: "05-06-1980",
      yearOfBirth: 1980,
      ancestry: "pure-blood",
      eyeColour: "grey",
      hairColour: "blonde",
      wand: {
        wood: "hawthorn",
        core: "unicorn tail-hair",
        length: 10
      },
      patronus: "",
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: "Tom Felton",
      alive: true,
      image: "http://hp-api.herokuapp.com/images/draco.jpg"
    }
  ];
  // const createfetch = async () => {
  //   const res = await axios.get('http://localhost:8000/actor')
  //   console.log(res?.data);
  //   setActor(res?.data)
  // }
  console.log(dataActors);
  return (
    <Fragment>
      {/* <button onClick={createfetch}>gen Card</button> */}
      <div className="container">
        {dataActors?.map((row) => {
          return (
            <Post
              url={row?.image}
              species={row?.species}
              gender={row?.gender}
              name={row?.name}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default PostPage;
