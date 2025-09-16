import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Anjali Verma",
      feedback:
        "iCoder helped me land my first developer job. The projects were amazing!",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rohit Sharma",
      feedback: "The best platform for learning coding in a practical way.",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Sara Khan",
      feedback:
        "I loved the community and the mentors. Highly recommend iCoder!",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">What Our Learners Say</h2>
      </div>
      <div className="row">
        {reviews.map((review, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="card shadow-sm border-0 h-100 text-center p-4">
              <img
                src={review.img}
                alt={review.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
              />
              <p className="text-muted">"{review.feedback}"</p>
              <h6 className="fw-bold mt-2">{review.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
