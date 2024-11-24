"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

function ContactUs() {

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget
    const formData = new FormData(form);

    formData.append("access_key", "36f665eb-9a35-44e4-8779-3d56160a4a64");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
    }
}

  return (
    <section id="ContactUs">
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400">
            <a href="/" className="text-orange-500 hover:underline">Home</a> / Contact Us
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Form Section */}
        <div>
          <h2 className="text-orange-500 text-sm uppercase tracking-widest mb-2">Send Us Email</h2>
          <h1 className="text-2xl font-bold mb-4">Feel free to write</h1>
          <form onSubmit={handleSubmit} className="space-y-6"> 
            <div className=" text-orange-500 grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name='name'
                placeholder="Enter Name"  
                className="w-full p-3 rounded-lg bg-gray-900 focus:outline-orange-500 border border-orange-500 border-x-4"
              />
              <input 
                type="email"
                name='email'
                placeholder="Enter Email"
                className="w-full p-3 rounded-lg bg-gray-900 focus:outline-orange-500 border border-orange-500 border-x-4"
              />
            </div>
            <div className=" text-orange-500 grid md:grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full p-3 rounded-lg bg-gray-900 focus:outline-orange-500 border border-orange-500 border-x-4"
              />
            </div>

            <textarea
              placeholder="Enter Message"
              name="message"
              rows={5}
              className="text-orange-500 w-full p-3 rounded-lg bg-gray-900 focus:outline-orange-500 border border-orange-500 border-x-4"
            ></textarea>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="h-12 flex px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2 size-6" /> Send Message
              </button>
              {/* <button
                type="reset"
                className="h-12 flex px-6 py-3 bg-gray-400 hover:bg-gray-300 text-white rounded-lg"
              >
                <FontAwesomeIcon icon={faUndo} className="mr-2 size-6" /> Reset
              </button> */}
            </div>
          </form>
        </div>

        {/* Right Information Section */}
        <div>
          <h2 className="text-orange-500 text-sm uppercase tracking-widest mb-2">Need Any Help?</h2>
          <h1 className="text-2xl font-bold mb-4">Get in touch with us</h1>
          <p className="text-gray-400 mb-6">
            &quot;We are here to connect, collaborate, and create. Drop us a message anytime!&quot;
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
                <FontAwesomeIcon icon={faPhoneAlt} className="  size-6" />
              </div>
              <div>
                <p className="font-bold text-gray-100">Have any question?</p>
                <p className="text-gray-400">Free +92-321-2022289</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
                <FontAwesomeIcon icon={faEnvelope} className="  size-6"/>
              </div>
              <div>
                <p className="font-bold text-gray-100">Write email</p>
                <p className="text-gray-400">aribhassan999@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-full">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="  size-6"/>
              </div>
              <div>
                <p className="font-bold text-gray-100">Visit anytime</p>
                <p className="text-gray-400">Malik-Apartment, Malir Halt, Karachi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509239!2d144.9537363158443!3d-37.816279442021814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria%20Market!5e0!3m2!1sen!2sus!4v1634295627757!5m2!1sen!2sus"
          width="100%"
          height="400"
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactUs;
                      


// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome