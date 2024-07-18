const Section = ({children, className}) => {
  return (
    <section className={`${className || "pt-5"}`}>
      {children}
    </section>
  )
}

export default Section
