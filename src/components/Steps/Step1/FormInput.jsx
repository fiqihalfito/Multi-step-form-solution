const FormInput = ({ label, name, value, placeholder, onChange, status }) => {

    function handleChange(e) {


        return onChange(user => ({
            ...user,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="mb-4 last:mb-0">
            <div className="flex justify-between items-center">
                <label htmlFor="name" className="text-sm text-blue-900 font-medium block md:mb-1">
                    {label}
                </label>
                {!status && <p className="text-sm font-bold text-red-500">This field is required</p>}
            </div>
            <input
                className={`py-2 px-4 border-2 rounded-md font-bold w-full text-blue-800 outline-blue-800 ${!status && 'border-red-500'}`}
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange} />
        </div>
    )
}

export default FormInput