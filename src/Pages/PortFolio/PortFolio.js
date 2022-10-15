import React from "react";
import PageTitle from "../Shared/PageTitle";
import Typewriter from "typewriter-effect";

const PortFolio = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-20">
      <PageTitle title="Portfolio"></PageTitle>
      <div className="flex mx-5 gap-10">
        <div>
          <h1 className="text-4xl font-serif text-primary">Hello!</h1>
          <h1 className="text-4xl font-serif">
            I'm <span className="text-orange-300">Md. Asadul Islam</span>
          </h1>
          <div className="text-2xl font-serif text-primary pb-2">
            <Typewriter
              options={{
                strings: [
                  "I love Programming",
                  "I love Developing",
                  "I love Coding",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p>
            Hi, My name is Md. Asadul Islam, and I'm a MERN stack web developer
            who excels in creating attractive solutions in the smallest period
            of time. As a web developer, my primary goal is to obtain a
            responsible and demanding Full Stack Web Developer position that
            will utilize my degree and job experience.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Email:</h1>
          <h1 className="text-lg text-gray-400">mdasadulripon@gmail.com</h1>
          <h1 className="text-2xl font-semibold">Github:</h1>
          <h1 className="text-lg text-gray-400">https://github.com/iripon07</h1>
          <h1 className="text-2xl font-semibold">Education:</h1>
          <h1 className="text-lg text-gray-400">
            Completed B.Sc. in CSE. <br /> Sylhet Engineering College.
          </h1>
        </div>
      </div>
      <h1 className="text-center text-3xl font-bold uppercase text-primary mt-20 py-2">
        My Expertise
      </h1>
      <div className="flex space-x-2 items-center justify-center flex-wrap">
        <ul className="flex space-x-2 items-center justify-center flex-wrap">
          <li className="font-medium bg-blue-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2">
            Javascript
          </li>
          <li className="font-medium bg-pink-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2">
            Python
          </li>
          <li className="font-medium bg-emerald-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2">
            C++
          </li>
          <li className="font-medium bg-orange-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2">
            React JS
          </li>
          <li className="font-medium bg-rose-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2">
            Node Js
          </li>
          <li className="font-medium bg-violet-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2">
            Tailwind
          </li>
          <li className="font-medium bg-teal-300 p-2 w-28 text-center rounded shadow hover:shadow-lg hover:cursor-text mb-2">
            Bootstrap
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortFolio;
