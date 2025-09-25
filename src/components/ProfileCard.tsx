type CardProps = {
  image: string;
  name: string;
  role: string;
  linkedin: string;
  github: string;
  gmail: string;
};

const Card = ({ image, name, role, linkedin, github, gmail }: CardProps) => {
  return (
    <div className="flex h-96 w-80 flex-col items-center bg-gray-200">
      <div className="mt-4 flex h-32 w-74 justify-center rounded-t-2xl bg-blue-600">
        <img
          className="relative top-14 size-30 rounded-full outline-3 outline-blue-700"
          src={image}
          alt={name}
        />
      </div>
      <div className="h-57 w-74 rounded-b-2xl bg-white">
        <div className="mt-16 flex flex-col items-center">
          <h1 className="text-2xl font-medium">{name}</h1>
          <h1 className="text-black">{role}</h1>
        </div>
        <div className="flex justify-center gap-3 p-5">
          <a href={linkedin}>
            <img
              className="size-5"
              src="https://cdn-icons-png.flaticon.com/512/2496/2496097.png"
              alt="LinkedIn"
            />
          </a>
          <a href={github}>
            <img
              className="size-6"
              src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png"
              alt="GitHub"
            />
          </a>
          <a href={`mailto:${gmail}`}>
            <img
              className="size-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
              alt="Gmail"
            />
          </a>
        </div>
        <div className="flex justify-center">
          <button className="rounded-full bg-blue-600 px-3 py-1 text-white">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
