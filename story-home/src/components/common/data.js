import projectImg1 from "../../assets/projectImage/bedroom.jpg";
import projectImg2 from "../../assets/projectImage/living2.jpg";
import projectImg3 from "../../assets/projectImage/kitchen2.jpg";
import projectImg4 from "../../assets/projectImage/drawing.jpg";
import projectImg5 from "../../assets/projectImage/studyroom.jpg";
import projectImg6 from "../../assets/projectImage/kitchen.jpg";
import projectImg7 from "../../assets/projectImage/wall.jpg";
import projectImg9 from "../../assets/projectImage/living3.jpg";
import projectImg10 from "../../assets/projectImage/bedroom2.jpg";
import projectImg11 from "../../assets/projectImage/babybed.jpg";
import projectImg12 from "../../assets/projectImage/bathroom2.jpg";
import article1 from "../../assets/articlesImage/kitchenArticle.png";
import article2 from "../../assets/articlesImage/interior.png";
import article3 from "../../assets/articlesImage/livingArticle.png";
import aboutImg1 from "../../assets/aboutImage/img1.jpg";
import aboutImg2 from "../../assets/aboutImage/img2.jpg";
import aboutImg3 from "../../assets/aboutImage/img3.jpg";
import aboutImg4 from "../../assets/aboutImage/img4.jpg";
import aboutImg5 from "../../assets/aboutImage/img5.png";
import aboutImg6 from "../../assets/aboutImage/img6.jpg";

export const menus = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Project" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export const PricingData = [
  {
    id: "1",
    title: "Design advices",
    services: [
      {
        id: 1,
        name: "General living space advices",
      },
      {
        id: 2,
        name: "Rennovation advices",
      },
      {
        id: 3,
        name: "Interior design advices",
      },
      {
        id: 4,
        name: "Furniture reorganization",
      },
      {
        id: 5,
        name: "Up to 5 hours meetings",
      },
    ],
    price: "29",
  },
  {
    id: "2",
    title: "Complete interior",
    services: [
      {
        id: 1,
        name: "Complete home redesign",
      },
      {
        id: 2,
        name: "Interior and exterior works",
      },
      {
        id: 3,
        name: "Modular interior planning",
      },
      {
        id: 4,
        name: "Kitchen design",
      },
      {
        id: 5,
        name: "Garages organization",
      },
    ],
    price: "40",
    common: "common",
  },
  {
    id: "3",
    title: "Furniture design",
    services: [
      {
        id: 1,
        name: "Furniture for living room",
      },
      {
        id: 2,
        name: "Furniture refurbishment",
      },
      {
        id: 3,
        name: "Sofas and amchairs",
      },
      {
        id: 4,
        name: "Tables and chairs",
      },
      {
        id: 5,
        name: "Kitchens",
      },
    ],
    price: "69",
  },
];

export const reviewsData = [
  {
    id: 1,
    user: "John Doe",
    rating: 4.5,
    img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "Moscow, Russia",
    comment:
      "I loved the modern designs and color schemes. The service was excellent!",
    date: "2023-12-01",
  },
  {
    id: 2,
    user: "AliceIn Land",
    rating: 3.8,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "UK, London",
    comment:
      "The variety of options was good, but delivery took longer than expected.",
    date: "2023-11-25",
  },
  {
    id: 3,
    user: "Happy Hmaker",
    rating: 5.0,
    img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "USA, New York",
    comment:
      "Fantastic quality furniture! Will definitely shop here again. bit confusing",
    date: "2023-11-20",
  },
  {
    id: 4,
    user: "Degn Lover",
    rating: 4.2,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "Moscow, Russia",
    comment:
      "Great customer service, and the prices are reasonable. bit confusing",
    date: "2023-11-15",
  },
  {
    id: 5,
    user: "CozyNook",
    rating: 3.0,
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "KOLnhu, London",
    comment:
      "The website navigation could be improved. Found it a bit confusing.",
    date: "2023-11-10",
  },
  {
    id: 6,
    user: "ArtisticAbode",
    rating: 4.7,
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "USA, New York",
    comment:
      "Beautiful pieces! Quick delivery and hassle-free assembly. Quick delivery",
    date: "2023-11-05",
  },
  {
    id: 7,
    user: "ElegantSpaces",
    rating: 4.0,
    img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "USA, New York",
    comment:
      "Good selection of classic furniture. Delivery was on time. bit confusing",
    date: "2023-10-31",
  },
  {
    id: 8,
    user: "ModernMaven",
    rating: 4.8,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "USA, New York",
    comment:
      "Sleek and stylish designs. Impressed with the overall shopping experience.",
    date: "2023-10-26",
  },
  {
    id: 9,
    user: "ChicHabitat",
    rating: 3.5,
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "USA, New York",
    comment:
      "Quality is decent, but prices are a bit high compared to other stores.",
    date: "2023-10-21",
  },
  {
    id: 10,
    user: "DreamyInteriors",
    rating: 5.0,
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deignation: "USA, New York",
    comment:
      "Absolutely thrilled with my purchases! A one-stop-shop for all things home decor.",
    date: "2023-10-16",
  },
];

export const projectData = [
  {
    id: 1,
    title: "Modern Delight Bedroom",
    img: projectImg1,
    type: "Bedroom",
    client: "Sarah T.",
    Category: "bedroom design",
    tags: [
      {
        id: 1,
        name: "VIP",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "delight",
      },
      {
        id: 4,
        name: "bedroom",
      },
      {
        id: 5,
        name: "room",
      },
    ],
    date: "2014, Feb 17",
    rating: "4.5",
    cient_reviews:
      "I recently had the pleasure of working with StoryHome for the redesign of my bedroom, and the experience exceeded all my expectations. The design team's commitment to creating a modern haven tailored to my lifestyle truly stood out.I highly recommend StoryHome for anyone looking to embark on a journey of modern luxury and personalized design. Their professionalism, creativity, and commitment to client satisfaction make them the go-to choice for modern interior design.",
    price: "456",
    passage:
      "Design Approach:Our team of experienced designers begins by understanding your vision for the ideal modern bedroom. We embrace clean lines, minimalist aesthetics, and innovative solutions to maximize space utilization. From custom-designed furniture to thoughtfully curated decor elements, we ensure every detail contributes to the overall modern ambiance. Our design approach focuses on creating a harmonious balance between comfort and sophistication, transforming your bedroom into a sanctuary of modern luxury. Cost Considerations:We understand that budget is a crucial aspect of any interior design project. Our modern bedroom design solutions are tailored to offer flexibility, allowing you to choose from a range of design options that align with your budgetary constraints. Whether you're looking for a complete bedroom overhaul or seeking to refresh your space with strategic updates, our design team works collaboratively with you to optimize costs without compromising on quality and style. Benefits of Our Modern Bedroom Designs:Contemporary Elegance: Immerse yourself in the allure of contemporary aesthetics that exude sophistication and style.Optimized Functionality: Our designs prioritize functionality, providing smart storage solutions and furniture layouts to enhance your daily living experience.Personalization: Tailor your modern bedroom to reflect your unique personality with customizable design elements and color palettes.Increased Property Value: A thoughtfully designed modern bedroom not only enhances your living experience but also adds value to your property.Long-Term Durability: We source high-quality materials and partner with skilled craftsmen to ensure that your modern bedroom stands the test of time, offering both durability and timeless appeal.",
  },
  {
    id: 2,
    title: "Aesthetic Spaces",
    img: projectImg2,
    type: "Living",
    client: "Emily H.",
    Category: "living interior",
    tags: [
      {
        id: 1,
        name: "interior",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "living",
      },
      {
        id: 4,
        name: "aesthetic",
      },
      {
        id: 5,
        name: "space",
      },
    ],
    date: "2015, Aug 17",
    rating: "4.7",
    cient_reviews:
      "What impressed me most was Aesthetic Spaces' commitment to quality craftsmanship. Every piece of furniture and every design element spoke to a dedication to excellence. The combination of premium materials and skilled artisans resulted in a living space that not only looks beautiful but also stands the test of time.The personalized design approach truly set them apart. The team took the time to understand my style, preferences, and how I use each space in my home. The result was a living space that felt uniquely mine – a perfect blend of aesthetics and functionality.",
    price: "349",
    passage:
      "About Aesthetic Spaces:Aesthetic Spaces is more than just a design philosophy; it's a commitment to curating living spaces that harmonize beauty, functionality, and comfort. We understand that your home is a canvas, and each room is an opportunity to express your individuality. Our team of skilled designers collaborates with you to transform your vision into a tangible reality, ensuring that every corner of your living space reflects your taste and brings you joy.Our Living Space Design Approach:Our design approach revolves around the seamless integration of aesthetics and functionality. From the initial consultation to the final reveal, we prioritize open communication and collaboration. We explore a range of design elements, from color palettes and textures to innovative furniture layouts, to create living spaces that not only captivate the eye but also enhance your daily life.Why Choose Aesthetic Spaces:Personalized Design: Tailored to your preferences, our designs are a celebration of your unique style.Functional Elegance: We believe that beautiful spaces should also be practical. Our designs optimize functionality without compromising on aesthetics.Quality Craftsmanship: Partnering with skilled artisans and using premium materials, we ensure that your living space is a testament to quality and durability.Holistic Approach: Aesthetic Spaces takes a holistic approach to design, considering the flow and energy of your entire living space to create a harmonious environment.Client-Centric Process: Your satisfaction is our priority. We keep you involved at every step, ensuring that the final result exceeds your expectations. Embark on a journey with Aesthetic Spaces to transform your living space into a haven of beauty and functionality. Whether you're envisioning a cozy home office, a stylish lounge, or a serene bedroom retreat, we have the expertise to bring your dream spaces to life.",
  },
  {
    id: 3,
    title: "Moduler Kitchen",
    img: projectImg3,
    type: "Kitchen",
    tags: [
      {
        id: 1,
        name: "Kitchen",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "moduler",
      },
      {
        id: 4,
        name: "home",
      },
      {
        id: 5,
        name: "decoration",
      },
    ],
    client: "James M.",
    Category: "Kitchen Decor",
    date: "2019, May 17",
    rating: "4.3",
    cient_reviews:
      "Recently had the pleasure of working with StoryHome for the renovation of my kitchen, and the experience was nothing short of exceptional. From the initial consultation to the final installation, the team's dedication to creating a functional and stylish modular kitchen truly impressed me.I highly recommend StoryHome for anyone considering a modular kitchen project. Their expertise, professionalism, and commitment to client satisfaction make them the go-to choice for transforming kitchens into efficient and beautiful spaces.",
    price: "534",
    passage:
      "Innovative Design Approach: Our team of expert designers takes a personalized approach to understand your cooking habits, storage needs, and lifestyle. We believe that a modular kitchen should not only be visually stunning but also highly efficient. From the layout to the choice of materials, every element is carefully curated to reflect your taste and maximize functionality. Smart Storage Solutions: One of the key features of our modular kitchens is the incorporation of smart storage solutions. We understand the importance of a clutter-free and organized kitchen space. Our designs include pull-out cabinets, modular shelving, and space-saving solutions that make the most of every inch, providing ample storage without compromising on aesthetics. Contemporary Aesthetics:Our modular kitchens boast contemporary aesthetics that add a touch of sophistication to your home. From sleek cabinetry to modern countertop materials, we stay abreast of the latest design trends to ensure that your kitchen remains both stylish and timeless.Customization for Your Lifestyle:We believe in creating kitchens that cater to your unique lifestyle. Whether you're a culinary enthusiast, a busy professional, or a family-oriented home chef, our modular designs can be customized to suit your specific needs. Choose from a range of layouts, finishes, and accessories to create a kitchen that aligns perfectly with your preferences.",
  },
  {
    id: 4,
    title: "Special Living",
    type: "Living",
    img: projectImg4,
    client: "Samantha Lee",
    Category: "living space",
    Tags: "",
    date: "2022, May 28",
    rating: "3.9",
    cient_reviews:
      "Thank you, StoryHome, for creating a living space that goes beyond special – it's extraordinary! I had the pleasure of working with StoryHome to transform my living space into a haven of Special Living, and the experience has been nothing short of extraordinary. From our initial consultation to the final touches, the team's dedication to creating a space that truly reflects my lifestyle and personality has been remarkable.",
    price: "567",
    passage:
      "Tailored Comfort:Special Living begins with the understanding that your home is an extension of yourself. Our expert designers work closely with you to tailor each element of your living space to your preferences. From plush furnishings to cozy corners, we ensure that your home is not just a place to live but a sanctuary that wraps you in comfort.Aesthetic Elegance:Elegance is woven into the fabric of Special Living. Our designs prioritize aesthetics that transcend trends, creating spaces that are both timeless and contemporary. Whether you envision a modern minimalistic retreat or a classic, opulent haven, we bring your vision to life with a touch of artistic finesse.Seamless Harmony:Harmony is the guiding principle of Special Living. We ensure that every design element complements the next, creating a seamless flow throughout your living space. The result is a harmonious environment that evokes a sense of tranquility and balance.Embrace the beauty of Special Living with StoryHome. Let us transform your home into a space that not only meets but exceeds your expectations. Elevate your living experience with our dedication to comfort, aesthetics, and personalized design.",
  },
  {
    id: 5,
    title: "Bathroom Design With Multioloured",
    type: "Bathroom",
    img: projectImg5,
    client: "Trina Shaha",
    Category: "Multioloured Design",
    tags: [
      {
        id: 1,
        name: "Bathroom",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "delight",
      },
      {
        id: 4,
        name: "bedroom",
      },
      {
        id: 5,
        name: "room",
      },
    ],
    date: "2014, Feb 17",
    rating: "4.5",
    cient_reviews:
      "I recently had the pleasure of working with StoryHome for the redesign of my bedroom, and the experience exceeded all my expectations. The design team's commitment to creating a modern haven tailored to my lifestyle truly stood out.I highly recommend StoryHome for anyone looking to embark on a journey of modern luxury and personalized design. Their professionalism, creativity, and commitment to client satisfaction make them the go-to choice for modern interior design.",
    price: "456",
    passage:
      "Design Approach:Our team of experienced designers begins by understanding your vision for the ideal modern bedroom. We embrace clean lines, minimalist aesthetics, and innovative solutions to maximize space utilization. From custom-designed furniture to thoughtfully curated decor elements, we ensure every detail contributes to the overall modern ambiance. Our design approach focuses on creating a harmonious balance between comfort and sophistication, transforming your bedroom into a sanctuary of modern luxury. Cost Considerations:We understand that budget is a crucial aspect of any interior design project. Our modern bedroom design solutions are tailored to offer flexibility, allowing you to choose from a range of design options that align with your budgetary constraints. Whether you're looking for a complete bedroom overhaul or seeking to refresh your space with strategic updates, our design team works collaboratively with you to optimize costs without compromising on quality and style. Benefits of Our Modern Bedroom Designs:Contemporary Elegance: Immerse yourself in the allure of contemporary aesthetics that exude sophistication and style.Optimized Functionality: Our designs prioritize functionality, providing smart storage solutions and furniture layouts to enhance your daily living experience.Personalization: Tailor your modern bedroom to reflect your unique personality with customizable design elements and color palettes.Increased Property Value: A thoughtfully designed modern bedroom not only enhances your living experience but also adds value to your property.Long-Term Durability: We source high-quality materials and partner with skilled craftsmen to ensure that your modern bedroom stands the test of time, offering both durability and timeless appeal.",
  },
  {
    id: 6,
    title: "Semi Modular Kitchen",
    type: "Kitchen",
    img: projectImg6,
    client: "Shams Sen",
    Category: "Kitchen design",
    tags: [
      {
        id: 1,
        name: "Bathroom",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "delight",
      },
      {
        id: 4,
        name: "bedroom",
      },
      {
        id: 5,
        name: "room",
      },
    ],
    date: "2014, Feb 17",
    rating: "4.5",
    cient_reviews:
      "I recently had the pleasure of working with StoryHome for the redesign of my bedroom, and the experience exceeded all my expectations. The design team's commitment to creating a modern haven tailored to my lifestyle truly stood out.I highly recommend StoryHome for anyone looking to embark on a journey of modern luxury and personalized design. Their professionalism, creativity, and commitment to client satisfaction make them the go-to choice for modern interior design.",
    price: "456",
    passage:
      "Design Approach:Our team of experienced designers begins by understanding your vision for the ideal modern bedroom. We embrace clean lines, minimalist aesthetics, and innovative solutions to maximize space utilization. From custom-designed furniture to thoughtfully curated decor elements, we ensure every detail contributes to the overall modern ambiance. Our design approach focuses on creating a harmonious balance between comfort and sophistication, transforming your bedroom into a sanctuary of modern luxury. Cost Considerations:We understand that budget is a crucial aspect of any interior design project. Our modern bedroom design solutions are tailored to offer flexibility, allowing you to choose from a range of design options that align with your budgetary constraints. Whether you're looking for a complete bedroom overhaul or seeking to refresh your space with strategic updates, our design team works collaboratively with you to optimize costs without compromising on quality and style. Benefits of Our Modern Bedroom Designs:Contemporary Elegance: Immerse yourself in the allure of contemporary aesthetics that exude sophistication and style.Optimized Functionality: Our designs prioritize functionality, providing smart storage solutions and furniture layouts to enhance your daily living experience.Personalization: Tailor your modern bedroom to reflect your unique personality with customizable design elements and color palettes.Increased Property Value: A thoughtfully designed modern bedroom not only enhances your living experience but also adds value to your property.Long-Term Durability: We source high-quality materials and partner with skilled craftsmen to ensure that your modern bedroom stands the test of time, offering both durability and timeless appeal.",
  },
  {
    id: 7,
    title: "",
    type: "Wall",
    img: projectImg7,
    client: "Aline Plon",
    Category: "",
    tags: [
      {
        id: 1,
        name: "Bathroom",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "delight",
      },
      {
        id: 4,
        name: "bedroom",
      },
      {
        id: 5,
        name: "room",
      },
    ],
    date: "2014, Feb 17",
    rating: "4.5",
    cient_reviews:
      "I recently had the pleasure of working with StoryHome for the redesign of my bedroom, and the experience exceeded all my expectations. The design team's commitment to creating a modern haven tailored to my lifestyle truly stood out.I highly recommend StoryHome for anyone looking to embark on a journey of modern luxury and personalized design. Their professionalism, creativity, and commitment to client satisfaction make them the go-to choice for modern interior design.",
    price: "456",
    passage:
      "Design Approach:Our team of experienced designers begins by understanding your vision for the ideal modern bedroom. We embrace clean lines, minimalist aesthetics, and innovative solutions to maximize space utilization. From custom-designed furniture to thoughtfully curated decor elements, we ensure every detail contributes to the overall modern ambiance. Our design approach focuses on creating a harmonious balance between comfort and sophistication, transforming your bedroom into a sanctuary of modern luxury. Cost Considerations:We understand that budget is a crucial aspect of any interior design project. Our modern bedroom design solutions are tailored to offer flexibility, allowing you to choose from a range of design options that align with your budgetary constraints. Whether you're looking for a complete bedroom overhaul or seeking to refresh your space with strategic updates, our design team works collaboratively with you to optimize costs without compromising on quality and style. Benefits of Our Modern Bedroom Designs:Contemporary Elegance: Immerse yourself in the allure of contemporary aesthetics that exude sophistication and style.Optimized Functionality: Our designs prioritize functionality, providing smart storage solutions and furniture layouts to enhance your daily living experience.Personalization: Tailor your modern bedroom to reflect your unique personality with customizable design elements and color palettes.Increased Property Value: A thoughtfully designed modern bedroom not only enhances your living experience but also adds value to your property.Long-Term Durability: We source high-quality materials and partner with skilled craftsmen to ensure that your modern bedroom stands the test of time, offering both durability and timeless appeal.",
  },
  {
    id: 8,
    title: "Minimal bedroom",
    type: "Bedroom",
    img: projectImg10,
    client: "Rafia Rifat",
    Category: "Minimal bed",
    tags: [
      {
        id: 1,
        name: "Bathroom",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "delight",
      },
      {
        id: 4,
        name: "bedroom",
      },
      {
        id: 5,
        name: "room",
      },
    ],
    date: "2014, Feb 17",
    rating: "4.5",
    cient_reviews:
      "I recently had the pleasure of working with StoryHome for the redesign of my bedroom, and the experience exceeded all my expectations. The design team's commitment to creating a modern haven tailored to my lifestyle truly stood out.I highly recommend StoryHome for anyone looking to embark on a journey of modern luxury and personalized design. Their professionalism, creativity, and commitment to client satisfaction make them the go-to choice for modern interior design.",
    price: "456",
    passage:
      "Design Approach:Our team of experienced designers begins by understanding your vision for the ideal modern bedroom. We embrace clean lines, minimalist aesthetics, and innovative solutions to maximize space utilization. From custom-designed furniture to thoughtfully curated decor elements, we ensure every detail contributes to the overall modern ambiance. Our design approach focuses on creating a harmonious balance between comfort and sophistication, transforming your bedroom into a sanctuary of modern luxury. Cost Considerations:We understand that budget is a crucial aspect of any interior design project. Our modern bedroom design solutions are tailored to offer flexibility, allowing you to choose from a range of design options that align with your budgetary constraints. Whether you're looking for a complete bedroom overhaul or seeking to refresh your space with strategic updates, our design team works collaboratively with you to optimize costs without compromising on quality and style. Benefits of Our Modern Bedroom Designs:Contemporary Elegance: Immerse yourself in the allure of contemporary aesthetics that exude sophistication and style.Optimized Functionality: Our designs prioritize functionality, providing smart storage solutions and furniture layouts to enhance your daily living experience.Personalization: Tailor your modern bedroom to reflect your unique personality with customizable design elements and color palettes.Increased Property Value: A thoughtfully designed modern bedroom not only enhances your living experience but also adds value to your property.Long-Term Durability: We source high-quality materials and partner with skilled craftsmen to ensure that your modern bedroom stands the test of time, offering both durability and timeless appeal.",
  },
  {
    id: 13,
    title: "Baby Eligent bedroom",
    type: "Bedroom",
    img: projectImg11,
    client: "Tamim Ass",
    Category: "baby bed",
    tags: [
      {
        id: 1,
        name: "Bathroom",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "delight",
      },
      {
        id: 4,
        name: "bedroom",
      },
      {
        id: 5,
        name: "room",
      },
    ],
    date: "2014, Feb 17",
    rating: "4.5",
    cient_reviews:
      "I recently had the pleasure of working with StoryHome for the redesign of my bedroom, and the experience exceeded all my expectations. The design team's commitment to creating a modern haven tailored to my lifestyle truly stood out.I highly recommend StoryHome for anyone looking to embark on a journey of modern luxury and personalized design. Their professionalism, creativity, and commitment to client satisfaction make them the go-to choice for modern interior design.",
    price: "456",
    passage:
      "Design Approach:Our team of experienced designers begins by understanding your vision for the ideal modern bedroom. We embrace clean lines, minimalist aesthetics, and innovative solutions to maximize space utilization. From custom-designed furniture to thoughtfully curated decor elements, we ensure every detail contributes to the overall modern ambiance. Our design approach focuses on creating a harmonious balance between comfort and sophistication, transforming your bedroom into a sanctuary of modern luxury. Cost Considerations:We understand that budget is a crucial aspect of any interior design project. Our modern bedroom design solutions are tailored to offer flexibility, allowing you to choose from a range of design options that align with your budgetary constraints. Whether you're looking for a complete bedroom overhaul or seeking to refresh your space with strategic updates, our design team works collaboratively with you to optimize costs without compromising on quality and style. Benefits of Our Modern Bedroom Designs:Contemporary Elegance: Immerse yourself in the allure of contemporary aesthetics that exude sophistication and style.Optimized Functionality: Our designs prioritize functionality, providing smart storage solutions and furniture layouts to enhance your daily living experience.Personalization: Tailor your modern bedroom to reflect your unique personality with customizable design elements and color palettes.Increased Property Value: A thoughtfully designed modern bedroom not only enhances your living experience but also adds value to your property.Long-Term Durability: We source high-quality materials and partner with skilled craftsmen to ensure that your modern bedroom stands the test of time, offering both durability and timeless appeal.",
  },
  {
    id: 9,
    title: "Beige Contemporary Bathroom",
    type: "Bathroom",
    img: projectImg12,
    client: "Tonmoy Pervej",
    Category: "Elegent Bathroom",
    tags: [
      {
        id: 1,
        name: "Bathroom",
      },
      {
        id: 2,
        name: "modern",
      },
      {
        id: 3,
        name: "delight",
      },
      {
        id: 4,
        name: "bedroom",
      },
      {
        id: 5,
        name: "room",
      },
    ],
    date: "2014, Feb 17",
    rating: "4.5",
    cient_reviews:
      "I recently had the pleasure of working with StoryHome for the redesign of my bedroom, and the experience exceeded all my expectations. The design team's commitment to creating a modern haven tailored to my lifestyle truly stood out.I highly recommend StoryHome for anyone looking to embark on a journey of modern luxury and personalized design. Their professionalism, creativity, and commitment to client satisfaction make them the go-to choice for modern interior design.",
    price: "456",
    passage:
      "Design Approach:Our team of experienced designers begins by understanding your vision for the ideal modern bedroom. We embrace clean lines, minimalist aesthetics, and innovative solutions to maximize space utilization. From custom-designed furniture to thoughtfully curated decor elements, we ensure every detail contributes to the overall modern ambiance. Our design approach focuses on creating a harmonious balance between comfort and sophistication, transforming your bedroom into a sanctuary of modern luxury. Cost Considerations:We understand that budget is a crucial aspect of any interior design project. Our modern bedroom design solutions are tailored to offer flexibility, allowing you to choose from a range of design options that align with your budgetary constraints. Whether you're looking for a complete bedroom overhaul or seeking to refresh your space with strategic updates, our design team works collaboratively with you to optimize costs without compromising on quality and style. Benefits of Our Modern Bedroom Designs:Contemporary Elegance: Immerse yourself in the allure of contemporary aesthetics that exude sophistication and style.Optimized Functionality: Our designs prioritize functionality, providing smart storage solutions and furniture layouts to enhance your daily living experience.Personalization: Tailor your modern bedroom to reflect your unique personality with customizable design elements and color palettes.Increased Property Value: A thoughtfully designed modern bedroom not only enhances your living experience but also adds value to your property.Long-Term Durability: We source high-quality materials and partner with skilled craftsmen to ensure that your modern bedroom stands the test of time, offering both durability and timeless appeal.",
  },
];

export const articleData = [
  {
    id: 1,
    title: "Let’s Get Solution For Building Construction Work",
    tag: "Kitchen",
    img: article1,
    date: "26 December,2022",
  },
  {
    id: 2,
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    tag: "Kitchen",
    img: article2,
    date: "22 November,2023",
  },
  {
    id: 3,
    title: "Best For Any Office & Business Interior Solution",
    tag: "Kitchen",
    img: article3,
    date: "4 December,2023",
  },
];

export const persons = [
  {
    img: aboutImg1,
    title:
      "chief financial officer and executive vice president for global finance, aon plc",
    name: "Christa Davies",
  },
  {
    img: aboutImg2,
    title: "revenue and financial management, stripe",
    name: "Vivek Sharma",
  },
  {
    img: aboutImg3,
    title: "head of product marketing, stripe",
    name: "Tanya Khakbaz",
  },
  {
    img: aboutImg4,
    title: "head of global sales, stripe",
    name: "Eileen O'Mara",
  },
  {
    img: aboutImg5,
    title: "founder, pulley",
    name: "Yin Wu",
  },
  {
    img: aboutImg1,
    title: "ceo and cofounder, crowdai",
    name: "Devaki Raj",
  },
  {
    img: aboutImg6,
    title: "co-head of payments, wix",
    name: "Amit Sagiv",
  },
  {
    img: aboutImg2,
    title: "general partner, andreessen horowitz",
    name: "Angela Strange",
  },
  {
    img: aboutImg4,
    title: "head of global sales, stripe",
    name: "Eileen O'Mara",
  },
  {
    img: aboutImg5,
    title: "founder, pulley",
    name: "Yin Wu",
  },
];

export const serviceData = [
  {
    id: 1,
    title: "Programming",
    paragraph:
      "In our initial meeting, we’ll work together and create a detailed design brief to determine your needs and wants, plus the overarching style for your new home. If you have inspiration images, a Houzz Account or a Pinterest board, we’ll go over them and discuss how we can incorporate the things you love. This is also the time to start analyzing the site location to discover views, sun angles, and grades—plus talk about timelines and budgets.",
    tag: "Needs & dreams!",
  },

  {
    id: 2,
    title: "Schematic Design",
    paragraph:
      "During this phase we begin preliminary discussions with the municipality as well ensure your home’s design meets standard building code practices. We’ll start preparing floor plan options for your review and look at room types, room sizes, window placement, and determine your home’s flow.",
    tag: "Foundations & flows!",
  },
  {
    id: 3,
    title: "Design Development",
    paragraph:
      "Once the floor plan is approved, we’ll start to provide exterior elevations, decide on interior and exterior finishes, and decide on window/door placement, roof lines etc. As well, the interior details start to get solidified. This is the time we’ll go into kitchen layout, bathrooms, millwork, stair location etc. as well as prepare basic interior elevations to show cabinetry design, lighting locations and tile install details.",
    tag: "Decisions & details!",
  },
  {
    id: 4,
    title: "Contract Documents",
    paragraph:
      "During the contract document phase, architectural and design drawing specs are completed to ensure the design integrity over the life of your project. The package you get may include building elevations and sections, floor plans, the site plan, window schedule, millwork plan, finishes plan, reflected ceiling plan with lighting locations, interior elevations, and other sections as required. There will also be an interior and exterior specifications document that outlines all the materials, finishes, and installation methods. These documents are critical to make sure builders and trades can give fair bids. If you’re dealing with a bank, they often ask for these documents for lending.",
    tag: "Specs & drawings",
  },
  {
    id: 5,
    title: "Tender",
    paragraph:
      "We have established relationships with a variety of contractors and builders in the Okanagan who can participate in the project tender. We’ll help you through this exciting process by meeting the contractors on site and being available to answer questions. During this phase we will be available to do the following:\nProvide the necessary drawings required to submit for building permits\nPrepare a tender package that outlines key dates and deadlines, the project description, and a formal document that outlines the major categories in construction to be priced.\nRecommend and invite 3-4 contractors/builders to bid on the project\nArrange site visits and introductory meetings between yourselves and the contractor/builder.\nCommunicate to all bidders during the tender phase.\nIssue clarifications and addendums throughout the tender phase to all bidders.\nReview bids and provide an analysis of each bid in order for you to make a confident decision when selecting a contractor/builder",
    tag: "Bids & builders",
  },
  {
    id: 6,
    title: "Project Administration",
    paragraph:
      "During a project there are often small (or big!) changes that you might make. We’ll work with you during the entire process and stay involved until the bitter end to make sure everything is going according to your plan. During this phase, we:\nAre available to answer any questions the contractor may have during construction.\nTake care of change management if you make changes.\nConduct shop drawing reviews of cabinetry and millwork drawings.\nProvide site visits to ensure the construction is being built as per design drawings.\nWill conduct and issue site changes and change orders as required.\nFrom start to finish, this design process is in place to make sure you get the space you need, want, and have dreamed about! ",
    tag: "Questions & answers",
  },
];
