"use client"
import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./particle_config/ParticleConfig";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
	const particlesInit = useCallback( async (engine) => {
        console.log(engine)
		await loadFull(engine);
	}, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container)
    }, []);

	return (
            <Particles
            id="tsparticles"
			options={ParticleConfig}
            loaded={particlesLoaded}
			init={particlesInit}
		    />
	);
}

export default ParticleBackground