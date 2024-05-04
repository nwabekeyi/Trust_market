import logoSvg from '../../assets/logo-white.png';
import { ChildrenPropForm, TextFieldFooter } from '../FormTemplate'; // Adjust the file path accordingly
import * as Yup from 'yup';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
// import { AiOutlineGooglePlay, AiOutlineApple } from 'react-icons/ai';

const Footer =  () =>{

    // form validation Schema
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
      });
    
      const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission logic here
        console.log(values);
        setSubmitting(false);
      };
    const categories = [
        {
          title: 'Shop on Trust Market',
          items: [
            'Home electronic appliances',
            'Phones and laptops',
            'Fashion and apparels',
            'Kitchen utensils',
            'Office supplies',
            'Jewelries and watches',
            'Furniture',
            'Baby accessories',
            'Video games and accessories',
            'Sports and fitness',
            'Automobiles',
            'Travels and luggage',
            'More'
          ]
        },
        {
          title: 'Sell on Trust Market',
          items: [
            'Start selling',
            'Seller Central',
            'Become a Verified Supplier',
            'Partnerships',
            'Download apps'
          ]
        },
        {
          title: 'Help',
          items: [
            'Contact us',
            'FAQ',
            'Customer service',
            'Career',
            'Refunds'
          ]
        },
        {
          title: 'Forum',
          items: [
            'Blog',
            'Community Forum'
          ]
        }
      ];

    return(
        <section className='bg-black p-[50px] py-2 m-5'>
            <article>
                <img src={logoSvg} className='w-[350px] h-10' alt="company logo" />
            </article>
            <article className='flex justify-between mt-12'>
             {categories.map((category, index) => (
             <div key={index}>
                <h2 className='text-greyLight text-xl font-bold mb-4 '>{category.title}</h2>
                    <ul className='text-white'>
                    {category.items.map((item, i) => (
                        <p><li key={i} className='text-greyLight text-xs mt-1 font-weight-[light] hover:text-red cursor-pointer duration-200'>{item}</li> </p>
                        ))}
                    </ul>
            </div>
            ))}

                {/* Newsletter form */}
            <div className="w-1/3">

                <h2 className='text-white text-xl font-bold  mb-4'>Subscribe for Newsletter</h2>
                    <ChildrenPropForm
                    initialValues={{  email: '', }}
                         validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                 >
                     {/* Render form fields */}
                    <TextFieldFooter name="email" type="email" />
                    </ChildrenPropForm>
            </div>
      </article>
            <article>
            <h2 className='text-greyLight flex justify-center relative top-[-35px]'><span className='text-red font-bold text-sm mr-1'>Follow us:</span>
                <FaInstagram size={18} style={{display:'inline', marginRight:"5px"}} />
                <FaFacebook size={18} style={{display:'inline', marginRight:"5px"}}  />
                <FaLinkedin size={18} style={{display:'inline', marginRight:"5px"}}  />
                <FaTwitter size={18} style={{display:'inline'}}  />
            </h2>


            </article>
            <hr />

            <article className='text-center text-greyLight'>
                <p className='text-xs'>@Copyright 2024</p>
                <h1>All right reserved. Powered by Trust market</h1>
            </article>
        </section>
    )
}

 export default Footer