import './App.css'
import Card from './components/ProfileCard'

export type ProfileCard = {
  image: string;
  name: string;
  role: string;
  linkedin: string;
  github: string;
  gmail: string;
}

function App() {
  const profile1: ProfileCard = {
    image: "https://images.unsplash.com/photo-1757413456932-2a1aa8fd7aa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile2: ProfileCard = {
    image: "https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
    name: "Usama Bin Javed",
    role: "Computer Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile3: ProfileCard = {
    image: "https://images.unsplash.com/photo-1756657266978-c15f15bd3266?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Shehroz Bin Javed",
    role: "Electrical Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile4: ProfileCard = {
    image: "https://images.unsplash.com/photo-1755278338952-39f52d8e6eab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Muhammad Ali",
    role: "Civil Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile5: ProfileCard = {
    image: "https://images.unsplash.com/photo-1756475394041-53bd65722fac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzNnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile6: ProfileCard = {
    image: "https://images.unsplash.com/photo-1756143058418-708fde245d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1N3x0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile7: ProfileCard = {
    image: "https://images.unsplash.com/photo-1755529905229-e0536cf889d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3MXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile8: ProfileCard = {
    image: "https://images.unsplash.com/photo-1594026724063-fcf520d86e23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5NXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile9: ProfileCard = {
    image: "https://images.unsplash.com/photo-1757492166989-a1e8c513a787?w=500&auto=format&fit=crop&q=60",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile10: ProfileCard = {
    image: "https://plus.unsplash.com/premium_photo-1702910931506-c2c942c6612d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzNHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile11: ProfileCard = {
    image: "https://plus.unsplash.com/premium_photo-1756147653773-7780d2f600c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }
  const profile12: ProfileCard = {
    image: "https://plus.unsplash.com/premium_photo-1749669869018-8a33825100f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0Mnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8",
    name: "Fahad Bin Javed",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com",
    github: "https://www.github.com",
    gmail: "fahadbinjaved666@gmail.com",
  }



  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 '>

      <Card  {...profile1} />
      <Card {...profile2} />
      <Card {...profile3} />
      <Card {...profile4} />
      <Card {...profile5} />
      <Card {...profile6} />
      <Card {...profile7} />
      <Card {...profile8} />
      <Card {...profile9} />
      <Card {...profile10} />
      <Card {...profile11} />
      <Card {...profile12} />
    </div>
    </>
  )
}

export default App
