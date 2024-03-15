const Message = ({ onChange }) => {
    return (
        <>
            <label></label>
            <textarea id="message" name="message" rows="2" cols="25" className="input" placeholder="Message" onChange={onChange} required></textarea>
        </>
    );
};

export default Message;