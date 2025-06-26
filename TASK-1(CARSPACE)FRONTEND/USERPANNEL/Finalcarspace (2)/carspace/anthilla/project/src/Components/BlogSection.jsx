// "use client"

// import "./BlogSection.css"
// import blog1 from '../assets/blog1.png'
// import blog2 from '../assets/blog2.png'
// import blog3 from '../assets/blog3.png'

// const blogPosts = [
//   {
//     id: 1,
//     image: blog1,
//     author: "Name",
//     date: "Date",
//     title: "How the maruti Invicta is a lesson in brand building...",
//     readMore: "Read more",
//   },
//   {
//     id: 2,
//     image: blog2,
//     author: "Name",
//     date: "Date",
//     title: "How the maruti Invicta is a lesson in brand building...",
//     readMore: "Read more",
//   },
//   {
//     id: 3,
//     image: blog3,
//     author: "Name",
//     date: "Date",
//     title: "How the maruti Invicta is a lesson in brand building...",
//     readMore: "Read more",
//   },
// ]

// const BlogSection = () => {
//   return (
//     <div className="blog-section">
//       <div className="blog-container">
//         <div className="blog-header">
//           <h2>Latest News & Articles from the Blog</h2>
//           <p className="blog-description">
//             Frequently asked qestions ordered by popularity.Remember that if the visitor has not committed to the call to action, 
//             they may still have qestions (doubts) that can be answered.
//           </p>
//         </div>

//         <div className="blog-grid">
//           {blogPosts.map((post) => (
//             <article key={post.id} className="blog-card">
//               <div className="blog-image">
//                 <img src={post.image || "/placeholder.svg"} alt={post.title} />
//               </div>

//               <div className="blog-content">
//                 <div className="blog-meta">
//                   <span className="blog-author">{post.author}</span>
//                   <span className="blog-date">{post.date}</span>
//                 </div>

//                 <h3 className="blog-title">{post.title}</h3>

//                 <a href="#" className="blog-read-more">
//                   {post.readMore}
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BlogSection

"use client"

import "./BlogSection.css"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

const blogPosts = [
  {
    id: 1,
    image: blog1,
    author: "Name",
    date: "Date",
    title: "How the maruti Invicto is a lesson in brand building...",
    readMore: "Read more",
  },
  {
    id: 2,
    image: blog2,
    author: "Name",
    date: "Date",
    title: "How the maruti Invicto is a lesson in brand building...",
    readMore: "Read more",
  },
  {
    id: 3,
    image: blog3,
    author: "Name",
    date: "Date",
    title: "How the maruti Invicto is a lesson in brand building...",
    readMore: "Read more",
  },
]

const BlogSection = () => {
  return (
    <div className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2>Latest News & Articles from the Blog</h2>
          <p className="blog-description">
            Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call
            to action, they may still have questions (doubts) that can be answered.
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span className="blog-date">{post.date}</span>
                </div>

                <h3 className="blog-title">{post.title}</h3>

                <a href="#" className="blog-read-more">
                  {post.readMore}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
