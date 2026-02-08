import profilePic from "@/assets/images/profile.jpeg"

type Props = {
  title: string,
  date: string,
  cover: string
}

export const BlogPost = ({title, date, cover}: Props) => {
  return (
    <div className="px-4 py-4 w-[412px] border-2 rounded-2xl bg-white font-bold border-black hover:shadow-2xl">
      <img className="rounded-2xl w-fit" src={cover}></img>

      <div className="mt-4"/>
      <div className="text-xl">{title}</div>
      <div className="text-gray-600">{date}</div>
      
      <div className="mt-2"/>
      <div className="flex items-center">
        <img
          className="h-10 w-10 rounded-full border-2 border-black"
          src={profilePic}
          alt="profilePicture"
        />
        <div className="pl-2">Ferran Martínez</div>
      </div>
      <div className="mt-2"/>

    </div>
  )
}