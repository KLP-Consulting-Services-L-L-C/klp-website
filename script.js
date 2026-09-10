// KLP Consulting Services & Leadership Drift Interactive Engine

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#0b132b';
        navLinks.style.padding = '24px';
        navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        navLinks.style.gap = '20px';
      }
    });
  }

  // 2. Interactive Drift Diagnostic Calculator
  const diagnosticForm = document.getElementById('drift-diagnostic-form');
  const diagnosticResult = document.getElementById('diagnostic-result');

  if (diagnosticForm && diagnosticResult) {
    diagnosticForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const q1 = parseInt(document.querySelector('input[name="q1"]:checked')?.value || 0);
      const q2 = parseInt(document.querySelector('input[name="q2"]:checked')?.value || 0);
      const q3 = parseInt(document.querySelector('input[name="q3"]:checked')?.value || 0);
      const q4 = parseInt(document.querySelector('input[name="q4"]:checked')?.value || 0);

      const totalScore = q1 + q2 + q3 + q4;
      let riskLevel = '';
      let riskColor = '';
      let recommendation = '';
      let recommendedTool = '';

      if (totalScore <= 6) {
        riskLevel = 'Low Drift (Healthy Alignment)';
        riskColor = '#10b981';
        recommendation = 'Your team has strong operating discipline. Continue using regular checkpoints and quarterly autopsies to maintain high velocity.';
        recommendedTool = 'Leadership Behavioral Contract';
      } else if (totalScore <= 11) {
        riskLevel = 'Moderate Drift (Operational Seam Friction)';
        riskColor = '#f59e0b';
        recommendation = 'Friction is emerging at handoff points and priority creep is diluting focus. We recommend formalizing decision rights and enforcing capacity trade-offs.';
        recommendedTool = 'Priority Kill Switch & Seam Handoff Standard';
      } else {
        riskLevel = 'Severe Drift (Structural Overload & Misalignment)';
        riskColor = '#ef4444';
        recommendation = 'Critical priority overload and ambiguous decision authority are exhausting key talent. A structured Executive Alignment Rollout or Guided Workshop with Kristen Peloquin is urgently recommended.';
        recommendedTool = 'Decision Architecture Matrix & Complete Toolbox Bundle';
      }

      diagnosticResult.innerHTML = `
        <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 24px; margin-top: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.06);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b;">Audit Result</span>
            <span style="background: ${riskColor}; color: #fff; font-weight: 700; font-size: 0.8rem; padding: 4px 12px; border-radius: 20px;">${riskLevel}</span>
          </div>
          <h4 style="font-size: 1.3rem; color: #0b132b; margin-bottom: 8px;">Friction Score: ${totalScore} / 16</h4>
          <p style="font-size: 0.95rem; color: #475569; margin-bottom: 16px;">${recommendation}</p>
          <div style="background: #f8fafd; border-left: 3.5px solid #c59b27; padding: 12px; border-radius: 0 6px 6px 0; margin-bottom: 16px;">
            <strong style="color: #0b132b; font-size: 0.9rem;">Recommended First Step:</strong>
            <p style="font-size: 0.88rem; color: #334155; margin-top: 2px;">Deploy the <strong>${recommendedTool}</strong> from your tools download bundle.</p>
          </div>
          <div style="display: flex; gap: 12px;">
            <a href="tools.html" class="btn btn-primary btn-sm">Download Recommended Tool</a>
            <a href="schedule.html" class="btn btn-outline btn-sm">Schedule Executive Debrief</a>
          </div>
        </div>
      `;
      diagnosticResult.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 3. Reader Portal Gating & Frictionless Unlock Logic
  // =========================================================================
  const portalForm = document.getElementById('reader-portal-form');
  const lockedGate = document.getElementById('portal-locked-gate');
  const unlockedContent = document.getElementById('portal-unlocked-content');
  const welcomeReaderName = document.getElementById('welcome-reader-name');
  const welcomeReaderEmail = document.getElementById('welcome-reader-email');
  const lockPortalLink = document.getElementById('lock-portal-link');

  function showUnlockedPortal(name, email) {
    if (lockedGate && unlockedContent) {
      lockedGate.style.display = 'none';
      unlockedContent.style.display = 'block';
      if (welcomeReaderName && name) {
        welcomeReaderName.textContent = name;
      }
      if (welcomeReaderEmail && email) {
        welcomeReaderEmail.textContent = email;
      }
    }
  }

  function lockPortal() {
    sessionStorage.removeItem('klp_reader_verified_name');
    sessionStorage.removeItem('klp_reader_verified_email');
    localStorage.removeItem('klp_reader_verified_name');
    localStorage.removeItem('klp_reader_verified_email');
    localStorage.removeItem('klp_reader_unlocked');
    if (lockedGate && unlockedContent) {
      unlockedContent.style.display = 'none';
      lockedGate.style.display = 'block';
      lockedGate.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (lockPortalLink) {
    lockPortalLink.addEventListener('click', (e) => {
      e.preventDefault();
      lockPortal();
    });
  }

  // Check if previously verified in session or local storage
  const savedReaderName = sessionStorage.getItem('klp_reader_verified_name') || localStorage.getItem('klp_reader_verified_name');
  const savedReaderEmail = sessionStorage.getItem('klp_reader_verified_email') || localStorage.getItem('klp_reader_verified_email');
  const isUnlocked = localStorage.getItem('klp_reader_unlocked') === 'true';

  if ((savedReaderName || isUnlocked) && unlockedContent) {
    showUnlockedPortal(savedReaderName || 'Reader', savedReaderEmail || '');
  }

  if (portalForm) {
    portalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('reader-name')?.value.trim() || 'Reader';
      const emailInput = document.getElementById('reader-email')?.value.trim() || '';
      const confirmedCheck = document.getElementById('reader-confirmed');

      if (confirmedCheck && !confirmedCheck.checked) {
        alert('Please confirm that you have purchased or read Leadership Drift to access the companion tools.');
        return;
      }

      // Save unlocked state
      sessionStorage.setItem('klp_reader_verified_name', nameInput);
      sessionStorage.setItem('klp_reader_verified_email', emailInput);
      localStorage.setItem('klp_reader_verified_name', nameInput);
      localStorage.setItem('klp_reader_verified_email', emailInput);
      localStorage.setItem('klp_reader_unlocked', 'true');

      // Track conversion event
      trackEvent('reader_portal_unlock', {
        reader_name: nameInput,
        reader_email: emailInput
      });

      // Reveal the unlocked portal
      showUnlockedPortal(nameInput, emailInput);
      unlockedContent.scrollIntoView({ behavior: 'smooth' });

      // Automatically trigger initial download
      const downloadLink = document.createElement('a');
      downloadLink.href = 'downloads/Leadership_Drift_Complete_Toolbox.pdf';
      downloadLink.download = 'Leadership_Drift_Complete_Toolbox.pdf';
      downloadLink.target = '_blank';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  // =========================================================================
  // 4. Client-Side Measurement & Event Tracking
  // =========================================================================
  function trackEvent(eventName, eventParams = {}) {
    // Log to console for debugging/audit
    console.log(`[KLP Analytics] ${eventName}:`, eventParams);

    // Send to Google Analytics 4 if initialized
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }
  }

  // Track Amazon Book Purchase Clicks
  document.querySelectorAll('a[href*="amazon.com"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const isKindle = href.includes('B0HHB4QQR8') || link.textContent.toLowerCase().includes('kindle');
      const edition = isKindle ? 'kindle' : 'paperback';
      
      trackEvent('amazon_book_click', {
        edition: edition,
        target_url: href,
        button_text: link.textContent.trim(),
        source_page: window.location.pathname
      });
    });
  });

  // Track Goodreads Clicks
  document.querySelectorAll('a[href*="goodreads.com"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('goodreads_click', {
        source_page: window.location.pathname,
        button_text: link.textContent.trim()
      });
    });
  });

  // Track Schedule Discovery / Consultation Clicks
  document.querySelectorAll('a[href*="schedule.html"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('schedule_discovery_click', {
        source_page: window.location.pathname,
        button_text: link.textContent.trim()
      });
    });
  });

  // Track Tool Downloads
  document.querySelectorAll('a[download], a[href*="downloads/"]').forEach((link) => {
    link.addEventListener('click', () => {
      const fileName = link.getAttribute('download') || link.getAttribute('href').split('/').pop();
      trackEvent('reader_tool_download', {
        file_name: fileName,
        source_page: window.location.pathname
      });
    });
  });
});