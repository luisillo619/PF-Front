import { useState } from "react";
import { useDispatch } from "react-redux";


export const AskSeller = () => {
    
  
    const [asks, setAsks] = useState("");
    const [arr, setArr] = useState([])
    const dispatch = useDispatch()

   
    const handleChange = (e) => {
        const {  value } = e.target;
      
        e.preventDefault();
        setAsks(value);
      };

      const handleSubmit = (e) => {
      
       setArr([...arr, asks])
        setAsks("")
        e.preventDefault();
       
          };

    return (

        <div className="bg-white rounded-lg w-5/6  "  >
          <div >
             <form  onSubmit={handleSubmit} className= " flex flex-col justify-center items-start " >
                
                <label htmlFor="question" className="flex justify-start items-start w-5/6 mb-4 font-medium mx-4" >Question to seller</label>

                <div className="flex flex-row w-5/6" >

                <input type="text" value={asks} id="question" name="question" onChange={handleChange} placeholder="write the question.." className="w-4/6 mr-2 mx-4"/>
                <input type="submit" value="Ask" className="w-1/6  bg-gray-200  border border-gray-500 hover:bg-slate-500 hover:border hover:border-white hover:text-white rounded-md cursor-pointer  p-1"  ></input>
                </div>
             </form>
    
          </div>

          <div>
          {
        arr?.map((e) =>{
              return (
                  
                      <div className="flex flex-col justify-start items-start w-5/6 mx-4  my-6" key={e} >
                      
                       <div className="p-4" >
                        <p>{e}</p>
                        </div>
                       
                  </div>
                  
            )
          })
        }
          </div>
              
                 
                
           



        </div>
    )
}