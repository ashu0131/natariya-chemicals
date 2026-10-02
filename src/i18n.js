import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: { home:"Home", about:"About Us", products:"Products", gallery:"Gallery", contact:"Contact Us", admin:"Admin" },
      common: { explore:"Explore Products", contact:"Contact Us", learn:"Learn More", viewAll:"View All Products", send:"Send Message", read:"Read More" },
     home: {
  heroTitle: "Powering Agriculture Through Better Chemistry",

  heroText:
    "High-quality agrochemical products for healthier crops, higher yields, and a greener future.",

  badge: "5+ Years of Excellence",

  introTitle: "Trusted Agricultural & Chemical Solutions",

  introText:
    "Natariya Chemicals Industries Pvt. Ltd. is committed to delivering dependable agricultural solutions that combine quality, innovation and responsible chemistry.",

  productsTitle: "Our Premium Products",

  productsText:
    "A growing range of agrochemical solutions for healthy and productive crops.",

  whyTitle: "Why Choose Us?",

  reasons: [
    "Quality Products",
    "Farmer Focused",
    "Technical Support",
    "Responsible Innovation"
  ],

  reasonTexts: [
    "Reliable quality standards",
    "Solutions designed around real farm needs",
    "Practical guidance for customers",
    "Continuous improvement with responsibility"
  ],

  promiseEyebrow: "Our Promise",

  productRange: "Product Range",

  noFeaturedProducts: "No featured products available.",

  partnerEyebrow: "Partner With Us",

  commitmentEyebrow: "Our Commitment",

  yearsExperience: "Years of Experience",

  promiseItems: [
    "Quality Products",
    "Farmer-Focused Solutions",
    "Technical Support",
    "Responsible Innovation"
  ],

  promiseDescriptions: [
    "Reliable quality standards",
    "Solutions designed around real farm needs",
    "Practical guidance for customers",
    "Continuous improvement with responsibility"
  ],

  founderEyebrow: "Leadership",

  founderBadge: "Founder",

  founderName: "Ashok kumar",

  founderDesignation: "Founder & Director",

  founderTitle: "Building a Better Future for Agriculture",

  founderQuote:
    "Our vision is to create dependable agricultural solutions that help farmers grow with confidence.",

  founderText:
    "With a strong commitment to agriculture and innovation, our founder continues to build a company focused on quality, responsibility and practical solutions for modern farming. The goal is to contribute to a stronger agricultural ecosystem by delivering products that farmers and partners can rely on.",

  founderButton: "Know More About Us",

  stats: [
    "5+ Years",
    "50+ Products",
    "100+ Customers",
    "Quality First"
  ],

  statsLabels: [
    "Years Experience",
    "Product Range",
    "Happy Customers",
    "Quality Focus"
  ],

  ctaTitle: "Let's Grow Together",

  ctaText:
    "Partner with Natariya Chemicals for practical solutions that support modern agriculture."
},
      about: {
        label:"About Us", title:"Our Journey, Our Commitment",
        heading:"Welcome to Natariya Chemicals Industries Pvt. Ltd.",
        p1:"Founded with a vision to support modern agriculture, Natariya Chemicals Industries Pvt. Ltd. develops and supplies agricultural and chemical solutions for farmers, distributors and partners.",
        p2:"With 5+ years of experience, our focus remains on product quality, customer trust, technical support and sustainable growth.",
        mission:"To provide dependable agrochemical solutions that enhance agricultural productivity while promoting responsible use and a healthier planet.",
        vision:"To build a trusted global presence in agrochemical solutions, recognized for innovation, quality and commitment to farmers.",
        missionTitle:"Our Mission", visionTitle:"Our Vision", valuesTitle:"Our Values",
        values:["Quality","Integrity","Innovation","Sustainability"]
      },
      products: {
        label:"Our Products", title:"High-Quality Agrochemical Solutions",
        intro:"Explore our product range designed for crop nutrition, protection and better farm outcomes.",
        categories:"Product Categories", all:"All",
        empty:"No products available yet.", ask:"Need a product recommendation?",
        askText:"Talk to our team for product information and agricultural guidance."
      },
      gallery: { label:"Gallery", title:"From Our World of Agriculture", intro:"A glimpse into our work, products, people and agricultural partnerships." },
      contact: {
        label:"Contact Us", title:"We're Here to Help", intro:"Have a question, need a quote or want to know more about our products? Our team is ready to help.",
        get:"Get in Touch", send:"Send Us a Message", address:"Address", phone:"Phone", email:"Email", hours:"Business Hours",
        addressValue:"Industrial Area, Sikandrabad, Uttar Pradesh, India",
        hoursValue:"Mon - Sat: 9:00 AM - 6:00 PM",
        name:"Your Name", emailField:"Your Email", phoneField:"Phone Number", subject:"Subject", message:"Message",
        success:"Thank you! Your message has been submitted.", team:"Meet Our Team", teamIntro:"People behind our quality, service and agricultural partnerships."
      },
      footer: { desc:"Committed to advancing agriculture through dependable products, responsible chemistry and long-term partnerships.", links:"Quick Links", newsletter:"Get product updates and company news.", subscribe:"Subscribe" },
      admin: { title:"Admin Panel", login:"Admin Login", email:"Email", password:"Password", signIn:"Sign In", signOut:"Sign Out", dashboard:"Dashboard", products:"Products", gallery:"Gallery", team:"Team", add:"Add New", edit:"Edit", delete:"Delete", save:"Save", cancel:"Cancel", upload:"Upload Image", published:"Published", featured:"Featured", noData:"No records found.", required:"Please fill the required fields." }
    }
  },
  hi: {
    translation: {
      nav: { home:"होम", about:"हमारे बारे में", products:"उत्पाद", gallery:"गैलरी", contact:"संपर्क करें", admin:"एडमिन" },
      common: { explore:"उत्पाद देखें", contact:"संपर्क करें", learn:"और जानें", viewAll:"सभी उत्पाद देखें", send:"संदेश भेजें", read:"और पढ़ें" },
     home: {
  heroTitle: "बेहतर रसायन विज्ञान के साथ कृषि को सशक्त बनाना",

  heroText:
    "स्वस्थ फसलों, बेहतर उत्पादन और हरित भविष्य के लिए उच्च गुणवत्ता वाले कृषि रसायन उत्पाद।",

  badge: "5+ वर्षों की उत्कृष्टता",

  introTitle: "विश्वसनीय कृषि एवं रासायनिक समाधान",

  introText:
    "Natariya Chemicals Industries Pvt. Ltd. ऐसे भरोसेमंद कृषि समाधान उपलब्ध कराने के लिए प्रतिबद्ध है, जो गुणवत्ता, नवाचार और जिम्मेदार रसायन विज्ञान का संयोजन करते हैं।",

  productsTitle: "हमारे प्रीमियम उत्पाद",

  productsText:
    "स्वस्थ और उत्पादक फसलों के लिए कृषि रसायन समाधानों की एक विस्तृत होती श्रृंखला।",

  whyTitle: "हमें क्यों चुनें?",

  reasons: [
    "गुणवत्तापूर्ण उत्पाद",
    "किसान-केंद्रित",
    "तकनीकी सहायता",
    "जिम्मेदार नवाचार"
  ],

  reasonTexts: [
    "विश्वसनीय गुणवत्ता मानकों पर हमारा ध्यान",
    "वास्तविक कृषि आवश्यकताओं के अनुसार समाधान",
    "ग्राहकों के लिए व्यावहारिक मार्गदर्शन",
    "जिम्मेदारी के साथ निरंतर सुधार"
  ],

  promiseEyebrow: "हमारा वादा",

  productRange: "उत्पाद श्रृंखला",

  noFeaturedProducts: "कोई विशेष उत्पाद उपलब्ध नहीं है।",

  partnerEyebrow: "हमारे साथ जुड़ें",

  commitmentEyebrow: "हमारी प्रतिबद्धता",

  yearsExperience: "वर्षों का अनुभव",

  promiseItems: [
    "गुणवत्तापूर्ण उत्पाद",
    "किसान-केंद्रित समाधान",
    "तकनीकी सहायता",
    "जिम्मेदार नवाचार"
  ],

  promiseDescriptions: [
    "विश्वसनीय गुणवत्ता मानक",
    "वास्तविक कृषि आवश्यकताओं के अनुसार समाधान",
    "ग्राहकों के लिए व्यावहारिक मार्गदर्शन",
    "जिम्मेदारी के साथ निरंतर सुधार"
  ],

  founderEyebrow: "नेतृत्व",

  founderBadge: "संस्थापक",

  founderName: "Ashok kumar ",

  founderDesignation: "संस्थापक एवं निदेशक",

  founderTitle: "कृषि के लिए एक बेहतर भविष्य का निर्माण",

  founderQuote:
    "हमारा लक्ष्य ऐसे भरोसेमंद कृषि समाधान उपलब्ध कराना है, जो किसानों को आत्मविश्वास के साथ आगे बढ़ने में मदद करें।",

  founderText:
    "कृषि और नवाचार के प्रति मजबूत प्रतिबद्धता के साथ, हमारे संस्थापक एक ऐसी कंपनी के निर्माण की दिशा में कार्य कर रहे हैं जो गुणवत्ता, जिम्मेदारी और आधुनिक खेती के लिए व्यावहारिक समाधानों पर केंद्रित है। हमारा उद्देश्य ऐसे उत्पाद उपलब्ध कराकर मजबूत कृषि व्यवस्था में योगदान देना है, जिन पर किसान और हमारे सहयोगी भरोसा कर सकें।",

  founderButton: "हमारे बारे में जानें",

  stats: [
    "5+ वर्ष",
    "50+ उत्पाद",
    "100+ ग्राहक",
    "गुणवत्ता प्रथम"
  ],

  statsLabels: [
    "वर्षों का अनुभव",
    "उत्पाद श्रृंखला",
    "संतुष्ट ग्राहक",
    "गुणवत्ता पर ध्यान"
  ],

  ctaTitle: "आइए साथ मिलकर आगे बढ़ें",

  ctaText:
    "आधुनिक कृषि को सहयोग देने वाले व्यावहारिक समाधानों के लिए Natariya Chemicals के साथ जुड़ें।"
},
      about: {
        label:"हमारे बारे में", title:"हमारी यात्रा, हमारी प्रतिबद्धता",
        heading:"Natariya Chemicals Industries Pvt. Ltd. में आपका स्वागत है",
        p1:"आधुनिक कृषि को सहयोग देने के उद्देश्य से स्थापित Natariya Chemicals Industries Pvt. Ltd. किसानों, वितरकों और साझेदारों के लिए कृषि एवं रासायनिक समाधान विकसित और उपलब्ध कराती है।",
        p2:"5+ वर्षों के अनुभव के साथ हमारा ध्यान उत्पाद गुणवत्ता, ग्राहक विश्वास, तकनीकी सहायता और सतत विकास पर है।",
        mission:"कृषि उत्पादकता बढ़ाने वाले भरोसेमंद कृषि-रासायनिक समाधान प्रदान करना और जिम्मेदार उपयोग व स्वस्थ पर्यावरण को बढ़ावा देना।",
        vision:"कृषि-रासायनिक समाधानों में एक भरोसेमंद वैश्विक पहचान बनाना, जो नवाचार, गुणवत्ता और किसानों के प्रति प्रतिबद्धता के लिए जानी जाए।",
        missionTitle:"हमारा मिशन", visionTitle:"हमारा विज़न", valuesTitle:"हमारे मूल्य",
        values:["गुणवत्ता","ईमानदारी","नवाचार","सतत विकास"]
      },
      products: {
        label:"हमारे उत्पाद", title:"उच्च गुणवत्ता वाले कृषि-रासायनिक समाधान",
        intro:"फसल पोषण, सुरक्षा और बेहतर कृषि परिणामों के लिए तैयार हमारी उत्पाद श्रृंखला देखें।",
        categories:"उत्पाद श्रेणियां", all:"सभी",
        empty:"अभी कोई उत्पाद उपलब्ध नहीं है।", ask:"उत्पाद की जानकारी चाहिए?",
        askText:"उत्पाद जानकारी और कृषि मार्गदर्शन के लिए हमारी टीम से बात करें।"
      },
      gallery: { label:"गैलरी", title:"हमारी कृषि दुनिया की झलक", intro:"हमारे कार्य, उत्पादों, लोगों और कृषि साझेदारियों की झलक।" },
      contact: {
        label:"संपर्क करें", title:"हम आपकी सहायता के लिए तैयार हैं", intro:"कोई सवाल है, कोटेशन चाहिए या हमारे उत्पादों के बारे में जानना चाहते हैं? हमारी टीम आपकी सहायता के लिए तैयार है।",
        get:"संपर्क जानकारी", send:"हमें संदेश भेजें", address:"पता", phone:"फोन", email:"ईमेल", hours:"व्यावसायिक समय",
        addressValue:"इंडस्ट्रियल एरिया, सिकंदराबाद, उत्तर प्रदेश, भारत",
        hoursValue:"सोम - शनि: सुबह 9:00 - शाम 6:00",
        name:"आपका नाम", emailField:"आपका ईमेल", phoneField:"फोन नंबर", subject:"विषय", message:"संदेश",
        success:"धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।", team:"हमारी टीम", teamIntro:"हमारी गुणवत्ता, सेवा और कृषि साझेदारियों के पीछे काम करने वाली टीम।"
      },
      footer: { desc:"विश्वसनीय उत्पादों, जिम्मेदार रसायन विज्ञान और दीर्घकालिक साझेदारियों के माध्यम से कृषि को आगे बढ़ाने के लिए प्रतिबद्ध।", links:"त्वरित लिंक", newsletter:"उत्पाद अपडेट और कंपनी समाचार पाएं।", subscribe:"सब्सक्राइब" },
      admin: { title:"एडमिन पैनल", login:"एडमिन लॉगिन", email:"ईमेल", password:"पासवर्ड", signIn:"साइन इन", signOut:"साइन आउट", dashboard:"डैशबोर्ड", products:"उत्पाद", gallery:"गैलरी", team:"टीम", add:"नया जोड़ें", edit:"संपादित करें", delete:"हटाएं", save:"सेव करें", cancel:"रद्द करें", upload:"इमेज अपलोड", published:"प्रकाशित", featured:"फीचर्ड", noData:"कोई रिकॉर्ड नहीं मिला।", required:"कृपया जरूरी जानकारी भरें।" }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,

  // Default Hindi
  lng: localStorage.getItem("natariya_lang") || "hi",

  // If translation is missing, use Hindi
  fallbackLng: "hi",

  interpolation: {
    escapeValue: false,
  },

  returnObjects: true,
});

export default i18n;
