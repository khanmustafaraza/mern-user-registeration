import React from "react";

const Courses = () => {
  const courseList = [
    {
      title: "Web Development Bootcamp",
      desc: "Learn HTML, CSS, JavaScript, React & Node.js",
      img: "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg",
    },
    {
      title: "Python for Beginners",
      desc: "Master Python from basics to advanced concepts.",
      img: "https://img.freepik.com/free-vector/python-programming-language_52683-8466.jpg",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Crack coding interviews with confidence.",
      img: "https://img.freepik.com/free-vector/algorithm-concept-illustration_114360-1761.jpg",
    },
    {
      title: "Machine Learning Basics",
      desc: "Understand ML concepts and build real projects.",
      img: "https://img.freepik.com/free-vector/machine-learning-concept-illustration_114360-992.jpg",
    },
    {
      title: "Mobile App Development",
      desc: "Create apps with React Native and Flutter.",
      img: "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5181.jpg",
    },
    {
      title: "Cybersecurity Fundamentals",
      desc: "Protect systems, networks, and data from threats.",
      img: "https://img.freepik.com/free-vector/cyber-security-concept-illustration_114360-5444.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Popular Courses</h2>
        <p className="text-muted">
          Choose a course and start learning today 📚
        </p>
      </div>
      <div className="row">
        {courseList.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <img
                src={course.img}
                className="card-img-top mx-auto mt-3"
                alt={course.title}
                style={{
                  width: "80%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div className="card-body text-center">
                <h5 className="fw-bold">{course.title}</h5>
                <p className="text-muted">{course.desc}</p>
                <button className="btn btn-warning">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
