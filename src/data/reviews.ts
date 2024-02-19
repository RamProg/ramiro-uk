import { Review } from '@/types/review';
import { BASE_REVIEWERS_IMAGE_PATH } from '@/constants';

const reviews: Review[] = [
  {
    author: {
      name: 'Matias Heber',
      role: 'Managed by me at Launch Consulting (former TAG Latam)',
      picture: BASE_REVIEWERS_IMAGE_PATH + 'matias.jpg',
      linkedin: 'https://www.linkedin.com/in/mati-heber/',
      email: '',
    },
    review:
      'I had the opportunity to work alongside Ramiro and he consistently demonstrated great willingness, technical knowledge, and leadership skills. He prioritized good work, clear objectives, and provided assistance in both development and management aspects to advance the project in the best way possible. It has been a pleasure to work with him, and I hope that our paths cross again in the future.',
  },
  {
    author: {
      name: 'Francisco J. Escobar',
      role: 'Managed by me at Launch Consulting (former TAG Latam)',
      picture: BASE_REVIEWERS_IMAGE_PATH + 'fran.jpg',
      linkedin: 'https://www.linkedin.com/in/fjescobar/',
      email: '',
    },
    review:
      'It is a pleasure to recommend Ramiro for his exceptional leadership as a technical lead in our Skyslope project at Tag Latam. His deep technical knowledge and problem-solving skills were fundamental. His collaborative approach and ability to keep morale high were invaluable to the team. Ramiro is an exceptional leader with outstanding technical skills and an innate talent for motivating the team towards success.',
  },
  {
    author: {
      name: 'Joaquín Maver',
      role: 'Coworker at IBM',
      picture: BASE_REVIEWERS_IMAGE_PATH + 'joaquin.jpg',
      linkedin: 'https://www.linkedin.com/in/joaqu%C3%ADn-maver-2958b13b/',
      email: '',
    },
    review:
      'As a colleague of Ramiro for years, I have always been able to witness his good judgment in decision-making and his creative style that allows him to adopt new paths in problem-solving. I highlight his efforts in team building and his forward-looking approach always focused on achieving objectives.',
  },
  {
    author: {
      name: 'Nicolas Batista',
      role: 'Coworker at Launch Consulting (former TAG Latam)',
      picture: BASE_REVIEWERS_IMAGE_PATH + 'nicolas.jpg',
      linkedin: 'https://www.linkedin.com/in/nicolas-batista-03041988/',
      email: '',
    },
    review:
      'We were colleagues at TAG Latam. Ramiro is a person with a lot of initiative and is always looking to improve processes to achieve optimal results more efficiently. He demonstrated remarkable technical skills, accompanied by an outstanding leadership ability. His good humor and excellent disposition facilitated communication within the team.',
  },
  {
    author: {
      name: 'Gonzalo Nicolás Alvarez',
      role: 'Coworker at Cryptonait (Personal Project)',
      picture: BASE_REVIEWERS_IMAGE_PATH + 'gonzalo.jpg',
      linkedin:
        'https://www.linkedin.com/in/gonzalo-nicol%C3%A1s-alvarez-95517353/',
      email: '',
    },
    review:
      'I worked with Ramiro on the development of an app for buying and selling cryptocurrencies. I was amazed by his ability to learn new things and self-improve. Whenever problems arose, he managed to solve them after a period of research and learning. He is very self-taught and proactive, and I think he would be an excellent resource for any company.',
  },
  {
    author: {
      name: 'Martin Gentile',
      role: 'Colleague at ORT University',
      picture: BASE_REVIEWERS_IMAGE_PATH + 'martin.jpg',
      linkedin: 'https://www.linkedin.com/in/margenpro/',
      email: '',
    },
    review:
      'Ramiro was my colleague at ORT for almost 2 years. His ability to lead teams and organize work was a mainstay of our projects during that time. He has a great talent for learning and adaptation that allows one to trust in his ability to complete tasks and achieve objectives efficiently.',
  },
  {
    author: {
      name: 'Hernan Gallardo',
      role: 'Coworker at Drucaroff & Oxer',
      picture: BASE_REVIEWERS_IMAGE_PATH + 'hernan.jpg',
      linkedin: 'https://www.linkedin.com/in/hernan-gallardo23/',
      email: '',
    },
    review:
      "I worked for two years with Ramiro at the Drucaroff & Oxer law firm. I can highlight his tireless industriousness, his incessant search for efficiency and results, and his characteristic 'outside the box' thinking. These characteristics led him to be a fundamental piece of the company, becoming an unavoidable source of consultation when it came to decision-making.",
  },
];

export default reviews;
