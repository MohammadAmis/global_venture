import TestimonialCard from "./Testimonial_Card";
import TestimonialData from "./TestimonialData";

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto ">
        <div className="carousel carousel-center max-w-full space-x-10 pt-4">
            {TestimonialData.map((testimonial, index) => (
                <div key={index} className="carousel-item">
                    <TestimonialCard testimonial={testimonial} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default Testimonial;
