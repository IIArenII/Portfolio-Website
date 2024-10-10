import React from 'react'
import email from '../assets/mail_icon.svg'
import phone from '../assets/call_icon.svg'
import location from '../assets/location_icon.svg'



const Contact = () => {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_API_KEY );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    
  return (
    <div id='contact' className='flex flex-col lg:flex-row lg:px-40 lg:gap-8 w-full h-auto pb-20 bg-black text-gray-300 font-outfit px-6 gap-6'>
        <div className='w-60 lg:gap-10 '>
            <h3 className='text-gradientContact text-42 font-semibold pb-3 lg:text-gradientContact-lg'>Let's talk</h3>
            <p className='lg:leading-6'>
            I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on.
            You can contact anytime.
            </p>
            <div className='flex flex-row gap-4 pt-8 pb-4 justify-start items-center text-center'>
                <img src={email} alt="" className='h-4' />
                <p>aerenevli@gmail.com</p>
            </div>
            <div className='flex flex-row gap-4 py-4 justify-start items-center text-center'>
                <img src={phone} alt="" className='h-5' />
                <p>+123-456-789</p>
            </div>
            <div className='flex flex-row gap-4 py-4 justify-start items-center text-center'>
                <img src={location} alt="" className='h-5' />
                <p>CA, United States</p>
            </div>
        </div>
        
        <div className='w-100 '>
        <form onSubmit={onSubmit}>
            <div className='space-y-6'>
                <div className='flex flex-col gap-2 focus:outline-none focus:border-none text-gray-300'>
                <label htmlFor="name" className='text-14'>Your Name</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder='Enter Your Name' 
                    className='w-90 h-16 rounded-3 bg-input-bg pl-6 placeholder:text-18' 
                    required
                />
                </div>
                <div className='flex flex-col gap-2 focus:outline-none focus:border-none text-gray-300'>
                <label htmlFor="email" className='text-14'>Your Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder='Enter Your Email' 
                    className='w-90 h-16 rounded-3 bg-input-bg pl-6 placeholder:text-18' 
                    required
                />
                </div>
                <div className='flex flex-col gap-2 focus:outline-none focus:border-none text-gray-300'>
                <label htmlFor="message" className='text-14'>Your Message</label>
                <textarea 
                    name="message" 
                    placeholder='Enter Your Message' 
                    className='w-90 h-52 rounded-6 bg-input-bg pl-6 pt-3 placeholder:text-18' 
                    required
                ></textarea>
                </div>
                <button className='py-3 px-6 rounded-36 bg-linearColor font-outfit text-white text-18 transition-all duration-300 hover:scale-110'>
                Submit now
                </button>
            </div>
            </form>

        </div>
    </div>
  )
}

export default Contact