interface AboutCardProps {
  title?: string;
  description?: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ description }) => {
  return (
    <div className="w-full rounded-3xl">
      <p className="text-xl text-justify md:text-2xl lg:text-3xl">
        {description}
      </p>
    </div>
  );
};

export default AboutCard;
