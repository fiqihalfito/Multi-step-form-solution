const Step = ({ number, desc, isActive }) => {
    return (
        <div className="md:flex md:items-center">
            <div className={`h-10 w-10 border ${isActive ? 'bg-slate-200' : 'text-white'} md:mr-4  rounded-full font-bold flex justify-center items-center`}>
                {number}
            </div>
            <div className="hidden md:block">
                <p className="text-xs text-slate-300 font-medium">STEP {number}</p>
                <p className="font-bold text-white text-sm tracking-wider">{desc}</p>
            </div>
        </div>

    )
}

export default Step