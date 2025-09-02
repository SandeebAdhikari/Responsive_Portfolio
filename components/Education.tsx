import Timeline from "@/components/animations/Timeline";
import WavyText from "@/components/animations/WavyText";

export type TimelineEvent = {
  title: string;
  school: string;
  description: string;
};

export interface TimelineProps {
  index: number;
  event: TimelineEvent;
}

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
        "Completed coursework in C programming, HTML, CSS, React, Node, Express, MongoDB, and more.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 mt-[150px]">
      {/* Responsive heading */}
      <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
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
