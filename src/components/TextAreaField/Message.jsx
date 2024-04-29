const Message = ({id, label, value, onChange, required }) => {
    return (
        <>
            <label >{label}</label>
            <textarea
                        id={id}
                value={value}
                onChange={onChange}
                required={required}
                placeholder="Message"
            />
        </>
    );
};

export default Message;