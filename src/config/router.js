import { useRoutes } from "react-router-dom";
import Home from "../pages/home";
import SearchCar from "../pages/search-car";
import DetailCar from "../pages/search-car/detail-car";
import Login from "../pages/register/login";
import Payment from "../pages/payment/summary";
import Confirm from "../pages/payment/confirm";
import Tiket from "../pages/payment/e-tiket";
import Signup from "../pages/register/signup";

const publicRoutes = (props) => {
  return [
    { index: true, path: "/", element: <Home {...props} title="Home" /> },
    {
      index: true,
      path: "/cari-mobil",
      element: <SearchCar {...props} title="Cari Mobil" />,
    },
    {
      index: true,
      path: "/login",
      element: <Login {...props} title="Login" />,
    },
    {
      index: true,
      path: "/cari-mobil/:id",
      element: <DetailCar {...props} title="Cari Mobil" />,
    },
    {
      index: true,
      path: "/payment/:id",
      element: <Payment {...props} title="Pembayaran" />,
    },
    {
      index: true,
      path: "/confirm/",
      element: <Confirm {...props} title="Confirm" />,
    },
    {
      index: true,
      path: "/tiket/",
      element: <Tiket {...props} title="Tiket" />,
    },
    {
      index: true,
      path: "/signup/",
      element: <Signup {...props} title="Signup" />,
    },
    { index: true, path: "*", element: <div>Halaman Not Found</div> },
  ];
};

const PublicRoutes = (props) => {
  const router = useRoutes(publicRoutes(props));
  return router;
};

export default PublicRoutes;
