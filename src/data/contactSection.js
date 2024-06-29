export const contactSection = {
  inputs: [
    {
      name: "username",
      type: "text",
      placeholder: "Ditt namn",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "E-postadress",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      placeholder: "Telefonnummer",
      required: true,
    },
    {
      name: "subject",
      type: "text",
      placeholder: "Ämne",
      required: true,
    },
    {
      name: "message",
      placeholder: "Skriv meddelande",
      required: true,
    },
  ],
  title: "Offices near you",
  contacts: [
    {
      id: 1,
      name: "Austin",
      address: "22 Texas West Hills",
      email: "needhelp@linoor.com",
      phone: "666 888 000",
    },
    {
      id: 2,
      name: "Boston",
      address: "5 Federal Street Boston",
      email: "needhelp@linoor.com",
      phone: "666 888 000",
    },
    {
      id: 3,
      name: "New york",
      address: "8th Broklyn New York",
      email: "needhelp@linoor.com",
      phone: "666 888 000",
    },
    {
      id: 4,
      name: "baltimore",
      address: "3 Lombabr 50 Baltimore",
      email: "needhelp@linoor.com",
      phone: "666 888 000",
    },
  ],
};

export const contactSectionTwo = {
  title: "Skriv vilket meddelande som helst till oss",
  text: "Behöver du hjälp med el eller har frågor om våra tjänster? Skriv gärna ditt meddelande nedan, och vi ser fram emot att bistå dig med expertis inom elteknik och energilösningar!",
  socials: ["fab fa-facebook", "fab fa-instagram"],
};

export const contactInfoTwo = [
  {
    id: 1,
    icon: "fa fa-map-marker-alt",
    text: "Box, 35 125 21 Älvsjö",
  },
  {
    id: 2,
    icon: "fa fa-envelope",
    text: "info@linoor.se",
    email: true,
  },
  {
    id: 3,
    icon: "fa fa-phone",
    text: "073 895 51 66",
    phone: true,
  },
];
