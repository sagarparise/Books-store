import React from "react";

function BooksDetails({ selectedBook }) {
  console.log(selectedBook);
  return (
    <div class="w-[90%] mx-[auto] mt-2 p-2 flex  flex-col  rounded-md border md:flex-row ">
      <div class="h-full w-full md:h-[fit-content] md:w-[300px] self-center">
        <img
          src={selectedBook.volumeInfo.imageLinks.thumbnail}
          alt="Laptop"
          class="h-full w-full rounded-md object-cover"
        />
      </div>

      <div className="w-full ">
        <div class="p-4">
          <div className=" flex justify-between ">
            <h1 class="inline-flex items-center text-[25px] text-gray-300 object-cover font-bold">
              {selectedBook.volumeInfo.title}
            </h1>
            <p className=" text-lg text-gray-500 font-light">
              Published On : {selectedBook.volumeInfo.publishedDate}
            </p>
          </div>

          <h2 className="text-lg text-gray-500 font-bold">
            {selectedBook.volumeInfo.authors}
          </h2>
          <p class="mt-3 text-sm text-gray-600 text-justify">
            {selectedBook.volumeInfo.description}
          </p>

          <div className=" text-gray-400 mt-5 flex justify-start items-center gap-3">
            <h1 className=" px-2 ">
              Avg Rating : {selectedBook.volumeInfo.averageRating}
            </h1>
            <h1>Rating Count : {selectedBook.volumeInfo.ratingsCount}</h1>
            <h1>Publisher : {selectedBook.volumeInfo.publisher}</h1>
            <h1>Language : {selectedBook.volumeInfo.language}</h1>
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              class="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
            Now Read
            </button>

            <button
              type="button"
              class="rounded-md border border-gray-300 px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksDetails;
