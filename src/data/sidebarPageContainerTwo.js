import image from "@/images/resource/news-7.jpg";

export const blogPage = {
  title: "Delivering the best digital marketing",
  text: "There are many variations of passages of available but majority have alteration in some by inject humour or random words. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
  videoId: "Get7rqXYrbQ",
  newsData: [
    {
      id: 1,
      image: "news-7.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      title: "basic rules of running web agency business",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
    {
      id: 2,
      image: "news-8.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      showVideo: true,
      title: "Delivering the best digital marketing",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
    {
      id: 3,
      image: "news-9.jpg",
      date: "20 Mar",
      admin: "Admin",
      comments: 2,
      title: "Introducing the latest linoor features",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    },
  ],
};

export const sidebar = {
  categories: [
    {
      id: 1,
      title: "Business",
      href: "/blog",
    },
    {
      id: 2,
      title: "Introductions",
      href: "/blog",
    },
    {
      id: 3,
      title: "One Page Template",
      href: "/blog",
    },
    {
      id: 4,
      title: "Parallax Effects",
      href: "/blog",
    },
    {
      id: 5,
      title: "New Technologies",
      href: "/blog",
    },
    {
      id: 6,
      title: "Video Backgrounds",
      href: "/blog",
    },
  ],
  tags: [
    {
      id: 1,
      title: "Akut elsäkerhet",
      href: "#",
    },
    {
      id: 2,
      title: "Elektriska problem",
      href: "#",
    },
    {
      id: 3,
      title: "Profressionell elservic",
      href: "#",
    },
    {
      id: 4,
      title: "Elsäkerhetsråd",
      href: "#",
    },
    {
      id: 5,
      title: "Hushållselektrik",
      href: "#",
    },
    {
      id: 6,
      title: "Säkerhetsutrustning",
      href: "#",
    },
    {
      id: 7,
      title: "Förberedelse vid elnödsfall.",
      href: "#",
    },
  ],
  comments: [
    {
      id: 1,
      text: "A Wordpress Commenter on Launch New Mobile App",
    },
    {
      id: 2,
      text: "John Doe on Template: \n Comments",
    },
    {
      id: 3,
      text: "A Wordpress Commenter on Launch New Mobile App",
    },
    {
      id: 4,
      text: "John Doe on Template: \n Comments",
    },
  ],
  posts: [
    {
      id: 1,
      title: "EXPERIENCES THAT CONNECT WITH PEOPLE",
      image: "news-thumb-1.jpg",
    },
    {
      id: 2,
      title: "WE BUILD AND ACTIVATE BRANDS INSIGHT",
      image: "news-thumb-2.jpg",
    },
    {
      id: 3,
      title: "A DEEP UNDERSTANDING OF OUR AUDIENCE",
      image: "news-thumb-3.jpg",
    },
  ],
};

export const blogDetails = {
  image,
  date: "10 Jan",
  admin: "Admin",
  title: "Bästa tipsen för akut elservice",
  text1:
    "Att ställas inför akuta elproblem kan vara överväldigande, men med rätt kunskap och förberedelse kan du hantera situationen på ett säkert och effektivt sätt.När olyckan är framme är det första steget att prioritera säkerheten. Innan du försöker lösa problemet själv, se till att du och din omgivning är säkra. Stäng av strömmen om det är möjligt och använd alltid nödvändig skyddsutrustning.En grundläggande förståelse för ditt elsystem är avgörande. Vet var huvudströmbrytaren finns och hur du stänger av strömmen till olika delar av hemmet. Detta kan hjälpa dig att isolera och identifiera problemet mer effektivt.Vid akuta elproblem är det alltid bäst att konsultera en professionell elektriker. Deras erfarenhet och expertis gör det möjligt för dem att snabbt och säkert diagnostisera och åtgärda problemet.",
  text2:
    "Tveka inte att kontakta professionell hjälp om du känner dig osäker eller om problemet verkar vara komplicerat.För att vara väl förberedd är det också en bra idé att hålla sig informerad om de vanligaste elproblemen och deras potentiella lösningar. Detta kan hjälpa dig att agera snabbare och förhindra ytterligare skador.För dem som är villiga att ta itu med mindre elproblem själva, se till att ha nödvändiga verktyg till hands. Isolerade skruvmejslar och testare är grundläggande verktyg som kan vara till stor hjälp vid enklare reparationer.Att vara väl informerad och förberedd inför akuta elservicebehov är nyckeln till att hantera situationen smidigt och säkert. Kom dock alltid ihåg att när det gäller el är säkerheten det främsta bekymret, och om du är osäker bör du alltid söka professionell hjälp.",
  tags: ["Business", "Agency", "Technology"],
  category: ["Business", "Agency"],
  posts: [
    "A DEEP UNDERSTANDING OF OUR AUDIENCE",
    "EXPERIENCES THAT CONNECT WITH PEOPLE",
  ],
  comments: [
    {
      id: 1,
      image: "author-7.jpg",
      name: "Jessica Brown",
      date: "20 May, 2020 . 4:00 pm",
      text: "Lorem Ipsum is simply dummy free text of the available printing and typesetting been the industry standard dummy text ever sincer condimentum purus.",
    },
    {
      id: 2,
      image: "author-8.jpg",
      name: "David Martin",
      date: "20 May, 2020 . 4:00 pm",
      text: "Lorem Ipsum is simply dummy free text of the available printing and typesetting been the industry standard dummy text ever sincer condimentum purus.",
    },
  ],
  inputs: [
    {
      name: "username",
      placeholder: "Your Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      placeholder: "Email Address",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      placeholder: "Phone Number",
      type: "text",
      required: true,
    },
    {
      name: "subject",
      placeholder: "Subject",
      type: "text",
      required: true,
    },
    {
      name: "message",
      placeholder: "Your Comments",
      required: true,
    },
  ],
};
