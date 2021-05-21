const { Carousel } = require("react-responsive-carousel");
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
function Banner() {
  return (
    <div className="relative">
      <div className="absolute h-32 w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showIndicators={false}
        showStatus={false}
        interval={3000}
        showThumbs={false}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
