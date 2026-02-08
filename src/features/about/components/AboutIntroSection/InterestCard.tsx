type Props = {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
};

export const InterestCard = ({ title, description, icon, bgColor }: Props) => {
  return (
    <div
      className={`${bgColor} p-6 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl bg-white border-2 border-black rounded-lg p-2">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};
