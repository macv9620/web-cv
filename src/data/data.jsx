import project1 from '../assets/projects/project-1.gif'
import project2 from '../assets/projects/project-2.gif'
import project3 from '../assets/projects/project-3.gif'
import project4 from '../assets/projects/project-4.gif'

const projects = [
  {
    title: 'React Reserve',
    subtitle: 'MERN Stack',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: project1,
    link: 'https://reactbootcamp.com'
  },
  {
    title: 'React Tracks',
    subtitle: 'React and Python',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: project2,
    link: 'https://reactbootcamp.com'
  },
  {
    title: 'DevChat',
    subtitle: 'React and Firebase',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: project3,
    link: 'https://reactbootcamp.com'
  },
  {
    title: 'Epic Todo App',
    subtitle: 'React Hooks',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
    image: project4,
    link: 'https://reactbootcamp.com'
  }
]

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Jesse Hicks',
    company: 'Zoozle'
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.',
    image: 'https://randomuser.me/api/portraits/men/94.jpg',
    name: 'Ruben Alvarez',
    company: 'Dooble.io'
  }
]

const skills = [
  'JavaScript',
  'React',
  'Next.js',
  'Node',
  'GraphQL',
  'Material UI'
]

export { projects, testimonials, skills }