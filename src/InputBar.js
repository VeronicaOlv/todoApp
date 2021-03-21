import './InputBar.css';

const InputBar = () => {
  return (
    <div className="estilo">
    <input
      type="text"
      id="name"
      name="name"
      required
      placeholder="Agrega tu tarea.."
    ></input>
    <input 
    className="btn"
    type="button"
    value="Guardar"
    ></input>
    </div>
  ); 
 
}

export default InputBar;
