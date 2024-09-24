import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Radio, RadioGroup } from '@mui/material';
        
import "./Rigth.css"  


function Rigth  (){
 
 return(


<section className=" Rigth_seccion bg-white p-6   " >
    <div className="titulo flex " >
    <h1 className='flex-1 text-xl ' >Mortgage Calculator</h1>
    <Button label="Clear All" text />
    </div>

    <div className="flex flex-col gap-2 pb-8">
    <label htmlFor="username">Mortgage Amount</label>
    <span className='p-2' >
    <span className='mortagage_icon' ><i className="pi-euro  "></i></span>
    <InputText className='mortagage_input' id="username" aria-describedby="username-help" />
    </span>
</div>
<div className='flex gap-6 pb-8 ' >
    <div className='' >
     <label className='gap-2' htmlFor="username">Mortgage Term</label>
      <div className="p-inputgroup mortagage_input_years " >
    <InputText   id="username" aria-describedby="username-help" />
    <span className="p-inputgroup-addon mortagage_years  ">years</span>
    </div>
    </div>
    <div>
     <label htmlFor="username">Interest Rate</label>
      <div className='p-inputgroup mortagage_input_years  ' > 
    <InputText id="username" aria-describedby="username-help" />
    <span className="p-inputgroup-addon mortagage_years ">%</span>
    </div>
    </div>



</div>
<div className='flex flex-col' >
    <label htmlFor="username">Mortgage Amount</label>
    <div className="flex align-items-center radio_rapay" >
    <Radio 
    
      />
    <label htmlFor="ingredient1" className="ml-2">Repayment</label>
    </div>
    <div>
       
      <Radio 
      
      />
    <label htmlFor="ingredient1" className="ml-2">Interest Only</label>
    </div>
   
</div>
<div>
    <span><Button label="Delete" icon="pi pi-trash" /></span>
</div>


    </section>
 )

}

export default Rigth;

