import HotelInfo from "../components/hotelInfo";
import FlowerArch from "../components/flowerArch";

const Hotels = () => {
  return (
    <>
      <FlowerArch />
      <div className="z-10 -mt-28 lg:-mt-36 px-8 mb-20">
        <h1 className="text-center my-10 text-4xl font-bold">Places to stay</h1>
        <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 xl:gap-10">
          <HotelInfo
            image="/PremierInn.jpeg"
            name="Premier Inn"
            distance="15 mins away"
            location="Leek"
            book="https://www.premierinn.com/gb/en/hotels/england/staffordshire/leek/leek-town-centre.html"
          />

          <HotelInfo
            image="/Hilton.jpeg"
            name="Hilton Garden Inn"
            distance="30 mins away"
            location="Stoke-on-Trent"
            book="https://www.hilton.com/en/hotels/manstgi-hilton-garden-inn-stoke-on-trent/"
            target="_blank"
          />

          <HotelInfo
            image="/DuncombeArms.jpeg"
            name="Duncombe Arms"
            distance="30 mins away"
            location="Ashbourne"
            book="https://www.duncombearms.co.uk/"
          />

          <HotelInfo
            image="/DoveCottage.jpeg"
            name="Dove Farm Barns/Rose Cottages"
            distance="20mins away"
            location="Caverswall"
            book="http://holidaycottagesstaffordshire.co.uk/"
          />

          <HotelInfo
            image="/PeakWeaversGuest.jpeg"
            name="Peak Weavers"
            distance="20mins away"
            location="Leek"
            book="https://www.peakweavers.co.uk/"
          />

          <HotelInfo
            image="/TawnyHotel.jpeg"
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
