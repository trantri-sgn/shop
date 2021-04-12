
import Auth from 'features/Auth/Auth'
import Home from 'features/Home/Home'
import AccountAddress from 'features/Account/AccountAddress';
import PageNotFound from 'features/PageNotFound/PageNotFound';


import MainLayOut from 'layout/MainLayOut';



import Blog from 'features/Blog/Blog';

import EditAccount from 'features/Account/components/EditAccount';
import Order from 'features/Account/components/Order';
import Orders from 'features/Account/components/Orders';
import Payment from 'features/Account/components/Payment/Payment';
import EditPayment from 'features/Account/components/EditPayment/EditPayment';
import InforPersonal from 'features/Account/components/InforPersonal/InforPersonal';
import WishList from 'features/Account/components/WishList/WishList';
import Checkout from 'features/Checkout/Checkout';
import Contact from 'features/Contact/Contact';
import OrderComplete from 'features/OrderComplete/OrderComplete';
import Product from 'features/Product/Product';
import Shipping from 'features/Shipping/Shipping';
import Shop from 'features/Shop/Shop';
import ShoppingCart from 'features/ShoppingCart/ShoppingCart';
import Store from 'features/Store/Store';
import ComingSoon from 'features/ComingSoon/ComingSoon';
import Account from 'features/Account/Acount';

const ROUTERS = [
    {
        path: '/',
        component: MainLayOut,
        routers: [
            {
                path: "/auth",
                component: Auth,
            },
            {
                path: "/account",
                component: Account,
                auth: true,
                routers: [
                    {
                        path: '/order',
                        component: Orders,
                    }
                ]
            },
            {
                path: "/payment",
                component: Shipping,
            },
            {
                path: "/",
                component: Home,
                exact: true
            },
            {

                component: PageNotFound,
            }
        ]
    },

]


export default ROUTERS;