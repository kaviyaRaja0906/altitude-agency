import React,{useState} from "react";
import Faq from "react-faq-component";
import FAQ from "./FAQ";
import AOS from 'aos'
import 'aos/dist/aos.css'


function FAQs(){
       
    const scrollCounter = document.querySelector('.js-scroll-counter');
    
    window.addEventListener('scroll', function() {
      scrollCounter.innerHTML = window.pageYOffset;
    });
    
    // AOS.init()
    
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 200,
      mirror: true
    });
    const [faqs, setFaqs] = useState([
        {
            title: "How long have you been providing white label services?",
            content: `White label services is our primary business model, and we have been providing white label services since pat 2 years`,
            open: false
        },
        {
            title: "How big is your team?",
            content:
                `We are a team of 5 Media Buyers, 2 Graphics and Video Editors, 2 Developers, 2 Project Managers and 2 Executives`,
            open: false
        },
        {
            title: "Will you ever contact my client directly?",
            content: `We will NEVER contact your client. Our name will be no where mentioned while managing your client`,
            open: false
        },
        {
          title: "Do you sign NDAs?",
          content:"Yes. We are happy to sign an NDA. As a white label agency, We are completely invisible to your clients and we leave no trace in the code – it’s a true white label experience.",
      open: false
      },
        {
            title: "Who will I communicate with?",
            content:" A dedicated technical project manager will be assigned to you as the single point of contact for all of your projects/tasks.",
            open: false
        },
        {
            title: "Can I show your work as a reference to my client?",
            content: `We are bound by contract, so you cannot showcase our work to your clients as a reference.`,
            open: false
        },
        {
            title: "How many agencies do you currently work with?",
            content:
                "We currently work with 50+ agencies across the US, Canada, UK, Ireland, and Australia providing white label digital services.",
        open: false
        },
        {
            title: " Will I be bound to a contract?",
            content: `No, we do not bound you to a contract. We work on month to month basis`,
        open: false
        },
        {
            title: " Is my client’s information secure, confidential, and safe?",
            content:"Yes. Our infrastructure is highly secure. All the information you share will be highly confidential and safe. We also sign an NDA before we start.",
        open: false
        },
        {
          title: " How does pricing work for your white label services?",
          content:"We have a single pricing for each medium of advertising per client. No matter how much ever you charge your clients, our pricing remains constant.",
      open: false
      }
      ]);
    
      const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
      };
    

    return(
      <div className="FAQs">
         <div className="container" data-aos="fade-up">
            <h1 className="text-center faq-head">Want to know more FAQs?</h1>
            <div className="faqs" data-aos="fade-right">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} data-aos="fade-right" />
        ))}
      </div>
         </div>
      </div>
    );
}

export default FAQs;