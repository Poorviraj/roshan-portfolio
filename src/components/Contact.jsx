import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <motion.div 
            className="border-b border-neutral-900 pb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1 
                className="my-10 text-center text-4xl" 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                Get in Touch
            </motion.h1>
            <motion.div 
                className="text-center tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <p className="some-class">+91 8209302677</p>
                <motion.a 
                    href="#" 
                    className="border-b"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {CONTACT.email}
                </motion.a>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
