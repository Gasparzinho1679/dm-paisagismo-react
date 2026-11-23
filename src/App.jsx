import { useEffect, useState } from 'react'
import fachada from './assets/fachada.jpg'
import tropical from './assets/tropical.jpg'
import piscina from './assets/piscina.jpg'
import vertical from './assets/vertical.jpg'
import gramado from './assets/gramado.jpg'
import canteiro from './assets/canteiro.jpg'
import iluminado from './assets/iluminado.jpg'

const EMAIL = 'contato@dmpaisagismo.com.br'
// WhatsApp: número só com dígitos, com 55 + DDD + número (ex.: 5511999999999)
const WHATSAPP_NUMERO = '5500000000000'
const WHATSAPP_TEXTO = '(00) 00000-0000'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent('Olá! Vim pelo site da DM Paisagismo e gostaria de um orçamento.')}`

function IconeWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.43 15.07L2 22l5.07-1.33A9.9 9.9 0 1 0 12.04 2Zm0 18.05c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3 .79.8-2.93-.2-.31a8.05 8.05 0 1 1 6.95 3.79Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.1 3.64.57.25 1.02.4 1.37.5.58.18 1.1.16 1.5.1.46-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

function BotaoWhatsApp({ className = 'btn', children = 'Chamar no WhatsApp' }) {
  return (
    <a className={className} href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
      <IconeWhatsApp /> {children}
    </a>
  )
}

const PAGES = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' },
]

const SERVICOS = [
  { titulo: 'Projeto paisagístico', img: fachada, alt: 'Fachada com jardim', texto: 'Planejamento completo do jardim, com escolha de plantas, pisos, canteiros e iluminação, pensado para o seu terreno.' },
  { titulo: 'Jardins residenciais', img: canteiro, alt: 'Canteiro florido', texto: 'Fachadas, quintais e corredores laterais com forrações, flores e folhagens que combinam com o estilo da casa.' },
  { titulo: 'Jardim vertical', img: vertical, alt: 'Jardim vertical', texto: 'Paredes verdes para quem tem pouco espaço ou quer dar vida a um muro ou varanda.' },
  { titulo: 'Iluminação de jardim', img: iluminado, alt: 'Iluminação de jardim', texto: 'Luz que destaca palmeiras, pedras e caminhos, deixando o jardim bonito também à noite.' },
  { titulo: 'Piscina e área de lazer', img: piscina, alt: 'Paisagismo de piscina', texto: 'Paisagismo ao redor de piscinas e áreas de convivência, com plantas adequadas para o local.' },
  { titulo: 'Manutenção de jardins', img: gramado, alt: 'Gramado e jardim', texto: 'Poda, adubação, controle de pragas e cuidado com o gramado, em visitas combinadas com você.' },
]

function usePagina() {
  const ler = () => {
    const h = window.location.hash.slice(1)
    return PAGES.some((p) => p.id === h) ? h : 'inicio'
  }
  const [pagina, setPagina] = useState(ler)
  useEffect(() => {
    const aoMudar = () => {
      setPagina(ler())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', aoMudar)
    return () => window.removeEventListener('hashchange', aoMudar)
  }, [])
  return pagina
}

function Header({ pagina }) {
  return (
    <header>
      <div className="bar">
        <a className="logo" href="#inicio">
          <i>DM</i>DM Paisagismo
        </a>
        <nav aria-label="Principal">
          {PAGES.map((p) => (
            <a key={p.id} href={`#${p.id}`} aria-current={pagina === p.id ? 'page' : undefined}>
              {p.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Inicio() {
  return (
    <>
      <div className="wrap hero">
        <div className="txt">
          <h1>Jardins que valorizam a sua casa</h1>
          <p>Projeto, execução e manutenção de paisagismo para residências: fachadas, quintais, áreas de piscina e jardins verticais.</p>
          <div className="actions">
            <a className="btn" href="#contato">Pedir orçamento</a>
            <BotaoWhatsApp className="btn ghost" />
          </div>
        </div>
        <div className="pic" role="img" aria-label="Fachada com jardim e palmeira" style={{ backgroundImage: `url(${fachada})` }} />
      </div>

      <section className="band">
        <div className="wrap three">
          <div><h3>Projeto sob medida</h3><p>Escolhemos plantas, pisos e iluminação de acordo com o seu espaço, o sol que ele recebe e a rotina de quem vive nele.</p></div>
          <div><h3>Execução cuidadosa</h3><p>Plantio, paginação de pedras, forrações e acabamentos feitos com atenção a cada detalhe.</p></div>
          <div><h3>Jardim que dura</h3><p>Espécies adequadas ao clima e manutenção periódica para o jardim continuar bonito depois da obra.</p></div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Alguns de nossos jardins</h2>
          <div className="gal">
            <img src={tropical} alt="Jardim com palmeiras e plantas tropicais" loading="lazy" />
            <img src={piscina} alt="Piscina com jardim e área de lazer" loading="lazy" />
            <img src={vertical} alt="Jardim vertical iluminado" loading="lazy" />
            <img src={iluminado} alt="Jardim iluminado ao entardecer" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="band cta">
        <div className="wrap">
          <h2>Vamos planejar o seu jardim?</h2>
          <p>Conte o que você imagina e entraremos em contato para combinar uma visita.</p>
          <a className="btn" href="#contato">Falar com a DM</a>
        </div>
      </section>
    </>
  )
}

function Servicos() {
  return (
    <section>
      <div className="wrap">
        <h2>Serviços</h2>
        <p>Do projeto à manutenção, cuidamos de todas as etapas do seu jardim.</p>
        <div>
          {SERVICOS.map((s) => (
            <div className="svc" key={s.titulo}>
              <div className="si"><img src={s.img} alt={s.alt} loading="lazy" /></div>
              <div><h3>{s.titulo}</h3><p>{s.texto}</p></div>
            </div>
          ))}
        </div>
        <div className="actions"><a className="btn" href="#contato">Pedir orçamento</a></div>
      </div>
    </section>
  )
}

function Contato() {
  const [form, setForm] = useState({ nome: '', tel: '', email: '', servico: SERVICOS[0].titulo, msg: '' })
  const [erro, setErro] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const mudar = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const enviar = (e) => {
    e.preventDefault()
    if (!form.nome.trim() || !form.tel.trim()) {
      setErro(true)
      return
    }
    setErro(false)
    const corpo = `Nome: ${form.nome}\nTelefone: ${form.tel}\nE-mail: ${form.email}\nServiço: ${form.servico}\n\n${form.msg}`
    setEnviado(true)
    // Troque por uma chamada à sua API (fetch/axios) quando tiver um back-end
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Orçamento - ' + form.servico)}&body=${encodeURIComponent(corpo)}`
  }

  return (
    <section>
      <div className="wrap contact">
        <div>
          <h2>Contato</h2>
          <p>Preencha o formulário e a DM responde para combinar uma visita e fazer o orçamento.</p>
          <form onSubmit={enviar} noValidate>
            <div className="row">
              <label>Nome<input name="nome" value={form.nome} onChange={mudar} autoComplete="name" required /></label>
              <label>Telefone<input name="tel" type="tel" value={form.tel} onChange={mudar} autoComplete="tel" required /></label>
            </div>
            <label>E-mail<input name="email" type="email" value={form.email} onChange={mudar} autoComplete="email" /></label>
            <label>Serviço de interesse
              <select name="servico" value={form.servico} onChange={mudar}>
                {SERVICOS.map((s) => <option key={s.titulo}>{s.titulo}</option>)}
                <option>Outro</option>
              </select>
            </label>
            <label>Mensagem<textarea name="msg" value={form.msg} onChange={mudar} placeholder="Conte um pouco sobre o seu espaço" /></label>
            {erro && <p role="alert" style={{ color: '#B3261E' }}>Preencha o nome e o telefone para enviar.</p>}
            <div><button className="btn" type="submit">Enviar mensagem</button></div>
          </form>
          {enviado && <div className="ok" role="status">Mensagem pronta. Seu aplicativo de e-mail abriu com os dados preenchidos: é só enviar.</div>}
        </div>
        <aside className="info">
          <h3>DM Paisagismo</h3>
          <p>Atendimento com hora marcada.</p>
          <p>E-mail: {EMAIL}</p>
          <p>WhatsApp: {WHATSAPP_TEXTO}</p>
          <p>Segunda a sábado, das 8h às 18h</p>
          <BotaoWhatsApp />
        </aside>
      </div>
    </section>
  )
}

export default function App() {
  const pagina = usePagina()
  return (
    <>
      <Header pagina={pagina} />
      <main>
        {pagina === 'inicio' && <Inicio />}
        {pagina === 'servicos' && <Servicos />}
        {pagina === 'contato' && <Contato />}
      </main>
      <BotaoWhatsApp className="wa-flutuante">WhatsApp</BotaoWhatsApp>
      <footer>
        <div className="wrap">© DM Paisagismo. Todos os direitos reservados.</div>
      </footer>
    </>
  )
}
