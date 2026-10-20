import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold " +
  "transition duration-300 active:scale-[0.97]";

const sizes = {
  md: "px-6 py-3",
  sm: "px-4 py-2",
};

const variants = {
  // Filled amber button: the main action on a page
  primary: "bg-accent text-accent-fg hover:brightness-110",
  // Outlined button: the secondary action
  ghost: "border border-line text-fg hover:border-accent hover:text-accent",
};

/**
 * One button component for three situations:
 *   <Button to="/projects">      -> internal page link (React Router)
 *   <Button href="https://...">  -> normal link (opens a new tab if http)
 *   <Button onClick={...}>       -> real <button>
 *
 * `icon` takes an icon COMPONENT, e.g. icon={LuArrowUpRight}
 */
export default function Button({
  to,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  children,
  className = "",
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {Icon && <Icon aria-hidden="true" className="h-4 w-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
