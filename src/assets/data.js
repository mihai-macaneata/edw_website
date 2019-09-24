export default {
  //Header Section
  menu_labels: [
    {
      aboutUs: "About Us",
      clientWork: "Client Work",
      tech: "Technologies",
      jobs: "Jobs",
      contact: "Contact"
    }
  ],
  header_text: [
    {
      title: "Eau de Web",
      description: "Romanian software company specialised in Web Development"
    }
  ],
  header_btn: {
    btn: "Get to know us"
  },
  //Header Section End

  // About Us Section
  aboutus_title: { title: "About Eau de Web" },
  aboutus_txt: [
    {
      slogan: `<p class="title_edw">Eau de Web</p> is a Romanian software company specialised in Web Development. We’re in business in this formula since 2006,
       but most of us have worked together as a team since 1999.`,
      nameCard_title: "The name",
      nameCard_descript:
        "Eau de Web is a <strong>paraphrase of eau de parfum</strong>, meaning a fragrance of Web, close to its essence.",
      manifestoCard_title: "Manifesto",
      manifestoCard_descript: `The drives of our activities are the <strong>open source culture</strong> and the use of open standards due to the benefits of code reuse,
        openness in participating in projects worldwide, peer review and contributions from a wide community of developers.`
    }
  ],
  aboutus_btn: [
    {
      contactus_btn: `Contact Us`,
      jobs_btn: `Open job positions`
    }
  ],
  //About Us Section End

  // Client Work Section
  clientwork_title: {
    title: "Client Work"
  },
  clientwork_txt: [
    {
      work_photo: require("@/assets/img/ec_logo.svg"),
      work_title: "The European Commission",
      work_description: `Under the contract “Publishing, visualising, linking open data, hosting and broadcasting – SMART 2012/0103”,
       Eau de Web has developed <a href="https://digital-agenda-data.eu/" class="edw_links" target="_blank">digital-agenda-data.eu</a>, an interactive visualisation tool for linked semantic statistical data expressed as
       <a href="http://www.w3.org/TR/vocab-data-cube/" class="edw_links" target="_blank">RDF data cubes</a>.`,
      work_btn: `<a href="http://ec.europa.eu/" target="_blank" class="workone_btn">Visit website</a>`
    },
    {
      work_photo: require("@/assets/img/eea.png"),
      work_title: "The EEA",
      work_description: `The EEA is the largest European Commission agency, which aims to support sustainable development
      and to help achieve significant and measurable improvement in Europe's environment through the provision of timely, targeted, relevant and reliable info.
      <br/><br/>
      Since 2010 we are in charge of the framework contracts for <a href="http://www.zope.org/" class="edw_links" target="_blank">Zope</a>/<a href="https://plone.org/" class="edw_links" target="_blank">Plone</a> web development,
      including EEA’s <a href="http://www.eea.europa.eu/" class="edw_links" target="_blank">main website</a>,
      the <a href="https://www.eionet.europa.eu/" class="edw_links" target="_blank">European Environment Information and Observation Network</a>
      and <a href="http://eunis.eea.europa.eu/" class="edw_links" target="_blank">the European Nature Information System</a>.`,
      work_btn: `<a href="http://www.eea.europa.eu/" target="_blank" class="workone_btn">Visit website</a>`
    },
    {
      work_photo: require("@/assets/img/enisa.png"),
      work_title: "Enisa",
      work_description: `Under the contract “Publishing, visualising, linking open data, hosting and broadcasting – SMART 2012/0103”,
       Eau de Web has developed <a href="https://digital-agenda-data.eu/" class="edw_links">digital-agenda-data.eu</a>, an interactive visualisation tool for linked semantic statistical data expressed as
       <a href="#" class="edw_links">RDF data cubes</a>.`,
      work_btn: `<a href="http://ec.europa.eu/" target="_blank" class="workone_btn">Visit website</a>`
    }
  ],
  //Client Work Section End

  //Technology Used Section
  techused_title: {
    title: "Technologies Used"
  },
  techused_txtone: [
    {
      w3c: `Our products and services respect modern standards for accessibility, syndication and Web services.
      <br/><br/><strong>Most of our work is open source and that’s the way we like it.</strong>`,
      events: `We attend <strong>trainings and conferences</strong> all the time and we keep ourselves informed
      about new technologies, solutions and standards. <br/><br/>This allows us to use <strong>emerging technology</strong>
      when developing applications and also suggest the suitable solutions to our clients when we start new ones.`
    }
  ],
  techused_txttwo: [
    {
      semantic_web: `Web applications’ interoperability is a big component of our work,
    so we’ve been increasingly involved into the Semantic Web principles and tools,
    working with <a href="http://ec.europa.eu/environment/seis/" class="edw_links">SEIS</a> and
    <a href="http://en.wikipedia.org/wiki/Open_data" class="edw_links">Open Data</a> guidelines and implementations.`,
      semantic_webtwo: `Web applications’ interoperability is a big component of our work,
    so we’ve been increasingly involved into the Semantic Web principles and tools,
    working with <a href="http://ec.europa.eu/environment/seis/" class="edw_links">SEIS</a> and
    <a href="http://en.wikipedia.org/wiki/Open_data" class="edw_links">Open Data</a> guidelines and implementations.`
    }
  ],
  techused_txtother: [
    {
      text_one: `Over time we learned to <em>work profesionally</em>.
      All code is under version control
      (<a href="http://taskman.eionet.europa.eu/projects/naaya/repository/show/trunk/eggs" class="edw_links">Eionet’s svn repository</a>,
       <a href="https://github.com/eaudeweb" class="edw_links">our github account</a>),
      we write <em>unit tests</em>, any important change goes through <em>peer code review</em>,
      and we <em>pair program</em> when it makes sense. Deployment to staging and production is <em>automated</em>,
      and we have specialized people for testing and system administration.
      <br/><br/>We also have close, long-term relationships with our <a href="#client_work" class="edw_links">clients</a>,
      and we work in small iterations with quick feedback. `
    }
  ],
  techused_plone: [
    {
      plone_title: "Plone Advocacy",
      plone_text: `Eau de Web continues to demonstrate a long-term commitment to share
      and contribute the knowledge, software and resources to benefit others through <strong>Plone’s open source community</strong>.
      <br/><br/>Some of our efforts to evolve and promote Plone include: `,
      plone_linkone: `<a href="http://plone.org/foundation/members" target="_blank" class="edw_links">Plone Foundation member</a>`,
      plone_linktwo: `<a href="https://github.com/plone" target="_blank" class="edw_links">Plone Core contributors</a>`,
      plone_linkthree: `<a href="https://github.com/collective" target="_blank" class="edw_links">Plone Collective contributors</a>`,
      plone_linkfour: `<a href="http://ploneconf.org/" target="_blank" class="edw_links">Plone Conference and Sprints attendees</a>`,
      plone_linkfive: `<a href="http://plone.ro/" target="_blank" class="edw_links">Plone User’s Group Romania founder and coordinator</a>`
    }
  ],
  //Technology Used Section End

  //Jobs Section
  jobs_title: {
    title: "Jobs"
  },
  jobs_txt: [
    {
      job_title: "Frontend Developer",
      job_description: `We are looking for a Frontend Developer,
  with experience in JavaScript, able to work with, and/or learn, React, Angular, Meteor or similar frameworks.`,
      job_btn: `<a href="#" class="jobs_btn">View job</a>`
    },
    {
      job_title: "Senior Python web developer",
      job_description: `We are looking for a senior web developer with broad experience, from databases to in-browser apps.`,
      job_btn: `<a href="#" class="jobs_btn">View job</a>`
    },
    {
      job_title: "Senior Drupal developer",
      job_description: `We are looking for a senior PHP web developer experienced in Drupal 7
  for at least one year or two completed projects.`,
      job_btn: `<a href="#" class="jobs_btn">View job</a>`
    }
  ],
  //Jobs Section Open_data

  //Contact Us Section
  contactus_title: {
    title: "Contact Us"
  },
  contactus_txt: [
    {
      contact_text: `Our <em>office</em> is located near Arcul de Triumf, in a quiet neighborhood and some of us even bike to work.
      <br/><br/> We use any excuse to organize a social evening with poker and board games.
      The company pays for gym membership and the odd wine party. We go to conferences and regularly order technical books.`
    },
    {
      address_title: "Address",
      address_description: `Str. Maior Gheorghe Șonțu, No. 8, et. 1, 011448, Bucharest, Romania`,
      phone_title: "Phone/Fax",
      phone_description: `+40 21 222 1522`,
      email_title: "Email us",
      email_description: `office@eaudeweb.ro`
    }
  ],
  //Contact Us Section End

  //Social Media Section
  socialmedia_title: {
    title: "Follow us on our social media"
  },
  //Social Media Section End

  //Footer Section
  footer_left: [
    {
      title: "Eau de Web",
      linksone_footer: `<a href="#about_us">About us</a> / <a href="#client_work">Client work</a> /
      <a href="#tech_used">Tehnologies</a> / <a href="#jobs">Jobs</a> / <a href="#contact_us">Contact Us</a>`
    }
  ],
  footer_right: [
    {
      linkstwo_footer: `<a href="#">GDPR</a> / <a href="#">Environmental Policy</a> /
      <a href="#">Terms of Use</a> / <a href="#">About EDW</a>`,
      text_footer: "Copyright © 2019 Eau de Web. All rights reserved."
    }
  ]
  //Footer Section End
};
