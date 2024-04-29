const InputCom = ({ id,label, value, onChange, required ,type}) => {
    return (
        <>
            <label>{label}</label>
            <input
                id={id}
                placeholder={value}                
                type={type}
                onChange={onChange}
                required={required}
            />
        </>
    )
};

export default InputCom;