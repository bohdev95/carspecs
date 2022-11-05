
import React from 'react'
import { Link } from 'react-router-dom'
import AddNewOption from './AddNewOption'

const Home = () => {
  const specs: any = {
    engine: {
      options: ["petrol", 'disel']
    },
    Bodycolor: {
      options: ['black', 'white']
    },
    Typeofpaint: {
      options: ['gloss']
    },
    Wheelsize: {
      options: ['15 inches', '19 inches']
    },
    seats: {
      options: ['leather']
    },

  }
  return (
    <>
    {/* Main container */}
      <div className='container my-3 mt-4  p-3 border border-gray shadow '>
        <div className="row">
{/* Left Side */}
          <div className="col-lg-6 col-md-12 border-end">
            <div className='text-start py-2 '>
              <h5>Specifications</h5>

            </div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item ">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    Sport
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>

            </div>

            <Link to=""><button type="button" className="btn btn-outline-dark my-3 mt-5"><span className='px-2'>+</span>  Make a New Specifiction</button></Link>

          </div>
{/* Right Side */}
          <div className="col-lg-6 col-md-12">
            <div className='text-start py-2'>
              <h5>Make a Specification</h5>
            </div>
            <form>
            <div className='d-grid gap-3'>
            {
                Object.keys(specs).map(key=>{
                  let currentOption = specs[key];

                  return <div>
                    
                    <select className="form-select" aria-label="Default select example">
                      {
                        currentOption.options.map((item: any) => (
                          <option value="volvo">{item}</option>
                        ))
                      }

                      
                    </select>
                  </div>
                })
              }
               
            </div>
            <div className='d-flex justify-content-between'>
            <button type="button" className="btn btn-dark my-3 mt-5"><span className='px-2'>+</span>  Make a New Configuration</button>
            <button type="button" className="btn btn-primary my-3 mt-5">Save</button>
            </div>
            </form>

            <AddNewOption/>
          
            

            
          </div>


        </div>
      </div>
    </>

  )
}

export default Home