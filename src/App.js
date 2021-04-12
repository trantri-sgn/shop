
import routerConfig from 'routers/routerConfig'
import ROUTERS from 'routers/router'
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from 'core/AppProvider';
import reducers from 'redux/reducers'

function App() {
  return (

    // <MainLayOut >
    //   {/* <AccountAddress /> */}
    //   {/* <EditAccount /> */}
    //   {/* <Orders /> */}
    //   {/* <Payment /> */}
    //   {/* <EditPayment /> */}
    //   {/* <InforPersonal /> */}
    //   {/* <Checkout /> */}
    //   {/* <Contact /> */}
    //   {/* <OrderComplete /> */}
    //   {/* <Product /> */}
    //   {/* <Shop /> */}
    //   {/* <ShoppingCart /> */}
    //   {/* <Store /> */}
    //   {/* <ComingSoon /> */}
    //   {/* <WishList /> */}
    //   {/* <PageNotFound /> */}
    //   {/* <Blog /> */}
    //   <Auth />
    //   {/* <Home /> */}
    // </MainLayOut>
    <AppProvider reducers={reducers}>
      {routerConfig(ROUTERS)}
    </AppProvider>

  );
}

export default App;
