type Service = {
    title: string;
    description: string;
  };
  
  const services: Service[] = [
    { title: 'Web Development', description: 'Custom websites and apps to fit your needs.' },
    { title: 'UI/UX Design', description: 'Beautiful, user-focused designs.' },
    { title: 'SEO Optimization', description: 'Boost your website’s visibility.' },
    { title: 'Freelancing', description: 'Flexible solutions for your business.' },
  ];
  
  function Services() {
    return (
      <section id="Services" className=" py-16 bg-black text-white ">
        <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-center mb-12">
          Our <span className="text-orange-500">Services</span>
        </h2>
          <div className="relative left-4 w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-8 border  border-white hover:border-orange-500 rounded-lg shadow-lg hover:shadow-orange-500 hover:shadow-md  transition duration-200"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;
  