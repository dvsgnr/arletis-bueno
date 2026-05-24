/* ===================== Bilingual content for Arletis Bueno ===================== */
/* Exposed on window so other Babel scripts can access. */

const CONTENT = {
  brand: {
    name: "Arletis Bueno",
    role: { es: "Nutricionista & Entrenadora Personal", en: "Nutritionist & Personal Trainer" },
    tag: { es: "Un camino hacia una vida saludable.", en: "A path toward a healthy life." },
  },

  nav: {
    home: { es: "Inicio", en: "Home" },
    planes: { es: "Planes", en: "Plans" },
    sobre: { es: "Sobre mí", en: "About" },
    contacto: { es: "Contacto", en: "Contact" },
    cta: { es: "Agenda una cita", en: "Book a session" },
    ctaShort: { es: "Agendar", en: "Book" },
  },

  contact: {
    phone: "+1 (917) 982-6073",
    phoneHref: "tel:+19179826073",
    whatsapp: "https://wa.me/19179826073",
    email: "coach.arletisbueno@gmail.com",
    emailHref: "mailto:coach.arletisbueno@gmail.com",
    instagram: "https://www.instagram.com/onboardwellnesslove/",
    instagramHandle: "@onboardwellnesslove",
  },

  // -------------------- HOME --------------------
  home: {
    heroEyebrow: { es: "Nutrición · Entrenamiento · Bienestar", en: "Nutrition · Training · Wellness" },
    heroTitle: {
      es: ["Un camino", "hacia una vida", "saludable."],
      en: ["A path", "toward a", "healthier life."],
    },
    heroSub: {
      es: "Pon tu alimentación y entrenamiento en piloto automático con planes diseñados para tu cuerpo, tus metas y tu día a día.",
      en: "Put your nutrition and training on autopilot with plans built around your body, your goals and your real life.",
    },
    heroPrimary: { es: "Ver planes", en: "See plans" },
    heroSecondary: { es: "Conoce mi historia", en: "About me" },

    statsTitle: { es: "Resultados reales", en: "Real results" },
    stats: [
      { n: "150+", l: { es: "Clientes guiados", en: "Clients guided" } },
      { n: "8", l: { es: "Años de experiencia", en: "Years of experience" } },
      { n: "94%", l: { es: "Mantiene su progreso", en: "Sustain their progress" } },
      { n: "1:1", l: { es: "Acompañamiento personal", en: "Personal attention" } },
    ],

    aboutEyebrow: { es: "Sobre mí", en: "About" },
    aboutTitle: {
      es: "Cambios sostenibles, no dietas pasajeras.",
      en: "Sustainable change, not passing diets.",
    },
    aboutBody: {
      es: "Hola, soy Arletis. Llevo años estudiando cómo el cuerpo responde a la comida y al movimiento — y lo que aprendí no cabe en una hoja de cálculo. Mi enfoque combina nutrición clínica, entrenamiento funcional y mucho sentido común para crear planes que de verdad puedas seguir.",
      en: "Hi, I'm Arletis. I've spent years studying how the body responds to food and movement — and what I learned doesn't fit on a spreadsheet. My approach mixes clinical nutrition, functional training and a lot of common sense to build plans you can actually stick with.",
    },
    aboutCta: { es: "Conoce mi historia", en: "Read my story" },
    aboutPills: {
      es: ["Nutrición personalizada", "Entrenamiento funcional", "Hábitos sostenibles"],
      en: ["Personalised nutrition", "Functional training", "Sustainable habits"],
    },

    plansEyebrow: { es: "Planes", en: "Plans" },
    plansTitle: { es: "Encuentra el plan que se adapta a ti.", en: "Find the plan that fits you." },
    plansSub: {
      es: "Cuatro caminos distintos, una misma promesa: resultados que puedas mantener.",
      en: "Four different paths, one promise: results you can sustain.",
    },
    plansSee: { es: "Ver detalle", en: "See details" },

    testimonialsEyebrow: { es: "Testimonios", en: "Testimonials" },
    testimonialsTitle: { es: "Lo que dicen mis clientes.", en: "What my clients say." },

    ctaTitle: {
      es: "¿Listo para empezar?",
      en: "Ready to begin?",
    },
    ctaSub: {
      es: "Agenda una llamada gratuita de 20 minutos y construyamos juntos tu plan.",
      en: "Book a free 20-minute call and let's build your plan together.",
    },
    ctaBtn: { es: "Agenda tu llamada", en: "Book your call" },
  },

  // -------------------- PLANS --------------------
  plans: [
    {
      id: "basico",
      name: { es: "Plan Básico", en: "Basic Plan" },
      price: "$120",
      cadence: { es: "/mes", en: "/month" },
      blurb: {
        es: "Ideal si necesitas el total de tus macronutrientes y un menú personalizado.",
        en: "Ideal if you want your macros mapped out and a fully personalised menu.",
      },
      features: {
        es: [
          "Análisis corporal completo",
          "Cálculo de macros personalizado",
          "Menú semanal de 7 días",
          "Lista de la compra automática",
          "Revisión quincenal",
          "Acceso por WhatsApp en horario laboral",
        ],
        en: [
          "Full body assessment",
          "Personalised macro calculation",
          "7-day weekly menu",
          "Auto-generated shopping list",
          "Bi-weekly check-in",
          "WhatsApp access during working hours",
        ],
      },
      best: false,
    },
    {
      id: "familiar",
      name: { es: "Básico Familiar", en: "Family Basic" },
      price: "$190",
      cadence: { es: "/mes", en: "/month" },
      blurb: {
        es: "Ideal si lo quieres realizar con un miembro de tu familia.",
        en: "Perfect for sharing the journey with a family member.",
      },
      features: {
        es: [
          "Plan básico para 2 personas",
          "Menús coordinados y compatibles",
          "Lista de la compra unificada",
          "Una sola sesión semanal",
          "Recetas familiares incluidas",
          "Soporte por WhatsApp",
        ],
        en: [
          "Basic plan for 2 people",
          "Coordinated, compatible menus",
          "Unified shopping list",
          "Single weekly session",
          "Family recipes included",
          "WhatsApp support",
        ],
      },
      best: false,
    },
    {
      id: "premium",
      name: { es: "Plan Premium", en: "Premium Plan" },
      price: "$220",
      cadence: { es: "/mes", en: "/month" },
      blurb: {
        es: "Ideal si necesitas un plan que incluya menú y rutina de ejercicios.",
        en: "Ideal if you need a plan that includes both menu and training.",
      },
      features: {
        es: [
          "Todo del Plan Básico",
          "Rutina de entrenamiento 4×/semana",
          "Vídeos demostrativos de cada ejercicio",
          "Ajustes mensuales según progreso",
          "Sesión inicial 1:1 de 60 min",
          "WhatsApp prioritario 7 días",
        ],
        en: [
          "Everything in Basic",
          "4×/week training routine",
          "Demo video for every exercise",
          "Monthly adjustments by progress",
          "60-min 1:1 onboarding session",
          "Priority WhatsApp, 7 days a week",
        ],
      },
      best: true,
    },
    {
      id: "fitness",
      name: { es: "Plan Fitness", en: "Fitness Plan" },
      price: "$140",
      cadence: { es: "/mes", en: "/month" },
      blurb: {
        es: "Ideal si solo necesitas rutinas de ejercicios.",
        en: "Ideal if you only need a training programme.",
      },
      features: {
        es: [
          "Plan de entrenamiento 4–5×/semana",
          "Bloques de fuerza, movilidad y cardio",
          "Vídeos demostrativos",
          "Progresión cada 4 semanas",
          "Pautas de recuperación y descanso",
          "Soporte por WhatsApp",
        ],
        en: [
          "4–5×/week training plan",
          "Strength, mobility and cardio blocks",
          "Demo videos for each exercise",
          "Progression every 4 weeks",
          "Recovery & rest guidelines",
          "WhatsApp support",
        ],
      },
      best: false,
    },
  ],

  plansPage: {
    eyebrow: { es: "Planes", en: "Plans" },
    title: {
      es: "Un plan para cada momento de tu camino.",
      en: "A plan for every step of your journey.",
    },
    sub: {
      es: "Sin contratos largos. Cambia de plan cuando quieras y avanza a tu ritmo.",
      en: "No long contracts. Switch plans whenever you want and move at your own pace.",
    },
    selectLabel: { es: "Selecciona un plan", en: "Select a plan" },
    selectCta: { es: "Reservar este plan", en: "Reserve this plan" },
    bestBadge: { es: "Más popular", en: "Most popular" },
    monthly: { es: "Mensual", en: "Monthly" },
    quarterly: { es: "Trimestral · 10% off", en: "Quarterly · 10% off" },

    compareTitle: { es: "Compara los planes", en: "Compare plans" },
    compareRows: [
      { k: { es: "Análisis corporal inicial", en: "Initial body assessment" }, v: [true, true, true, false] },
      { k: { es: "Cálculo de macros", en: "Macro calculation" }, v: [true, true, true, false] },
      { k: { es: "Menú semanal", en: "Weekly menu" }, v: [true, true, true, false] },
      { k: { es: "Rutina de entrenamiento", en: "Training routine" }, v: [false, false, true, true] },
      { k: { es: "Vídeos demostrativos", en: "Demo videos" }, v: [false, false, true, true] },
      { k: { es: "Sesión 1:1 inicial", en: "1:1 onboarding session" }, v: [false, false, true, false] },
      { k: { es: "Soporte 7 días", en: "7-day support" }, v: [false, false, true, false] },
      { k: { es: "Para 2 personas", en: "For 2 people" }, v: [false, true, false, false] },
    ],

    faqTitle: { es: "Preguntas frecuentes", en: "Frequently asked" },
    faq: [
      {
        q: { es: "¿Cuánto tarda en empezar?", en: "How soon can I start?" },
        a: {
          es: "Una vez recibo tu cuestionario inicial, preparo tu plan en un máximo de 5 días hábiles.",
          en: "Once I receive your intake questionnaire, your plan is ready within 5 business days.",
        },
      },
      {
        q: { es: "¿Puedo cambiar de plan?", en: "Can I switch plans?" },
        a: {
          es: "Sí, puedes cambiar de plan en cualquier momento. Solo escríbeme y lo ajustamos el siguiente ciclo.",
          en: "Yes — switch any time. Drop me a message and we adjust at the next cycle.",
        },
      },
      {
        q: { es: "¿Cómo son las sesiones?", en: "How do sessions work?" },
        a: {
          es: "Las sesiones 1:1 son por videollamada. El seguimiento del día a día es por WhatsApp.",
          en: "1:1 sessions are by video call. Day-to-day check-ins happen on WhatsApp.",
        },
      },
      {
        q: { es: "¿Qué pasa si tengo restricciones alimentarias?", en: "What about food restrictions?" },
        a: {
          es: "Cada plan se ajusta a alergias, intolerancias o preferencias (vegetariano, sin gluten, etc.).",
          en: "Every plan is adapted to allergies, intolerances or preferences (vegetarian, gluten-free, etc.).",
        },
      },
      {
        q: { es: "¿Puedo cancelar cuando quiera?", en: "Can I cancel anytime?" },
        a: {
          es: "Sí. Cancela con 7 días de antelación antes de tu próxima renovación.",
          en: "Yes. Just cancel 7 days before your next renewal.",
        },
      },
    ],
  },

  // -------------------- ABOUT --------------------
  about: {
    eyebrow: { es: "Sobre mí", en: "About" },
    title: {
      es: "Hola, soy Arletis.",
      en: "Hi, I'm Arletis.",
    },
    intro: {
      es: "Soy nutricionista y entrenadora personal. Pero, más que eso, soy alguien que cree que cuidarse no debería sentirse como un castigo.",
      en: "I'm a nutritionist and personal trainer. But more than that, I believe taking care of yourself shouldn't feel like a punishment.",
    },
    paragraphs: {
      es: [
        "Mi pasión por la nutrición y el ejercicio nace de una pregunta sencilla: ¿cómo lograr una vida saludable que de verdad sea sostenible en el tiempo? No la versión perfecta para tres semanas — la versión que sigue funcionando en tres años.",
        "Después de años trabajando con clientes de orígenes muy distintos, aprendí que no existe un plan universal. Hay personas que necesitan estructura, otras flexibilidad. Hay quien necesita más cocina y quien necesita más gimnasio. Mi trabajo es escucharte, entenderte y diseñar el plan que se ajuste a tu vida — no al revés.",
        "Trabajo desde Nueva York, en español y en inglés, y acompaño a clientes en todo el mundo a través de video y WhatsApp.",
      ],
      en: [
        "My passion for nutrition and training comes from a simple question: how do you build a healthy life that's actually sustainable? Not the perfect version that lasts three weeks — the version still working three years from now.",
        "After years working with clients from very different backgrounds, I learned there is no universal plan. Some people need structure, others need flexibility. Some need more kitchen, others need more gym. My job is to listen, understand you, and design a plan that fits your life — not the other way around.",
        "I work out of New York, in Spanish and English, and support clients all over the world via video and WhatsApp.",
      ],
    },

    credsTitle: { es: "Formación", en: "Credentials" },
    creds: {
      es: [
        { y: "2023", t: "Certificación Internacional en Coaching Nutricional" },
        { y: "2021", t: "Personal Trainer · NASM" },
        { y: "2019", t: "Máster en Nutrición Deportiva" },
        { y: "2017", t: "Licenciatura en Nutrición y Dietética" },
      ],
      en: [
        { y: "2023", t: "International Nutritional Coaching Certification" },
        { y: "2021", t: "Personal Trainer · NASM" },
        { y: "2019", t: "Master's in Sports Nutrition" },
        { y: "2017", t: "BSc Nutrition & Dietetics" },
      ],
    },

    valuesTitle: { es: "Cómo trabajo", en: "How I work" },
    values: {
      es: [
        { t: "Escuchar primero", d: "Empezamos con una conversación, no con un formulario." },
        { t: "Ciencia, sin dogma", d: "Uso evidencia actualizada, no modas." },
        { t: "Constancia > perfección", d: "Lo que sí puedes mantener es lo que de verdad funciona." },
        { t: "Tu vida, tu plan", d: "Adapto el plan a tu horario, tus gustos y tu presupuesto." },
      ],
      en: [
        { t: "Listen first", d: "We start with a conversation, not a form." },
        { t: "Science, no dogma", d: "I use up-to-date evidence, not trends." },
        { t: "Consistency > perfection", d: "What you can sustain is what actually works." },
        { t: "Your life, your plan", d: "I adapt the plan to your schedule, taste and budget." },
      ],
    },

    cta: {
      es: "¿Trabajamos juntos?",
      en: "Shall we work together?",
    },
  },

  // -------------------- CONTACT --------------------
  contactPage: {
    eyebrow: { es: "Contacto", en: "Contact" },
    title: {
      es: "Cuéntame de ti.",
      en: "Tell me about you.",
    },
    sub: {
      es: "Llena el formulario y te respondo en menos de 24 horas. Si prefieres, escríbeme directamente por WhatsApp.",
      en: "Fill out the form and I'll reply within 24 hours. If you prefer, message me directly on WhatsApp.",
    },
    form: {
      name: { es: "Nombre", en: "Name" },
      email: { es: "Email", en: "Email" },
      phone: { es: "Teléfono (opcional)", en: "Phone (optional)" },
      plan: { es: "¿Qué plan te interesa?", en: "Which plan interests you?" },
      goal: { es: "¿Cuál es tu objetivo principal?", en: "What is your main goal?" },
      message: { es: "Mensaje", en: "Message" },
      messagePlaceholder: {
        es: "Cuéntame un poco sobre ti, tus metas, qué has probado antes...",
        en: "Tell me a bit about you, your goals, what you've tried before...",
      },
      submit: { es: "Enviar mensaje", en: "Send message" },
      sending: { es: "Enviando...", en: "Sending..." },
      success: {
        es: "¡Mensaje enviado! Te respondo en menos de 24 horas.",
        en: "Message sent! I'll get back to you within 24 hours.",
      },
      required: { es: "Este campo es obligatorio", en: "This field is required" },
      invalidEmail: { es: "Email no válido", en: "Invalid email" },
      goals: {
        es: ["Perder peso", "Ganar masa muscular", "Comer mejor", "Mejorar mi rendimiento", "Otro / no estoy segura"],
        en: ["Lose weight", "Gain muscle", "Eat better", "Improve performance", "Other / not sure"],
      },
      planOptions: {
        es: ["Plan Básico", "Básico Familiar", "Plan Premium", "Plan Fitness", "Todavía no lo sé"],
        en: ["Basic Plan", "Family Basic", "Premium Plan", "Fitness Plan", "Not sure yet"],
      },
    },
    directTitle: { es: "Contacto directo", en: "Direct contact" },
    hours: { es: "Lunes a Viernes · 9am – 7pm EST", en: "Mon to Fri · 9am – 7pm EST" },
  },

  // -------------------- TESTIMONIALS --------------------
  testimonials: [
    {
      q: {
        es: "Gracias a la dieta equilibrada de Arletis, he aumentado mi energía y disfruto de mis comidas mientras mantengo una salud óptima. Su asesoría me permitió alcanzar el equilibrio perfecto y llegar a mi peso ideal.",
        en: "Thanks to Arletis's balanced approach, my energy went up and I actually enjoy my meals while staying healthy. Her guidance helped me find balance and reach my ideal weight.",
      },
      a: "María C.",
      r: { es: "Plan Premium · 6 meses", en: "Premium Plan · 6 months" },
    },
    {
      q: {
        es: "Con el plan de Arletis aprendí a comer lo que mi cuerpo necesita para sentirme llena de energía y mantener un peso saludable. ¡Me encanta lo que veo en el espejo!",
        en: "With Arletis's plan I learned to eat what my body actually needs to feel energised and stay at a healthy weight. I love what I see in the mirror.",
      },
      a: "Lucía R.",
      r: { es: "Plan Básico · 4 meses", en: "Basic Plan · 4 months" },
    },
    {
      q: {
        es: "El plan alimenticio con la Coach me ayudó a encontrar el balance perfecto. Aprendí a organizar mis comidas con porciones adecuadas y pasos claros. ¡Totalmente recomendada!",
        en: "Her plan helped me find the perfect balance. I learned to organise my weekly meals with proper portions and clear steps. Highly recommend.",
      },
      a: "Daniela P.",
      r: { es: "Básico Familiar · 8 meses", en: "Family Basic · 8 months" },
    },
  ],
};

window.CONTENT = CONTENT;
// Helper used everywhere
window.t = (lang, node) => (node && typeof node === "object" && node[lang] != null) ? node[lang] : node;
