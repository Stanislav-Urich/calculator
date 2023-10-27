import st from './button.style.module.css'

const Button = ({ num, changeInputValue }) => {


    return (
        <button
            className={st.button}
            onClick={() => changeInputValue(num.num)}
        >
            {num.num}
        </button>
    );
}

export default Button;