const InputGroup = ({ setId, name, total }) => {

  return (
    <div className="input-group mb-3">
        <select onChange={e => setId(e.target.value)} className="form-select" id={name} >
            <option value="1" defaultValue> Choose... </option>
                {[...Array(total).keys()].map((x) => {
                    return (
                        <option key={x + 1} value={x + 1}> 
                            {name} - {x + 1} 
                        </option>
                    )
                })}
        </select>
    </div>
  )
}

export default InputGroup