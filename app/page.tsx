import Counter from "@/components/Counter";
import Details from "@/components/Details";
import Download from "@/components/Download";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Lyric from "@/components/Lyric";
import Pricing from "@/components/Pricing";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <Lyric />
      <Features />
      <Details />
      <Counter />
      <Pricing />
      <Download />
    </>
  );
};

export default Home;
