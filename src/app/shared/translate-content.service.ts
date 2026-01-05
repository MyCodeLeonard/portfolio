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
        aboutMeFirstContent: "Hey, I'm Leonard! I am interested in IT and software. I am passionate about coding because I solve problems. I find inspiration through projects, learning, and constant improvement.",
        aboutMeSecondContent: 'I am based in Allgaeu and looking for new opportunities – only full-remote, as I do not want to relocate.',
        aboutMeThirdContent: 'I am open-minded, enjoy learning new technologies, and continuously work on improving and developing my skills further.',
        aboutMeFourthContent: 'With every challenge I continuously learn and strive for the most efficient solution. By applying analytical thinking, creativity, and perseverance, I make steady progress and collaborate effectively with team members.',

        technologies: 'Technologies',
        skillSet: 'Skill Set',
        skillSetMeFirstContent: 'I work with various fullstack technologies and enjoy exploring new approaches. I continuously expand my knowledge, keep learning, and adapt flexibly, striving to stay fully in step with the rapid, ongoing, and ever-changing developments in modern web development.',
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
          projectDescription:'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        },
        projectThree:{
          projectDescription:'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
        },

        whatMyColleaguesSayAboutMe: 'What my colleagues say about me',
        colleagueOne: {
          colleagueReference: 'Leonard impresses with his reliability within the team and his calm, meticulous way of working. Especially when programming, he shows composure and precision, which clearly strengthens the quality of our projects.',
          colleagueName: 'S. Seegets - Teampartner',
        },
        colleagueTwo: {
          colleagueReference: 'Working with Leo was consistently positive. He executed agreed-upon tasks reliably and neatly. His code was always well-structured, and he contributed helpful, creative ideas that noticeably advanced the project.',
          colleagueName: 'D. Kwiatkowski - Teampartner',
        },
        colleagueThree: {
          colleagueReference: "Leonard stands out for his strong commitment and remarkable calmness, even in stressful situations. He has solid technical skills and consistently keeps both complex problems and the overall goal in mind. This enables him to contribute reliably to effective solutions and maintain a positive working atmosphere.",
          colleagueName: 'M. Keller - Teampartner',
        },

        contactMe: 'Contact me',
        letsWorkTogether: "Let's work together",
        gotAProblemToSolve: 'Got a problem to solve?',
        contactMeFirstContent: 'I look forward to hearing from you! Please feel free to share which role is currently of interest—whether as a Junior or Mid-Level Frontend, Backend, or Full-Stack Developer. With my experience in modern technologies and best practices, I can effectively support your projects and deliver real value—whether through efficient, user-friendly frontends, stable and scalable backend solutions. Together, we can create powerful, sustainable applications that perfectly meet your requirements.',
        contactMeSecondOneContent: 'If you need a developer with these skills, ',
        contactMeSecondTwoContent: "let's talk!",

        whatsYourName: "What's your name?",
        placeholderName:'Your name goes here',
        yourNameError: 'Please enter your name.',
        whatsYourEmail: "What's your email?",
        placeholderEmail: 'youremail@email.com',
        yourEmailFirstError: 'Please enter your e-mail.',
        yourEmailSecondError: 'Your input is not a valid e-mail.',
        howCanIHelpyou: 'How can I help you?',
        placeholderHelpyou: 'Hello Leonard, I am interested in ...',
        helpyouFirstError: 'Please enter a message.',
        helpyouSecondError: 'Your message must be at least 20 characters long.',
        privacyPolicyPartOne: "I've read the",
        privacyPolicyPartTwo: 'privacy policy',
        privacyPolicyPartThree: 'and agree to the processing of my data as outlined.',
        privacyPolicyError: 'Please accept the privacy policy.',
        formButton: 'Say Hello ;)',
        senderFeedbackPartOne: 'Thank you for your',
        senderFeedbackPartTwo: 'contact request.',

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
        aboutMeFirstContent: 'Hey, ich bin Leonard! Ich interessiere mich für IT und Software. Programmieren begeistert mich, weil ich Probleme löse. Inspiration finde ich durch Projekte, Lernen und ständige Verbesserung.',
        aboutMeSecondContent: 'Ich bin im Allgäu ansässig und suche neue Chancen – ausschließlich im Full-Remote-Modell, da ich nicht umziehen möchte.',
        aboutMeThirdContent: 'Ich bin aufgeschlossen, lerne gerne neue Technologien und arbeite kontinuierlich daran, meine Fähigkeiten zu verbessern.',
        aboutMeFourthContent: 'Bei jeder Herausforderung lerne ich dazu und strebe nach der effizientesten Lösung. Analytisches Denken, Kreativität und Ausdauer helfen mir dabei, konsequent Fortschritte zu erzielen und effektiv mit anderen zusammenzuarbeiten.',

        technologies: 'Technologien',
        skillSet: 'Fähigkeiten',
        skillSetMeFirstContent: 'Ich arbeite mit verschiedenen Fullstack-Technologien und probiere gern neue Ansätze aus. Dabei lerne ich stetig dazu, erweitere mein Wissen kontinuierlich und passe mich flexibel an, um mit den schnellen Entwicklungen in der Webentwicklung Schritt zu halten.',
        skillSetMeSecondOneContent: 'Fehlt Ihnen noch',
        skillSetMeSecondTwoContent: 'ein Skill?',
        skillSetMeThirdContent: 'Kontaktieren Sie mich gerne – ich freue mich, mein Wissen weiter auszubauen.',
        buttonLetsTalk: "Lass uns reden",

        growthMindset:'Wachstums- mentalität',
        hoverWindowFirstContent: 'Ich bin daran interessiert,',
        hoverWindowSecondContent: 'das Folgende noch zu lernen.',
        itSecurity: 'IT-Security',
        cloudAutomation: 'Cloud-Automation',

        portfolio: 'Portfolio',
        featuredProjects: 'Top-Projekte',
        featuredProjectsFirstContent: 'Eine Auswahl meiner Arbeiten – hier Projekte ausprobieren und meine Fähigkeiten sehen.',

        portfolioOverlayQuestion: 'Worum geht es in diesem Projekt?',
        portfolioOverlayNextProject: 'Nächstes Projekt',

        projectOne:{
          projectDescription:'Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzern und Kategorien zu.',
        },
        projectTwo:{
          projectDescription:'Spring-, Lauf- und Wurfspiel mit objektorientiertem Ansatz. Hilf Pepe, Münzen und Tabasco-Salsa gegen die verrückte Henne zu finden.',
        },
        projectThree:{
          projectDescription:'Dies ist eine Slack-Klon-App. Sie verbessert die Zusammenarbeit im Team und Kommunikation dank intuitiver Oberfläche, Echtzeit-Messaging und stabiler Kanalstruktur.',
        },

        whatMyColleaguesSayAboutMe: 'Was meine Kolleginnen und Kollegen über mich sagen',
        colleagueOne: {
          colleagueReference: 'Leonard überzeugt durch seine Zuverlässigkeit im Team und seine besonnene, sorgfältige Arbeitsweise. Besonders beim Programmieren zeigt er Ruhe und Präzision, was die Qualität unserer Projekte deutlich stärkt.',
          colleagueName: 'S. Seegets - Teampartner',
        },
        colleagueTwo: {
          colleagueReference: 'Die Zusammenarbeit mit Leo war durchweg positiv. Abgesprochene Aufgaben setzte er zuverlässig und sauber um. Sein Code war stets klar strukturiert, und er brachte hilfreiche, kreative Ideen ein, die das Projekt spürbar vorangebracht haben.',
          colleagueName: 'D. Kwiatkowski - Teampartner',
        },
        colleagueThree: {
          colleagueReference: 'Leonard überzeugt durch sein hohes Engagement und seine bemerkenswerte Ruhe, auch in stressigen Situationen. Er verfügt über solide technische Kompetenz und behält selbst bei komplexeren Problemen stets den Überblick sowie das gemeinsame Ziel im Blick. Dadurch trägt er zuverlässig zu guten Lösungen und einer angenehmen Arbeitsatmosphäre bei.',
          colleagueName: 'M. Keller - Teampartner',
        },

        contactMe: 'Kontaktieren Sie mich',
        letsWorkTogether: "Gemeinsam schaffen",
        gotAProblemToSolve: 'Ein Problem zu lösen?',
        contactMeFirstContent: 'Ich freue mich auf Ihre Rückmeldung! Lassen Sie mich wissen, welche Rolle für Sie aktuell von Interesse ist – als Junior oder Mid-Level Frontend-, Backend- oder Fullstack-Developer. Mit meiner Erfahrung in modernen Technologien kann ich Ihre Projekte gezielt unterstützen und echten Mehrwert schaffen – sei es durch effiziente, benutzerfreundliche Frontends oder stabile, skalierbare Backend-Lösungen. Gemeinsam können wir leistungsstarke, nachhaltige Anwendungen entwickeln, die Ihre Anforderungen erfüllen.',
        contactMeSecondOneContent: 'Sollten Sie einen Entwickler mit diesen Fähigkeiten brauchen,',
        contactMeSecondTwoContent: 'lass Sie uns reden!',

        whatsYourName: "Wie heißen Sie?",
        placeholderName:'Name hier einfügen',
        yourNameError: 'Geben Sie bitte Ihren Namen ein',
        whatsYourEmail: "Wie lautet Ihre E-Mail?",
        placeholderEmail: 'ihreemail@email.com',
        yourEmailFirstError: 'Geben Sie bitte Ihre E-Mail ein.',
        yourEmailSecondError: 'Your input is not a valid e-mail.',
        howCanIHelpyou: 'Wie kann ich Ihnen helfen?',
        placeholderHelpyou: 'Hallo Leonard, ich habe Interesse an ...',
        helpyouFirstError: 'Bitte geben Sie eine Nachricht ein.',
        helpyouSecondError: 'Ihre Nachricht muss min. 20 Zeichen enthalten.',
        privacyPolicyPartOne: "Ich habe die",
        privacyPolicyPartTwo: 'Datenschutzerklärung',
        privacyPolicyPartThree: 'gelesen und stimme der in ihr beschriebenen Verarbeitung meiner Daten zu.',
        privacyPolicyError: 'Bitte akzeptieren Sie die Datenschutzerklärung.',
        formButton: 'Sag Hallo ;)',
        senderFeedbackPartOne: 'Vielen Dank für',
        senderFeedbackPartTwo: 'Ihre Kontaktanfrage.',

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
        projectImg:'/assets/img/join-overlay.png',
        githubUrl: 'https://github.com/MyCodeLeonard/portfolio.join',
        pageUrl: '#' //Seiten-URL einfügen, sobald sie bekannt ist.
      },
      projectTwo:{
        projectNumber:'02',
        projectName:'El Pollo Loco',
        projectTechnologies: {
          javascript: '',
          html:'',
          css:'',
        },
        projectImg:'/assets/img/overlay-el-pollo-loco.png',
        githubUrl: 'https://github.com/MyCodeLeonard/portfolio.el_pollo_loco',
        pageUrl: '#' //Seiten-URL einfügen, sobald sie bekannt ist.
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
        githubUrl: 'https://github.com/MyCodeLeonard/portfolio.da_bubble',
        pageUrl: '#' //Seiten-URL einfügen, sobald sie bekannt ist.
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