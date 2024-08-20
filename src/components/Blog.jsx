import React from 'react'

const Blog = ({title, author}) => {
  return (
    <>
      

      <main className="mt-10">
        <article className="border bg-green-100 rounded-sm p-10 space-y-4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            inventore maiores doloribus sunt provident, nulla sed minus sequi
            ullam atque nobis voluptatem aperiam cumque, dolor, omnis minima
            iusto iste libero?
          </p>
          <p>author: <span className="font-bold italic">{author}</span></p>
        </article>
      </main>
    </>
  )
}

export default Blog
