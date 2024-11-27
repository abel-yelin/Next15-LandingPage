import React from "react";

const Download = () => {
  return (
    <div id="download" className="basic-5">
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2">
        <div className="mb-16 lg:mb-0">
          <img src="images/conclusion-smartphone.png" alt="alternative" />
        </div>
        <div className="lg:mt-24 xl:mt-44 xl:ml-12">
          <p className="mb-9 text-gray-800 text-3xl leading-10">
            下载 Spotify Premium APK，享受无广告的音乐体验。
          </p>
          <a className="btn-solid-lg" href="链接到你的APK下载">
            <i className="fab fa-apple"></i>下载
          </a>
          <a className="btn-solid-lg secondary" href="链接到你的APK下载">
            <i className="fab fa-google-play"></i>下载
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download;