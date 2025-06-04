import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  },
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

const glitterVariants = {
  initial: {
    opacity: 0,
    scale: 0
  },
  animate: {
    opacity: [0, 0.8, 0],
    scale: [0, 1, 0],
    x: ["-50%", "50%"],
    y: ["-50%", "50%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: "easeOut"
    }
  }
};

const GlitterEffect = () => (
  <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-black rounded-full w-2 h-2"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        variants={glitterVariants}
        initial="initial"
        animate="animate"
        transition={{
          delay: Math.random() * 1.5,
          duration: 1.5 + Math.random(),
          repeat: Infinity,
          repeatDelay: 0.5 + Math.random()
        }}
      />
    ))}
  </div>
);

const Sellerdetail = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-white to-rose-100">
      <div className="px-4 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-center font-playfair-display font-noto-serif text-3xl lg:text-5xl capitalize py-1 lg:py-3 my-4 lg:my-12 bg-gradient-to-r from-rose-600 to-rose-800 bg-clip-text text-transparent"
          >
            Do you want to become a seller ??
          </motion.h1>

          <div className="flex lg:flex-row flex-col gap-2 px-4 lg:px-12">
            <motion.div
              variants={itemVariants}
              className="w-full lg:w-[50%] p-0 lg:p-12"
            >
              <p className="text-[18px] leading-relaxed">
                <span className="text-2xl text-rose-700 italic font-medium">Are you passionate about footwear</span> and looking to grow your business?
                Join our thriving community of sellers and take your brand to the next level!
                Our platform offers a unique opportunity to showcase your products to a wide
                audience of fashion enthusiasts and discerning shoppers.
              </p>
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                className="my-8"
              >
                <Link to={"/sign-up-seller"}>
                  <motion.button
                    variants={buttonVariants}
                    className="bg-gradient-to-r from-[#243258] to-[#10182f] my-8 rounded-lg text-white px-12 py-4 text-lg font-medium shadow-lg"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="w-full lg:w-[50%] relative"
              initial="hidden"
              animate={["visible", "float"]}
            >
              <img
                className="rounded-lg border-2 border-rose-300 shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1528304270437-714a2d6fbb6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGd5bSUyMHNob2VzfGVufDB8fDB8fHww"
                alt="Footwear collection"
              />
              <GlitterEffect />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-start lg:text-center px-4 lg:px-12 mt-24"
      >
        <h2 className="text-rose-500 text-4xl py-4 font-bold">Best Footwear Online</h2>
        <p className="text-gray-600 leading-8 max-w-7xl mx-auto md:text-[20px]">
          <span className="text-rose-600 italic font-noto-serif text-2xl font-medium">Who can forget their</span> podiatrist&apos;s advice of investing a good
          amount of your hard-earned paycheck on a pair of great
          quality footwear with the softest soles, cushion and comfort.
          An exquisite pair of footwear shoes, sandals, chappals, sliders
          or bellies that your friends, family and colleagues will notice and
          compliment on.
          Footwear online shopping is tricky. There is always a fear of shoes being different from
          their online appearances. We, at <span className="italic text-rose-600 font-bold underline">FootFly</span>, truly care about the ultimate satisfaction of our shoppers and make sure that only products of superior
          quality reach your doors. We don&apos;t believe in leaving behind the nurturing our
          Mother Earth needs and in that spirit, use only Vegan Leather for creating all our products.
        </p>
      </motion.section>

      <div className="mt-24 space-y-24">
        {/* Background glitter for CTA */}
        <div className="relativeinset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-red-900 rounded-full w-3 h-3"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0, 1.2, 0],
                x: ["-50%", "50%"],
                y: ["-50%", "50%"],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="flex px-4 lg:px-12 justify-between flex-col lg:flex-row gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[50%] mt-12"
          >
            <h4 className="text-5xl font-noto-serif py-4 text-rose-600 font-bold">Sliders</h4>
            <p className="pr-1 lg:pr-12 text-gray-700 leading-relaxed md:text-[20px]">
              Sliding into someone&apos;s DM might be inappropriate and we girls do hate unwanted attention most of the time! But the mere thought of your feet sliding into fashion footwear like the oh-so comfortable sliders makes you want to daydream a bit longer.
            </p>
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-[50%] relative"
            initial="hidden"
            animate={["visible", "float"]}
          >
            <img
              className="rounded-xl border-2 border-rose-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01] w-full h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1663134311269-f396920c5082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2xpcHBlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Sliders collection"
            />
            <GlitterEffect />
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="flex px-4 lg:px-12 justify-between flex-col lg:flex-row gap-6"
        >
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-[50%] order-1 lg:order-none relative"
            initial="hidden"
            animate={["visible", "float"]}
          >
            <img
              className="rounded-xl border-2 border-rose-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01] w-full h-full object-cover"
              src="https://i.pinimg.com/564x/b9/9e/ca/b99eca3994c106dc8766f1332bb79bd1.jpg"
              alt="Chappals collection"
            />
            <GlitterEffect />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[50%] mt-12"
          >
            <h4 className="text-5xl font-noto-serif py-4 text-rose-600 font-bold">Chappals</h4>
            <p className="pr-1 lg:pr-12 text-gray-700 leading-relaxed md:text-[20px]">
              Our first pick when it&apos;s raining footwear sale online, chappal sare
              everyone&apos;s summer hot-picks. The complete package of comfort, style
              and designs-to-die-for, we have chappals hand-crafted for you that pays
              the rightful tribute to India&apos;s cultural and geographical motifs.
              Staying true to our values of modernizing the traditional, we&apos;ve given
              a modern twist to the traditional Kolhapuri Chappals. Our modern Indian chappals
              can be paired with every possible outfit look— Indian, casual, semi-formal and formal attires.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="flex px-4 lg:px-12 justify-between flex-col lg:flex-row gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="w-full lg:w-[50%] mt-12"
          >
            <h4 className="text-5xl font-noto-serif py-4 text-rose-600 font-bold">Sandals</h4>
            <p className="pr-1 lg:pr-12 text-gray-700 leading-relaxed md:text-[20px]">
              Sandals are our best friends forever, and ever. You want to go for a formal look?
              A casual look? Want to look tall or feel comfortable in your god-given blessed height?
              Sandals have got it all covered. Sandals can be open or close-toed and are held onto the
              foot with the help of straps— yes, indeed a strappy affair it is!
            </p>
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-[50%] relative"
            initial="hidden"
            animate={["visible", "float"]}
          >
            <img
              className="rounded-xl border-2 border-rose-400 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01] w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1504473044459-aa6935a9c050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxzYW5kYWxzfGVufDB8fDB8fHww"
              alt="Sandals collection"
            />
            <GlitterEffect />
          </motion.div>
        </motion.section>
      </div>

      {/* Final CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-rose-200 to-rose-300 rounded-2xl mx-4 lg:mx-12 my-24 p-12 text-center relative overflow-hidden"
      >
        {/* Background glitter for CTA */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full w-3 h-3"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                scale: [0, 1.2, 0],
                x: ["-50%", "50%"],
                y: ["-50%", "50%"],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <h3 className="text-3xl lg:text-4xl font-bold text-rose-800 mb-6 relative z-10">Ready to Start Your Selling Journey?</h3>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto relative z-10  md:text-[20px]">
          Join hundreds of satisfied sellers who are growing their business with FootFly.
          Our platform provides all the tools you need to succeed in the footwear market.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block relative z-10"
        >
          <Link to={"/sign-up-seller"}>
            <button className="bg-gradient-to-r from-rose-600 to-rose-800 hover:from-rose-700 hover:to-rose-900 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Become a Seller Today</span>
              {/* Button glitter */}
              <motion.span
                className="absolute inset-0 bg-white opacity-0"
                animate={{
                  opacity: [0, 0.3, 0],
                  left: ["0%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Sellerdetail