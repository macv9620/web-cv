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
import axiosIcon from '../assets/techIcons/axios.png'

const projects = [
  {
    title: 'Get Yours (ecommerce)',
    techs: [reactIcon, jsIcon, gitIcon, viteIcon, axiosIcon],
    description:
      'Aplicación responsiva que usa JSON Server, autenticación JWT, manejo de sesión y perfiles de usuario para el control de acceso y funcionalidades',
    image: 'https://i.ibb.co/cx22Z4W/d004b5020ef2.gif',
    deploy: 'https://get-yours.netlify.app/',
    repo: 'https://github.com/macv9620/react-ecommerce-project.git'
  },
  {
    title: 'Hang Out',
    techs: [reactIcon, jsIcon, gitIcon, viteIcon],
    description:
      'Permite la consulta de series en tendencia, calificaciones, resumen, temporadas, capitulos y personajes usando una API pública',
    image: 'https://i.ibb.co/LRKb6f5/8e5e1087e7a9.gif',
    deploy: 'https://your-show.netlify.app/',
    repo: 'https://github.com/macv9620/react-movies-proyect.git'
  },
  {
    title: 'ToDo',
    techs: [reactIcon, jsIcon, gitIcon],
    description:
      'Aplicación para gestión de tareas, permite crear, editar, eliminar y manejar el estado de los "To Do", emplea localStorage para persistencia de datos',
    image: project3,
    deploy: 'https://get-yours.netlify.app/',
    repo: 'https://github.com/macv9620/react-ecommerce-project.git'
  },
  {
    title: 'API Rest',
    techs: [jsIcon, nodeIcon, expressIcon, gitIcon],
    description:
      'Api desarrollada en ExpressJS que soporta métodos POST, PUT, PATCH, DELETE, GET para la gestión de productos de un Ecommerce.',
    image: project4,
    deploy: 'https://get-yours.netlify.app/',
    repo: 'https://github.com/macv9620/react-ecommerce-project.git'
  },
  {
    title: 'World Movies',
    techs: [jsIcon, htmlIcon, cssIcon, gitIcon, axiosIcon],
    description:
      'Permite búsqueda de películas por diferentes criterios, se implementa Lazy Loading, Scroll Infinito y botón para cambio de idioma.',
    image: project4,
    deploy: 'https://get-yours.netlify.app/',
    repo: 'https://github.com/macv9620/react-ecommerce-project.git'
  },
  {
    title: 'Wikipedia',
    techs: [htmlIcon, cssIcon, gitIcon],
    description:
      'Clon responsivo de la Wikipedia Landing Page',
    image: project4,
    deploy: 'https://get-yours.netlify.app/',
    repo: 'https://github.com/macv9620/react-ecommerce-project.git'
  }
]

const testimonials = [
  {
    quote: [
      'Formular, evaluar y ejecutar proyectos',
      'Documentar requerimientos de Software',
      'Preparar y ejecutar pruebas de de Software',
      'Coordinar implementaciones de Software'
    ],
    image: 'https://pbs.twimg.com/profile_images/1542549521275752450/b2ZIy6aX_400x400.jpg',
    name: 'Analista de Proyectos',
    company: 'Audifarma S.A'
  },
  {
    quote: [
      'Análisis de costos',
      'Auditoría a inventarios',
      'Construcción de indicadores',
      'Análisis de datos'
    ],
    image: 'https://pbs.twimg.com/profile_images/2198784231/Logo_P_negro_copia_400x400.jpg',
    name: 'Analista y Auditor de Inventarios',
    company: 'Pentagrama S.A'
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
