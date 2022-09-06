import { Feature } from "../../components/HomeFeatures/HomeFeature";
import chatLogo from "../../assets/img/icon-chat.png";
import moneyLogo from "../../assets/img/icon-money.png";
import securityLogo from "../../assets/img/icon-security.png";

export const homeFeaturesList: Feature[] = [
  {
    logo: chatLogo,
    title: "You are our #1 priority",
    description:
      " Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    logo: moneyLogo,
    title: "More savings means higher rates",
    description:
      "    The more you save with us, the higher your interest rate will be!",
  },
  {
    logo: securityLogo,
    title: "Security you can trust",
    description:
      "  We use top of the line encryption to make sure your data and money is always safe.",
  },
];
