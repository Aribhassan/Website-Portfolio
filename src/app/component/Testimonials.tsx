"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 4.2,
      text: "mpressive attention to detail and creativity. My web presence has never been stronger!",
      name: "Jane D",
      role: "CEO",
      avatar: "https://pagedone.io/asset/uploads/1696229969.png",
    },
    {
      rating: 3,
      text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
      name: "Harsh P.",
      role: "Product Designer",
      avatar: "https://pagedone.io/asset/uploads/1696229994.png",
    },
    {
      rating: 4.9,
      text: "Great experience! The team was communicative and implemented all my ideas perfectly.",
      name: "Priya Patel",
      role: "Design Lead",
      avatar: "https://pagedone.io/asset/uploads/1696230027.png",
    },
    {
      rating: 5,
      text: "Top-notch developers! My e-commerce site is fast, secure, and user-friendly",
      name: "James Carter",
      role: "Design Lead",
      avatar: "https://pagedone.io/asset/uploads/1696230027.png",
    },
    {
      rating: 4.3,
      text: "They delivered a professional, responsive design ahead of schedule. Couldn’t be happier!",
      name: "Michael Rivera",
      role: "Design Lead",
      avatar: "https://pagedone.io/asset/uploads/1696230027.png",
    },
    {
      rating: 4.6,
      text: "Exceptional service! My website looks stunning and performs flawlessly. Highly recommend!",
      name: "Sarah Thompson",
      role: "Design Lead",
      avatar: "https://pagedone.io/asset/uploads/1696230027.png",
    },  
  ];

  return (
    <section id="Testimonials" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-sm text-orange-500 font-medium block mb-2">
            TESTIMONIAL
          </span>
          <h2 className="text-4xl font-bold text-white  ">
            What our happy user says!
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop
          centeredSlides
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 32 },
            768: { slidesPerView: 2, spaceBetween: 32 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-gray-900/50 border border-white rounded-xl p-6 mx-auto transition-all hover:border-orange-500 hover:shadow-lg">
                <div>
                  <div className="flex items-center mb-7 gap-2 text-amber-500">
                    <svg  className="w-5 h-5"  viewBox="0 0 18 17"  fill="none"  xmlns="http://www.w3.org/2000/svg">
                      <path
                        d=" M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-base font-semibold text-yellow-600">
                      {item.rating}
                    </span>
                  </div>
                  <p className="text-base text-white leading-6 pb-8 group-hover:text-orange-500">
                    {item.text}
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-gray-200 pt-5">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    src={item.avatar}
                    alt={item.name}
                  />
                  <div>
                    <h5 className="text-white font-medium mb-1">
                      {item.name}
                    </h5>
                    <span className="text-sm text-gray-500">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
















// function Testimonials() {
//   const testimonials = [
//     {
//       name: "Jane Doe",
//       feedback:
//         "John delivered exceptional work on my website redesign project. Highly professional and creative!",
//       image: "/images/jane.jpg", // Placeholder image path.
//     },
//     {
//       name: "Mark Smith",
//       feedback:
//         "It was a pleasure working with John. He brought my ideas to life with great attention to detail.",
//       image: "/images/mark.jpg", // Placeholder image path.
//     },
//     {
//       name: "Alice Johnson",
//       feedback:
//         "John’s UX/UI skills are top-notch. My application’s interface looks modern and intuitive!",
//       image: "/images/alice.jpg", // Placeholder image path.
//     },
//   ];

//   return (
//     <section id="testimonials" className="bg-black text-white py-12">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">What My Clients Say</h2>
//         <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg text-left max-w-sm shadow-lg"
//             >
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-16 h-16 rounded-full mx-auto mb-4"
//               />
//               <p className="text-sm text-gray-400 mb-4">"{testimonial.feedback}"</p>
//               <h4 className="text-lg font-bold">{testimonial.name}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }