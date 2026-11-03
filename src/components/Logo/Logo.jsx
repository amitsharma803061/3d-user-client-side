import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-end">
      <img src={logo} alt="" className="w-11" />
      <h2 className="text-3xl font-bold -ms-3">ZapShift</h2>
    </div>
  );
};

export default Logo;
