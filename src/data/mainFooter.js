import demoBg from "@/images/background/footer-bg-2.jpg";
import logo from "@/images/footer-logo.png";
import logo3 from "@/images/logo-3.png";
import logo6 from "@/images/update-01-10-2021/logo-6-light.png";
import logo7 from "@/images/update-01-10-2021/logo-7-light.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5-light.png";

export const footer = { year: new Date().getFullYear(), author: "Srđan." };

export const mainFooterDemo = {
  ...footer,
  demoBg,
  title: "Create Stunning Website Now!",
  tagline: "Purchase linoor Template Now",
  templateLink: "#",
};

export const mainFooter = {
  logo,
  logo3,
  logo5,
  logo6,
  logo7,
  logo8,
  bg: demoBg,
  title: "Let’s Start Working Together",
  about:
    "There are many variation of passages of lorem ipsum available, but the majority suffered.",
  about2: "The new corporate agency theme",
  about3:
    "We’ve grown our business on a set of \n three building blocks. Enjoy the \n people you work.",
  text: "Welcome to our web design agency. Lorem ipsum simply free text dolor sited amet cons cing elit.",
  address: "Box, 35 125 21 Älvsjö",
  address3: "66 Mark Street, New Town DC 5752, Lo New York",
  address2:
    "214 Gold Street Round Road. 66 \n Code New York, United States \n of America",
  phone: "073 895 51 66",
  phone2: "073 895 51 66",
  email: "info@linoor.se",
  textBottom:
    "Registrera dig för våra senaste nyheter och artiklar. Vi kommer inte att ge dig skräppost.",
  subscribeText:
    "Register and get notified about the news & updates before it gets too late.",
  socials: [
    {
      id: 1,
      href: "#",
      icon: "fab fa-facebook-square",
    },

    {
      id: 3,
      href: "#",
      icon: "fab fa-instagram",
    },
  ],
  links: [
    {
      id: 1,
      href: "/om-oss",
      title: "Om oss",
    },
    {
      id: 2,
      href: "/tjanster",
      title: "Tjänster",
    },
    {
      id: 3,
      href: "/projekt",
      title: "Projekt",
    },
    {
      id: 4,
      href: "/blogg",
      title: "Blogg",
    },
    {
      id: 5,
      href: "/kontakt",
      title: "Kontakt",
    },

    // {
    //  id: 7,
    //   href: "/faqs",
    //    title: "Integritetspolicy",
    //   },
  ],
  ...footer,
  newses: [
    {
      id: 1,
      image: "footer-1-1.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
    {
      id: 2,
      image: "footer-1-2.png",
      date: "20 Nov, 2020",
      title: "The best digital services for the startups",
    },
  ],
};
