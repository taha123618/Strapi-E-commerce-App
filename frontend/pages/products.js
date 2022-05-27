import React from "react";
import Link from "next/link";

function products(props) {
  return (
    <div className="container mx-auto px-4">
      <section className="text-black body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-red-700 text-2xl font-medium title-font mb-2">
                SunShine Chemical
              </h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => {
              return (
                <div
                  key={item.attributes.slug}
                  className="xl:w-1/4 md:w-1/2 p-4"
                >
                  <div className="bg-yellow-300 bg-opacity-40 p-6 rounded-lg">
                    <img
                      className="h-96 rounded m-auto mb-8"
                      src={
                        item.attributes.image.data &&
                        item.attributes.image.data.attributes.name
                      }
                      alt="content"
                    />
                    <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                      {item.attributes.category}
                    </h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">
                      {item.attributes.title}
                    </h2>
                    {/* colors  */}
                    {/* ye khud ke h  */}
                    <div className="hidden lg:bg-red-500 md:bg-purple-500 sm:bg-green-500 "></div>
                    <button
                      className={
                        "border-2 border-gray-800 ml-1 rounded-full w-6 h-6 focus:outline-none" +
                        `bg-${item.attributes.color}-500`
                      }
                    ></button>
                    {/* colors End  */}
                    <p className="leading-relaxed text-base">
                      {item.attributes.description}
                    </p>
                    <Link href={`/product/${item.attributes.slug}`}>
                      <button className="inline-flex text-black items-center bg-blue-400 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 md:mt-0">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

// sever side props
export async function getServerSideProps(context) {
  // token
  let headers = {
    Authorization:
      "Bearer 34c0eb4e44f9b1938aa81c8851dd4d97d764b00139027b6435a9965824fe2c9be517c8ef520fe6faeaa8bc10bbebb757dbe28abf6e4bfdf5691c99566f7a7ec0184bc6f1d98988cc9a8a629d411341116645cf1ff7b2db1cc1e3d417659334ad4b32a2c1f3ffc83ae7d811a7a5b768ee82eea6359e617f1fd13858f281656474",
  };
  // api call
  let a = await fetch(
    "http://localhost:1337/api/products?populate=*",
    // fetch api headers
    { headers: headers }
  );
  let products = await a.json();
  console.log(products);
  return {
    props: { products: products }, // will be passed to the page component as props
  };
}

export default products;
