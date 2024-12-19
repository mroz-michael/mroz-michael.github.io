const Button = ({label, logo, clickHandler}) => {


    return (
        <>
        <button className='link_button' onClick={() => clickHandler()}>
        <p className="button_content">{logo}{label}</p>
        </button>
        </>
    )
}

export default Button;