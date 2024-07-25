// import styles from "./Button.module.css";

function Button() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  //Styling dengan inline css
  return <button style={styles}>Click Me</button>;

  //Styling dengan global css
  // return <button className="button">Click Me</button>;

  //Styling dengan Module
  // return <button className={styles.button}>Click Me</button>;
}
export default Button;
