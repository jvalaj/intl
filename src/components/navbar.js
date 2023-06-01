const Navbar = () => {
    return (
        
        <div className="bg-black p-4 ">
            <div className="max-w-screen-xl flex justify-between items-center  mx-auto bg-black">
                <div className="text-3xl p-4 text-yellow-500 font-extrabold">
                INTL . GUIDE
                </div>

                    <ul className="text-yellow-500 font-thin flex p-4 ">
                        <li className="mx-6">Home</li>
                        <li className="mx-6">Services</li>
                        <li className="mx-6">About</li>
                    </ul>
                
            </div>
        </div>

        
    )
}
export default Navbar;