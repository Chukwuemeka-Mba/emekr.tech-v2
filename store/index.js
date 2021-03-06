export const state = () => ({
  stacks: [
    {
      id: 38,
      name: "Javascript",
      img: "js.png",
      alias: "javascript",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 38,
      name: "Typescript",
      img: "ts.png",
      alias: "javascript",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 38,
      name: "Python",
      img: "python.png",
      alias: "javascript",
      type: "dev",
      bg: "#008100",
    },
  ],
  tools: [
    {
      id: 1,
      name: "Vue.js",
      img: "vue.js.png",
      alias: "vue",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 1,
      name: "Nuxt.js",
      img: "nuxt.png",
      alias: "vue",
      type: "dev",
      bg: "#008100",
    },

    {
      id: 31,
      name: "React",
      img: "react.png",
      alias: "react",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 36,
      name: "Node Js",
      img: "nodejs.png",
      alias: "nodejs",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 12,
      name: "Figma",
      img: "figma.png",
      alias: "figma",
      type: "product",
      bg: "#008100",
    },
    {
      id: 12,
      name: "Django",
      img: "django.png",
      alias: "django",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 40,
      name: "MongoDB",
      img: "mongodb.png",
      alias: "mongodb",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 31,
      name: "Node Sass",
      img: "scss.png",
      alias: "react",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 42,
      name: "Tailwind",
      img: "tailwind.png",
      alias: "postgresql",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 42,
      name: "Webpack",
      img: "webpack.png",
      alias: "webpack",
      type: "dev",
      bg: "#008100",
    },
  ],
  platforms: [
    {
      id: 27,
      name: "GitHub",
      img: "github.png",
      alias: "github",
      type: "devO",
      bg: "#008100",
    },
    {
      id: 27,
      name: "Netlify",
      img: "netlify.png",
      alias: "netlify",
      type: "dev",
      bg: "#008100",
    },
    {
      id: 25,
      name: "Heroku",
      img: "heroku.png",
      alias: "aws",
      type: "dev",
      bg: "#008100",
    },

    {
      id: 3,
      name: "Postman",
      img: "postman.png",
      alias: "postman",
      type: "QA",
      bg: "#008100",
    },
    {
      id: 8,
      name: "Notion",
      img: "notion.png",
      alias: "notion",
      type: "QA",
      bg: "#008100",
    },
  ],
  projects: [
    {
      id: 1,
      name: "Movie Reviews Website",
      img: "yem-reviews.png",
      desc: "This is web app for reviewing movies.  Users can add a new movie, comment on and review the movie. Only an admin user can create a movie.",
      stack: "Django, Tailwind, HTML",
      liveUrl: "https://yemreviews.herokuapp.com/",
      githubUrl: "https://github.com/Chukwuemeka-Mba/yem-reviews",
    },
    {
      id: 2,
      name: "MLH React Weather App",
      img: "mlh-react.png",
      desc: "Weather app built with react. Automatically selects your location and gives you weather details, suggestions and news reports.",
      stack: "HTML, CSS, JS, React",
      liveUrl: "https://mlh-prep-jan-2022.netlify.app/ ",
      githubUrl: "https://github.com/MLH-Fellowship/prep-project-jan-2022",
    },
    {
      id: 4,
      name: "Ajo - The Travel Guide",
      img: "ajo.png",
      desc: "Create an account. Browse travel destinations, save travel history. (Still in Progress.)",
      stack: "Nuxt Js, Scss, Node Js",
      liveUrl: "https://ajo-interns-project.netlify.app/mobile",
      githubUrl: "https://github.com/acumendigital/ajo-interns-project",
    },
    {
      id: 6,
      name: "Yield Finance",
      img: "yield.png",
      desc: "Crypto market data from coingecko api. Integrated the flutterwave payments sdk into the application for payments.",
      stack: "Nuxt Js, Scss",
      liveUrl: "http://yield-finance.netlify.app/",
      githubUrl: "https://github.com/Chukwuemeka-Mba/yieldfi",
    },
    {
      id: 5,
      name: "Spotify Clone",
      img: "spotify.png",
      desc: "Spotify clone built with React Js and Styled components. State management done with useReducer hook. NOT MOBILE RESPONSIVE - YET",
      stack: "Nuxt Js, Scss",
      liveUrl: "https://emeka-spotify-clone.netlify.app/",
      githubUrl: "https://github.com/Chukwuemeka-Mba/spotify-clone",
    },
    {
      id: 6,
      name: "Tesla Website Clone",
      img: "tesla.png",
      desc: "Decided to flex my awesomeness so i built the tesla landing page with react js, redux and styled components. Caveat: Not responsive to mobile screens",
      stack: "React Js, Redux, Styled Components",
      liveUrl: "https://chukwuemeka-mba.github.io/tesla-clone/",
      githubUrl: "https://github.com/Chukwuemeka-Mba/tesla-clone",
    },
  ],
  experiences: [
    {
      id: 1,
      company: "MLH Fellowship",
      position: "Software Engineering Prep Fellow",
      img: "mlh.png",
      desc: "Built open-source projects with 13 fellows using  frameworks like Rust, Jekyll, and React Js. 	Built a portfolio website, and weather application with Jekyll and React Respectively.",
      compUrl: "https://fellowship.mlh.io",
      location: "United States | Remote",
    },
    {
      id: 1,
      company: "Acumen Digital",
      position: "Frontend team lead (Intern).",
      img: "acumen.png",
      desc: "Built and shipped 4 multipage frontend applications for the company using Vue Js and Nuxt Js. Led the entire Internship cohort to the completion of our flagship project.",
      compUrl: "https://acumen.digital",
      location: "Remote",
    },
  ],
  articles: [
    {
      id: 1,
      name: "User authentication with Axios, Vue Js and Nuxt Js.",
      platform: "Dev.to",
      img: "nuxt-auth.webp",
      desc: "Learn how to perform user authentication with axios vue js and nuxt js",
      link: "https://dev.to/reallifenero/user-authentication-with-axios-vue-js-and-nuxt-js-2o9d",
      published: "2022",
    },
    {
      id: 2,
      name: "Education, Enlightenment and Suffering",
      platform: "Linkedin | Medium",
      img: "ees.jpg",
      desc: "Much of our suffering stems from sticking to old ways of solving problems. We are so obsessed with doing things ???right???. We look for one definition that can fit all scenarios so we won???t have to perform mental calisthenics when faced with a new problem. In our unreasonable bid to simplify life, we fail to realize that ??? as one of my mentors: Ryan Holiday puts it ??? ???what is right is what works???.",
      link: "https://www.linkedin.com/posts/emekamba_education-enlightenment-and-suffering-activity-6709006084142624768-Enl3?utm_source=linkedin_share&utm_medium=member_desktop_web",
      published: "2020",
    },
    {
      id: 3,
      name: "How to become a whore",
      platform: "Substack",
      img: "whore.png",
      desc: "The best intellectuals are most often the the best writers. The best writers are also often the best researchers, and the best researchers, the best readers. Hence; treat your reading like the research that it is. -Emeka.",
      link: "https://screwfaceletters.substack.com/p/how-to-become-a-whore?s=r",
      published: "2022",
    },
    {
      id: 4,
      name: "Are you you, or are you them",
      platform: "Medium",
      img: "feminism.jpg",
      desc: "If I do my job right I should make you want to identify more as an individual, probably rethink your ideological stances and hopefully but rather unlikely, change your mind. About what? I don???t know.",
      link: "https://reallifenero.medium.com/are-you-you-or-are-you-them-a4afaa1999a0",
      published: "2021",
    },
    {
      id: 5,
      name: "Pathemata Mathemata - Guide your learning through pain.",
      platform: "Substack",
      img: "pain.png",
      desc: "One of society???s problems is the fact that we are very much eager to share the stories of successful 20% whilst ignoring bottom 80%. But the unflattering truth of life is that most of history is filled with astronomical failures. Successes were the exception, not the rule. But we chose to ignore this fact and exactly how does it end?",
      link: "https://screwfaceletters.substack.com/p/reading-recommendations-for-september?s=r",
      published: "2021",
    },
  ],
});
