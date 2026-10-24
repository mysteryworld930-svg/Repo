const STORAGE_KEY = 'ai_client_hunter_leads_v1';
const DEFAULT_LEADS = [
  {
    id: crypto.randomUUID(),
    businessName: 'Urban Glow Salon',
    category: 'Beauty salon',
    country: 'India',
    city: 'Bengaluru',
    discoveryPlatform: 'Instagram',
    website: 'https://example.com',
    publicContact: 'Instagram DM',
    potentialService: 'Canva social media design',
    opportunity: 'Needs a more polished Instagram feed and seasonal promo posts.',
    evidence: 'Public Instagram profile shows limited visual consistency and repeated promotional posts.',
    leadScore: 83,
    status: 'QUALIFIED',
    personalizedOpeningMessage: 'Hi Urban Glow Salon, I noticed your Instagram content is active but the visual style feels inconsistent. I help small businesses create clean, conversion-friendly Canva creatives for offers and social posts. If you want, I can share a couple of sample concepts for your next promo campaign.',
    recommendedServiceOffer: 'Social Media Starter',
    suggestedPriceInr: '₹4,000–₹8,000',
    outreachStatus: 'READY FOR APPROVAL',
    lastContactDate: '',
    followUpDate: '',
    replyReceived: 'No',
    nextAction: 'Review and approve DM',
    estimatedDealValue: '₹6,000',
    approved: false,
    messageSent: false,
    messageDraft: 'Hi Urban Glow Salon, I noticed your Instagram page is active but the visual style looks inconsistent across posts. I help small businesses create clear, polished Canva creatives for promos, offers, and stories. If you want, I can share a couple of sample concepts for your next campaign and we can decide what fits best.'
  },
  {
    id: crypto.randomUUID(),
    businessName: 'Bloom & Crumb Bakery',
    category: 'Bakery',
    country: 'India',
    city: 'Pune',
    discoveryPlatform: 'Instagram',
    website: 'https://example.com',
    publicContact: 'Instagram DM',
    potentialService: 'Promotional creatives',
    opportunity: 'Seasonal offers and catalog posts could use more visual consistency.',
    evidence: 'Public feed contains product photos but little branded promotional design variation.',
    leadScore: 80,
    status: 'QUALIFIED',
    personalizedOpeningMessage: 'Hi Bloom & Crumb Bakery, I saw your product posts and noticed a strong visual identity but limited promotional graphic variation. I design Canva-based offer creatives and seasonal campaign posts for small businesses. I can help create a cleaner promo set for cakes, combos, and festive offers.',
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
    messageDraft: 'Hi Bloom & Crumb Bakery, I saw your product posts and noticed your bakery has a strong product range, but the promotional graphics could be more consistent and conversion-focused. I help small businesses create Canva design packs for seasonal offers, product launches, and social posts. If helpful, I can prepare 3 sample concepts for your next promotion.'
  }
];

const mockMetaAds = [
  {
    advertiserName: 'FreshCart Market',
    industry: 'Grocery / local retail',
    page: 'https://facebook.com/freshcartmarket',
    adReference: 'Public Meta Ads Library active ad',
    observation: 'Running multiple product-focused promos with promotional creative variations.',
    serviceOpportunity: 'Promotional creatives and landing page clarity improvements.',
    whyRelevant: 'A small local retail brand often needs fresh product creatives, seasonal sale graphics, and landing page polish.',
    confidence: 'Medium',
    outreachDraft: 'Hi FreshCart Market, I noticed your ad creative is focused on seasonal offers and product promotion. I create clean, mobile-friendly Canva creatives and landing-page-friendly promotional layouts for small businesses. If useful, I can share a few concept directions for a more cohesive campaign look.'
  },
  {
    advertiserName: 'The Nest Studio',
    industry: 'Interior design / home decor',
    page: 'https://facebook.com/theneststudio',
    adReference: 'Meta Ads Library active campaign',
    observation: 'Promotes room styling and lifestyle offers using visually rich ads.',
    serviceOpportunity: 'Branding and promotional creatives for lifestyle offers.',
    whyRelevant: 'Lifestyle brands often benefit from cohesive design packs for campaigns, collaborations, and seasonal promotions.',
    confidence: 'High',
    outreachDraft: 'Hi The Nest Studio, I noticed your ads focus on lifestyle styling and seasonal offers. I design polished promotional creatives and branded content for small businesses that want more consistent campaign visuals. If you are exploring new creative directions, I can suggest a simple concept set for your next campaign.'
  }
];

const state = {
  leads: loadLeads(),
  activeSection: 'overview'
};

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

  statsGrid.innerHTML = stats
    .map(
      (stat) => `
        <div class="stat-card">
          <div class="stat-label">${stat.label}</div>
          <div class="stat-value">${stat.value}</div>
        </div>
      `
    )
    .join('');
}

function renderLeadTable() {
  const tableBody = document.getElementById('leadTableBody');
  if (!tableBody) return;

  const query = document.getElementById('searchInput')?.value?.trim().toLowerCase() || '';
  const filtered = state.leads.filter((lead) => {
    if (!query) return true;
    return Object.values(lead).some((value) => String(value).toLowerCase().includes(query));
  });

  tableBody.innerHTML = filtered
    .map(
      (lead) => `
        <tr>
          <td>${lead.businessName}</td>
          <td>${lead.city || 'Unverified'}</td>
          <td>${lead.discoveryPlatform}</td>
          <td>${lead.potentialService}</td>
          <td>${lead.leadScore}</td>
          <td>${lead.status}</td>
          <td><button class="table-btn" data-action="preview" data-id="${lead.id}">View</button></td>
        </tr>
      `
    )
    .join('');
}

function renderMetaAds() {
  const list = document.getElementById('metaAdsList');
  if (!list) return;

  list.innerHTML = mockMetaAds
    .map(
      (ad) => `
        <div class="lead-card">
          <h3>${ad.advertiserName}</h3>
          <div class="lead-meta">
            <span class="badge">${ad.industry}</span>
            <span class="badge">${ad.confidence} confidence</span>
            <span class="badge">${ad.adReference}</span>
          </div>
          <p><strong>Observation:</strong> ${ad.observation}</p>
          <p><strong>Possible opportunity:</strong> ${ad.serviceOpportunity}</p>
          <p><strong>Why my offer could be relevant:</strong> ${ad.whyRelevant}</p>
          <div class="message-box">
            <strong>Suggested outreach:</strong><br />
            ${ad.outreachDraft}
          </div>
        </div>
      `
    )
    .join('');
}

function renderDrafts() {
  const draftList = document.getElementById('draftList');
  if (!draftList) return;

  draftList.innerHTML = state.leads
    .map(
      (lead) => `
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
      `
    )
    .join('');
}

function renderApprovalQueue() {
  const approvalList = document.getElementById('approvalList');
  if (!approvalList) return;

  const pending = state.leads.filter((lead) => lead.status === 'READY FOR APPROVAL' || !lead.approved);

  approvalList.innerHTML = pending.length
    ? pending
        .map(
          (lead) => `
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
          `
        )
        .join('')
    : '<div class="lead-card"><p>No messages awaiting approval.</p></div>';
}

function renderTracker() {
  const trackerList = document.getElementById('trackerList');
  if (!trackerList) return;

  trackerList.innerHTML = state.leads
    .map(
      (lead) => `
        <div class="lead-card">
          <h3>${lead.businessName}</h3>
          <div class="lead-meta">
            <span class="badge">${lead.outreachStatus || lead.status}</span>
            <span class="badge">${lead.replyReceived}</span>
          </div>
          <p><strong>Next action:</strong> ${lead.nextAction}</p>
          <p><strong>Follow-up date:</strong> ${lead.followUpDate || 'Not scheduled'}</p>
        </div>
      `
    )
    .join('');
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

function addLead(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const lead = {
    id: crypto.randomUUID(),
    businessName: formData.get('businessName')?.toString().trim() || 'Unknown business',
    category: formData.get('category')?.toString().trim() || 'Unspecified',
    country: formData.get('country')?.toString().trim() || 'India',
    city: formData.get('city')?.toString().trim() || 'Unverified',
    discoveryPlatform: formData.get('discoveryPlatform')?.toString() || 'Instagram',
    website: formData.get('website')?.toString().trim() || 'Unverified',
    publicContact: formData.get('publicContact')?.toString().trim() || 'Unverified',
    potentialService: formData.get('potentialService')?.toString() || 'Canva social media design',
    opportunity: formData.get('opportunity')?.toString().trim() || 'Unspecified opportunity',
    evidence: formData.get('evidence')?.toString().trim() || 'Unverified',
    leadScore: Number(formData.get('leadScore') || 0),
    status: formData.get('status')?.toString() || 'NEW',
    personalizedOpeningMessage: `Hi ${formData.get('businessName')}, I noticed ${formData.get('opportunity')?.toString().trim() || 'a relevant opportunity'}. I help small businesses create clean, practical Canva-based creative packages for social media and promotions. If it helps, I can share a few simple design ideas or sample concepts for your next campaign.`,
    recommendedServiceOffer: formData.get('potentialService')?.toString() || 'Social Media Starter',
    suggestedPriceInr: '₹3,000–₹10,000',
    outreachStatus: 'NEW',
    lastContactDate: '',
    followUpDate: '',
    replyReceived: 'No',
    nextAction: 'Review lead and draft message',
    estimatedDealValue: '₹5,000',
    approved: false,
    messageSent: false,
    messageDraft: `Hi ${formData.get('businessName')}, I noticed ${formData.get('opportunity')?.toString().trim() || 'a relevant opportunity'} and I think a polished Canva-based design package could help. I work with small businesses to create clean promotional creatives, story layouts, and branded social content. If helpful, I can share a couple of sample concepts for your next campaign.`
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
    lead.nextAction = 'Message ready to send after user approval';
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
    'Website',
    'Public contact method',
    'Potential service required',
    'Opportunity identified',
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

function renderAll() {
  renderStats();
  renderLeadTable();
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
}

wireEvents();
renderAll();
showSection('overview');
