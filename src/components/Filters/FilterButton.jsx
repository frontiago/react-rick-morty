
const FilterButton = ({ name, index, item, task, setPageNumber }) => {
  return (
    <div>
      <style jsx>
        {`
        .x:checked + label {
          background-color: #0b5ed7;
          color: #fff
        }
          input[type='radio'] {
            display: none;
          }
        `}
      </style>
        <div className="form-check mb-2">
            <input 
                onClick={() =>  {
                  setPageNumber(1);
                  task(item);
                }}
                className="form-check-input x" 
                type="radio" 
                name={name}
                id={`${name}-${index}`} 
            />
            <label class="btn btn-outline-primary" for={`${name}-${index}`}>
                {item}
            </label>
        </div>
    </div>
  )
}

export default FilterButton