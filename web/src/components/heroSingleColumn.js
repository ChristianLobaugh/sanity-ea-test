import React from "react";
import PortableText from "./portableText";
import clientConfig from "../../client-config";
import CTALink from "./CTALink";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
const maybeImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = (
      <img className="w-3/4 mx-auto z-50" src={fluidProps.src} alt={illustration.image.alt} />
    );
  }
  return img;
};

function Hero(props) {
  const img = maybeImage(props.illustration);
  return (
    <div className="container px-3 mx-auto items-center">
      {/* Left col */}
      <div className="w-full justify-center items-start ">
        <p className="uppercase tracking-loose w-full text-center">{props.label}</p>
        <h1 className="my-4 text-5xl font-bold leading-tight text-center">{props.heading}</h1>
        <div className="leading-normal text-2xl mb-8 text-center">
          <PortableText blocks={props.tagline} />
        </div>
        {props.cta && props.cta.title && (
          <CTALink
            {...props.cta}
            buttonActionClass="mx-auto ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg text-center"
          />
        )}
      </div>
      {/* Right col */}
      <div className="w-full py-6 text-center">{img}</div>
    </div>
  );
}

export default Hero;
