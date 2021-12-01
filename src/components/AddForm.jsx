import React from 'react'

export default function AddForm(props) {

    const {btnSubmit} = props


  return (
    <div>
      

      <div>
   <h1>Add an item</h1>
   <form onSubmit={btnSubmit}>
        <div className="field">
            <label className="label">name</label>
            <div className="control">
            <input name="name" className="input" type="text" placeholder="Text input" />
            </div>
        </div>

        <div className="field">
            <label className="label">calories</label>
            <div className="control has-icons-left has-icons-right">
            <input
            name="calories"
            className="input is-success"
            type="number"
            placeholder="Enter calories"
            />
            </div>
        </div>
        <div className="field">
            <label className="label">Image</label>
            <div className="control has-icons-left has-icons-right">
            <input
            name="image"
            className="input is-success"
            type="text"
            placeholder="Enter image"
            />
            </div>
        </div>


        <div className="field is-grouped">
            <div className="control">
            <button className="button is-link">Submit</button>
            </div>
        </div>
    </form>
   </div>



    </div>
  )
}

