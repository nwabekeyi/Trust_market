import customercare from '../../assets/customercare.png';
import whatsapp from '../../assets/whatsapp.svg';
import chatAI from '../../assets/chatAI.svg';

const customercareStyle= {
    backgroundImage: `url(${customercare})`, // Applying the background image
    backgroundSize: 'cover', // Optional: adjust background size as needed
    backgroundPosition: 'center',
    height: '400px',
}




export const ContactHome = () => {
    return (
      <div>
        <div style={customercareStyle}>

        </div>

      </div>
    );
  };

  export default ContactHome;