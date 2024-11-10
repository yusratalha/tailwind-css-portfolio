import React from "react";
 const Skills = () => {
    return(
        <div id="skills"  className="container pt-32">
            <div className="grid md:grid-cols-2 gap-20 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl">Technologies i work with</h2>
                  <p className="text-gray-500 pt-2">i have a solid foundation in development specializing in HTML and CSS and javascriptmy experience extends to using framework like react and next.js to create dynamic and user friendly application.i stay updated on the latest technologies to enhance my skill 
                    </p>  
                </div>
                <div>
                    <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
                    <div className="space-y-2">
                        <h2  data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                        </div> 
                        <div className="space-y-2">
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2> 
                            </div>   
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default Skills