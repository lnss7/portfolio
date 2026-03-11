export const navItems = [
  { name: "Projetos", link: "#projects" },
  { name: "Tecnologias", link: "#technologies" },
  { name: "Experiência", link: "#experience" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo o trabalho em equipe, a agilidade e a comunicação transparente",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Moro em Porto Alegre, RS, com flexibilidade para agarrar desafios remotos",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minha stack técnica",
    description: "Sempre buscando evoluir",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de tecnologia, movido pela vontade de entender como as coisas funcionam.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Desenvolvendo soluções em saúde digital para o SUS através do PET-Saúde",
    description: "O que estou construindo no momento",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Buscando um dev para o seu time ou projeto?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Dashboard Operacional (AGES I) - Polícia Civil ",
    des: "Dashboard desenvolvido em equipe para apoiar operações institucionais , com atuação principal no front-end utilizando filtros e modais.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/python.svg", "/MaterialUI.svg"],
    link: "https://tools.ages.pucrs.br/dashboard-operacional/frontend.git",
  },
  {
    id: 2,
    title: "FSW Barber - Sistema SaaS",
    des: "Plataforma Full Stack para gestão de barbearias. Conta com agendamento em tempo real e autenticação segura via Google.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg", "/postgresql.svg"],
    link: "https://barber.lucasnovellysimao.com/",
  },
  {
    id: 3,
    title: "Stranger Things Experience",
    des: "Landing page imersiva e interativa inspirada na série. Foco em UI/UX, utilizando Parallax e Smooth Scroll para uma navegação fluida.",
    img: "/p3.svg",
    iconLists: ["/JavaScript.svg", "/css.svg", "/html5.svg", "/gsap.svg"],
    link: "https://lucasnovellysimao.com/stranger-things/",
  },
];

export const technologies = [
  { id: 1, name: "React.js", img: "/re.svg" },
  { id: 2, name: "Next.js", img: "/next.svg" },
  { id: 3, name: "Tailwind CSS", img: "/tail.svg" },
  { id: 4, name: "TypeScript", img: "/ts.svg" },
  { id: 5, name: "Material UI", img: "/MaterialUI.svg" },
  { id: 6, name: "Java", img: "/java.svg" },
  { id: 7, name: "GSAP", img: "/gsap.svg" },
  { id: 8, name: "JavaScript", img: "/JavaScript.svg" },
  { id: 9, name: "HTML5", img: "/html5.svg" },
  { id: 10, name: "CSS", img: "/css.svg" },
  { id: 11, name: "Python", img: "/python.svg" },
  { id: 12, name: "PostgreSQL", img: "/postgresql.svg" },
];

export const workExperience = [
  {
    id: 1,
    title: "Bolsista de Desenvolvimento - PET-Saúde",
    desc: "Desenvolvimento de soluções tecnológicas em saúde digital para apoio ao SUS e gestão hospitalar, colaborando ativamente com uma equipe multidisciplinar.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desenvolvedor Front-end - Projeto AGES I",
    desc: "Atuei no desenvolvimento de um dashboard operacional para a Polícia Civil, focado na criação de interfaces com React.js, Material UI e aplicação de metodologias ágeis.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Certificações em IA & JavaScript",
    desc: "Foco no aprendizado contínuo, contando com a trilha de JavaScript pela Apple Developer Academy e certificações da Microsoft em Fundamentos de IA, Visão Computacional e Machine Learning.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Engenharia de Software & Interesses",
    desc: "Cursando o 5º semestre na PUCRS, com reconhecimento de Mérito Acadêmico (2025/1). Possuo forte interesse e dedico meus estudos nas áreas de desenvolvimento Front-end, ecossistema de Micro SaaS e design interativo.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/lnss7",
  },
  {
    id: 2,
    img: "/instagram.svg",
    href: "https://www.instagram.com/lucxs_ns/",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/lucas-novelly-simao/",
  },
];