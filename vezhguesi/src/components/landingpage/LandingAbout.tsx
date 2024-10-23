import React from "react";
import homejpg from "../../assets/Home (3).jpg";

const LandingAbout: React.FC = () => {
  return (
    <section className="w-full bg-[#060606] text-white py-20 md:py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-x-32 items-center">
        <div className="md:w-1/3 mb-10 md:mb-0 flex flex-col justify-center">
          <p className="text-base text-[#E0E0E0] md:text-lg mb-4 leading-[1.3]">
            What Else Vezhguesi can do?{" "}
            <span className="text-gray-500 md:text-lg ">
              adipisicing elit. Dolor, in maxime. Quisquam culpa nam harum
              doloremque distinctio cupiditate autem dolore possimus? Temporibus
              aliquam soluta saepe magni optio consequuntur cum molestiae! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Earum neque
              consequatur quod fuga, laudantium saepe sunt, expedita porro nobis
              soluta doloremque nam exercitationem fugiat, consectetur
              reiciendis quas maxime aspernatur. Ullam?
            </span>
          </p>

          <button className="px-6 py-3 bg-transparent border-opacity-20 w-1/2 md:w-1/2 text-white border border-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl">
            Sign Up Now
          </button>
        </div>

        <div className="relative flex items-center justify-center w-full md:w-2/3">
          <img
            src={homejpg}
            alt="Additional Features"
            className="rounded-lg shadow-lg object-cover"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingAbout;
