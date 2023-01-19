import HotelInfo from "../components/hotelInfo";
import FlowerArch from "../components/flowerArch";

const Hotels = () => {
  return (
    <>
      <FlowerArch />
      <div className="z-10 -mt-28 lg:-mt-36 px-8">
        <h1 className="text-center my-10 text-4xl font-bold">Places to stay</h1>
        <div className="flex flex-wrap justify-center">
          <HotelInfo
            image="/premierInn.jpeg"
            name="Premier Inn"
            distance="15 mins"
            location="Leek"
            book="https://www.premierinn.com/gb/en/hotels/england/staffordshire/leek/leek-town-centre.html"
          />

          <HotelInfo
            image="/hilton.jpeg"
            name="Hilton Garden Inn"
            distance="30 mins"
            location="Stoke-on-Trent"
            book="https://www.hilton.com/en/hotels/manstgi-hilton-garden-inn-stoke-on-trent/"
            target="_blank"
          />

          <HotelInfo
            image="/duncombeArms.jpeg"
            name="Duncombe Arms"
            distance="30 mins"
            location="Ashbourne"
            book="https://www.duncombearms.co.uk/"
          />

          <HotelInfo
            image="/doveCottage.jpeg"
            name="Dove Farm Barns/Rose Cottages"
            distance="15-20mins"
            location="Caverswall"
            book="http://holidaycottagesstaffordshire.co.uk/"
          />

          <HotelInfo
            image="/peakWeaversGuest.jpeg"
            name="Peak Weavers"
            distance="15-20mins"
            location="Leek"
            book="https://www.peakweavers.co.uk/"
          />

          <HotelInfo
            image="/tawnyHotel.jpeg"
            name="Tawny Hotel"
            distance="On site"
            location="Stoke-on-Trent"
            book="https://thetawny.co.uk/"
          />
        </div>
      </div>
    </>
  );
};

export default Hotels;
