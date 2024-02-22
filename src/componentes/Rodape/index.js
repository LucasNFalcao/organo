import './style.css'

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src="./assets/fb.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="./assets/tw.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src="./assets/ig.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="./assets/logo.png" alt="Logo" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  )
}

export default Rodape
