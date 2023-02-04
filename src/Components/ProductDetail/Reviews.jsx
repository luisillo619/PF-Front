
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faStar} from "@fortawesome/free-solid-svg-icons";
export const Reviews = ({user,products,comments,rating,_id}) => {

  
   
  
   const [commentary, setCommentary] = useState("");
   const [arr, setArr] = useState([])
   const dispatch = useDispatch()
   const start = <FontAwesomeIcon color="black"  size="xl" icon={faStar} />
  
   
    const handleChange = (e) => {
        const {  value } = e.target;
      
        e.preventDefault();
        setCommentary(value);
      };

      const handleSubmit = (e) => {
      
       setArr([...arr, commentary])
       setCommentary("")
        e.preventDefault();
       
          };
        
         const handleChangeColor = () =>{
             
         } 

   return (

    <div className="bg-white rounded-lg w-5/6"  >
      <div >
         <form onSubmit={handleSubmit} >
            
             <label id="comment">Reviews</label>
            <input type="text" value={commentary} name="comment" id="comment" onChange={handleChange} placeholder="Write your Review for this Product"/>
           <div className="flex flex-row w-2/6 my-4">
             <button >{start}
             </button>
             <button>{start}
             </button>
             <button>{start}
             </button>
             <button>{start}
             </button>
             <button>{start}
             </button>
            </div>
            <input type="submit" value="Comment"  ></input>
         </form> 
            
            
            

      </div>

        <div>
            <div>{ 
        arr?.map((e) =>{
              return (
                  
                      <div className="flex flex-col justify-start items-start w-5/6 mx-4  my-6" key={e} >
                      
                       <div className="p-4" >
                        <p>{e}</p>
                        </div>
                       
                  </div>
                  
            )
          })
        }</div>
        </div>
    </div>
)
}
              