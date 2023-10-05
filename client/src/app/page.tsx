import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
    <p className='heading'>Search Similar Drugs</p>
    <div className="search-box">
      <input type="text" placeholder="Enter drug name...." />
      <button className='button'
     >
  SEARCH
  </button>
  
    </div>
  
     </div>
    
  )
}
