import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  Mx: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  Lg: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5
  },
  Md: {
    breakpoint: { max: 1024, min: 464 },
    items: 2.5
  },
  Sm: {
    breakpoint: { max: 464, min: 0 },
    items: 1.5
  }
};

export default function App() {
  return (
    <div className="App max-w-2xl mx-auto text-left py-5 px-4 sm:py-5u sm:px-6 lg:max-w-3xl lg:px-8">
      <h1 className="text-xl py-3">Products you may like -></h1>
      <Carousel
        responsive={responsive}
        minimumTouchDrag={50}
        arrows={false}
        autoPlay={true}
        infinite
      >
        <div>
          <div className="w-48 mr-2 rounded-lg">
            <div className="border-100 rounded-lg">
              <img
                src="https://images.ctfassets.net/sa0xzxw55dr7/6DvPKSRuXGsPs6618Ypjov/11632283f2372bea3e2c544839f03b96/hypervolt-go-final-thumbnail.jpg"
                alt="123"
                className="w-full rounded-t-lg h-32 object-center object-cover group-hover:opacity-75"
              />
              <div className="">
                <h1 className="mb-1 px-2 text-lg">Lyric Massager</h1>

                <p className="mb-1 px-2 text-xl font-medium pr-2">
                  $150
                  <span className="line-through text-gray-500 px-2">$180</span>
                </p>
                <div className="text-md px-2 blue-navy py-2 rounded-lg-down text-white">
                  20% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-48 mr-2 rounded-lg">
            <div className="border-100 rounded-lg">
              <img
                src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/minky-minky-grey-rc-2_1080x.png?v=1640931533"
                alt="123"
                className="w-full rounded-t-lg h-32 object-center object-cover group-hover:opacity-75"
              />
              <div className="">
                <h1 className="mb-1 px-2 text-lg">Lyric Massager</h1>

                <p className="mb-1 px-2 text-xl font-medium pr-2">
                  $150
                  <span className="line-through text-gray-500 px-2">$180</span>
                </p>
                <div className="text-md px-2 blue-navy py-2 rounded-lg-down text-white">
                  20% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-48 mr-2 rounded-lg">
            <div className="border-100 rounded-lg">
              <img
                src="https://cdn.shopify.com/s/files/1/2034/5801/products/GRV.OriginalWeighted.Grey.PDP1_1800x1800.jpg"
                alt="123"
                className="w-full rounded-t-lg h-32 object-center object-cover group-hover:opacity-75"
              />
              <div className="">
                <h1 className="mb-1 px-2 text-lg">Lyric Massager</h1>

                <p className="mb-1 px-2 text-xl font-medium pr-2">
                  $150
                  <span className="line-through text-gray-500 px-2">$180</span>
                </p>
                <div className="text-md px-2 blue-navy py-2 rounded-lg-down text-white">
                  20% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-48 mr-2 rounded-lg">
            <div className="border-100 rounded-lg">
              <img
                src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/Luxome-LAYRPillow-Lightbox_768x.png?v=1642777005"
                alt="123"
                className="w-full rounded-t-lg h-32 object-center object-cover group-hover:opacity-75"
              />
              <div className="">
                <h1 className="mb-1 px-2 text-lg">Lyric Massager</h1>

                <p className="mb-1 text-xl px-2 font-medium pr-2">
                  $150
                  <span className="line-through text-gray-500 px-2">$180</span>
                </p>
                <div className="text-md px-2 blue-navy py-2 rounded-lg-down text-white">
                  20% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
