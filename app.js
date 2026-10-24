const STORAGE_KEY = 'ai_client_hunter_leads_v1';
const SETTINGS_KEY = 'ai_client_hunter_settings_v1';

const DEFAULT_SETTINGS = {
  service: 'Canva social media post designs',
  location: 'India, Bengaluru',
  industry: 'Beauty and salons',
  priority: 'Instagram',
  connectedSources: [
    'Google AI Studio — available, quota-based',
    'Google Sheets — available as free CRM layer',
    'Meta Ads Library — public research only',
    'Instagram — public-source view only',
    'LinkedIn — public professional discovery only'
  ]
};

const DEFAULT_LEADS = [
  {
    id: crypto.randomUUID(),
    businessName: 'The Velvet Room Salon',
    category: 'Beauty salon',
    country: 'India',
    city: 'Bengaluru',
    discoveryPlatform: 'Instagram',
    website: 'Unverified',
    publicContact: 'Instagram DM / contact link',
    potentialService: 'Canva social media design',
    opportunity: 'Needs cleaner promotions and more consistent Instagram visuals for offers and seasonal campaigns.',
    evidence: 'Public Instagram content shows repeated design treatments and a limited branding system across posts.',
    leadScore: 84,
    status: 'QUALIFIED',
    personalizedOpeningMessage: 'Hi The Velvet Room Salon, I noticed your Instagram content is active but the visual style feels less consistent across offers. I help small businesses create clean Canva social creatives for salon promotions, new offers, and story campaigns. If helpful, I can share a couple of sample promo concepts for your next campaign.',
    recommendedServiceOffer: 'Social Media Starter',
    suggestedPriceInr: '₹4,000–₹8,000',
    outreachStatus: 'READY FOR APPROVAL',
    lastContactDate: '',
    followUpDate: '',
    replyReceived: 'No',
    nextAction: 'Review and approve DM',
    estimatedDealValue: '₹6,500',
    approved: false,
    messageSent: false,
    messageDraft: 'Hi The Velvet Room Salon, I noticed your Instagram page is active and regularly promotes services, but the visual style could feel more consistent and polished. I help small businesses create Canva-based promo creatives, story layouts, and offer graphics that are easier to read and more consistent with the brand. If useful, I can share a few sample concepts for your next campaign.'
  },
  {
    id: crypto.randomUUID(),
    businessName: 'Bloom & Crumb Bakery',
    category: 'Bakery',
    country: 'India',
    city: 'Pune',
    discoveryPlatform: 'Instagram',
    website: 'Unverified',
    publicContact: 'Instagram DM',
    potentialService: 'Promotional creatives',
    opportunity: 'Needs more structured campaign graphics for cakes, combo offers, and festive promotions.',
    evidence: 'Public feed shows product photos but limited variation in branded promotional design and menu highlights.',
    leadScore: 81,
    status: 'QUALIFIED',
    personalizedOpeningMessage: 'Hi Bloom & Crumb Bakery, I noticed your product posts are visually strong, but your promotional graphics could be more consistent for cakes, combo offers, and festive campaigns. I design Canva-based promotional packs for small food businesses. If helpful, I can create a few campaign concepts for your next offer or launch.',
    recommendedServiceOffer: 'Promotional Design Pack',
    suggestedPriceInr: '₹5,000–₹10,000',
    outreachStatus: 'READY FOR APPROVAL',
    lastContactDate: '',
    followUpDate: '',
    replyReceived: 'No',
    nextAction: 'Review and approve DM',
    estimatedDealValue: '₹8,000',
    approved: false,
    messageSent: false,
    messageDraft: 'Hi Bloom & Crumb Bakery, I saw your product posts and they have a strong visual appeal, but your promotional creatives could be more consistent for festive offers and time-limited deals. I help small food brands create Canva-based campaign graphics, menu highlights, and story posts that are easier to promote. If useful, I can send a few concept directions for your next offer.'
  },
  {
    id: crypto.randomUUID(),
    businessName: 'Saffron Threads Boutique',
    category: 'Fashion boutique',
    country: 'India',
    city: 'Jaipur',
    discoveryPlatform: 'Instagram',
    website: 'Unverified',
    publicContact: 'Instagram DM / website contact',
    potentialService: 'Instagram templates',
    opportunity: 'Could use a more polished content system for new arrivals, seasonal collections, and launch posts.',
    evidence: 'The public feed shows product posts, but the style is uneven and content layout could feel more consistent.',
    leadScore: 78,
    status: 'QUALIFIED',
    personalizedOpeningMessage: 'Hi Saffron Threads Boutique, I noticed your product feed has a strong fashion identity but the promotional graphics could have a more consistent look for new arrivals and seasonal collections. I create Instagram-ready Canva templates and branded content sets for small fashion brands. If useful, I can share a few design directions for your next collection drop.',
    recommendedServiceOffer: 'Instagram Template Pack',
    suggestedPriceInr: '₹3,500–₹9,000',
    outreachStatus: 'READY FOR APPROVAL',
    lastContactDate: '',
    followUpDate: '',
    replyReceived: 'No',
    nextAction: 'Review and approve DM',
    estimatedDealValue: '₹7,500',
    approved: false,
    messageSent: false,
    messageDraft: 'Hi Saffron Threads Boutique, I noticed your product feed has a strong visual identity, but the content could feel more consistent for launches and seasonal campaigns. I create Canva-based Instagram templates and branded promo sets for small apparel businesses. If it helps, I can prepare a few simple design concepts for your next collection.'
  },
  {
    id: crypto.randomUUID(),
    businessName: 'Nexa Learning Centre',
    category: 'Coaching and tutoring',
    country: 'India',
    city: 'Delhi',
    discoveryPlatform: 'Instagram',
    website: 'Unverified',
    publicContact: 'Instagram DM / contact form',
    potentialService: 'Business branding and promotional creatives',
    opportunity: 'Would benefit from a more polished student enrollment and course promotion system.',
    evidence: 'Public feed includes course announcements, but the branding and visual hierarchy could be more consistent for lead generation.',
    leadScore: 82,
    status: 'QUALIFIED',
    personalizedOpeningMessage: 'Hi Nexa Learning Centre, I noticed your coaching content is active, but it could feel more polished and consistent for course promotions and admissions. I help education brands create clean promotional creatives, stories, and branded posts that are easier to understand and act on. If you want, I can suggest a simple content direction for your next student intake campaign.',
    recommendedServiceOffer: 'Social Media Starter',
    suggestedPriceInr: '₹3,000–₹7,500',
    outreachStatus: 'READY FOR APPROVAL',
    lastContactDate: '',
    followUpDate: '',
    replyReceived: 'No',
    nextAction: 'Review and approve DM',
    estimatedDealValue: '₹6,000',
    approved: false,
    messageSent: false,
    messageDraft: 'Hi Nexa Learning Centre, I noticed your coaching brand is active online, but the promotional visuals could be more structured and consistent for student admissions. I help education businesses create clean Canva visuals for courses, offers, and story campaigns. If helpful, I can suggest a simple concept set for your next intake cycle.'
  },
  {
    id: crypto.randomUUID(),
    businessName: 'Harbor & Home',
    category: 'Home decor',
    country: 'India',
    city: 'Hyderabad',
    discoveryPlatform: 'Instagram',
    website: 'Unverified',
    publicContact: 'Instagram DM',
    potentialService: 'Business branding and promotional creatives',
    opportunity: 'Seasonal home styling campaigns and product launches could use stronger promotion and offer graphics.',
    evidence: 'Public Instagram shows several product showcases but limited branded offer creatives for promotions or bundles.',
    leadScore: 77,
    status: 'RESEARCHED',
    personalizedOpeningMessage: 'Hi Harbor & Home, I noticed your product posts have a strong lifestyle aesthetic, but your offers and campaign graphics could be more structured for promotions and seasonal collections. I design branded Canva creatives for small home and lifestyle businesses. If useful, I can suggest a few concept directions for your next collection or festive sale.',
    recommendedServiceOffer: 'Promotional Design Pack',
    suggestedPriceInr: '₹4,500–₹10,000',
    outreachStatus: 'NEW',
    lastContactDate: '',
    followUpDate: '',
    replyReceived: 'No',
    nextAction: 'Review lead and draft message',
    estimatedDealValue: '₹8,000',
    approved: false,
    messageSent: false,
    messageDraft: 'Hi Harbor & Home, I noticed your home decor brand has a strong visual aesthetic, but the campaign graphics could be more structured for offers and seasonal launches. I help small lifestyle businesses create clean Canva creatives for product bundles, promos, and social posts. If helpful, I can prepare a few concept directions for your next collection.'
  }
];

const mockMetaAds = [
  {
    advertiserName: 'FreshCart Market',
    industry: 'Grocery / local retail',
    page: 'https://facebook.com/freshcartmarket',
    adReference: 'Public Meta Ads Library active ad',
    observation: 'Running product promotions and seasonal sales across advertising creatives.',
    serviceOpportunity: 'Promotional creatives and landing page clarity improvements for local retail offers.',
    whyRelevant: 'Retail businesses often need fresh ad variants, product-focused creative sets, and clean page layouts for campaigns.',
    confidence: 'Medium',
    outreachDraft: 'Hi FreshCart Market, I noticed your advertising focuses on product promotions and seasonal offers. I help small businesses create polished Canva-based creative variations and clear promotional layouts that fit mobile-friendly campaigns. If useful, I can share a few sample directions for your next offer or campaign refresh.'
  },
  {
    advertiserName: 'The Nest Studio',
    industry: 'Interior design / home decor',
    page: 'https://facebook.com/theneststudio',
    adReference: 'Meta Ads Library active campaign',
    observation: 'Promotes room styling and local services using visually rich ad creatives.',
    serviceOpportunity: 'Branded promotional designs and landing-page-friendly campaign visuals.',
    whyRelevant: 'Lifestyle brands often need stronger creative consistency across campaigns, promotions, and service pages.',
    confidence: 'High',
    outreachDraft: 'Hi The Nest Studio, I noticed your ads focus on room styling and service promotions. I design polished promotional creatives and branded campaign visuals for small businesses that want more consistency across social and landing pages. If you are exploring new creative directions, I can suggest a few ideas for your next campaign.'
  },
  {
    advertiserName: 'Urban Harvest Foods',
    industry: 'Food / wellness brand',
    page: 'https://facebook.com/urbanharvestfoods',
    adReference: 'Public Meta Ads Library running campaign',
    observation: 'Uses product offers and social proof messaging in ad creative.',
    serviceOpportunity: 'Offer graphics, seasonal creative packs, and story-based promotional layouts.',
    whyRelevant: 'Food brands often need clear offer graphics and campaign variations across social channels.',
    confidence: 'Medium',
    outreachDraft: 'Hi Urban Harvest Foods, I noticed your campaign uses product offers and seasonal messaging in the creatives. I help small food and wellness brands create consistent, high-clarity promotional graphics and story content for their offers. If useful, I can suggest a few creative concepts for your next campaign push.'
  }
];

const mockInstagramProspects = [
  {
    businessName: 'Mira & Co. Events',
    city: 'Mumbai',
    leadScore: 88,
    reason: 'Wedding and event promotion content appears active but branding and post formatting need more consistency.',
    dm: 'Hi Mira & Co. Events, I noticed your event work is visually strong, but your promotional posts could feel more consistent for weddings and event launches. I help small businesses create Canva-based invitation and campaign creatives that are more polished and easier to share. If helpful, I can share 2–3 sample concepts for your next event promo.'
  },
  {
    businessName: 'Pawfect Corner',
    city: 'Bengaluru',
    leadScore: 80,
    reason: 'Pet brand promotions could benefit from cleaner product visuals and more structured offer graphics.',
    dm: 'Hi Pawfect Corner, I noticed your brand has a friendly identity, but your product posts and offers could feel more polished across Instagram. I design Canva-based promotional creatives for small brands, including product launches and offer graphics. If useful, I can suggest a simple concept set for your next campaign.'
  },
  {
    businessName: 'Swaad Studio Kitchen',
    city: 'Lucknow',
    leadScore: 79,
    reason: 'Food brand with daily content and menu posts that could use stronger visual consistency for offers.',
    dm: 'Hi Swaad Studio Kitchen, I saw your food posts and noticed your brand has a lot of good content, but the offer graphics could be more consistent and conversion-friendly. I create Canva social creatives for food brands, including menu highlights and seasonal offers. If helpful, I can share a few concept ideas for your next promotion.'
  }
];

const mockLinkedInProspects = [
  {
    businessName: 'Suhas Digital Studio',
    role: 'Founder',
    city: 'Bengaluru',
    leadScore: 83,
    reason: 'Digital services business likely needs refreshed visual assets, landing page improvement, and branded funnels.',
    message: 'Hi Suhas, I noticed your agency work and your branding could benefit from clearer campaign visuals and stronger landing-page presentation. I help small businesses create polished Canva designs and simple conversion-friendly landing page assets. If useful, I’d be happy to share a couple of concept ideas for a campaign refresh.'
  },
  {
    businessName: 'Northstar Growth Labs',
    role: 'Marketing Manager',
    city: 'Delhi',
    leadScore: 81,
    reason: 'Could need design support for campaign creatives, lead magnets, and landing pages for service offers.',
    message: 'Hi Northstar team, I noticed your marketing work and company positioning could benefit from clearer visual assets for campaigns and service pages. I create Canva-based promotional creatives and simple landing-page design support for small businesses. If helpful, I can share a few concept directions for your next campaign.'
  },
  {
    businessName: 'Crestline Advisory',
    role: 'Founder',
    city: 'Mumbai',
    leadScore: 76,
    reason: 'Professional service brand that may need more polished downloadable resources and branded social creatives.',
    message: 'Hi Crestline Advisory, I noticed your brand has a strong business focus and could benefit from cleaner branded content and better sales-page visuals. I help small business teams create polished Canva creatives and simple landing-page graphics that strengthen service messaging. If it helps, I’d be glad to share a couple of ideas for a brand refresh.'
  }
];

const state = {
  leads: loadLeads(),
  activeSection: 'overview',
  settings: loadSettings(),
  onboardingDone: hasSettings()
};

function loadSettings() {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (!raw) return { ...DEFAULT_SETTINGS };

  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (error) {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function hasSettings() {
  return Boolean(localStorage.getItem(SETTINGS_KEY));
}

function loadLeads() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT_LEADS;

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_LEADS;
  } catch (error) {
    return DEFAULT_LEADS;
  }
}

function saveLeads() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.leads));
}

function updateSettingsBanner() {
  const banner = document.getElementById('settingsBanner');
  if (!banner) return;

  const { service, location, industry, priority } = state.settings;
  banner.innerHTML = `
    <strong>App setup:</strong> Selling <em>${service}</em> in <em>${location}</em> for <em>${industry}</em> with priority on <em>${priority}</em>.
  `;
}

function renderStats() {
  const statsGrid = document.getElementById('statsGrid');
  if (!statsGrid) return;

  const total = state.leads.length;
  const qualified = state.leads.filter((lead) => lead.leadScore >= 70).length;
  const awaitingApproval = state.leads.filter((lead) => lead.status === 'READY FOR APPROVAL').length;
  const sent = state.leads.filter((lead) => lead.messageSent).length;
  const replies = state.leads.filter((lead) => lead.replyReceived === 'Yes').length;
  const interested = state.leads.filter((lead) => lead.status === 'INTERESTED').length;
  const won = state.leads.filter((lead) => lead.status === 'WON').length;
  const revenue = state.leads.filter((lead) => lead.status === 'WON').reduce((sum, lead) => {
    const value = Number(String(lead.estimatedDealValue).replace(/[^\d.]/g, '')) || 0;
    return sum + value;
  }, 0);

  const stats = [
    { label: 'Total leads discovered', value: total },
    { label: 'Qualified leads', value: qualified },
    { label: 'Messages awaiting approval', value: awaitingApproval },
    { label: 'Messages actually sent', value: sent },
    { label: 'Replies received', value: replies },
    { label: 'Interested prospects', value: interested },
    { label: 'Deals won', value: won },
    { label: 'Revenue recorded', value: `₹${revenue.toLocaleString('en-IN')}` }
  ];

  statsGrid.innerHTML = stats.map((stat) => `
    <div class="stat-card">
      <div class="stat-label">${stat.label}</div>
      <div class="stat-value">${stat.value}</div>
    </div>
  `).join('');
}

function renderLeadTable() {
  const tableBody = document.getElementById('leadTableBody');
  if (!tableBody) return;

  const query = document.getElementById('searchInput')?.value?.trim().toLowerCase() || '';
  const filtered = state.leads.filter((lead) => {
    if (!query) return true;
    return Object.values(lead).some((value) => String(value).toLowerCase().includes(query));
  });

  tableBody.innerHTML = filtered.map((lead) => `
    <tr>
      <td>${lead.businessName}</td>
      <td>${lead.city || 'Unverified'}</td>
      <td>${lead.discoveryPlatform}</td>
      <td>${lead.potentialService}</td>
      <td>${lead.leadScore}</td>
      <td>${lead.status}</td>
      <td><button class="table-btn" data-action="preview" data-id="${lead.id}">View</button></td>
    </tr>
  `).join('');
}

function renderInstagramList() {
  const list = document.getElementById('instagramList');
  if (!list) return;

  const prospects = [...mockInstagramProspects, ...state.leads.filter((lead) => lead.discoveryPlatform === 'Instagram')].slice(0, 6);

  list.innerHTML = prospects.map((lead) => `
    <div class="lead-card">
      <h3>${lead.businessName}</h3>
      <div class="lead-meta">
        <span class="badge">${lead.city}</span>
        <span class="badge">Score ${lead.leadScore}</span>
      </div>
      <p><strong>Opportunity:</strong> ${lead.reason || lead.opportunity}</p>
      <div class="message-box">
        <strong>Instagram DM draft:</strong><br />
        ${lead.dm || lead.personalizedOpeningMessage}
      </div>
    </div>
  `).join('');
}

function renderLinkedinList() {
  const list = document.getElementById('linkedinList');
  if (!list) return;

  list.innerHTML = mockLinkedInProspects.map((lead) => `
    <div class="lead-card">
      <h3>${lead.businessName}</h3>
      <div class="lead-meta">
        <span class="badge">${lead.role}</span>
        <span class="badge">${lead.city}</span>
        <span class="badge">Score ${lead.leadScore}</span>
      </div>
      <p><strong>Reason:</strong> ${lead.reason}</p>
      <div class="message-box">
        <strong>LinkedIn note:</strong><br />
        ${lead.message}
      </div>
    </div>
  `).join('');
}

function renderMetaAds() {
  const list = document.getElementById('metaAdsList');
  if (!list) return;

  list.innerHTML = mockMetaAds.map((ad) => `
    <div class="lead-card">
      <h3>${ad.advertiserName}</h3>
      <div class="lead-meta">
        <span class="badge">${ad.industry}</span>
        <span class="badge">${ad.confidence} confidence</span>
        <span class="badge">${ad.adReference}</span>
      </div>
      <p><strong>Observation:</strong> ${ad.observation}</p>
      <p><strong>Possible opportunity:</strong> ${ad.serviceOpportunity}</p>
      <p><strong>Why this could be relevant:</strong> ${ad.whyRelevant}</p>
      <div class="message-box">
        <strong>Suggested outreach:</strong><br />
        ${ad.outreachDraft}
      </div>
    </div>
  `).join('');
}

function renderDrafts() {
  const draftList = document.getElementById('draftList');
  if (!draftList) return;

  draftList.innerHTML = state.leads.map((lead) => `
    <div class="lead-card">
      <h3>${lead.businessName}</h3>
      <div class="lead-meta">
        <span class="badge">${lead.potentialService}</span>
        <span class="badge status">${lead.status}</span>
      </div>
      <div class="message-box">
        ${lead.messageDraft || lead.personalizedOpeningMessage}
      </div>
    </div>
  `).join('');
}

function renderApprovalQueue() {
  const approvalList = document.getElementById('approvalList');
  if (!approvalList) return;

  const pending = state.leads.filter((lead) => lead.status === 'READY FOR APPROVAL' || !lead.approved);

  approvalList.innerHTML = pending.length
    ? pending.map((lead) => `
      <div class="lead-card">
        <h3>${lead.businessName}</h3>
        <div class="lead-meta">
          <span class="badge">${lead.discoveryPlatform}</span>
          <span class="badge">Score ${lead.leadScore}</span>
        </div>
        <div class="message-box">
          ${lead.messageDraft || lead.personalizedOpeningMessage}
        </div>
        <div style="margin-top: 12px; display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="primary-btn small" data-action="approve" data-id="${lead.id}">Approve</button>
          <button class="table-btn" data-action="reject" data-id="${lead.id}">Reject</button>
        </div>
      </div>
    `).join('')
    : '<div class="lead-card"><p>No messages awaiting approval.</p></div>';
}

function renderTracker() {
  const trackerList = document.getElementById('trackerList');
  if (!trackerList) return;

  trackerList.innerHTML = state.leads.map((lead) => `
    <div class="lead-card">
      <h3>${lead.businessName}</h3>
      <div class="lead-meta">
        <span class="badge">${lead.outreachStatus || lead.status}</span>
        <span class="badge">${lead.replyReceived}</span>
      </div>
      <p><strong>Next action:</strong> ${lead.nextAction}</p>
      <p><strong>Follow-up date:</strong> ${lead.followUpDate || 'Not scheduled'}</p>
    </div>
  `).join('');
}

function showSection(sectionId) {
  state.activeSection = sectionId;
  document.querySelectorAll('.nav-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.section === sectionId);
  });

  document.querySelectorAll('.panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === sectionId);
  });
}

function buildLeadDraft(leadName, opportunity, service) {
  return `Hi ${leadName}, I noticed ${opportunity}. I help small businesses create clear, polished Canva-based design solutions for ${service.toLowerCase()}. If useful, I can share a couple of sample ideas for your next campaign or offer.`;
}

function addLead(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const businessName = formData.get('businessName')?.toString().trim() || 'Unknown business';
  const opportunity = formData.get('opportunity')?.toString().trim() || 'a relevant opportunity';
  const service = formData.get('potentialService')?.toString() || 'Canva social media design';

  const lead = {
    id: crypto.randomUUID(),
    businessName,
    category: formData.get('category')?.toString().trim() || 'Unspecified',
    country: formData.get('country')?.toString().trim() || 'India',
    city: formData.get('city')?.toString().trim() || 'Unverified',
    discoveryPlatform: formData.get('discoveryPlatform')?.toString() || 'Instagram',
    website: formData.get('website')?.toString().trim() || 'Unverified',
    publicContact: formData.get('publicContact')?.toString().trim() || 'Unverified',
    potentialService: service,
    opportunity,
    evidence: formData.get('evidence')?.toString().trim() || 'Unverified',
    leadScore: Number(formData.get('leadScore') || 0),
    status: formData.get('status')?.toString() || 'NEW',
    personalizedOpeningMessage: `Hi ${businessName}, I noticed ${opportunity}. I help small businesses create clean, practical Canva-based creative packages for services like ${service.toLowerCase()}. If useful, I can share a few sample concepts for your next campaign.`,
    recommendedServiceOffer: service,
    suggestedPriceInr: '₹3,000–₹10,000',
    outreachStatus: 'NEW',
    lastContactDate: '',
    followUpDate: '',
    replyReceived: 'No',
    nextAction: 'Review lead and draft message',
    estimatedDealValue: '₹5,000',
    approved: false,
    messageSent: false,
    messageDraft: buildLeadDraft(businessName, opportunity, service)
  };

  state.leads.unshift(lead);
  saveLeads();
  renderAll();
  form.reset();
  showSection('database');
}

function previewLead(id) {
  const lead = state.leads.find((item) => item.id === id);
  if (!lead) return;
  alert(`${lead.businessName}\n\n${lead.messageDraft || lead.personalizedOpeningMessage}`);
}

function handleTableActions(event) {
  const btn = event.target.closest('[data-action]');
  if (!btn) return;

  const id = btn.dataset.id;
  const action = btn.dataset.action;

  if (action === 'preview') previewLead(id);

  if (action === 'approve') {
    const lead = state.leads.find((item) => item.id === id);
    if (!lead) return;
    lead.approved = true;
    lead.status = 'READY FOR APPROVAL';
    lead.outreachStatus = 'APPROVED';
    lead.nextAction = 'Message ready to send after approval';
    saveLeads();
    renderAll();
  }

  if (action === 'reject') {
    const lead = state.leads.find((item) => item.id === id);
    if (!lead) return;
    lead.status = 'RESEARCHED';
    lead.outreachStatus = 'REJECTED';
    lead.nextAction = 'Review and revise message';
    saveLeads();
    renderAll();
  }
}

function exportCsv() {
  const headers = [
    'Business name',
    'Business category',
    'Country',
    'City',
    'Discovery platform',
    'Official website or public profile',
    'Public business contact method',
    'Potential service required',
    'Specific opportunity identified',
    'Evidence supporting the opportunity',
    'Lead score',
    'Personalized opening message',
    'Recommended service offer',
    'Suggested price range in INR',
    'Outreach status',
    'Last contact date',
    'Follow-up date',
    'Reply received',
    'Next action',
    'Estimated deal value'
  ];

  const rows = state.leads.map((lead) => [
    lead.businessName,
    lead.category,
    lead.country,
    lead.city,
    lead.discoveryPlatform,
    lead.website,
    lead.publicContact,
    lead.potentialService,
    lead.opportunity,
    lead.evidence,
    lead.leadScore,
    lead.personalizedOpeningMessage,
    lead.recommendedServiceOffer,
    lead.suggestedPriceInr,
    lead.outreachStatus,
    lead.lastContactDate,
    lead.followUpDate,
    lead.replyReceived,
    lead.nextAction,
    lead.estimatedDealValue
  ]);

  const csvData = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(','))
    .join('\n');

  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'client-hunter-leads.csv';
  link.click();
  URL.revokeObjectURL(url);
}

function handleOnboardingSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);

  state.settings = {
    service: formData.get('service')?.toString() || DEFAULT_SETTINGS.service,
    location: formData.get('location')?.toString() || DEFAULT_SETTINGS.location,
    industry: formData.get('industry')?.toString() || DEFAULT_SETTINGS.industry,
    priority: formData.get('priority')?.toString() || DEFAULT_SETTINGS.priority,
    connectedSources: DEFAULT_SETTINGS.connectedSources
  };

  saveSettings();
  state.onboardingDone = true;
  document.getElementById('wizardOverlay')?.classList.add('hidden');
  updateSettingsBanner();
}

function showWizard() {
  document.getElementById('wizardOverlay')?.classList.remove('hidden');
}

function renderAll() {
  updateSettingsBanner();
  renderStats();
  renderLeadTable();
  renderInstagramList();
  renderLinkedinList();
  renderMetaAds();
  renderDrafts();
  renderApprovalQueue();
  renderTracker();
}

function wireEvents() {
  document.querySelectorAll('.nav-tab').forEach((tab) => {
    tab.addEventListener('click', () => showSection(tab.dataset.section));
  });

  document.getElementById('leadForm')?.addEventListener('submit', addLead);
  document.getElementById('exportCsvBtn')?.addEventListener('click', exportCsv);
  document.getElementById('addLeadBtn')?.addEventListener('click', () => showSection('research'));
  document.getElementById('searchInput')?.addEventListener('input', renderLeadTable);
  document.body.addEventListener('click', handleTableActions);
  document.getElementById('onboardingForm')?.addEventListener('submit', handleOnboardingSubmit);
  document.getElementById('resetWizardBtn')?.addEventListener('click', showWizard);
}

wireEvents();
renderAll();
showSection('overview');

if (!state.onboardingDone) {
  showWizard();
}
