import bookingIcon from "../../assets/bookingIcon.png";

const HowWorks = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-3xl font-bold mt-5">How to Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        <div className="bg-base-200 w-full h-70 rounded-2xl mt-5">
          <div className="ml-5 space-y-2">
            <img src={bookingIcon} alt="" className="pt-10" />
            <h2 className="text-2xl font-bold">Booking Pick & Drop</h2>
            <p className="text-md text-gray-500">
              From personal packages to <br /> business shipments --- we deliver{" "}
              <br /> on time, every time.
            </p>
          </div>
        </div>
        <div className="bg-base-200 w-full h-70 rounded-2xl mt-5">
          <div className="ml-5 space-y-2">
            <img src={bookingIcon} alt="" className="pt-10" />
            <h2 className="text-2xl font-bold">Booking Pick & Drop</h2>
            <p className="text-md text-gray-500">
              From personal packages to <br /> business shipments --- we deliver{" "}
              <br /> on time, every time.
            </p>
          </div>
        </div>
        <div className="bg-base-200 w-full h-70 rounded-2xl mt-5">
          <div className="ml-5 space-y-2">
            <img src={bookingIcon} alt="" className="pt-10" />
            <h2 className="text-2xl font-bold">Booking Pick & Drop</h2>
            <p className="text-md text-gray-500">
              From personal packages to <br /> business shipments --- we deliver{" "}
              <br /> on time, every time.
            </p>
          </div>
        </div>
        <div className="bg-base-200 w-full h-70 rounded-2xl mt-5">
          <div className="ml-5 space-y-2">
            <img src={bookingIcon} alt="" className="pt-10" />
            <h2 className="text-2xl font-bold">Booking Pick & Drop</h2>
            <p className="text-md text-gray-500">
              From personal packages to <br /> business shipments --- we deliver{" "}
              <br /> on time, every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
