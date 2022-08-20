import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {FaReact} from 'react-icons/fa'
import {FaGreaterThan} from 'react-icons/fa'
import {FaLessThan} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'
import {TiDeleteOutline} from 'react-icons/ti'
import {AiOutlinePlayCircle} from 'react-icons/ai'

function App() {
  const [click,setClick]=useState(false)
  const[butnname,setBtnname]=useState('');
  const [btn,setBtn]=useState(0);
  const [count, setCount] = useState(0);
  const[freeze,setFreeze]=useState(false);
  const ref=useRef('')
  let ruleis=[{id:1,rule:'Default rule'},{id:2,rule:'Fall back rule'}]
  const datas=[
    {button:"Default rule",id:1,cond:[' ']},
    {button:"Fall back rule",id:2,cond:[' ']}
  ]
  const [rules,setRules]=useState(datas);

  let values=[{id:1,ac:'START NEW APP'}]
  const [action,setAction]=useState(values)
  var ind=rules.length; 
  var aind=action.length;

  //date
  let months={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"};

  let date=new Date();
  let day=date.getDate();
  let month=date.getMonth();
  month=months[month];
  let year=date.getFullYear();
  

  //time
  let hours=date.getHours();
  let formateis=''
  if(hours<12){
   formateis='am'
  }
  else{
    formateis='pm'
  }
  if(hours>12 && hours!=24){
    let diff=hours-12;
    hours=diff
  }
  else if(hours==24){
    hours='00';
  }
  let minnut=date.getMinutes();
  let timeis=hours+':'+minnut+formateis;
  let fulldate=day+' '+month+" "+year+' '+timeis;

 
  return (
    <div className="App">
      <div id='main-container'>
       <div id='navBar'>
        <div id='icon-div'>
          <div id='react-icon'>
          <FaReact/>
          </div>
          <div >
            <div id='icon-text'> Demo Custom App </div>
            <div id='text-2'>APP NAME</div>
             
          </div>
          <div id='right-icon'>
           <FaGreaterThan/>
          </div>
         
        </div>

        {/* second  */}
        <div id='icon-div2'>

          <div >
            <div id='icon-text'> Assessment </div>
            <div id='text-2'>STAGE</div>
             
          </div>
          <div id='right-icon'>
           <FaGreaterThan/>
          </div>
         
        </div>
        {/* third */}
        <div id='icon-div2'>
    
          <div >
            <div id='icon-text'> Create PO </div>
            <div id='text-2'>BUTTON</div>
             
          </div>
          <div id='right-icon'>
           <FaGreaterThan/>
          </div>
         
        </div>
        {/* fourth */}
        <div id='icon-div-l'>
        
          <div >
            <div id='icon-text-b'> Button Rules</div>
            {/* <div id='text-2'>APP NAME</div> */}
             
          </div>
         
         
        </div>
        <div id='date'>
          <div id='date-text'><div id='date-is'>{click &&"App saved on"} {click&&fulldate} </div></div>
          <button id='date-btn' onClick={(()=>{
           
              setClick(true)
            
           
            setFreeze(!freeze);
            let all=[...rules];
            
            all[btn].button=butnname
             setRules(all)
          })}>{freeze==false?"DONE":"EDIT"}</button>
        </div>
       </div>

       {/* second div */}
       <div id='sec-main'>
        <div id='main-left'>
          <div id='text-left'>
            <div id='left-icon'><FaLessThan/></div>
            <div id='text-l-2' >Back to Stages</div>
          </div>
          <div id='rules-left'>
          <div id='rules-text'>RULES <span style={{fontWeight:'600'}}> {rules.length}</span></div>
          {rules.map((e)=>{
            return <div  style={{display:"flex"}}>  <div onClick={(()=>{
              let newis=e.id-1
              setBtn(newis)
              console.log('ys',btn)
            })} id='rules-box'>{e.button}</div> <div onClick={(()=>{
              let newarray=[...rules];
              newarray=newarray.filter((a)=>{return a.id!=e.id})
              setRules(newarray)
            })} id='bin'><RiDeleteBin6Line/></div></div>
          })}
          <button id='add-btn' onClick={(()=>{
            let newarray=[...rules];
            if(newarray.length!=5){
              ind=ind+1;
              let newis={id:ind,button:"Default Rule",cond:[' ']}
              newarray=[... newarray,newis]
            
             // newarray=[...newarray,newis];
              setRules(newarray);
            }
         
          })}>Add New Rule</button>
         
          </div>
        </div>
        <div id='main-right'>
          
          <div id='right-inner'>
            <h2>{rules[btn]?.button}</h2>
            <h4>Button Name</h4>
            <input  disabled={freeze==true}  onChange={((k)=>{setBtnname(k.target.value)})}  type="text" id='input-1' />
            <div id='cond'>
             <select  disabled={freeze==true} id='select-1'>
              <option value="If All">If All</option>
             </select>
             <div id='cond-text'>of the following conditions are met:</div>
             
            </div>

         
           {rules[btn].cond.map((j)=>{
            return            <div id='condition'>
            <select disabled={freeze==true} name="" id="text-any">
              <option value="">Text</option>
            </select>
            <select  disabled={freeze==true}  name="" id="text-any2">
              <option value="">Contains</option>
              <option value="">Do not contains</option>
            </select>
            <div id='text-any3'>Urgent <span><TiDeleteOutline/></span> </div>
            <inpu  disabled={freeze==true}t id='search' type="text" placeholder='Type to search & add' />
            <div id='remove-3' onClick={(()=>{
                 let cond2=[...rules];
                 cond2[btn].cond.pop();
                 setRules(cond2);
            })}><RiDeleteBin6Line/></div>
            
          </div>
           })}

            <button  disabled={freeze==true} id='add-btn2' onClick={(()=>{
            
              let cond2=[...rules];
              if( cond2[btn].cond.length!=8){
                cond2[btn].cond.push(' ');
                setRules(cond2);
              }
             
              
            })}> Add New Condition</button>
            <div style={{marginTop:"30px",color:"grey"}}>
            <hr  />
            </div>
            <div id='action'>Perform the following action:</div>
            
            {action.map((e)=>{
              return <div style={{display:"flex"}}>   <div id='action-item'>
              <div id='play-icon'><AiOutlinePlayCircle/></div>
              <div id='start-new'>{e.ac}</div>
            </div>
            <div onClick={(()=>{
              let newarray=[...action];
              newarray=newarray.filter(((a)=>{return a.id!=e.id }))
              setAction(newarray);
            })} id='delete-3'><RiDeleteBin6Line/></div>
            </div>  
            })}
         
           
           
            <div id='break-2'>
              <hr />
            </div>
            <button  disabled={freeze==true} onClick={(()=>{
              if(action.length!=5){
                let newarray=[...action];
                aind=aind+1;
                let data={id:aind,ac:'START NEW APP'}
                newarray=[...newarray,data]
                setAction(newarray)
              }
             
            })} id='add-btn2' > Add another action</button>
            <div id='empty'></div>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default App
