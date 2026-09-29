export const demoProducts = [
  {
    id: "demo-1",
    name_en: "NPK Granules",
    name_hi: "NPK ग्रैन्यूल्स",
    category_en: "Fertilizers",
    category_hi: "उर्वरक",
    short_description_en: "Balanced nutrition for stronger crops and better yield.",
    short_description_hi: "बेहतर फसल और उपज के लिए संतुलित पोषण।",
    description_en: "A balanced NPK formulation designed to support healthy plant growth and crop development.",
    description_hi: "स्वस्थ पौधों की वृद्धि और फसल विकास के लिए संतुलित NPK फॉर्मूलेशन।",
    image_url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
    featured: true,
    published: true
  },
  {
    id: "demo-2",
    name_en: "CropShield Insecticide",
    name_hi: "क्रॉपशील्ड कीटनाशक",
    category_en: "Insecticides",
    category_hi: "कीटनाशक",
    short_description_en: "Targeted protection against common crop insects.",
    short_description_hi: "फसलों को सामान्य कीटों से लक्षित सुरक्षा।",
    description_en: "A crop-protection solution developed for responsible and effective insect management.",
    description_hi: "जिम्मेदार और प्रभावी कीट प्रबंधन के लिए विकसित फसल सुरक्षा समाधान।",
    image_url: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=900&q=80",
    featured: true,
    published: true
  },
  {
    id: "demo-3",
    name_en: "GreenGuard Fungicide",
    name_hi: "ग्रीनगार्ड फफूंदनाशी",
    category_en: "Fungicides",
    category_hi: "फफूंदनाशी",
    short_description_en: "Helps protect crops from fungal disease pressure.",
    short_description_hi: "फसलों को फफूंद रोगों से बचाने में सहायता।",
    description_en: "A modern fungicide solution for healthier leaves and improved crop protection.",
    description_hi: "स्वस्थ पत्तियों और बेहतर फसल सुरक्षा के लिए आधुनिक फफूंदनाशी समाधान।",
    image_url: "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=900&q=80",
    featured: false,
    published: true
  },
  {
    id: "demo-4",
    name_en: "WeedFree Herbicide",
    name_hi: "वीडफ्री खरपतवारनाशी",
    category_en: "Herbicides",
    category_hi: "खरपतवारनाशी",
    short_description_en: "Supports controlled weed management in crops.",
    short_description_hi: "फसलों में खरपतवार प्रबंधन में सहायता।",
    description_en: "A practical weed-management solution for agricultural applications.",
    description_hi: "कृषि उपयोग के लिए व्यावहारिक खरपतवार प्रबंधन समाधान।",
    image_url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
    featured: false,
    published: true
  }
];

export const demoGallery = [
  ["Modern Agriculture","आधुनिक कृषि","https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"],
  ["Healthy Crops","स्वस्थ फसलें","https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=80"],
  ["Field Solutions","खेतों के समाधान","https://images.unsplash.com/photo-1523742818008-3b8e7f0a6c8a?auto=format&fit=crop&w=1200&q=80"],
  ["Green Growth","हरित विकास","https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80"],
  ["Agro Innovation","कृषि नवाचार","https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80"],
  ["Sustainable Farming","सतत कृषि","https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"]
].map((x, i) => ({ id: `gallery-${i}`, title_en:x[0], title_hi:x[1], image_url:x[2], sort_order:i+1, published:true }));

export const demoTeam = [
  {
    id:"team-1", name:"Aarav Sharma", role_en:"Managing Director", role_hi:"प्रबंध निदेशक",
    bio_en:"Leading the company with a focus on quality, responsible growth and long-term farmer relationships.",
    bio_hi:"गुणवत्ता, जिम्मेदार विकास और किसानों के साथ दीर्घकालिक संबंधों पर केंद्रित नेतृत्व।",
    phone:"+91 98765 43210", email:"info@natariya.com",
    image_url:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id:"team-2", name:"Neha Verma", role_en:"Operations Head", role_hi:"ऑपरेशंस हेड",
    bio_en:"Coordinates operations, quality systems and customer-focused execution.",
    bio_hi:"ऑपरेशंस, गुणवत्ता प्रणालियों और ग्राहक-केंद्रित कार्यों का समन्वय।",
    phone:"+91 98765 43211", email:"operations@natariya.com",
    image_url:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80"
  },
  {
    id:"team-3", name:"Rohan Singh", role_en:"Technical & Product Lead", role_hi:"तकनीकी एवं उत्पाद प्रमुख",
    bio_en:"Supports product development, technical guidance and field-oriented solutions.",
    bio_hi:"उत्पाद विकास, तकनीकी मार्गदर्शन और फील्ड समाधान में सहयोग।",
    phone:"+91 98765 43212", email:"technical@natariya.com",
    image_url:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80"
  }
];

export const getText = (item, field, lang) => item?.[`${field}_${lang}`] ?? item?.[field] ?? "";
  