const NavBottom = ({ curr, handleNav, setIsComplete }) => {


    return (
        <div className={`bg-white font-medium flex ${curr === 1 ? 'justify-end' : 'justify-between'} items-center px-8 md:px-0 py-4`}>
            {curr === 1 ||
                <button
                    className={` py-2 text-slate-400 hover:text-blue-950`}
                    onClick={() => handleNav(curr - 1)}>
                    Go Back
                </button>
            }

            {curr === 4 ||
                <button
                    className="py-2 px-4 bg-blue-950 hover:bg-blue-800 text-white rounded-md md:rounded-lg"
                    onClick={() => handleNav(curr + 1)}>
                    Next Step
                </button>
            }

            {curr === 4 &&
                <button
                    className="py-2 px-4 bg-blue-700 text-white rounded hover:bg-purple-500"
                    onClick={() => setIsComplete(true)}>
                    Confirm
                </button>
            }
        </div>
    )
}

export default NavBottom