import Timeline from "@/components/animations/Timeline";
import WavyText from "@/components/animations/WavyText";

const Education = () => {
  const events = [
    {
      title: "Bachelors of Computer Science",
      school: "2020-2025 | NJIT",
      description:
        "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.",
    },
    {
      title: "Master of Computer Science",
      school: "Coming Soon | Unknown",
      description:
        "It will be a continuation of my undergraduate studies with a focus on AI.",
    },
    {
      title: "Online Coursework",
      school: "2020-2025 | Udemy And Coursera",
      description:
        "Completed coursework in C prgramming, html, css, react, node, express, mongodb, and more.",
    },
  ];

  return (
    <div className="flex flex-col items-center px-6 mt-[150px]">
      <h1 className="font-display text-2xl md:text-5xl lg:6xl">
        <WavyText word="Education And Certification" />
      </h1>

      <div className="flex flex-col items-center mt-8 w-full">
        {events.map((event, index) => (
          <Timeline key={index} index={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Education;
