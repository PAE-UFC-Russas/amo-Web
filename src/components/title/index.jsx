import styles from "./styles.module.css";

export default function Title({ title, className, level = "h1", ...props }) {
  const Component = level;

  return (
    <Component className={`${styles.title} ${className || ""}`} {...props}>
      {title}
    </Component>
  );
}
