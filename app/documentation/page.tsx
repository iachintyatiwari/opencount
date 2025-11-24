import  Docs  from '../components/Docs';



export default function Documentation(){

      const navigateToHome = () => {
      window.scrollTo(0,0);
    //   setCurrentView('home');
  }
    

    return(
         <div className="min-h-screen flex flex-col bg-dark-950">
            
            <Docs/>


         </div>
    )

}