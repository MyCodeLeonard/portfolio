import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TranslateContentService {
    select:"EN" | "DE" = "EN";
    language: 'english' | 'german' = 'english';

    english = {
        aboutMeLink: 'About me',
        skillsLink: 'Skills',
        projectsLink: 'Projects',

        frontendDeveloper: 'Fullstack Developer',

        checkMyWorkLink: 'Check my work',
        contactMeLink: 'Contact me',

        marqueeFrontendDeveloper: 'Fullstack Developer',
        marqueeBasedInAllgaeu: 'Based in Allgaeu',
        marqueeOpenToWork: 'Open to work',
        marqueeAvailbleForRemoteWork: 'Availble for remote work',

        whoIAm: 'Who I am',
        aboutMe: 'About me',
        aboutMeFirstContent: 'Hi, I’m Leonard, a front-end developer who is actively growing into a full-stack role. I love transforming complex requirements into modern, high-performance, and user-friendly applications. At the moment, I’m deepening my expertise in backend development and DevSecOps to broaden my technical skill set and take on more end-to-end development challenges.',
        aboutMeSecondContent: 'I’m based in Allgaeu and currently exploring new career opportunities, exclusively in fully remote roles, as I am not looking to relocate.',
        aboutMeThirdContent: 'I have experience with HTML, CSS, JavaScript, and TypeScript, combined with frameworks like Angular. I also work with tools such as Git, REST APIs, and Firebase. Currently, I am deepening my knowledge in backend development and DevSecOps to further advance my journey toward full-stack and security-conscious development.',
        aboutMeFourthContent: 'I am passionate about continuous learning and constantly expanding my knowledge—especially in full-stack architecture and secure, efficient deployment processes in the spirit of DevSecOps. My problem-solving approach combines analytical thinking, creativity, persistence, and a strong team-oriented mindset. I see every challenge as an opportunity to develop a more efficient, secure, and elegant solution.',

        technologies: 'Technologies',
        skillSet: 'Skill Set',
        skillSetMeFirstContent: 'I have experience with various full-stack technologies and am enthusiastic about learning new tools and adapting flexibly. Staying up to date with the fast-moving changes in web development is very important to me.',
        skillSetMeSecondOneContent: 'You need',
        skillSetMeSecondTwoContent: 'another skill?',
        skillSetMeThirdContent: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
        buttonLetsTalk: "Let's Talk",

        growthMindset:'Growth mindset',
        hoverWindowFirstContent: 'I have a special',
        hoverWindowSecondContent: 'interest in learning',
        itSecurity: 'IT Security',
        cloudAutomation: 'Cloud Automation',

        portfolio: 'Portfolio',
        featuredProjects: 'Featured Projects',
        featuredProjectsFirstContent: 'Explore a selection of my work here - Interact with projects to see my skills in action.',

        portfolioOverlayQuestion: 'What is this project about?',
        portfolioOverlayNextProject: 'Next project',

        projectOne:{
          projectDescription:'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        },
        projectTwo:{
          projectDescription:'',
        },
        projectThree:{
          projectDescription:'',
        },

        whatMyColleaguesSayAboutMe: 'What my colleagues say about me',
        colleagueOne: {
          colleagueReference: 'Our project benefited enormously from Simon efficient way of working.',
          colleagueName: 'T. Schulz - Teampartner',
        },
        colleagueTwo: {
          colleagueReference: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
          colleagueName: 'H. Janisch - Teampartner',
        },
        colleagueThree: {
          colleagueReference: "I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.",
          colleagueName: 'A. Fischer - Teampartner',
        },

        contactMe: 'Contact me',
        letsWorkTogether: "Let's work together",
        gotAProblemToSolve: 'Got a problem to solve?',
        contactMeFirstContent: 'I look forward to hearing from you! Please feel free to share which role is currently of interest—whether as a Junior or Mid-Level Frontend, Backend, or Full-Stack Developer, or as a DevSecOps Engineer. With my experience in modern technologies and best practices, I can effectively support your projects and deliver real value—whether through efficient, user-friendly frontends, stable and scalable backend solutions, or secure, automated DevOps processes. Together, we can create powerful, sustainable applications that perfectly meet your requirements.',
        contactMeSecondOneContent: 'Need a Fullstack developer?',
        contactMeSecondTwoContent: 'Let’s talk!',

        whatsYourName: "What's your name?",
        placeholderName:'Your name goes here',
        whatsYourEmail: "What's your email?",
        placeholderEmail: 'youremail@email.com',
        howCanIHelpyou: 'How can I help you?',
        placeholderHelpyou: 'Hello Leonard, I am interested in ...',
        privacyPolicyPartOne: "I've read the",
        privacyPolicyPartTwo: 'privacy policy',
        privacyPolicyPartThree: 'and agree to the processing of my data as outlined.',
        privacyPolicyError: 'Please accept the privacy policy.',
        formButton: 'Say Hello ;)',

        footerOne: 'Web Developer',
        footerTwo: 'Allgaeu Germany',
        footerThree: 'Legal Notice',
    };

    german = {
        aboutMeLink: 'Über mich',
        skillsLink: 'Fähigkeiten',
        projectsLink: 'Projekte',

        frontendDeveloper: 'Fullstack-Entwickler',

        checkMyWorkLink: 'Meine Projekte',
        contactMeLink: 'Schreib mir',

        marqueeFrontendDeveloper: 'Fullstack-Entwickler',
        marqueeBasedInAllgaeu: 'Mit Sitz im Allgaeu',
        marqueeOpenToWork: 'Offen für neue Möglichkeiten',
        marqueeAvailbleForRemoteWork: 'Für Remote-Arbeit verfügbar',

        whoIAm: 'Wer ich bin',
        aboutMe: 'Über mich',
        aboutMeFirstContent: 'Hallo, ich bin Leonard, ein Frontend-Entwickler, der sich aktiv zu einer Full-Stack-Rolle weiterentwickelt. Ich liebe es, komplexe Anforderungen in moderne, leistungsstarke und benutzerfreundliche Anwendungen zu verwandeln. Momentan vertiefe ich mein Wissen in der Backend-Entwicklung und DevSecOps, um mein technisches Skillset zu erweitern und mehr End-to-End-Entwicklungsprojekte übernehmen zu können.',
        aboutMeSecondContent: 'Ich habe mein Sitz im Allgäu und suche neue berufliche Möglichkeiten – ausschließlich im Full-Remote-Modell, da ich nicht umziehen möchte.',
        aboutMeThirdContent: 'Ich besitze Erfahrung in HTML, CSS, JavaScript und TypeScript, kombiniert mit Frameworks wie Angular. Zudem arbeite ich mit Tools wie Git, REST-APIs und Firebase. Aktuell vertiefe ich mein Wissen im Bereich Backend-Entwicklung und DevSecOps, um meinen Weg hin zum Full-Stack- und sicherheitsbewussten Development weiter auszubauen.',
        aboutMeFourthContent: 'Ich lerne leidenschaftlich gerne dazu und erweitere mein Wissen kontinuierlich – besonders in Richtung Full-Stack-Architektur und sicheren und effizienten Deployment-Prozessen im Sinne von DevSecOps. Mein Ansatz beim Problemlösen kombiniert analytisches Denken, Kreativität, Ausdauer und teamorientierte Zusammenarbeit. Jede Herausforderung sehe ich als Chance, eine effizientere, sichere und elegante Lösung zu entwickeln.',

        technologies: 'Technologien',
        skillSet: 'Fähigkeiten',
        skillSetMeFirstContent: 'Ich habe Erfahrung mit verschiedenen Full-Stack-Technologien und zeige meine Begeisterung dafür, neue Technologien zu erlernen und mich flexibel anzupassen. Es ist mir sehr wichtig, mit den schnellen Entwicklungen in der Webentwicklung Schritt zu halten.',
        skillSetMeSecondOneContent: 'Benötigen Sie',
        skillSetMeSecondTwoContent: 'andere Fähigkeiten?',
        skillSetMeThirdContent: 'Kontaktieren Sie mich gerne – ich freue mich, mein Wissen weiter auszubauen.',
        buttonLetsTalk: "Lass uns reden",

        growthMindset:'Wachstums- mentalität',
        hoverWindowFirstContent: 'Ich bin daran interessiert,',
        hoverWindowSecondContent: 'das Folgende noch zu lernen.',
        itSecurity: 'IT-Security',
        cloudAutomation: 'Cloud-Automation',

        portfolio: 'Portfolio',
        featuredProjects: 'Hervorgehobene Projekte',
        featuredProjectsFirstContent: 'Eine Auswahl meiner Arbeiten – hier Projekte ausprobieren und meine Fähigkeiten sehen.',

        portfolioOverlayQuestion: 'Worum geht es in diesem Projekt?',
        portfolioOverlayNextProject: 'Nächstes Projekt',

        projectOne:{
          projectDescription:'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzern und Kategorien zu.',
        },
        projectTwo:{
          projectDescription:'',
        },
        projectThree:{
          projectDescription:'',
        },

        whatMyColleaguesSayAboutMe: 'Was meine Kolleginnen und Kollegen über mich sagen',
        colleagueOne: {
          colleagueReference: '',
          colleagueName: 'T. Schulz - Teampartner',
        },
        colleagueTwo: {
          colleagueReference: '',
          colleagueName: 'H. Janisch - Teampartner',
        },
        colleagueThree: {
          colleagueReference: '',
          colleagueName: 'A. Fischer - Teampartner',
        },

        contactMe: 'Nehmen Sie Kontakt mit mir auf',
        letsWorkTogether: "Lassen Sie uns zusammenarbeiten",
        gotAProblemToSolve: 'Haben Sie ein Problem zu lösen?',
        contactMeFirstContent: 'Ich freue mich darauf, von Ihnen zu hören! Teilen Sie mir gerne mit, welche Rolle für Sie aktuell interessant ist – sei es als Junior oder Mid-Level Frontend-, Backend- oder Fullstack-Developer oder als DevSecOps Engineer. Mit meiner Erfahrung in modernen Technologien und Best Practices kann ich Ihre Projekte gezielt unterstützen und echten Mehrwert schaffen – sei es durch effiziente, benutzerfreundliche Frontends, stabile und skalierbare Backend-Lösungen oder sichere, automatisierte DevOps-Prozesse. Gemeinsam können wir leistungsstarke, nachhaltige Anwendungen entwickeln, die Ihre Anforderungen optimal erfüllen.',
        contactMeSecondOneContent: 'Brauchen Sie einen Fullstack-Entwickler?',
        contactMeSecondTwoContent: 'Lass uns reden!',

        whatsYourName: "Wie heißen Sie?",
        placeholderName:'Name hier einfügen',
        whatsYourEmail: "Wie lautet Ihre E-Mail?",
        placeholderEmail: 'ihreemail@email.com',
        howCanIHelpyou: 'Wie kann ich Ihnen helfen?',
        placeholderHelpyou: 'Hallo Leonard, ich habe Interesse an ...',
        privacyPolicyPartOne: "Ich habe die",
        privacyPolicyPartTwo: 'Datenschutzerklärung',
        privacyPolicyPartThree: 'gelesen und stimme der in ihr beschriebenen Verarbeitung meiner Daten zu.',
        privacyPolicyError: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
        formButton: 'Sag Hallo ;)',

        footerOne: 'Webentwickler',
        footerTwo: 'Allgäu Deutschland',
        footerThree: 'Impressum',
    };

    languageNeutral = {
      projectOne:{
        projectNumber:'01',
        projectName:'Join',
        projectTechnologies: {
          html: '',
          css:'',
          javascript:'',
          firebase:'',
        },
        projectImg:'/assets/img/placeholder.png',
        githubUrl: '#',
        pageUrl: '#',
      },
      projectTwo:{
        projectNumber:'02',
        projectName:'El Pollo Loco',
        projectTechnologies: {
          javascript: '',
          html:'',
          css:'',
        },
        projectImg:'/assets/img/placeholder.png',
        githubUrl: '#',
        pageUrl: '#'
      },
      projectThree:{
        projectNumber:'03',
        projectName:'DA Bubble',
        projectDescription:'',
        projectTechnologies: {
          angular: '',
          typescript: '',
          firebase: '',
        },
        projectImg:'/assets/img/placeholder.png',
        githubUrl: '#',
        pageUrl: '#'
      },

      html:{
        icon: '/assets/img/html-hover.png',
        name: 'HTML'
      },
      css:{
        icon: '/assets/img/css-hover.png',
        name: 'CSS'
      },
      javascript:{
        icon: '/assets/img/javascript-hover.png',
        name: 'JavaScript'
      },
      firebase:{
        icon: '/assets/img/firebase-hover.png',
        name: 'Firebase'
      },
      angular:{
        icon: '/assets/img/angular-hover.png',
        name: 'Angular'
      },
      typescript:{
        icon: '/assets/img/typescript-hover.png',
        name: 'TypeScript'
      },
    }

    setSelect(selectInitials:"DE" | "EN"){
      this.select = selectInitials;
      this.language = selectInitials == "EN" ? 'english' : 'german';
    }

    determineNumberIcons(project: "projectOne" | "projectTwo" | "projectThree" = "projectOne"){
      let iconValues = Object.keys(this.languageNeutral[project].projectTechnologies);
      return {iconValues};
    }
  }