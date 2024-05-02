import customercare from '../../assets/customercare.png';
import whatsapp from '../../assets/whatsapp.svg';
import chatAI from '../../assets/chatAI.svg';
import Button from '../Button';
import { ChildrenPropForm, TextField, TextAreaField } from '../FormTemplate'; // Adjust the file path accordingly
import * as Yup from 'yup';

const customercareStyle= {
    backgroundImage: `url(${customercare})`, // Applying the background image
    backgroundSize: 'cover', // Optional: adjust background size as needed
    backgroundPosition: 'center',
    height: '400px',
    color: 'white',
    textAlign: 'center',
}

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };


export const ContactHome = () => {
    return (
      <section>
        <div style={customercareStyle}>
           <div className='w-[70%] m-auto pt-10 font-bold'>
           <h1 className='text-6xl mb-5 fon-bold'>
            Contact our team to get top-notch customer support.
            </h1>
            <h2 className='text-lg'>
            We’d love to hear from you to take your queries amd to help resolved your challenges. 
            At Trust market, we place our customers at the core of our business structure
            </h2>
           </div>
        </div>
            <div className='flex bg-white h-[auto] mt-[-80px] w-[90%] ml-auto p-8 gap-8 '>
                <div className='w-1/2'>
                    <div className='  shadow-md flex items-center justify-center px-10 py-[60px] w-full gap-3'>
                        <div className='w-14 h-14'>
                        <img src={whatsapp} alt="whatsapp icon" className='h-full w-full' />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h2 className='text-greenLight font-bold text-3xl'>Chat with us on whatsApp</h2>
                            <p className='text-red font-bold text-3xl tracking-widest'>0801000000</p>
                        </div>
                    </div>
                    <div className='shadow-md flex items-center justify-center px-10 py-[60px] w-full gap-3'>
                        <div className='w-14 h-14'>
                        <img src={chatAI} alt="whatsapp icon" className='h-full w-full' />
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                            <h2 className='text-greenLight font-bold text-3xl mb-1'>Chat with our AI support</h2>
                            <Button primary getStarted>
                                Chat with our AI support
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 shadow-md flex flex-col justify-center items-center'>
                    <h2 className='text-greenLight font-bold text-xl mb-5'>Let’s start a conversation</h2>
                <ChildrenPropForm
                    initialValues={{ fullName: '', email: '', message: '' }}
                         validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        title={'Please note: all fields are required'}
                 >
                     {/* Render form fields */}
                    <TextField label="Full Name" name="fullName" type="text" />
                    <TextField label="Email" name="email" type="email" />
                    <TextAreaField label="Message" name="message" />
                        {/* Add more form fields as needed */}
                    </ChildrenPropForm>
                </div>
            </div>
      </section>
    );
  };

  export default ContactHome;