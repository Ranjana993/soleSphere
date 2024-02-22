import { BannerSideImage } from "../constant/data"

const Collection = () => {
    return (
        <div>
            <div className="flex mb-8 gap-3 items-center ">
                <img src={BannerSideImage} alt="" />
                <div>
                    <h2 className="text-2xl mb-2">NEW VELVET HIDE COLLECTION</h2>
                    <p className="leading-6 tracking-widest ">Experience the epitome of luxury with the new Hush Puppies Velvet Hide Collection. Each design rare and exquisite. Made with premium leather and offering unmatched comfort of superior craftsmanship in every stitch.</p>
                    <button className="border-2 border-black mt-6 hover:bg-black  w-[90%] hover:text-white px-4 py-2">EXPLORE THE COLLECTION </button>
                </div>
            </div>
            <div className="flex gap-2 w-full my-4">
                <img className="w-full" src="https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dw8198d945/Three%20Image%20Block/10-Price%20Point-1.jpg?sw=447&q=100" alt="" />
                <img className="w-full" src="https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dw3ac4fb42/Three%20Image%20Block/10-Price%20Point-2.jpg?sw=447&q=100" alt="" />
                <img className="w-full" src="https://www.bata.com/dw/image/v2/BCLG_PRD/on/demandware.static/-/Sites-bata-in-Library/default/dwc904a313/Three%20Image%20Block/10-Price%20Point-3.jpg?sw=447&q=100" alt="" />
            </div>
        </div>
    )
}

export default Collection