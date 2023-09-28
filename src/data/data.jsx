import worldMovies from '../assets/projects/worldMovies.gif'
import getYours from '../assets/projects/getYours.gif'
import hangOut from '../assets/projects/hangOut.gif'
import todo from '../assets/projects/ToDo.gif'
import wikipedia from '../assets/projects/wikipedia.gif'

import jsIcon from '../assets/techIcons/js.png'
import reactIcon from '../assets/techIcons/react.png'
import nodeIcon from '../assets/techIcons/node.png'
import expressIcon from '../assets/techIcons/express.png'
import gitIcon from '../assets/techIcons/git.png'
import viteIcon from '../assets/techIcons/vite.png'
import cssIcon from '../assets/techIcons/css.png'
import htmlIcon from '../assets/techIcons/html.png'
import axiosIcon from '../assets/techIcons/axios.png'
import javaIcon from '../assets/techIcons/java2.png'
import springBootIcon from '../assets/techIcons/springBoot.svg'
import aws from '../assets/techIcons/aws.png'
import postgresql from '../assets/techIcons/postgresql.png'
import mysql from '../assets/techIcons/mysql.png'
import docker from '../assets/techIcons/docker.png'

const projects = [
  {
    title: 'Hang Out',
    techs: [reactIcon, jsIcon, gitIcon, viteIcon],
    description:
      'Permite la consulta de series en tendencia, calificaciones, resumen, temporadas, capitulos y personajes usando una API pública',
    image: hangOut,
    deploy: 'https://your-show.netlify.app/',
    repo: 'https://github.com/macv9620/react-movies-proyect.git',
    isApi: false
  },
  {
    title: 'Get Yours (ecommerce)',
    techs: [reactIcon, jsIcon, gitIcon, viteIcon, axiosIcon],
    description:
      'Aplicación responsiva que usa JSON Server, autenticación JWT, manejo de sesión y perfiles de usuario para el control de acceso y funcionalidades',
    image: getYours,
    deploy: 'https://get-yours.netlify.app/',
    repo: 'https://github.com/macv9620/react-ecommerce-project.git',
    isApi: false
  },
  {
    title: 'World Movies',
    techs: [jsIcon, htmlIcon, cssIcon, gitIcon, axiosIcon],
    description:
      'Permite búsqueda de películas por diferentes criterios, se implementa Lazy Loading, Scroll Infinito y botón para cambio de idioma.',
    image: worldMovies,
    deploy: 'https://macv9620.github.io/proyecto-consumo-api/',
    repo: 'https://github.com/macv9620/proyecto-consumo-api.git',
    isApi: false
  },
  {
    title: 'Java Market API Rest',
    techs: [javaIcon, springBootIcon, postgresql, aws, docker],
    description:
      'API Java/Spring Boot/PostgreSQL que permite la gestión de productos y compras de un Ecommerce, para su despliegue se empleó Docker, AWS y Swagger para su documentación',
    image: getYours,
    deploy: 'https://market-spring-api.onrender.com/swagger-ui.html',
    repo: 'https://github.com/macv9620/market-java-spring',
    isApi: true
  },
  {
    title: 'API Rest NodeJS',
    techs: [jsIcon, nodeIcon, expressIcon, gitIcon],
    description:
      'Api desarrollada en ExpressJS que soporta métodos POST, PUT, PATCH, DELETE, GET para la gestión de productos de un Ecommerce.',
    image: '',
    deploy: 'https://productsapi-euyr.onrender.com/API/v1/products',
    repo: 'https://github.com/macv9620/1-ExpressJS-API.git',
    isApi: true
  },
  {
    title: 'ToDo',
    techs: [reactIcon, jsIcon, gitIcon],
    description:
      'Aplicación para gestión de tareas, permite crear, editar, eliminar y manejar el estado de los "To Do", emplea localStorage para persistencia de datos',
    image: todo,
    deploy: 'https://dontforgetit.netlify.app/',
    repo: 'https://github.com/macv9620/React-ToDo-App.git',
    isApi: false
  },
  {
    title: 'Wikipedia',
    techs: [htmlIcon, cssIcon, gitIcon],
    description:
      'Clon responsivo de la Wikipedia Landing Page',
    image: wikipedia,
    deploy: 'https://macv9620.github.io/Wikipedia-Clone/',
    repo: 'https://github.com/macv9620/Wikipedia-Clone',
    isApi: false
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
    image: 'https://i.ibb.co/Pm45ptN/a9fac273748a.png',
    name: 'Analista de Proyectos',
    company: 'Audifarma S.A',
    date: 'dic-2020 / Actualmente en el cargo'
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
    company: 'Pentagrama S.A',
    date: 'nov-2017 / dic-2020'
  }
]

const skills = [
  {
    tool: 'Java',
    icon: javaIcon
  },
  {
    tool: 'Spring Boot',
    icon: springBootIcon
  },
  {
    tool: 'PostgreSQL',
    icon: postgresql
  },
  {
    tool: 'MySQL',
    icon: mysql
  },
  {
    tool: 'AWS',
    icon: aws
  },
  {
    tool: 'JavaScript',
    icon: jsIcon
  },
  {
    tool: 'React',
    icon: reactIcon
  },
  {
    tool: 'NodeJS',
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
    tool: 'HTML',
    icon: htmlIcon
  },
  {
    tool: 'CSS',
    icon: cssIcon
  }
]

export { projects, testimonials, skills }
