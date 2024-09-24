import "./Left.css"  

        
        
        

function Left(){
 return(

<section className="Left_seccion bg-blue-500 " >
    <div className="flex" >
    <h1 className='flex-1' >Your results</h1>
    <p>Your results are shown below based on the information you provided. 
    To adjust the results, edit the form and click “calculate repayments” again.</p>
    </div>

    <div className="flex flex-col gap-2">
    <label htmlFor="username">Your monthly repayments</label>
    <span>
    </span>
    </div>

    <div className="flex flex-col gap-2">
    <label htmlFor="username">Total you'll repay over the term</label>
    <span>
    </span>
    </div>


    </section>
 )

}

export default Left;