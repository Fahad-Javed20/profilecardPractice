import './App.css'
import Card from './components/ProfileCard'


export type ProfileCard = {
  image: string,
  name: string,
  role: string,
  linkedin: string,
  github: string,
  gmail: string,
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

      <Card  image={profile1.image} name={profile1.name} role={profile1.role} linkedin={profile1.linkedin} github={profile1.github} gmail={profile1.gmail} />
      <Card image={profile2.image} name={profile2.name} role={profile2.role} linkedin={profile2.linkedin} github={profile2.github} gmail={profile2.gmail} />
      <Card  image={profile3.image} name={profile3.name} role={profile3.role} linkedin={profile3.linkedin} github={profile3.github} gmail={profile3.gmail}/>
      <Card  image={profile4.image} name={profile4.name} role={profile4.role} linkedin={profile4.linkedin} github={profile4.github} gmail={profile4.gmail}/>
      <Card  image={profile5.image} name={profile5.name} role={profile5.role} linkedin={profile5.linkedin} github={profile5.github} gmail={profile5.gmail}/>
      <Card  image={profile6.image} name={profile6.name} role={profile6.role} linkedin={profile6.linkedin} github={profile6.github} gmail={profile6.gmail}/>
      <Card  image={profile7.image} name={profile7.name} role={profile7.role} linkedin={profile7.linkedin} github={profile7.github} gmail={profile7.gmail}/>
      <Card  image={profile8.image} name={profile8.name} role={profile8.role} linkedin={profile8.linkedin} github={profile8.github} gmail={profile8.gmail}/>
      <Card  image={profile9.image} name={profile9.name} role={profile9.role} linkedin={profile9.linkedin} github={profile9.github} gmail={profile9.gmail}/>
      <Card  image={profile10.image} name={profile10.name} role={profile10.role} linkedin={profile10.linkedin} github={profile10.github} gmail={profile10.gmail}/>
      <Card  image={profile11.image} name={profile11.name} role={profile11.role} linkedin={profile11.linkedin} github={profile11.github} gmail={profile11.gmail}/>
      <Card  image={profile12.image} name={profile12.name} role={profile12.role} linkedin={profile12.linkedin} github={profile12.github} gmail={profile12.gmail}/>
    </div>
    </>
  )
}

export default App
