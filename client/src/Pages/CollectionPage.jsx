import Contact from "./Contact"
import category from "../constant/data"
// import cat1 from "../assets/cat1.jpg"
// import cat2 from "../assets/cat2.jpg"
// import cat3 from "../assets/cat3.jpg"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const CollectionPage = () => {
  return (
    <div>
      {/* https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwce970b72/Image%20with%20Text/1403x572-px-()New-&-Trending-Desktop-banner.jpg?sw=1403&q=100 */}

      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img className="w-full h-1/2" src="https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwce970b72/Image%20with%20Text/1403x572-px-()New-&-Trending-Desktop-banner.jpg?sw=1403&q=100" alt="" />
        </div>
        <div>
          <img className="w-full h-1/2" src="https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwb58cf225/Hero%20Banner%20Slider/01-C-Online%20Exclusive-Desk.jpg?sw=1403&q=100" alt="" />
        </div>

      </Carousel>

      <h1 className="noto-serif-bold text-5xl py-8 text-center font-extrabold ">Explore Our Services </h1>
      <div className="flex flex-row items-center bg-[radial-gradient(circle,_rgba(2,0,29,0.986)_0%,_rgba(0,0,0,1)_100%)] flex-wrap justify-center  py-16 mb-6 gap-4">
        {
          category?.map(item => (
            <img key={item.id} src={item.url} alt="" className="w-16 lg:w-32 rounded-full border  hover:border-4 border-orange-500" />
          ))
        }
      </div>
      <div className="flex  flex-col lg:flex-row justify-center items-center gap-6 py-4">
        <div className="w-[90%] lg:w-1/2 ">
          <img className="w-full border border-blue-400" src="https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwdcc652e0/Two%20Image%20Block/02-2%20component_Men%20&%20Women-2.jpg?sw=698&q=100" alt="" />
        </div>

        <div className="w-[90%] lg:w-1/2 border-2 border-blue-400/50">
          <img className="w-full border border-red-400" src="https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwdc288ace/Two%20Image%20Block/07-Fashion%20Heel%20&%20Mens%20Casual-1.jpg?sw=698&q=100" alt="" />
        </div>
      </div>
      <div className="p-4 mb-4">
        <h3 className="font-bold py-2">10on10 Collection</h3>
        <p>Discover endless style possibilities with  10/10 Collection, ensuring you stay effortlessly chic from dawn to dusk. Whether you&apos;re a trendsetter, professional, or fashionista with big dreams, our 10/10 collection caters to your every need – from sporty sneakers to elegant semi-formal shoes to celebratory wedding styles.</p>
        <h4 className="font-semibold pt-6 hover:text-red-400 text-xl underline">Casual Sandals:</h4>
        <p>Stride through your day whether in office or beyond with the comfiest casual sandals from Bata Comfit.</p>
        <h4 className="font-semibold pt-6 hover:text-red-400 text-xl underline">Mens casual:</h4>
        <p>Exude style with our handpicked casuals for comfortable all-day wear from Hush Puppies and Bata Red Label.</p>
        <h4 className="font-semibold hover:text-red-400 pt-6 text-xl underline">Online Exclusive Offers:</h4>
        <p>Explore our online-exclusive deals, specially curated for our digital-savvy shoppers. Get access to exclusive discounts you won&apos;t find anywhere else.</p>
      </div>
      <Contact />
    </div>
  )
}

export default CollectionPage