import React from "react";
import Heading from "./Header";
import Card from "./Card";

const data = [
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: "a basic HTML CSS and typesscript calculator for performing essential arithmetic operation.",
        tags: ["HTML","Node","CSS","Typescript"],
        img: "/Screenshot_9-11-2024_16738_.jpeg",
    },
]

 const Projects = () => {
    return(
        <div id='projects' className='container pt-32'>
          <Heading title="My Projects" />
          <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
             />))}
          </div>
        </div>
    )
 }
 export default Projects