import {
  PropsTypeInformation,
  PropsTypeLogo,
  PropsTypeMenu,
} from "@/interfaces";
import {
  FaDiscord,
  FaFacebookF,
  FaLinkedin,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

import AWS_User_group from "@/assets/Community/AWS_User_group.png"
import CNCG_logo from "@/assets/Community/CNCG_Logo_Transparent-removebg-preview.png"

import { CHAOSS_AFRICA_LOGO_opt, Culysoft, GitHub_Logo_White } from "@/assets";
import {
  CDALogo,
  CDA_Girls,
  DL_logo_2018_color,
  MozdevzLogo,
  logoWTM,
} from "@/assets";
import { MrAguinaldo, PedroFracnoImg, WaltDeJesusImg } from "@/assets";

export const menu: PropsTypeMenu[] = [
  {
    id: 1,
    title: "Evento",
    target: "#event", // ID do componente alvo,
    url: "",
  },
  {
    id: 2,
    title: "Agenda",
    target: "#schedule", // ID do componente alvo
    url: "",
  },
  {
    id: 3,
    title: "Informações",
    target: "#information", // ID do componente alvo
    url: "",
  },
  {
    id: 4,
    title: "Patrocinadores",
    target: "#partner", // ID do componente alvo
    url: "",
  },
  {
    id: 5,
    title: "Contacto",
    target: "#contact", // ID do componente alvo
    url: "",
  },
  /* {
    id: 6,
    title: "Hacktoberfest",
    target: "",
    url: "https://hacktoberfest.com/",
  } */
];

export const informations: PropsTypeInformation[] = [
  {
    id: 0,
    title: "Comunicação",
    description:
      "Toda comunicação e últimas notificações sobre o evento serão anunciadas no nosso servidor do discord e nas nossas redes sociais. Por favor, use estes canais para qualquer informação.",
  },
  {
    id: 1,
    title: "Formato do evento",
    description:
      "A primeira edição do AOSFest 2023 acontecerá online e em 4 dias. Porém, teremos um Hackathon que será organizado pessoalmente. Por favor, note que mera participação no AOSFest não é um passo directo para participar no hackathon. As inscrições para o Hackathon e para o AOSFest são feitas separadamente. Por favor, consulte a agenda do evento.",
  },
  {
    id: 2,
    title: "O que é um Open-source hackathon?",
    description:
      "Um open-source hackathon é uma forma empolgante e produtiva de reunir desenvolvedores, designers e entusiastas de código aberto para trabalhar juntos na criação e aprimoramento de software de código aberto em um ambiente de colaboração e competição amigável. É uma maneira eficaz de contribuir para projetos de código aberto e aprender com outros profissionais da área.",
  },
  {
    id: 3,
    title: "O que é o hacktoberfest?",
    description:
      "O Hacktoberfest é um evento anual de desenvolvimento de software de código aberto patrocinado pela DigitalOcean, GitHub e outras empresas, que incentiva programadores de todo o mundo a contribuir para projetos de código aberto durante o mês de outubro. Os participantes podem ganhar camisetas e outros brindes ao enviar um número mínimo de solicitações de pull requests (PRs) válidas em repositórios públicos hospedados no GitHub, promovendo assim a colaboração na comunidade de código aberto e o desenvolvimento de habilidades de programação.",
  },
];

export const sponsors: PropsTypeLogo[] = [
  {
    id: 0,
    title: "Platinum",
    src: CHAOSS_AFRICA_LOGO_opt,
    alt: "ChaossAfricaLogo",
    className: "ChaossAfricaLogo",
    href: "https://twitter.com/chaoss_africa",
  },
  {
    id: 1,
    title: "Silver",
    src: Culysoft,
    alt: "Culysoft",
    className: "silver",
    href: "https://culysoft.com/",
  },
  {
    id: 2,
    title: "in-kind sponsors",
    src: GitHub_Logo_White,
    alt: "GitHub_Logo_White",
    className: "in__kind__sponsors",
    href: "https://github.com/",
  },
];

export const communityLogos = [
  {
    id: 3,
    src: DL_logo_2018_color,
    alt: "DL_logo_2018_color",
    href: "https://designliquido.com.br/",
  },
  {
    id: 1,
    src: MozdevzLogo,
    alt: "MozdevzLogo",
    href: "https://www.mozdevz.org/",
  },
  {
    id: 4,
    src: logoWTM,
    alt: "logoWTM",
    className: "logoWTM",
    href: "https://www.linkedin.com/company/wtm-luanda/",
  },
  {
    id: 5,
    src: CDALogo,
    alt: "CDALogo",
    className: "CDAlogo",
    href: "https://www.facebook.com/communitydevangola?mibextid=b06tZ0",
  },
  {
    id: 6,
    src: CDA_Girls,
    alt: "CDA_Girls",
    className: "CDA_Girls",
    href: "https://www.linkedin.com/company/cda-girls/",
  },
  {id: 7, src: AWS_User_group, alt: "AWS_User_group", className: "AWS_User_group", href: "https://www.linkedin.com/company/aws-user-group-angola/"},
  {id: 8, src: CNCG_logo, alt: "CNCG_logo", className: "CNCG_logo", href: "https://community.cncf.io/cloud-native-luanda/"}
];

export const CONTACTS = [
  { id: 0, title: "Contacto", phone: "+244 936 853 728 +244 935 401 862" },
  { id: 1, title: "Email", phone: "info@aosc.social" },
];

export const SOCIALMEDIA = [
  {
    id: 0,
    Icon: FaFacebookF,
    className: "facebook",
    href: "https://web.facebook.com/aoscangola",
  },
  {
    id: 1,
    Icon: FaLinkedin,
    className: "linkedin",
    href: "https://www.linkedin.com/company/angola-open-source-community/",
  },
  {
    id: 2,
    Icon: FaDiscord,
    className: "discord",
    href: "https://discord.com/invite/tuUDNdRzvz",
  },
  {
    id: 3,
    Icon: FaYoutube,
    className: "youtube",
    href: "https://www.youtube.com/@angolaosc",
  },
  {
    id: 4,
    Icon: FaTelegramPlane,
    className: "telegram",
    href: "https://t.me/angolasc",
  },
];

export const CONTRIBUTORS = [
  {
    id: 0,
    name: "Pedro Franco",
    Avatar: PedroFracnoImg,
    speciality: "Software Developer",
    href: "https://www.linkedin.com/in/pedro-franco-58a460217/",
  },
  {
    id: 1,
    name: "Walt De Jesus",
    Avatar: WaltDeJesusImg,
    speciality: "UX/UI Designer",
    href: "https://www.linkedin.com/in/waltdejesus/",
    linkYoutube: "https://www.youtube.com/channel/UC3cB8IzGweoVyScJhhGjSJA",
  },
  {
    id: 2,
    name: "Mr aguinaldo",
    Avatar: MrAguinaldo,
    speciality: "Software Developer",
    href: "https://www.linkedin.com/in/mr-aguinaldo-3a076728a/?trk=contact-info",
  },
];

export const BUTTONS = [
  {
    id: 0,
    content: "Inscrever-se para o evento",
    url: "https://events.mlh.io/events/10184-angola-open-source-fest-hacktoberfest-edition",
  },
  {
    id: 1,
    content: "Inscrever-se para o Hackathon",
    url: "https://unstop.com/o/nRNxQZ4?lb=t91qM2wi",
    className: "hackathon",
  },
];
