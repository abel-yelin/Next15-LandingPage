"use client";
import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-[960px] mx-auto justify-between items-center gap-12 w-full py-16">
      <CountUp start={0} end={127} duration={2.5} scrollSpyOnce enableScrollSpy>
        {({ countUpRef, start }) => (
          <div className="text-[60px] font-bold flex flex-col justify-center items-center">
            <span ref={countUpRef} /> <br />{" "}
            <span className="text-center text-xs font-thin">Happy Users</span>
          </div>
        )}
      </CountUp>
      <CountUp
        start={0}
        end={2313}
        duration={2.5}
        scrollSpyOnce
        enableScrollSpy
      >
        {({ countUpRef, start }) => (
          <div className="text-[60px] font-bold flex flex-col justify-center items-center">
            <span ref={countUpRef} /> <br />{" "}
            <span className="text-center text-xs font-thin">Issues Solved</span>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={385} duration={2.5} scrollSpyOnce enableScrollSpy>
        {({ countUpRef, start }) => (
          <div className="text-[60px] font-bold flex flex-col justify-center items-center">
            <span ref={countUpRef} /> <br />{" "}
            <span className="text-center text-xs font-thin">Good Reviews</span>
          </div>
        )}
      </CountUp>
      <CountUp start={0} end={159} duration={2.5} scrollSpyOnce enableScrollSpy>
        {({ countUpRef, start }) => (
          <div className="text-[60px] font-bold flex flex-col justify-center items-center">
            <span ref={countUpRef} /> <br />{" "}
            <span className="text-center text-xs font-thin">Case Studies</span>
          </div>
        )}
      </CountUp>

      <CountUp start={0} end={211} duration={2.5} scrollSpyOnce enableScrollSpy>
        {({ countUpRef, start }) => (
          <div className="text-[60px] font-bold flex flex-col justify-center items-center">
            <span ref={countUpRef} /> <br />{" "}
            <span className="text-center text-xs font-thin">Orders Received</span>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Counter;
