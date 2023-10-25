import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <header className="flex h-96 w-full items-center justify-center bg-hero-pattern bg-cover bg-center px-4">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://res.cloudinary.com/dckqfwvh1/image/upload/v1698146938/Rick_and_Morty_kyquob.svg"
          className="my-4 h-24 md:h-32"
          alt="rick and morty logo"
        />
        <Link
          to={"/search"}
          className="text-md mt-10 cursor-pointer rounded-full border-2 border-[#bfde42] bg-[#43b4ca] px-4 py-2 text-center drop-shadow-lg hover:bg-[#35727e] md:text-2xl"
        >
          {/* <a className="text-md mt-10 cursor-pointer rounded-full border-2 border-[#bfde42] bg-[#43b4ca] px-4 py-2 text-center drop-shadow-lg hover:bg-[#35727e] md:text-2xl"> */}
          search characters of the series
          {/* </a> */}
        </Link>
        {/* <a
            className="px-12 py-3 mt-8 text-xl font-semibold rounded-full bg-gradient-to-r from-amber-500 to-red-600 text-white/70 drop-shadow-lg hover:from-amber-600 hover:to-red-700"
            href="#"
          >
            Get Started
          </a> */}
      </div>
    </header>
  );
};

export default HeroBanner;
