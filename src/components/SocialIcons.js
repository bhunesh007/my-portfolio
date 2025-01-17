

const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
     
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/rohit-singh-98658a198/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Rohit Kumar Singh' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://github.com/masai-course/rohit_kumar_singh_ft37_741">
      <i className="fa-brands fa-github" aria-hidden="true" title="Rohit Kumar Singh' GitHub Profile"></i>
    </a>
      
    </div>
  );
};

export default SocialIcons;
