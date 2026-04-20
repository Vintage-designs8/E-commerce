(function () {
  const siteData = {
    categories: [
      { name: "Food & Beverage", icon: "fa-utensils", description: "Restaurants, cafes, bakeries, and local food brands." },
      { name: "Tech Services", icon: "fa-laptop-code", description: "IT support, web design, software, and digital services." },
      { name: "Fashion", icon: "fa-shirt", description: "Boutiques, tailoring, clothing labels, and accessories." },
      { name: "Health & Beauty", icon: "fa-spa", description: "Salons, spas, skincare clinics, and wellness brands." },
      { name: "Real Estate", icon: "fa-building", description: "Agents, brokers, rentals, and property services." },
      { name: "Education", icon: "fa-graduation-cap", description: "Tutors, schools, training centers, and academies." },
      { name: "Transport", icon: "fa-truck-fast", description: "Delivery, logistics, moving, and transport operators." },
      { name: "Retail", icon: "fa-bag-shopping", description: "Stores, gift shops, home goods, and specialty retail." },
      { name: "Professional Services", icon: "fa-briefcase", description: "Legal, finance, consulting, marketing, and more." }
    ],
    listings: [
      {
        id: 1,
        name: "Harbor Roast Cafe",
        category: "Food & Beverage",
        location: "Seattle, USA",
        rating: 4.9,
        popularity: 98,
        createdAt: "2026-04-14",
        shortDescription: "Small-batch coffee, artisan pastries, and cozy brunch service in the heart of the city.",
        description: "Harbor Roast Cafe is a neighborhood coffee house known for craft espresso, small-batch roasting, and a warm atmosphere that keeps both locals and remote workers coming back. The menu blends seasonal pastries, brunch favorites, and catering options for office events and private gatherings.",
        phone: "+1 (206) 555-0101",
        email: "hello@harborroast.example",
        whatsapp: "+12065550101",
        website: "https://harborroast.example",
        city: "Seattle",
        country: "USA",
        hours: [
          ["Monday", "6:30 AM - 7:00 PM"],
          ["Tuesday", "6:30 AM - 7:00 PM"],
          ["Wednesday", "6:30 AM - 7:00 PM"],
          ["Thursday", "6:30 AM - 7:00 PM"],
          ["Friday", "6:30 AM - 7:00 PM"],
          ["Saturday", "8:00 AM - 5:00 PM"],
          ["Sunday", "8:00 AM - 4:00 PM"]
        ],
        reviews: [
          { name: "Nina Patel", rating: 5, text: "Excellent coffee, quick service, and one of the best pastry selections in town." },
          { name: "James Carter", rating: 5, text: "Their catering setup for our team event was smooth and beautifully presented." },
          { name: "Lola Smith", rating: 4, text: "Great atmosphere and very friendly staff. I especially loved the pour-over menu." }
        ],
        social: {
          instagram: "#",
          facebook: "#",
          linkedin: "#"
        },
        featured: true,
        images: [
          "https://picsum.photos/seed/harbor-roast-1/1200/800",
          "https://picsum.photos/seed/harbor-roast-2/1200/800",
          "https://picsum.photos/seed/harbor-roast-3/1200/800",
          "https://picsum.photos/seed/harbor-roast-4/1200/800"
        ]
      },
      {
        id: 2,
        name: "Northwind IT Support",
        category: "Tech Services",
        location: "Austin, USA",
        rating: 4.8,
        popularity: 95,
        createdAt: "2026-04-18",
        shortDescription: "Managed IT, cybersecurity checks, and fast-response tech support for growing teams.",
        description: "Northwind IT Support helps startups and established businesses keep systems secure, productive, and scalable. Services include managed IT support, network monitoring, device setup, cloud migration guidance, and cybersecurity assessments tailored to small and midsize organizations.",
        phone: "+1 (512) 555-0180",
        email: "team@northwindit.example",
        whatsapp: "+15125550180",
        website: "https://northwindit.example",
        city: "Austin",
        country: "USA",
        hours: [
          ["Monday", "8:00 AM - 6:00 PM"],
          ["Tuesday", "8:00 AM - 6:00 PM"],
          ["Wednesday", "8:00 AM - 6:00 PM"],
          ["Thursday", "8:00 AM - 6:00 PM"],
          ["Friday", "8:00 AM - 6:00 PM"],
          ["Saturday", "On-call only"],
          ["Sunday", "Closed"]
        ],
        reviews: [
          { name: "Megan Wu", rating: 5, text: "Fast response time and clear communication when our office network went down." },
          { name: "Carlos Diaz", rating: 4, text: "Professional onboarding and solid monthly reporting for our leadership team." }
        ],
        social: {
          linkedin: "#",
          facebook: "#"
        },
        featured: true,
        images: [
          "https://picsum.photos/seed/northwind-1/1200/800",
          "https://picsum.photos/seed/northwind-2/1200/800",
          "https://picsum.photos/seed/northwind-3/1200/800",
          "https://picsum.photos/seed/northwind-4/1200/800"
        ]
      },
      {
        id: 3,
        name: "Velvet Thread Studio",
        category: "Fashion",
        location: "Atlanta, USA",
        rating: 4.7,
        popularity: 88,
        createdAt: "2026-04-10",
        shortDescription: "Custom tailoring, event styling, and polished ready-to-wear collections.",
        description: "Velvet Thread Studio creates modern looks for work, weddings, and special events. The studio offers custom tailoring, alteration services, private fittings, and capsule wardrobe advice for clients who want polished pieces that fit beautifully and last.",
        phone: "+1 (404) 555-0131",
        email: "bookings@velvetthread.example",
        whatsapp: "+14045550131",
        website: "https://velvetthread.example",
        city: "Atlanta",
        country: "USA",
        hours: [
          ["Tuesday", "10:00 AM - 6:30 PM"],
          ["Wednesday", "10:00 AM - 6:30 PM"],
          ["Thursday", "10:00 AM - 6:30 PM"],
          ["Friday", "10:00 AM - 6:30 PM"],
          ["Saturday", "11:00 AM - 5:00 PM"],
          ["Sunday", "Closed"],
          ["Monday", "Closed"]
        ],
        reviews: [
          { name: "Rita Hope", rating: 5, text: "My wedding alterations were flawless and completed right on schedule." },
          { name: "Grace Kim", rating: 4, text: "Stylish team with a thoughtful fitting process and excellent fabric guidance." }
        ],
        social: {
          instagram: "#",
          pinterest: "#"
        },
        featured: false,
        images: [
          "https://picsum.photos/seed/velvet-thread-1/1200/800",
          "https://picsum.photos/seed/velvet-thread-2/1200/800",
          "https://picsum.photos/seed/velvet-thread-3/1200/800"
        ]
      },
      {
        id: 4,
        name: "Bloom Skin Bar",
        category: "Health & Beauty",
        location: "Los Angeles, USA",
        rating: 4.8,
        popularity: 93,
        createdAt: "2026-04-05",
        shortDescription: "Inclusive skincare treatments, facials, and personalized skin health plans.",
        description: "Bloom Skin Bar focuses on gentle, science-informed skincare for a wide range of skin types and tones. Their team provides facials, consultations, treatment plans, and wellness-focused recommendations with a warm and welcoming client experience.",
        phone: "+1 (323) 555-0140",
        email: "care@bloomskinbar.example",
        whatsapp: "+13235550140",
        website: "https://bloomskinbar.example",
        city: "Los Angeles",
        country: "USA",
        hours: [
          ["Monday", "9:00 AM - 8:00 PM"],
          ["Tuesday", "9:00 AM - 8:00 PM"],
          ["Wednesday", "9:00 AM - 8:00 PM"],
          ["Thursday", "9:00 AM - 8:00 PM"],
          ["Friday", "9:00 AM - 8:00 PM"],
          ["Saturday", "10:00 AM - 6:00 PM"],
          ["Sunday", "11:00 AM - 4:00 PM"]
        ],
        reviews: [
          { name: "Anika Ross", rating: 5, text: "The consultation was thorough and the treatment plan felt very tailored to me." },
          { name: "Mel Daniels", rating: 4, text: "Beautiful space and professional staff. I noticed a real improvement in my skin." }
        ],
        social: {
          instagram: "#",
          facebook: "#"
        },
        featured: true,
        images: [
          "https://picsum.photos/seed/bloom-skin-1/1200/800",
          "https://picsum.photos/seed/bloom-skin-2/1200/800",
          "https://picsum.photos/seed/bloom-skin-3/1200/800"
        ]
      },
      {
        id: 5,
        name: "Summit Realty Group",
        category: "Real Estate",
        location: "Denver, USA",
        rating: 4.6,
        popularity: 85,
        createdAt: "2026-04-08",
        shortDescription: "Residential sales, property search guidance, and local market expertise.",
        description: "Summit Realty Group supports buyers, sellers, and relocating professionals with responsive service and strong neighborhood knowledge. Their team helps with pricing strategy, home tours, rental support, and move-in planning to make the process smoother from start to finish.",
        phone: "+1 (720) 555-0199",
        email: "info@summitrealty.example",
        whatsapp: "+17205550199",
        website: "https://summitrealty.example",
        city: "Denver",
        country: "USA",
        hours: [
          ["Monday", "8:30 AM - 6:00 PM"],
          ["Tuesday", "8:30 AM - 6:00 PM"],
          ["Wednesday", "8:30 AM - 6:00 PM"],
          ["Thursday", "8:30 AM - 6:00 PM"],
          ["Friday", "8:30 AM - 6:00 PM"],
          ["Saturday", "10:00 AM - 2:00 PM"],
          ["Sunday", "By appointment"]
        ],
        reviews: [
          { name: "Devin Price", rating: 5, text: "They made our relocation process far less stressful and always kept us updated." },
          { name: "Kara White", rating: 4, text: "Very knowledgeable about neighborhoods and realistic in pricing advice." }
        ],
        social: {
          linkedin: "#",
          facebook: "#"
        },
        featured: false,
        images: [
          "https://picsum.photos/seed/summit-realty-1/1200/800",
          "https://picsum.photos/seed/summit-realty-2/1200/800",
          "https://picsum.photos/seed/summit-realty-3/1200/800"
        ]
      },
      {
        id: 6,
        name: "Brightpath Tutors",
        category: "Education",
        location: "Chicago, USA",
        rating: 4.7,
        popularity: 81,
        createdAt: "2026-04-12",
        shortDescription: "Math, science, SAT prep, and academic coaching for students and families.",
        description: "Brightpath Tutors offers one-on-one support for students who need structured, confidence-building guidance in key academic subjects. Families can choose virtual or in-person sessions, small group prep classes, and custom study plans that adapt to each learner’s pace and goals.",
        phone: "+1 (312) 555-0135",
        email: "hello@brightpath.example",
        whatsapp: "+13125550135",
        website: "https://brightpath.example",
        city: "Chicago",
        country: "USA",
        hours: [
          ["Monday", "8:00 AM - 9:00 PM"],
          ["Tuesday", "8:00 AM - 9:00 PM"],
          ["Wednesday", "8:00 AM - 9:00 PM"],
          ["Thursday", "8:00 AM - 9:00 PM"],
          ["Friday", "8:00 AM - 8:00 PM"],
          ["Saturday", "9:00 AM - 5:00 PM"],
          ["Sunday", "10:00 AM - 4:00 PM"]
        ],
        reviews: [
          { name: "Sana Noor", rating: 5, text: "Our son gained confidence quickly and the tutors communicate clearly with parents." },
          { name: "Brian Lee", rating: 4, text: "Great scheduling flexibility and the SAT prep materials were very helpful." }
        ],
        social: {
          facebook: "#",
          instagram: "#"
        },
        featured: false,
        images: [
          "https://picsum.photos/seed/brightpath-1/1200/800",
          "https://picsum.photos/seed/brightpath-2/1200/800",
          "https://picsum.photos/seed/brightpath-3/1200/800"
        ]
      },
      {
        id: 7,
        name: "MetroFleet Dispatch",
        category: "Transport",
        location: "Phoenix, USA",
        rating: 4.5,
        popularity: 79,
        createdAt: "2026-04-03",
        shortDescription: "Courier and same-day logistics with business-friendly dispatch support.",
        description: "MetroFleet Dispatch specializes in local courier services, scheduled deliveries, and live dispatch coordination for offices, retailers, and service companies. Their team emphasizes reliability, transparency, and real-time communication throughout each route.",
        phone: "+1 (602) 555-0168",
        email: "dispatch@metrofleet.example",
        whatsapp: "+16025550168",
        website: "https://metrofleet.example",
        city: "Phoenix",
        country: "USA",
        hours: [
          ["Monday", "6:00 AM - 10:00 PM"],
          ["Tuesday", "6:00 AM - 10:00 PM"],
          ["Wednesday", "6:00 AM - 10:00 PM"],
          ["Thursday", "6:00 AM - 10:00 PM"],
          ["Friday", "6:00 AM - 10:00 PM"],
          ["Saturday", "7:00 AM - 6:00 PM"],
          ["Sunday", "Closed"]
        ],
        reviews: [
          { name: "Helen Chu", rating: 4, text: "Consistent courier partner for our retail store and very easy to work with." },
          { name: "Darnell West", rating: 5, text: "The real-time updates make customer communication much easier for our team." }
        ],
        social: {
          linkedin: "#"
        },
        featured: true,
        images: [
          "https://picsum.photos/seed/metrofleet-1/1200/800",
          "https://picsum.photos/seed/metrofleet-2/1200/800",
          "https://picsum.photos/seed/metrofleet-3/1200/800"
        ]
      },
      {
        id: 8,
        name: "Oak & Market Goods",
        category: "Retail",
        location: "Portland, USA",
        rating: 4.7,
        popularity: 83,
        createdAt: "2026-04-16",
        shortDescription: "Curated home goods, sustainable gifts, and beautiful seasonal collections.",
        description: "Oak & Market Goods is a boutique retailer featuring home accents, gift boxes, and sustainable everyday items. The shop works with independent makers and also offers bulk gifting support for company events and seasonal client campaigns.",
        phone: "+1 (503) 555-0172",
        email: "hello@oakandmarket.example",
        whatsapp: "+15035550172",
        website: "https://oakandmarket.example",
        city: "Portland",
        country: "USA",
        hours: [
          ["Monday", "10:00 AM - 6:00 PM"],
          ["Tuesday", "10:00 AM - 6:00 PM"],
          ["Wednesday", "10:00 AM - 6:00 PM"],
          ["Thursday", "10:00 AM - 6:00 PM"],
          ["Friday", "10:00 AM - 7:00 PM"],
          ["Saturday", "10:00 AM - 7:00 PM"],
          ["Sunday", "11:00 AM - 5:00 PM"]
        ],
        reviews: [
          { name: "Ava Brooks", rating: 5, text: "Lovely product curation and very thoughtful gift packaging." },
          { name: "Kirk Mason", rating: 4, text: "Helpful team and a great place to find client gifts that feel special." }
        ],
        social: {
          instagram: "#",
          facebook: "#"
        },
        featured: false,
        images: [
          "https://picsum.photos/seed/oak-market-1/1200/800",
          "https://picsum.photos/seed/oak-market-2/1200/800",
          "https://picsum.photos/seed/oak-market-3/1200/800"
        ]
      },
      {
        id: 9,
        name: "Clearline Legal Services",
        category: "Professional Services",
        location: "New York, USA",
        rating: 4.9,
        popularity: 97,
        createdAt: "2026-04-11",
        shortDescription: "Contract review, startup legal guidance, and business compliance support.",
        description: "Clearline Legal Services works with founders, small business owners, and creative teams on contracts, compliance, and operational risk. Their practical, plain-language approach helps clients make confident business decisions without the overwhelm.",
        phone: "+1 (646) 555-0187",
        email: "contact@clearlinelegal.example",
        whatsapp: "+16465550187",
        website: "https://clearlinelegal.example",
        city: "New York",
        country: "USA",
        hours: [
          ["Monday", "9:00 AM - 5:30 PM"],
          ["Tuesday", "9:00 AM - 5:30 PM"],
          ["Wednesday", "9:00 AM - 5:30 PM"],
          ["Thursday", "9:00 AM - 5:30 PM"],
          ["Friday", "9:00 AM - 5:30 PM"],
          ["Saturday", "Closed"],
          ["Sunday", "Closed"]
        ],
        reviews: [
          { name: "Tori Reed", rating: 5, text: "They explained complex contract clauses in a way our whole team could understand." },
          { name: "Imran Ali", rating: 5, text: "Responsive, detail-oriented, and great at balancing legal caution with business realities." }
        ],
        social: {
          linkedin: "#",
          facebook: "#"
        },
        featured: true,
        images: [
          "https://picsum.photos/seed/clearline-1/1200/800",
          "https://picsum.photos/seed/clearline-2/1200/800",
          "https://picsum.photos/seed/clearline-3/1200/800"
        ]
      },
      {
        id: 10,
        name: "Studio Kind Design",
        category: "Professional Services",
        location: "San Diego, USA",
        rating: 4.6,
        popularity: 76,
        createdAt: "2026-04-01",
        shortDescription: "Brand strategy, website design, and visual identity systems for small businesses.",
        description: "Studio Kind Design helps businesses present themselves clearly and consistently with thoughtful branding, polished websites, and marketing materials that feel both modern and approachable. They work especially well with founder-led service brands and local retailers.",
        phone: "+1 (619) 555-0165",
        email: "hello@studiokind.example",
        whatsapp: "+16195550165",
        website: "https://studiokind.example",
        city: "San Diego",
        country: "USA",
        hours: [
          ["Monday", "9:00 AM - 5:00 PM"],
          ["Tuesday", "9:00 AM - 5:00 PM"],
          ["Wednesday", "9:00 AM - 5:00 PM"],
          ["Thursday", "9:00 AM - 5:00 PM"],
          ["Friday", "9:00 AM - 3:00 PM"],
          ["Saturday", "Closed"],
          ["Sunday", "Closed"]
        ],
        reviews: [
          { name: "Marissa Cole", rating: 5, text: "Our new brand system looks polished and finally feels like our business." },
          { name: "Ethan Park", rating: 4, text: "Strong communication and a process that kept the project organized." }
        ],
        social: {
          instagram: "#",
          linkedin: "#"
        },
        featured: false,
        images: [
          "https://picsum.photos/seed/studio-kind-1/1200/800",
          "https://picsum.photos/seed/studio-kind-2/1200/800",
          "https://picsum.photos/seed/studio-kind-3/1200/800"
        ]
      },
      {
        id: 11,
        name: "Fresh Fork Catering",
        category: "Food & Beverage",
        location: "Houston, USA",
        rating: 4.7,
        popularity: 82,
        createdAt: "2026-04-09",
        shortDescription: "Corporate lunches, private events, and flavor-packed menus with flexible delivery.",
        description: "Fresh Fork Catering serves offices, events, and social gatherings with customizable menus built around fresh ingredients and reliable service. Their team handles everything from setup to dietary accommodations, making event planning a lot easier for busy organizers.",
        phone: "+1 (713) 555-0127",
        email: "orders@freshfork.example",
        whatsapp: "+17135550127",
        website: "https://freshfork.example",
        city: "Houston",
        country: "USA",
        hours: [
          ["Monday", "7:00 AM - 6:00 PM"],
          ["Tuesday", "7:00 AM - 6:00 PM"],
          ["Wednesday", "7:00 AM - 6:00 PM"],
          ["Thursday", "7:00 AM - 6:00 PM"],
          ["Friday", "7:00 AM - 6:00 PM"],
          ["Saturday", "By booking"],
          ["Sunday", "By booking"]
        ],
        reviews: [
          { name: "Taylor Young", rating: 5, text: "Delivered on time, looked great, and the menu worked for a wide range of dietary needs." },
          { name: "Nicole James", rating: 4, text: "Easy ordering process and a strong presentation for our workshop lunch." }
        ],
        social: {
          instagram: "#",
          facebook: "#"
        },
        featured: false,
        images: [
          "https://picsum.photos/seed/fresh-fork-1/1200/800",
          "https://picsum.photos/seed/fresh-fork-2/1200/800",
          "https://picsum.photos/seed/fresh-fork-3/1200/800"
        ]
      },
      {
        id: 12,
        name: "LearnLab Academy",
        category: "Education",
        location: "Toronto, Canada",
        rating: 4.8,
        popularity: 90,
        createdAt: "2026-04-17",
        shortDescription: "Career-focused training programs, live workshops, and practical skill development.",
        description: "LearnLab Academy provides short-form training programs for professionals who want to strengthen practical skills in communication, digital tools, and career growth. Their workshops are designed to be engaging, accessible, and immediately useful in real work settings.",
        phone: "+1 (416) 555-0148",
        email: "hello@learnlab.example",
        whatsapp: "+14165550148",
        website: "https://learnlab.example",
        city: "Toronto",
        country: "Canada",
        hours: [
          ["Monday", "9:00 AM - 7:00 PM"],
          ["Tuesday", "9:00 AM - 7:00 PM"],
          ["Wednesday", "9:00 AM - 7:00 PM"],
          ["Thursday", "9:00 AM - 7:00 PM"],
          ["Friday", "9:00 AM - 5:00 PM"],
          ["Saturday", "10:00 AM - 3:00 PM"],
          ["Sunday", "Closed"]
        ],
        reviews: [
          { name: "Noah Lin", rating: 5, text: "Very practical workshops with trainers who understand the realities of modern teams." },
          { name: "Priya Shah", rating: 4, text: "Well organized and easy to follow even for busy professionals." }
        ],
        social: {
          linkedin: "#",
          instagram: "#"
        },
        featured: true,
        images: [
          "https://picsum.photos/seed/learnlab-1/1200/800",
          "https://picsum.photos/seed/learnlab-2/1200/800",
          "https://picsum.photos/seed/learnlab-3/1200/800"
        ]
      }
    ]
  };

  function iconForCategory(categoryName) {
    const category = siteData.categories.find(function (item) {
      return item.name === categoryName;
    });

    return category ? category.icon : "fa-store";
  }

  function ratingStars(value) {
    const rounded = Math.round(value);
    let stars = "";

    for (let i = 0; i < 5; i += 1) {
      stars += i < rounded ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }

    return stars;
  }

  function listingCard(listing) {
    return (
      '<article class="listing-card card">' +
      '  <div class="listing-media">' +
      '    <img src="' + listing.images[0] + '" alt="' + listing.name + '">' +
      (listing.featured ? '    <span class="listing-badge">Featured</span>' : "") +
      "  </div>" +
      '  <div class="listing-body">' +
      '    <span class="category-pill"><i class="fa-solid ' + iconForCategory(listing.category) + '"></i>' + listing.category + "</span>" +
      "    <h3>" + listing.name + "</h3>" +
      '    <div class="listing-meta">' +
      '      <span><i class="fa-solid fa-location-dot"></i> ' + listing.location + "</span>" +
      '      <span class="stars">' + ratingStars(listing.rating) + "</span>" +
      "      <span>" + listing.rating.toFixed(1) + "</span>" +
      "    </div>" +
      "    <p>" + listing.shortDescription + "</p>" +
      '    <div class="listing-actions">' +
      '      <a class="btn btn-outline" href="listing-detail.html?id=' + listing.id + '">View Details</a>' +
      '      <span><i class="fa-solid fa-fire"></i> Popularity ' + listing.popularity + "</span>" +
      "    </div>" +
      "  </div>" +
      "</article>"
    );
  }

  function showToast(title, message) {
    let stack = document.querySelector(".toast-stack");

    if (!stack) {
      stack = document.createElement("div");
      stack.className = "toast-stack";
      document.body.appendChild(stack);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "<strong>" + title + "</strong><span>" + message + "</span>";
    stack.appendChild(toast);

    window.setTimeout(function () {
      toast.remove();
    }, 3400);
  }

  function initNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const links = document.querySelector("[data-nav-links]");

    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      const isOpen = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initTheme() {
    const root = document.documentElement;
    const toggle = document.querySelector("[data-theme-toggle]");
    const storedTheme = localStorage.getItem("bizlist-theme");
    const preferredDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme || (preferredDark ? "dark" : "light");

    function applyTheme(theme) {
      root.setAttribute("data-theme", theme);

      if (toggle) {
        toggle.innerHTML = theme === "dark"
          ? '<i class="fa-solid fa-sun"></i>'
          : '<i class="fa-solid fa-moon"></i>';
        toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
        toggle.setAttribute("title", theme === "dark" ? "Light mode" : "Dark mode");
      }
    }

    applyTheme(initialTheme);

    if (toggle) {
      toggle.addEventListener("click", function () {
        const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        localStorage.setItem("bizlist-theme", nextTheme);
        applyTheme(nextTheme);
      });
    }
  }

  function highlightCurrentPage() {
    const current = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll("[data-nav-links] a").forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === current) {
        link.classList.add("active");
      }
    });
  }

  function renderCategories() {
    const target = document.querySelector("[data-categories]");
    if (!target) return;

    target.innerHTML = siteData.categories
      .map(function (category) {
        return (
          '<article class="category-card">' +
          '  <div class="category-icon"><i class="fa-solid ' + category.icon + '"></i></div>' +
          "  <h3>" + category.name + "</h3>" +
          "  <p>" + category.description + "</p>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderFeatured() {
    const target = document.querySelector("[data-featured]");
    if (!target) return;

    const featured = siteData.listings.filter(function (listing) {
      return listing.featured;
    }).slice(0, 6);

    target.innerHTML = featured.map(listingCard).join("");
  }

  function getListingFromQuery() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id")) || 1;

    return siteData.listings.find(function (listing) {
      return listing.id === id;
    }) || siteData.listings[0];
  }

  function renderDetailPage() {
    const target = document.querySelector("[data-detail-page]");
    if (!target) return;

    const listing = getListingFromQuery();
    document.title = listing.name + " | Business Listing";

    const mainImage = document.querySelector("[data-gallery-main]");
    const thumbs = document.querySelector("[data-gallery-thumbs]");
    const title = document.querySelector("[data-detail-name]");
    const badge = document.querySelector("[data-detail-category]");
    const location = document.querySelector("[data-detail-location]");
    const desc = document.querySelector("[data-detail-description]");
    const phone = document.querySelector("[data-detail-phone]");
    const email = document.querySelector("[data-detail-email]");
    const whatsapp = document.querySelector("[data-detail-whatsapp]");
    const website = document.querySelector("[data-detail-website]");
    const hours = document.querySelector("[data-detail-hours]");
    const reviews = document.querySelector("[data-detail-reviews]");
    const social = document.querySelector("[data-detail-social]");
    const rating = document.querySelector("[data-detail-rating]");
    const contactButton = document.querySelector("[data-contact-business]");

    if (title) title.textContent = listing.name;
    if (badge) badge.innerHTML = '<i class="fa-solid ' + iconForCategory(listing.category) + '"></i> ' + listing.category;
    if (location) location.innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + listing.location;
    if (desc) desc.textContent = listing.description;
    if (phone) phone.innerHTML = '<i class="fa-solid fa-phone"></i> ' + listing.phone;
    if (phone) phone.href = "tel:" + listing.phone.replace(/[^\d+]/g, "");
    if (email) email.innerHTML = '<i class="fa-solid fa-envelope"></i> ' + listing.email;
    if (email) email.href = "mailto:" + listing.email;
    if (whatsapp) {
      whatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp';
      whatsapp.href = "https://wa.me/" + listing.whatsapp.replace(/\D/g, "");
    }
    if (website) {
      website.innerHTML = '<i class="fa-solid fa-globe"></i> Visit website';
      website.href = listing.website;
    }
    if (rating) {
      rating.innerHTML = '<span class="stars">' + ratingStars(listing.rating) + "</span> " + listing.rating.toFixed(1) + " average rating";
    }
    if (contactButton) {
      contactButton.href = "mailto:" + listing.email;
    }

    if (mainImage) {
      mainImage.src = listing.images[0];
      mainImage.alt = listing.name;
    }

    if (thumbs) {
      thumbs.innerHTML = listing.images
        .map(function (image, index) {
          return (
            '<button type="button" class="' + (index === 0 ? "active" : "") + '" data-gallery-thumb="' + index + '">' +
            '<img src="' + image + '" alt="' + listing.name + " image " + (index + 1) + '">' +
            "</button>"
          );
        })
        .join("");

      thumbs.querySelectorAll("[data-gallery-thumb]").forEach(function (button, index) {
        button.addEventListener("click", function () {
          thumbs.querySelectorAll("button").forEach(function (item) {
            item.classList.remove("active");
          });
          button.classList.add("active");
          mainImage.src = listing.images[index];
        });
      });
    }

    if (hours) {
      hours.innerHTML = listing.hours
        .map(function (entry) {
          return "<tr><td>" + entry[0] + "</td><td>" + entry[1] + "</td></tr>";
        })
        .join("");
    }

    if (reviews) {
      reviews.innerHTML = listing.reviews
        .map(function (review) {
          return (
            '<li class="review-card">' +
            "  <h4>" + review.name + "</h4>" +
            '  <div class="stars">' + ratingStars(review.rating) + "</div>" +
            "  <p>" + review.text + "</p>" +
            "</li>"
          );
        })
        .join("");
    }

    if (social) {
      const items = Object.keys(listing.social).map(function (key) {
        const icons = {
          instagram: "fa-instagram",
          facebook: "fa-facebook-f",
          linkedin: "fa-linkedin-in",
          pinterest: "fa-pinterest-p"
        };

        return '<li><a href="' + listing.social[key] + '"><i class="fa-brands ' + (icons[key] || "fa-share-nodes") + '"></i> ' + key.charAt(0).toUpperCase() + key.slice(1) + "</a></li>";
      });

      social.innerHTML = items.join("");
    }
  }

  function sortListings(listings, sortBy) {
    const sorted = listings.slice();

    sorted.sort(function (a, b) {
      if (sortBy === "popular") {
        return b.popularity - a.popularity;
      }

      if (sortBy === "rated") {
        return b.rating - a.rating;
      }

      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return sorted;
  }

  function renderListingsPage() {
    const target = document.querySelector("[data-listings-grid]");
    if (!target) return;

    const categoryField = document.querySelector("[data-filter-category]");
    const locationField = document.querySelector("[data-filter-location]");
    const sortField = document.querySelector("[data-filter-sort]");
    const summary = document.querySelector("[data-filter-summary]");

    function paint() {
      const category = categoryField.value;
      const location = locationField.value.trim().toLowerCase();
      const sort = sortField.value;

      let filtered = siteData.listings.filter(function (listing) {
        const categoryMatch = category ? listing.category === category : true;
        const locationMatch = location
          ? (listing.location + " " + listing.city + " " + listing.country).toLowerCase().indexOf(location) !== -1
          : true;

        return categoryMatch && locationMatch;
      });

      filtered = sortListings(filtered, sort);
      target.innerHTML = filtered.map(listingCard).join("");

      if (!filtered.length) {
        target.innerHTML =
          '<article class="card" style="padding: 1.5rem; grid-column: 1 / -1;">' +
          "<h3>No businesses found</h3>" +
          "<p>Try a different category or a broader location search.</p>" +
          "</article>";
      }

      if (summary) {
        summary.textContent = filtered.length + " listing" + (filtered.length === 1 ? "" : "s") + " found";
      }
    }

    paint();

    [categoryField, locationField, sortField].forEach(function (field) {
      field.addEventListener("input", paint);
      field.addEventListener("change", paint);
    });
  }

  function clearErrors(form) {
    form.querySelectorAll(".field-error").forEach(function (group) {
      group.classList.remove("field-error");
    });
  }

  function markError(input, message) {
    const group = input.closest("[data-field-group]");
    if (!group) return;
    group.classList.add("field-error");
    const error = group.querySelector(".error-text");
    if (error) error.textContent = message;
  }

  function validateForm(form) {
    clearErrors(form);
    let isValid = true;

    form.querySelectorAll("[data-required]").forEach(function (input) {
      if (!input.value.trim()) {
        markError(input, "This field is required.");
        isValid = false;
      }
    });

    form.querySelectorAll("[data-type='email']").forEach(function (input) {
      if (input.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        markError(input, "Enter a valid email address.");
        isValid = false;
      }
    });

    form.querySelectorAll("[data-type='url']").forEach(function (input) {
      if (input.value.trim() && !/^https?:\/\/.+/i.test(input.value.trim())) {
        markError(input, "Enter a valid URL starting with http:// or https://");
        isValid = false;
      }
    });

    form.querySelectorAll("[data-type='phone']").forEach(function (input) {
      if (input.value.trim() && input.value.replace(/\D/g, "").length < 7) {
        markError(input, "Enter a valid phone number.");
        isValid = false;
      }
    });

    return isValid;
  }

  function initForms() {
    document.querySelectorAll("[data-static-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!validateForm(form)) {
          showToast("Check your form", "Please fix the highlighted fields and try again.");
          return;
        }

        const success = form.parentElement.querySelector(".success-panel");
        if (success) {
          success.classList.add("show");
        }

        form.reset();
        showToast("Submission received", "Your details were captured successfully.");
      });
    });
  }

  function initSearchRedirect() {
    const form = document.querySelector("[data-home-search]");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const query = form.querySelector("[name='location']").value.trim();
      const category = form.querySelector("[name='category']").value;
      const url = "listings.html?location=" + encodeURIComponent(query) + "&category=" + encodeURIComponent(category);
      window.location.href = url;
    });
  }

  function applyListingPageQueryDefaults() {
    const params = new URLSearchParams(window.location.search);
    const categoryField = document.querySelector("[data-filter-category]");
    const locationField = document.querySelector("[data-filter-location]");
    if (categoryField && params.get("category")) categoryField.value = params.get("category");
    if (locationField && params.get("location")) locationField.value = params.get("location");
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNavigation();
    highlightCurrentPage();
    renderCategories();
    renderFeatured();
    applyListingPageQueryDefaults();
    renderListingsPage();
    renderDetailPage();
    initForms();
    initSearchRedirect();
  });
})();
