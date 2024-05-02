import about from '../../assets/about-us.png';
import coo from '../../assets/coo.png';
import hr from '../../assets/hr-manager.png';
import marketing from '../../assets/marketing-manager.png';
import financial from '../../assets/finanacial-manager.png';
import collaboration from '../../assets/collaboration-logo.png';
import efficiency from '../../assets/efficiency-logo.png';
import integrity from '../../assets/integrity-logo.png';
import aboutp from '../../assets/about-pix.png';





export const AboutUs = () => {

  const coreValues =[
    { id: 1, name: 'Collaboration', image: collaboration, content:' Together, we harness the strength of teamwork to innovate and grow, fostering diverse perspectives and collective achievements.'},
    { id: 2, name: 'Integrity', image: efficiency, content:'Honesty and transparency guide our actions, building trust and accountability within our team and with customers, buyers and investors.'},
    { id: 3, name: 'Efficiency', image: integrity, content:' We prioritize streamlined processes and effective solutions, maximizing productivity and delivering exceptional results with precision and speed.'},
  ]
  const team=[
    { id: 1, name: 'Nwabekeyi Chidibere', image: coo, position: 'Chief Operating officer' },
    { id: 2, name: 'Victoria Dike', image: hr, position: 'Human Resource Manager' },
    { id: 3, name: 'Nwabekeyi Somtochukwu', image: marketing, position: 'Marketing Manager' },
    { id: 4, name: 'Nwabekeyi Jeremiah', image: financial, position: 'Financial Manager' },
  ]

  return (
    <section className="h-[auto]">
        <div className="z-[-1] absolute h-[700px] w-full flex">
            <div className="bg-greenLighter w-1/3"></div>
            <div className="bg-white w-2/3"></div>
        </div>
       <div className="text-center mb-10">
            <h1 className="text-5xl font-bold text-greenDark">About Us</h1>
          <p className=" text-xl font-bold text-greenLight mt-5">Meet our team members</p>
       </div>
       <div className="flex p-10 space-x-3">
            <div className="w-2/3">
                <img src={about} alt="team picture" className='w-full h-[500px] mb-[100px]'/>
                <div className='w-[450px] px-4 py-4 bg-greenLight left-[24vw] mr-10 mt-[-270px] absolute shadow-xl'>
                    <h1 className='text-center text-white font-bold text-[2em]'>
                    Our team is more than just colleagues; we're a tightly knit community driven by shared goals, mutual respect, and a passion for our mission.
                    </h1>
                </div>

                {/* core values */}
                <div className='bg-white pt-[100px] mt-[-100px]'>
                <h1 className='ml-[30px] text-4xl font-bold text-greenLight'>Our Core Values</h1>
                <div className="flex gap-8 px-8 pt-3 pb-2 ">
                    {coreValues.map(coreValue => (
                    <div key={coreValue.id} className="flex flex-col justify-center  w-full h-[auto] rounded overflow-hidden mx-auto  mt-10">
                      <img className="w-[50px] h-[50px]" src={coreValue.image} alt={coreValue.name} />
                    <div className="py-4 ">
                      <h2 className="text-[10px] font-bold text-[25px] text-greenLight text-md text-greenLight">{coreValue.name}</h2>
                      <p className='text-xs mt-3'>{coreValue.content}</p>
                  </div>
                </div>
                 ))}
            </div>
                </div>

            {/* meet team */}
            </div>
              <div className="w-1/3 mt-[-90px] shadow-lg">
                  <p className="text-greenLight text-sm font-bold">
                  The Trust market team is a diverse group of professionals dedicated to ensuring seamless operations, innovation, and customer satisfaction. Together, they foster a thriving ecosystem for buyers and sellers to connect and transact.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 pb-2 ">
                      {team.map(teams => (
                      <div key={teams.id} className=" w-full h-[auto] rounded overflow-hidden shadow-md mx-auto  transform hover:scale-110 transition-all duration-500">
                        <img className="w-full" src={teams.image} alt={teams.name} />
                      <div className="py-4 ">
                        <h2 className="text-[0.7em] font-bold text-md text-center text-greenDark">{teams.name}</h2>
                        <h2 className="text-[10px] font-bold text-md text-center text-greenDark">{teams.position}</h2>
                    </div>
                  </div>
              ))}
              </div>
              <img src={aboutp} alt="team smiling" className='p-8 pb-2'/>
            </div>
       </div>
    </section>
  );
};

export default AboutUs;