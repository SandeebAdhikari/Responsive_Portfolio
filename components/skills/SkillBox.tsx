import Image, { StaticImageData } from "next/image";

export type SkillBoxProps = {
  name: string;
  icon: string | StaticImageData | React.ReactElement;
};

export default function SkillBox({ name, icon }: SkillBoxProps) {
  return (
    <div className="flex w-max items-center gap-2 rounded-lg border border-orange-200 bg-white px-4 py-3 shadow-md dark:bg-gray-800 text-sm sm:text-base md:text-xl lg:text-2xl">
      {typeof icon === "string" ? (
        <Image
          src={icon}
          alt={`${name} icon`}
          className="h-5 w-5 sm:h-8 sm:w-8"
        />
      ) : typeof icon === "object" && "src" in icon ? (
        <Image
          src={icon as StaticImageData}
          alt={`${name} icon`}
          className="h-5 w-5 sm:h-8 sm:w-8"
        />
      ) : (
        icon
      )}
      <span className="font-medium text-gray-100">{name}</span>
    </div>
  );
}
