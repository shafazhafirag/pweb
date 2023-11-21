import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Praktikum Melelahkan",
          "Udah Lama ndk Liburan",
          "Pemrograman Web it's easy",
          "Javascript it's hard :)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
