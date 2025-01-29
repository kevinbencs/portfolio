import hu from '../language/hu.json';
import eng from '../language/eng.json';
import Recipe from '../images/recipe2.JPG';
import github from '../images/github-mark-white.png';
import Newspaper from '../images/wordtimes.JPG'


export default function Portfolio(props) {
  return (
    <>
      <article className='portfolio'>
        <h1>{props.language === 'HU' ? hu.portfolio.h1 : eng.portfolio.h1}</h1>
        <div className='skills'>{props.language === 'HU' ? hu.portfolio.section : eng.portfolio.section}</div>

        <div className='project-container' >
          <div className='project' >
            <a href="https://github.com/kevinbencs/recipe-site" rel='noreferrer' target='_blank' className='focus-link' >
              <img src={Recipe} alt="Reicpe site" />
            </a>
            <div className='project-text-link'>
              <div className='projetc-h2-conatiner'>
                <h2 className='projetc-h2'>Recipe site</h2>
              </div>
              <ul className='project-tech-container'>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item1'>React</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item2'>TypeScript</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item3'>Sass</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item6'>Api</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item6'>Node.js</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item6'>SQLite</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item6'>MongoDB</div>
                </li>
              </ul>
              <section className='github-pages-conatiner'>
                <a href="https://github.com/kevinbencs/recipe-site-backend" rel='noreferrer' target='_blank' tabIndex={-1}>
                  <img src={github} alt="github link" />
                </a>
                <a href="https://recipe-deploye.vercel.app/" rel='noreferrer' target='_blank' tabIndex={-1}>Page</a>
              </section>

            </div>
          </div>

          <div className='project' >
            <a href="https://github.com/kevinbencs/recipe-site" rel='noreferrer' target='_blank' className='focus-link' >
              <img src={Newspaper} alt="Reicpe site" />
            </a>
            <div className='project-text-link'>
              <div className='projetc-h2-conatiner'>
                <h2 className='projetc-h2'>Online newspaper</h2>
              </div>
              <ul className='project-tech-container'>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item1'>Next.js</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item2'>TypeScript</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item3'>TailwindCSS</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item4'>Supabase</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item6'>Api</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item6'>MongoDB</div>
                </li>
                <li className='project-tech-item-container'>
                  <div className='project-tech-item project-tech-item6'>Sendgrid</div>
                </li>
              </ul>
              <section className='github-pages-conatiner'>
                <a href="https://github.com/kevinbencs/online_newspaper" rel='noreferrer' target='_blank' tabIndex={-1}>
                  <img src={github} alt="github link" />
                </a>
                <a href="https://online-newspaper.vercel.app/" rel='noreferrer' target='_blank' tabIndex={-1}>Page</a>
                <a href="https://online-newspaper.vercel.app/dhdhdhsefgsgerhtrherwgerhagfws" rel='noreferrer' target='_blank' tabIndex={-1}>Admin login</a>
              </section>

            </div>
          </div>


        </div>
      </article>
    </>
  )
}


