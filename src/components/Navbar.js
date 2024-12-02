import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navigation">
            <span>
                <img src="../SatyaCart .png" height={50}></img>
            </span>
             <div className="buttons">
                <button>ABOUT US</button>
                <button>CONTACT US</button>
                <button>LOGIN</button>
                <button>SIGN UP</button>
                <button>CART</button>
             </div>
        </div>
    )
}

export default Navbar;