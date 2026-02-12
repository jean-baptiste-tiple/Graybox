/**
 * @component WfLink
 * @description Navigation helper pour les wireframes. Encapsule onClick + data-flow + data-transition.
 */
export default function WfLink({ to, transition = 'none', navigate, children, className, ...props }) {
  return (
    <a
      href="#"
      onClick={(e) => { e.preventDefault(); navigate(to); }}
      data-flow={to}
      data-transition={transition}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
