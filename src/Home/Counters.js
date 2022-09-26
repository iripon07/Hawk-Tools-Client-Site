import React from "react";
import bg1 from "../images/bg1.jpg";
import { AiOutlineFlag } from "react-icons/ai";
import { FaRegThumbsUp, FaUsers } from "react-icons/fa";
import { TbTruckDelivery} from "react-icons/tb";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from 'react-countup';

const Counters = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <h1 className="text-4xl uppercase font-bold text-primary text-center pt-5">
        Millions Business Trust Us
      </h1>
      <h2 className="text-xl text-center">We Provide What Ours Clients Want</h2>

      <div className="max-w-screen-xl mx-auto pb-10 my-5">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-10">
        
          <div className="mx-auto">
            <AiOutlineFlag className="w-16 h-16 text-neutral mx-auto"></AiOutlineFlag>
            <h1 className="text-5xl font-bold text-center pt-3">
                <CountUp
                start={0}
                end={151}
                duration={2}
                decimals={0.1}
                delay={0.1}>
                {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                <span ref={countUpRef} />
                </VisibilitySensor>
                )}</CountUp>


            </h1>
            <h1 className="text-2xl text-neutral text-center">Countries</h1>
          </div>
          <div className="mx-auto">
            <TbTruckDelivery className="w-16 h-16 text-neutral mx-auto"></TbTruckDelivery>
            <h1 className="text-5xl font-bold text-center pt-3">
            <CountUp
                start={0}
                end={'10'}
                duration={2}
                decimals={0.1}
                suffix={'M+'}
                delay={0.1}>
                {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                <span ref={countUpRef} />
                </VisibilitySensor>
                )}</CountUp>
            </h1>
            <h1 className="text-2xl text-neutral text-center">Delivered Tools</h1>
          </div>
          <div className="mx-auto">
            <FaUsers className="w-16 h-16 text-neutral mx-auto"></FaUsers>
            <h1 className="text-5xl font-bold text-center pt-3">
            <CountUp
                start={0}
                end={10099}
                duration={2}
                decimals={0.1}
                suffix={'+'}
                delay={0.1}>
                {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                <span ref={countUpRef} />
                </VisibilitySensor>
                )}</CountUp>
            </h1>
            <h1 className="text-2xl text-neutral text-center">Happy Clients</h1>
          </div>
          <div className="mx-auto">
            <FaRegThumbsUp className="w-16 h-16 text-neutral mx-auto"></FaRegThumbsUp>
            <h1 className="text-5xl font-bold text-center pt-3">
            <CountUp
                start={0}
                end={1999}
                duration={2}
                decimals={0.1}
                suffix={'+'}
                delay={0.1}>
                {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                <span ref={countUpRef} />
                </VisibilitySensor>
                )}</CountUp>
            </h1>
            <h1 className="text-2xl text-neutral text-center">Feedbacks</h1>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Counters;
