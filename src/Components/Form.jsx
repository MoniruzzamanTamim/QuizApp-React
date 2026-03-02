

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} form`} action="#" {...rest}>
      {children}
    </form>
  );
}
