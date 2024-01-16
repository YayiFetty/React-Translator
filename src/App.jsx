import { useState } from 'react'

const vowel =  [ "a","e", "i","o","u" ]


function App() {
    const prefixWord = "way"
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState(null)
  
    //create a function to update to PigLatin
    function translateToPigLatin(){
     
      if(!text) return;
      //check for the vowel
      const isVowel = (char) => vowel.includes(char.toLowerCase())
       
      //function to translate each word to PigLatin
      function translateWordToPigLatin(word){

        if(isVowel(word[0])){
          return word + prefixWord
        }

        else {
          let firstConsonant = [];
          let i = 0;
        
          while(i < word.length && !isVowel(word[i])) {
            firstConsonant.push(word[i])
            i++
          }

          return word.slice(i) + firstConsonant.join("") + "ay"
        }

      }

      const translatedText = text
                                  .split(/\s+/)
                                  .map((word) => translateWordToPigLatin(word))
                                  .join(' ');
  
        setTranslatedText(translatedText);
      
    }

    function handleSubmit(e){
      e.preventDefault();
    }

  return (
     <div className='flex flex-col items-center justify-center bg-slate-700 h-screen w-full'>
      
       <form onSubmit={handleSubmit} className=' w-auto h-fit bg-slate-500 px-4 py-2'>

        <label className=' text-white font-bold capitalize '>Text to translate:</label>
        <textarea  value={text} onChange={(e)=> setText(e.target.value)} rows='3' cols='22'
         className='block p-2.5 w-auto h-auto capitalize text-md my-5 text-gray-50 rounded-lg border bg-slate-700 border-gray-300 focus:ring-blue-500 focus:border-blue-500'/>

        <button className='w-fit rounded-md bg-slate-500 text-white border-2 p-2' onClick={translateToPigLatin}>Translate</button>
      </form>

     <div className=' w-60 p-2 h-auto  mt-3 bg-slate-100 '>
      <p className='text-black font-bold'>Translated:</p>
      <p className=' text-white capitalize w-auto h-fit bg-slate-500 px-4 '>{translatedText}</p>
     </div>

     </div>
  )
}

export default App
