const TimeOption = ({ period, setPeriod }) => {


    function handleToggle() {
        return setPeriod(curr => {
            if (curr === 'monthly') {
                return 'yearly'
            }

            return 'monthly'
        })
    }

    return (
        <div className="bg-slate-100 flex justify-center gap-x-4 font-medium py-2 text-sm">
            <span className={`${period === 'monthly' ? 'text-blue-950' : 'text-slate-400'}`}>Monthly</span>
            <div
                className={`relative w-10 h-6 px-1 bg-blue-950 rounded-full flex items-center cursor-pointer
                ${period === 'monthly' ? 'justify-start' : 'justify-end'}`}
                onClick={handleToggle}
            >

                {/* circle */}
                <div className="w-4 h-4 bg-white rounded-full " />

            </div>
            <span className={`${period === 'yearly' ? 'text-blue-950' : 'text-slate-400'}`}>Yearly</span>
        </div>
    )
}

export default TimeOption