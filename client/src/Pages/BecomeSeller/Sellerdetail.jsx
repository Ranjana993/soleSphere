
const Sellerdetail = () => {
  return (
    <div className="py-12">
      <div className="px-4 lg:px-12">
        <h1 className="text-center font-playfair-display font-noto-serif text-3xl lg:text-5xl capitalize py-1 lg:py-3 my-4 lg:my-12">Do you want to become a seller ??</h1>
        <div className="flex lg:flex-row flex-col  gap-2 px-4 lg:px-12">
          <div className="w-full lg:w-[50%] p-0 lg:p-12">
            <p className="text-[18px]"> <span className="text-2xl text-rose-700 italic">Are you passionate about  footwear </span> and looking to grow your business?
              Join our thriving community of sellers  and take your brand to the next level!
              Our platform offers a unique opportunity
              to showcase your products to a wide audience of fashion
              enthusiasts and discerning shoppers.</p>
            <button className="bg-[#D9534F] my-8 rounded-lg text-white px-12 py-4">Get Started</button>
          </div>
          <div className="w-full lg:w-[50%]">
            <img className="rounded-lg" src="https://images.unsplash.com/photo-1528304270437-714a2d6fbb6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bSUyMHNob2VzfGVufDB8fDB8fHww" alt="" />
          </div>
        </div>
      </div>
      <section className="text-start lg:text-center px-4 lg:px-12 mt-12">
        <h2 className="text-rose-500 text-3xl py-4">Best Footwear Online </h2>
        <p className="text-gray-500 leading-8"> <span className="text-rose-600 italic font-noto-serif text-2xl ">Who can forget their </span> podiatrist’s advice of investing a good
          amount of your hard-earned paycheck on a pair of great
          quality footwear with the softest soles, cushion and comfort.
          An exquisite pair of footwear shoes, sandals, chappals, sliders
          or bellies that your friends, family and colleagues will notice and
          compliment on.
          Footwear online shopping is tricky. There is always a fear of shoes being different from
          their online appearances. We, at <span className="italic text-rose-600  underline">FootFly </span>, truly care about the ultimate satisfaction of our shoppers and make sure that only products of superior
          quality reach your doors. We don’t believe in leaving behind the nurturing our
          Mother
          Earth needs and in that spirit, use only Vegan Leather for creating all our products.</p>
      </section>
      {/* https://i.pinimg.com/564x/b9/9e/ca/b99eca3994c106dc8766f1332bb79bd1.jpg */}
      <div className="mt-16">
        <section className="flex px-4 lg:px-12 justify-between flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[50%] mt-12">
            <h4 className="text-5xl font-noto-serif py-4 text-rose-600">Sliders</h4>
            <p className="pr-1 lg:pr-12 text-gray-700">Sliding into someone&apos;s DM might be inappropriate and we girls do hate unwanted attention most of the time! But the mere thought of your feet sliding into fashion footwear like the oh-so comfortablesliders makes you want to daydream a bit longer.</p>
          </div>
          <div className="w-full lg:w-[50%]">
            <img className="rounded-xl" src="https://plus.unsplash.com/premium_photo-1663134311269-f396920c5082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2xpcHBlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
        </section>
        <section className="flex px-4 lg:px-12 justify-between  flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[50%] order-2">
            <img className="rounded-xl" src="https://i.pinimg.com/564x/b9/9e/ca/b99eca3994c106dc8766f1332bb79bd1.jpg" alt="" />
          </div>
          <div className="w-full lg:w-[50%] mt-12">
            <h4 className="text-5xl font-noto-serif py-4 text-rose-600">Chappals</h4>
            <p className="pr-1 lg:pr-12 text-gray-700">Our first pick when it’s raining footwear sale online, chappal sare
              everyone’s summer hot-picks. The complete package of comfort, style
              and designs-to-die-for, we have chappals hand-crafted for you that pays
              the rightful tribute to India’s cultural and geographical motifs.
              Staying true to our values of modernizing the traditional, Zouk has given
              a modern twist to the traditional Kolhapuri Chappals. Our modern Indian chappals
              can be paired with every possible outfit look— Indian, casual, semi-formal and formal attires.</p>
          </div>
        </section>
        <section className="flex px-4 lg:px-12 justify-between  flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[50%] mt-12">
            <h4 className="text-5xl font-noto-serif py-4 text-rose-600">Sandals</h4>
            <p className="pr-1 lg:pr-12pr-12 text-gray-700">Sandalsare our best friends forever, and ever. You want to go for a formal look?
              A casual look? Want to look tall or feel comfortable in your god-given blessed height?
              Sandals have got it all covered. Sandals can be open or close-toed and are held onto the
              foot with the help of straps— yes, indeed a strappy affair it is!</p>
          </div>
          <div className="w-full lg:w-[50%]">
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1504473044459-aa6935a9c050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxzYW5kYWxzfGVufDB8fDB8fHww" alt="" />
          </div>
        </section>
      </div>

    </div>
  )
}

export default Sellerdetail