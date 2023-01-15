import Countdown from "../components/Countdown";
import FlowerArch from "../components/FlowerArch";
import Maps from "../components/Maps";

const About = () => {
  return (
    <>
      <FlowerArch />
      <div className="h-screen z-10 -mt-28 lg:-mt-36 text-center text-xl px-8">
        <h1 className="text-4xl mt-10 font-bold text-center">Info</h1>
        <p className="mt-5">
          Jim and Helen would love for you to join them in the celebration of
          their marriage!
        </p>
        <p>Let the countdown begin...</p>
        <Countdown />
        <p className="mt-5">Sunday 20th August 2023 1:30pm</p>
        <p>Arrival from 1pm</p>
        <div className="mt-5">
          <p>Foxtail Barns</p>
          <p>Consall Ln,</p>
          <p>Stoke-on-Trent,</p>
          <p>ST9 0AG</p>
          <Maps />
        </div>
        <p className="mt-2">Taxis 11:45pm</p>
        <p className="mt-5">Please note cars can be left overnight at the venue but please collect them before 10:30am on Monday 21st August</p>
      </div>
    </>
  );
};

export default About;
