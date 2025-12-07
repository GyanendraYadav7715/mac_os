import { WindowControlls } from "@components";
import { socials } from "@constants";
import WindowWrapper from "@hoc/WindowWraper";
const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControlls target="contact" />
        <h2>Contact</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/gyan.jpeg"
          alt="Gyanendra Yadav"
          className="w-24 h-24 rounded-full object-cover object-top"
        />

      
        <div className="bg-linear-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Let's Connect 
          </h3>
          <p className="text-gray-700">
            Got an idea? A bug to squash? Or just wanna talk tech? I'm in. Drop
            me a message and let's build something awesome together!
          </p>
        </div>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
