import { navLinks, navIcons } from "@constants";
import { useCurrentTime } from "@hooks/useCurrentTime";

const Navbar = () => {
  const currentTime = useCurrentTime();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Gyanendra's Portfoilo</p>

        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map((icon) => (
            <li key={icon.id}>
              <img src={icon.img} alt={icon.id} className="icon-hover" />
            </li>
          ))}
        </ul>
        <time>{currentTime.format("ddd MMM D")}</time>
        <time>{currentTime.format("H:mm:ss A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
