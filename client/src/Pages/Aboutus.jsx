import welcomeImg from "../assets/welcome_img.png"
import rightImg from "../assets/about--usRight_img.png"

const Aboutus = () => {
  return (
    <div>
      <div className="text-gray-700">
        <h1 className="playfair-display-extrabold text-2xl lg:text-5xl text-center py-8 capitalize gradient-text">
          We are the footwear provider making your life comfortable
        </h1>
        <div className="flex flex-col mt-4 lg:flex-row gap-0 lg:gap-12 justify-between">
          <div className="w-full lg:w-[50%] bg-red-400 rounded-tr-[50%] text-white">
            <h2 className="pt-12 px-2 lg:px-20 font-sevillana text-6xl">Effortlessly defining the modern Indian classic</h2>
            <p className="text-xl px-2 lg:px-20 py-12 font-playfair-display">FootJoy is a prominent brand in the golf footwear and apparel industry, known for its innovative designs and high-quality products. The company is a subsidiary of Acushnet Holdings Corp., which also owns other major golf brands like Titleist.</p>
          </div>
          <div className="w-full lg:w-[50%] ml-0 lg:ml-32">
            <img src={welcomeImg} alt="" />
          </div>
        </div>

        <div>
          <h3 className=" px-4 mt-12 py-4 lg:py-6 text-rose-500 font-serif  text-center text-3xl lg:text-6xl">Only the Good Goes In. </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 p-6 lg:p-12 justify-center items-center lg:items-stretch">
          <div className="border border-green-400 rounded-3xl flex flex-col w-[99%] lg:w-[25%] items-center p-4 shadow-custom-strong  hover:shadow-custom-medium">
            <img className="w-[50%] p-6 rounded-full" src="https://zouk.co.in/cdn/shop/files/image_25.png?v=1653330222" alt="" />
            <p className="mt-8 text-sm lg:text-[16px]">We believe in crafting the good. In fact, we are a PeTA approved Vegan brand. So, you can happily say - no animals were harmed in making this.</p>
          </div>
          <div className="border border-[#6DADDE] rounded-3xl flex flex-col w-[99%] lg:w-[25%]  items-center p-4 shadow-custom-medium hover:shadow-custom-violet ">
            <img className="w-[40%] p-6" src="https://zouk.co.in/cdn/shop/files/image_27.png?v=1653330222" alt="" />
            <p className="mt-8 text-sm lg:text-[16px]">We are unapologetically Indian. Proud but humble. Weaving tradition with the contemporary, we bring the modern Indian classic to the world.</p>
          </div>
          <div className="border border-rose-400 rounded-3xl flex flex-col w-[99%] lg:w-[25%]  items-center shadow-custom-light hover:shadow-custom-semistrong p-4">
            <img className="w-[40%] bg-cover p-6" src="https://zouk.co.in/cdn/shop/files/image_26.png?v=1653330222" alt="" />
            <p className="mt-8 text-sm lg:text-[16px]">Everything is thoughtfully designed. Our artisans then sculpt them to life. By hand. We thus make something that is authentically you.</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 py-14 justify-between mt-12">
          <div className="w-full lg:w-[50%] ml-0 lg:ml-32">
            <img src={rightImg} alt="" />
          </div>
          <div className="w-full lg:w-[50%] bg-[#e89535] rounded-tr-[30%] lg:rounded-tr-[50%] lg:rounded-bl-[50%] text-white">
            <h2 className="pt-12 px-2 lg:px-20 font-sevillana text-3xl">It all started with a vision: To bring stylish and functional products with an essence of India, to the world.</h2>
            <p className="text-xl px-2 lg:px-20 py-12 font-playfair-display text-white lg:text-blue-600 lg:font-bold">FootJoy is a prominent brand in the golf footwear and apparel industry, known for its innovative designs and high-quality products. The company is a subsidiary of Acushnet Holdings Corp., which also owns other major golf brands like Titleist.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Aboutus