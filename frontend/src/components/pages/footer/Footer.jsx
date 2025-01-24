import { FiMail } from "react-icons/fi";

const Footer = () => {

  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers", "Press", "Blog"]
    },
    {
      title: "Support",
      links: ["Help Center", "Safety Center", "Community Guidelines"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
  ];

  return (
    <section className="p-8 max-w-full justify-center bg-neutral text-neutral-content grid grid-row-2 ">
        <footer className="grid laptop:grid-col-5 grid-flow-col gap-x-[100px]">
        <nav className="grid grid-flow-row">
          <div className=" w-[400px]">
            <div className="logo pt-4">
              <img src="https://images.unsplash.com/photo-1560393464-5c69a73c5770" alt="logo"
              className='w-[300px] h-[250px] object-cover' 
              />
            </div>
            
          </div>
        </nav>

        {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-heading">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <button className="text-accent dark:text-dark-accent hover:text-primary dark:hover:text-dark-primary transition-colors duration-200">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        <div>
          <form action="newsletter" className="flex justify-evenly gap-x-3 my-10">
              <div><label htmlFor="email" className='text-2xl'>Subscribe For NewsLetter</label></div>
              <div className="grow ml-10">
                <label className="input input-bordered flex items-center gap-2">
                  <FiMail/>
                  <input type="email" className="grow" placeholder="Email" />            
                </label>
              </div>
              <div><button type="submit" className='btn'>Submit</button></div>
              
            </form>
        </div>
        </footer>
      
    </section>
  )
}

export default Footer
