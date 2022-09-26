import React from "react";
import PageTitle from "../Shared/PageTitle";

const Blogs = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <PageTitle title="Blogs"></PageTitle>
      <div className="p-10">
        <h1 className="text-3xl font-bold text-neutral py-5">How will you improve the performance of a React Application?</h1>
        <p>
          1. Use binding functions in constructors: By adding an arrow function
          in a class, we add it as an object and not as the prototype property
          of the class. And if we use the component multiple time, there will be
          various instances of these functions within each object of the
          component. The most reliable way to use functions is to bind them with
          the constructor. <br /> <br />
          2. Avoid inline style attributes: The browser often
          invests a lot of time rendering, when styles are implied inline.
          Scripting and rendering take time because the browser has to plan all
          the React style rules to the CSS properties. Creating a separate
          style.js file and importing it into the component is a faster method.
          <br /> <br />
          3. Avoid extra tags by using React fragments: Using react fragments decreases the no. of additional tags and satisfies the necessity of having a single parent element in the component.
          <br /> <br />
          4. Avoid inline function in the render method: If we use the inline function, the function will generate a new instance of the object in every render and there will be multiple instances of these functions which will lead to consuming more time in garbage collection. To optimize that we can define functions outside the render method and call them wherever required.
          <br /> <br />
          5. Avoid bundling all of the front end code in a single file: By splitting the files into resource and on-demand code files we can reduce the time consumed in presenting bundled files to the browser transformers.
        </p>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-neutral py-5">5 Types of Application State in React and How They Help in State Management</h1>
        <p></p>
      </div>
    </div>
  );
};

export default Blogs;
