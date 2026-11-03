import service from "../../assets/service.png";

const OurServices = () => {
  return (
    <div className="w-full mx-auto bg-[#03373D] rounded-2xl">
      <div className="text-center mt-10">
        <h2 className="text-2xl text-white font-bold pt-20">Our Services</h2>
        <p className="text-sm text-gray-400">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to <br /> business shipments — we
          deliver on time, every time.
        </p>
      </div>
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className=" bg-[#faeeee] w-full h-70 rounded-2xl mt-5">
          <div className="text-center space-y-2">
            <figure className="flex items-center justify-center pt-10">
              <img src={service} alt="Service Image" className="object-cover" />
            </figure>
            <h2 className="text-2xl font-bold">Express & Standard Delivery</h2>
            <p className="text-md text-gray-500">
              We deliver parcels within 24-72 hours in Dhaka, <br /> Chittagong,
              Sylhet, Khulna, and Rajshahi. <br /> Express delivery available in
              Dhaka within 4-6 <br /> hours from pick-up to drop-off.
            </p>
          </div>
        </div>

        <div className="bg-[#CAEB66] w-full h-70 rounded-2xl mt-5">
          <div className="text-center space-y-2">
            <figure className="flex items-center justify-center pt-10">
              <img src={service} alt="Service Image" className="object-cover" />
            </figure>
            <h2 className="text-2xl font-bold">Nationwide Delivery</h2>
            <p className="text-md text-gray-500">
              We deliver parcels nationwide with home delivery <br /> in every
              district, ensuring your products reach <br /> customers within
              48–72 hours.
            </p>
          </div>
        </div>

        <div className=" bg-[#faeeee] w-full h-70 rounded-2xl mt-5">
          <div className="text-center space-y-2">
            <figure className="flex items-center justify-center pt-10">
              <img src={service} alt="Service Image" className="object-cover" />
            </figure>
            <h2 className="text-2xl font-bold">Fulfillment Solution</h2>
            <p className="text-md text-gray-500">
              We also offer customized service with inventory <br /> management
              support, online order processing, <br /> packaging, and after
              sales support.
            </p>
          </div>
        </div>

        <div className=" bg-[#faeeee] w-full h-70 rounded-2xl mt-5">
          <div className="text-center space-y-2">
            <figure className="flex items-center justify-center pt-10">
              <img src={service} alt="Service Image" className="object-cover" />
            </figure>
            <h2 className="text-2xl font-bold">Cash on Home Delivery</h2>
            <p className="text-md text-gray-500">
              100% cash on delivery anywhere in Bangladesh <br /> with
              guaranteed safety of your product.
            </p>
          </div>
        </div>

        <div className=" bg-[#faeeee] w-full h-70 rounded-2xl mt-5">
          <div className="text-center space-y-2">
            <figure className="flex items-center justify-center pt-10">
              <img src={service} alt="Service Image" className="object-cover" />
            </figure>
            <h2 className="text-2xl font-bold">
              Corporate Service / Contract In Logistics
            </h2>
            <p className="text-md text-gray-500">
              Customized corporate services which includes <br /> warehouse and
              inventory management support.
            </p>
          </div>
        </div>

        <div className=" bg-[#faeeee] w-full h-70 rounded-2xl mt-5 mb-20">
          <div className="text-center space-y-2">
            <figure className="flex items-center justify-center pt-10">
              <img src={service} alt="Service Image" className="object-cover" />
            </figure>
            <h2 className="text-2xl font-bold">Parcel Return</h2>
            <p className="text-md text-gray-500">
              Through our reverse logistics facility we allow end <br />{" "}
              customers to return or exchange their products <br /> with online
              business merchants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
