type Props = {
  title: string;
  url: string;
  description: string;
  cover: string;
  tags: string[];
};

export const ProjectCard = ({
  title,
  url,
  description,
  cover,
  tags,
}: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-4 w-[412px] border-2 rounded-2xl bg-white font-bold border-black hover:shadow-2xl transition-shadow"
    >
      <img
        className="rounded-2xl w-full h-48 object-cover"
        src={cover}
        alt={title}
      />

      <div className="mt-4" />
      <div className="text-xl">{title}</div>
      <div className="text-gray-600 font-normal text-sm mt-2">
        {description}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-bold bg-yellow-400 border-2 border-black rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};
