import react from 'react';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark">

        <footer className="text-center text-white">
          <div className="container pt-4">
            <section className="mb-4">
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://www.facebook.com/Uphilltech/"
                role="button"
                data-mdb-ripple-color="light"
              ><i className="fab fa-facebook-f"></i></a>

              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="light"
              ><i className="fab fa-twitter"></i></a>

              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://www.uphilltech.com/#"
                role="button"
                data-mdb-ripple-color="light"
              ><i className="fab fa-google"></i></a>

              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="light"
              ><i className="fab fa-instagram"></i></a>

              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://www.linkedin.com/in/aditya-kallurwar-5a9a76234/"
                role="button"
                data-mdb-ripple-color="light"
              ><i className="fab fa-linkedin"></i></a>
              <a
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href="https://github.com/Adityaweb23/Movie"
                role="button"
                data-mdb-ripple-color="light"
              ><i className="fab fa-github"></i></a>
            </section>
          </div>
          <div className="text-center text-light p-3">
            © 2022 Creater:
            <a className="text-light" href="#"> Aditya</a>
          </div>
        </footer>
      </div>
    </>
  )
}
export default Footer;