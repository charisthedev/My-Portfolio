// import Particles from "react-tsparticles";
// const ParticleBackground = () => {
//   return (
//     <div>
//       <Particles />
//     </div>
//   );
// };
// export default ParticleBackground;

// import React, { useCallback } from "react";
// import Particles from "react-particles";
// import type { Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

// export function ParticlesContainer(props: unknown) {
//   // this customizes the component tsParticles installation
//   const customInit = useCallback(async (engine: Engine) => {
//     // this adds the bundle to tsParticles
//     await loadFull(engine);
//   });

//   const options = {
//     /* custom options */
//   };

//   return <Particles options={options} init={this.customInit} />;
// }

import Particles from "react-tsparticles";
import ParticlesConfig from "./particlesconfig";
const ParticleBackground = () => {
  return <Particles params={ParticlesConfig} />;
};
export default ParticleBackground;
