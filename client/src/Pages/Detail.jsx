import {  useState } from "react";



 const Description=() => {
  const price = (125.0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    currencySign: "standard",
  });

  const [count, setCount] = useState(0);
  // const [isOpen, toggle] = useToggle();
  // const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function subtractOne() {
    // count === 0 ? toggle() : setCount(count - 1);
  }

  const handleAddProduct = () => {
    // if (count !== 0) {
    //   dispatch(
    //     addProduct({
    //       id: nanoid(),
    //       name: "Fall Limited Edition Sneakers",
    //       count: count,
    //     })
    //   );
    // }
    // setCount(0);
  };

  const toggle = () =>{

  }

  return (
    <section className="flex">
      <span className="c-description__brand">SNEAKER COMPANY</span>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything the
        weather can offer.
      </p>
      <div className="c-description__price">
        <div className="c-description__price__with-discount">
          <span>{price}</span>
          <span>50%</span>
        </div>
        <span className="c-description__price__without-discount">
          &#36;250.00
        </span>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="c-description__buttons"
      >
        <div className="c-count">
          <button onClick={subtractOne}>
            <img src={"iconMinus"} alt="subtract 1" />
          </button>
          <span className="c-count__display">{count}</span>
          <button onClick={() => setCount(count + 1)}>
            <img src={"iconPlus"} alt="add 1" />
          </button>
        </div>

        {/* {isOpen && ( */}
          <div aria-hidden="true" className="u-full-screen-bg-black">
            <div className="c-modal">
              <div className="c-modal__header">
                <h3>Oops!</h3>
                <button type="button" onClick={toggle}>
                  <img src={"btnClose"} alt="Close modal" />
                </button>
              </div>
              <div className="c-modal__body">
                <p>
                  Please, don&apos;t press the remove button without having something
                  in the count.
                </p>
              </div>
              <div className="c-modal__footer">
                <button onClick={toggle} type="button">
                  Ok
                </button>
              </div>
            </div>
          </div>
        {/* )} */}

        <button
          className="lg:flex-auto h-12"
          type="submit"
          onClick={handleAddProduct}
        >
          <img src={""} alt="Cart icon" />
          Add to cart
        </button>
      </form>
    </section>
  );
}

export default Description