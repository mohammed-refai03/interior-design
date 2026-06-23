/* ==========================================================================
   STACKLY APPLICATION DATA STORE (Mock Database)
   ========================================================================== */

// Demo Accounts
const DEFAULT_USERS = {
  client: {
    email: "client@stackly.com",
    password: "client123",
    name: "Eleanor Vance",
    role: "client",
    project: "Mid-Century Modern Villa",
    projectProgress: 75,
    stage: 3, // Milestone phase (1: Concept, 2: Procurement, 3: Execution, 4: Handover)
  },
  admin: {
    email: "admin@stackly.com",
    password: "admin123",
    name: "Marcus Aurelius",
    role: "admin",
  },
};

const DEFAULT_BLOGS = [
  {
    id: "blog-1",
    title: "The Art of Layering Textures in Modern Interiors",
    category: "Design Tips",
    author: "Elara Croft",
    date: "June 12, 2026",
    summary:
      "Learn how to combine leather, boucle, metals, and raw oak to create rich visual depth in neutral rooms.",
    image: "../assets/images/blog-textures-layering.webp",
    content:
      '<p>Texturing is the secret weapon of high-end interior designers. When working with neutral color palettes, the absence of vibrant colors must be compensated by a tactile landscape.</p><blockquote>"Boucle fabric on a sofa, paired with a raw, wire-brushed oak coffee table and a brushed gold lamp, creates a sensory dialogue that makes a room feel complete."</blockquote><p>We recommend starting with the largest pieces first. For example, anchor your living room with a large textured wool rug. Add a smooth leather accent chair, then layer soft cushions in linen and boucle. This progression of tactile densities makes the room feel cozy yet curated.</p>',
  },
  {
    id: "blog-2",
    title: "Maximize Space in Small Apartments",
    category: "Space Planning",
    author: "Clara Oswald",
    date: "May 28, 2026",
    summary:
      "Discover space planning techniques, double-duty furniture layouts, and lighting styles for compact loft living.",
    image: "../assets/images/blog-smallspaces.webp",
    content:
      "<p>Living in a compact urban apartment doesn't mean you have to sacrifice luxury or flow. Space planning is about creating zones and visual boundaries without erecting solid walls.</p><p>Use low-profile furniture to preserve sightlines and make ceilings feel taller. Double-duty items like storage benches or dining tables that double as workspaces are crucial. Additionally, placing mirrors opposite windows bounces natural light deep into the room, creating an illusion of open space.</p>",
  },
  {
    id: "blog-3",
    title: "Sourcing Sustainable Stone: Carrara Marble Curation",
    category: "Design Tips",
    author: "Marcus Aurelius",
    date: "June 18, 2026",
    summary:
      "A deep dive into selecting and styling Italian marble slabs while maintaining environmental standards.",
    image: "../assets/images/image-new-2.webp",
    content:
      '<p>Carrara marble is the benchmark of interior luxury, but selecting it responsibly is as important as matching its vein lines. We work exclusively with certified quarries that operate with strict eco-restoration rules.</p><blockquote>"The natural grey veins of Carrara tell a story millions of years in the making. Let it speak by pairing it with simple, minimalist hardware."</blockquote><p>When selecting marble, look for slab cuts that offer continuous vein patterns (bookmatching) for high-impact walls or waterfall kitchen counters. Seal it with organic water-based sealers to prevent staining while avoiding VOC off-gassing.</p>',
  },
  {
    id: "blog-4",
    title: "Designing the Perfect Lighting Loops for Living Rooms",
    category: "Design Tips",
    author: "Elara Croft",
    date: "June 05, 2026",
    summary:
      "Learn how to position ambient, task, and accent lighting loops to highlight textures and spaces.",
    image: "../assets/images/image-new-3.webp",
    content:
      "<p>Lighting is the lifeblood of a room. Without proper illumination loops, even the most beautiful textures will look flat and lifeless. We recommend structuring lighting into three separate loops: ambient, task, and accent.</p><p>Ambient loop is your overhead soft lighting. Task loop focuses on specific areas (like a reading lamp by a chair). Accent loop is where the magic happens: routing hidden LED strips in wood valances or spotlighting structural columns. This multi-level approach gives you total control over the mood.</p>",
  },
  {
    id: "blog-5",
    title: "The Principles of Biophilic Office Layout Design",
    category: "Space Planning",
    author: "Clara Oswald",
    date: "May 15, 2026",
    summary:
      "How to integrate plants, natural lighting flows, and organic textures to improve corporate workspace energy.",
    image: "../assets/images/image-new-4.webp",
    content:
      "<p>Biophilic design is more than adding a potted fern in the corner of an office. It is the architectural integration of nature into the human workspace. Studies show that incorporating biophilic features reduces stress levels and boosts team output by 15%.</p><p>Start by maximizing perimeter window exposures so natural daylight streams deep into desks. Replace artificial room partition walls with open wireframes climbing with ivy or modular plant grids. Use raw timber textures and earth-toned acoustic felt panels to reduce echo while maintaining natural warmth.</p>",
  },
  {
    id: "blog-6",
    title: "Teak & Terrazzo: Integrating Mid-Century Woods with Stone",
    category: "Design Tips",
    author: "Marcus Aurelius",
    date: "April 29, 2026",
    summary:
      "Discover how to blend warm teak wood panels with speckled terrazzo tiles for a retro-modern visual flow.",
    image: "../assets/images/home-blog-theater.webp",
    content:
      "<p>Blending mid-century wood tones with speckled stone yields a satisfying, tactile juxtaposition. The warm grain of teak offsets the cool, geometric terrazzo texture, bringing a sense of organic playfulness to luxury bathrooms and entryways.</p><p>We advise using terrazzo with warm beige or gold speckles to draw out the natural golden-brown highlights of teak panels. Keep adjacent walls solid off-white to let this texture dialogue take center stage without visual clutter.</p>",
  },
  {
    id: "blog-7",
    title: "The Acoustics of Sanctuary: Home Theater Design",
    category: "Space Planning",
    author: "Clara Oswald",
    date: "April 15, 2026",
    summary:
      "How to apply bamboo diffusers and sound dampening felt to design an acoustically perfect home theater.",
    image: "../assets/images/image-new-5.webp",
    content:
      "<p>Designing a high-fidelity home theater is as much about managing sound reflection as it is about screen resolution. Acoustic design is the science of preventing echoes while retaining the crisp details of speech and music.</p><p>We recommend starting with geometric acoustic wood diffusers. Placed on the rear wall, they scatter sound waves randomly, preventing the sound from bouncing directly back to your ears. Combine this with fabric-wrapped acoustic felt panels on the side walls to absorb high frequencies and eliminate secondary echoes.</p>",
  },
  {
    id: "blog-8",
    title: "Selecting the Perfect Warm Neutral Palette",
    category: "Design Tips",
    author: "Elara Croft",
    date: "March 20, 2026",
    summary:
      "Discover how to balance cream, sand, and taupe hues with warm lighting loops to create cozy spaces.",
    image: "../assets/images/image-new-7.webp",
    content:
      "<p>Neutral spaces run the risk of feeling sterile and uninviting if the color balance is off. The secret to a successful neutral room is selecting tones with warm undertones rather than cool greys.</p><p>Cream, sand, and light taupe should form the base of your room. Introduce natural timber pieces like oak or teak to anchor the colors. Finally, structure your lighting loops so that they dim to warm temperatures (2700K or lower), which draws out the rich golden pigment in the paints and textiles.</p>",
  },
  {
    id: "blog-9",
    title: "Invisible Technology: Smart Home Integration",
    category: "Design Tips",
    author: "Marcus Aurelius",
    date: "March 02, 2026",
    summary:
      "Vetting hardware loops and automated dimmers to integrate smart home technology seamlessly without visual clutter.",
    image: "../assets/images/image-new-8.webp",
    content:
      "<p>Modern luxury relies on technology, but a high-end space should never feel like a server room. Smart home features should be integrated into the architecture so they are completely invisible to the eye.</p><p>Use low-profile, screwless wall switches that match your wall finish. Place central hubs and routers inside custom ventilated cabinetry rather than leaving them exposed. Additionally, automate your window treatments and lighting loops through hidden central conduits, ensuring that technology serves the aesthetics of the room.</p>",
  },
  {
    id: "blog-10",
    title: "The New Office: Designing Ergonomic Collaborative Hubs",
    category: "Space Planning",
    author: "Clara Oswald",
    date: "February 14, 2026",
    summary:
      "Discover space planning guidelines to build flexible hot-desking zones and acoustic meeting booths.",
    image: "../assets/images/image-new-9.webp",
    content:
      "<p>The traditional corporate layout is changing. Today's workspaces need to support both collaborative sprints and deep, quiet individual focus. The layout must reflect this duality.</p><p>Establish active collaboration zones near perimeter window walls to leverage natural light and energy. Conversely, tuck private acoustic phone booths and quiet desk pods into the interior core of the building. Using felt partitions and warm wood cladding controls sound pollution and makes the workplace feel creative yet calm.</p>",
  },
];

const DEFAULT_PROJECTS = [
  {
    id: "project-1",
    title: "Minimalist Master Bedroom",
    category: "residential",
    summary:
      "A sleek, warm minimalist master bedroom featuring custom teak wall cladding, low-profile bed framing, and integrated LED backlight panels. The layout is optimized to offer a zen resting atmosphere.",
    image: "../assets/images/image-new-14.webp",
    client: "Eleanor Vance",
    budget: "$45,000",
    completionDate: "May 10, 2026",
    status: "Completed",
  },
  {
    id: "project-2",
    title: "Mid-Century Modern Villa",
    category: "residential",
    summary:
      "A complete multi-floor villa renovation blending classic mid-century teak furniture configurations with modern open-concept space planning. Currently in the on-site carpentry phase.",
    image: "../assets/images/portfolio-livingroom.webp",
    client: "Eleanor Vance",
    budget: "$120,000",
    completionDate: "July 26, 2026 (Est.)",
    status: "In Progress",
  },
  {
    id: "project-3",
    title: "Vanguard Corporate Hub",
    category: "commercial",
    summary:
      "An immersive open-plan office layout designed to promote brand identity and workplace flexibility. Highlighting acoustic ceiling baffles and glass meeting spaces.",
    image: "../assets/images/portfolio-office.webp",
    client: "Vanguard Corp",
    budget: "$250,000",
    completionDate: "April 18, 2026",
    status: "Completed",
  },
  {
    id: "project-4",
    title: "The Golden Bean Cafe",
    category: "commercial",
    summary:
      "A boutique commercial espresso bar highlighting custom brass wireframe details, raw concrete walls, and warm ambient spotlights designed to curate a luxury coffee lounge vibe.",
    image: "../assets/images/portfolio-cafe.webp",
    client: "Aroma Hospitality",
    budget: "$65,000",
    completionDate: "June 02, 2026",
    status: "Completed",
  },
  {
    id: "project-5",
    title: "Aetheria Penthouse Loft",
    category: "residential",
    summary:
      "A luxury high-rise penthouse loft combining industrial brick accents with sleek modern walnut cabinetry, polished concrete floors, and double-height ceiling voids for maximum spatial depth.",
    image: "../assets/images/portfolio-penthouse.webp",
    client: "Dorian Sterling",
    budget: "$185,000",
    completionDate: "March 15, 2026",
    status: "Completed",
  },
  {
    id: "project-6",
    title: "Lumina Wellness Sanctuary",
    category: "commercial",
    summary:
      "A state-of-the-art sensory relaxation spa environment focusing on organic curves, acoustic panel dampening, indirect warm illumination, and custom cedar-cladded relaxation capsules.",
    image: "../assets/images/portfolio-wellness.webp",
    client: "Soma Wellness Corp",
    budget: "$310,000",
    completionDate: "December 20, 2025",
    status: "Completed",
  },
  {
    id: "project-7",
    title: "Verdant Biophilic Residence",
    category: "residential",
    summary:
      "An eco-conscious smart home emphasizing biophilic layouts, indoor plant walls, local slate finishes, solar lighting loops, and an integrated central open atrium for natural ventilation.",
    image: "../assets/images/portfolio-biophilic.webp",
    client: "Oliver & Clara Finch",
    budget: "$145,000",
    completionDate: "August 10, 2026 (Est.)",
    status: "In Progress",
  },
  {
    id: "project-8",
    title: "Serenade Acoustic Lounge",
    category: "commercial",
    summary:
      "A private high-fidelity listening lounge featuring acoustic soundproofing, bespoke walnut wood acoustic diffuser arrays, luxury velvet seating layouts, and low-glare ambient lighting designs.",
    image: "../assets/images/portfolio-listening.webp",
    client: "Binaural Records",
    budget: "$95,000",
    completionDate: "January 14, 2026",
  },
  {
    id: "project-9",
    title: "Symphony Concert Studio",
    category: "commercial",
    summary:
      "A state-of-the-art acoustic rehearsal studio designed for orchestral fidelity, integrating walnut wood diffusors and micro-perforated acoustic panel arrays.",
    image: "../assets/images/project-symphony.webp",
    client: "Orchestra Trust",
    budget: "$180,000",
    completionDate: "March 24, 2026",
    status: "Completed",
  },
  {
    id: "project-10",
    title: "The Terrazzo Spa Suite",
    category: "commercial",
    summary:
      "A private spa bathroom suite incorporating golden-veined terrazzo tile floors, custom teak storage panels, and vapor-proof ambient LED loops.",
    image: "../assets/images/project-terrazzo-spa.webp",
    client: "Soma Wellness Corp",
    budget: "$75,000",
    completionDate: "January 10, 2026",
    status: "Completed",
  },
  {
    id: "project-11",
    title: "Zen Garden Conservatory",
    category: "residential",
    summary:
      "An extension conservatory featuring triple-glazed biophilic glass panels, micro-climate soil beds, and custom-milled white oak architectural frame trusses.",
    image: "../assets/images/project-zen-conservatory.webp",
    client: "Arthur & Maya Dent",
    budget: "$55,000",
    completionDate: "April 05, 2026",
    status: "Completed",
  },
  {
    id: "project-12",
    title: "Soho Loft Workspace",
    category: "commercial",
    summary:
      "A modular, open-concept creative office styling showcasing steel frame doors, high-density acoustic partition screens, and custom task spotlight rings.",
    image: "../assets/images/image-new-14.webp",
    client: "Apex Creative Agency",
    budget: "$140,000",
    completionDate: "June 15, 2026",
    status: "Completed",
  },
];

const DEFAULT_MESSAGES = [
  {
    sender: "designer",
    text: "Hi Eleanor, hope you are doing well! I've uploaded the draft space planning blueprints for the master bedroom. Please review them in your Document Vault.",
    time: "10:30 AM",
  },
  {
    sender: "client",
    text: "Thanks Marcus! They look beautiful. I especially love the teak wood paneling behind the bed.",
    time: "11:15 AM",
  },
  {
    sender: "designer",
    text: "Excellent. We've ordered the teak panels and the carpenters are scheduled to start execution on site this Thursday.",
    time: "11:32 AM",
  },
];

const DEFAULT_DOCUMENTS = [
  {
    id: "doc-1",
    name: "Villa_Layout_Blueprints_v2.pdf",
    size: "4.2 MB",
    date: "May 12, 2026",
  },
  {
    id: "doc-2",
    name: "Teak_Paneling_Material_Spec.pdf",
    size: "1.8 MB",
    date: "June 02, 2026",
  },
  {
    id: "doc-3",
    name: "Villa_Acoustic_Lighting_Plans.dwg",
    size: "12.5 MB",
    date: "June 15, 2026",
  },
  {
    id: "doc-4",
    name: "HVAC_Ventilation_Circuitry.dwg",
    size: "6.2 MB",
    date: "June 18, 2026",
  },
  {
    id: "doc-5",
    name: "Bespoke_Italian_Marble_Source_Cert.pdf",
    size: "1.2 MB",
    date: "June 19, 2026",
  },
  {
    id: "doc-6",
    name: "Signed_Client_Agreement_Executed.pdf",
    size: "1.5 MB",
    date: "May 10, 2026",
  },
  {
    id: "doc-7",
    name: "Client_Feedback_Initial_Sketches.png",
    size: "3.0 MB",
    date: "May 14, 2026",
  },
];

const DEFAULT_INVOICES = [
  {
    id: "INV-2026-001",
    description: "Spatial Layout Consultation & Floorplanning Fee",
    date: "May 15, 2026",
    amount: "$15,000",
    status: "Paid",
  },
  {
    id: "INV-2026-002",
    description: "Bespoke Material Procurement & Joinery Deposits",
    date: "June 05, 2026",
    amount: "$45,000",
    status: "Paid",
  },
  {
    id: "INV-2026-003",
    description: "On-site Installation & Supervision Progress Payment",
    date: "June 25, 2026",
    amount: "$30,000",
    status: "Pending",
  },
];

const DEFAULT_QUERIES = [
  {
    id: "q-1",
    name: "John Doe",
    email: "john@doe.com",
    service: "residential-styling",
    message:
      "Looking for styling help for my new penthouse loft in Brooklyn. I prefer high-end dark walnut aesthetics.",
    date: "June 18, 2026",
    status: "Unread",
  },
];

// Helper to interact with LocalStorage
function getStorage(key, defaultValue) {
  const data = localStorage.getItem(key);
  if (!data) {
    if (Array.isArray(defaultValue)) {
      defaultValue.forEach(item => {
        if (item.image && item.image.startsWith('./assets/')) {
          item.image = item.image.substring(1);
        }
      });
    }
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
  try {
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed) && Array.isArray(defaultValue)) {
      let updated = false;
      defaultValue.forEach(defItem => {
        if (defItem.image && defItem.image.startsWith('./assets/')) {
          defItem.image = defItem.image.substring(1);
          updated = true;
        }
        const parsedItemIdx = parsed.findIndex(p => p.id === defItem.id);
        if (parsedItemIdx !== -1) {
          const parsedItem = parsed[parsedItemIdx];
          for (const k in defItem) {
            if (parsedItem[k] !== defItem[k]) {
              parsedItem[k] = defItem[k];
              updated = true;
            }
          }
        } else {
          parsed.push(defItem);
          updated = true;
        }
      });
      parsed.forEach(item => {
        if (item.image && item.image.startsWith('./assets/')) {
          item.image = item.image.substring(1);
          updated = true;
        }
      });
      if (updated) {
        localStorage.setItem(key, JSON.stringify(parsed));
      }
      return parsed;
    }
    return parsed;
  } catch (e) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

const db = {
  // Current logged in user (stored in sessionStorage to persist across reloads)
  getCurrentUser() {
    const user = sessionStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  },

  login(email, password, role = "client") {
    let users = getStorage("stackly_users", DEFAULT_USERS);
    let matchedUser = null;

    if (email === users.client.email && password === users.client.password) {
      matchedUser = users.client;
    } else if (
      email === users.admin.email &&
      password === users.admin.password
    ) {
      matchedUser = users.admin;
    } else {
      // Find or create custom user on-the-fly to prevent Unauthorized errors
      users.customUsers = users.customUsers || [];
      let custom = users.customUsers.find((u) => u.email === email);
      if (!custom) {
        const namePart = email.split("@")[0] || "Guest";
        const name = namePart.charAt(0).toUpperCase() + namePart.slice(1);
        custom = {
          name: name,
          email: email,
          password: password,
          role: role,
          project: role === "client" ? "Bespoke Residential Project" : "",
          projectProgress: role === "client" ? 25 : 0,
          stage: role === "client" ? 1 : 1,
        };
        users.customUsers.push(custom);
        setStorage("stackly_users", users);
      } else {
        // Update password and role to match inputs
        custom.password = password;
        custom.role = role;
        setStorage("stackly_users", users);
      }
      matchedUser = custom;
    }

    if (matchedUser) {
      // Enforce the requested role
      matchedUser.role = role;
      sessionStorage.setItem("currentUser", JSON.stringify(matchedUser));
      return matchedUser;
    }
    return null;
  },

  register(name, email, password, role) {
    let users = getStorage("stackly_users", DEFAULT_USERS);
    users.customUsers = users.customUsers || [];

    if (
      users.client.email === email ||
      users.admin.email === email ||
      users.customUsers.some((u) => u.email === email)
    ) {
      return false;
    }

    users.customUsers.push({
      name,
      email,
      password,
      role,
      project: role === "client" ? "Bespoke Residential Project" : "",
      projectProgress: role === "client" ? 25 : 0,
      stage: role === "client" ? 1 : 1,
    });

    setStorage("stackly_users", users);
    return true;
  },

  logout() {
    sessionStorage.removeItem("currentUser");
  },

  // Projects
  getProjects() {
    return getStorage("stackly_projects", DEFAULT_PROJECTS);
  },

  updateProjectStage(id, stage) {
    let projects = this.getProjects();
    const projIdx = projects.findIndex((p) => p.id === id);
    if (projIdx !== -1) {
      projects[projIdx].status = stage === 4 ? "Completed" : "In Progress";
      if (stage === 4) {
        projects[projIdx].completionDate = new Date().toLocaleDateString(
          "en-US",
          { month: "long", day: "numeric", year: "numeric" },
        );
      }
      setStorage("stackly_projects", projects);
    }

    // Update client user progress if it's their project
    let users = getStorage("stackly_users", DEFAULT_USERS);
    if (id === "project-2") {
      users.client.stage = stage;
      users.client.projectProgress =
        stage === 1 ? 25 : stage === 2 ? 50 : stage === 3 ? 75 : 100;
      setStorage("stackly_users", users);

      // Update session user if logged in
      const currentUser = this.getCurrentUser();
      if (currentUser && currentUser.role === "client") {
        currentUser.stage = users.client.stage;
        currentUser.projectProgress = users.client.projectProgress;
        sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
      }
    }
  },

  // Blogs
  getBlogs() {
    return getStorage("stackly_blogs", DEFAULT_BLOGS);
  },

  addBlog(blog) {
    let blogs = this.getBlogs();
    blogs.unshift(blog);
    setStorage("stackly_blogs", blogs);
  },

  // Messages
  getMessages() {
    return getStorage("stackly_messages", DEFAULT_MESSAGES);
  },

  addMessage(msg) {
    let msgs = this.getMessages();
    msgs.push(msg);
    setStorage("stackly_messages", msgs);
  },

  // Documents
  getDocuments() {
    return getStorage("stackly_documents", DEFAULT_DOCUMENTS);
  },

  addDocument(doc) {
    let docs = this.getDocuments();
    docs.unshift(doc);
    setStorage("stackly_documents", docs);
  },

  // Invoices
  getInvoices() {
    return getStorage("stackly_invoices", DEFAULT_INVOICES);
  },

  payInvoice(id) {
    let invoices = this.getInvoices();
    const idx = invoices.findIndex((i) => i.id === id);
    if (idx !== -1) {
      invoices[idx].status = "Paid";
      setStorage("stackly_invoices", invoices);
    }
  },

  addInvoice(invoice) {
    let invoices = this.getInvoices();
    invoices.push(invoice);
    setStorage("stackly_invoices", invoices);
  },

  // Queries (Contact Inbox)
  getQueries() {
    return getStorage("stackly_queries", DEFAULT_QUERIES);
  },

  addQuery(query) {
    let queries = this.getQueries();
    queries.unshift(query);
    setStorage("stackly_queries", queries);
  },

  updateQueryStatus(id, status) {
    let queries = this.getQueries();
    const idx = queries.findIndex((q) => q.id === id);
    if (idx !== -1) {
      queries[idx].status = status;
      setStorage("stackly_queries", queries);
    }
  },

  deleteQuery(id) {
    let queries = this.getQueries();
    queries = queries.filter((q) => q.id !== id);
    setStorage("stackly_queries", queries);
  },
};

export default db;

