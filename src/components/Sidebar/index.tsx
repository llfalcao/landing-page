const links = [
  {
    text: "All",
    href: "#all",
  },
  {
    text: "Action",
    href: "#action",
  },
  {
    text: "Action-Adventure",
    href: "#action-adventure",
  },
  {
    text: "Adventure",
    href: "#adventure",
  },
  {
    text: "Card Games",
    href: "#card-games",
  },
  {
    text: "MMORPG",
    href: "#mmorpg",
  },
  {
    text: "Role-Playing",
    href: "#role-playing",
  },
  {
    text: "Simulation",
    href: "#simulation",
  },
  {
    text: "Strategy",
    href: "#strategy",
  },
  {
    text: "Sports",
    href: "#sports",
  },
];

export default function Sidebar() {
  return (
    <nav id="sidebar">
      <header>Categories</header>
      {links.map((link) => (
        <a key={link.href} className="nav-link" href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}
