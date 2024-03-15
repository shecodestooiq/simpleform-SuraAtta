const InputCom = ({ id, type, value, onChange }) => {
    return (
        <>
            <label></label>
            <input placeholder={value} type={type}  id={id} className="input" onChange={onChange} required />
        </>
    )
};

export default InputCom;