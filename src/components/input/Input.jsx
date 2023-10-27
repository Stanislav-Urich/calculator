import st from './input.style.module.css'


const Input = ({value, setDisplayValue}) => {
    console.log(value);
    return ( 
        <input 
        type='text' 
        placeholder='0' 
        className={st.inputField}
        value={value}
        onChange={ (event) => setDisplayValue(event.target.value)}

        />
     );
}
 
export default Input;