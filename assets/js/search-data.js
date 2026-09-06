// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-members",
          title: "Members",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/members/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Our lab specialises in leveraging statistical machine learning and Bayesian statistics across diverse fields, with a strong focus on clinical and environmental AI applications. We are dedicated to pioneering innovative machine learning techniques and creating impactful solutions to address critical challenges in dentistry and oral health, biodiversity, and computational statistics.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-openings",
          title: "Openings",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/openings/";
          },
        },{id: "nav-papers",
          title: "Papers",
          description: "Publications from the group members.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "members-dr-ayan-das",
          title: 'Dr. Ayan Das',
          description: "AI+ Academic Senior Fellow",
          section: "Members",handler: () => {
              window.location.href = "/members/ayandas/";
            },},{id: "members-john-joseph-brady",
          title: 'John-Joseph Brady',
          description: "PhD student in statistical machine learning (2023-).",
          section: "Members",handler: () => {
              window.location.href = "/members/johnjobrady/";
            },},{id: "members-ruiyang-hao",
          title: 'Ruiyang Hao',
          description: "PhD student in Dental and Health Science Research (2025-).",
          section: "Members",handler: () => {
              window.location.href = "/members/ruiyanghao/";
            },},{id: "members-weidong-liang",
          title: 'Weidong Liang',
          description: "Research Associate (2026-).",
          section: "Members",handler: () => {
              window.location.href = "/members/weidongliang/";
            },},{id: "members-dr-xiongjie-chen",
          title: 'Dr. Xiongjie Chen',
          description: "Research Fellow in Machine Learning in Medical Imaging (2023-2025). PhD (2019-2023).",
          section: "Members",handler: () => {
              window.location.href = "/members/xiongjiechen/";
            },},{id: "members-dr-yunpeng-li",
          title: 'Dr. Yunpeng Li',
          description: "Reader in AI &amp; Digital Oral Health",
          section: "Members",handler: () => {
              window.location.href = "/members/yunpengli/";
            },},{id: "members-zhi-qin-tan",
          title: 'Zhi Qin Tan',
          description: "PhD student in Dental and Health Science Research (2023-).",
          section: "Members",handler: () => {
              window.location.href = "/members/zhiqintan/";
            },},{id: "news-we-started-the-humbug-ii-project-in-collaboration-with-the-oxford-team-led-by-kathy-willis-and-steve-roberts-the-project-is-sponsored-by-the-natural-environment-research-council-in-its-innovation-in-environmental-monitoring-programme",
          title: 'We started the HumBug II project in collaboration with the Oxford team led...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-presented-bayesian-detector-combination-for-object-detection-with-crowdsourced-annotations-at-eccv-2024-in-milan-italy-as-his-first-paper-in-phd-the-work-is-in-collaboration-with-olga-isupova-gustavo-carneiro-and-xiatian-zhu",
          title: 'Zhi Qin Tan presented Bayesian Detector Combination for Object Detection with Crowdsourced Annotations...',
          description: "",
          section: "News",},{id: "news-dr-xiongjie-chen-zhi-qin-tan-and-john-joseph-brady-completed-their-transfer-from-the-university-of-surrey-to-king-s-college-london-as-inaugural-members-of-the-statistical-machine-learning-lab-based-in-the-centre-for-oral-clinical-amp-amp-translational-sciences",
          title: 'Dr Xiongjie Chen, Zhi Qin Tan, and John-Joseph Brady completed their transfer from...',
          description: "",
          section: "News",},{id: "news-owen-addison-and-yunpeng-li-published-an-opinion-piece-at-bdj-in-practice-to-discuss-our-nihr-sponsored-project-and-becertain-ai",
          title: 'Owen Addison and Yunpeng Li published an opinion piece at BDJ in Practice...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-introduced-our-ai-assisted-radiograph-based-dental-disease-detection-tool-undergoing-internal-testing-via-becertain-ai-at-the-royal-college-of-surgeons-of-england-workshop-on-ai-and-digital-innovation-in-dentistry-and-oral-health",
          title: 'Yunpeng Li introduced our AI-assisted radiograph-based dental disease detection tool, undergoing internal testing...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-gave-a-talk-on-normalizing-flow-based-differentiable-particle-filters-at-the-kcl-statistics-seminar",
          title: 'Yunpeng Li gave a talk on Normalizing Flow-based Differentiable Particle Filters at the...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-was-selected-into-the-royal-academy-of-engineering-explore-4-0-cohort-to-explore-new-ecosystems-for-our-work-on-ai-assisted-dental-disease-detection",
          title: 'Yunpeng Li was selected into the Royal Academy of Engineering Explore 4.0 cohort...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-a-fully-funded-phd-position-is-available-in-the-broad-areas-of-multimodal-ai-and-digital-healthcare-see-openings-for-available-phd-positions-in-the-group",
          title: 'We are recruiting! A fully-funded PhD position is available in the broad areas...',
          description: "",
          section: "News",},{id: "news-our-paper-normalizing-flow-based-differentiable-particle-filters-has-been-accepted-at-ieee-transactions-on-signal-processing-congratulations-xiongjie",
          title: 'Our paper Normalizing Flow-based Differentiable Particle Filters has been accepted at IEEE Transactions...',
          description: "",
          section: "News",},{id: "news-we-welcome-phd-applicants-to-apply-for-the-epsrc-centre-for-doctoral-training-in-data-driven-health-drive-health-programme-for-our-project-multimodal-dental-ai-with-uncertainty-quantification-the-application-deadline-is-30th-january-2025-see-openings-for-available-phd-positions-in-the-group",
          title: 'We welcome PhD applicants to apply for the EPSRC Centre for Doctoral Training...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-presented-our-work-on-learning-with-uncertainty-for-trustworthy-ai-with-radiography-in-the-2025-bellairs-workshop-on-machine-learning-and-statistical-signal-processing-for-data-on-graphs-in-the-bellairs-research-institute-in-holetown-barbados",
          title: 'Yunpeng Li presented our work on “Learning with Uncertainty for Trustworthy AI with...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-joined-the-royal-academy-of-engineering-enterprise-hub-explore-mission-to-study-the-deep-tech-ecosystem-in-paris-and-île-de-france-the-trip-included-presenting-becertain-at-the-british-embassy-paris-and-attending-the-hello-tomorrow-global-summit",
          title: 'Yunpeng Li joined the Royal Academy of Engineering Enterprise Hub EXPLORE mission to...',
          description: "",
          section: "News",},{id: "news-our-dental-ai-spinout-becertain-was-named-the-most-investor-ready-company-in-the-medtech-group-in-bia-pulse-2025-hosted-at-the-francis-crick-institute",
          title: 'Our dental AI spinout, BeCertain, was named the “most investor-ready” company in the...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-gave-an-invited-talk-on-trustworthy-dental-ai-at-the-tor-workshop-2025-towards-future-medicine-and-dentistry-at-the-university-of-bergen-norway",
          title: 'Yunpeng Li gave an invited talk on trustworthy dental AI at the TOR...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-gave-an-ai-in-healthcare-showcase-lightning-presentation-at-the-king-s-festival-of-artificial-intelligence",
          title: 'Yunpeng Li gave an AI in Healthcare Showcase Lightning Presentation at the King’s...',
          description: "",
          section: "News",},{id: "news-our-paper-differentiable-interacting-multiple-model-particle-filtering-has-been-accepted-for-publication-in-signal-processing-congratulations-john-jo-yuhui-wenwu-and-victor",
          title: 'Our paper Differentiable Interacting Multiple Model Particle Filtering has been accepted for publication...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-presented-becertain-in-innovation-showcase-at-bia-life-science-leadership-summit",
          title: 'Yunpeng Li presented BeCertain in Innovation Showcase at BIA Life Science Leadership Summit....',
          description: "",
          section: "News",},{id: "news-the-latest-edition-of-riskwise-shared-the-panel-discussion-on-the-future-of-ai-in-dentistry-yunpeng-li-joined-with-dr-raj-rattan-mbe-dr-sonia-szamocki-and-dr-loven-ganeswaran",
          title: 'The latest edition of Riskwise shared the panel discussion on the future of...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-led-our-efforts-to-secure-the-first-place-in-each-of-the-three-tasks-on-cone-beam-computed-tomography-cbct-scan-segmentation-in-the-miccai-2025-oral-and-dental-image-analysis-odin-challenges-our-work-has-been-documented-at-u-mamba2-scaling-state-space-models-for-dental-anatomy-segmentation-in-cbct-and-u-mamba2-ssl-for-semi-supervised-tooth-and-pulp-segmentation-in-cbct",
          title: 'Zhi Qin Tan led our efforts to secure the first place in each...',
          description: "",
          section: "News",},{id: "news-ruiyang-hao-joined-the-group-as-a-phd-student-ruiyang-will-work-on-multimodal-learning-computer-vision-and-medical-ai-with-a-focus-on-dental-applications-welcome",
          title: 'Ruiyang Hao joined the group as a PhD student. Ruiyang will work on...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-and-yunpeng-li-presented-their-work-bayesian-detector-combination-for-object-detection-with-crowdsourced-annotations-in-the-second-global-symposium-on-artificial-intelligence-in-dentistry-organised-by-the-harvard-school-of-dental-medicine-in-boston-usa",
          title: 'Zhi Qin Tan and Yunpeng Li presented their work, Bayesian Detector Combination for...',
          description: "",
          section: "News",},{id: "news-our-paper-caries-detection-in-primary-molars-with-bitewing-radiographs-through-deep-learning-based-object-detectors-has-been-accepted-for-publication-in-caries-research",
          title: 'Our paper Caries Detection in Primary Molars with Bitewing Radiographs through Deep Learning...',
          description: "",
          section: "News",},{id: "news-our-paper-post-pandemic-tourism-forecasting-with-ensemble-rnn-has-been-accepted-as-an-invited-paper-for-publication-in-the-annals-of-tourism-research-congratulations-zhi-qin-tan-for-winning-third-runner-up-and-publishing-the-results-in-a-top-tier-journal-in-tourism-research",
          title: 'Our paper Post-pandemic tourism forecasting with ensemble RNN has been accepted as an...',
          description: "",
          section: "News",},{id: "news-john-joseph-brady-ruiyang-hao-zhi-qin-tan-and-yunpeng-li-presented-their-work-in-the-2026-bellairs-workshop-on-machine-learning-and-statistical-signal-processing-for-data-on-graphs-at-the-bellairs-research-institute-in-holetown-barbados",
          title: 'John-Joseph Brady, Ruiyang Hao, Zhi Qin Tan and Yunpeng Li presented their work...',
          description: "",
          section: "News",},{id: "news-we-started-a-two-year-project-trustworthy-ai-supported-dental-record-self-auditing-and-risk-mitigation-project-led-by-yunpeng-li-and-owen-addison-the-project-is-sponsored-by-the-medical-protection-society-mps-foundation",
          title: 'We started a two-year project, “Trustworthy AI-supported dental record self-auditing and risk mitigation...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-and-owen-addison-presented-becertain-at-aeedc-one-of-the-world-s-largest-annual-dental-events-in-dubai-uae",
          title: 'Yunpeng Li and Owen Addison presented BeCertain at AEEDC, one of the world’s...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-presented-our-pydpf-work-with-john-joseph-brady-ben-cox-and-victor-elvira-at-the-siam-conference-on-uncertainty-quantification-uq26-in-minneapolis-mn-usa",
          title: 'Yunpeng Li presented our PyDPF work with John-Joseph Brady, Ben Cox and Victor...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-and-zhi-qin-tan-presented-becertain-and-our-work-dentalx-context-aware-dental-disease-detection-with-radiographs-at-the-2026-iadr-aadocr-cadr-general-session-amp-amp-exhibition-in-san-diego-ca-usa",
          title: 'Yunpeng Li and Zhi Qin Tan presented BeCertain and our work, DentalX: Context-Aware...',
          description: "",
          section: "News",},{id: "news-our-paper-deep-learning-in-dentistry-a-literature-review-from-an-ai-researcher-s-viewpoint-is-accepted-at-the-dentistry-review-journal",
          title: 'Our paper Deep Learning in Dentistry: A Literature Review from an AI Researcher’s...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-gave-an-oral-presentation-on-our-work-dentalx-context-aware-dental-disease-detection-with-radiographs-at-the-international-symposium-of-biomedical-imaging-isbi-2026-in-london-uk",
          title: 'Zhi Qin Tan gave an oral presentation on our work DentalX: Context-Aware Dental...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-a-research-associate-position-is-available-for-an-mps-foundation-supported-project-on-ai-supported-dental-record-auditing",
          title: 'We are recruiting! A Research Associate position is available for an MPS Foundation-supported...',
          description: "",
          section: "News",},{id: "news-our-paper-toothfairy3-scaling-cbct-maxillofacial-segmentation-to-77-classes-with-u-mamba2-is-early-accepted-at-miccai-2026-congratulations-to-zhi-qin-tan-and-our-collaborators-at-the-aimagelab-unimore",
          title: 'Our paper “ToothFairy3: Scaling CBCT Maxillofacial Segmentation to 77 Classes with U-Mamba2” is...',
          description: "",
          section: "News",},{id: "news-ayan-das-joined-king-s-as-an-ai-academic-senior-fellow-based-in-the-faculty-of-dentistry-oral-amp-amp-craniofacial-sciences-welcome-ayan",
          title: 'Ayan Das joined King’s as an AI+ Academic Senior Fellow, based in the...',
          description: "",
          section: "News",},{id: "news-the-becertain-team-and-tair-group-members-exhibited-becertain-at-the-british-dental-conference-amp-amp-dentistry-show-bdcds-2026-at-the-nec-birmingham",
          title: 'The BeCertain team and TAIR group members exhibited BeCertain at the British Dental...',
          description: "",
          section: "News",},{id: "news-zhi-qin-tan-was-invited-to-give-a-3-hour-talk-on-u-mamba2-and-u-mamba2-ssl-for-odin-challenges-miccai-2025-at-the-aimagelab-unimore-thank-you-to-prof-federico-bolelli-and-prof-costantino-grana-for-the-invitation",
          title: 'Zhi Qin Tan was invited to give a 3-hour talk on “U-Mamba2 and...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-gave-a-talk-on-trustworthy-ai-in-dental-and-oral-health-at-the-joint-british-dental-association-wessex-branch-and-hampshire-amp-amp-isle-of-wight-ldc-cpd-event",
          title: 'Yunpeng Li gave a talk on trustworthy AI in dental and oral health...',
          description: "",
          section: "News",},{id: "news-we-are-offering-a-funded-phd-position-on-diffusion-llm-powered-generative-ai-with-healthcare-applications-supervised-by-yunpeng-li-and-ayan-das-applications-are-assessed-on-a-rolling-basis-so-apply-early-the-deadline-is-15-august-2026-see-the-openings-page",
          title: 'We are offering a funded PhD position on Diffusion/LLM Powered Generative AI with...',
          description: "",
          section: "News",},{id: "news-john-joseph-brady-presented-our-paper-efficient-learning-of-deep-state-space-models-via-importance-smoothing-at-the-international-conference-on-machine-learning-icml-2026-in-seoul-south-korea",
          title: 'John-Joseph Brady presented our paper Efficient Learning of Deep State Space Models via...',
          description: "",
          section: "News",},{id: "news-becertain-a-king-s-and-surrey-spin-out-has-completed-a-1-7-million-pre-seed-round-led-by-sure-valley-ventures-with-support-from-innovate-uk-to-bring-clinical-grade-ai-to-dental-diagnostics-read-the-king-s-news-story",
          title: 'BeCertain, a King’s and Surrey spin-out, has completed a £1.7 million pre-seed round,...',
          description: "",
          section: "News",},{id: "news-welcome-weidong-liang-to-the-group-weidong-joins-us-as-a-research-associate-on-the-mps-foundation-project-on-trustworthy-ai-supported-dental-record-self-auditing-and-risk-mitigation",
          title: 'Welcome Weidong Liang to the group! Weidong joins us as a Research Associate...',
          description: "",
          section: "News",},{id: "news-we-are-recruiting-a-four-year-postdoctoral-research-associate-to-work-on-ai-for-scientific-discovery-and-biomanufacturing-as-part-of-a-horizon-europe-project-the-deadline-for-applications-is-9-august-2026-see-the-openings-page",
          title: 'We are recruiting a four-year Postdoctoral Research Associate to work on AI for...',
          description: "",
          section: "News",},{id: "news-yunpeng-li-gave-an-invited-talk-on-our-work-on-ai-powered-acoustic-sensing-for-large-scale-monitoring-of-insects-at-the-2nd-asia-pacific-conference-on-mosquito-and-vector-control-amv-2026-in-pattaya-thailand",
          title: 'Yunpeng Li gave an invited talk on our work on “AI-powered acoustic sensing...',
          description: "",
          section: "News",},{id: "news-we-are-offering-a-fully-funded-3-year-phd-studentship-for-both-uk-and-international-students-on-trustworthy-generative-ai-in-healthcare-for-a-february-june-or-october-2027-start-application-is-rolling-based-early-applications-are-encouraged",
          title: 'We are offering a fully funded 3-year PhD studentship for both UK and...',
          description: "",
          section: "News",},{id: "news-our-horizon-europe-project-biofactory-has-started-coordinated-by-the-university-of-bergen-it-brings-together-14-partners-across-nine-countries-to-build-an-automated-ai-powered-platform-for-manufacturing-stem-cell-based-bioimplants-for-craniofacial-bone-repair",
          title: 'Our Horizon Europe project BioFACTORy has started. Coordinated by the University of Bergen,...',
          description: "",
          section: "News",},{id: "projects-bayesian-detector-combination",
          title: 'Bayesian Detector Combination',
          description: "Object Detection with Noisy Crowdsourced (Multi-Rater) Annotations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bdc_eccv/";
            },},{id: "projects-differentiable-particle-filtering",
          title: 'Differentiable Particle Filtering',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/diff_particle_filter/";
            },},{id: "projects-ai-assisted-dental-disease-detection-with-radiography",
          title: 'AI-assisted Dental Disease Detection with Radiography',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nihr_dental_xray/";
            },},{id: "projects-parallel-variational-monte-carlo-icml-2026",
          title: 'Parallel Variational Monte Carlo (ICML 2026)',
          description: "Efficient Learning of Deep State Space Models via Importance Smoothing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pvmc/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/template/";
            },},{id: "projects-u-mamba2-and-u-mamba2-ssl",
          title: 'U-Mamba2 and U-Mamba2-SSL',
          description: "Scaling State Space Models for Dental Anatomy Segmentation and Semi-supervised Tooth and Pulp Segmentation in CBCT",
          section: "Projects",handler: () => {
              window.location.href = "/projects/u-mamba2/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
