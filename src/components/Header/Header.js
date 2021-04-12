import React from 'react'
import IconSocial from './components/IconSocial/IconSocial'
import Infor from './components/Infor/Infor'
import InforLanguage from './components/InforLanguage/InforLanguage'
import ListItem from './components/ListItem/ListItem'
import { Link } from 'react-router-dom'

export default function Header() {
    const home = [
        {
            id: 1,
            title: "Default",
        },
        {
            id: 2,
            title: "Classic",
        },
        {
            id: 3,
            title: "Fashion",
        },
        {
            id: 4,
            title: "Boxed",
        },
        {
            id: 5,
            title: "Simple",
        },
        {
            id: 6,
            title: "Asymmetric",
        },
        {
            id: 7,
            title: "Sidenav",
        },
        {
            id: 8,
            title: "Landing",
        },
    ]

    return (
        <>
            <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
                <div className="container">
                    {/* Promo */}
                    <div className="mr-xl-8">
                        <i className="fe fe-truck mr-2" /> <span className="heading-xxxs">Free shipping worldwide</span>
                    </div>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="topbarCollapse">
                        {/* Nav */}
                        <InforLanguage />
                        {/* Nav */}
                        <Infor />
                        {/* Nav */}
                        <IconSocial />
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    {/* Brand */}
                    <Link className="navbar-brand" to='/'>
                        Shopper.
          </Link>
                    {/* Toggler */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    {/* Collapse */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* Nav */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#!">Home</a>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm"></ul>
                                            {home.map((item) => <ListItem key={item.id} item={item} />)}
                                            <ul />
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown position-static">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#!">Catalog</a>
                                {/* Menu */}
                                <div className="dropdown-menu w-100">
                                    {/* Tabs */}
                                    <form className="mb-2 mb-lg-0 border-bottom-lg">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* Nav */}
                                                    <nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
                                                        <a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
                                                            Women
                            </a>
                                                        <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                                            Men
                            </a>
                                                        <a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
                                                            Kids
                            </a>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/* Tab content */}
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="tab-content">
                                                <div className="tab-pane fade show active" id="navTab">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Clothing</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                    {["All Clothing", "Blouses Shirts", "Dresses", "Denim", "Jeans", "Leggings"].map((item, index) => <ListItem key={index} item={item} />)}
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Shoes &amp; Boots</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-6 mb-md-0 font-size-sm">
                                                                    {["All Shoes & Boots", "Branded Shoes", "Boots", "Heels", "Trainers", "Sandals", "Shoes", "Jewellery", "Wide Fit Shoes"].map((item, index) => <ListItem key={index} item={item} />)}
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Bags &amp; Accessories</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-0 font-size-sm">
                                                                    {["All Bags & Accessories", "Accessories", "Bags & Purses", "Luggage", "Belts", "Hats", "Hair Accessories", "Jewellery", "Travel Accessories"].map((item, index) => <ListItem key={index} item={item} />)}
                                                                </ul>
                                                            </div>
                                                            <div className="col-6 col-md">
                                                                {/* Heading */}
                                                                <div className="mb-5 font-weight-bold">Collections</div>
                                                                {/* Links */}
                                                                <ul className="list-styled mb-0 font-size-sm">
                                                                    {["All Collections", "Occasionwear", "Going Out", "Workwear", "Holiday Shop", "Holiday Shop", "Jean Fit Guide"].map((item, index) => <ListItem key={index} item={item} />)}
                                                                </ul>
                                                            </div>
                                                            <div className="col-4 d-none d-lg-block">
                                                                {/* Card */}
                                                                <div className="card">
                                                                    {/* Image */}
                                                                    <img className="card-img" src="/img/products/product-110.jpg" alt="..." />
                                                                    {/* Overlay */}
                                                                    <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                                                        <div className="text-center">
                                                                            <a className="btn btn-white stretched-link" href="./shop.html">
                                                                                Shop Sweaters <i className="fe fe-arrow-right ml-2" />
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#!">Shop</a>
                                {/* Menu */}
                                <div className="dropdown-menu" style={{ minWidth: '650px' }}>
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Shop</div>
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        {["Default", "Topbar", "Collapse", "Simple", "Masonry"].map((item, index) => <ListItem key={index} item={item} />)}
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Product</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        {["Default", "Images Left", "Image Grid", "Image Slider", "Images Stacked"].map((item, index) => <ListItem key={index} item={item} />)}
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Support</div>
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        {["Shopping Cart", "Checkout", "Order Completed", "Shipping & Returns"].map((item, index) => <ListItem key={index} item={item} />)}
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Account</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        {["Order", "Orders", "Wishlist", "Personal Info", "Addresses", "Addresses: New"].map((item, index) => <ListItem key={index} item={item} />)}
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    {/* Links */}
                                                    <ul className="list-styled mb-7 font-size-sm">
                                                        {["Payment", "Payment: New", "Product", "Payment: Choose", "Auth"].map((item, index) => <ListItem key={index} item={item} />)}
                                                    </ul>
                                                    {/* Heading */}
                                                    <div className="mb-5 font-weight-bold">Modals</div>
                                                    {/* Links */}
                                                    <ul className="list-styled font-size-sm">
                                                        {["Newsletter: Horizontal", "Newsletter: Vertical", "Product", "Search", "Shopping Cart", "Size Chart", "Wait List"].map((item, index) => <ListItem key={index} item={item} />)}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#!">Pages</a>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                {["About", "Contact Us", "Store Locator", "FAQ", "Coming Soon", "404"].map((item, index) => <ListItem key={index} item={item} />)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                {/* Toggle */}
                                <a className="nav-link" data-toggle="dropdown" href="#!">Blog</a>
                                {/* Menu */}
                                <div className="dropdown-menu">
                                    <div className="card card-lg">
                                        <div className="card-body">
                                            <ul className="list-styled font-size-sm">
                                                {["Blog", "Blog Post"].map((item, index) => <ListItem key={index} item={item} />)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="docs/getting-started.html">Docs</a>
                            </li>
                        </ul>
                        {/* Nav */}
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                                    <i className="fe fe-search" />
                                </a>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/auth">
                                    <i className="fe fe-user" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <Link className="nav-link" to="/account">
                                    <i className="fe fe-user" />
                                </Link>
                            </li>
                            <li className="nav-item ml-lg-n4">
                                <a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
                                    <span data-cart-items={2}>
                                        <i className="fe fe-shopping-cart" />
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
