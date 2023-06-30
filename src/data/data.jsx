import project1 from '../assets/projects/project-1.gif'
import project2 from '../assets/projects/project-2.gif'
import project3 from '../assets/projects/project-3.gif'
import project4 from '../assets/projects/project-4.gif'

import jsIcon from '../assets/techIcons/js.png'
import reactIcon from '../assets/techIcons/react.png'
import nodeIcon from '../assets/techIcons/node.png'
import expressIcon from '../assets/techIcons/express.png'
import gitIcon from '../assets/techIcons/git.png'
import viteIcon from '../assets/techIcons/vite.png'
import cssIcon from '../assets/techIcons/css.png'
import htmlIcon from '../assets/techIcons/html.png'

const projects = [
  {
    title: 'Get Yours (ecommerce)',
    techs: [reactIcon, htmlIcon, cssIcon, jsIcon, gitIcon, viteIcon],
    description:
      'Ecommerce Web responsivo que emplea un JSON Server como backend, usa autenticación JWT, manejo de sesión y perfiles de usuario para el control de acceso y funcionalidades',
    image: project1,
    deploy: '',
    repo: 'https://reactbootcamp.com'
  },
  {
    title: 'React Tracks',
    techs: [jsIcon, reactIcon],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: project2,
    deploy: '',
    repo: 'https://reactbootcamp.com'
  },
  {
    title: 'DevChat',
    techs: [jsIcon, reactIcon],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: project3,
    deploy: '',
    repo: 'https://reactbootcamp.com'
  },
  {
    title: 'Epic Todo App',
    techs: [jsIcon, reactIcon],
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: project4,
    deploy: '',
    repo: 'https://reactbootcamp.com'
  }
]

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.',
    image: 'https://pbs.twimg.com/profile_images/1542549521275752450/b2ZIy6aX_400x400.jpg',
    name: 'Analista de Proyectos',
    company: 'Audifarma'
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.',
    image: 'https://pbs.twimg.com/profile_images/2198784231/Logo_P_negro_copia_400x400.jpg',
    name: 'Analista y Auditor de Inventarios',
    company: 'Pentagrama'
  }
]

const skills = [
  {
    tool: 'JavaScript',
    icon: jsIcon
  },
  {
    tool: 'React',
    icon: reactIcon
  },
  {
    tool: 'Node',
    icon: nodeIcon
  },
  {
    tool: 'Express',
    icon: expressIcon
  },
  {
    tool: 'Git',
    icon: gitIcon
  },
  {
    tool: 'Vite',
    icon: viteIcon
  },
  {
    tool: 'HTML',
    icon: htmlIcon
  },
  {
    tool: 'CSS',
    icon: cssIcon
  }
]

export { projects, testimonials, skills }
