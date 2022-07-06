import './App.css';
import Timer from './components/Timer';



function App() {
    return (

        <div className=' h-screen w-full flex justify-center items-center' style={{ 
            backgroundImage: `url("https://wallup.net/wp-content/uploads/2019/09/445962-green-leaf-dew-nature-walppaper-branch-tree-macro.jpg")` 
          }}>
            
                <div className='bg-green-200 border-green-800 shadow-xl border-2 rounded-xl p-4 '>
                    <Timer />

                </div>
      
        </div>
    );
}

export default App;
